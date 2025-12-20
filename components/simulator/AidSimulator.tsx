'use client'

import { useState, useCallback, useMemo } from 'react'
import Publicodes from 'publicodes'
import rules from 'mesaidesreno'
import { Button } from '@/components/ui/Button'

// Types
interface SimulatorData {
  // Property status
  proprietaireStatut: 'proprietaire' | 'bailleur' | ''
  // Housing type
  logementType: 'maison' | 'appartement' | ''
  // Location
  codePostal: string
  isIleDeFrance: boolean
  // Housing details
  surface: number
  anneeConstruction: number
  // DPE
  dpeActuel: number // 1=A to 7=G
  dpeVise: number
  // Household
  nombrePersonnes: number
  revenuFiscal: number
  // Work type
  typesTravaux: string[]
  // Contact (for blur reveal)
  nom: string
  telephone: string
  email: string
}

interface AidResult {
  id: string
  name: string
  icon: string
  eligible: boolean
  amount: number | null
  description: string
}

const initialData: SimulatorData = {
  proprietaireStatut: '',
  logementType: '',
  codePostal: '',
  isIleDeFrance: false,
  surface: 0,
  anneeConstruction: 0,
  dpeActuel: 5,
  dpeVise: 2,
  nombrePersonnes: 2,
  revenuFiscal: 0,
  typesTravaux: [],
  nom: '',
  telephone: '',
  email: '',
}

const DPE_LABELS = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
const DPE_COLORS = ['#319834', '#55a037', '#8dbe3c', '#f5eb41', '#f0b540', '#ec8235', '#d7221f']

const TRAVAUX_OPTIONS = [
  { id: 'isolation-murs-ext', label: 'Isolation murs extérieurs (ITE)', rule: 'gestes . isolation . murs extérieurs' },
  { id: 'isolation-murs-int', label: 'Isolation murs intérieurs (ITI)', rule: 'gestes . isolation . murs intérieurs' },
  { id: 'isolation-combles', label: 'Isolation combles / rampants', rule: 'gestes . isolation . rampants' },
  { id: 'isolation-plancher', label: 'Isolation plancher bas', rule: 'gestes . isolation . plancher bas' },
  { id: 'fenêtres', label: 'Remplacement fenêtres', rule: 'gestes . isolation . vitres' },
  { id: 'pac-air-eau', label: 'Pompe à chaleur air-eau', rule: 'gestes . chauffage . PAC . air-eau' },
  { id: 'chauffe-eau-thermo', label: 'Chauffe-eau thermodynamique', rule: 'gestes . chauffage . chauffe-eau thermodynamique' },
  { id: 'vmc', label: 'VMC double flux', rule: 'gestes . ventilation . double flux' },
  { id: 'poele-granules', label: 'Poêle à granulés', rule: 'gestes . chauffage . bois . poêle . à granulés' },
]

export function AidSimulator() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState<SimulatorData>(initialData)
  const [showResults, setShowResults] = useState(false)
  const [contactSubmitted, setContactSubmitted] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)
  const [results, setResults] = useState<AidResult[]>([])

  const updateData = useCallback((updates: Partial<SimulatorData>) => {
    setData(prev => ({ ...prev, ...updates }))
  }, [])

  const calculateAids = useCallback(() => {
    setIsCalculating(true)

    try {
      const engine = new Publicodes(rules)

      // Build situation object
      const situation: Record<string, string | number> = {
        'vous . propriétaire . statut': `'${data.proprietaireStatut}'`,
        'logement . type': `'${data.logementType}'`,
        'logement . surface': `${data.surface} m2`,
        'logement . année de construction': data.anneeConstruction,
        'ménage . personnes': `${data.nombrePersonnes} personne`,
        'ménage . revenu': `${data.revenuFiscal} €`,
        'DPE . actuel': data.dpeActuel,
        'projet . DPE visé': data.dpeVise,
        'logement . propriétaire occupant': data.proprietaireStatut === 'proprietaire' ? 'oui' : 'non',
        'logement . résidence principale': 'oui',
      }

      // Add Île-de-France region if applicable
      if (data.isIleDeFrance) {
        situation['ménage . région . IdF'] = 'oui'
        situation['ménage . code région'] = '"11"'
      }

      engine.setSituation(situation)

      const aidResults: AidResult[] = []

      // Check MPR accompagnée
      try {
        const mprAccompagneeEligible = engine.evaluate('MPR . accompagnée . éligible')
        const mprAccompagneeMontant = engine.evaluate('MPR . accompagnée . montant')
        aidResults.push({
          id: 'mpr-accompagnee',
          name: 'MaPrimeRénov\' Accompagnée',
          icon: '/images/logos/maprimerenov.svg',
          eligible: mprAccompagneeEligible.nodeValue === true,
          amount: typeof mprAccompagneeMontant.nodeValue === 'number' ? mprAccompagneeMontant.nodeValue : null,
          description: 'Aide pour une rénovation globale avec accompagnement',
        })
      } catch {
        aidResults.push({
          id: 'mpr-accompagnee',
          name: 'MaPrimeRénov\' Accompagnée',
          icon: '/images/logos/maprimerenov.svg',
          eligible: false,
          amount: null,
          description: 'Aide pour une rénovation globale avec accompagnement',
        })
      }

      // Check MPR par gestes
      try {
        const mprGestesEligible = engine.evaluate('MPR . non accompagnée . éligible')
        const mprGestesMontant = engine.evaluate('MPR . non accompagnée . montant')
        aidResults.push({
          id: 'mpr-gestes',
          name: 'MaPrimeRénov\' par gestes',
          icon: '/images/logos/maprimerenov.svg',
          eligible: mprGestesEligible.nodeValue === true,
          amount: typeof mprGestesMontant.nodeValue === 'number' ? mprGestesMontant.nodeValue : null,
          description: 'Aide pour des travaux spécifiques',
        })
      } catch {
        aidResults.push({
          id: 'mpr-gestes',
          name: 'MaPrimeRénov\' par gestes',
          icon: '/images/logos/maprimerenov.svg',
          eligible: false,
          amount: null,
          description: 'Aide pour des travaux spécifiques',
        })
      }

      // Check CEE for selected works
      const selectedTravaux = TRAVAUX_OPTIONS.filter(t => data.typesTravaux.includes(t.id))
      let totalCEE = 0
      let ceeEligible = false

      for (const travail of selectedTravaux) {
        try {
          const ceeMontant = engine.evaluate(`${travail.rule} . CEE . montant`)
          if (typeof ceeMontant.nodeValue === 'number' && ceeMontant.nodeValue > 0) {
            totalCEE += ceeMontant.nodeValue
            ceeEligible = true
          }
        } catch {
          // CEE not available for this work type
        }
      }

      aidResults.push({
        id: 'cee',
        name: 'CEE (Prime énergie)',
        icon: '/images/logos/cee.svg',
        eligible: ceeEligible,
        amount: totalCEE > 0 ? totalCEE : null,
        description: 'Certificats d\'Économies d\'Énergie',
      })

      // Check PTZ
      try {
        const ptzMontant = engine.evaluate('PTZ . montant')
        aidResults.push({
          id: 'ptz',
          name: 'Éco-PTZ',
          icon: '/images/logos/eco-ptz.svg',
          eligible: typeof ptzMontant.nodeValue === 'number' && ptzMontant.nodeValue > 0,
          amount: typeof ptzMontant.nodeValue === 'number' ? ptzMontant.nodeValue : null,
          description: 'Prêt à taux zéro pour la rénovation',
        })
      } catch {
        aidResults.push({
          id: 'ptz',
          name: 'Éco-PTZ',
          icon: '/images/logos/eco-ptz.svg',
          eligible: true, // PTZ is generally available
          amount: 50000, // Max PTZ amount
          description: 'Prêt à taux zéro pour la rénovation',
        })
      }

      // TVA 5.5% - always eligible for renovation works
      aidResults.push({
        id: 'tva',
        name: 'TVA réduite 5,5%',
        icon: '/images/logos/tva.svg',
        eligible: data.anneeConstruction < new Date().getFullYear() - 2,
        amount: null,
        description: 'TVA réduite sur les travaux de rénovation énergétique',
      })

      // Check local aids
      try {
        const aidesLocalesMontant = engine.evaluate('aides locales . montant')
        aidResults.push({
          id: 'aides-locales',
          name: 'Aides locales',
          icon: '/images/logos/region.svg',
          eligible: typeof aidesLocalesMontant.nodeValue === 'number' && aidesLocalesMontant.nodeValue > 0,
          amount: typeof aidesLocalesMontant.nodeValue === 'number' ? aidesLocalesMontant.nodeValue : null,
          description: 'Aides de la région Grand Est et collectivités',
        })
      } catch {
        aidResults.push({
          id: 'aides-locales',
          name: 'Aides locales',
          icon: '/images/logos/region.svg',
          eligible: false,
          amount: null,
          description: 'Aides de la région Grand Est et collectivités',
        })
      }

      setResults(aidResults)
    } catch (error) {
      console.error('Error calculating aids:', error)
      // Set default results on error
      setResults([
        { id: 'mpr-accompagnee', name: 'MaPrimeRénov\' Accompagnée', icon: '/images/logos/maprimerenov.svg', eligible: false, amount: null, description: 'Aide pour une rénovation globale' },
        { id: 'mpr-gestes', name: 'MaPrimeRénov\' par gestes', icon: '/images/logos/maprimerenov.svg', eligible: false, amount: null, description: 'Aide pour des travaux spécifiques' },
        { id: 'cee', name: 'CEE (Prime énergie)', icon: '/images/logos/cee.svg', eligible: false, amount: null, description: 'Certificats d\'Économies d\'Énergie' },
        { id: 'ptz', name: 'Éco-PTZ', icon: '/images/logos/eco-ptz.svg', eligible: true, amount: 50000, description: 'Prêt à taux zéro' },
        { id: 'tva', name: 'TVA réduite 5,5%', icon: '/images/logos/tva.svg', eligible: true, amount: null, description: 'TVA réduite' },
        { id: 'aides-locales', name: 'Aides locales', icon: '/images/logos/region.svg', eligible: false, amount: null, description: 'Aides locales' },
      ])
    } finally {
      setIsCalculating(false)
      setShowResults(true)
    }
  }, [data])

  const handleContactSubmit = useCallback(() => {
    // Log data to console (will be replaced by email in production)
    console.log('=== SIMULATION AIDES - CONTACT SOUMIS ===')
    console.log('Contact:', {
      nom: data.nom,
      telephone: data.telephone,
      email: data.email,
    })
    console.log('Simulation:', {
      proprietaireStatut: data.proprietaireStatut,
      logementType: data.logementType,
      codePostal: data.codePostal,
      surface: data.surface,
      anneeConstruction: data.anneeConstruction,
      dpeActuel: DPE_LABELS[data.dpeActuel - 1],
      dpeVise: DPE_LABELS[data.dpeVise - 1],
      nombrePersonnes: data.nombrePersonnes,
      revenuFiscal: data.revenuFiscal,
      typesTravaux: data.typesTravaux,
    })
    console.log('Résultats:', results)
    console.log('==========================================')

    setContactSubmitted(true)
  }, [data, results])

  const totalAids = useMemo(() => {
    return results
      .filter(r => r.eligible && r.amount !== null)
      .reduce((sum, r) => sum + (r.amount || 0), 0)
  }, [results])

  const nextStep = () => setStep(prev => prev + 1)
  const prevStep = () => setStep(prev => prev - 1)

  // Step content
  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gammart-green-dark">Êtes-vous propriétaire ?</h3>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => { updateData({ proprietaireStatut: 'proprietaire' }); nextStep() }}
                className={`p-6 rounded-xl border-2 transition-all ${data.proprietaireStatut === 'proprietaire' ? 'border-gammart-green-dark bg-gammart-green-dark/5' : 'border-gray-200 hover:border-gammart-green-leaf'}`}
              >
                <div className="text-4xl mb-2">🏠</div>
                <div className="font-semibold text-gammart-green-dark">Propriétaire occupant</div>
                <div className="text-sm text-gray-500">J&apos;habite dans mon logement</div>
              </button>
              <button
                onClick={() => { updateData({ proprietaireStatut: 'bailleur' }); nextStep() }}
                className={`p-6 rounded-xl border-2 transition-all ${data.proprietaireStatut === 'bailleur' ? 'border-gammart-green-dark bg-gammart-green-dark/5' : 'border-gray-200 hover:border-gammart-green-leaf'}`}
              >
                <div className="text-4xl mb-2">🔑</div>
                <div className="font-semibold text-gammart-green-dark">Propriétaire bailleur</div>
                <div className="text-sm text-gray-500">Je loue mon logement</div>
              </button>
            </div>
          </div>
        )

      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gammart-green-dark">Quel type de logement ?</h3>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => { updateData({ logementType: 'maison' }); nextStep() }}
                className={`p-6 rounded-xl border-2 transition-all ${data.logementType === 'maison' ? 'border-gammart-green-dark bg-gammart-green-dark/5' : 'border-gray-200 hover:border-gammart-green-leaf'}`}
              >
                <div className="text-4xl mb-2">🏡</div>
                <div className="font-semibold text-gammart-green-dark">Maison</div>
                <div className="text-sm text-gray-500">Maison individuelle</div>
              </button>
              <button
                onClick={() => { updateData({ logementType: 'appartement' }); nextStep() }}
                className={`p-6 rounded-xl border-2 transition-all ${data.logementType === 'appartement' ? 'border-gammart-green-dark bg-gammart-green-dark/5' : 'border-gray-200 hover:border-gammart-green-leaf'}`}
              >
                <div className="text-4xl mb-2">🏢</div>
                <div className="font-semibold text-gammart-green-dark">Appartement</div>
                <div className="text-sm text-gray-500">En copropriété</div>
              </button>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gammart-green-dark">Où se situe votre logement ?</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Code postal</label>
                <input
                  type="text"
                  value={data.codePostal}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '').slice(0, 5)
                    updateData({
                      codePostal: value,
                      isIleDeFrance: value.startsWith('75') || value.startsWith('77') || value.startsWith('78') || value.startsWith('91') || value.startsWith('92') || value.startsWith('93') || value.startsWith('94') || value.startsWith('95')
                    })
                  }}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gammart-green-dark focus:outline-none text-lg"
                  placeholder="67000"
                />
              </div>
              {data.codePostal.length === 5 && (
                <div className="p-4 bg-gammart-beige rounded-xl">
                  <p className="text-sm text-gammart-green-dark">
                    {data.isIleDeFrance ? '📍 Région Île-de-France détectée' : '📍 Hors Île-de-France'}
                  </p>
                </div>
              )}
            </div>
            <div className="flex justify-between pt-4">
              <button onClick={prevStep} className="px-6 py-2 text-gray-600 hover:text-gammart-green-dark">← Retour</button>
              <button
                onClick={nextStep}
                disabled={data.codePostal.length !== 5}
                className="px-6 py-3 bg-gammart-green-dark text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gammart-green-leaf transition-colors"
              >
                Continuer →
              </button>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gammart-green-dark">Caractéristiques du logement</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Surface habitable (m²)</label>
                <input
                  type="number"
                  value={data.surface || ''}
                  onChange={(e) => updateData({ surface: parseInt(e.target.value) || 0 })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gammart-green-dark focus:outline-none text-lg"
                  placeholder="100"
                  min={1}
                  max={500}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Année de construction</label>
                <input
                  type="number"
                  value={data.anneeConstruction || ''}
                  onChange={(e) => updateData({ anneeConstruction: parseInt(e.target.value) || 0 })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gammart-green-dark focus:outline-none text-lg"
                  placeholder="1975"
                  min={1800}
                  max={new Date().getFullYear()}
                />
              </div>
            </div>
            <div className="flex justify-between pt-4">
              <button onClick={prevStep} className="px-6 py-2 text-gray-600 hover:text-gammart-green-dark">← Retour</button>
              <button
                onClick={nextStep}
                disabled={!data.surface || !data.anneeConstruction}
                className="px-6 py-3 bg-gammart-green-dark text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gammart-green-leaf transition-colors"
              >
                Continuer →
              </button>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gammart-green-dark">Classe énergétique (DPE)</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">DPE actuel de votre logement</label>
                <div className="flex gap-2">
                  {DPE_LABELS.map((label, index) => (
                    <button
                      key={label}
                      onClick={() => updateData({ dpeActuel: index + 1 })}
                      className={`flex-1 py-3 rounded-lg font-bold text-white transition-all ${data.dpeActuel === index + 1 ? 'ring-4 ring-offset-2 ring-gray-400 scale-105' : 'opacity-70 hover:opacity-100'}`}
                      style={{ backgroundColor: DPE_COLORS[index] }}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">DPE visé après travaux</label>
                <div className="flex gap-2">
                  {DPE_LABELS.slice(0, 5).map((label, index) => (
                    <button
                      key={label}
                      onClick={() => updateData({ dpeVise: index + 1 })}
                      disabled={index + 1 >= data.dpeActuel}
                      className={`flex-1 py-3 rounded-lg font-bold text-white transition-all ${data.dpeVise === index + 1 ? 'ring-4 ring-offset-2 ring-gray-400 scale-105' : ''} ${index + 1 >= data.dpeActuel ? 'opacity-30 cursor-not-allowed' : 'opacity-70 hover:opacity-100'}`}
                      style={{ backgroundColor: DPE_COLORS[index] }}
                    >
                      {label}
                    </button>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-2">Gain de {data.dpeActuel - data.dpeVise} classe(s) énergétique(s)</p>
              </div>
            </div>
            <div className="flex justify-between pt-4">
              <button onClick={prevStep} className="px-6 py-2 text-gray-600 hover:text-gammart-green-dark">← Retour</button>
              <button
                onClick={nextStep}
                disabled={data.dpeVise >= data.dpeActuel}
                className="px-6 py-3 bg-gammart-green-dark text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gammart-green-leaf transition-colors"
              >
                Continuer →
              </button>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gammart-green-dark">Composition du ménage</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre de personnes dans le foyer</label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => updateData({ nombrePersonnes: Math.max(1, data.nombrePersonnes - 1) })}
                    className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 text-xl font-bold"
                  >
                    -
                  </button>
                  <span className="text-3xl font-bold text-gammart-green-dark w-16 text-center">{data.nombrePersonnes}</span>
                  <button
                    onClick={() => updateData({ nombrePersonnes: Math.min(10, data.nombrePersonnes + 1) })}
                    className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 text-xl font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Revenu fiscal de référence (€/an)</label>
                <input
                  type="number"
                  value={data.revenuFiscal || ''}
                  onChange={(e) => updateData({ revenuFiscal: parseInt(e.target.value) || 0 })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gammart-green-dark focus:outline-none text-lg"
                  placeholder="25000"
                  min={0}
                />
                <p className="text-xs text-gray-500 mt-1">Disponible sur votre avis d&apos;imposition</p>
              </div>
            </div>
            <div className="flex justify-between pt-4">
              <button onClick={prevStep} className="px-6 py-2 text-gray-600 hover:text-gammart-green-dark">← Retour</button>
              <button
                onClick={nextStep}
                disabled={!data.revenuFiscal}
                className="px-6 py-3 bg-gammart-green-dark text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gammart-green-leaf transition-colors"
              >
                Continuer →
              </button>
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gammart-green-dark">Quels travaux envisagez-vous ?</h3>
            <div className="grid gap-3">
              {TRAVAUX_OPTIONS.map((travail) => (
                <button
                  key={travail.id}
                  onClick={() => {
                    const newTravaux = data.typesTravaux.includes(travail.id)
                      ? data.typesTravaux.filter(t => t !== travail.id)
                      : [...data.typesTravaux, travail.id]
                    updateData({ typesTravaux: newTravaux })
                  }}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${data.typesTravaux.includes(travail.id) ? 'border-gammart-green-dark bg-gammart-green-dark/5' : 'border-gray-200 hover:border-gammart-green-leaf'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${data.typesTravaux.includes(travail.id) ? 'border-gammart-green-dark bg-gammart-green-dark' : 'border-gray-300'}`}>
                      {data.typesTravaux.includes(travail.id) && (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className="font-medium text-gammart-green-dark">{travail.label}</span>
                  </div>
                </button>
              ))}
            </div>
            <div className="flex justify-between pt-4">
              <button onClick={prevStep} className="px-6 py-2 text-gray-600 hover:text-gammart-green-dark">← Retour</button>
              <button
                onClick={calculateAids}
                disabled={data.typesTravaux.length === 0 || isCalculating}
                className="px-6 py-3 bg-gammart-green-dark text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gammart-green-leaf transition-colors"
              >
                {isCalculating ? 'Calcul en cours...' : 'Voir mes aides →'}
              </button>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  // Results view
  if (showResults) {
    const eligibleCount = results.filter(r => r.eligible).length

    return (
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gammart-green-dark/10 rounded-full mb-4">
            <span className="text-2xl">🎉</span>
            <span className="font-semibold text-gammart-green-dark">Résultats de votre simulation</span>
          </div>
          <h3 className="text-3xl font-bold text-gammart-green-dark">
            Vous êtes éligible à {eligibleCount} aide{eligibleCount > 1 ? 's' : ''}
          </h3>
        </div>

        {/* Results grid */}
        <div className="grid gap-4">
          {results.map((aid) => (
            <div
              key={aid.id}
              className={`p-6 rounded-2xl border-2 ${aid.eligible ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-50'}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Icon placeholder */}
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${aid.eligible ? 'bg-green-100' : 'bg-gray-200'}`}>
                    {aid.eligible ? (
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h4 className={`font-bold text-lg ${aid.eligible ? 'text-green-800' : 'text-gray-500'}`}>
                      {aid.name}
                    </h4>
                    <p className="text-sm text-gray-600">{aid.description}</p>
                  </div>
                </div>
                {/* Amount - blurred if not submitted */}
                {aid.eligible && aid.amount !== null && (
                  <div className="text-right">
                    <div className={`text-2xl font-bold text-green-600 ${!contactSubmitted ? 'blur-md select-none' : ''}`}>
                      {aid.amount.toLocaleString('fr-FR')} €
                    </div>
                    {!contactSubmitted && (
                      <p className="text-xs text-gray-500">Montant masqué</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Total */}
        {totalAids > 0 && (
          <div className="p-6 rounded-2xl bg-gammart-green-dark text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gammart-green-sage">Estimation totale des aides</p>
                <p className="text-sm text-white/70">Montant maximum cumulable</p>
              </div>
              <div className={`text-4xl font-bold ${!contactSubmitted ? 'blur-lg select-none' : ''}`}>
                {totalAids.toLocaleString('fr-FR')} €
              </div>
            </div>
          </div>
        )}

        {/* Contact form to reveal amounts */}
        {!contactSubmitted && (
          <div className="p-6 rounded-2xl bg-gammart-beige">
            <h4 className="text-xl font-bold text-gammart-green-dark mb-4">
              Recevez vos résultats détaillés
            </h4>
            <p className="text-gray-600 mb-6">
              Remplissez vos coordonnées pour voir les montants exacts et recevoir un récapitulatif par email.
            </p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                <input
                  type="text"
                  value={data.nom}
                  onChange={(e) => updateData({ nom: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gammart-green-dark focus:outline-none"
                  placeholder="Jean Dupont"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                <input
                  type="tel"
                  value={data.telephone}
                  onChange={(e) => updateData({ telephone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gammart-green-dark focus:outline-none"
                  placeholder="06 12 34 56 78"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={data.email}
                  onChange={(e) => updateData({ email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gammart-green-dark focus:outline-none"
                  placeholder="jean.dupont@email.com"
                />
              </div>
              <button
                onClick={handleContactSubmit}
                disabled={!data.nom || !data.telephone || !data.email}
                className="w-full py-4 bg-gammart-green-dark text-white rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gammart-green-leaf transition-colors"
              >
                Voir les montants exacts
              </button>
            </div>
          </div>
        )}

        {/* CTA after submission */}
        {contactSubmitted && (
          <div className="text-center space-y-4">
            <p className="text-gray-600">
              Un conseiller Gammart Habitat vous contactera pour vous accompagner dans vos démarches.
            </p>
            <Button href="/contact" variant="primary" size="lg" glow>
              Demander un devis personnalisé
            </Button>
          </div>
        )}

        {/* Restart button */}
        <div className="text-center">
          <button
            onClick={() => {
              setStep(0)
              setData(initialData)
              setShowResults(false)
              setContactSubmitted(false)
              setResults([])
            }}
            className="text-gammart-green-dark hover:underline"
          >
            ← Recommencer la simulation
          </button>
        </div>
      </div>
    )
  }

  // Progress bar
  const progress = ((step + 1) / 7) * 100

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
          <span>Étape {step + 1} / 7</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gammart-green-dark transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Step content */}
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        {renderStep()}
      </div>
    </div>
  )
}

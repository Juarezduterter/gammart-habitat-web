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

// Gestes d'isolation soumis à la condition de couplage en maison individuelle
// (doivent être couplés à un geste de chauffage/ECS pour bénéficier de MPR par gestes)
const ISOLATION_GESTES = [
  'isolation-murs-ext',
  'isolation-murs-int',
  'isolation-combles',
  'isolation-plancher',
]

// Gestes de chauffage/ECS qui permettent le couplage
const CHAUFFAGE_ECS_GESTES = [
  'pac-air-eau',
  'chauffe-eau-thermo',
  'poele-granules',
]

// Barèmes de revenus hors Île-de-France (2024)
// Format: [très modeste, modeste, intermédiaire] - au-delà = supérieur
const BAREME_REVENUS_PROVINCE = {
  1: [17173, 22015, 30844],
  2: [25115, 32197, 45340],
  3: [30206, 38719, 54592],
  4: [35285, 45234, 63844],
  5: [40388, 51775, 73098],
  // Par personne supplémentaire
  plus: [5094, 6525, 9254],
}

// Barèmes de revenus Île-de-France (2024)
const BAREME_REVENUS_IDF = {
  1: [23541, 28657, 40018],
  2: [34551, 42058, 58827],
  3: [41493, 50513, 70382],
  4: [48447, 58981, 82839],
  5: [55427, 67473, 94844],
  // Par personne supplémentaire
  plus: [6970, 8486, 12006],
}

// Tarifs MPR par gestes selon la classe de revenus (€/m²)
// Format: [très modeste, modeste, intermédiaire, supérieur]
const TARIFS_MPR_GESTES = {
  'isolation-murs-ext': { tarifs: [75, 60, 40, 0], maxSurface: 100 }, // ITE - max 100m²
  'isolation-murs-int': { tarifs: [25, 20, 15, 0], maxSurface: null }, // ITI
  'isolation-combles': { tarifs: [25, 20, 15, 0], maxSurface: null }, // Rampants/combles
  'isolation-plancher': { tarifs: [0, 0, 0, 0], maxSurface: null }, // Plancher bas (pas de MPR par gestes)
}

type ClasseRevenus = 'très modeste' | 'modeste' | 'intermédiaire' | 'supérieur'

// Fonction pour calculer la classe de revenus
function getClasseRevenus(revenu: number, personnes: number, isIdf: boolean): ClasseRevenus {
  const bareme = isIdf ? BAREME_REVENUS_IDF : BAREME_REVENUS_PROVINCE

  // Obtenir les seuils pour le nombre de personnes
  let seuils: number[]
  if (personnes <= 5) {
    seuils = bareme[personnes as 1 | 2 | 3 | 4 | 5]
  } else {
    // Plus de 5 personnes : seuils de 5 + (personnes - 5) * supplément
    const base = bareme[5]
    const supplement = personnes - 5
    seuils = [
      base[0] + supplement * bareme.plus[0],
      base[1] + supplement * bareme.plus[1],
      base[2] + supplement * bareme.plus[2],
    ]
  }

  if (revenu <= seuils[0]) return 'très modeste'
  if (revenu <= seuils[1]) return 'modeste'
  if (revenu <= seuils[2]) return 'intermédiaire'
  return 'supérieur'
}

// Fonction pour calculer le montant MPR par gestes
function calculateMprGestes(
  typesTravaux: string[],
  surface: number,
  classeRevenus: ClasseRevenus
): number {
  const classeIndex = {
    'très modeste': 0,
    'modeste': 1,
    'intermédiaire': 2,
    'supérieur': 3,
  }[classeRevenus]

  let total = 0

  for (const travail of typesTravaux) {
    const config = TARIFS_MPR_GESTES[travail as keyof typeof TARIFS_MPR_GESTES]
    if (config) {
      const tarif = config.tarifs[classeIndex]
      const surfaceApplicable = config.maxSurface
        ? Math.min(surface, config.maxSurface)
        : surface
      total += tarif * surfaceApplicable
    }
  }

  return total
}

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

      // Determine if owner-occupant or landlord
      const isOwnerOccupant = data.proprietaireStatut === 'proprietaire'

      // Build situation object for mesaidesreno model
      // Key fixes:
      // 1. Use 'propriétaire' (with accent) as the valid status value
      // 2. Booleans in Publicodes are 'oui'/'non' without quotes in the value
      // 3. Need to set résidence principale propriétaire or locataire based on status
      const situation: Record<string, string | number> = {
        // Owner status - both occupant and landlord are 'propriétaire' in the model
        'vous . propriétaire . statut': "'propriétaire'",

        // Housing type
        'logement . type': `'${data.logementType}'`,
        'logement . surface': `${data.surface} m2`,
        'logement . année de construction': data.anneeConstruction,

        // Household
        'ménage . personnes': `${data.nombrePersonnes} personne`,
        'ménage . revenu': `${data.revenuFiscal} €`,

        // DPE (1=A to 7=G)
        'DPE . actuel': data.dpeActuel,
        'projet . DPE visé': data.dpeVise,

        // Owner occupant vs landlord
        'logement . propriétaire occupant': isOwnerOccupant ? 'oui' : 'non',
      }

      // Set résidence principale based on owner type
      if (isOwnerOccupant) {
        situation['logement . résidence principale propriétaire'] = 'oui'
      } else {
        // For landlords, the tenant's primary residence
        situation['logement . résidence principale locataire'] = 'oui'
      }

      // Add region code - "11" is Île-de-France, others default to province
      // The model calculates 'ménage . région . IdF' from 'ménage . code région = "11"'
      if (data.isIleDeFrance) {
        situation['ménage . code région'] = '"11"'
      } else {
        // Use Grand Est code (44) as default for non-IdF
        situation['ménage . code région'] = '"44"'
      }

      // Add selected work types (gestes) to the situation
      // First, set all gestes to 'non' by default, then enable selected ones
      const allGestesRules = TRAVAUX_OPTIONS.map(t => t.rule)
      for (const rule of allGestesRules) {
        situation[rule] = 'non'
      }

      // Enable selected gestes
      const selectedTravaux = TRAVAUX_OPTIONS.filter(t => data.typesTravaux.includes(t.id))
      for (const travail of selectedTravaux) {
        situation[travail.rule] = 'oui'
      }

      engine.setSituation(situation)

      // Debug: log the situation and key evaluations
      console.log('=== SIMULATION DEBUG ===')
      console.log('Situation:', situation)

      const aidResults: AidResult[] = []

      // Debug: check common conditions
      try {
        const conditionsCommunes = engine.evaluate('conditions communes')
        const proprietaireCondition = engine.evaluate('vous . propriétaire . condition')
        const auMoins15Ans = engine.evaluate('logement . au moins 15 ans')
        const residencePrincipale = engine.evaluate('logement . résidence principale')
        const revenuClasse = engine.evaluate('ménage . revenu . classe')
        const sauts = engine.evaluate('sauts')

        console.log('Conditions communes:', conditionsCommunes.nodeValue)
        console.log('- Propriétaire condition:', proprietaireCondition.nodeValue)
        console.log('- Au moins 15 ans:', auMoins15Ans.nodeValue)
        console.log('- Résidence principale:', residencePrincipale.nodeValue)
        console.log('Revenu classe:', revenuClasse.nodeValue)
        console.log('Sauts DPE:', sauts.nodeValue)
      } catch (e) {
        console.log('Debug evaluation error:', e)
      }

      // Check MPR accompagnée
      try {
        const mprAccompagneeEligible = engine.evaluate('MPR . accompagnée . éligible')
        const mprAccompagneeMontant = engine.evaluate('MPR . accompagnée . montant')

        console.log('MPR Accompagnée - éligible:', mprAccompagneeEligible.nodeValue)
        console.log('MPR Accompagnée - montant:', mprAccompagneeMontant.nodeValue)

        aidResults.push({
          id: 'mpr-accompagnee',
          name: 'MaPrimeRénov\' Accompagnée',
          icon: '/images/logos/maprimerenov.svg',
          eligible: mprAccompagneeEligible.nodeValue === true,
          amount: typeof mprAccompagneeMontant.nodeValue === 'number' ? mprAccompagneeMontant.nodeValue : null,
          description: 'Aide pour une rénovation globale avec accompagnement',
        })
      } catch (e) {
        console.log('MPR Accompagnée error:', e)
        aidResults.push({
          id: 'mpr-accompagnee',
          name: 'MaPrimeRénov\' Accompagnée',
          icon: '/images/logos/maprimerenov.svg',
          eligible: false,
          amount: null,
          description: 'Aide pour une rénovation globale avec accompagnement',
        })
      }

      // Check MPR par gestes - Calcul basé sur la classe de revenus et les gestes sélectionnés
      const classeRevenus = getClasseRevenus(data.revenuFiscal, data.nombrePersonnes, data.isIleDeFrance)
      const mprGestesMontant = calculateMprGestes(data.typesTravaux, data.surface, classeRevenus)

      console.log('MPR par gestes - classe revenus:', classeRevenus)
      console.log('MPR par gestes - montant calculé:', mprGestesMontant)

      // MPR par gestes n'est pas éligible pour les revenus supérieurs
      const mprGestesEligible = classeRevenus !== 'supérieur' && mprGestesMontant > 0

      aidResults.push({
        id: 'mpr-gestes',
        name: 'MaPrimeRénov\' par gestes',
        icon: '/images/logos/maprimerenov.svg',
        eligible: mprGestesEligible,
        amount: mprGestesEligible ? mprGestesMontant : null,
        description: `Classe ${classeRevenus} - Aide pour des travaux spécifiques`,
      })

      // Check CEE for selected works (selectedTravaux is already defined above)
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

  // Calcul du total des aides (exclut l'Éco-PTZ qui est un prêt, pas une subvention)
  const totalAids = useMemo(() => {
    return results
      .filter(r => r.eligible && r.amount !== null && r.id !== 'ptz')
      .reduce((sum, r) => sum + (r.amount || 0), 0)
  }, [results])

  // Montant Éco-PTZ séparé
  const ptzAmount = useMemo(() => {
    const ptz = results.find(r => r.id === 'ptz')
    return ptz?.eligible ? ptz.amount : null
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

      case 6: {
        // Vérifier la condition de couplage isolation + chauffage pour les maisons
        const hasIsolation = data.typesTravaux.some(t => ISOLATION_GESTES.includes(t))
        const hasChauffage = data.typesTravaux.some(t => CHAUFFAGE_ECS_GESTES.includes(t))
        const needsCoupling = data.logementType === 'maison' && hasIsolation && !hasChauffage

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

            {/* Information sur le couplage pour les maisons (informatif seulement) */}
            {needsCoupling && (
              <div className="p-4 bg-blue-50 border-2 border-blue-200 rounded-xl">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-blue-800">Information</p>
                    <p className="text-sm text-blue-700 mt-1">
                      Pour bénéficier de MaPrimeRénov&apos; par gestes sur les travaux d&apos;isolation en maison individuelle, ceux-ci doivent normalement être couplés à un geste de chauffage ou d&apos;eau chaude sanitaire. Cette condition ne s&apos;applique pas aux appartements.
                    </p>
                  </div>
                </div>
              </div>
            )}

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
      }

      default:
        return null
    }
  }

  // Results view
  if (showResults) {
    const eligibleCount = results.filter(r => r.eligible).length

    return (
      <div className="max-w-6xl mx-auto">
        {/* Header row: Eligibility + Total side by side */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Left: Eligibility message */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 flex items-center gap-4">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-green-600 font-medium text-sm">Résultats de votre simulation</p>
              <h3 className="text-2xl md:text-3xl font-bold text-green-800">
                Vous êtes éligible à {eligibleCount} aide{eligibleCount > 1 ? 's' : ''}
              </h3>
            </div>
          </div>

          {/* Right: Total amount */}
          <div className="bg-gradient-to-br from-gammart-green-dark to-gammart-green-leaf rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gammart-green-sage font-medium text-sm">Estimation totale des aides</p>
                <p className="text-white/70 text-xs">Subventions cumulables</p>
              </div>
              <div className="text-right">
                <div className={`text-3xl md:text-4xl font-bold text-white ${!contactSubmitted ? 'blur-lg select-none' : ''}`}>
                  {totalAids.toLocaleString('fr-FR')} €
                </div>
                {!contactSubmitted && (
                  <p className="text-white/60 text-xs mt-1">Débloquer ci-dessous</p>
                )}
              </div>
            </div>
            {/* Éco-PTZ séparé (c'est un prêt, pas une subvention) */}
            {ptzAmount && (
              <div className="mt-4 pt-4 border-t border-white/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gammart-green-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-white/90 text-sm">Éligible Éco-PTZ</span>
                </div>
                <div className={`text-lg font-semibold text-white ${!contactSubmitted ? 'blur-md select-none' : ''}`}>
                  jusqu&apos;à {ptzAmount.toLocaleString('fr-FR')} €
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Main content: Aids grid + Contact form side by side */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left: Aids grid (2 columns) */}
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {results.map((aid) => (
                <div
                  key={aid.id}
                  className={`p-4 rounded-xl border-2 text-center transition-all ${aid.eligible ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-50 opacity-60'}`}
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${aid.eligible ? 'bg-green-500' : 'bg-gray-300'}`}>
                    {aid.eligible ? (
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </div>
                  {/* Name */}
                  <h4 className={`font-bold text-sm mb-1 ${aid.eligible ? 'text-green-800' : 'text-gray-500'}`}>
                    {aid.name}
                  </h4>
                  {/* Amount */}
                  {aid.eligible && aid.amount !== null ? (
                    <div className={`text-lg font-bold text-green-600 ${!contactSubmitted ? 'blur-md select-none' : ''}`}>
                      {aid.amount.toLocaleString('fr-FR')} €
                    </div>
                  ) : (
                    <div className="text-sm text-gray-400">
                      {aid.eligible ? 'Éligible' : 'Non éligible'}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Contact form */}
          {!contactSubmitted ? (
            <div className="bg-gammart-beige rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-6 h-6 text-gammart-green-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <h4 className="text-lg font-bold text-gammart-green-dark">
                  Voir les montants
                </h4>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Remplissez vos coordonnées pour débloquer les montants exacts.
              </p>
              <div className="space-y-3">
                <input
                  type="text"
                  value={data.nom}
                  onChange={(e) => updateData({ nom: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-200 focus:border-gammart-green-dark focus:outline-none text-sm"
                  placeholder="Nom complet"
                />
                <input
                  type="tel"
                  value={data.telephone}
                  onChange={(e) => updateData({ telephone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-200 focus:border-gammart-green-dark focus:outline-none text-sm"
                  placeholder="Téléphone"
                />
                <input
                  type="email"
                  value={data.email}
                  onChange={(e) => updateData({ email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-200 focus:border-gammart-green-dark focus:outline-none text-sm"
                  placeholder="Email"
                />
                <button
                  onClick={handleContactSubmit}
                  disabled={!data.nom || !data.telephone || !data.email}
                  className="w-full py-3 bg-gammart-green-dark text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gammart-green-leaf transition-colors text-sm"
                >
                  Débloquer les montants
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-green-50 rounded-2xl p-6 flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-green-800 mb-2">Montants débloqués</h4>
              <p className="text-sm text-gray-600 mb-4">Un conseiller vous contactera sous 24h.</p>
              <Button href="/contact" variant="primary" size="sm">
                Demander un devis
              </Button>
            </div>
          )}
        </div>

        {/* Restart button */}
        <div className="text-center mt-6">
          <button
            onClick={() => {
              setStep(0)
              setData(initialData)
              setShowResults(false)
              setContactSubmitted(false)
              setResults([])
            }}
            className="text-gammart-green-dark hover:underline text-sm"
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

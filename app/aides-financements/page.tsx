import { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Card, CardHeader, CardBody } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Aides rénovation énergétique Alsace | MaPrimeRénov\', CEE, éco-PTZ, TVA 5,5%',
  description: 'Découvrez les aides rénovation énergétique Alsace : MaPrimeRénov\', MaPrimeRénov\' Parcours Accompagné, prime CEE, éco-PTZ et TVA réduite 5,5%. Gammart Habitat vous accompagne.',
}

const aides = [
  {
    name: 'MaPrimeRénov\'',
    type: 'Subvention',
    beneficiaires: 'Propriétaires occupants / bailleurs',
    description: 'L\'aide principale de l\'État pour financer vos travaux de rénovation énergétique. Montants selon revenus et type de travaux.',
    montant: 'Variable selon revenus',
    cumulable: 'Oui',
    icon: (
      <svg className="w-12 h-12 text-gammart-green-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    name: 'MaPrimeRénov\' Parcours Accompagné',
    type: 'Subvention majorée',
    beneficiaires: 'Rénovation globale',
    description: 'Pour les rénovations d\'ampleur avec un gain énergétique d\'au moins 2 classes DPE. Prise en charge jusqu\'à 90% selon revenus.',
    montant: 'Jusqu\'à 90%',
    cumulable: 'Oui',
    icon: (
      <svg className="w-12 h-12 text-gammart-green-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    name: 'CEE - Certificats d\'Économies d\'Énergie',
    type: 'Prime',
    beneficiaires: 'Tous ménages',
    description: 'Prime versée par les fournisseurs d\'énergie pour financer vos travaux d\'économies d\'énergie. Montant selon opération.',
    montant: 'Variable',
    cumulable: 'Oui',
    icon: (
      <svg className="w-12 h-12 text-gammart-green-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: 'Éco-PTZ',
    type: 'Prêt à taux zéro',
    beneficiaires: 'Propriétaires occupants / bailleurs',
    description: 'Prêt jusqu\'à 50 000€ sans intérêts pour financer vos travaux de rénovation énergétique. Remboursable sur 15 à 20 ans.',
    montant: 'Jusqu\'à 50 000€',
    cumulable: 'Oui',
    icon: (
      <svg className="w-12 h-12 text-gammart-green-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: 'TVA réduite 5,5%',
    type: 'Avantage fiscal',
    beneficiaires: 'Travaux éligibles',
    description: 'Taux de TVA réduit applicable sur les travaux de rénovation énergétique pour les logements de plus de 2 ans.',
    montant: 'Réduction automatique',
    cumulable: 'Oui',
    icon: (
      <svg className="w-12 h-12 text-gammart-green-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
]

export default function AidesFinancementsPage() {
  return (
    <>
      {/* Hero */}
      <Section background="beige" paddingY="lg">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gammart-green-dark mb-6">
            Aides et financements pour vos travaux de rénovation énergétique en Alsace
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
            Les <strong>aides rénovation énergétique Alsace</strong> peuvent réduire fortement le coût de vos travaux,
            parfois jusqu'à <strong>90% de prise en charge</strong> selon vos revenus et le type de rénovation.
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Entre MaPrimeRénov', la prime CEE, l'éco-PTZ et la TVA réduite, il existe plusieurs leviers pour diminuer
            le reste à charge. Le plus important : <strong>comment les demander au bon moment</strong> et
            <strong> comment les cumuler intelligemment</strong>.
          </p>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 bg-gammart-green-dark text-white px-6 py-3 rounded-full font-semibold">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Accompagnement dossiers
          </div>
          <div className="flex items-center gap-2 bg-gammart-green-dark text-white px-6 py-3 rounded-full font-semibold">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            Entreprise RGE
          </div>
          <div className="flex items-center gap-2 bg-gammart-green-dark text-white px-6 py-3 rounded-full font-semibold">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Simulation gratuite
          </div>
        </div>
      </Section>

      {/* Why aids exist */}
      <Section background="white" paddingY="lg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gammart-green-dark mb-6 text-center">
            Des aides pour accélérer la transition énergétique
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            Les <strong>aides rénovation énergétique Alsace</strong> existent pour accélérer la rénovation des logements :
            réduire les consommations, améliorer le confort, lutter contre la précarité énergétique et diminuer les émissions
            liées au chauffage.
          </p>
          <p className="text-lg text-gray-700 text-center">
            L'État et les acteurs de l'énergie financent une partie de vos travaux pour atteindre des objectifs climatiques
            et améliorer le parc immobilier.
          </p>
        </div>
      </Section>

      {/* Aides cards */}
      <Section background="beige" paddingY="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gammart-green-dark mb-4">
            Les aides disponibles pour vos travaux
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Voici une synthèse des dispositifs les plus courants. Les règles évoluent : c'est pourquoi nous vous aidons
            à vérifier l'éligibilité réelle avant de lancer le projet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aides.map((aide) => (
            <Card key={aide.name} borderAccent>
              <CardHeader>
                <div className="mb-4">{aide.icon}</div>
                <h3 className="text-xl font-bold text-gammart-green-dark mb-2">{aide.name}</h3>
                <div className="flex gap-2 mb-3">
                  <span className="inline-block bg-gammart-beige text-gammart-green-dark px-3 py-1 rounded-full text-xs font-semibold">
                    {aide.type}
                  </span>
                  {aide.cumulable === 'Oui' && (
                    <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                      Cumulable
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardBody>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Pour qui :</strong> {aide.beneficiaires}
                </p>
                <p className="text-sm text-gray-700 mb-3">{aide.description}</p>
                <p className="text-sm font-semibold text-gammart-green-dark">
                  Montant : {aide.montant}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </Section>

      {/* How we help */}
      <Section background="white" paddingY="lg">
        <div className="bg-gammart-green-dark text-white rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comment Gammart Habitat vous accompagne
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-gammart-green-dark">1</span>
              </div>
              <h3 className="font-bold mb-2">Estimation</h3>
              <p className="text-gammart-green-sage text-sm">
                Nous évaluons votre éligibilité et estimons le montant des aides selon votre projet
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-gammart-green-dark">2</span>
              </div>
              <h3 className="font-bold mb-2">Constitution</h3>
              <p className="text-gammart-green-sage text-sm">
                Nous vous aidons à constituer les dossiers avec les bons documents au bon moment
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-gammart-green-dark">3</span>
              </div>
              <h3 className="font-bold mb-2">Suivi</h3>
              <p className="text-gammart-green-sage text-sm">
                Nous vous accompagnons jusqu'au versement des aides et restons disponibles
              </p>
            </div>
          </div>
          <Button href="/contact" variant="secondary" size="lg">
            Estimer mes aides gratuitement
          </Button>
        </div>
      </Section>

      {/* CTA */}
      <Section background="beige" paddingY="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gammart-green-dark mb-6">
            Prêt à financer votre projet de rénovation ?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Contactez-nous pour une simulation gratuite de vos aides et un accompagnement personnalisé dans vos démarches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Demander une simulation
            </Button>
            <Button href="tel:0763982357" variant="secondary" size="lg">
              07 63 98 23 57
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}

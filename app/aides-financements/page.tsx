import { Metadata } from 'next'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'

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
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
]

const steps = [
  {
    number: '1',
    title: 'Estimation',
    description: 'Nous évaluons votre éligibilité et estimons le montant des aides selon votre projet',
  },
  {
    number: '2',
    title: 'Constitution',
    description: 'Nous vous aidons à constituer les dossiers avec les bons documents au bon moment',
  },
  {
    number: '3',
    title: 'Suivi',
    description: 'Nous vous accompagnons jusqu\'au versement des aides et restons disponibles',
  },
]

export default function AidesFinancementsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gammart-green-dark via-gammart-green-leaf to-gammart-green-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center text-white max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Aides et financements pour vos travaux
              </h1>
              <p className="text-xl md:text-2xl text-gammart-green-sage mb-6">
                Réduisez jusqu'à 90% le coût de votre rénovation énergétique
              </p>
              <p className="text-lg text-white/80 mb-10">
                Entre MaPrimeRénov', la prime CEE, l'éco-PTZ et la TVA réduite, plusieurs leviers existent pour diminuer votre reste à charge. Le plus important : comment les demander au bon moment et les cumuler intelligemment.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full font-semibold">
                  <svg className="w-5 h-5 text-gammart-green-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Accompagnement dossiers
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full font-semibold">
                  <svg className="w-5 h-5 text-gammart-green-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  Entreprise RGE
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full font-semibold">
                  <svg className="w-5 h-5 text-gammart-green-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Simulation gratuite
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why aids exist */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-8">
              Des aides pour accélérer la transition énergétique
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Les <strong>aides rénovation énergétique Alsace</strong> existent pour accélérer la rénovation des logements : réduire les consommations, améliorer le confort, lutter contre la précarité énergétique et diminuer les émissions liées au chauffage.
            </p>
            <p className="text-lg text-gray-600">
              L'État et les acteurs de l'énergie financent une partie de vos travaux pour atteindre des objectifs climatiques et améliorer le parc immobilier.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Aides cards */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-6">
                Les aides disponibles pour vos travaux
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Voici une synthèse des dispositifs les plus courants. Les règles évoluent : c'est pourquoi nous vous aidons à vérifier l'éligibilité réelle avant de lancer le projet.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aides.map((aide, index) => (
              <ScrollReveal key={aide.name} delay={index * 100}>
                <div className="bg-white rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-gammart-green-dark">
                  <div className="w-14 h-14 bg-gammart-green-dark/10 rounded-xl flex items-center justify-center text-gammart-green-dark mb-6">
                    {aide.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gammart-green-dark mb-2">{aide.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-block bg-gammart-beige text-gammart-green-dark px-3 py-1 rounded-full text-xs font-semibold">
                      {aide.type}
                    </span>
                    {aide.cumulable === 'Oui' && (
                      <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                        Cumulable
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Pour qui :</strong> {aide.beneficiaires}
                  </p>
                  <p className="text-gray-700 mb-4">{aide.description}</p>
                  <p className="text-sm font-semibold text-gammart-green-dark">
                    Montant : {aide.montant}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How we help */}
      <section className="py-20 md:py-28 bg-gammart-green-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Comment Gammart Habitat vous accompagne
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 150}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-4xl font-bold text-gammart-green-dark">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gammart-green-sage">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={500}>
            <div className="text-center">
              <Button href="/contact" variant="secondary" size="lg">
                Estimer mes aides gratuitement
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-6">
              Prêt à financer votre projet de rénovation ?
            </h2>
            <p className="text-xl text-gray-700 mb-10">
              Contactez-nous pour une simulation gratuite de vos aides et un accompagnement personnalisé dans vos démarches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg">
                Demander une simulation
              </Button>
              <Button href="tel:0763982357" variant="outline" size="lg">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                07 63 98 23 57
              </Button>
            </div>
            <p className="text-gray-500 mt-6 text-sm">
              Devis gratuit • Sans engagement
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

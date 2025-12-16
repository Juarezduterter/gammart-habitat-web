import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Card, CardHeader, CardBody } from '@/components/ui/Card'

const aides = [
  {
    name: 'MaPrimeRénov\'',
    description: 'Aide de l\'État pour financer vos travaux de rénovation énergétique. Montants selon revenus.',
    icon: (
      <svg className="w-10 h-10 text-gammart-green-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    name: 'CEE',
    description: 'Certificats d\'Économies d\'Énergie : prime versée par les fournisseurs d\'énergie.',
    icon: (
      <svg className="w-10 h-10 text-gammart-green-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: 'Éco-PTZ',
    description: 'Prêt à taux zéro jusqu\'à 50 000€ pour financer vos travaux de rénovation énergétique.',
    icon: (
      <svg className="w-10 h-10 text-gammart-green-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: 'TVA 5,5%',
    description: 'Taux de TVA réduit applicable sur les travaux de rénovation énergétique éligibles.',
    icon: (
      <svg className="w-10 h-10 text-gammart-green-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
]

export function AidesSection() {
  return (
    <Section background="white" paddingY="lg">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gammart-green-dark mb-4">
          Et si vos travaux étaient largement financés ?
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Le coût est souvent la première objection. Bonne nouvelle : pour une isolation thermique Bas-Rhin,
          plusieurs dispositifs peuvent réduire significativement votre reste à charge.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {aides.map((aide) => (
          <Card key={aide.name}>
            <CardHeader>
              <div className="mb-4">{aide.icon}</div>
              <h3 className="text-xl font-bold text-gammart-green-dark mb-2">{aide.name}</h3>
            </CardHeader>
            <CardBody>
              <p className="text-gray-700 text-sm">{aide.description}</p>
            </CardBody>
          </Card>
        ))}
      </div>

      <div className="bg-gammart-beige rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gammart-green-dark mb-4">
          Nous vous accompagnons dans vos démarches
        </h3>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Nous vous aidons à comprendre les options réellement pertinentes pour votre projet et vous
          accompagnons dans vos démarches administratives.
        </p>
        <Button href="/aides-financements" variant="primary" size="lg">
          Découvrir toutes les aides
        </Button>
      </div>
    </Section>
  )
}

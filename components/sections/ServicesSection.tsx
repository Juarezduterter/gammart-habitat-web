import { Section } from '@/components/ui/Section'
import { Card, CardHeader, CardBody } from '@/components/ui/Card'

const services = [
  {
    title: 'Isolation Thermique par l\'Extérieur (ITE)',
    description: 'Gagnez en confort, réduisez les ponts thermiques, valorisez la façade.',
    href: '/isolation/ite',
    icon: (
      <svg className="w-12 h-12 text-gammart-green-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Isolation Thermique par l\'Intérieur (ITI)',
    description: 'Solution ciblée, idéale dans certains cas techniques ou contraintes de façade.',
    href: '/isolation/iti',
    icon: (
      <svg className="w-12 h-12 text-gammart-green-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" />
      </svg>
    ),
  },
  {
    title: 'Isolation des Combles Perdus',
    description: 'Souvent le meilleur ROI : limiter la chaleur qui s\'échappe par le haut.',
    href: '/isolation/combles/combles-perdus',
    icon: (
      <svg className="w-12 h-12 text-gammart-green-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Isolation des Rampants',
    description: 'Confort hiver/été pour les pièces sous toiture (combles aménageables).',
    href: '/isolation/combles/combles-amenageables',
    icon: (
      <svg className="w-12 h-12 text-gammart-green-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Isolation du Plancher Bas',
    description: 'Stopper le froid qui remonte, améliorer la sensation au sol (cave/garage).',
    href: '/isolation/plancher-bas',
    icon: (
      <svg className="w-12 h-12 text-gammart-green-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Bardage & Ravalement',
    description: 'Protection, esthétique, durabilité : une façade qui repart pour des années.',
    href: '/efficacite-energetique/bardage-ravalement',
    icon: (
      <svg className="w-12 h-12 text-gammart-green-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Ventilation (VMC)',
    description: 'Une maison plus saine, moins d\'humidité, meilleure qualité d\'air.',
    href: '/efficacite-energetique/ventilation',
    icon: (
      <svg className="w-12 h-12 text-gammart-green-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
]

export function ServicesSection() {
  return (
    <Section background="white" paddingY="lg">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gammart-green-dark mb-4">
          Vos travaux d'isolation, de façade et de ventilation : tout au même endroit
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Pour une isolation thermique Bas-Rhin efficace, il faut traiter les bons postes : murs, combles,
          planchers… et parfois la ventilation. Voici nos solutions principales :
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <Card key={service.title} href={service.href} borderAccent>
            <CardHeader>
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-gammart-green-dark mb-2">{service.title}</h3>
            </CardHeader>
            <CardBody>
              <p className="text-gray-700 text-sm mb-4">{service.description}</p>
              <div className="flex items-center text-gammart-green-dark font-semibold text-sm">
                En savoir plus
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </Section>
  )
}

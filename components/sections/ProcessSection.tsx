import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'

const steps = [
  {
    number: 1,
    title: 'Contact',
    description: 'Vous décrivez votre besoin (maison, surface, problème, ville, code postal).',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    number: 2,
    title: 'Visite technique',
    description: 'On observe le bâti, on identifie les zones critiques, on discute des priorités.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: 3,
    title: 'Devis détaillé',
    description: 'Une proposition claire, poste par poste, avec les variantes utiles si besoin.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: 4,
    title: 'Travaux',
    description: 'Chantier planifié, protections, exécution soignée, finitions.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    number: 5,
    title: 'Suivi',
    description: 'Contrôle, conseils d\'entretien, et disponibilité si vous avez des questions.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export function ProcessSection() {
  return (
    <Section background="beige" paddingY="lg">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gammart-green-dark mb-4">
          Un parcours clair, sans stress
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Du premier contact à la réception de chantier, nous avons conçu un processus simple pour que votre
          projet d'isolation thermique Bas-Rhin avance vite, et bien.
        </p>
      </div>

      <div className="relative">
        {/* Timeline line - hidden on mobile */}
        <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gammart-green-sage/30" style={{ top: '4rem' }}></div>

        <div className="grid md:grid-cols-5 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              {/* Step number circle */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gammart-green-dark text-white flex items-center justify-center text-2xl font-bold shadow-lg z-10 relative">
                  {step.number}
                </div>
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-3 text-gammart-green-dark">
                {step.icon}
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="font-bold text-gammart-green-dark text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <Button href="/contact" variant="primary" size="lg">
          Démarrer mon projet
        </Button>
      </div>
    </Section>
  )
}

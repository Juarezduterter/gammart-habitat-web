'use client'

import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const steps = [
  {
    number: 1,
    title: 'Contact',
    description: 'Vous décrivez votre besoin',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    number: 2,
    title: 'Visite',
    description: 'On observe le bâti',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: 3,
    title: 'Devis',
    description: 'Proposition claire',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: 4,
    title: 'Travaux',
    description: 'Exécution soignée',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    number: 5,
    title: 'Suivi',
    description: 'Contrôle et conseils',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-6">
              Un parcours clair, sans stress
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Du premier contact à la réception de chantier, un processus simple pour que votre projet avance vite et bien.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative mb-16">
          {/* Line - positioned at the center of the circles */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gammart-green-dark/20" />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 100}>
                <div className="flex flex-col items-center text-center group">
                  {/* Circle */}
                  <div className="relative z-10 mb-6">
                    <div className="w-24 h-24 rounded-full bg-white border-4 border-gammart-green-dark flex flex-col items-center justify-center shadow-lg group-hover:bg-gammart-green-dark group-hover:scale-110 transition-all duration-300">
                      <span className="text-gammart-green-dark group-hover:text-white transition-colors">
                        {step.icon}
                      </span>
                      <span className="text-xl font-bold text-gammart-green-dark group-hover:text-white transition-colors mt-1">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content - fixed height container for alignment */}
                  <div className="flex flex-col items-center">
                    <h3 className="font-bold text-gammart-green-dark text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 max-w-[120px]">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal>
          <div className="text-center">
            <Button href="/contact" variant="primary" size="lg" glow>
              Démarrer mon projet
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

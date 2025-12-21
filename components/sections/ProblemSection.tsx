'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'

const problems = [
  {
    title: 'Factures élevées',
    description: 'Chauffage qui tourne trop, déperditions par les murs, les combles ou le plancher bas.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    title: 'Inconfort thermique',
    description: 'Pièces froides, parois "gelées", courants d\'air, écarts de température.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'DPE défavorable',
    description: 'Difficulté à louer/vendre, valeur du bien impactée, travaux nécessaires.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Façade vieillissante',
    description: 'Fissures, salissures, enduit fatigué… et une maison qui perd en cachet.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
]

export function ProblemSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-6">
              Votre maison vous coûte trop cher ?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Quand l'isolation est insuffisante, les symptômes sont toujours les mêmes.
              Une rénovation énergétique performante commence par comprendre ce qui vous freine.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {problems.map((problem, index) => (
            <ScrollReveal key={problem.title} delay={index * 100}>
              <div className="group bg-gray-50 border border-gammart-green-dark/10 p-6 rounded-2xl transition-all duration-300 hover:bg-gammart-green-dark hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gammart-green-dark/10 text-gammart-green-dark flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-white/20 group-hover:text-white">
                    {problem.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gammart-green-dark mb-2 text-lg transition-colors group-hover:text-white">
                      {problem.title}
                    </h3>
                    <p className="text-gray-600 transition-colors group-hover:text-white/80">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="text-lg text-gammart-green-dark/80 text-center max-w-2xl mx-auto">
            <strong>Vous n'êtes pas seul.</strong> La bonne nouvelle : il existe une méthode claire pour choisir la bonne solution.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

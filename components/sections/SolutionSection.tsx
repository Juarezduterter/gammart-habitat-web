'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const pillars = [
  {
    number: 1,
    title: 'Diagnostic personnalisé',
    description: 'Repérer les zones de pertes, comprendre le bâti, prioriser les actions utiles.',
  },
  {
    number: 2,
    title: 'Solutions adaptées',
    description: 'ITE, ITI, combles, plancher bas… la bonne technique au bon endroit.',
  },
  {
    number: 3,
    title: 'Accompagnement complet',
    description: 'Conseils, devis détaillé, chantier maîtrisé, suivi et finitions.',
  },
]

export function SolutionSection() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/photos/thermal-image-building.jpeg"
                  alt="Rénovation énergétique"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-gammart-green-dark text-white rounded-2xl p-6 shadow-xl hidden md:block">
                <div className="text-4xl font-bold">10+</div>
                <div className="text-gammart-green-sage text-sm">ans d'expérience</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Content */}
          <div>
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-6">
                Une approche sur-mesure
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                Notre différence : on ne vend pas une solution standard. On construit un plan de travaux cohérent, pensé pour votre maison.
              </p>
            </ScrollReveal>

            <div className="space-y-6 mb-10">
              {pillars.map((pillar, index) => (
                <ScrollReveal key={pillar.number} delay={index * 150}>
                  <div className="flex gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gammart-green-dark rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
                      {pillar.number}
                    </div>
                    <div>
                      <h3 className="font-bold text-gammart-green-dark text-lg mb-1">{pillar.title}</h3>
                      <p className="text-gray-600">{pillar.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={500}>
              <Button href="/a-propos" variant="primary" size="lg" glow>
                Découvrir notre approche
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

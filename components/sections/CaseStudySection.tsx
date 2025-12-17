'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function CaseStudySection() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-6">
              Une transformation qui parle d'elle-même
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Exemple concret d'une rénovation globale pour un résultat mesurable.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Images */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/photos/renovation-2.jpeg"
                      alt="Rénovation avant"
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/photos/renovation-3.jpeg"
                      alt="Travaux en cours"
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
                <div className="pt-8">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/photos/renovation-4.jpeg"
                      alt="Rénovation après"
                      width={300}
                      height={400}
                      className="w-full h-[416px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Content */}
          <div>
            <ScrollReveal>
              <div className="bg-gray-50 rounded-3xl p-8 md:p-10 mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gammart-green-dark rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gammart-green-dark">Baerenthal (57230)</h3>
                    <p className="text-gray-600">Rénovation d'ampleur</p>
                  </div>
                </div>

                {/* Before/After */}
                <div className="flex items-center justify-center gap-6 mb-8">
                  <div className="text-center">
                    <div className="inline-block bg-red-500 text-white px-6 py-3 rounded-2xl text-xl font-bold">
                      Classe E
                    </div>
                    <p className="text-sm text-gray-500 mt-2">250 kWh/m²/an</p>
                  </div>
                  <svg className="w-8 h-8 text-gammart-green-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  <div className="text-center">
                    <div className="inline-block bg-green-500 text-white px-6 py-3 rounded-2xl text-xl font-bold">
                      Classe B
                    </div>
                    <p className="text-sm text-gray-500 mt-2">107 kWh/m²/an</p>
                  </div>
                </div>

                {/* Works done */}
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-gammart-green-dark/10 text-gammart-green-dark px-4 py-2 rounded-full text-sm font-medium">ITE</span>
                  <span className="bg-gammart-green-dark/10 text-gammart-green-dark px-4 py-2 rounded-full text-sm font-medium">Combles perdus</span>
                  <span className="bg-gammart-green-dark/10 text-gammart-green-dark px-4 py-2 rounded-full text-sm font-medium">Plancher bas</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Button href="/realisations" variant="primary" size="lg" className="w-full md:w-auto">
                Voir toutes nos réalisations
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

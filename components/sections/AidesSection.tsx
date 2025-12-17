'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const aides = [
  {
    name: 'MaPrimeRénov\'',
    description: 'Aide de l\'État pour financer vos travaux. Montants selon revenus.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    name: 'CEE',
    description: 'Prime versée par les fournisseurs d\'énergie.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: 'Éco-PTZ',
    description: 'Prêt à taux zéro jusqu\'à 50 000€.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: 'TVA 5,5%',
    description: 'Taux réduit sur les travaux éligibles.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
]

export function AidesSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-6">
              Vos travaux financés jusqu'à 90%
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Plusieurs dispositifs peuvent réduire significativement votre reste à charge.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {aides.map((aide, index) => (
            <ScrollReveal key={aide.name} delay={index * 100}>
              <div className="bg-gray-50 rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-gammart-green-dark/10 rounded-xl flex items-center justify-center text-gammart-green-dark mb-4">
                  {aide.icon}
                </div>
                <h3 className="text-xl font-bold text-gammart-green-dark mb-2">{aide.name}</h3>
                <p className="text-gray-600">{aide.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="bg-gammart-green-dark rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Nous vous accompagnons dans vos démarches
            </h3>
            <p className="text-gammart-green-sage mb-8 max-w-2xl mx-auto text-lg">
              Nous vous aidons à identifier les aides pertinentes et vous accompagnons dans toutes vos démarches administratives.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 opacity-60">
              <Image
                src="/images/certifications/ma-prime-renov.svg"
                alt="MaPrimeRénov'"
                width={80}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
              <Image
                src="/images/certifications/france-renov.svg"
                alt="France Rénov'"
                width={80}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <Button href="/aides-financements" variant="secondary" size="lg">
              Découvrir toutes les aides
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

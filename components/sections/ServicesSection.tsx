'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const services = [
  {
    title: 'ITE - Isolation par l\'Extérieur',
    description: 'Gagnez en confort, réduisez les ponts thermiques, valorisez la façade.',
    href: '/isolation/ite',
    icon: '/images/pictos/Isolation-Thermique-par-l-Extérieur.svg',
  },
  {
    title: 'ITI - Isolation par l\'Intérieur',
    description: 'Solution ciblée, idéale dans certains cas techniques ou contraintes de façade.',
    href: '/isolation-thermique-interieur-bas-rhin',
    icon: '/images/pictos/Isolation-Thermique-par-l-Intérieur.svg',
  },
  {
    title: 'Isolation des Combles',
    description: 'Souvent le meilleur ROI : limiter la chaleur qui s\'échappe par le haut.',
    href: '/isolation-combles-bas-rhin',
    icon: '/images/pictos/Isolation-Combles-Perdus.svg',
  },
  {
    title: 'Isolation Rampants',
    description: 'Confort hiver/été pour les pièces sous toiture (combles aménageables).',
    href: '/isolation-combles-bas-rhin',
    icon: '/images/pictos/Isolation-Rampants-de-Toiture.svg',
  },
  {
    title: 'Isolation Plancher Bas',
    description: 'Stopper le froid qui remonte, améliorer la sensation au sol.',
    href: '/isolation/plancher-bas',
    icon: '/images/pictos/Isolation-Plancher-Bas.svg',
  },
  {
    title: 'Bardage & Ravalement',
    description: 'Protection, esthétique, durabilité : une façade qui repart pour des années.',
    href: '/efficacite-energetique/bardage-ravalement',
    icon: '/images/pictos/Bardage-Facade.svg',
  },
  {
    title: 'Ventilation VMC',
    description: 'Une maison plus saine, moins d\'humidité, meilleure qualité d\'air.',
    href: '/efficacite-energetique/ventilation',
    icon: '/images/pictos/VMC.svg',
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-6">
              Vos travaux d'isolation, de façade et de ventilation
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Tout au même endroit. Pour une rénovation énergétique efficace,
              il faut traiter les bons postes.
            </p>
          </div>
        </ScrollReveal>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="relative">
          {/* Desktop grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 100}>
                <Link
                  href={service.href}
                  className="group block bg-gray-50 rounded-2xl p-6 transition-all duration-300 hover:bg-gammart-green-dark hover:shadow-xl h-full"
                >
                  <div className="mb-6 w-16 h-16 rounded-xl bg-gammart-green-dark/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={40}
                      height={40}
                      className="w-10 h-10 group-hover:brightness-0 group-hover:invert transition-all"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gammart-green-dark group-hover:text-white mb-3 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white/80 text-sm mb-4 transition-colors">
                    {service.description}
                  </p>
                  <div className="flex items-center text-gammart-green-dark group-hover:text-gammart-green-sage font-semibold text-sm transition-colors">
                    En savoir plus
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* Mobile horizontal scroll */}
          <div className="md:hidden overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-4" style={{ width: 'max-content' }}>
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group block bg-gray-50 rounded-2xl p-6 transition-all duration-300 hover:bg-gammart-green-dark hover:shadow-xl flex-shrink-0"
                  style={{ width: '280px' }}
                >
                  <div className="mb-6 w-16 h-16 rounded-xl bg-gammart-green-dark/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={40}
                      height={40}
                      className="w-10 h-10 group-hover:brightness-0 group-hover:invert transition-all"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gammart-green-dark group-hover:text-white mb-3 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white/80 text-sm mb-4 transition-colors">
                    {service.description}
                  </p>
                  <div className="flex items-center text-gammart-green-dark group-hover:text-gammart-green-sage font-semibold text-sm transition-colors">
                    En savoir plus
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Scroll hint for mobile */}
          <div className="md:hidden flex justify-center mt-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              Glissez pour voir plus
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

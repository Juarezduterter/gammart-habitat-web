'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'

const cities = [
  'Strasbourg', 'Haguenau', 'Molsheim', 'Saverne', 'Sélestat',
  'Lingolsheim', 'Illkirch-Graffenstaden', 'Schiltigheim', 'Obernai', 'Brumath'
]

export function ZoneSection() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-6">
              Bas-Rhin & Alsace
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Une équipe proche de chez vous, intervention rapide sur tout le département.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <h3 className="text-xl font-bold text-gammart-green-dark mb-6 text-center">
              Villes principales
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {cities.map((city, index) => (
                <span
                  key={city}
                  className="bg-gray-100 hover:bg-gammart-green-dark hover:text-white text-gammart-green-dark px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {city}
                </span>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-8">
              Approche adaptée aux maisons anciennes comme aux constructions récentes.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

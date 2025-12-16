import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'

export function HeroSection() {
  return (
    <Section background="beige" paddingY="xl">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gammart-green-dark mb-6 leading-tight">
            Isolation thermique Bas-Rhin : transformez votre maison en un cocon confortable et économe
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            <strong>Vous cherchez une isolation thermique Bas-Rhin qui améliore vraiment votre confort et réduit vos factures ?</strong>
          </p>
          <p className="text-base md:text-lg text-gray-700 mb-6">
            Gammart Habitat accompagne les propriétaires dans tout le Bas-Rhin et en Alsace pour des travaux d'isolation et de rénovation énergétique pensés sur-mesure, selon votre maison, votre budget, et vos objectifs.
          </p>
          <p className="text-base md:text-lg text-gray-700 mb-6">
            <strong>Bénéfice concret :</strong> moins de pertes de chaleur, une température plus stable été/hiver, une façade valorisée, et une maison plus agréable au quotidien.
          </p>


          {/* Trust badges */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-gammart-green-dark text-white px-4 py-2 rounded-full text-sm font-semibold">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Entreprise RGE
            </div>
            <div className="flex items-center gap-2 bg-gammart-green-dark text-white px-4 py-2 rounded-full text-sm font-semibold">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Garantie décennale
            </div>
            <div className="flex items-center gap-2 bg-gammart-green-dark text-white px-4 py-2 rounded-full text-sm font-semibold">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Chantiers dans tout le Bas-Rhin
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Demander mon devis gratuit
            </Button>
            <Button href="/realisations" variant="secondary" size="lg">
              Voir nos réalisations
            </Button>
          </div>
        </div>

        {/* Right image/visual */}
        <div className="relative">
          <div className="bg-gammart-green-dark/10 rounded-2xl p-8 lg:p-12">
            <div className="bg-white rounded-xl shadow-2xl p-6 transform rotate-2">
              <div className="text-center">
                <div className="inline-block bg-red-500 text-white px-6 py-2 rounded-full text-xl font-bold mb-4">
                  Classe E
                </div>
                <div className="text-gray-600 mb-4">→</div>
                <div className="inline-block bg-green-500 text-white px-6 py-2 rounded-full text-xl font-bold mb-4">
                  Classe B
                </div>
                <p className="text-2xl font-bold text-gammart-green-dark">-57%</p>
                <p className="text-gray-600 text-sm">de consommation énergétique</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

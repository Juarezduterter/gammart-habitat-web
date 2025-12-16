import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'

export function CaseStudySection() {
  return (
    <Section background="white" paddingY="lg">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gammart-green-dark mb-6">
          Une transformation qui parle d'elle-même
        </h2>
        <p className="text-xl text-gray-700 mb-10">
          Voici un exemple concret d'une <strong>isolation thermique Bas-Rhin</strong> (et Alsace) pensée comme
          une rénovation globale, pour un résultat mesurable.
        </p>

        <div className="bg-gammart-beige rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gammart-green-dark mb-4">
                Réalisation vedette : Baerenthal (57230)
              </h3>
              <p className="text-lg text-gray-700 mb-2">Rénovation d'ampleur</p>
            </div>
            <div className="flex justify-center">
              <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform">
                <div className="text-center">
                  <div className="inline-block bg-red-500 text-white px-6 py-3 rounded-full text-xl font-bold mb-3">
                    Classe E
                  </div>
                  <div className="text-gray-600 mb-3 text-2xl">→</div>
                  <div className="inline-block bg-green-500 text-white px-6 py-3 rounded-full text-xl font-bold mb-3">
                    Classe B
                  </div>
                  <p className="text-3xl font-bold text-gammart-green-dark mt-4">-57%</p>
                  <p className="text-gray-600 text-sm">de consommation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6">
              <h4 className="font-bold text-red-700 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Avant
              </h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Classe énergétique E</li>
                <li>• Consommation importante</li>
                <li>• Inconfort thermique</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Après
              </h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Classe B</li>
                <li>• Maison plus agréable et économe</li>
                <li>• Confort optimal toute l'année</li>
              </ul>
            </div>
          </div>

          <div className="bg-gammart-green-dark text-white rounded-xl p-6 mb-6">
            <h4 className="font-bold text-xl mb-4 text-gammart-green-sage">Résultat</h4>
            <p className="text-3xl font-bold mb-2">De 250 à 107 kWh/m²/an</p>
            <p className="text-gammart-green-sage">Soit une réduction de 57% de la consommation énergétique</p>
          </div>

          <div>
            <h4 className="font-bold text-gammart-green-dark mb-3">Travaux réalisés :</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-sm font-semibold text-gammart-green-dark">ITE</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-sm font-semibold text-gammart-green-dark">Isolation combles perdus</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-sm font-semibold text-gammart-green-dark">Isolation plancher bas</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Button href="/realisations" variant="primary" size="lg">
            Voir toutes nos réalisations
          </Button>
        </div>
      </div>
    </Section>
  )
}

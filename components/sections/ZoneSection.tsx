import { Section } from '@/components/ui/Section'

const cities = [
  'Strasbourg', 'Haguenau', 'Molsheim', 'Saverne', 'Sélestat',
  'Lingolsheim', 'Illkirch-Graffenstaden', 'Schiltigheim', 'Obernai', 'Brumath'
]

export function ZoneSection() {
  return (
    <Section background="beige" paddingY="lg">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gammart-green-dark mb-6 text-center">
          Bas-Rhin & Alsace : une équipe proche de chez vous
        </h2>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Pour votre <strong>isolation thermique Bas-Rhin</strong>, nous intervenons rapidement sur Strasbourg et l'ensemble du département, avec extension possible en Alsace selon les chantiers.
        </p>

        <div className="bg-white rounded-2xl p-8 shadow-md">
          <h3 className="text-xl font-bold text-gammart-green-dark mb-4 text-center">
            Villes principales :
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((city) => (
              <span
                key={city}
                className="bg-gammart-beige text-gammart-green-dark px-4 py-2 rounded-full text-sm font-semibold"
              >
                {city}
              </span>
            ))}
          </div>
          <p className="text-center text-gray-700 mt-6">
            Intervention rapide dans tout le Bas-Rhin, avec une approche adaptée aux maisons anciennes comme aux constructions plus récentes.
          </p>
        </div>
      </div>
    </Section>
  )
}

import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'

export function SolutionSection() {
  return (
    <Section background="beige" paddingY="lg">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gammart-green-dark mb-6">
          Gammart Habitat : une approche sur-mesure pour votre isolation et votre rénovation
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Notre différence : on ne "vend" pas une solution standard. On construit un plan de travaux cohérent, pensé pour votre maison. Une <strong>isolation thermique Bas-Rhin</strong> réussie, c'est un équilibre entre performance, durabilité, esthétique et budget.
        </p>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gammart-green-dark mb-6">Notre approche en 3 piliers :</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-gammart-green-dark rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="font-bold text-gammart-green-dark mb-2">Diagnostic personnalisé</h4>
              <p className="text-gray-700 text-sm">Repérer les zones de pertes, comprendre le bâti, prioriser les actions utiles.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-gammart-green-dark rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="font-bold text-gammart-green-dark mb-2">Solutions adaptées</h4>
              <p className="text-gray-700 text-sm">ITE, ITI, combles, plancher bas… la bonne technique au bon endroit.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-gammart-green-dark rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="font-bold text-gammart-green-dark mb-2">Accompagnement complet</h4>
              <p className="text-gray-700 text-sm">Conseils, devis détaillé, chantier maîtrisé, suivi et finitions.</p>
            </div>
          </div>
        </div>

        <div className="bg-gammart-green-dark text-white rounded-xl p-8 text-center mb-6">
          <p className="text-lg mb-2">Chiffre clé (exemple réel) :</p>
          <p className="text-3xl md:text-4xl font-bold">jusqu'à -57%</p>
          <p className="text-gammart-green-sage">de consommation énergétique sur une rénovation d'ampleur (cas Baerenthal)</p>
        </div>

        <div className="text-center">
          <Button href="/a-propos" variant="primary" size="lg">
            Découvrir notre approche
          </Button>
        </div>
      </div>
    </Section>
  )
}

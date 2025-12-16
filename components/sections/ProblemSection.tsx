import { Section } from '@/components/ui/Section'

export function ProblemSection() {
  return (
    <Section background="white" paddingY="lg">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gammart-green-dark mb-6">
          Votre maison vous coûte trop cher… et vous le sentez chaque hiver ?
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Quand l'isolation est insuffisante, les symptômes sont toujours les mêmes : vous chauffez, mais la sensation de froid revient vite. Et l'été, la chaleur s'installe durablement. Une <strong>isolation thermique Bas-Rhin</strong> performante commence par comprendre ce qui vous freine aujourd'hui.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-red-900 mb-2 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Factures élevées
            </h3>
            <p className="text-gray-700 text-sm">Chauffage qui tourne trop, déperditions par les murs, les combles ou le plancher bas.</p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Inconfort thermique
            </h3>
            <p className="text-gray-700 text-sm">Pièces froides, parois "gelées", courants d'air, écarts de température.</p>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-orange-900 mb-2 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              DPE défavorable
            </h3>
            <p className="text-gray-700 text-sm">Difficulté à louer/vendre, valeur du bien impactée, travaux nécessaires.</p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-yellow-900 mb-2 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Façade vieillissante
            </h3>
            <p className="text-gray-700 text-sm">Fissures, salissures, enduit fatigué… et une maison qui perd en cachet.</p>
          </div>
        </div>

        <p className="text-lg text-gray-700 text-center">
          <strong>Vous n'êtes pas seul.</strong> Beaucoup de propriétaires hésitent par peur de "faire les mauvais travaux". La bonne nouvelle : il existe une méthode claire pour choisir la bonne solution, sans se tromper.
        </p>
      </div>
    </Section>
  )
}

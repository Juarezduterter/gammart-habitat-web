import { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { Card, CardHeader, CardBody } from '@/components/ui/Card'
import { getRealisations } from '@/lib/api'

export const metadata: Metadata = {
  title: 'Nos Projets - Réalisations | Gammart Habitat',
  description: 'Découvrez nos réalisations d\'isolation thermique et de rénovation énergétique dans le Bas-Rhin et en Alsace.',
}

export default async function RealisationsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const { page } = await searchParams
  const currentPage = Number(page) || 1
  const { docs: realisations, totalPages, hasNextPage, hasPrevPage } = await getRealisations(12, currentPage, {
    status: 'published',
  })

  return (
    <>
      <Section background="beige" paddingY="md">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gammart-green-dark mb-4">
            Nos Projets
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Découvrez nos réalisations d'isolation thermique et de rénovation énergétique
            dans le Bas-Rhin et en Alsace. Des projets qui transforment votre habitat.
          </p>
        </div>
      </Section>

      <Section background="white" paddingY="lg">
        {realisations.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">Aucune réalisation disponible pour le moment.</p>
            <p className="text-gray-500 mt-2">Revenez bientôt pour découvrir nos projets !</p>
          </div>
        ) : (
          <>
            {/* Realisations Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {realisations.map((realisation) => (
                <Card key={realisation.id} href={`/realisations/${realisation.slug}`}>
                  {realisation.featuredImage && (
                    <div className="aspect-[4/3] bg-gray-200 rounded-t-2xl overflow-hidden">
                      <img
                        src={realisation.featuredImage.url}
                        alt={realisation.featuredImage.alt || realisation.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    {/* Types de travaux */}
                    {realisation.typesTravaux && realisation.typesTravaux.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {realisation.typesTravaux.slice(0, 2).map((type) => (
                          <span
                            key={type.id}
                            className="inline-block bg-gammart-green-dark text-white px-3 py-1 rounded-full text-xs font-semibold"
                          >
                            {type.nom}
                          </span>
                        ))}
                      </div>
                    )}

                    <h2 className="text-xl font-bold text-gammart-green-dark mb-2 line-clamp-2">
                      {realisation.title}
                    </h2>

                    {/* Location */}
                    {realisation.city && (
                      <p className="text-sm text-gray-600 flex items-center gap-1 mb-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {realisation.city} {realisation.zipCode && `(${realisation.zipCode})`}
                      </p>
                    )}
                  </CardHeader>

                  {realisation.description && (
                    <CardBody>
                      <p className="text-gray-700 text-sm line-clamp-3">{realisation.description}</p>

                      {/* Performance badges */}
                      {(realisation.performanceAvant || realisation.performanceApres) && (
                        <div className="flex items-center gap-2 mt-4">
                          {realisation.performanceAvant && (
                            <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-semibold">
                              {realisation.performanceAvant}
                            </span>
                          )}
                          {realisation.performanceAvant && realisation.performanceApres && (
                            <span className="text-gray-400">→</span>
                          )}
                          {realisation.performanceApres && (
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">
                              {realisation.performanceApres}
                            </span>
                          )}
                        </div>
                      )}

                      <div className="mt-4 flex items-center text-gammart-green-dark font-semibold text-sm">
                        Voir le projet
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </CardBody>
                  )}
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2">
                {hasPrevPage && (
                  <Link
                    href={`/realisations?page=${currentPage - 1}`}
                    className="px-4 py-2 border border-gammart-green-dark text-gammart-green-dark rounded-lg hover:bg-gammart-green-dark hover:text-white transition-colors"
                  >
                    ← Précédent
                  </Link>
                )}

                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <Link
                      key={pageNum}
                      href={`/realisations?page=${pageNum}`}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        pageNum === currentPage
                          ? 'bg-gammart-green-dark text-white'
                          : 'border border-gammart-green-dark text-gammart-green-dark hover:bg-gammart-green-dark hover:text-white'
                      }`}
                    >
                      {pageNum}
                    </Link>
                  ))}
                </div>

                {hasNextPage && (
                  <Link
                    href={`/realisations?page=${currentPage + 1}`}
                    className="px-4 py-2 border border-gammart-green-dark text-gammart-green-dark rounded-lg hover:bg-gammart-green-dark hover:text-white transition-colors"
                  >
                    Suivant →
                  </Link>
                )}
              </div>
            )}
          </>
        )}
      </Section>

      {/* CTA */}
      <Section background="beige" paddingY="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gammart-green-dark mb-4">
            Votre projet sera notre prochaine réalisation ?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Contactez-nous pour discuter de votre projet d'isolation et de rénovation énergétique.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-gammart-green-dark text-white px-8 py-4 rounded-lg font-semibold hover:bg-gammart-green-leaf transition-colors shadow-lg hover:shadow-xl"
          >
            Demander un devis gratuit
          </Link>
        </div>
      </Section>
    </>
  )
}

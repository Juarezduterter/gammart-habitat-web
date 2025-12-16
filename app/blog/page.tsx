import { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { Card, CardHeader, CardBody } from '@/components/ui/Card'
import { getArticles } from '@/lib/api'

export const metadata: Metadata = {
  title: 'Nos Conseils Habitat - Blog | Gammart Habitat',
  description: 'Découvrez tous nos conseils et astuces pour réussir vos travaux d\'isolation et de rénovation énergétique en Alsace.',
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const { page } = await searchParams
  const currentPage = Number(page) || 1
  const { docs: articles, totalPages, hasNextPage, hasPrevPage } = await getArticles(9, currentPage, {
    status: 'published',
  })

  return (
    <>
      <Section background="beige" paddingY="md">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gammart-green-dark mb-4">
            Nos Conseils Habitat
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Découvrez tous nos conseils et astuces pour réussir vos travaux d'isolation
            et de rénovation énergétique en Alsace.
          </p>
        </div>
      </Section>

      <Section background="white" paddingY="lg">
        {articles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">Aucun article disponible pour le moment.</p>
            <p className="text-gray-500 mt-2">Revenez bientôt pour découvrir nos conseils !</p>
          </div>
        ) : (
          <>
            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {articles.map((article) => (
                <Card key={article.id} href={`/blog/${article.slug}`}>
                  {article.featuredImage && (
                    <div className="aspect-video bg-gray-200 rounded-t-2xl overflow-hidden">
                      <img
                        src={article.featuredImage.url}
                        alt={article.featuredImage.alt || article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <time dateTime={article.publishedAt}>
                        {new Date(article.publishedAt).toLocaleDateString('fr-FR', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </time>
                      {article.readTime && (
                        <>
                          <span>•</span>
                          <span>{article.readTime} min de lecture</span>
                        </>
                      )}
                    </div>
                    <h2 className="text-xl font-bold text-gammart-green-dark mb-2 line-clamp-2">
                      {article.title}
                    </h2>
                  </CardHeader>
                  {article.excerpt && (
                    <CardBody>
                      <p className="text-gray-700 text-sm line-clamp-3">{article.excerpt}</p>
                      <div className="mt-4 flex items-center text-gammart-green-dark font-semibold text-sm">
                        Lire la suite
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
                    href={`/blog?page=${currentPage - 1}`}
                    className="px-4 py-2 border border-gammart-green-dark text-gammart-green-dark rounded-lg hover:bg-gammart-green-dark hover:text-white transition-colors"
                  >
                    ← Précédent
                  </Link>
                )}

                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <Link
                      key={pageNum}
                      href={`/blog?page=${pageNum}`}
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
                    href={`/blog?page=${currentPage + 1}`}
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
    </>
  )
}

import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { getArticleBySlug } from '@/lib/api'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    return {
      title: 'Article non trouvé',
    }
  }

  return {
    title: article.seo?.title || article.title,
    description: article.seo?.description || article.excerpt || '',
    keywords: article.seo?.keywords || '',
    openGraph: {
      title: article.seo?.title || article.title,
      description: article.seo?.description || article.excerpt || '',
      type: 'article',
      publishedTime: article.publishedAt,
      images: article.featuredImage ? [{ url: article.featuredImage.url }] : [],
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  return (
    <>
      {/* Hero / Header */}
      <Section background="beige" paddingY="md">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
            <Link href="/" className="hover:text-gammart-green-dark">
              Accueil
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-gammart-green-dark">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gammart-green-dark">{article.title}</span>
          </nav>

          {/* Categories / Tags */}
          {article.categories && article.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {article.categories.map((category) => (
                <span
                  key={category.id}
                  className="inline-block bg-gammart-green-dark text-white px-3 py-1 rounded-full text-xs font-semibold"
                >
                  {category.nom}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-bold text-gammart-green-dark mb-6">
            {article.title}
          </h1>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8">
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
            {article.author && (
              <>
                <span>•</span>
                <span>Par {article.author.name}</span>
              </>
            )}
          </div>

          {article.excerpt && (
            <p className="text-xl text-gray-700 leading-relaxed">
              {article.excerpt}
            </p>
          )}
        </div>
      </Section>

      {/* Featured Image */}
      {article.featuredImage && (
        <Section background="white" paddingY="sm">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden">
              <img
                src={article.featuredImage.url}
                alt={article.featuredImage.alt || article.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Section>
      )}

      {/* Article Content */}
      <Section background="white" paddingY="lg">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {/* Rich text content will be rendered here */}
            {article.content && (
              <div
                className="article-content"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(article.content) }}
              />
            )}
            {!article.content && (
              <p className="text-gray-700">
                Le contenu de cet article sera bientôt disponible.
              </p>
            )}
          </div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="font-bold text-gammart-green-dark mb-4">Tags :</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="inline-block bg-gammart-beige text-gammart-green-dark px-4 py-2 rounded-full text-sm"
                  >
                    #{tag.nom}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* CTA */}
      <Section background="beige" paddingY="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gammart-green-dark mb-4">
            Un projet d'isolation ou de rénovation énergétique ?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Contactez-nous pour un devis gratuit et des conseils personnalisés.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Demander un devis
            </Button>
            <Button href="/blog" variant="secondary" size="lg">
              Voir tous les articles
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}

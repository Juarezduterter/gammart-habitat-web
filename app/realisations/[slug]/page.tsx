import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { getRealisationBySlug } from '@/lib/api'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const realisation = await getRealisationBySlug(slug)

  if (!realisation) {
    return {
      title: 'Réalisation non trouvée',
    }
  }

  return {
    title: realisation.seo?.title || realisation.title,
    description: realisation.seo?.description || realisation.description || '',
    keywords: realisation.seo?.keywords || '',
    openGraph: {
      title: realisation.seo?.title || realisation.title,
      description: realisation.seo?.description || realisation.description || '',
      type: 'article',
      images: realisation.featuredImage ? [{ url: realisation.featuredImage.url }] : [],
    },
  }
}

export default async function RealisationPage({ params }: Props) {
  const { slug } = await params
  const realisation = await getRealisationBySlug(slug)

  if (!realisation) {
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
            <Link href="/realisations" className="hover:text-gammart-green-dark">
              Nos Projets
            </Link>
            <span>/</span>
            <span className="text-gammart-green-dark">{realisation.title}</span>
          </nav>

          {/* Types de travaux */}
          {realisation.typesTravaux && realisation.typesTravaux.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {realisation.typesTravaux.map((type) => (
                <span
                  key={type.id}
                  className="inline-block bg-gammart-green-dark text-white px-3 py-1 rounded-full text-xs font-semibold"
                >
                  {type.nom}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-bold text-gammart-green-dark mb-6">
            {realisation.title}
          </h1>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8">
            {realisation.city && (
              <div className="flex items-center gap-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {realisation.city} {realisation.zipCode && `(${realisation.zipCode})`}
              </div>
            )}
            {realisation.dateRealisation && (
              <>
                <span>•</span>
                <time dateTime={realisation.dateRealisation}>
                  {new Date(realisation.dateRealisation).toLocaleDateString('fr-FR', {
                    month: 'long',
                    year: 'numeric',
                  })}
                </time>
              </>
            )}
            {realisation.duree && (
              <>
                <span>•</span>
                <span>{realisation.duree}</span>
              </>
            )}
          </div>

          {/* Performance badges */}
          {(realisation.performanceAvant || realisation.performanceApres) && (
            <div className="flex items-center gap-4 mb-8">
              {realisation.performanceAvant && (
                <div className="bg-red-100 text-red-800 px-6 py-3 rounded-lg font-bold">
                  Avant : {realisation.performanceAvant}
                </div>
              )}
              {realisation.performanceAvant && realisation.performanceApres && (
                <svg className="w-8 h-8 text-gammart-green-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              )}
              {realisation.performanceApres && (
                <div className="bg-green-100 text-green-800 px-6 py-3 rounded-lg font-bold">
                  Après : {realisation.performanceApres}
                </div>
              )}
            </div>
          )}

          {realisation.description && (
            <p className="text-xl text-gray-700 leading-relaxed">
              {realisation.description}
            </p>
          )}
        </div>
      </Section>

      {/* Featured Image */}
      {realisation.featuredImage && (
        <Section background="white" paddingY="sm">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden">
              <img
                src={realisation.featuredImage.url}
                alt={realisation.featuredImage.alt || realisation.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Section>
      )}

      {/* Content */}
      <Section background="white" paddingY="lg">
        <div className="max-w-4xl mx-auto">
          {/* Highlights */}
          {realisation.highlights && realisation.highlights.length > 0 && (
            <div className="bg-gammart-beige rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gammart-green-dark mb-6">Points clés du projet</h2>
              <ul className="space-y-3">
                {realisation.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gammart-green-dark flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12">
            {realisation.content && (
              <div
                className="article-content"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(realisation.content) }}
              />
            )}
          </div>

          {/* Gallery */}
          {realisation.gallery && realisation.gallery.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gammart-green-dark mb-6">Galerie photos</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {realisation.gallery.map((image) => (
                  <div key={image.id} className="aspect-square bg-gray-200 rounded-xl overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.alt || ''}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
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
            Un projet similaire en tête ?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Contactez-nous pour discuter de votre projet d'isolation et de rénovation énergétique.
            Nous vous accompagnons de A à Z.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Demander un devis
            </Button>
            <Button href="/realisations" variant="secondary" size="lg">
              Voir toutes les réalisations
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}

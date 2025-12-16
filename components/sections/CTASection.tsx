import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function CTASection() {
  return (
    <section className="bg-gammart-green-dark py-16 md:py-24">
      <Container>
        <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Prêt à améliorer votre confort et réduire vos dépenses ?
        </h2>
        <p className="text-xl text-gammart-green-sage mb-8 max-w-3xl mx-auto">
          Si vous souhaitez une isolation thermique Bas-Rhin efficace, le plus simple est de démarrer par un
          devis clair et gratuit.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
          <Button href="/contact" variant="secondary" size="lg">
            Demander mon devis gratuit
          </Button>
          <Button
            href="tel:0763982357"
            variant="outline"
            size="lg"
            className="!text-white !border-white hover:!bg-white hover:!text-gammart-green-dark"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            07 63 98 23 57
          </Button>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 text-gammart-green-sage text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Réponse sous 24h
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Sans engagement
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Devis gratuit
          </div>
        </div>
        </div>
      </Container>
    </section>
  )
}

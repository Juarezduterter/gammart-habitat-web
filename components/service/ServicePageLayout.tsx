'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'

interface ServicePageLayoutProps {
  // Hero section
  title: string
  subtitle: string
  description: string
  heroImage: string
  heroIcon: string
  // Benefits section
  benefits: {
    title: string
    description: string
    icon: ReactNode
  }[]
  // Process section
  process: {
    title: string
    description: string
  }[]
  // FAQ section
  faqs: {
    question: string
    answer: string
  }[]
  // Related services
  relatedServices: {
    title: string
    href: string
    icon: string
  }[]
  // CTA
  ctaTitle?: string
  ctaDescription?: string
}

export function ServicePageLayout({
  title,
  subtitle,
  description,
  heroImage,
  heroIcon,
  benefits,
  process,
  faqs,
  relatedServices,
  ctaTitle = 'Prêt à améliorer votre confort ?',
  ctaDescription = 'Demandez votre devis gratuit et sans engagement. Nous vous répondons sous 24h.',
}: ServicePageLayoutProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-gammart-green-dark via-gammart-green-leaf to-gammart-green-dark overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="text-white">
              <ScrollReveal>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Image
                      src={heroIcon}
                      alt={title}
                      width={40}
                      height={40}
                      className="w-10 h-10 brightness-0 invert"
                    />
                  </div>
                  <span className="text-gammart-green-sage font-medium">{subtitle}</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  {title}
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                  {description}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="flex flex-wrap gap-4">
                  <Button href="/contact" variant="secondary" size="lg">
                    Demander un devis gratuit
                  </Button>
                  <Button href="tel:0763982357" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                    07 63 98 23 57
                  </Button>
                </div>
              </ScrollReveal>

              {/* Trust badges */}
              <ScrollReveal delay={400}>
                <div className="flex flex-wrap gap-4 mt-8">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                    <svg className="w-5 h-5 text-gammart-green-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Entreprise RGE
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                    <svg className="w-5 h-5 text-gammart-green-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Garantie décennale
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right - Image */}
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={heroImage}
                    alt={title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Floating stat */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl hidden md:block">
                  <div className="text-4xl font-bold text-gammart-green-dark">-57%</div>
                  <div className="text-gray-600 text-sm">d'énergie en moyenne</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-6">
                Les avantages
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Découvrez pourquoi cette solution est adaptée à votre projet de rénovation énergétique.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} delay={index * 100}>
                <div className="bg-gray-50 rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gammart-green-dark/10 rounded-xl flex items-center justify-center text-gammart-green-dark mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gammart-green-dark mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-6">
                Comment ça se passe ?
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Un processus clair et transparent, de la première visite à la fin des travaux.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gammart-green-dark/20 -translate-y-1/2" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <ScrollReveal key={step.title} delay={index * 150}>
                  <div className="relative text-center">
                    <div className="relative z-10 mx-auto mb-6">
                      <div className="w-20 h-20 rounded-full bg-gammart-green-dark text-white flex items-center justify-center text-2xl font-bold shadow-lg mx-auto">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gammart-green-dark mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-6">
                Questions fréquentes
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal key={faq.question} delay={index * 100}>
                <details className="group bg-gray-50 rounded-2xl overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-semibold text-gammart-green-dark pr-4">{faq.question}</h3>
                    <svg className="w-6 h-6 text-gammart-green-dark flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gammart-green-dark mb-6">
                Services complémentaires
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Pour une rénovation énergétique complète, découvrez nos autres solutions.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 100}>
                <Link
                  href={service.href}
                  className="group block bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-gammart-green-dark/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gammart-green-dark transition-colors">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={32}
                      height={32}
                      className="w-8 h-8 group-hover:brightness-0 group-hover:invert transition-all"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gammart-green-dark mb-2 group-hover:text-gammart-green-leaf transition-colors">
                    {service.title}
                  </h3>
                  <div className="flex items-center text-gammart-green-dark font-medium text-sm">
                    En savoir plus
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gammart-green-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {ctaTitle}
            </h2>
            <p className="text-xl text-gammart-green-sage mb-10">
              {ctaDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="secondary" size="lg">
                Demander mon devis gratuit
              </Button>
              <Button href="tel:0763982357" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                07 63 98 23 57
              </Button>
            </div>
            <p className="text-white/60 mt-6 text-sm">
              Devis gratuit • Sans engagement • Réponse sous 24h
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

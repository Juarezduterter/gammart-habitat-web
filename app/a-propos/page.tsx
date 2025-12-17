import { Metadata } from 'next'
import Image from 'next/image'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Entreprise isolation Bas-Rhin | Gammart Habitat, spécialiste rénovation énergétique en Alsace',
  description: 'Découvrez Gammart Habitat, entreprise isolation Bas-Rhin basée à Geudertheim : mission, valeurs, équipe, certifications (RGE, garanties), zone d\'intervention en Alsace et réalisations.',
}

const values = [
  {
    title: 'Expertise',
    description: 'Maîtrise technique et adaptation au bâti alsacien : maison en brique, murs anciens, zones humides.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Transparence',
    description: 'Devis détaillés, explications claires, recommandations honnêtes. Vous comprenez ce qu\'on fait.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'Proximité',
    description: 'Entreprise locale à Geudertheim, intervention réactive dans le Bas-Rhin et en Alsace.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Engagement',
    description: 'La qualité dans les détails : préparation, finitions, propreté, disponibilité après travaux.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

const certifications = [
  {
    name: 'RGE',
    fullName: 'Reconnu Garant de l\'Environnement',
    description: 'Accès aux aides et cadre de qualification pour les travaux concernés.',
  },
  {
    name: 'Assurance décennale',
    fullName: 'Garantie 10 ans',
    description: 'Garantie 10 ans sur les travaux pour votre sécurité.',
  },
  {
    name: 'RC Pro',
    fullName: 'Responsabilité Civile Professionnelle',
    description: 'Protection en cas de dommage durant les travaux.',
  },
]

export default function AProposPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gammart-green-dark via-gammart-green-leaf to-gammart-green-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Gammart Habitat
                </h1>
                <p className="text-xl md:text-2xl text-gammart-green-sage mb-6">
                  Votre partenaire rénovation énergétique en Alsace
                </p>
                <p className="text-lg text-white/80 mb-8">
                  Nous croyons à une rénovation simple à comprendre et bien exécutée : prioriser les bons travaux, expliquer les choix techniques, et livrer un résultat durable.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                    <svg className="w-5 h-5 text-gammart-green-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Entreprise RGE
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                    <svg className="w-5 h-5 text-gammart-green-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    Bas-Rhin & Alsace
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/photos/renovation-3.jpeg"
                    alt="Équipe Gammart Habitat"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl hidden md:block">
                  <div className="text-4xl font-bold text-gammart-green-dark">10+</div>
                  <div className="text-gray-600 text-sm">ans d'expérience</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-8">
              Notre mission
            </h2>
            <blockquote className="text-2xl md:text-3xl text-gray-700 italic mb-8">
              "Rendre la rénovation énergétique accessible, claire et sereine — avec un résultat concret."
            </blockquote>
            <p className="text-lg text-gray-600">
              Transformer des logements énergivores en habitats plus confortables, plus sains et plus économes.
              Une rénovation réussie ne se résume pas à "mettre de l'isolant" : elle consiste à traiter les bonnes zones,
              au bon moment, avec les bons matériaux.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-6">
                Nos valeurs
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 100}>
                <div className="bg-white rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gammart-green-dark/10 rounded-xl flex items-center justify-center text-gammart-green-dark mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gammart-green-dark mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-6">
                L'équipe
              </h2>
              <p className="text-lg text-gray-600">
                Derrière chaque chantier, il y a une équipe et une méthode.
                La rénovation énergétique se joue aussi sur la confiance.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12 text-center">
              <div className="w-24 h-24 bg-gammart-green-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl font-bold text-white">AG</span>
              </div>
              <h3 className="text-2xl font-bold text-gammart-green-dark mb-2">Alain Gevez</h3>
              <p className="text-gammart-green-sage font-medium mb-4">Fondateur / Dirigeant</p>
              <p className="text-gray-700 italic text-lg max-w-xl mx-auto">
                "Mon objectif : que vous sachiez exactement quoi faire et dans quel ordre, pour un résultat durable."
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-6">
                Nos certifications
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Les certifications et assurances sécurisent votre projet et renforcent votre éligibilité aux aides.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <ScrollReveal key={cert.name} delay={index * 100}>
                <div className="bg-white rounded-2xl p-8 text-center h-full hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gammart-green-dark rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gammart-green-dark mb-1">{cert.name}</h3>
                  <p className="text-sm font-medium text-gammart-green-sage mb-3">{cert.fullName}</p>
                  <p className="text-gray-600">{cert.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div className="flex justify-center gap-8 mt-12 opacity-70">
              <Image
                src="/images/certifications/RGE.svg"
                alt="RGE"
                width={80}
                height={80}
                className="h-16 w-auto"
              />
              <Image
                src="/images/certifications/Qualibat.svg"
                alt="Qualibat"
                width={80}
                height={80}
                className="h-16 w-auto"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 md:py-28 bg-gammart-green-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Prêt à nous confier votre projet ?
            </h2>
            <p className="text-xl text-gammart-green-sage mb-10">
              Rencontrons-nous pour discuter de votre maison et construire une solution claire avec un devis gratuit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="secondary" size="lg">
                Demander un rendez-vous
              </Button>
              <Button href="tel:0763982357" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                07 63 98 23 57
              </Button>
            </div>
            <p className="text-white/60 mt-6 text-sm">
              Devis gratuit • Sans engagement
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

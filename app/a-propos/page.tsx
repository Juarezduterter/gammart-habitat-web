import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Entreprise isolation Bas-Rhin | Gammart Habitat, spécialiste rénovation énergétique en Alsace',
  description: 'Découvrez Gammart Habitat, entreprise isolation Bas-Rhin basée à Geudertheim : mission, valeurs, équipe, certifications (RGE, garanties), zone d\'intervention en Alsace et réalisations. Devis gratuit et accompagnement complet.',
}

const missionPoints = [
  'Transformer les logements en habitats confortables et économes',
  'Accompagner les propriétaires dans leur transition énergétique',
  'Rendre la rénovation plus simple (technique + administratif)',
]

const values = [
  {
    title: 'Expertise',
    description: 'Maîtrise technique et adaptation au bâti alsacien : maison en brique, murs anciens, zones humides, confort d\'été.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Transparence',
    description: 'Devis détaillés, explications claires, recommandations honnêtes. Vous comprenez ce qu\'on fait et pourquoi.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'Proximité',
    description: 'Entreprise locale basée à Geudertheim, intervention réactive dans le Bas-Rhin et en Alsace.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Engagement',
    description: 'Préparation, protections, finitions, propreté de chantier et disponibilité après travaux.',
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
    description: 'Accès aux aides lorsque le RGE est requis, et cadre de qualification pour les travaux concernés.',
    logo: '/images/certifications/RGE.svg',
    logoAlt: 'Logo RGE',
  },
  {
    name: 'Qualibat',
    fullName: 'Qualification BTP',
    description: 'Qualification professionnelle reconnue.',
    logo: '/images/certifications/Qualibat.svg',
    logoAlt: 'Logo Qualibat',
  },
  {
    name: 'Assurance décennale',
    fullName: 'Garantie 10 ans',
    description: 'Garantie 10 ans sur les travaux concernés.',
    logo: '/images/certifications/garantie-decennale.svg',
    logoAlt: 'Garantie decennale',
  },
  {
    name: 'RC Pro',
    fullName: 'Responsabilité Civile Professionnelle',
    description: 'Protection en cas de dommage durant les travaux.',
    logo: '/images/certifications/rc-pro.svg',
    logoAlt: 'RC Pro',
  },
]

const engagements = [
  'Réactivité : réponse sous 24h à toute demande',
  'Clarté : devis détaillé, transparent, compréhensible',
  'Conseil : recommandation adaptée à votre maison, sans vente forcée',
  'Qualité : matériaux certifiés et mise en œuvre soignée',
  'Propreté : chantier protégé, rangé, respectueux de votre intérieur',
  'Suivi : accompagnement jusqu\'à la réception et disponibilité après',
  'Aides : aide à la compréhension et au montage des dossiers (selon éligibilité)',
]

const testimonials = [
  {
    quote: 'Equipe ponctuelle, explications simples, et un vrai gain de confort des la premiere semaine.',
    author: 'Claire L., Strasbourg — ITE',
  },
  {
    quote: 'Chantier propre, delais tenus, et finitions soignees dans les combles.',
    author: 'Marc D., Haguenau — Combles',
  },
  {
    quote: 'Devis clair, conseils utiles, on a avance par etapes sans mauvaise surprise.',
    author: 'Sophie R., Molsheim — Renovation globale',
  },
]

const serviceAreas = [
  'Strasbourg',
  'Haguenau',
  'Brumath',
  'Schiltigheim',
  'Bischheim',
  'Illkirch',
  'Molsheim',
  'Obernai',
  'Saverne',
  'Wasselonne',
  'Sélestat',
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Gammart Habitat',
  description: 'Entreprise isolation Bas-Rhin, spécialiste de la rénovation énergétique en Alsace : isolation, ventilation, menuiseries, finitions façade.',
  url: 'https://www.gammart-habitat.fr',
  telephone: '+33763982357',
  email: 'a.gevez@gammart-habitat.fr',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1 rue des Hirondelles',
    addressLocality: 'Geudertheim',
    postalCode: '67170',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 'XX.XXXXX',
    longitude: 'XX.XXXXX',
  },
  areaServed: ['Bas-Rhin', 'Alsace', 'Grand Est'],
  founder: {
    '@type': 'Person',
    name: 'Alain Gevez',
  },
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: "RGE - Reconnu Garant de l'Environnement",
    },
  ],
}

export default function AProposPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gammart-green-dark via-gammart-green-leaf to-gammart-green-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="text-white">
                <div className="text-sm uppercase tracking-[0.3em] text-white/60 mb-4">
                  <Link href="/" className="hover:text-white">Accueil</Link>
                  <span className="mx-2">/</span>
                  <span>À Propos</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Gammart Habitat, votre partenaire rénovation énergétique en Alsace
                </h1>
                <p className="text-xl md:text-2xl text-gammart-green-sage mb-6">
                  Entreprise isolation Bas-Rhin : diagnostic clair, méthode sérieuse, finitions soignées.
                </p>
                <p className="text-lg text-white/80 mb-8">
                  Nous intervenons en Alsace pour améliorer la performance énergétique des logements, renforcer le confort au quotidien
                  et valoriser le patrimoine. Notre métier : proposer des solutions adaptées au bâti réel, avec une méthode claire.
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
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                    <svg className="w-5 h-5 text-gammart-green-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    Devis gratuit
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/photos/couple-energy-efficiency.jpeg"
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-6">
                Notre mission
              </h2>
              <p className="text-lg text-gray-600">
                Notre mission est de transformer des logements énergivores en habitats plus confortables, plus sains et plus économes.
                Une rénovation réussie ne se résume pas à mettre de l'isolant : elle consiste à traiter les bonnes zones, au bon moment,
                avec les bons matériaux, en gardant une cohérence globale.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12 text-center">
              <blockquote className="text-2xl md:text-3xl text-gray-700 italic mb-6">
                "Rendre la rénovation énergétique accessible, claire et sereine — avec un résultat concret."
              </blockquote>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                {missionPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gammart-green-dark/10 flex items-center justify-center text-gammart-green-dark">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 font-medium">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-6">
                  Notre histoire
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Gammart Habitat est née d'une conviction : beaucoup de propriétaires veulent rénover, mais se sentent perdus face aux choix
                  techniques, aux ordres de travaux et aux démarches d'aides. L'entreprise s'est construite autour d'un savoir-faire de terrain
                  pour proposer une solution réaliste, compatible avec le budget et l'objectif.
                </p>
                <p className="text-lg text-gray-600">
                  Au fil des chantiers, notre approche s'est renforcée : plus de pédagogie, plus de clarté dans les devis, plus d'attention aux
                  interfaces (menuiseries + isolation, isolation + ventilation, façade + finitions), et un accompagnement plus complet.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/images/photos/renovation-team-3.jpeg"
                  alt="Chantier Gammart Habitat"
                  width={600}
                  height={420}
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-white">
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
                <div className="bg-gray-50 rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-6">
                L'équipe
              </h2>
              <p className="text-lg text-gray-600">
                Derrière chaque chantier, il y a une équipe et une méthode. Nous mettons un visage sur l'entreprise, parce que la rénovation
                énergétique se joue aussi sur la confiance et la clarté des échanges.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-white rounded-3xl p-8 md:p-12 text-center shadow-lg">
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

          <ScrollReveal delay={350}>
            <div className="mt-8 bg-white rounded-2xl p-6 text-gray-600">
              Une équipe aux compétences complémentaires : isolation, finitions façade, ventilation, menuiseries (selon organisation), avec
              un interlocuteur principal pour structurer le projet et assurer le suivi.
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-6">
                Nos certifications et garanties
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Les certifications et assurances sont des preuves concrètes : elles sécurisent votre projet et renforcent votre éligibilité
                aux dispositifs d'aides quand ils l'exigent.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <ScrollReveal key={cert.name} delay={index * 100}>
                <div className="bg-gray-50 rounded-2xl p-8 text-center h-full hover:shadow-lg transition-all duration-300">
                  <div className="h-16 flex items-center justify-center mb-6">
                    <Image
                      src={cert.logo}
                      alt={cert.logoAlt}
                      width={120}
                      height={80}
                      className="h-14 w-auto"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gammart-green-dark mb-1">{cert.name}</h3>
                  <p className="text-sm font-medium text-gammart-green-sage mb-3">{cert.fullName}</p>
                  <p className="text-gray-600">{cert.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-6">
                Nos engagements envers vous
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {engagements.map((item, index) => (
              <ScrollReveal key={item} delay={index * 80}>
                <div className="bg-white rounded-2xl p-6 flex items-start gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-gammart-green-dark/10 flex items-center justify-center text-gammart-green-dark">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-6">
                Ce que disent nos clients
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.author} delay={index * 100}>
                <div className="bg-white rounded-2xl p-6 shadow-sm h-full">
                  <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                  <p className="text-sm font-medium text-gammart-green-sage">{testimonial.author}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-6">
                Notre zone d'intervention
              </h2>
              <p className="text-lg text-gray-600">
                Basés à Geudertheim, nous intervenons dans tout le Bas-Rhin et plus largement en Alsace selon votre projet. Notre connaissance
                du bâti local et du climat nous permet d'apporter des solutions adaptées.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-gray-50 rounded-3xl p-8">
              <div className="flex flex-wrap gap-3">
                {serviceAreas.map((city) => (
                  <span key={city} className="bg-white px-4 py-2 rounded-full text-sm text-gray-600 shadow-sm">
                    {city}
                  </span>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button href="/contact" variant="primary" size="lg">
                  Vérifier si nous intervenons chez vous
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-6">
                Pourquoi choisir Gammart Habitat ?
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Expertise locale : connaissance du bâti alsacien et des contraintes terrain',
              'Accompagnement complet : du diagnostic à la réception, aides comprises selon cas',
              'Interlocuteur unique : un contact clair pour piloter le projet',
              'Certifié RGE : lorsque requis, sécurise l\'accès aux aides',
              'Résultats prouvés : réalisations documentées, avant/après, retours clients',
            ].map((item, index) => (
              <ScrollReveal key={item} delay={index * 90}>
                <div className="bg-white rounded-2xl p-6 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gammart-green-dark/10 flex items-center justify-center text-gammart-green-dark">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <p className="text-center text-gray-600 mt-8">
              En résumé : une entreprise isolation Bas-Rhin qui combine pédagogie, qualité d'exécution et vision globale de la rénovation énergétique.
            </p>
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
              Rencontrons-nous pour discuter de votre maison, de vos objectifs (confort, économies, DPE), et construire une solution claire avec un devis gratuit.
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
            <div className="mt-8 text-white/70 text-sm space-y-1">
              <div>Email : a.gevez@gammart-habitat.fr</div>
              <div>Adresse : 1 rue des Hirondelles, 67170 Geudertheim</div>
              <div>Devis gratuit • Sans engagement</div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  )
}

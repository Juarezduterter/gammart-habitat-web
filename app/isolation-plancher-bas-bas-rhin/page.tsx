import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Isolation plancher bas Bas-Rhin | Sol moins froid, confort & économies — Gammart Habitat',
  description:
    'Votre isolation plancher bas Bas-Rhin avec Gammart Habitat : cave/garage/sous-sol, techniques (fixation mécanique, projection), matériaux, durée, prix indicatifs, aides. Devis gratuit, RGE, garantie décennale.',
}

const reassuranceBadges = ['RGE', 'Garantie décennale', 'Devis gratuit']

const problems = [
  {
    title: 'Sol froid / sensation de “pieds glacés”',
    description: 'L’isolant coupe le contact thermique avec le volume froid en dessous. Isolation plancher bas Bas-Rhin.',
  },
  {
    title: 'Inconfort au rez-de-chaussée',
    description: 'Les pièces de vie deviennent plus agréables, même avec une consigne de chauffage plus basse.',
  },
  {
    title: 'Chauffage qui compense en continu',
    description: 'Moins de déperditions = moins d’énergie nécessaire pour maintenir le confort.',
  },
  {
    title: 'Garage/cave très froid sous la maison',
    description: 'L’isolation sous-face limite l’effet “radiateur inversé” vers le bas.',
  },
  {
    title: 'DPE à améliorer',
    description: 'Traiter le plancher bas contribue à la performance globale, surtout avec combles et murs optimisés.',
  },
  {
    title: 'Humidité perçue / sensation de paroi froide',
    description: 'Améliorer l’enveloppe réduit certaines sensations désagréables (après diagnostic).',
  },
]

const benefits = [
  {
    title: 'Confort immédiat au niveau du sol',
    description:
      'Un sol moins froid et une sensation de confort renforcée, surtout dans les pièces carrelées ou les rez-de-chaussée exposés.',
  },
  {
    title: 'Température plus homogène',
    description: 'Quand le bas n’aspire plus la chaleur, la pièce se stabilise et la sensation de confort augmente.',
  },
  {
    title: 'Économies d’énergie',
    description: 'Réduire les pertes diminue les besoins de chauffage. Le gain dépend de l’état initial.',
  },
  {
    title: 'Travaux peu intrusifs',
    description: 'Si l’accès par dessous est possible, l’intervention se fait dans le volume non chauffé.',
  },
  {
    title: 'Durabilité et protection',
    description: 'Une mise en œuvre correcte protège le plancher des écarts thermiques sur le long terme.',
  },
  {
    title: 'Valorisation et cohérence rénovation',
    description: 'Combinée aux combles et aux murs, l’isolation plancher bas renforce la performance globale.',
  },
]

const techniques = [
  {
    title: 'Panneaux isolants en sous-face (fixation mécanique)',
    description: 'Pose de panneaux isolants sous le plancher, fixés mécaniquement pour assurer la tenue dans le temps.',
    ideal: 'Garages, caves, sous-sols accessibles, supports réguliers.',
  },
  {
    title: 'Collage / fixation mixte (selon support)',
    description: 'Fixation combinée (collage + fixation) pour optimiser la tenue et limiter les ponts.',
    ideal: 'Supports compatibles et surfaces adaptées, avec une finition propre.',
  },
  {
    title: 'Projection / flocage (selon cas)',
    description: 'Application d’un isolant projeté pour traiter des zones difficiles ou irrégulières.',
    ideal: 'Zones complexes, sous-face très irrégulière, contraintes spécifiques (après visite).',
  },
]

const materials = [
  {
    title: 'Panneaux rigides (PSE, PIR/PUR selon projets)',
    characteristics: 'Panneaux rigides performants, adaptés aux sous-faces selon conditions.',
    advantages: 'Bonne performance à épaisseur maîtrisée, pose nette.',
    usage: 'Sous-face accessible, hauteur limitée, besoin de performance.',
  },
  {
    title: 'Laine minérale (selon technique)',
    characteristics: 'Isolant utilisé dans certaines compositions, notamment avec ossature.',
    advantages: 'Polyvalence, confort global.',
    usage: 'Projets où l’ossature et la finition sont pertinentes (selon support).',
  },
  {
    title: 'Solutions spécifiques “milieux humides” (selon cas)',
    characteristics: 'Produits compatibles avec l’humidité d’une cave/garage.',
    advantages: 'Durabilité, tenue dans le temps.',
    usage: 'Caves plus humides, sous-sols, configurations à risque (diagnostic indispensable).',
  },
]

const processSteps = [
  {
    title: 'Premier contact',
    description: 'Vous décrivez votre maison et la configuration (cave/garage/vide sanitaire).',
  },
  {
    title: 'Visite technique',
    description: 'Relevés, support, humidité, hauteur disponible, état du plafond de cave/garage.',
  },
  {
    title: 'Étude & devis détaillé',
    description: 'Technique, matériau, épaisseur, finitions, planning et options.',
  },
  {
    title: 'Préparation chantier',
    description: 'Protection, organisation de l’accès, sécurisation de la zone.',
  },
  {
    title: 'Réalisation',
    description: 'Pose panneaux / projection / fixation, traitement des jonctions.',
  },
  {
    title: 'Contrôle qualité',
    description: 'Tenue, continuité, propreté, détails.',
  },
  {
    title: 'Réception & garanties',
    description: 'PV, documents, garanties.',
  },
]

const pricing = [
  { prestation: 'Panneaux sous-face (standard)', fourchette: '40 à 80 €/m²' },
  { prestation: 'Panneaux haute performance / contraintes spécifiques', fourchette: '60 à 100 €/m²' },
  { prestation: 'Projection / cas complexes (selon étude)', fourchette: '50 à 100 €/m²' },
]

const financings = [
  'MaPrimeRénov’',
  'CEE (prime énergie)',
  'Éco-PTZ',
  'TVA réduite (5,5%)',
  'Aides locales (Grand Est / collectivités)',
]

const faqs = [
  {
    question: 'Qu’est-ce que l’isolation du plancher bas ?',
    answer:
      'C’est l’isolation entre les pièces chauffées et un volume non chauffé situé dessous (cave, garage, vide sanitaire), souvent par la sous-face du plancher.',
  },
  {
    question: 'Combien coûte une isolation plancher bas Bas-Rhin ?',
    answer:
      'À titre indicatif, on observe souvent 40 à 100 €/m² selon méthode, matériau et accessibilité. Le devis après visite reste la référence.',
  },
  {
    question: 'Combien de temps durent les travaux ?',
    answer: 'Souvent 1 à 5 jours selon surface et contraintes.',
  },
  {
    question: 'Puis-je rester chez moi pendant les travaux ?',
    answer:
      'Oui généralement, car l’intervention se fait surtout dans la cave/garage. Une gêne peut exister si le garage doit être libéré.',
  },
  {
    question: 'Est-ce vraiment efficace contre le sol froid ?',
    answer: 'Oui : c’est l’un des travaux les plus ressentis en confort, surtout au rez-de-chaussée.',
  },
  {
    question: 'Quelles aides pour l’isolation du plancher bas ?',
    answer:
      'Selon conditions : MaPrimeRénov’, CEE, TVA réduite, Éco-PTZ, et parfois des aides locales. L’éligibilité se vérifie au cas par cas.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Qu’est-ce que l’isolation du plancher bas ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'C’est l’isolation entre les pièces chauffées et un volume non chauffé dessous (cave, garage, vide sanitaire), souvent réalisée en isolant la sous-face du plancher.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte une isolation plancher bas Bas-Rhin ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'À titre indicatif, la fourchette est souvent de 40 à 100 €/m² selon méthode, matériau et accessibilité. Un devis après visite est recommandé.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps durent les travaux ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La durée varie selon surface et contraintes, généralement 1 à 5 jours.',
      },
    },
    {
      '@type': 'Question',
      name: 'Puis-je rester chez moi pendant les travaux ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui dans la plupart des cas, car l’intervention se déroule principalement dans le garage ou la cave.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelles aides pour l’isolation du plancher bas ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Selon conditions : MaPrimeRénov’, CEE, TVA réduite, Éco-PTZ, et parfois des aides locales. L’éligibilité se vérifie au cas par cas.',
      },
    },
  ],
}

export default function PlancherBasBasRhinPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Fil d’Ariane */}
      <nav className="bg-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm flex-wrap">
            <li>
              <Link href="/" className="text-gray-500 hover:text-gammart-green-dark">
                Accueil
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <span className="text-gray-500">Nos Services</span>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <span className="text-gray-500">Isolation du logement</span>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <span className="text-gammart-green-dark font-medium">Isolation du Plancher Bas</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* SECTION 1 — Hero Service */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-gammart-green-dark via-gammart-green-leaf to-gammart-green-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <ScrollReveal>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Image
                      src="/images/pictos/Isolation-Plancher-Bas.svg"
                      alt="Isolation plancher bas Bas-Rhin"
                      width={40}
                      height={40}
                      className="w-10 h-10 brightness-0 invert"
                    />
                  </div>
                  <span className="text-gammart-green-sage font-medium">Cave, garage, vide sanitaire</span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Isolation plancher bas Bas-Rhin : dites stop au sol froid et aux pertes de chaleur par le dessous
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="space-y-4 text-lg text-white/80 leading-relaxed mb-8">
                  <p>
                    Vous cherchez une <strong>isolation plancher bas Bas-Rhin</strong> parce que votre sol est glacé en hiver, que certaines pièces restent
                    inconfortables malgré le chauffage, ou que vous avez une cave, un garage ou un vide sanitaire sous votre maison ? Le plancher bas est
                    une zone souvent oubliée, mais elle pèse lourd sur le confort : quand le dessous est froid, la sensation au sol s’en ressent
                    immédiatement.
                  </p>
                  <p>
                    <strong>Promesse :</strong> un sol plus chaud, un confort renforcé, et moins de pertes de chaleur par le bas.
                  </p>
                  <p>
                    L’isolation du plancher bas consiste à isoler la séparation entre votre volume chauffé et un volume non chauffé. Une{' '}
                    <strong>isolation plancher bas Bas-Rhin</strong> bien réalisée limite la sensation de “pieds froids”, améliore la stabilité thermique,
                    et contribue à réduire la consommation de chauffage.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Button href="/contact" variant="secondary" size="lg" glow>
                    Demander un devis Plancher bas
                  </Button>
                  <Button href="tel:0763982357" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                    07 63 98 23 57
                  </Button>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <div className="flex flex-wrap gap-4">
                  {reassuranceBadges.map((badge) => (
                    <div key={badge} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                      <svg className="w-5 h-5 text-gammart-green-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {badge}
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/photos/underfloor-heating-install.jpeg"
                    alt="Isolation du plancher bas"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl hidden md:block">
                  <div className="text-4xl font-bold text-gammart-green-dark">Sol chaud</div>
                  <div className="text-gray-600 text-sm">Confort immédiat au quotidien</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Définition & Principes */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-8 text-center">
              Qu’est-ce que l’isolation plancher bas Bas-Rhin ?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Le <em>plancher bas</em> correspond au plancher qui sépare les pièces chauffées d’un espace plus froid situé dessous : cave, garage,
                sous-sol, vide sanitaire, passage ouvert, ou même un rez-de-chaussée sur terre-plein dans certains cas. Quand cette séparation est peu
                isolée, le froid “remonte” et vous avez beau chauffer, la sensation de confort reste limitée, notamment au niveau des pieds et des zones
                proches du sol.
              </p>
              <p>
                Une <strong>isolation plancher bas Bas-Rhin</strong> vise à créer une barrière thermique continue entre le chaud et le froid. Le plus
                courant, lorsqu’on a accès au dessous, est d’isoler <strong>la sous-face</strong> du plancher (côté cave/garage) avec des panneaux isolants
                fixés mécaniquement ou collés selon le support. Dans d’autres cas, on étudie des variantes, mais l’objectif reste identique : réduire les
                pertes et améliorer le confort.
              </p>
              <p>
                L’intérêt principal : corriger un inconfort très concret (sol froid) et améliorer l’efficacité de votre chauffage. Souvent, la différence
                est ressentie rapidement, surtout dans les pièces carrelées ou les rez-de-chaussée sur volumes non chauffés.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mt-10 bg-gammart-beige rounded-2xl p-6">
              <p className="text-gammart-green-dark font-medium flex items-start gap-3">
                <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>
                  <strong>Le saviez-vous ?</strong> Une part non négligeable des pertes d’un logement peut venir du bas. Une{' '}
                  <strong>isolation plancher bas Bas-Rhin</strong> est souvent l’un des travaux les plus “ressentis” en confort, car elle agit directement
                  sur la sensation au sol.
                </span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 3 — Problèmes résolus */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-4">
                Isolation plancher bas Bas-Rhin : pour quels problèmes ?
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <ScrollReveal key={problem.title} delay={index * 100}>
                <div className="bg-white rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gammart-green-dark/10 flex items-center justify-center text-gammart-green-dark font-semibold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-gammart-green-dark mb-2">{problem.title}</h3>
                  <p className="text-gray-600">{problem.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={500}>
            <p className="mt-10 text-center text-gammart-green-dark font-medium">
              Si vous avez un volume non chauffé sous vos pièces, l’<strong>isolation plancher bas Bas-Rhin</strong> est un levier simple et efficace pour
              améliorer le confort.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 4 — Bénéfices & Avantages */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-4">
                Les avantages de l’isolation plancher bas Bas-Rhin
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} delay={index * 100}>
                <div className="bg-gray-50 rounded-2xl p-6 h-full border border-gray-100">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gammart-green-dark text-white flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-gammart-green-dark">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — Techniques & Méthodes */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-4">
                Nos techniques pour l’isolation plancher bas Bas-Rhin
              </h2>
              <p className="text-lg text-gray-600">
                Le choix dépend du support, de l’humidité, de la hauteur disponible et de l’accessibilité.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {techniques.map((technique, index) => (
              <ScrollReveal key={technique.title} delay={index * 100}>
                <div className="bg-white rounded-2xl p-6 h-full shadow-sm hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold text-gammart-green-dark mb-2">{technique.title}</h3>
                  <p className="text-gray-600 mb-3">{technique.description}</p>
                  <p className="text-sm font-medium text-gammart-green-dark">Idéal pour : {technique.ideal}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — Matériaux & Produits utilisés */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-4">
                Les matériaux pour une isolation plancher bas Bas-Rhin
              </h2>
              <p className="text-lg text-gray-600">
                Le matériau dépend de la configuration, de l’humidité possible, de l’épaisseur disponible et de l’objectif de performance.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {materials.map((material, index) => (
              <ScrollReveal key={material.title} delay={index * 100}>
                <div className="bg-gray-50 rounded-2xl p-6 h-full border border-gray-100">
                  <h3 className="text-xl font-semibold text-gammart-green-dark mb-3">{material.title}</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      <strong>Caractéristiques :</strong> {material.characteristics}
                    </li>
                    <li>
                      <strong>Avantages :</strong> {material.advantages}
                    </li>
                    <li>
                      <strong>Usage recommandé :</strong> {material.usage}
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — Processus de réalisation */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-4">
                Comment se déroulent vos travaux d’isolation plancher bas Bas-Rhin ?
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.title} delay={index * 80}>
                <div className="bg-white rounded-2xl p-6 h-full shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-gammart-green-dark text-white flex items-center justify-center font-semibold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gammart-green-dark mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={500}>
            <div className="mt-10 bg-white rounded-2xl p-6 border border-gray-100">
              <h4 className="text-lg font-semibold text-gammart-green-dark mb-4">Informations pratiques</h4>
              <div className="grid md:grid-cols-3 gap-4 text-gray-700">
                <div>
                  <strong>Durée moyenne :</strong>
                  <p>souvent 1 à 5 jours selon surface et complexité</p>
                </div>
                <div>
                  <strong>Perturbation :</strong>
                  <p>faible (travaux principalement en cave/garage)</p>
                </div>
                <div>
                  <strong>Saison idéale :</strong>
                  <p>toute l’année, avec planification selon l’usage du garage/cave</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={600}>
            <div className="text-center mt-8">
              <Button href="/contact" variant="primary" size="lg">
                Démarrer mon projet plancher bas
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 8 — Tarifs & Estimation */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-4">
                Quel budget pour une isolation plancher bas Bas-Rhin ?
              </h2>
              <p className="text-lg text-gray-600">
                À titre indicatif, une <strong>isolation plancher bas Bas-Rhin</strong> se situe souvent autour de <strong>40 à 100 €/m²</strong>, selon la
                méthode, le matériau, l’accès et l’état du support.
              </p>
            </div>
          </ScrollReveal>
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Prestation</th>
                    <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700">Fourchette indicative</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {pricing.map((row) => (
                    <tr key={row.prestation}>
                      <td className="px-6 py-4 text-gray-700">{row.prestation}</td>
                      <td className="px-6 py-4 text-right font-medium text-gammart-green-dark">{row.fourchette}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <ScrollReveal delay={200}>
            <div className="mt-6 bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h4 className="text-lg font-semibold text-gammart-green-dark mb-3">Facteurs qui font varier le prix</h4>
              <ul className="grid md:grid-cols-2 gap-3 text-gray-600">
                <li>Surface et hauteur sous plafond</li>
                <li>Accessibilité (garage encombré, cave difficile)</li>
                <li>Humidité / contraintes du support</li>
                <li>Type de matériau (standard vs haute performance)</li>
                <li>Finition souhaitée (propreté, habillages, zones sensibles)</li>
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <p className="text-center text-sm text-gray-600 mt-4">Mention importante : prix indicatifs. Devis personnalisé gratuit après visite.</p>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <div className="text-center mt-8">
              <Button href="/contact" variant="primary" size="lg">
                Obtenir mon estimation gratuite
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 9 — Aides & Financements */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-4">
                Aides financières pour l’isolation plancher bas Bas-Rhin
              </h2>
              <p className="text-lg text-gray-600">
                Nous vous accompagnons pour identifier les aides pertinentes et constituer les éléments nécessaires.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {financings.map((item, index) => (
              <ScrollReveal key={item} delay={index * 80}>
                <div className="bg-white rounded-2xl p-5 border border-gray-100 h-full flex items-start gap-3">
                  <svg className="w-6 h-6 text-gammart-green-dark flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={400}>
            <div className="text-center mt-8">
              <Button href="/aides-financements" variant="secondary" size="lg">
                Simuler mes aides
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 11 — FAQ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-4">
                Questions fréquentes sur l’isolation plancher bas Bas-Rhin
              </h2>
            </div>
          </ScrollReveal>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal key={faq.question} delay={index * 80}>
                <details className="group bg-white rounded-2xl overflow-hidden border border-gray-100">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-semibold text-gammart-green-dark pr-4">{faq.question}</h3>
                    <svg
                      className="w-6 h-6 text-gammart-green-dark flex-shrink-0 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12 — Bloc expertise */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-4">
                Pourquoi choisir Gammart Habitat pour votre isolation plancher bas Bas-Rhin ?
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Diagnostic précis — support, humidité, accessibilité : on choisit la bonne technique dès le départ.',
              'Mise en œuvre propre — fixation adaptée, continuité de pose, finitions soignées en sous-face.',
              'Accompagnement — devis détaillé, priorisation des travaux, orientation aides si applicable.',
              'Garanties — cadre professionnel, garantie décennale et suivi.',
            ].map((item, index) => (
              <ScrollReveal key={item} delay={index * 100}>
                <div className="flex items-start gap-3 bg-gray-50 rounded-2xl p-5 border border-gray-100 h-full">
                  <svg className="w-6 h-6 text-gammart-green-dark flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={400}>
            <p className="text-center text-gammart-green-dark font-semibold mt-8">
              Notre objectif : une isolation plancher bas Bas-Rhin qui se ressent immédiatement au quotidien, sans chantier compliqué dans vos pièces de
              vie.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

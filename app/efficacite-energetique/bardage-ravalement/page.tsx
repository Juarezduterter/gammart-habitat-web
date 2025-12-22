import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Ravalement de façade Bas-Rhin | Bardage, enduit & rénovation extérieure — Gammart Habitat',
  description:
    'Votre ravalement de façade Bas-Rhin avec Gammart Habitat : enduit, bardage ventilé, réparation fissures, finitions, délais, prix indicatifs et aides (selon projets). Devis gratuit, RGE, garantie décennale.',
}

const reassuranceBadges = ['RGE (selon prestations)', 'Garantie décennale', 'Devis gratuit']

const problems = [
  {
    title: 'Façade ternie, sale, noircie',
    description: 'Nettoyage + remise en état + finition propre. Ravalement de façade Bas-Rhin.',
  },
  {
    title: 'Fissures / microfissures',
    description: 'Traitement adapté selon le type de fissure et l’état du support.',
  },
  {
    title: 'Enduit qui s’écaille ou se décolle',
    description: 'Réparation et reprise pour retrouver une façade saine et durable.',
  },
  {
    title: 'Humidité / porosité du support',
    description: 'Le ravalement rétablit la protection du support (après diagnostic).',
  },
  {
    title: 'Façade vieillissante, style daté',
    description: 'Bardage ou enduit modernisé pour valoriser le logement.',
  },
  {
    title: 'Besoin de valoriser la maison',
    description: 'Une façade rénovée est l’un des changements les plus visibles et valorisants.',
  },
]

const benefits = [
  {
    title: 'Protection du bâti et durabilité',
    description: 'Le ravalement limite la porosité et les dégradations progressives.',
  },
  {
    title: 'Embellissement immédiat',
    description: 'Teinte propre, façade uniforme, détails mieux finis.',
  },
  {
    title: 'Valorisation du bien',
    description: 'Une façade rénovée augmente l’attractivité du logement.',
  },
  {
    title: 'Réduction des désordres',
    description: 'Traitement des fissures et reprise du support pour stabiliser la façade.',
  },
  {
    title: 'Large choix de styles et finitions',
    description: 'Enduit, peinture, bardage bois/composite/métal : rendu adapté à votre maison.',
  },
  {
    title: 'Couplage possible avec une ITE',
    description: 'La façade peut devenir une partie d’un projet global de performance.',
  },
]

const techniques = [
  {
    title: 'Ravalement sous enduit (réparation + finition)',
    description: 'Préparation du support, traitement des fissures, puis application d’une finition.',
    ideal: 'Rendu traditionnel, maisons alsaciennes, remise en état esthétique et protectrice.',
  },
  {
    title: 'Bardage ventilé (bois, composite, métal…)',
    description: 'Ossature + lame d’air + parement pour une façade ventilée et durable.',
    ideal: 'Modernisation, façade exposée, recherche d’un style contemporain.',
  },
  {
    title: 'Vêture / parement de façade (selon projets)',
    description: 'Panneaux de parement posés selon systèmes, rendu régulier et maîtrisé.',
    ideal: 'Projets où la finition en panneaux est recherchée.',
  },
  {
    title: 'Préparation de support (étape clé)',
    description: 'Nettoyage, reprises, consolidation : la préparation conditionne la tenue.',
    ideal: 'Toutes façades, c’est l’invisible qui fait la qualité.',
  },
]

const materials = [
  {
    title: 'Enduits de façade',
    characteristics: 'Finitions variées (taloché, gratté…), rôle protecteur.',
    advantages: 'Rendu traditionnel, large choix esthétique.',
    usage: 'Rénovation de façade avec rendu enduit.',
  },
  {
    title: 'Peintures de façade',
    characteristics: 'Finition colorée, adaptée à certains supports après préparation.',
    advantages: 'Uniformisation de teinte, protection selon systèmes.',
    usage: 'Façades dont le support et la préparation le permettent.',
  },
  {
    title: 'Bardage bois',
    characteristics: 'Esthétique chaleureuse, rendu naturel.',
    advantages: 'Style moderne ou traditionnel selon profil.',
    usage: 'Façades où l’on veut un rendu premium (entretien à anticiper).',
  },
  {
    title: 'Bardage composite',
    characteristics: 'Aspect bois possible, entretien réduit.',
    advantages: 'Durabilité, stabilité de teinte selon gammes.',
    usage: 'Rendu contemporain avec moins d’entretien.',
  },
  {
    title: 'Bardage métallique / PVC (selon projets)',
    characteristics: 'Solutions techniques, styles variés.',
    advantages: 'Robustesse, esthétique spécifique, tenue selon systèmes.',
    usage: 'Projets contemporains, façades exposées.',
  },
]

const processSteps = [
  {
    title: 'Premier contact',
    description: 'Description de la façade, symptômes, commune, attentes esthétiques.',
  },
  {
    title: 'Visite technique',
    description: 'Diagnostic support, relevés, zones sensibles, accès/échafaudage.',
  },
  {
    title: 'Étude & devis',
    description: 'Préparation, type de finition, options (bardage/enduit), planning.',
  },
  {
    title: 'Préparation chantier',
    description: 'Protections, échafaudage, organisation et sécurité.',
  },
  {
    title: 'Préparation support',
    description: 'Nettoyage, reprises, traitement fissures, corrections nécessaires.',
  },
  {
    title: 'Application finition',
    description: 'Enduit/peinture/bardage selon choix, détails et finitions.',
  },
  {
    title: 'Contrôle qualité & réception',
    description: 'Vérification, nettoyage, PV, garanties.',
  },
]

const pricing = [
  { prestation: 'Ravalement peinture (selon support)', fourchette: '40 à 80 €/m²' },
  { prestation: 'Ravalement enduit (selon préparation)', fourchette: '60 à 120 €/m²' },
  { prestation: 'Bardage ventilé (selon parement)', fourchette: '120 à 250 €/m²' },
]

const projects = [
  { location: 'Bas-Rhin (ex.)', description: 'Ravalement complet + finition enduit', action: 'Voir le projet' },
  { location: 'Strasbourg (ex.)', description: 'Bardage ventilé contemporain', action: 'Voir le projet' },
  { location: 'Eurométropole (ex.)', description: 'Rénovation façade + reprise fissures', action: 'Voir le projet' },
  { location: 'Bas-Rhin (ex.)', description: 'Façade + ITE (rénovation énergétique & esthétique)', action: 'Voir le projet' },
]

const faqs = [
  {
    question: 'Quand faut-il faire un ravalement de façade ?',
    answer:
      'Quand l’enduit se dégrade, que la façade se fissure, se salit durablement, ou quand la protection du support est altérée. Un diagnostic permet d’évaluer l’urgence.',
  },
  {
    question: 'Bardage ou enduit : que choisir ?',
    answer:
      'Enduit si vous voulez un rendu traditionnel et une remise en état “classique”. Bardage si vous souhaitez moderniser, renforcer la robustesse ou choisir une finition ventilée.',
  },
  {
    question: 'Combien coûte un ravalement de façade Bas-Rhin ?',
    answer:
      'Très variable : état du support, hauteur, échafaudage, finition. À titre indicatif, 40 à 120 €/m² pour ravalement, bardage plutôt 120 à 250 €/m² selon parement.',
  },
  {
    question: 'Combien de temps durent les travaux ?',
    answer: 'Souvent 1 à 3 semaines selon surface, météo et niveau de finition.',
  },
  {
    question: 'Puis-je rester chez moi pendant les travaux ?',
    answer:
      'Oui généralement : le chantier se déroule majoritairement à l’extérieur, avec quelques contraintes (accès, bruit, protections).',
  },
  {
    question: 'Faut-il une autorisation pour un ravalement ?',
    answer:
      'Selon commune et modification d’aspect, des démarches peuvent être nécessaires. On vérifie avant de lancer.',
  },
  {
    question: 'Quelles garanties pour un ravalement ?',
    answer: 'Les travaux sont encadrés par les garanties applicables, dont la garantie décennale selon le périmètre de la prestation.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Bardage ou enduit : que choisir ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Enduit pour un rendu traditionnel et une remise en état classique. Bardage pour moderniser l’esthétique, souvent avec une solution ventilée plus robuste.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte un ravalement de façade Bas-Rhin ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'À titre indicatif, un ravalement peut varier de 40 à 120 €/m² selon état et finition. Un bardage ventilé se situe souvent autour de 120 à 250 €/m² selon parement et complexité. Un devis après visite est recommandé.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps durent les travaux ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La durée dépend de la surface, de la météo et de la finition, souvent 1 à 3 semaines.',
      },
    },
    {
      '@type': 'Question',
      name: 'Faut-il une autorisation pour un ravalement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Selon la commune et les modifications d’aspect, des démarches peuvent être nécessaires. Il est conseillé de vérifier en amont.',
      },
    },
  ],
}

export default function BardageRavalementPage() {
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
              <span className="text-gammart-green-dark font-medium">Bardage & Ravalement de Façade</span>
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
                      src="/images/pictos/Bardage-Facade.svg"
                      alt="Ravalement de façade Bas-Rhin"
                      width={40}
                      height={40}
                      className="w-10 h-10 brightness-0 invert"
                    />
                  </div>
                  <span className="text-gammart-green-sage font-medium">Bardage & enduit</span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Ravalement de façade Bas-Rhin : bardage & enduit pour protéger, embellir et valoriser votre maison
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="space-y-4 text-lg text-white/80 leading-relaxed mb-8">
                  <p>
                    Vous cherchez un <strong>ravalement de façade Bas-Rhin</strong> parce que votre enduit se dégrade, que des fissures apparaissent, que la
                    façade noircit avec le temps ou que vous souhaitez moderniser l’esthétique de votre maison ? Le ravalement et le bardage ne sont pas
                    “que du visuel” : ils protègent le bâti, améliorent la durabilité de la façade et valorisent immédiatement le logement.
                  </p>
                  <p>
                    <strong>Promesse :</strong> une façade protégée et plus belle, avec des finitions propres et un chantier encadré.
                  </p>
                  <p>
                    Le ravalement consiste à remettre en état l’enveloppe extérieure : nettoyage, traitement des fissures, réparation du support, puis
                    finition (enduit, peinture, ou système de façade). Le bardage, lui, consiste à habiller la façade avec un parement, souvent en solution
                    ventilée. Un <strong>ravalement de façade Bas-Rhin</strong> bien conçu prolonge la vie du support et améliore l’esthétique.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Button href="/contact" variant="secondary" size="lg" glow>
                    Demander un devis Façade
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
                    src="/images/photos/facade-renovation-progress.jpeg"
                    alt="Ravalement de façade"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl hidden md:block">
                  <div className="text-4xl font-bold text-gammart-green-dark">Façade</div>
                  <div className="text-gray-600 text-sm">Protection & esthétique</div>
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
              Le principe du ravalement de façade Bas-Rhin (et quand choisir le bardage)
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Le <strong>ravalement de façade Bas-Rhin</strong> vise à assainir et protéger le support, réparer les désordres et remettre la façade en état
                avec une finition durable. Avec le temps, une façade subit pluie, gel, pollution, UV, variations thermiques. Ces agressions finissent par
                fragiliser l’enduit, marquer la teinte ou créer des zones poreuses.
              </p>
              <p>
                Le <strong>bardage</strong> est une solution de finition qui consiste à poser un parement sur la façade. Très souvent, il est posé en{' '}
                <strong>bardage ventilé</strong> : une lame d’air entre le support et le parement améliore la durabilité et la gestion de l’humidité.
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
                  <strong>Le saviez-vous ?</strong> Un ravalement bien fait protège la maçonnerie, limite l’infiltration d’eau et évite que de petits
                  désordres deviennent des réparations lourdes. <strong>Ravalement de façade Bas-Rhin</strong>.
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
                Bardage & ravalement de façade Bas-Rhin : pour quels problèmes ?
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
              Si votre façade commence à se dégrader ou si vous souhaitez moderniser l’extérieur, un{' '}
              <strong>ravalement de façade Bas-Rhin</strong> est une étape structurante.
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
                Les avantages du ravalement de façade Bas-Rhin (et du bardage)
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
                Nos techniques de ravalement de façade Bas-Rhin et de bardage
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                Les matériaux pour un ravalement de façade Bas-Rhin et un bardage durable
              </h2>
              <p className="text-lg text-gray-600">
                Le choix dépend du support, de l’exposition, du style souhaité et de la durabilité attendue.
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
                Comment se déroulent vos travaux de ravalement de façade Bas-Rhin ?
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
                  <p>1 à 3 semaines (variable selon surface, météo, finitions)</p>
                </div>
                <div>
                  <strong>Perturbation :</strong>
                  <p>faible à modérée (travaux principalement à l’extérieur)</p>
                </div>
                <div>
                  <strong>Saison idéale :</strong>
                  <p>printemps/été/automne selon contraintes de séchage et météo</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={600}>
            <div className="text-center mt-8">
              <Button href="/contact" variant="primary" size="lg">
                Démarrer mon projet façade
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
                Quel budget pour un ravalement de façade Bas-Rhin ?
              </h2>
              <p className="text-lg text-gray-600">
                À titre indicatif, un <strong>ravalement de façade Bas-Rhin</strong> se situe souvent dans ces ordres de grandeur, selon l’état, l’accès et la
                finition.
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
              <h4 className="text-lg font-semibold text-gammart-green-dark mb-3">Facteurs de variation</h4>
              <ul className="grid md:grid-cols-2 gap-3 text-gray-600">
                <li>Surface et hauteur (échafaudage)</li>
                <li>État du support (réparations, reprises)</li>
                <li>Type de finition (enduit, peinture, bardage)</li>
                <li>Complexité (angles, modénatures, ouvertures, seuils)</li>
                <li>Exposition et contraintes météo (planning)</li>
                <li>Niveau de finition esthétique attendu</li>
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
                Aides financières pour façade : ravalement et bardage
              </h2>
              <p className="text-lg text-gray-600">
                Le ravalement “pur” n’est pas toujours éligible aux aides énergétiques. En revanche, couplé à une ITE, le projet peut entrer dans des
                dispositifs selon conditions.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Ravalement seul : financement classique, devis précis, planification.',
              'Façade + ITE : MaPrimeRénov’, CEE, TVA 5,5%, Éco-PTZ selon éligibilité.',
            ].map((item, index) => (
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
            <p className="text-center text-gray-600 mt-6">
              Message clé : on vous aide à clarifier ce qui est réellement finançable selon votre configuration.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={500}>
            <div className="text-center mt-8">
              <Button href="/aides-financements" variant="secondary" size="lg">
                Découvrir les aides
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 10 — Réalisations */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-4">
                Nos réalisations en ravalement de façade Bas-Rhin et bardage
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <ScrollReveal key={`${project.location}-${index}`} delay={index * 100}>
                <div className="rounded-2xl p-6 bg-gray-50 border border-gray-100 h-full">
                  <p className="text-sm text-gammart-green-dark font-semibold mb-2">{project.location}</p>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <Link
                    href="/realisations"
                    className="text-gammart-green-dark font-medium hover:text-gammart-green-leaf transition-colors inline-flex items-center gap-2"
                  >
                    {project.action}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={300}>
            <div className="text-center mt-8">
              <Button href="/realisations" variant="primary" size="lg">
                Toutes nos réalisations Façade
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
                Questions fréquentes sur le ravalement de façade Bas-Rhin
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
                Pourquoi choisir Gammart Habitat pour votre ravalement de façade Bas-Rhin ?
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Diagnostic sérieux — on ne “recouvre” pas un problème : on traite le support avant la finition.',
              'Finitions propres — détails, angles, tableaux, uniformité : l’esthétique se joue sur la qualité d’exécution.',
              'Solutions adaptées — enduit ou bardage selon vos objectifs (style, durabilité, budget).',
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
              Notre objectif : un ravalement de façade Bas-Rhin qui protège réellement votre maison et qui se voit… dans le bon sens.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

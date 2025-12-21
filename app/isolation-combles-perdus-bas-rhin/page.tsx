import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Isolation combles perdus Bas-Rhin | Soufflage rapide, confort & économies — Gammart Habitat',
  description:
    'Votre isolation combles perdus Bas-Rhin avec Gammart Habitat : soufflage ou rouleaux, choix des matériaux, aides possibles, durée, prix indicatifs. Devis gratuit, RGE, garantie décennale.',
}

const reassuranceBadges = ['RGE', 'Garantie décennale', 'Devis gratuit']

const problems = [
  {
    title: 'Maison qui se refroidit trop vite',
    description: 'La chaleur s’échappe par le haut : l’isolant limite cette fuite. Isolation combles perdus Bas-Rhin.',
  },
  {
    title: 'Factures de chauffage élevées',
    description: 'Réduire les pertes améliore l’efficacité du chauffage.',
  },
  {
    title: 'Plafonds froids / sensation de courant d’air',
    description: 'Un haut mieux isolé donne une température plus stable.',
  },
  {
    title: 'Chambres à l’étage difficiles à chauffer',
    description: 'Le plancher des combles peut changer la donne si l’étage est sous combles perdus.',
  },
  {
    title: 'DPE à améliorer',
    description: 'Traiter le haut du logement aide à améliorer la performance globale.',
  },
  {
    title: 'Rénovation progressive',
    description: 'Commencer par les combles perdus permet un premier résultat concret.',
  },
]

const benefits = [
  {
    title: 'Un gain de confort très rapide',
    description:
      'Après une isolation combles perdus Bas-Rhin, la température est plus stable et le chauffage tourne moins.',
  },
  {
    title: 'Des économies d’énergie',
    description:
      'Si les combles étaient peu ou mal isolés, l’impact peut être significatif sur la consommation.',
  },
  {
    title: 'Un chantier court et peu invasif',
    description:
      'L’intervention se fait principalement dans les combles, avec une gêne limitée dans les pièces de vie.',
  },
  {
    title: 'Compatible avec une rénovation progressive',
    description: 'Vous pouvez isoler les combles perdus puis traiter les murs, la ventilation ou le plancher bas.',
  },
  {
    title: 'Sensation “plafond chaud”',
    description: 'Le haut bien isolé réduit la sensation de froid par le plafond et améliore le confort perçu.',
  },
  {
    title: 'Durabilité et tranquillité',
    description: 'Pose homogène, épaisseur adaptée et détails soignés pour une solution durable et garantie.',
  },
]

const techniques = [
  {
    title: 'Soufflage (isolant en vrac)',
    description: 'Un isolant est soufflé de manière uniforme sur le plancher des combles.',
    ideal: 'Combles perdus avec recoins, accès correct, besoin d’un chantier rapide et homogène.',
  },
  {
    title: 'Rouleaux (pose en couches)',
    description: 'Déroulage d’isolant, souvent en deux couches croisées pour améliorer la continuité.',
    ideal: 'Combles accessibles et planchers adaptés à une pose régulière.',
  },
  {
    title: 'Panneaux (selon configurations)',
    description: 'Panneaux rigides ou semi-rigides posés avec attention aux jonctions.',
    ideal: 'Cas où l’on cherche une tenue mécanique ou un format adapté à la zone.',
  },
]

const materials = [
  {
    title: 'Ouate de cellulose (soufflage)',
    characteristics: 'Isolant en vrac, soufflé pour couvrir uniformément.',
    advantages: 'Très bon remplissage des zones difficiles, rapidité de mise en œuvre.',
    usage: 'Combles perdus, recherche d’homogénéité.',
  },
  {
    title: 'Laine de verre (rouleaux)',
    characteristics: 'Isolant très courant, en rouleaux.',
    advantages: 'Économique, efficace si pose continue et bien jointe.',
    usage: 'Combles perdus accessibles, pose en couches.',
  },
  {
    title: 'Laine de roche',
    characteristics: 'Isolant apprécié pour son comportement acoustique.',
    advantages: 'Confort global, solution robuste selon projets.',
    usage: 'Cas où l’acoustique et la robustesse sont prioritaires.',
  },
  {
    title: 'Fibre de bois (selon objectifs)',
    characteristics: 'Isolant biosourcé, intéressant pour le confort d’été.',
    advantages: 'Approche “éco”, confort estival renforcé dans certains projets.',
    usage: 'Projets orientés confort d’été / biosourcé.',
  },
]

const processSteps = [
  {
    title: 'Premier contact',
    description: 'Vous décrivez votre maison et vos symptômes (froid, factures, DPE).',
  },
  {
    title: 'Visite technique',
    description: 'Accès, état existant, repérage des points sensibles (trappe, gaines, spots).',
  },
  {
    title: 'Étude & devis',
    description: 'Choix méthode (soufflage/rouleaux), matériau, épaisseur, planning.',
  },
  {
    title: 'Préparation chantier',
    description: 'Protections, sécurisation, organisation de l’accès aux combles.',
  },
  {
    title: 'Réalisation',
    description: 'Pose homogène, contrôle d’épaisseur, traitement des zones sensibles.',
  },
  {
    title: 'Contrôle qualité',
    description: 'Vérification continuité, finitions, nettoyage.',
  },
  {
    title: 'Réception & garanties',
    description: 'Documents, conseils, garanties.',
  },
]

const pricing = [
  { prestation: 'Soufflage combles perdus', fourchette: '20 à 60 €/m²' },
  { prestation: 'Rouleaux en 2 couches (si pertinent)', fourchette: '30 à 80 €/m²' },
]

const financings = [
  'MaPrimeRénov’',
  'CEE (prime énergie)',
  'Éco-PTZ',
  'TVA réduite 5,5%',
  'Aides locales (Grand Est / collectivités)',
]

const projects = [
  { location: 'Bas-Rhin (ex.)', description: 'Soufflage combles perdus + confort renforcé', action: 'Voir le projet' },
  { location: 'Strasbourg (ex.)', description: 'Reprise isolation existante + pose homogène', action: 'Voir le projet' },
  { location: 'Eurométropole (ex.)', description: 'Combles perdus : optimisation zones sensibles', action: 'Voir le projet' },
]

const faqs = [
  {
    question: 'Combles perdus : soufflage ou rouleaux ?',
    answer:
      'Le soufflage couvre très bien les recoins et se réalise vite. Les rouleaux sont pertinents si les combles sont accessibles et que la pose peut être parfaitement continue.',
  },
  {
    question: 'Combien de temps dure une isolation combles perdus Bas-Rhin ?',
    answer: 'Souvent une demi-journée à 2 jours selon surface et accessibilité.',
  },
  {
    question: 'Puis-je rester chez moi pendant les travaux ?',
    answer: 'Oui la plupart du temps : l’intervention se passe dans les combles, avec une gêne limitée.',
  },
  {
    question: 'Est-ce que c’est vraiment rentable ?',
    answer:
      'Souvent oui, surtout si l’isolation existante est insuffisante. Le gain dépend du point de départ et de la cohérence globale du logement.',
  },
  {
    question: 'Quelle épaisseur d’isolant faut-il ?',
    answer:
      'Cela dépend du matériau, de l’objectif de performance et des contraintes du comble. La visite technique permet de dimensionner correctement.',
  },
  {
    question: 'Quelles aides pour l’isolation combles perdus Bas-Rhin ?',
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
      name: 'Combles perdus : soufflage ou rouleaux ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le soufflage est rapide et couvre bien les recoins. Les rouleaux sont pertinents si l’accès permet une pose continue et soignée, souvent en couches croisées.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps dure une isolation combles perdus Bas-Rhin ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Souvent une demi-journée à 2 jours selon la surface, l’accessibilité et l’état existant.',
      },
    },
    {
      '@type': 'Question',
      name: 'Puis-je rester chez moi pendant les travaux ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui généralement, car l’intervention se fait principalement dans les combles, avec une gêne limitée.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelles aides pour l’isolation combles perdus Bas-Rhin ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Selon conditions : MaPrimeRénov’, CEE, TVA réduite, Éco-PTZ, et parfois des aides locales. L’éligibilité se vérifie au cas par cas.',
      },
    },
  ],
}

export default function ComblesPerdusPage() {
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
              <Link href="/isolation/combles" className="text-gray-500 hover:text-gammart-green-dark">
                Isolation des combles
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <span className="text-gammart-green-dark font-medium">Isolation des combles perdus</span>
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
                      src="/images/pictos/Isolation-Combles-Perdus.svg"
                      alt="Isolation combles perdus Bas-Rhin"
                      width={40}
                      height={40}
                      className="w-10 h-10 brightness-0 invert"
                    />
                  </div>
                  <span className="text-gammart-green-sage font-medium">Soufflage rapide & confort durable</span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Isolation combles perdus Bas-Rhin : la solution la plus rapide pour stopper les pertes de chaleur par le haut
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="space-y-4 text-lg text-white/80 leading-relaxed mb-8">
                  <p>
                    Vous cherchez une <strong>isolation combles perdus Bas-Rhin</strong> parce que votre maison se refroidit trop vite, que le chauffage
                    tourne en continu, ou que vous voulez enfin commencer une rénovation énergétique “par le bon bout” ? Les combles perdus sont très
                    souvent <strong>la priorité n°1</strong> : un chantier généralement court, un gain de confort rapide, et une vraie diminution des
                    déperditions par la toiture.
                  </p>
                  <p>
                    <strong>Promesse :</strong> isoler le haut de la maison efficacement, sans gros travaux intérieurs, pour gagner en confort et réduire
                    vos besoins de chauffage.
                  </p>
                  <p>
                    L’isolation des combles perdus consiste à isoler <strong>le plancher des combles non aménagés</strong> (le “sol” des combles), afin
                    d’empêcher la chaleur de s’échapper vers la toiture. Une <strong>isolation combles perdus Bas-Rhin</strong> bien réalisée repose sur une
                    pose homogène, une épaisseur adaptée et un traitement soigné des zones sensibles (trappe, passages de gaines, jonctions, etc.).
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Button href="/contact" variant="secondary" size="lg" glow>
                    Demander un devis combles perdus
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
                    src="/images/photos/roof-frame-aerial.jpeg"
                    alt="Isolation des combles perdus"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl hidden md:block">
                  <div className="text-4xl font-bold text-gammart-green-dark">Rapide</div>
                  <div className="text-gray-600 text-sm">Soufflage homogène, résultat visible</div>
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
              Le principe de l’isolation combles perdus Bas-Rhin
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Les <em>combles perdus</em> sont des combles <strong>non habitables</strong> (ou difficilement aménageables), souvent accessibles par une
                trappe, avec une charpente qui ne permet pas un usage de pièce. Dans ce cas, la méthode la plus efficace est d’isoler <strong>le
                plancher</strong>, pas la toiture. Pourquoi ? Parce qu’on cherche à garder la chaleur <strong>dans les pièces de vie</strong>, et à ne pas
                chauffer inutilement un volume non utilisé.
              </p>
              <p>
                Une <strong>isolation combles perdus Bas-Rhin</strong> fonctionne comme une couverture thermique : elle limite les échanges entre l’intérieur
                chauffé et l’extérieur. L’air chaud monte naturellement ; si le haut est mal isolé, vous perdez une part importante de la chaleur
                produite. En isolant le plancher des combles, vous réduisez la perte, vous stabilisez la température des pièces, et vous améliorez la
                sensation de confort sans changer vos habitudes.
              </p>
              <p>Deux grandes logiques existent :</p>
              <ul>
                <li>
                  <strong>Le soufflage</strong> (isolant en vrac) : très rapide, couvre bien les recoins.
                </li>
                <li>
                  <strong>Les rouleaux/panneaux</strong> : efficaces aussi, mais demandent une pose propre et continue, souvent en couches croisées.
                </li>
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mt-10 bg-gammart-beige rounded-2xl p-6">
              <p className="text-gammart-green-dark font-medium flex items-start gap-3">
                <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>
                  <strong>Le saviez-vous ?</strong> Quand on veut démarrer une rénovation énergétique, l’<strong>isolation combles perdus Bas-Rhin</strong>
                  est souvent le chantier le plus “rentable” en termes de confort gagné par euro investi. <strong>Isolation combles perdus Bas-Rhin</strong>.
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
                Isolation combles perdus Bas-Rhin : pour quels problèmes ?
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
              Si votre objectif est un gain rapide, l’<strong>isolation combles perdus Bas-Rhin</strong> est un excellent point de départ.{' '}
              <strong>Isolation combles perdus Bas-Rhin</strong>.
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
                Les avantages de l’isolation combles perdus Bas-Rhin
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
                Nos techniques d’isolation combles perdus Bas-Rhin
              </h2>
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
          <ScrollReveal delay={400}>
            <p className="text-center text-gray-600 mt-10">
              Si vos combles sont aménageables ou si vous avez des pièces sous toiture, voir la page{' '}
              <Link href="/isolation-rampants-bas-rhin" className="text-gammart-green-dark font-medium hover:text-gammart-green-leaf">
                Isolation des rampants
              </Link>
              .
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 6 — Matériaux & Produits utilisés */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-4">
                Les matériaux pour une isolation combles perdus Bas-Rhin
              </h2>
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
                      <strong>Recommandé pour :</strong> {material.usage}
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
                Comment se déroulent vos travaux d’isolation combles perdus Bas-Rhin ?
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
              <h4 className="text-lg font-semibold text-gammart-green-dark mb-4">Infos pratiques</h4>
              <div className="grid md:grid-cols-3 gap-4 text-gray-700">
                <div>
                  <strong>Durée moyenne :</strong>
                  <p>une demi-journée à 2 jours selon surface et accessibilité</p>
                </div>
                <div>
                  <strong>Perturbation :</strong>
                  <p>faible (travaux principalement dans les combles)</p>
                </div>
                <div>
                  <strong>Saison idéale :</strong>
                  <p>toute l’année, avec planification selon votre présence</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={600}>
            <div className="text-center mt-8">
              <Button href="/contact" variant="primary" size="lg">
                Faire diagnostiquer mes combles
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
                Prix isolation combles perdus Bas-Rhin : quelle fourchette ?
              </h2>
              <p className="text-lg text-gray-600">
                À titre indicatif, une <strong>isolation combles perdus Bas-Rhin</strong> se situe souvent dans une fourchette d’environ{' '}
                <strong>20 à 60 €/m²</strong>, selon la méthode, l’épaisseur, l’état existant et l’accessibilité.
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
                <li>Surface à isoler</li>
                <li>Accessibilité (trappe, hauteur, circulation)</li>
                <li>État existant (ancien isolant à reprendre)</li>
                <li>Méthode (soufflage vs rouleaux)</li>
                <li>Complexité des détails (passages de gaines, trappes, zones étroites)</li>
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
                Aides financières pour l’isolation combles perdus Bas-Rhin
              </h2>
              <p className="text-lg text-gray-600">Nous vous accompagnons pour comprendre ce qui s’applique réellement à votre projet.</p>
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
                Nos réalisations en isolation combles perdus Bas-Rhin
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ScrollReveal key={project.location} delay={index * 100}>
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
                Toutes nos réalisations combles
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
                Questions fréquentes sur l’isolation combles perdus Bas-Rhin
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
                Pourquoi choisir Gammart Habitat pour votre isolation combles perdus Bas-Rhin ?
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Expertise terrain — diagnostic clair, choix de méthode pertinent, pose homogène.',
              'Cadre professionnel — RGE, chantier propre, finitions soignées, organisation fluide.',
              'Accompagnement — devis détaillé, conseils, orientation aides si applicable.',
              'Garanties — assurance et garantie décennale selon prestations, suivi clair.',
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
              Notre objectif : une isolation combles perdus Bas-Rhin qui se ressent vraiment en confort, pas juste “un isolant posé”. Isolation combles
              perdus Bas-Rhin.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

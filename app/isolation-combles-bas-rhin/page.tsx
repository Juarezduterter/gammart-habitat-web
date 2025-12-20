import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'Isolation des combles Bas-Rhin | Combles perdus & rampants (devis gratuit) — Gammart Habitat',
  description:
    'Faites votre isolation des combles Bas-Rhin avec Gammart Habitat : combles perdus (soufflage) ou rampants, matériaux adaptés, aides, délais, prix indicatifs. Devis gratuit, RGE, garantie décennale.',
}

const heroBadges = ['RGE', 'Garantie décennale', 'Devis gratuit']

const problems = [
  {
    title: 'Chaleur qui s’échappe par la toiture',
    description:
      'L’isolant limite les déperditions vers le haut et réduit l’effet “chauffage qui tourne”. Isolation des combles Bas-Rhin.',
  },
  {
    title: 'Inconfort dans les chambres sous toit',
    description: 'Moins de parois “brûlantes” l’été et de sensation de froid l’hiver.',
  },
  {
    title: 'Factures énergétiques élevées',
    description: 'En diminuant les pertes, on réduit les besoins de chauffage à confort équivalent.',
  },
  {
    title: 'Surchauffe estivale',
    description: 'Le bon matériau et la bonne pose améliorent la stabilité thermique lors des fortes chaleurs.',
  },
  {
    title: 'DPE à améliorer',
    description: 'Traiter la toiture aide souvent à améliorer la performance globale du logement.',
  },
  {
    title: 'Courants d’air / sensations de déperdition',
    description:
      'Une isolation homogène + un traitement propre des zones sensibles renforcent la sensation de confort.',
  },
]

const advantages = [
  {
    title: 'Performance thermique immédiate',
    description:
      'Le gain est souvent rapide, car vous traitez une zone critique : la toiture. Une isolation des combles Bas-Rhin limite les pertes et améliore l’efficacité du chauffage.',
  },
  {
    title: 'Économies d’énergie et retour sur investissement',
    description:
      'En réduisant les déperditions, vous consommez moins pour atteindre le même confort. Le gain dépend de la cohérence avec les autres travaux (murs, plancher bas, ventilation). Isolation des combles Bas-Rhin.',
  },
  {
    title: 'Confort été/hiver (température plus stable)',
    description:
      'En hiver, la maison se refroidit moins vite. En été, les pièces sous toiture deviennent plus vivables.',
  },
  {
    title: 'Confort acoustique (selon matériaux)',
    description:
      'Certains isolants améliorent les bruits extérieurs (pluie, environnement), surtout sur rampants, en fonction de la technique.',
  },
  {
    title: 'Valorisation du bien et cohérence énergétique',
    description:
      'Une maison plus confortable et plus sobre est un argument de valorisation, notamment via l’amélioration de la performance énergétique.',
  },
  {
    title: 'Durabilité et tranquillité',
    description:
      'Une pose soignée, une épaisseur adaptée et des finitions propres = une solution durable, encadrée par les garanties. Isolation des combles Bas-Rhin.',
  },
]

const techniques = [
  {
    title: 'Soufflage (combles perdus)',
    description:
      'L’isolant en vrac (ex : ouate de cellulose) est soufflé de manière uniforme sur le plancher des combles.',
    ideal: 'Combles perdus, accès possible, excellent rapport efficacité/rapidité.',
  },
  {
    title: 'Déroulé / rouleaux (combles perdus)',
    description:
      'Pose de rouleaux d’isolant, souvent en une ou deux couches croisées pour limiter les ponts thermiques.',
    ideal: 'Combles perdus accessibles où la mise en œuvre en rouleaux est pertinente.',
  },
  {
    title: 'Panneaux / sous-rampants (combles aménageables)',
    description:
      'Isolation au niveau des rampants de toiture avec structure (ossature) et finition intérieure.',
    ideal: 'Chambres sous combles, rénovation de l’étage ou projet d’aménagement.',
  },
]

const materials = [
  {
    title: 'Ouate de cellulose (soufflage)',
    characteristics: 'Isolant en vrac, soufflé pour une couverture homogène.',
    advantages: 'Mise en œuvre rapide en combles perdus, bonne capacité à remplir les recoins.',
    usage: 'Combles perdus, priorité “gain rapide”.',
  },
  {
    title: 'Laine de verre',
    characteristics: 'Rouleaux ou panneaux, solution très répandue.',
    advantages: 'Polyvalente, économique, adaptée à de nombreux cas.',
    usage: 'Combles perdus (rouleaux) et rampants (panneaux) selon configuration.',
  },
  {
    title: 'Laine de roche',
    characteristics: 'Performances acoustiques intéressantes, solution robuste.',
    advantages: 'Bon confort global, notamment sur certains rampants.',
    usage: 'Zones où l’acoustique compte et où le projet le justifie.',
  },
  {
    title: 'Fibre de bois',
    characteristics: 'Isolant biosourcé, intéressant pour le confort d’été selon projets.',
    advantages: 'Approche orientée confort estival et matériaux biosourcés.',
    usage: 'Rampants / projets visant la stabilité en période chaude.',
  },
]

const process = [
  'Premier contact — vous décrivez votre maison (Bas-Rhin, Strasbourg, alentours), vos combles, vos symptômes (froid, surchauffe, factures).',
  'Visite technique — vérification accès, état des combles, mesures, repérage des zones sensibles (trappe, gaines, points singuliers).',
  'Étude & devis — méthode (soufflage/rouleaux/rampants), matériaux, épaisseurs, planning, options.',
  'Préparation chantier — protection des accès, organisation, sécurisation des zones.',
  'Réalisation — pose homogène, traitement des détails, contrôle d’épaisseur/continuité.',
  'Contrôle qualité — vérification finitions, trappes, zones sensibles, nettoyage.',
  'Réception & garanties — documents, conseils, garanties.',
]

const faqs = [
  {
    question: 'Quelle isolation privilégier en premier : combles ou murs ?',
    answer:
      'Très souvent, on commence par le haut (combles) car le gain peut être rapide et le chantier est généralement plus simple. Ensuite, on traite les murs (ITE/ITI) selon les contraintes.',
  },
  {
    question: 'Combien coûte une isolation des combles Bas-Rhin ?',
    answer:
      'En combles perdus, le soufflage est souvent plus économique. Les rampants peuvent coûter plus cher car ils impliquent davantage de mise en œuvre et de finitions. Un devis après visite reste la référence.',
  },
  {
    question: 'Combien de temps durent les travaux ?',
    answer: 'Combles perdus : souvent 1 à 3 jours. Rampants : plutôt 3 à 7 jours selon surface et finitions.',
  },
  {
    question: 'Puis-je rester chez moi pendant les travaux ?',
    answer:
      'Généralement oui, surtout en combles perdus. Pour les rampants, il peut y avoir des pièces neutralisées temporairement.',
  },
  {
    question: 'Quelle épaisseur d’isolant choisir ?',
    answer:
      'Elle dépend du matériau, de la technique, de la place disponible et de l’objectif de performance. Le diagnostic permet de dimensionner correctement.',
  },
  {
    question: 'Combles perdus ou rampants : comment choisir la bonne méthode ?',
    answer:
      'Si vos combles ne sont pas aménagés, on isole souvent le plancher (perdus). Si vous avez des pièces sous toiture ou un projet d’aménagement, on isole les rampants.',
  },
]

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quelle isolation privilégier en premier : combles ou murs ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dans de nombreux cas, commencer par les combles apporte un gain rapide. Ensuite, on traite les murs (ITE/ITI) selon les contraintes et objectifs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte une isolation des combles Bas-Rhin ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le coût varie selon combles perdus ou rampants, la surface, les matériaux et l’accessibilité. Le soufflage est souvent plus économique, les rampants plus coûteux. Un devis après visite est recommandé.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps durent les travaux ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Combles perdus : souvent 1 à 3 jours. Rampants : généralement 3 à 7 jours selon surface et finitions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Puis-je rester chez moi pendant les travaux ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui la plupart du temps, surtout pour des combles perdus. Pour les rampants, certaines pièces peuvent être indisponibles temporairement.',
      },
    },
  ],
}

export default function IsolationComblesPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-gammart-green-dark via-gammart-green-leaf to-gammart-green-dark text-white">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <ScrollReveal>
            <div className="text-sm text-gammart-green-sage mb-4">
              Accueil &gt; Nos Services &gt; Isolation du logement &gt; Isolation des Combles
            </div>
          </ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <ScrollReveal>
                <p className="uppercase tracking-wide text-gammart-green-sage font-semibold mb-3">
                  Isolation des combles Bas-Rhin
                </p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Isolation des combles Bas-Rhin : la priorité n°1 pour gagner en confort et réduire vos pertes de chaleur
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-lg md:text-xl text-white/90 mb-6">
                  Vous cherchez une isolation des combles Bas-Rhin parce que votre maison est difficile à chauffer,
                  que l’étage sous toiture devient étouffant l’été, ou que vous suspectez de grosses déperditions par le haut ?
                  Bonne intuition : les combles sont souvent le premier poste à traiter pour obtenir un gain rapide, visible et durable.
                </p>
                <p className="text-white/90 font-semibold mb-2">
                  Promesse : améliorer fortement le confort et limiter les pertes de chaleur par la toiture, avec un chantier généralement rapide.
                </p>
                <p className="text-white/90 mb-8">
                  L’isolation des combles consiste à isoler la partie haute du logement, soit au niveau du plancher des combles (combles perdus),
                  soit au niveau des rampants de toiture (combles aménageables). Une isolation des combles Bas-Rhin bien réalisée permet de stabiliser la température intérieure,
                  de réduire la sensation de “maison qui se refroidit vite”, et d’améliorer le confort été/hiver.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="flex flex-wrap gap-3 mb-6">
                  {heroBadges.map((badge) => (
                    <span
                      key={badge}
                      className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm"
                    >
                      <svg className="w-4 h-4 text-gammart-green-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {badge}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button href="/contact" variant="secondary" size="lg">
                    Demander un devis Combles
                  </Button>
                  <Button href="/contact" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                    Obtenir mon estimation gratuite
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/photos/renovation-3.jpeg"
                    alt="Isolation des combles Bas-Rhin"
                    width={640}
                    height={480}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white text-gammart-green-dark rounded-2xl p-5 shadow-xl hidden md:block">
                  <div className="text-4xl font-bold">+30%</div>
                  <div className="text-sm text-gray-600">de pertes souvent traitées en priorité</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-gammart-green-dark mb-4">
              Qu’est-ce que l’isolation des combles Bas-Rhin ?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-gray-700">
              L’isolation des combles Bas-Rhin vise à limiter les échanges thermiques entre votre intérieur chauffé et l’extérieur,
              en traitant la zone la plus “fuyante” d’une maison : le haut. En hiver, l’air chaud monte et s’échappe par la toiture sans isolation performante.
              En été, la toiture accumule de la chaleur et la restitue dans les pièces, créant une surchauffe désagréable.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-lg text-gray-700">
              On distingue généralement deux configurations : <strong>combles perdus</strong> (on isole le plancher) et <strong>combles aménageables</strong>
              (on isole les rampants). L’idée est de créer une barrière continue, avec une épaisseur adaptée et des détails soignés (trappes, jonctions, passages techniques).
              Une isolation des combles Bas-Rhin réussie, ce n’est pas seulement “mettre de l’isolant”, c’est assurer une pose homogène et durable.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="bg-gammart-green-dark/5 border border-gammart-green-dark/10 rounded-2xl p-6">
              <p className="text-gray-800">
                <strong>Le saviez-vous ?</strong> La toiture peut représenter une part très importante des pertes de chaleur d’une maison.
                C’est pourquoi une isolation des combles Bas-Rhin est souvent le meilleur point de départ pour une rénovation énergétique.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gammart-green-dark mb-3">
                Pourquoi faire une isolation des combles Bas-Rhin ?
              </h2>
              <p className="text-gray-600 text-lg">
                Si vous voulez un résultat rapide, avec un chantier souvent court, l’isolation des combles Bas-Rhin est un excellent premier pas.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <ScrollReveal key={problem.title} delay={index * 80}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full">
                  <h3 className="text-xl font-semibold text-gammart-green-dark mb-3">{problem.title}</h3>
                  <p className="text-gray-600">{problem.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gammart-green-dark mb-3">
                Les avantages de l’isolation des combles Bas-Rhin
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <ScrollReveal key={advantage.title} delay={index * 80}>
                <div className="bg-gray-50 rounded-2xl p-6 h-full flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gammart-green-dark text-white flex items-center justify-center text-lg font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gammart-green-dark mb-2">{advantage.title}</h3>
                    <p className="text-gray-600">{advantage.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gammart-green-dark mb-3">
                Comment se déroule une isolation des combles Bas-Rhin ?
              </h2>
              <p className="text-gray-600 text-lg">
                Selon votre configuration, on choisit la méthode adaptée. Objectif : couche homogène, bien répartie, et adaptée à votre toiture.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {techniques.map((technique, index) => (
              <ScrollReveal key={technique.title} delay={index * 100}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full">
                  <h3 className="text-xl font-semibold text-gammart-green-dark mb-3">{technique.title}</h3>
                  <p className="text-gray-600 mb-3">{technique.description}</p>
                  <p className="text-gammart-green-dark font-medium">Idéal pour : {technique.ideal}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <p className="text-center text-sm text-gray-600">
              Pages enfants (N3) si prévues : Isolation des combles perdus • Isolation des rampants
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gammart-green-dark mb-3">
                Les matériaux pour une isolation des combles Bas-Rhin
              </h2>
              <p className="text-gray-600 text-lg">
                Le matériau dépend de la zone (perdus/rampants), de l’épaisseur, du confort d’été recherché, et du budget.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {materials.map((material, index) => (
              <ScrollReveal key={material.title} delay={index * 120}>
                <div className="bg-gray-50 rounded-2xl p-6 h-full border border-gray-100">
                  <h3 className="text-xl font-semibold text-gammart-green-dark mb-4">{material.title}</h3>
                  <ul className="space-y-2 text-gray-700">
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

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gammart-green-dark mb-3">
                Comment se déroulent vos travaux d’isolation des combles Bas-Rhin ?
              </h2>
              <p className="text-gray-600 text-lg">
                Une organisation claire pour limiter la gêne et garantir une pose homogène.
              </p>
            </div>
          </ScrollReveal>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
            <ol className="divide-y divide-gray-100">
              {process.map((step, index) => (
                <ScrollReveal key={step} delay={index * 80}>
                  <li className="flex gap-4 p-4 md:p-5">
                    <div className="w-10 h-10 rounded-full bg-gammart-green-dark text-white flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{step}</p>
                  </li>
                </ScrollReveal>
              ))}
            </ol>
          </div>
          <ScrollReveal delay={80}>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <strong className="block text-gammart-green-dark mb-1">Durée moyenne</strong>
                1 à 3 jours (combles perdus) ; 3 à 7 jours (rampants) selon surface et finitions.
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <strong className="block text-gammart-green-dark mb-1">Perturbation</strong>
                Faible à moyenne (selon accès et travaux intérieurs pour rampants).
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <strong className="block text-gammart-green-dark mb-1">Saison idéale</strong>
                Toute l’année, planifiée selon l’occupation et les travaux annexes.
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <div className="text-center">
              <Button href="/contact" variant="primary" size="lg">
                Obtenir mon estimation gratuite
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gammart-green-dark mb-3">
                Quel budget pour une isolation des combles Bas-Rhin ?
              </h2>
              <p className="text-gray-600 text-lg">
                Les tarifs varient selon la configuration, le matériau et l’accessibilité. Voici des ordres de grandeur indicatifs.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-xl font-semibold text-gammart-green-dark mb-3">Facteurs de variation</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Surface et accessibilité (trappe, hauteur, circulation)</li>
                  <li>Type de matériau et épaisseur</li>
                  <li>Complexité (rampants, finitions intérieures, réseaux)</li>
                  <li>État existant (ancien isolant, zones à reprendre)</li>
                  <li>Niveau de finition souhaité (plaque de plâtre, peinture, habillages)</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <table className="w-full text-left text-gray-700">
                  <thead>
                    <tr className="text-sm text-gray-500">
                      <th className="pb-3">Prestation</th>
                      <th className="pb-3 text-right">Fourchette indicative</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="py-3">Isolation combles perdus (soufflage)</td>
                      <td className="py-3 text-right">20 à 60 €/m²</td>
                    </tr>
                    <tr>
                      <td className="py-3">Isolation combles perdus (rouleaux, 2 couches)</td>
                      <td className="py-3 text-right">30 à 80 €/m²</td>
                    </tr>
                    <tr>
                      <td className="py-3">Isolation rampants (selon technique + finitions)</td>
                      <td className="py-3 text-right">45 à 120 €/m²</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="bg-gammart-green-dark text-white rounded-2xl p-6 text-center">
              <p className="mb-4 text-lg">
                Mention importante : prix indicatifs. Devis personnalisé gratuit après visite.
              </p>
              <Button href="/contact" variant="secondary" size="lg">
                Demander un devis Combles
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gammart-green-dark mb-3">
                Aides financières pour une isolation des combles Bas-Rhin
              </h2>
              <p className="text-gray-600 text-lg">
                Selon votre situation, l’isolation des combles Bas-Rhin peut être éligible à plusieurs dispositifs.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>MaPrimeRénov’</strong> — montants selon revenus et conditions
                  </li>
                  <li>
                    <strong>CEE (prime énergie)</strong> — prime variable selon dossier
                  </li>
                  <li>
                    <strong>Éco-PTZ</strong> — possibilité de financement
                  </li>
                  <li>
                    <strong>TVA réduite (5,5%)</strong> — selon éligibilité
                  </li>
                  <li>
                    <strong>Aides locales</strong> — Grand Est / collectivités (à vérifier selon commune)
                  </li>
                </ul>
              </div>
              <div className="bg-gammart-green-dark text-white rounded-2xl p-6 flex flex-col justify-between">
                <p className="text-lg mb-4">
                  Message clé : nous vous accompagnons dans vos démarches et vous aidons à constituer les éléments nécessaires.
                </p>
                <Button href="/aides-financements" variant="secondary" size="lg" className="self-start">
                  Simuler mes aides
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gammart-green-dark mb-2">
                  Nos réalisations en isolation des combles Bas-Rhin
                </h2>
                <p className="text-gray-600 text-lg">
                  Exemples de chantiers (combles perdus et rampants) menés par Gammart Habitat.
                </p>
              </div>
              <Button href="/realisations?tag=combles" variant="primary" size="lg">
                Toutes nos réalisations Combles
              </Button>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Bas-Rhin (ex.)', description: 'Combles perdus : soufflage + gain de confort' },
              { title: 'Strasbourg (ex.)', description: 'Rampants : isolation sous toiture + finitions intérieures' },
              { title: 'Eurométropole (ex.)', description: 'Combles : reprise + isolation homogène' },
            ].map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 120}>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 h-full flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gammart-green-dark mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                  </div>
                  <Link href="/realisations?tag=combles" className="text-gammart-green-dark font-semibold hover:text-gammart-green-leaf">
                    Voir le projet →
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <ScrollReveal>
            <div className="text-center mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gammart-green-dark mb-3">
                Questions fréquentes sur l’isolation des combles Bas-Rhin
              </h2>
            </div>
          </ScrollReveal>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal key={faq.question} delay={index * 80}>
                <details className="group bg-white rounded-2xl border border-gray-100">
                  <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none">
                    <h3 className="text-lg font-semibold text-gammart-green-dark pr-4">{faq.question}</h3>
                    <svg
                      className="w-5 h-5 text-gammart-green-dark transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 text-gray-700">{faq.answer}</div>
                </details>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={80}>
            <div className="text-center">
              <Button href="/contact" variant="primary" size="lg">
                Poser une question ou demander un devis
              </Button>
            </div>
          </ScrollReveal>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm uppercase tracking-wide text-gammart-green-sage mb-2">Bloc expertise / Pourquoi Gammart</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gammart-green-dark mb-3">
                Pourquoi choisir Gammart Habitat pour votre isolation des combles Bas-Rhin ?
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Expertise locale — connaissance des maisons et rénovations courantes en Bas-Rhin, de Strasbourg aux communes alentours.',
              'Conseil sur-mesure — choix de la bonne méthode (perdus/rampants) et du bon matériau selon vos priorités.',
              'Accompagnement — devis clair, planification, aide à la compréhension des options et des aides possibles.',
              'Garanties — cadre professionnel, garanties et suivi.',
            ].map((item, index) => (
              <ScrollReveal key={item} delay={index * 80}>
                <div className="flex gap-3 bg-gray-50 rounded-2xl p-5 border border-gray-100">
                  <span className="text-gammart-green-dark font-bold">•</span>
                  <p className="text-gray-700">{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={200}>
            <div className="bg-gammart-green-dark text-white rounded-2xl p-6 text-center">
              <p className="text-lg mb-4">
                Notre objectif : une isolation des combles Bas-Rhin propre, homogène et durable, qui se ressent dès les premières semaines.
              </p>
              <Button href="/contact" variant="secondary" size="lg">
                Discuter de mon projet Combles
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

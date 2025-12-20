import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'Isolation thermique par l’intérieur Bas-Rhin | ITI efficace & conseils RGE — Gammart Habitat',
  description: 'Votre isolation thermique par l’intérieur Bas-Rhin avec Gammart Habitat : ITI sur-mesure (doublage collé, ossature, contre-cloison), matériaux adaptés, aides, délais, prix indicatifs. Devis gratuit, garantie décennale.',
}

const heroBadges = [
  { label: 'RGE' },
  { label: 'Garantie décennale' },
  { label: 'Devis gratuit' },
]

const problems = [
  {
    title: 'Murs froids et inconfort dans certaines pièces',
    description: 'L’ITI réduit la sensation de paroi froide et améliore l’homogénéité thermique. Isolation thermique par l’intérieur Bas-Rhin.',
  },
  {
    title: 'Factures de chauffage élevées',
    description: 'En limitant les déperditions par les murs, on diminue le besoin de chauffage à confort égal.',
  },
  {
    title: 'Façade non modifiable',
    description: 'Si la façade doit rester intacte (règles locales, esthétique, contraintes techniques), l’ITI est souvent la solution la plus réaliste.',
  },
  {
    title: 'Rénovation intérieure en cours',
    description: 'Quand vous refaites des pièces (plafonds, électricité, peinture), intégrer une ITI est logique et optimisé.',
  },
  {
    title: 'Mitoyenneté / accès extérieur complexe',
    description: 'Certaines configurations rendent l’ITE difficile : l’ITI permet d’avancer malgré tout.',
  },
  {
    title: 'Amélioration du DPE',
    description: 'Une isolation thermique par l’intérieur Bas-Rhin peut contribuer à une meilleure performance globale dans une stratégie cohérente.',
  },
]

const advantages = [
  {
    title: 'Une amélioration sensible du confort au quotidien',
    description: 'Moins de parois froides, moins de “murs glacés” au toucher, et une sensation de chaleur plus stable : c’est souvent le premier bénéfice ressenti après une isolation thermique par l’intérieur Bas-Rhin.',
  },
  {
    title: 'Un chantier adaptable et progressif',
    description: 'L’ITI peut se réaliser pièce par pièce selon vos priorités, votre budget et votre calendrier. Isolation thermique par l’intérieur Bas-Rhin.',
  },
  {
    title: 'Une solution utile quand l’ITE est impossible',
    description: 'Façade classée, contraintes locales, mitoyenneté, accès limité… L’ITI devient alors une alternative fiable pour améliorer l’enveloppe thermique.',
  },
  {
    title: 'Un budget souvent plus accessible',
    description: 'Selon la technique et les finitions, l’ITI peut être plus abordable qu’une rénovation complète de façade. La qualité se joue sur les détails (ponts thermiques, étanchéité, finitions).',
  },
  {
    title: 'Une intégration facile lors de travaux intérieurs',
    description: 'Si vous refaites l’électricité, les murs ou l’aménagement, l’ITI s’intègre naturellement. On peut aussi prévoir des passages techniques dans l’ossature.',
  },
  {
    title: 'Valorisation et cohérence énergétique',
    description: 'En combinant ITI + combles (et parfois ventilation), vous obtenez une enveloppe plus cohérente et un meilleur confort global. Isolation thermique par l’intérieur Bas-Rhin.',
  },
]

const techniques = [
  {
    title: 'Doublage collé',
    description: 'Panneaux isolants + plaque de plâtre collés directement sur le mur (si support compatible), avec une mise en œuvre rapide.',
    ideal: 'Murs relativement plans et sains, recherche d’un chantier efficace.',
  },
  {
    title: 'Ossature métallique (type rails/montants)',
    description: 'Création d’une ossature, pose de l’isolant entre montants, puis plaque de plâtre. Permet de rattraper des défauts de mur et de passer des réseaux.',
    ideal: 'Murs irréguliers, rénovation intérieure complète, besoin de passages techniques.',
  },
  {
    title: 'Contre-cloison / doublage sur ossature désolidarisée',
    description: 'Technique qui améliore l’acoustique et la régularité, utile dans certains cas spécifiques (murs humides à traiter en amont, besoin d’espace technique).',
    ideal: 'Recherche de confort acoustique ou contraintes particulières de mur.',
  },
]

const materials = [
  {
    title: 'Laine de verre',
    characteristics: 'Isolant courant, polyvalent, souvent économique.',
    advantages: 'Bon rapport performance/prix, adapté à de nombreux doublages.',
    usage: 'ITI sur ossature, rampants, rénovations intérieures classiques.',
  },
  {
    title: 'Laine de roche',
    characteristics: 'Bon comportement acoustique, solution robuste.',
    advantages: 'Amélioration du confort sonore, usage fréquent en rénovation.',
    usage: 'Pièces exposées au bruit ou murs nécessitant un meilleur affaiblissement acoustique.',
  },
  {
    title: 'Fibre de bois',
    characteristics: 'Isolant biosourcé, intéressant pour le confort d’été selon configurations.',
    advantages: 'Approche plus écologique, sensation de confort renforcée dans certains projets.',
    usage: 'Projets orientés confort d’été / matériaux biosourcés.',
  },
  {
    title: 'Panneaux isolants haute performance (selon cas)',
    characteristics: 'Meilleures performances à épaisseur réduite (selon produits).',
    advantages: 'Utile quand l’épaisseur est contrainte (petites pièces, couloirs).',
    usage: 'Zones où la perte de surface doit rester minimale.',
  },
]

const process = [
  'Premier contact — vous expliquez votre problématique, les pièces concernées, votre commune.',
  'Visite technique — relevés, état des murs, points sensibles (humidité, fissures, planéité).',
  'Étude & devis — méthode (collé/ossature/contre-cloison), matériaux, finitions, planning.',
  'Préparation chantier — protections, organisation des pièces, gestion des réseaux si nécessaire.',
  'Réalisation — pose isolant, étanchéité à l’air selon cas, parements, traitement des détails.',
  'Contrôle qualité — planéité, joints, finitions, nettoyage.',
  'Réception & garanties — PV, documents, garanties et conseils d’usage.',
]

const faqs = [
  {
    question: 'Qu’est-ce que l’ITI exactement ?',
    answer: 'C’est l’isolation des murs côté intérieur via un isolant + un parement (souvent plaque de plâtre), avec plusieurs techniques possibles.',
  },
  {
    question: 'Combien coûte une isolation thermique par l’intérieur Bas-Rhin ?',
    answer: 'Les prix varient selon la méthode et les finitions. On se situe souvent autour de 60 à 120 €/m² à titre indicatif. Un devis après visite reste la référence.',
  },
  {
    question: 'Combien de temps durent les travaux ?',
    answer: 'De quelques jours à deux semaines selon la surface, le nombre de pièces, et les finitions.',
  },
  {
    question: 'Puis-je rester chez moi pendant les travaux ?',
    answer: 'Oui, mais il faut prévoir une gêne : poussière, déplacement de meubles, pièces neutralisées temporairement.',
  },
  {
    question: 'L’ITI est-elle efficace ?',
    answer: 'Oui, surtout sur les murs responsables de l’inconfort. L’efficacité dépend de la qualité de pose et du traitement des points sensibles.',
  },
  {
    question: 'ITI ou ITE : comment choisir ?',
    answer: 'ITE est idéale pour traiter les ponts thermiques et rénover la façade. ITI est pertinente quand l’extérieur est contraint ou quand on veut avancer côté intérieur.',
  },
  {
    question: 'Quelles aides pour l’ITI ?',
    answer: 'Selon conditions : MaPrimeRénov’, CEE, TVA réduite, Éco-PTZ, et parfois des aides locales.',
  },
  {
    question: 'Quelle garantie pour l’ITI ?',
    answer: 'Les travaux sont encadrés par les garanties applicables, dont la garantie décennale selon le périmètre des prestations.',
  },
]

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Qu’est-ce que l’ITI exactement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'L’ITI isole les murs côté intérieur avec un isolant et un parement (souvent plaque de plâtre), via des techniques comme le doublage collé ou l’ossature métallique.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte une isolation thermique par l’intérieur Bas-Rhin ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Les prix varient selon la technique, l’épaisseur et les finitions. À titre indicatif, on observe souvent une fourchette autour de 60 à 120 €/m². Un devis après visite est recommandé.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps durent les travaux ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La durée varie selon la surface et les finitions, généralement de quelques jours à deux semaines.',
      },
    },
    {
      '@type': 'Question',
      name: 'Puis-je rester chez moi pendant les travaux ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Souvent oui, mais il faut prévoir une gêne à l’intérieur (déplacement de meubles, poussière, pièces temporairement indisponibles).',
      },
    },
    {
      '@type': 'Question',
      name: 'ITI ou ITE : comment choisir ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ITE est idéale pour rénover la façade et réduire fortement les ponts thermiques. ITI est pertinente quand l’extérieur est contraint ou quand on veut traiter des pièces côté intérieur.',
      },
    },
  ],
}

export default function IsolationThermiqueInterieurPage() {
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
              Accueil &gt; Nos Services &gt; Isolation du logement &gt; Isolation Thermique par l’Intérieur
            </div>
          </ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <ScrollReveal>
                <p className="uppercase tracking-wide text-gammart-green-sage font-semibold mb-3">
                  Isolation thermique par l’intérieur Bas-Rhin
                </p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Isolation thermique par l’intérieur Bas-Rhin : l’ITI pour gagner en confort sans toucher à la façade
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-lg md:text-xl text-white/90 mb-6">
                  Vous cherchez une isolation thermique par l’intérieur Bas-Rhin parce que votre maison est difficile à chauffer,
                  que certaines pièces restent froides, ou que vous ne pouvez (ou ne voulez) pas modifier la façade ? L’ITI est une solution
                  efficace pour améliorer l’enveloppe thermique côté intérieur, souvent avec une mise en œuvre adaptable pièce par pièce.
                </p>
                <p className="text-white/90 mb-4">
                  <strong>Promesse :</strong> améliorer le confort et réduire les pertes par les murs, avec une solution pertinente quand l’extérieur est contraint.
                </p>
                <p className="text-white/90 mb-8">
                  En bref : L’ITI consiste à ajouter un complexe isolant à l’intérieur des murs (panneaux isolants, doublage, ossature + isolant…),
                  puis à réaliser une finition (généralement plaque de plâtre). Une isolation thermique par l’intérieur Bas-Rhin peut se planifier
                  de façon progressive, selon vos priorités : pièces de vie, chambres, murs exposés au nord, etc.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="flex flex-wrap gap-3 mb-6">
                  {heroBadges.map((badge) => (
                    <span
                      key={badge.label}
                      className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm"
                    >
                      <svg className="w-4 h-4 text-gammart-green-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {badge.label}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button href="/contact" variant="secondary" size="lg">
                    Demander un devis ITI
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
                    src="/images/photos/renovation-2.jpeg"
                    alt="Isolation thermique par l’intérieur Bas-Rhin"
                    width={640}
                    height={480}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white text-gammart-green-dark rounded-2xl p-5 shadow-xl hidden md:block">
                  <div className="text-4xl font-bold">-57%</div>
                  <div className="text-sm text-gray-600">déperditions par les murs en moyenne</div>
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
              Qu’est-ce que l’isolation thermique par l’intérieur Bas-Rhin (ITI) ?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-gray-700">
              La isolation thermique par l’intérieur Bas-Rhin (ITI) est une technique qui vise à réduire les déperditions de chaleur en isolant les murs
              depuis l’intérieur du logement. Concrètement, on crée une “seconde peau” côté intérieur : un isolant est posé contre le mur (collé ou fixé via une ossature),
              puis recouvert par une finition (souvent une plaque de plâtre). L’objectif est de limiter les échanges thermiques entre l’intérieur chauffé et l’extérieur froid,
              afin de gagner en confort et en sobriété énergétique.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-lg text-gray-700">
              L’ITI est particulièrement intéressante lorsque l’ITE n’est pas envisageable (façade à préserver, contraintes d’urbanisme, mitoyenneté, accès compliqué),
              ou lorsque le projet doit rester plus “léger” en budget. Elle permet aussi de traiter certaines zones ciblées : un mur très exposé, une pièce toujours plus froide,
              ou une partie de la maison en rénovation.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="bg-gammart-green-dark/5 border border-gammart-green-dark/10 rounded-2xl p-6">
              <p className="text-gray-800">
                <strong>Point important :</strong> l’ITI réduit la surface habitable (épaisseur isolant + doublage) et demande une attention particulière à l’étanchéité à l’air
                et aux points singuliers (jonctions, tableaux de fenêtres, prises électriques). Une isolation thermique par l’intérieur Bas-Rhin bien faite, c’est une mise en œuvre soignée,
                pas juste “rajouter de la laine”.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={250}>
            <div className="bg-gammart-green-leaf/10 rounded-xl p-5 text-gammart-green-dark font-semibold">
              Le saviez-vous ? Quand l’on ne peut pas rénover l’extérieur, l’ITI est souvent la meilleure façon d’améliorer le confort d’un logement en agissant directement sur la sensation de “mur froid”.
              Isolation thermique par l’intérieur Bas-Rhin.
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gammart-green-dark mb-3">
                ITI : pour quels problèmes est-elle idéale ?
              </h2>
              <p className="text-gray-600 text-lg">
                Si votre priorité est de gagner en confort rapidement, sans toucher à l’extérieur, l’isolation thermique par l’intérieur Bas-Rhin mérite d’être étudiée en premier.
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
              <h2 className="text-3xl md:text-4xl font-bold text-gammart-green-dark mb-3">Les avantages de l’ITI</h2>
              <p className="text-gray-600 text-lg">Isolation thermique par l’intérieur Bas-Rhin : un choix pertinent et souple.</p>
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
                Nos techniques d’ITI : comment se déroule une isolation thermique par l’intérieur Bas-Rhin ?
              </h2>
              <p className="text-gray-600 text-lg">
                Le bon choix dépend de votre mur, de l’état du support, de la place disponible et du niveau de finition attendu.
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
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gammart-green-dark mb-3">
                Les matériaux pour une isolation thermique par l’intérieur Bas-Rhin
              </h2>
              <p className="text-gray-600 text-lg">
                Le matériau doit correspondre à votre projet : confort, budget, acoustique, contraintes d’épaisseur.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {materials.map((material, index) => (
              <ScrollReveal key={material.title} delay={index * 120}>
                <div className="bg-gray-50 rounded-2xl p-6 h-full border border-gray-100">
                  <h3 className="text-xl font-semibold text-gammart-green-dark mb-4">{material.title}</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Caractéristiques :</strong> {material.characteristics}</li>
                    <li><strong>Avantages :</strong> {material.advantages}</li>
                    <li><strong>Usage recommandé :</strong> {material.usage}</li>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gammart-green-dark mb-3">Comment se déroulent vos travaux de ITI ?</h2>
              <p className="text-gray-600 text-lg">
                Une isolation thermique par l’intérieur Bas-Rhin doit être organisée pour limiter la gêne et garantir une finition propre.
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
                Souvent de quelques jours à 2 semaines selon surface et nombre de pièces.
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <strong className="block text-gammart-green-dark mb-1">Perturbation</strong>
                Moyenne (travaux à l’intérieur, nécessité de déplacer/protéger).
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <strong className="block text-gammart-green-dark mb-1">Saison idéale</strong>
                Toute l’année (à planifier selon occupation et travaux annexes).
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <div className="text-center">
              <Button href="/contact" variant="primary" size="lg">
                Démarrer mon projet ITI
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
                Quel budget pour une isolation thermique par l’intérieur Bas-Rhin ?
              </h2>
              <p className="text-gray-600 text-lg">
                Pour une isolation thermique par l’intérieur Bas-Rhin, on observe souvent une fourchette indicative de 60 à 120 €/m² selon la technique, l’épaisseur, l’état du support et le niveau de finition.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-xl font-semibold text-gammart-green-dark mb-3">Facteurs de variation</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Surface à traiter et nombre de pièces</li>
                  <li>Complexité (murs irréguliers, reprises, réseaux)</li>
                  <li>Technique choisie (collé vs ossature)</li>
                  <li>Matériau et épaisseur</li>
                  <li>Niveau de finition (peinture, reprises, habillages)</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <table className="w-full text-left text-gray-700">
                  <thead>
                    <tr className="text-sm text-gray-500">
                      <th className="pb-3">Prestation ITI</th>
                      <th className="pb-3 text-right">Fourchette indicative</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="py-3">ITI doublage collé (selon support)</td>
                      <td className="py-3 text-right">60 à 95 €/m²</td>
                    </tr>
                    <tr>
                      <td className="py-3">ITI sur ossature métallique</td>
                      <td className="py-3 text-right">75 à 115 €/m²</td>
                    </tr>
                    <tr>
                      <td className="py-3">ITI avec contraintes spécifiques / finitions renforcées</td>
                      <td className="py-3 text-right">90 à 120 €/m²</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="bg-gammart-green-dark text-white rounded-2xl p-6 text-center">
              <p className="mb-4 text-lg">
                Mention importante : prix indicatifs. Devis personnalisé gratuit après visite technique.
              </p>
              <Button href="/contact" variant="secondary" size="lg">
                Obtenir mon estimation gratuite
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
                Aides financières pour une isolation thermique par l’intérieur Bas-Rhin
              </h2>
              <p className="text-gray-600 text-lg">
                Selon votre situation et les règles en vigueur, la isolation thermique par l’intérieur Bas-Rhin peut être éligible à des dispositifs d’aide.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <ul className="space-y-3 text-gray-700">
                  <li><strong>MaPrimeRénov’</strong> — montants variables selon profils et travaux</li>
                  <li><strong>CEE (prime énergie)</strong> — prime selon conditions</li>
                  <li><strong>Éco-PTZ</strong> — financement possible d’une partie du chantier</li>
                  <li><strong>TVA réduite (5,5%)</strong> — selon éligibilité</li>
                  <li><strong>Aides locales</strong> — dispositifs pouvant exister en Grand Est / collectivités (à vérifier)</li>
                </ul>
              </div>
              <div className="bg-gammart-green-dark text-white rounded-2xl p-6 flex flex-col justify-between">
                <p className="text-lg mb-4">
                  Message clé : nous vous accompagnons pour comprendre ce qui est réellement pertinent et constituer les éléments nécessaires.
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
                <h2 className="text-3xl md:text-4xl font-bold text-gammart-green-dark mb-2">Nos réalisations en ITI</h2>
                <p className="text-gray-600 text-lg">Exemples de chantiers d’isolation thermique par l’intérieur Bas-Rhin.</p>
              </div>
              <Button href="/realisations?tag=iti" variant="primary" size="lg">
                Toutes nos réalisations ITI
              </Button>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Bas-Rhin (ex.)',
                description: 'ITI sur ossature + finitions peintes',
              },
              {
                title: 'Strasbourg (ex.)',
                description: 'ITI pièces de vie + traitement murs exposés',
              },
              {
                title: 'Eurométropole (ex.)',
                description: 'ITI progressive (pièce par pièce)',
              },
            ].map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 120}>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 h-full flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gammart-green-dark mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                  </div>
                  <Link href="/realisations?tag=iti" className="text-gammart-green-dark font-semibold hover:text-gammart-green-leaf">
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
                Questions fréquentes sur l’isolation thermique par l’intérieur Bas-Rhin (ITI)
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
                  <div className="px-6 pb-5 text-gray-700">
                    {faq.answer}
                  </div>
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
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
          />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm uppercase tracking-wide text-gammart-green-sage mb-2">Bloc expertise / Pourquoi Gammart</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gammart-green-dark mb-3">
                Pourquoi choisir Gammart Habitat pour votre isolation thermique par l’intérieur Bas-Rhin ?
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Expertise ITI — choix de la bonne méthode selon vos murs et vos contraintes.',
              'Certifications — cadre pro, approche structurée, exigences de mise en œuvre.',
              'Accompagnement — devis détaillé, conseils, aide à la décision, priorisation des pièces.',
              'Garanties — assurance et garantie décennale selon prestations, suivi clair.',
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
                Notre objectif : une isolation thermique par l’intérieur Bas-Rhin réellement confortable, propre, et durable, pas une solution “standard” posée trop vite.
              </p>
              <Button href="/contact" variant="secondary" size="lg">
                Discuter de mon projet ITI
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

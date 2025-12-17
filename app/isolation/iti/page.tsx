import { Metadata } from 'next'
import { ServicePageLayout } from '@/components/service/ServicePageLayout'

export const metadata: Metadata = {
  title: 'ITI - Isolation Thermique par l\'Intérieur Bas-Rhin | Gammart Habitat',
  description: 'Isolation par l\'intérieur (ITI) dans le Bas-Rhin. Solution économique pour améliorer le confort thermique de votre maison. Devis gratuit, entreprise RGE.',
}

const benefits = [
  {
    title: 'Coût maîtrisé',
    description: 'L\'ITI est généralement moins coûteuse que l\'ITE, ce qui en fait une option accessible pour de nombreux propriétaires.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Pas de modification extérieure',
    description: 'Idéale quand la façade ne peut pas être modifiée (monument historique, copropriété, contraintes d\'urbanisme).',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Travaux pièce par pièce',
    description: 'Possibilité d\'isoler progressivement, une pièce à la fois, pour étaler l\'investissement.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: 'Rapidité d\'exécution',
    description: 'Les travaux d\'ITI sont généralement plus rapides à réaliser que l\'isolation extérieure.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Amélioration du confort',
    description: 'Fini les murs froids et les sensations d\'inconfort près des parois.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Éligible aux aides',
    description: 'L\'ITI donne accès aux mêmes aides que l\'ITE : MaPrimeRénov\', CEE, Éco-PTZ.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
]

const process = [
  {
    title: 'Diagnostic',
    description: 'Analyse des murs, de l\'humidité et des contraintes techniques de chaque pièce.',
  },
  {
    title: 'Proposition',
    description: 'Choix du système (doublage collé, ossature) et du matériau isolant adapté.',
  },
  {
    title: 'Réalisation',
    description: 'Pose de l\'isolant, du pare-vapeur si nécessaire, et des plaques de finition.',
  },
  {
    title: 'Finitions',
    description: 'Enduit, peinture, reprises des prises et interrupteurs.',
  },
]

const faqs = [
  {
    question: 'L\'ITI fait-elle perdre beaucoup de place ?',
    answer: 'Comptez entre 8 et 15 cm d\'épaisseur selon l\'isolant et la performance visée. Pour une pièce de 15m², cela représente environ 0,5 à 1m² de surface. C\'est à mettre en balance avec le gain de confort.',
  },
  {
    question: 'Quels sont les risques avec l\'ITI ?',
    answer: 'Le principal risque est la condensation si le pare-vapeur est mal posé ou absent. Notre expertise garantit une mise en œuvre dans les règles de l\'art pour éviter tout problème d\'humidité.',
  },
  {
    question: 'Peut-on isoler par l\'intérieur une seule pièce ?',
    answer: 'Oui, c\'est possible et parfois pertinent (chambre froide, pièce exposée au nord). Attention toutefois aux ponts thermiques aux jonctions avec les zones non isolées.',
  },
  {
    question: 'Quel isolant choisir pour l\'ITI ?',
    answer: 'Laine de verre, laine de roche, polystyrène, ou isolants biosourcés (fibre de bois, ouate). Le choix dépend de la performance recherchée, du budget et de vos préférences écologiques.',
  },
]

const relatedServices = [
  {
    title: 'Isolation par l\'Extérieur (ITE)',
    href: '/isolation/ite',
    icon: '/images/pictos/Isolation-Thermique-par-l-Extérieur.svg',
  },
  {
    title: 'Isolation des Combles',
    href: '/isolation/combles',
    icon: '/images/pictos/Isolation-Combles-Perdus.svg',
  },
  {
    title: 'Ventilation VMC',
    href: '/efficacite-energetique/ventilation',
    icon: '/images/pictos/VMC.svg',
  },
]

export default function ITIPage() {
  return (
    <ServicePageLayout
      title="Isolation Thermique par l'Intérieur"
      subtitle="ITI - Isolation des murs"
      description="L'ITI est une solution économique et efficace quand l'isolation extérieure n'est pas possible. Elle permet d'améliorer significativement le confort thermique sans modifier l'aspect extérieur de votre maison."
      heroImage="/images/photos/renovation-2.jpeg"
      heroIcon="/images/pictos/Isolation-Thermique-par-l-Intérieur.svg"
      benefits={benefits}
      process={process}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  )
}

import { Metadata } from 'next'
import { ServicePageLayout } from '@/components/service/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Isolation des Combles Bas-Rhin | Combles perdus et aménageables | Gammart Habitat',
  description: 'Isolation des combles perdus et aménageables dans le Bas-Rhin. Jusqu\'à 30% d\'économies de chauffage. Entreprise RGE, devis gratuit.',
}

const benefits = [
  {
    title: 'Meilleur retour sur investissement',
    description: 'L\'isolation des combles offre souvent le meilleur ratio coût/économies. Jusqu\'à 30% de déperditions évitées.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Travaux rapides',
    description: 'Pour des combles perdus, l\'isolation par soufflage se réalise en quelques heures seulement.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Confort été/hiver',
    description: 'Une bonne isolation des combles protège du froid en hiver et limite la surchauffe estivale.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Aucune nuisance',
    description: 'Pour les combles perdus, les travaux se font depuis l\'extérieur ou par la trappe, sans impact sur votre quotidien.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Aides maximales',
    description: 'L\'isolation des combles est très bien subventionnée : MaPrimeRénov\', CEE, souvent avec reste à charge très faible.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Durabilité',
    description: 'Les isolants modernes conservent leurs performances pendant des décennies sans tassement.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
]

const process = [
  {
    title: 'Inspection',
    description: 'Visite des combles, vérification de la charpente, de la ventilation et des accès.',
  },
  {
    title: 'Préparation',
    description: 'Mise en place des déflecteurs de ventilation, protection des spots et conduits.',
  },
  {
    title: 'Isolation',
    description: 'Soufflage de l\'isolant (combles perdus) ou pose de panneaux/rouleaux (rampants).',
  },
  {
    title: 'Vérification',
    description: 'Contrôle de l\'épaisseur, de la répartition et remise du certificat de conformité.',
  },
]

const faqs = [
  {
    question: 'Quelle différence entre combles perdus et aménageables ?',
    answer: 'Les combles perdus sont des espaces non habitables sous toiture (hauteur insuffisante, charpente encombrante). Les combles aménageables peuvent être transformés en pièces à vivre. La technique d\'isolation diffère : soufflage pour les perdus, panneaux sur rampants pour les aménageables.',
  },
  {
    question: 'Quelle épaisseur d\'isolant pour les combles ?',
    answer: 'Pour les combles perdus, on vise généralement R ≥ 7 m².K/W, soit environ 30-35 cm de laine soufflée. Pour les rampants, R ≥ 6, soit 20-25 cm selon l\'isolant.',
  },
  {
    question: 'L\'isolation des combles supprime-t-elle l\'humidité ?',
    answer: 'Non, l\'isolation ne résout pas les problèmes d\'humidité existants. Elle doit être accompagnée d\'une bonne ventilation. Si vos combles sont humides, nous identifierons la cause avant d\'isoler.',
  },
  {
    question: 'Peut-on marcher sur l\'isolant soufflé ?',
    answer: 'Non, l\'isolant soufflé n\'est pas porteur. Si vous avez besoin d\'accéder à certaines zones (VMC, antenne), nous pouvons créer des chemins de circulation.',
  },
]

const relatedServices = [
  {
    title: 'Isolation par l\'Extérieur (ITE)',
    href: '/isolation/ite',
    icon: '/images/pictos/Isolation-Thermique-par-l-Extérieur.svg',
  },
  {
    title: 'Isolation Plancher Bas',
    href: '/isolation/plancher-bas',
    icon: '/images/pictos/Isolation-Plancher-Bas.svg',
  },
  {
    title: 'Ventilation VMC',
    href: '/efficacite-energetique/ventilation',
    icon: '/images/pictos/VMC.svg',
  },
]

export default function ComblesPage() {
  return (
    <ServicePageLayout
      title="Isolation des Combles"
      subtitle="Combles perdus & aménageables"
      description="Jusqu'à 30% de la chaleur s'échappe par la toiture. L'isolation des combles est souvent le premier geste à réaliser pour améliorer la performance énergétique de votre maison, avec un excellent rapport coût/efficacité."
      heroImage="/images/photos/renovation-3.jpeg"
      heroIcon="/images/pictos/Isolation-Combles-Perdus.svg"
      benefits={benefits}
      process={process}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  )
}

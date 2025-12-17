import { Metadata } from 'next'
import { ServicePageLayout } from '@/components/service/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Isolation Plancher Bas Bas-Rhin | Cave, garage, vide sanitaire | Gammart Habitat',
  description: 'Isolation du plancher bas dans le Bas-Rhin. Fini les pieds froids ! Isolation sur cave, garage ou vide sanitaire. Entreprise RGE, devis gratuit.',
}

const benefits = [
  {
    title: 'Fini les pieds froids',
    description: 'Un plancher isolé élimine la sensation désagréable de sol froid, surtout au rez-de-chaussée.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: '7 à 10% d\'économies',
    description: 'Le plancher représente une part significative des déperditions, souvent sous-estimée.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Pas de travaux à l\'étage',
    description: 'L\'isolation se fait par-dessous, depuis la cave ou le garage, sans impacter votre intérieur.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Réalisation rapide',
    description: 'Les travaux se font en 1 à 2 jours selon la surface à traiter.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Compatible avec tous les sols',
    description: 'Que vous ayez du carrelage, du parquet ou de la moquette, pas besoin de toucher au revêtement.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: 'Bien subventionné',
    description: 'L\'isolation du plancher bas est éligible à toutes les aides : MaPrimeRénov\', CEE, TVA 5,5%.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

const process = [
  {
    title: 'Visite technique',
    description: 'Inspection de la cave, du garage ou du vide sanitaire. Vérification de l\'accessibilité et de l\'humidité.',
  },
  {
    title: 'Préparation',
    description: 'Nettoyage du support, traitement anti-humidité si nécessaire.',
  },
  {
    title: 'Pose de l\'isolant',
    description: 'Fixation de panneaux rigides ou projection de mousse selon la configuration.',
  },
  {
    title: 'Finition',
    description: 'Pose d\'un pare-vapeur si nécessaire, nettoyage du chantier.',
  },
]

const faqs = [
  {
    question: 'Quelle épaisseur pour isoler un plancher bas ?',
    answer: 'On recommande généralement une résistance thermique R ≥ 3 m².K/W, soit environ 10-12 cm de polystyrène ou 8-10 cm de polyuréthane selon le matériau choisi.',
  },
  {
    question: 'Peut-on isoler si la cave est humide ?',
    answer: 'L\'humidité doit être traitée avant l\'isolation pour éviter les problèmes de moisissures. Nous pouvons vous conseiller sur les solutions de traitement ou vous orienter vers un spécialiste.',
  },
  {
    question: 'L\'isolation réduit-elle la hauteur sous plafond de la cave ?',
    answer: 'Oui, l\'épaisseur de l\'isolant (10-12 cm en moyenne) réduit la hauteur disponible. C\'est à prendre en compte si votre cave est déjà basse de plafond.',
  },
  {
    question: 'Quelle technique pour un vide sanitaire ?',
    answer: 'Pour les vides sanitaires accessibles, on pose des panneaux rigides fixés mécaniquement. Pour les espaces non accessibles, on peut utiliser la projection de mousse ou l\'insufflation.',
  },
]

const relatedServices = [
  {
    title: 'Isolation des Combles',
    href: '/isolation/combles',
    icon: '/images/pictos/Isolation-Combles-Perdus.svg',
  },
  {
    title: 'Isolation par l\'Extérieur (ITE)',
    href: '/isolation/ite',
    icon: '/images/pictos/Isolation-Thermique-par-l-Extérieur.svg',
  },
  {
    title: 'Ventilation VMC',
    href: '/efficacite-energetique/ventilation',
    icon: '/images/pictos/VMC.svg',
  },
]

export default function PlancherBasPage() {
  return (
    <ServicePageLayout
      title="Isolation du Plancher Bas"
      subtitle="Cave, garage, vide sanitaire"
      description="Le sol froid en hiver ? C'est souvent le signe d'un plancher mal isolé. L'isolation par-dessous, depuis la cave ou le garage, est une solution simple et efficace pour gagner en confort sans travaux dans vos pièces de vie."
      heroImage="/images/photos/renovation-4.jpeg"
      heroIcon="/images/pictos/Isolation-Plancher-Bas.svg"
      benefits={benefits}
      process={process}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  )
}

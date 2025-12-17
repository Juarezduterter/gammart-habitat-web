import { Metadata } from 'next'
import { ServicePageLayout } from '@/components/service/ServicePageLayout'

export const metadata: Metadata = {
  title: 'ITE - Isolation Thermique par l\'Extérieur Bas-Rhin | Gammart Habitat',
  description: 'Isolation par l\'extérieur (ITE) dans le Bas-Rhin et en Alsace. Réduisez vos factures, améliorez votre confort et valorisez votre façade. Devis gratuit, entreprise RGE.',
}

const benefits = [
  {
    title: 'Suppression des ponts thermiques',
    description: 'L\'ITE enveloppe votre maison d\'un manteau isolant continu, éliminant les ponts thermiques responsables de jusqu\'à 25% des déperditions.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Confort été comme hiver',
    description: 'Profitez d\'une température stable toute l\'année. Plus de murs froids en hiver, moins de surchauffe en été.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Façade rénovée',
    description: 'Profitez des travaux pour rajeunir l\'aspect de votre maison avec un large choix de finitions et coloris.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Surface habitable préservée',
    description: 'Contrairement à l\'isolation intérieure, l\'ITE ne réduit pas la surface de vos pièces.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
      </svg>
    ),
  },
  {
    title: 'Économies d\'énergie',
    description: 'Réduisez votre consommation de chauffage de 30 à 50% grâce à une isolation performante.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Valorisation du bien',
    description: 'Améliorez votre DPE et la valeur de votre patrimoine immobilier.',
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
    description: 'Analyse de votre façade, mesures et diagnostic complet pour une solution adaptée.',
  },
  {
    title: 'Devis détaillé',
    description: 'Proposition claire avec choix des matériaux, finitions et estimation des aides.',
  },
  {
    title: 'Travaux',
    description: 'Installation de l\'échafaudage, pose de l\'isolant, armature et finition enduit.',
  },
  {
    title: 'Réception',
    description: 'Contrôle qualité, nettoyage du chantier et remise des documents.',
  },
]

const faqs = [
  {
    question: 'Quelle épaisseur d\'isolant pour une ITE ?',
    answer: 'L\'épaisseur dépend de la résistance thermique visée et du matériau choisi. En général, on recommande entre 12 et 20 cm de polystyrène expansé ou de laine de roche pour atteindre les performances exigées par les aides (R ≥ 3,7 m².K/W).',
  },
  {
    question: 'Combien de temps durent les travaux d\'ITE ?',
    answer: 'Pour une maison individuelle, comptez entre 2 et 4 semaines selon la surface et la complexité (ouvertures, éléments de façade). Nous travaillons par phases pour minimiser les nuisances.',
  },
  {
    question: 'L\'ITE est-elle compatible avec tous les types de murs ?',
    answer: 'L\'ITE s\'adapte à la plupart des supports : parpaing, brique, béton, pierre (avec précautions). Une visite technique permet de valider la faisabilité et le système adapté.',
  },
  {
    question: 'Quelles aides pour l\'isolation par l\'extérieur ?',
    answer: 'L\'ITE est éligible à MaPrimeRénov\', aux CEE, à l\'Éco-PTZ et bénéficie de la TVA à 5,5%. Selon vos revenus, le cumul peut couvrir jusqu\'à 90% du montant des travaux.',
  },
  {
    question: 'Faut-il un permis de construire pour une ITE ?',
    answer: 'En général, une déclaration préalable de travaux suffit car l\'ITE modifie l\'aspect extérieur. Nous vous accompagnons dans ces démarches administratives.',
  },
]

const relatedServices = [
  {
    title: 'Isolation par l\'Intérieur (ITI)',
    href: '/isolation/iti',
    icon: '/images/pictos/Isolation-Thermique-par-l-Intérieur.svg',
  },
  {
    title: 'Isolation des Combles',
    href: '/isolation/combles',
    icon: '/images/pictos/Isolation-Combles-Perdus.svg',
  },
  {
    title: 'Bardage & Ravalement',
    href: '/efficacite-energetique/bardage-ravalement',
    icon: '/images/pictos/Bardage-Facade.svg',
  },
]

export default function ITEPage() {
  return (
    <ServicePageLayout
      title="Isolation Thermique par l'Extérieur"
      subtitle="ITE - Isolation des murs"
      description="L'ITE enveloppe votre maison d'un manteau isolant continu. Résultat : confort optimal, économies d'énergie significatives et façade rénovée. La solution idéale pour une rénovation performante sans perdre de surface habitable."
      heroImage="/images/photos/renovation-1.jpeg"
      heroIcon="/images/pictos/Isolation-Thermique-par-l-Extérieur.svg"
      benefits={benefits}
      process={process}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  )
}

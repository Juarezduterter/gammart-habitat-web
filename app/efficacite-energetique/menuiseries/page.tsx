import { Metadata } from 'next'
import { ServicePageLayout } from '@/components/service/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Menuiseries et Volets Roulants Bas-Rhin | Gammart Habitat',
  description: 'Installation de fenêtres, portes et volets roulants dans le Bas-Rhin. Améliorez l\'isolation et la sécurité de votre maison. Entreprise RGE, devis gratuit.',
}

const benefits = [
  {
    title: 'Isolation renforcée',
    description: 'Les fenêtres représentent 10 à 15% des déperditions. Un double ou triple vitrage fait toute la différence.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Confort acoustique',
    description: 'Réduisez les nuisances sonores extérieures grâce aux vitrages performants.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
      </svg>
    ),
  },
  {
    title: 'Sécurité améliorée',
    description: 'Les volets roulants et les vitrages anti-effraction renforcent la protection de votre maison.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'Automatisation',
    description: 'Volets motorisés, connectés, programmables... le confort au quotidien.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Luminosité préservée',
    description: 'Les nouveaux châssis plus fins maximisent la surface vitrée et la lumière naturelle.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Aides disponibles',
    description: 'Le remplacement de fenêtres simple vitrage est éligible aux aides MaPrimeRénov\' et CEE.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

const process = [
  {
    title: 'Prise de mesures',
    description: 'Relevé précis des dimensions, vérification des contraintes techniques.',
  },
  {
    title: 'Choix des produits',
    description: 'Sélection du matériau, du vitrage, des coloris et des options.',
  },
  {
    title: 'Fabrication',
    description: 'Menuiseries fabriquées sur mesure chez nos partenaires.',
  },
  {
    title: 'Pose',
    description: 'Dépose de l\'ancien, installation du nouveau, étanchéité et finitions.',
  },
]

const faqs = [
  {
    question: 'PVC, alu ou bois : que choisir ?',
    answer: 'Le PVC offre le meilleur rapport qualité/prix et isolation. L\'aluminium est plus fin et design, idéal pour les grandes baies. Le bois apporte un cachet naturel mais demande de l\'entretien. Des solutions mixtes (bois/alu) combinent les avantages.',
  },
  {
    question: 'Double ou triple vitrage ?',
    answer: 'Le double vitrage suffit dans la plupart des cas. Le triple vitrage se justifie pour les expositions nord, les zones très froides ou les projets très performants (maison passive).',
  },
  {
    question: 'Combien de temps pour changer une fenêtre ?',
    answer: 'Le remplacement d\'une fenêtre prend en moyenne 2 à 4 heures. Pour une maison complète, comptez 1 à 3 jours selon le nombre d\'ouvertures.',
  },
  {
    question: 'Les volets roulants sont-ils subventionnés ?',
    answer: 'Les volets roulants isolants peuvent être éligibles aux CEE dans certaines conditions. Les volets solaires bénéficient d\'un crédit d\'impôt spécifique.',
  },
]

const relatedServices = [
  {
    title: 'Isolation par l\'Extérieur (ITE)',
    href: '/isolation/ite',
    icon: '/images/pictos/Isolation-Thermique-par-l-Extérieur.svg',
  },
  {
    title: 'Bardage & Ravalement',
    href: '/efficacite-energetique/bardage-ravalement',
    icon: '/images/pictos/Bardage-Facade.svg',
  },
  {
    title: 'Ventilation VMC',
    href: '/efficacite-energetique/ventilation',
    icon: '/images/pictos/VMC.svg',
  },
]

export default function MenuiseriesPage() {
  return (
    <ServicePageLayout
      title="Menuiseries & Volets"
      subtitle="Fenêtres, portes, volets roulants"
      description="Les fenêtres sont un maillon essentiel de l'isolation. Remplacer vos anciennes menuiseries par du double ou triple vitrage améliore considérablement votre confort thermique et acoustique, tout en réduisant vos factures."
      heroImage="/images/photos/renovation-6.jpeg"
      heroIcon="/images/pictos/Volets-Roulants.svg"
      benefits={benefits}
      process={process}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  )
}

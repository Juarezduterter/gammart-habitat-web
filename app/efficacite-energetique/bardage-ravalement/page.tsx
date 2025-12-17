import { Metadata } from 'next'
import { ServicePageLayout } from '@/components/service/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Bardage et Ravalement de Façade Bas-Rhin | Gammart Habitat',
  description: 'Bardage et ravalement de façade dans le Bas-Rhin. Protégez et embellissez votre maison. Possibilité de coupler avec ITE. Entreprise RGE, devis gratuit.',
}

const benefits = [
  {
    title: 'Protection durable',
    description: 'Le bardage protège vos murs des intempéries, du gel et des UV, prolongeant la durée de vie de votre façade.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Esthétique renouvelée',
    description: 'Transformez l\'apparence de votre maison avec un large choix de matériaux, couleurs et finitions.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Valorisation du bien',
    description: 'Une façade bien entretenue augmente la valeur de votre patrimoine immobilier.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Entretien réduit',
    description: 'Les bardages modernes nécessitent peu d\'entretien et gardent leur aspect pendant des décennies.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Couplage avec ITE',
    description: 'Profitez du bardage pour ajouter une isolation thermique et faire d\'une pierre deux coups.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Choix de matériaux',
    description: 'Bois, composite, PVC, fibro-ciment... chaque matériau a ses avantages selon vos préférences.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
]

const process = [
  {
    title: 'Diagnostic façade',
    description: 'État des murs, fissures, humidité, choix esthétiques et techniques.',
  },
  {
    title: 'Proposition',
    description: 'Devis détaillé avec échantillons de matériaux et visualisation si souhaité.',
  },
  {
    title: 'Travaux',
    description: 'Échafaudage, préparation du support, pose du bardage ou application de l\'enduit.',
  },
  {
    title: 'Livraison',
    description: 'Nettoyage, vérification qualité et conseils d\'entretien.',
  },
]

const faqs = [
  {
    question: 'Quelle est la durée de vie d\'un bardage ?',
    answer: 'Un bardage bien posé et entretenu dure 30 à 50 ans selon le matériau. Le bois demande un entretien régulier (lasure tous les 5-10 ans), tandis que le composite ou le PVC sont quasi sans entretien.',
  },
  {
    question: 'Faut-il un permis pour un bardage ?',
    answer: 'Une déclaration préalable de travaux est généralement nécessaire car le bardage modifie l\'aspect extérieur. Nous vous accompagnons dans ces démarches.',
  },
  {
    question: 'Quelle différence entre bardage et ravalement ?',
    answer: 'Le ravalement consiste à rénover l\'enduit ou la peinture existante. Le bardage ajoute une nouvelle "peau" sur votre façade, avec une lame d\'air et souvent une isolation.',
  },
  {
    question: 'Le bardage est-il éligible aux aides ?',
    answer: 'Le bardage seul n\'est pas éligible aux aides énergétiques. En revanche, couplé à une isolation (ITE sous bardage), il devient éligible à MaPrimeRénov\' et aux CEE.',
  },
]

const relatedServices = [
  {
    title: 'Isolation par l\'Extérieur (ITE)',
    href: '/isolation/ite',
    icon: '/images/pictos/Isolation-Thermique-par-l-Extérieur.svg',
  },
  {
    title: 'Menuiseries & Volets',
    href: '/efficacite-energetique/menuiseries',
    icon: '/images/pictos/Volets-Roulants.svg',
  },
  {
    title: 'Peinture Int. & Ext.',
    href: '/efficacite-energetique/peinture',
    icon: '/images/pictos/Peinture-Int-&-Ext.svg',
  },
]

export default function BardageRavalementPage() {
  return (
    <ServicePageLayout
      title="Bardage & Ravalement de Façade"
      subtitle="Protection & esthétique"
      description="Votre façade est le premier élément visible de votre maison. Le bardage et le ravalement permettent de la protéger durablement tout en lui donnant un coup de jeune. Couplé à une isolation, c'est l'occasion de réduire vos factures."
      heroImage="/images/photos/renovation-5.jpeg"
      heroIcon="/images/pictos/Bardage-Facade.svg"
      benefits={benefits}
      process={process}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  )
}

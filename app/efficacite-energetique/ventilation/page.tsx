import { Metadata } from 'next'
import { ServicePageLayout } from '@/components/service/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Ventilation VMC Bas-Rhin | Simple et double flux | Gammart Habitat',
  description: 'Installation de VMC simple et double flux dans le Bas-Rhin. Améliorez la qualité de l\'air et réduisez l\'humidité. Entreprise RGE, devis gratuit.',
}

const benefits = [
  {
    title: 'Air sain en permanence',
    description: 'La VMC renouvelle l\'air vicié et évacue les polluants, CO2, odeurs et humidité.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: 'Lutte contre l\'humidité',
    description: 'Fini la condensation sur les fenêtres, les moisissures et les odeurs de renfermé.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Économies (double flux)',
    description: 'La VMC double flux récupère jusqu\'à 90% de la chaleur de l\'air extrait.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Confort acoustique',
    description: 'Plus besoin d\'ouvrir les fenêtres pour aérer, le calme est préservé.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
      </svg>
    ),
  },
  {
    title: 'Indispensable après isolation',
    description: 'Une maison bien isolée doit être bien ventilée pour éviter les problèmes d\'humidité.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Aides disponibles',
    description: 'La VMC double flux est éligible à MaPrimeRénov\' et aux CEE.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

const process = [
  {
    title: 'Étude des besoins',
    description: 'Analyse du logement, des pièces humides, du réseau existant.',
  },
  {
    title: 'Choix du système',
    description: 'Simple flux hygro ou double flux selon le projet et le budget.',
  },
  {
    title: 'Installation',
    description: 'Pose du caisson, du réseau de gaines et des bouches d\'extraction/insufflation.',
  },
  {
    title: 'Mise en service',
    description: 'Réglages, équilibrage des débits et explications d\'utilisation.',
  },
]

const faqs = [
  {
    question: 'VMC simple flux ou double flux ?',
    answer: 'La simple flux hygro est suffisante pour la plupart des logements et coûte moins cher. La double flux se justifie dans les projets très performants ou les rénovations globales, car elle récupère la chaleur de l\'air extrait.',
  },
  {
    question: 'La VMC fait-elle du bruit ?',
    answer: 'Une VMC bien dimensionnée et installée est très silencieuse (25-30 dB). Le bruit provient souvent d\'un mauvais dimensionnement ou d\'un manque d\'entretien des filtres.',
  },
  {
    question: 'Faut-il nettoyer la VMC ?',
    answer: 'Les filtres doivent être nettoyés tous les 3-6 mois et remplacés annuellement. Les bouches d\'extraction se nettoient à l\'eau savonneuse 2 fois par an.',
  },
  {
    question: 'Peut-on installer une VMC en rénovation ?',
    answer: 'Oui, même si c\'est plus complexe qu\'en neuf. Il faut prévoir le passage des gaines (combles, faux plafonds, gaines techniques). Nous trouvons toujours une solution adaptée.',
  },
]

const relatedServices = [
  {
    title: 'Isolation des Combles',
    href: '/isolation-combles-bas-rhin',
    icon: '/images/pictos/Isolation-Combles-Perdus.svg',
  },
  {
    title: 'Isolation par l\'Extérieur (ITE)',
    href: '/isolation/ite',
    icon: '/images/pictos/Isolation-Thermique-par-l-Extérieur.svg',
  },
  {
    title: 'Étude Thermique',
    href: '/efficacite-energetique/etude-thermique',
    icon: '/images/pictos/Audit-Energétique.svg',
  },
]

export default function VentilationPage() {
  return (
    <ServicePageLayout
      title="Ventilation VMC"
      subtitle="Simple flux & double flux"
      description="Une maison bien isolée doit être bien ventilée. La VMC assure un renouvellement permanent de l'air, évacue l'humidité et les polluants, pour un intérieur sain et confortable. En double flux, elle récupère même la chaleur."
      heroImage="/images/photos/renovation-1.jpeg"
      heroIcon="/images/pictos/VMC.svg"
      benefits={benefits}
      process={process}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  )
}

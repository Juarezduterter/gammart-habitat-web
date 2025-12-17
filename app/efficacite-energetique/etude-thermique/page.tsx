import { Metadata } from 'next'
import { ServicePageLayout } from '@/components/service/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Étude Thermique et Audit Énergétique Bas-Rhin | Gammart Habitat',
  description: 'Audit énergétique et étude thermique dans le Bas-Rhin. Identifiez les travaux prioritaires pour votre rénovation. Obligatoire pour MaPrimeRénov\' Parcours accompagné.',
}

const benefits = [
  {
    title: 'Vision claire de votre logement',
    description: 'L\'audit identifie précisément les points faibles de votre maison et les solutions adaptées.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'Priorisation des travaux',
    description: 'Sachez par quoi commencer pour optimiser votre budget et vos économies.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    title: 'Obligatoire pour les aides',
    description: 'L\'audit est requis pour MaPrimeRénov\' Parcours accompagné et les rénovations d\'ampleur.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Estimation des économies',
    description: 'Chiffrage précis des gains énergétiques et financiers après travaux.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Projection DPE',
    description: 'Visualisez l\'évolution de votre classe énergétique après chaque scénario de travaux.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Document valorisant',
    description: 'L\'audit est un atout pour la revente, montrant le potentiel d\'amélioration du bien.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
]

const process = [
  {
    title: 'Visite approfondie',
    description: 'Inspection du bâti, relevé des surfaces, analyse des équipements.',
  },
  {
    title: 'Analyse thermique',
    description: 'Calcul des déperditions, identification des ponts thermiques.',
  },
  {
    title: 'Scénarios de travaux',
    description: 'Plusieurs options chiffrées avec gains attendus et aides mobilisables.',
  },
  {
    title: 'Rapport complet',
    description: 'Document détaillé avec recommandations et planning suggéré.',
  },
]

const faqs = [
  {
    question: 'Quelle différence entre DPE et audit énergétique ?',
    answer: 'Le DPE est un diagnostic réglementaire qui donne une note (A à G). L\'audit énergétique est plus complet : il analyse en détail les déperditions et propose des scénarios de travaux chiffrés avec leurs gains estimés.',
  },
  {
    question: 'L\'audit est-il obligatoire ?',
    answer: 'L\'audit est obligatoire pour vendre une maison classée F ou G (passoire thermique) et pour bénéficier de MaPrimeRénov\' Parcours accompagné. Il est recommandé pour tout projet de rénovation globale.',
  },
  {
    question: 'Combien coûte un audit énergétique ?',
    answer: 'Un audit pour une maison individuelle coûte entre 800€ et 1500€ selon la surface et la complexité. Il peut être partiellement financé par MaPrimeRénov\' ou les CEE.',
  },
  {
    question: 'Qui peut réaliser un audit énergétique ?',
    answer: 'L\'audit doit être réalisé par un professionnel certifié RGE "Audit énergétique". Nous travaillons avec des auditeurs qualifiés et pouvons vous accompagner dans cette démarche.',
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

export default function EtudeThermiquePage() {
  return (
    <ServicePageLayout
      title="Étude Thermique & Audit Énergétique"
      subtitle="Diagnostic & recommandations"
      description="Avant de vous lancer dans des travaux, il est essentiel de comprendre où part l'énergie. L'audit énergétique analyse votre logement en détail et vous propose un plan d'action personnalisé, avec estimation des gains et des aides."
      heroImage="/images/photos/renovation-2.jpeg"
      heroIcon="/images/pictos/Audit-Energétique.svg"
      benefits={benefits}
      process={process}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  )
}

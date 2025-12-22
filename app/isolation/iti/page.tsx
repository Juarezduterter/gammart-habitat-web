import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Isolation thermique par l\'intérieur Bas-Rhin | ITI efficace & conseils RGE — Gammart Habitat',
  description: 'Votre isolation thermique par l\'intérieur Bas-Rhin avec Gammart Habitat : ITI sur-mesure (doublage collé, ossature, contre-cloison), matériaux adaptés, aides, délais, prix indicatifs. Devis gratuit, garantie décennale.',
}

const problems = [
  {
    title: 'Murs froids et inconfort dans certaines pièces',
    description: 'L\'ITI réduit la sensation de paroi froide et améliore l\'homogénéité thermique.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Factures de chauffage élevées',
    description: 'En limitant les déperditions par les murs, on diminue le besoin de chauffage à confort égal.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Façade non modifiable',
    description: 'Si la façade doit rester intacte (règles locales, esthétique, contraintes techniques), l\'ITI est souvent la solution la plus réaliste.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Rénovation intérieure en cours',
    description: 'Quand vous refaites des pièces (plafonds, électricité, peinture), intégrer une ITI est logique et optimisé.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: 'Mitoyenneté / accès extérieur complexe',
    description: 'Certaines configurations rendent l\'ITE difficile : l\'ITI permet d\'avancer malgré tout.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
  {
    title: 'Amélioration du DPE',
    description: 'Une isolation thermique par l\'intérieur peut contribuer à une meilleure performance globale quand elle s\'intègre dans une stratégie cohérente.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
]

const benefits = [
  { title: 'Une amélioration sensible du confort au quotidien', description: 'Moins de parois froides, moins de "murs glacés" au toucher, et une sensation de chaleur plus stable : c\'est souvent le premier bénéfice ressenti après une isolation thermique par l\'intérieur.' },
  { title: 'Un chantier adaptable et progressif', description: 'L\'ITI peut se réaliser pièce par pièce : vous n\'êtes pas obligé de tout faire d\'un coup. Cette flexibilité aide à planifier selon vos priorités, votre budget et votre calendrier.' },
  { title: 'Une solution utile quand l\'ITE est impossible', description: 'Façade classée, contraintes locales, mitoyenneté, accès limité… L\'ITI devient alors une alternative fiable pour améliorer l\'enveloppe thermique.' },
  { title: 'Un budget souvent plus accessible', description: 'Selon la technique et les finitions, l\'ITI peut être plus abordable qu\'une rénovation complète de façade. La qualité se joue sur les détails (ponts thermiques, étanchéité, finitions).' },
  { title: 'Une intégration facile lors de travaux intérieurs', description: 'Si vous refaites l\'électricité, les murs, ou l\'aménagement, l\'ITI s\'intègre naturellement. On peut aussi prévoir des passages techniques dans l\'ossature.' },
  { title: 'Valorisation et cohérence énergétique', description: 'En combinant ITI + combles (et parfois ventilation), vous obtenez une enveloppe plus cohérente et un meilleur confort global.' },
]

const techniques = [
  {
    title: 'Doublage collé',
    description: 'Panneaux isolants + plaque de plâtre collés directement sur le mur (si support compatible), avec une mise en œuvre rapide.',
    ideal: 'Murs relativement plans et sains, recherche d\'un chantier efficace.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16v12H4z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 9h10M7 13h10" />
      </svg>
    ),
  },
  {
    title: 'Ossature métallique (type rails/montants)',
    description: 'Création d\'une ossature, pose de l\'isolant entre montants, puis plaque de plâtre. Permet de rattraper des défauts de mur et de passer des réseaux.',
    ideal: 'Murs irréguliers, rénovation intérieure complète, besoin de passages techniques.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v16H4z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 10h16M10 4v16" />
      </svg>
    ),
  },
  {
    title: 'Contre-cloison / doublage sur ossature désolidarisée',
    description: 'Technique qui améliore l\'acoustique et la régularité, utile dans certains cas spécifiques (murs humides à traiter en amont, besoin d\'espace technique).',
    ideal: 'Recherche de confort acoustique ou contraintes particulières de mur.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
      </svg>
    ),
  },
]

const materials = [
  { title: 'Laine de verre', type: 'Isolant courant', characteristics: 'Isolant courant, polyvalent, souvent économique.', advantages: 'Bon rapport performance/prix, adapté à de nombreux doublages.', recommended: 'ITI sur ossature, rampants, rénovations intérieures classiques.' },
  { title: 'Laine de roche', type: 'Isolant minéral', characteristics: 'Bon comportement acoustique, solution robuste.', advantages: 'Amélioration du confort sonore, usage fréquent en rénovation.', recommended: 'Pièces exposées au bruit ou murs nécessitant un meilleur affaiblissement acoustique.' },
  { title: 'Fibre de bois', type: 'Isolant biosourcé', characteristics: 'Isolant biosourcé, intéressant pour le confort d\'été selon configurations.', advantages: 'Approche plus écologique, sensation de confort renforcée.', recommended: 'Projets orientés confort d\'été / matériaux biosourcés.' },
  { title: 'Panneaux isolants haute performance', type: 'Isolant technique', characteristics: 'Meilleures performances à épaisseur réduite (selon produits).', advantages: 'Utile quand l\'épaisseur est contrainte (petites pièces, couloirs).', recommended: 'Zones où la perte de surface doit rester minimale.' },
]

const processSteps = [
  { title: 'Premier contact', description: 'Vous expliquez votre problématique, les pièces concernées, votre commune.' },
  { title: 'Visite technique', description: 'Relevés, état des murs, points sensibles (humidité, fissures, planéité).' },
  { title: 'Étude & devis', description: 'Méthode (collé/ossature/contre-cloison), matériaux, finitions, planning.' },
  { title: 'Préparation chantier', description: 'Protections, organisation des pièces, gestion des réseaux si nécessaire.' },
  { title: 'Réalisation', description: 'Pose isolant, étanchéité à l\'air selon cas, parements, traitement des détails.' },
  { title: 'Contrôle qualité', description: 'Planéité, joints, finitions, nettoyage.' },
  { title: 'Réception & garanties', description: 'PV, documents, garanties et conseils d\'usage.' },
]

const pricing = [
  { prestation: 'ITI doublage collé (selon support)', fourchette: '60 à 95 €/m²' },
  { prestation: 'ITI sur ossature métallique', fourchette: '75 à 115 €/m²' },
  { prestation: 'ITI avec contraintes spécifiques / finitions renforcées', fourchette: '90 à 120 €/m²' },
]

const faqs = [
  { question: 'Qu\'est-ce que l\'ITI exactement ?', answer: 'L\'ITI isole les murs côté intérieur avec un isolant et un parement (souvent plaque de plâtre), via des techniques comme le doublage collé ou l\'ossature métallique.' },
  { question: 'Combien coûte une isolation thermique par l\'intérieur Bas-Rhin ?', answer: 'Les prix varient selon la technique, l\'épaisseur et les finitions. À titre indicatif, on observe souvent une fourchette autour de 60 à 120 €/m². Un devis après visite est recommandé.' },
  { question: 'Combien de temps durent les travaux ?', answer: 'La durée varie selon la surface et les finitions, généralement de quelques jours à deux semaines.' },
  { question: 'Puis-je rester chez moi pendant les travaux ?', answer: 'Souvent oui, mais il faut prévoir une gêne à l\'intérieur (déplacement de meubles, poussière, pièces temporairement indisponibles).' },
  { question: 'L\'ITI est-elle efficace ?', answer: 'Oui, surtout sur les murs responsables de l\'inconfort. L\'efficacité dépend de la qualité de pose et du traitement des points sensibles.' },
  { question: 'ITI ou ITE : comment choisir ?', answer: 'ITE est idéale pour rénover la façade et réduire fortement les ponts thermiques. ITI est pertinente quand l\'extérieur est contraint ou quand on veut traiter des pièces côté intérieur.' },
  { question: 'Quelles aides pour l\'ITI ?', answer: 'Selon conditions : MaPrimeRénov\', CEE, TVA réduite, Éco-PTZ, et parfois des aides locales.' },
  { question: 'Quelle garantie pour l\'ITI ?', answer: 'Les travaux sont encadrés par les garanties applicables, dont la garantie décennale selon le périmètre des prestations.' },
]

const relatedServices = [
  { title: 'Isolation par l\'Extérieur (ITE)', href: '/isolation/ite', icon: '/images/pictos/Isolation-Thermique-par-l-Extérieur.svg' },
  { title: 'Isolation des Combles', href: '/isolation/combles', icon: '/images/pictos/Isolation-Combles-Perdus.svg' },
  { title: 'Ventilation VMC', href: '/installation-vmc-bas-rhin', icon: '/images/pictos/VMC.svg' },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
  }))
}

export default function ITIPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <nav className="bg-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm flex-wrap">
            <li><Link href="/" className="text-gray-500 hover:text-gammart-green-dark">Accueil</Link></li>
            <li className="text-gray-400">/</li>
            <li><span className="text-gray-500">Nos Services</span></li>
            <li className="text-gray-400">/</li>
            <li><span className="text-gray-500">Isolation du logement</span></li>
            <li className="text-gray-400">/</li>
            <li><span className="text-gammart-green-dark font-medium">Isolation Thermique par l&apos;Intérieur</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-gammart-green-dark via-gammart-green-leaf to-gammart-green-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <ScrollReveal>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Image src="/images/pictos/Isolation-Thermique-par-l-Intérieur.svg" alt="ITI" width={40} height={40} className="w-10 h-10 brightness-0 invert" />
                  </div>
                  <span className="text-gammart-green-sage font-medium">ITI - Isolation des murs</span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Isolation thermique par l&apos;intérieur Bas-Rhin</h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-xl text-white/80 mb-6 leading-relaxed">Vous cherchez une <strong>isolation thermique par l&apos;intérieur Bas-Rhin</strong> parce que votre maison est difficile à chauffer, que certaines pièces restent froides, ou que vous ne pouvez (ou ne voulez) pas modifier la façade ?</p>
                <p className="text-lg text-white/70 mb-8">L&apos;ITI consiste à ajouter un complexe isolant à l&apos;intérieur des murs (panneaux isolants, doublage, ossature + isolant…), puis à réaliser une finition (généralement plaque de plâtre). Une solution pertinente quand l&apos;extérieur est contraint.</p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Button href="/contact" variant="secondary" size="lg" glow>Demander un devis ITI</Button>
                  <Button href="tel:0763982357" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">07 63 98 23 57</Button>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <div className="flex flex-wrap gap-4">
                  {['Entreprise RGE', 'Garantie décennale', 'Devis gratuit'].map((badge) => (
                    <div key={badge} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                      <svg className="w-5 h-5 text-gammart-green-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {badge}
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <Image src="/images/photos/interior-wall-insulation.jpeg" alt="Isolation thermique par l'intérieur Bas-Rhin" width={600} height={400} className="w-full h-auto object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl hidden md:block">
                  <div className="text-4xl font-bold text-gammart-green-dark">-30%</div>
                  <div className="text-gray-600 text-sm">de déperditions murales</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-8 text-center">Qu&apos;est-ce que l&apos;isolation thermique par l&apos;intérieur (ITI) ?</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>La <strong>isolation thermique par l&apos;intérieur Bas-Rhin</strong> (ITI) est une technique qui vise à réduire les déperditions de chaleur en isolant les murs <strong>depuis l&apos;intérieur du logement</strong>. Concrètement, on crée une &quot;seconde peau&quot; côté intérieur : un isolant est posé contre le mur (collé ou fixé via une ossature), puis recouvert par une finition (souvent une plaque de plâtre).</p>
              <p>L&apos;ITI est particulièrement intéressante lorsque l&apos;ITE n&apos;est pas envisageable (façade à préserver, contraintes d&apos;urbanisme, mitoyenneté, accès compliqué), ou lorsque le projet doit rester plus &quot;léger&quot; en budget. Elle permet aussi de traiter certaines zones ciblées : un mur très exposé, une pièce toujours plus froide, ou une partie de la maison en rénovation.</p>
              <p><strong>Point important :</strong> l&apos;ITI réduit la surface habitable (épaisseur isolant + doublage) et demande une attention particulière à l&apos;étanchéité à l&apos;air et aux points singuliers (jonctions, tableaux de fenêtres, prises électriques). Une isolation thermique par l&apos;intérieur bien faite, c&apos;est une mise en œuvre soignée, pas juste &quot;rajouter de la laine&quot;.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mt-10 bg-gammart-beige rounded-2xl p-6">
              <p className="text-gammart-green-dark font-medium flex items-start gap-3">
                <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span><strong>Le saviez-vous ?</strong> Quand l&apos;on ne peut pas rénover l&apos;extérieur, l&apos;ITI est souvent la meilleure façon d&apos;améliorer le confort d&apos;un logement en agissant directement sur la sensation de &quot;mur froid&quot;.</span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-6">Pour quels problèmes l&apos;ITI est-elle idéale ?</h2></div></ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <ScrollReveal key={problem.title} delay={index * 100}>
                <div className="bg-white rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-gammart-green-dark/10 rounded-xl flex items-center justify-center text-gammart-green-dark mb-4">{problem.icon}</div>
                  <h3 className="text-lg font-bold text-gammart-green-dark mb-2">{problem.title}</h3>
                  <p className="text-gray-600">{problem.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={600}>
            <p className="text-center text-gray-600 mt-10 max-w-2xl mx-auto">Si votre priorité est de gagner en confort rapidement, sans toucher à l&apos;extérieur, l&apos;isolation thermique par l&apos;intérieur mérite d&apos;être étudiée en premier.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-6">Les avantages de l&apos;ITI</h2></div></ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} delay={index * 100}>
                <div className="border-l-4 border-gammart-green-dark pl-6">
                  <h3 className="text-xl font-bold text-gammart-green-dark mb-3">{index + 1}) {benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Techniques Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-6">Nos techniques d&apos;ITI</h2><p className="text-lg text-gray-600 max-w-3xl mx-auto">Le bon choix dépend de votre mur, de l&apos;état du support, de la place disponible, et du niveau de finition attendu.</p></div></ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {techniques.map((technique, index) => (
              <ScrollReveal key={technique.title} delay={index * 150}>
                <div className="bg-white rounded-2xl p-6 shadow-lg h-full">
                  <div className="w-12 h-12 bg-gammart-green-dark/10 rounded-xl flex items-center justify-center text-gammart-green-dark mb-4">
                    {technique.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gammart-green-dark mb-3">{technique.title}</h3>
                  <p className="text-gray-600 mb-4">{technique.description}</p>
                  <p className="text-sm text-gammart-green-leaf font-medium"><strong>Idéal pour :</strong> {technique.ideal}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-6">Les matériaux pour une ITI</h2><p className="text-lg text-gray-600 max-w-3xl mx-auto">Le matériau n&apos;est pas un détail : il doit correspondre à votre projet (confort, budget, acoustique, contraintes d&apos;épaisseur).</p></div></ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((material, index) => (
              <ScrollReveal key={material.title} delay={index * 100}>
                <div className="bg-gray-50 rounded-2xl p-6 h-full">
                  <span className="inline-block bg-gammart-green-dark text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">{material.type}</span>
                  <h3 className="text-lg font-bold text-gammart-green-dark mb-4">{material.title}</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong className="text-gray-700">Caractéristiques :</strong> <span className="text-gray-600">{material.characteristics}</span></p>
                    <p><strong className="text-gray-700">Avantages :</strong> <span className="text-gray-600">{material.advantages}</span></p>
                    <p><strong className="text-gray-700">Recommandé pour :</strong> <span className="text-gray-600">{material.recommended}</span></p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-gammart-green-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Comment se déroulent vos travaux d&apos;ITI ?</h2><p className="text-lg text-gammart-green-sage max-w-3xl mx-auto">Une isolation thermique par l&apos;intérieur doit être organisée pour limiter la gêne et garantir une finition propre.</p></div></ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {processSteps.slice(0, 4).map((step, index) => (
              <ScrollReveal key={step.title} delay={index * 100}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gammart-green-dark font-bold text-xl mx-auto mb-4">{index + 1}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gammart-green-sage text-sm">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {processSteps.slice(4).map((step, index) => (
              <ScrollReveal key={step.title} delay={(index + 4) * 100}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gammart-green-dark font-bold text-xl mx-auto mb-4">{index + 5}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gammart-green-sage text-sm">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={700}><div className="text-center mt-12"><div className="inline-flex flex-wrap gap-6 text-white/80 text-sm justify-center"><span>Durée moyenne : quelques jours à 2 semaines</span><span className="hidden md:inline">|</span><span>Perturbation : moyenne (travaux intérieurs)</span><span className="hidden md:inline">|</span><span>Saison idéale : toute l&apos;année</span></div></div></ScrollReveal>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal><div className="text-center mb-12"><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-6">Quel budget pour une ITI ?</h2><p className="text-lg text-gray-600">Pour une isolation thermique par l&apos;intérieur Bas-Rhin, on observe souvent une <strong>fourchette indicative de 60 à 120 €/m²</strong> selon la technique, l&apos;épaisseur, l&apos;état du support et le niveau de finition.</p></div></ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="bg-gray-50 rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead className="bg-gammart-green-dark text-white"><tr><th className="px-6 py-4 text-left font-semibold">Prestation ITI</th><th className="px-6 py-4 text-right font-semibold">Fourchette indicative</th></tr></thead>
                <tbody>{pricing.map((item, index) => (<tr key={item.prestation} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}><td className="px-6 py-4 text-gray-700">{item.prestation}</td><td className="px-6 py-4 text-right font-semibold text-gammart-green-dark">{item.fourchette}</td></tr>))}</tbody>
              </table>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}><p className="text-sm text-gray-500 text-center mt-6">Prix indicatifs, seul un devis après visite technique permet une estimation fiable.</p><div className="text-center mt-8"><Button href="/contact" variant="primary" size="lg" glow>Obtenir mon estimation gratuite</Button></div></ScrollReveal>
        </div>
      </section>

      {/* Aides Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal><div className="text-center mb-12"><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-6">Aides financières pour votre ITI</h2><p className="text-lg text-gray-600">Selon votre situation et les règles en vigueur, l&apos;ITI peut être éligible à des dispositifs d&apos;aide.</p></div></ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: 'MaPrimeRénov\'', desc: 'Montants variables selon profils et travaux', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
                { name: 'CEE (prime énergie)', desc: 'Prime variable selon chantier et conditions', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
                { name: 'Éco-PTZ', desc: 'Financement possible d\'une partie du chantier', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
                { name: 'TVA réduite (5,5%)', desc: 'Selon éligibilité des travaux', icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' },
              ].map((aide) => (
                <div key={aide.name} className="bg-white rounded-2xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-gammart-green-dark/10 rounded-xl flex items-center justify-center flex-shrink-0"><svg className="w-6 h-6 text-gammart-green-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={aide.icon} /></svg></div>
                  <div><h3 className="font-bold text-gammart-green-dark">{aide.name}</h3><p className="text-gray-600 text-sm">{aide.desc}</p></div>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}><div className="text-center mt-10"><p className="text-gray-600 mb-6">Nous vous accompagnons pour comprendre ce qui est réellement pertinent et constituer les éléments nécessaires.</p><Button href="/aides-financements" variant="outline" size="lg">Simuler mes aides</Button></div></ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-6">Questions fréquentes sur l&apos;ITI</h2></div></ScrollReveal>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal key={faq.question} delay={index * 50}>
                <details className="group bg-gray-50 rounded-2xl overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none"><h3 className="text-lg font-semibold text-gammart-green-dark pr-4">{faq.question}</h3><svg className="w-6 h-6 text-gammart-green-dark flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary>
                  <div className="px-6 pb-6"><p className="text-gray-600">{faq.answer}</p></div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-gammart-green-dark mb-6">Services complémentaires</h2></div></ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 100}>
                <Link href={service.href} className="group block bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gammart-green-dark/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gammart-green-dark transition-colors"><Image src={service.icon} alt={service.title} width={32} height={32} className="w-8 h-8 group-hover:brightness-0 group-hover:invert transition-all" /></div>
                  <h3 className="text-lg font-bold text-gammart-green-dark mb-2 group-hover:text-gammart-green-leaf transition-colors">{service.title}</h3>
                  <div className="flex items-center text-gammart-green-dark font-medium text-sm">En savoir plus<svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 md:py-28 bg-gammart-green-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Prêt à isoler vos murs par l&apos;intérieur ?</h2>
            <p className="text-xl text-gammart-green-sage mb-10">Demandez votre devis ITI gratuit et sans engagement. Nous vous répondons sous 24h.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="secondary" size="lg">Démarrer mon projet ITI</Button>
              <Button href="tel:0763982357" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10"><svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>07 63 98 23 57</Button>
            </div>
            <p className="text-white/60 mt-6 text-sm">Devis gratuit • Sans engagement • Réponse sous 24h</p>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

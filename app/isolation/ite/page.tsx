import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Isolation thermique par l\'extérieur Bas-Rhin | ITE RGE, façade & économies — Gammart Habitat',
  description: 'Besoin d\'une isolation thermique par l\'extérieur Bas-Rhin ? Gammart Habitat réalise votre ITE (enduit, bardage, vêture) pour réduire les déperditions et embellir la façade. Devis gratuit, RGE, garantie décennale.',
}

const problems = [
  {
    title: 'Déperditions par les murs extérieurs',
    description: 'L\'ITE limite les fuites de chaleur sur une grande surface : vos façades.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
      </svg>
    ),
  },
  {
    title: 'Inconfort thermique (hiver/été)',
    description: 'Moins d\'effet "paroi froide" et une température plus homogène dans les pièces.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Factures énergétiques élevées',
    description: 'Une enveloppe plus performante réduit les besoins de chauffage et stabilise la consommation.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Façade vieillissante',
    description: 'L\'ITE rénove l\'extérieur : finitions propres, esthétique modernisée, protection du support.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Humidité, murs froids',
    description: 'En améliorant l\'enveloppe, on limite les phénomènes liés aux parois très froides.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: 'DPE à améliorer',
    description: 'L\'ITE agit sur un poste clé : les murs, souvent déterminants dans la performance globale.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
]

const benefits = [
  { title: 'Performance thermique renforcée', description: 'En enveloppant les murs, l\'ITE réduit les pertes de chaleur sur une très grande surface. C\'est l\'un des meilleurs leviers pour rendre votre logement plus stable en température.' },
  { title: 'Économies d\'énergie plus visibles', description: 'Moins de déperditions = moins de chauffage pour obtenir la même sensation de confort. Le gain dépend de l\'état initial, de la surface et de la cohérence des autres postes.' },
  { title: 'Confort hiver/été', description: 'L\'ITE améliore la sensation en hiver (murs moins froids) et peut réduire la surchauffe estivale selon le matériau et la configuration.' },
  { title: 'Valorisation du bien (façade + DPE)', description: 'Vous combinez rénovation esthétique et amélioration énergétique. À la revente, une façade propre et une performance en hausse renforcent l\'attractivité.' },
  { title: 'Esthétique : une façade "comme neuve"', description: 'Enduit, bardage, vêture : l\'ITE permet de changer le style, de corriger l\'aspect et de moderniser l\'extérieur.' },
  { title: 'Durabilité + garanties', description: 'Une mise en œuvre conforme, avec des matériaux adaptés, apporte une solution durable, encadrée par les garanties et l\'assurance décennale.' },
]

const techniques = [
  { title: 'Enduit sur isolant (ETICS)', description: 'L\'isolant est fixé sur la façade, puis recouvert d\'un sous-enduit armé (treillis), et d\'un enduit de finition.', ideal: 'Un rendu façade "traditionnel" propre, une rénovation esthétique avec un large choix de textures.' },
  { title: 'Bardage ventilé', description: 'Une ossature et une lame d\'air ventilée sont mises en œuvre, puis le bardage (bois, composite, métal) est posé en parement.', ideal: 'Un style contemporain, une façade très exposée, ou une solution ventilée et robuste.' },
  { title: 'Vêture / vêtage', description: 'Panneaux de finition intégrés, posés en système complet, pour une façade à l\'aspect maîtrisé.', ideal: 'Projets où la régularité et la rapidité de mise en œuvre sont prioritaires.' },
]

const materials = [
  { title: 'Laine de roche', type: 'Isolant minéral', characteristics: 'Bonne tenue au feu, performances acoustiques intéressantes, adaptée à de nombreux cas.', advantages: 'Confort global, comportement stable.', recommended: 'Façades où l\'on veut renforcer l\'acoustique.' },
  { title: 'Polystyrène expansé (PSE)', type: 'Isolant synthétique', characteristics: 'Léger, très utilisé en ITE, excellent rapport performance/prix.', advantages: 'Solution courante, mise en œuvre maîtrisée.', recommended: 'ITE "standard" sur de nombreuses maisons.' },
  { title: 'Fibre de bois', type: 'Isolant biosourcé', characteristics: 'Bon confort d\'été selon les projets, isolant d\'origine végétale.', advantages: 'Approche plus "écologique".', recommended: 'Projets orientés confort d\'été et biosourcés.' },
]

const processSteps = [
  { title: 'Premier contact', description: 'Échange sur la maison, vos objectifs, votre commune.' },
  { title: 'Visite technique', description: 'Relevés, photos, état de façade, points sensibles.' },
  { title: 'Étude & devis', description: 'Solutions proposées, chiffrage, options et finitions.' },
  { title: 'Préparation', description: 'Planification, commande matériaux, échafaudage.' },
  { title: 'Réalisation', description: 'Pose de l\'isolant, traitement des points singuliers.' },
  { title: 'Contrôle qualité', description: 'Vérification, finitions, nettoyage, détails.' },
  { title: 'Réception', description: 'PV de réception, documents, et garanties.' },
]

const pricing = [
  { prestation: 'ITE sous enduit (standard)', fourchette: '120 à 170 €/m²' },
  { prestation: 'ITE + finitions esthétiques renforcées', fourchette: '140 à 190 €/m²' },
  { prestation: 'ITE en bardage ventilé', fourchette: '150 à 200 €/m²' },
]

const faqs = [
  { question: 'Qu\'est-ce que l\'ITE exactement ?', answer: 'L\'ITE consiste à poser un isolant sur les murs extérieurs puis une finition (enduit, bardage ou vêture) pour réduire les déperditions et rénover la façade.' },
  { question: 'Combien coûte une isolation thermique par l\'extérieur Bas-Rhin ?', answer: 'En général, on se situe autour de 120 à 200 €/m² selon la technique, les matériaux, l\'état de façade et les finitions. Un devis après visite est indispensable.' },
  { question: 'Combien de temps durent les travaux ?', answer: 'En moyenne 2 à 4 semaines, selon la surface, la hauteur, les détails de finition et la météo.' },
  { question: 'Puis-je rester chez moi pendant les travaux ?', answer: 'Souvent oui : les travaux se font majoritairement à l\'extérieur. Il peut y avoir des contraintes ponctuelles (accès, bruit).' },
  { question: 'L\'ITE est-elle vraiment efficace ?', answer: 'Oui, car elle traite une grande surface (les murs) et limite certains ponts thermiques. Les gains varient selon l\'état initial.' },
  { question: 'ITE ou ITI : que choisir ?', answer: 'ITE si vous voulez traiter les ponts thermiques et rénover la façade. ITI si vous ne pouvez pas intervenir à l\'extérieur.' },
  { question: 'Quelles aides pour l\'ITE ?', answer: 'Selon conditions : MaPrimeRénov\', CEE, TVA 5,5%, Éco-PTZ, et parfois des aides locales.' },
  { question: 'Faut-il une autorisation pour isoler par l\'extérieur ?', answer: 'Selon la commune et les règles d\'urbanisme, une déclaration peut être nécessaire. On vérifie ce point avant lancement.' },
]

const relatedServices = [
  { title: 'Isolation par l\'Intérieur (ITI)', href: '/isolation/iti', icon: '/images/pictos/Isolation-Thermique-par-l-Intérieur.svg' },
  { title: 'Isolation des Combles', href: '/isolation/combles', icon: '/images/pictos/Isolation-Combles-Perdus.svg' },
  { title: 'Bardage & Ravalement', href: '/efficacite-energetique/bardage-ravalement', icon: '/images/pictos/Bardage-Facade.svg' },
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

export default function ITEPage() {
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
            <li><span className="text-gammart-green-dark font-medium">Isolation Thermique par l&apos;Extérieur</span></li>
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
                    <Image src="/images/pictos/Isolation-Thermique-par-l-Extérieur.svg" alt="ITE" width={40} height={40} className="w-10 h-10 brightness-0 invert" />
                  </div>
                  <span className="text-gammart-green-sage font-medium">ITE - Isolation des murs</span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Isolation thermique par l&apos;extérieur Bas-Rhin</h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-xl text-white/80 mb-6 leading-relaxed">Vous envisagez une <strong>isolation thermique par l&apos;extérieur Bas-Rhin</strong> parce que votre maison perd de la chaleur, que vos factures montent, ou que votre façade a besoin d&apos;un vrai coup de neuf ?</p>
                <p className="text-lg text-white/70 mb-8">L&apos;ITE consiste à poser un isolant sur vos murs extérieurs, puis à appliquer une finition (enduit, bardage ou vêture). Résultat : une enveloppe plus performante, une maison plus stable en température, et une façade rénovée durablement.</p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Button href="/contact" variant="secondary" size="lg" glow>Demander un devis ITE</Button>
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
                  <Image src="/images/photos/external-wall-insulation.jpeg" alt="Isolation thermique par l'extérieur Bas-Rhin" width={600} height={400} className="w-full h-auto object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl hidden md:block">
                  <div className="text-4xl font-bold text-gammart-green-dark">-57%</div>
                  <div className="text-gray-600 text-sm">d&apos;énergie en moyenne</div>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-8 text-center">Qu&apos;est-ce que l&apos;isolation thermique par l&apos;extérieur (ITE) ?</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>L&apos;ITE (Isolation Thermique par l&apos;Extérieur) est une technique qui vise à <strong>isoler les murs extérieurs</strong> d&apos;un logement en créant une couche isolante continue sur la façade. Concrètement, on fixe un isolant (par exemple laine de roche, PSE ou fibre de bois) sur le support existant, puis on applique une finition adaptée : un enduit armé, un bardage ventilé, ou une vêture.</p>
              <p>L&apos;intérêt majeur, c&apos;est la continuité : une isolation extérieure bien conçue &quot;enveloppe&quot; la maison, ce qui limite fortement certains ponts thermiques (jonctions plancher/mur, tableaux de fenêtres, angles).</p>
              <p>En pratique, une <strong>isolation thermique par l&apos;extérieur Bas-Rhin</strong> apporte souvent un gain de confort immédiat : murs moins froids au toucher, pièces plus homogènes, sensation de chaleur plus stable.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mt-10 bg-gammart-beige rounded-2xl p-6">
              <p className="text-gammart-green-dark font-medium flex items-start gap-3">
                <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span><strong>Le saviez-vous ?</strong> Dans beaucoup de logements, les murs représentent une part importante des pertes de chaleur. Une isolation thermique par l&apos;extérieur cible précisément ce poste, tout en rénovant l&apos;aspect extérieur de votre maison.</span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-6">Pourquoi opter pour une isolation thermique par l&apos;extérieur ?</h2></div></ScrollReveal>
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
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-6">Les avantages de l&apos;ITE</h2></div></ScrollReveal>
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
          <ScrollReveal><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-6">Comment se déroule une ITE ?</h2><p className="text-lg text-gray-600 max-w-3xl mx-auto">L&apos;ITE n&apos;est pas une méthode unique : on choisit la technique selon le support, l&apos;esthétique souhaitée et les contraintes du chantier.</p></div></ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {techniques.map((technique, index) => (
              <ScrollReveal key={technique.title} delay={index * 150}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-full">
                  <div className="h-48 overflow-hidden"><Image src="/images/photos/mineral-wool-facade.jpeg" alt={technique.title} width={400} height={200} className="w-full h-full object-cover" /></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gammart-green-dark mb-3">{technique.title}</h3>
                    <p className="text-gray-600 mb-4">{technique.description}</p>
                    <p className="text-sm text-gammart-green-leaf font-medium"><strong>Idéal pour :</strong> {technique.ideal}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-6">Les matériaux pour une ITE</h2><p className="text-lg text-gray-600 max-w-3xl mx-auto">Le choix de l&apos;isolant dépend de votre maison : support, objectif, contraintes et budget.</p></div></ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {materials.map((material, index) => (
              <ScrollReveal key={material.title} delay={index * 150}>
                <div className="bg-gray-50 rounded-2xl p-8 h-full">
                  <span className="inline-block bg-gammart-green-dark text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">{material.type}</span>
                  <h3 className="text-xl font-bold text-gammart-green-dark mb-4">{material.title}</h3>
                  <div className="space-y-3 text-sm">
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
          <ScrollReveal><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Comment se déroulent vos travaux d&apos;ITE ?</h2><p className="text-lg text-gammart-green-sage max-w-3xl mx-auto">Notre parcours est conçu pour être simple et rassurant.</p></div></ScrollReveal>
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
          <ScrollReveal delay={700}><div className="text-center mt-12"><div className="inline-flex flex-wrap gap-6 text-white/80 text-sm justify-center"><span>Durée moyenne : 2 à 4 semaines</span><span className="hidden md:inline">|</span><span>Perturbation : faible à modérée</span><span className="hidden md:inline">|</span><span>Saison idéale : printemps/été/automne</span></div></div></ScrollReveal>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal><div className="text-center mb-12"><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-6">Quel budget pour une ITE ?</h2><p className="text-lg text-gray-600">Pour une isolation thermique par l&apos;extérieur Bas-Rhin, on parle généralement d&apos;une fourchette indicative de <strong>120 à 200 €/m²</strong>.</p></div></ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="bg-gray-50 rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead className="bg-gammart-green-dark text-white"><tr><th className="px-6 py-4 text-left font-semibold">Prestation ITE</th><th className="px-6 py-4 text-right font-semibold">Fourchette indicative</th></tr></thead>
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
          <ScrollReveal><div className="text-center mb-12"><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-6">Aides financières pour votre ITE</h2><p className="text-lg text-gray-600">L&apos;ITE peut être éligible à différentes aides selon votre situation et votre logement.</p></div></ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: 'MaPrimeRénov\'', desc: 'Montant selon revenus et type de travaux', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
                { name: 'CEE (prime énergie)', desc: 'Prime variable selon chantier et conditions', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
                { name: 'Éco-PTZ', desc: 'Possibilité de financer une partie des travaux', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
                { name: 'TVA réduite (5,5%)', desc: 'Selon éligibilité des travaux', icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' },
              ].map((aide) => (
                <div key={aide.name} className="bg-white rounded-2xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-gammart-green-dark/10 rounded-xl flex items-center justify-center flex-shrink-0"><svg className="w-6 h-6 text-gammart-green-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={aide.icon} /></svg></div>
                  <div><h3 className="font-bold text-gammart-green-dark">{aide.name}</h3><p className="text-gray-600 text-sm">{aide.desc}</p></div>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}><div className="text-center mt-10"><p className="text-gray-600 mb-6">Nous vous accompagnons dans vos démarches et dans la constitution des éléments nécessaires.</p><Button href="/aides-financements" variant="outline" size="lg">Simuler mes aides</Button></div></ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-6">Questions fréquentes sur l&apos;ITE</h2></div></ScrollReveal>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Prêt à isoler votre façade ?</h2>
            <p className="text-xl text-gammart-green-sage mb-10">Demandez votre devis ITE gratuit et sans engagement. Nous vous répondons sous 24h.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="secondary" size="lg">Demander mon devis ITE</Button>
              <Button href="tel:0763982357" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10"><svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>07 63 98 23 57</Button>
            </div>
            <p className="text-white/60 mt-6 text-sm">Devis gratuit • Sans engagement • Réponse sous 24h</p>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

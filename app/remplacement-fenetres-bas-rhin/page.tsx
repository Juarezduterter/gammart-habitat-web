import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Remplacement fenetres Bas-Rhin | Menuiseries & volets roulants performants - Gammart Habitat',
  description:
    'Votre remplacement fenetres Bas-Rhin avec Gammart Habitat : fenetres PVC/alu/bois, portes, baies vitrees, volets roulants (integres ou renovation), pose soignee, aides, delais et prix indicatifs. Devis gratuit, garantie decennale.',
}

const reassuranceBadges = ['Devis gratuit', 'Garantie decennale', 'Pose soignee / finitions']

const problems = [
  {
    title: "Courants d'air et fuites",
    description: "Des menuiseries fatiguees laissent passer l'air : une pose etanche ameliore le confort. Remplacement fenetres Bas-Rhin.",
  },
  {
    title: 'Vitrages froids / condensation',
    description: "Une meilleure performance reduit l'effet paroi froide (selon ventilation).",
  },
  {
    title: 'Bruit exterieur',
    description: 'La bonne composition vitrage + pose adaptee ameliore le confort acoustique.',
  },
  {
    title: 'Factures elevees',
    description: 'Moins de fuites et moins de pertes localisees = chauffage plus efficace.',
  },
  {
    title: "Securite et confort d'usage",
    description: 'Volets roulants et menuiseries modernes ameliorent fermeture et ergonomie.',
  },
  {
    title: "Confort d'ete",
    description: 'Volets roulants = protection solaire et meilleure maitrise des surchauffes.',
  },
]

const benefits = [
  {
    title: 'Confort thermique immediat',
    description: 'Vitrages performants et etancheite reduisent la sensation de froid pres des fenetres.',
  },
  {
    title: "Reduction des fuites d'air",
    description: "Moins de courants d'air = temperature plus stable et confort plus homogene.",
  },
  {
    title: 'Confort acoustique renforce',
    description: 'Selon la composition et la pose, les nuisances sonores diminuent.',
  },
  {
    title: "Economies d'energie",
    description: "Le gain depend de l'etat initial et de la coherence globale (isolation, ventilation).",
  },
  {
    title: "Confort d'ete grace aux volets",
    description: "Protection solaire, moins d'echauffement et meilleure gestion de la lumiere.",
  },
  {
    title: 'Securite et valorisation',
    description: 'Fermetures robustes, usage simple, esthetique modernisee : impact visible.',
  },
]

const techniques = [
  {
    title: 'Depose totale (pose complete)',
    description: "L'ancienne menuiserie est retiree entierement avant la pose de la nouvelle.",
    ideal: 'Performance maximale, menuiseries tres anciennes, reprise complete des finitions.',
  },
  {
    title: 'Renovation sur dormant existant',
    description: "La nouvelle fenetre est posee sur l'ancien dormant si l'etat le permet.",
    ideal: 'Limiter les reprises interieures et accelerer le chantier (support sain).',
  },
  {
    title: 'Pose de volets roulants',
    description: 'Volets integres (selon projets) ou volets renovation avec coffre adapte.',
    ideal: "Confort d'ete, securite, protection nocturne, modernisation.",
  },
  {
    title: 'Traitement des jonctions et etancheite',
    description: 'Traitement propre des interfaces menuiserie/mur, reglages et finitions.',
    ideal: "Eviter fuites d'air, infiltrations et ponts thermiques.",
  },
]

const materials = [
  {
    title: 'PVC',
    characteristics: 'Excellent rapport performance/prix, entretien simple.',
    advantages: 'Efficacite thermique, cout maitrise, bonne durabilite.',
    usage: 'Renovation standard, objectif performance/budget.',
  },
  {
    title: 'Aluminium',
    characteristics: 'Profils fins, esthetique moderne, grandes dimensions possibles.',
    advantages: 'Robustesse, design, ideal grandes baies.',
    usage: 'Baies vitrees, rendu contemporain, grandes ouvertures.',
  },
  {
    title: 'Bois',
    characteristics: 'Esthetique chaleureuse, bon comportement global.',
    advantages: 'Style, confort, integration patrimoniale possible.',
    usage: 'Maisons traditionnelles, projets esthetiques, renovation soignee.',
  },
  {
    title: 'Mixte (bois/alu)',
    characteristics: 'Interieur bois + exterieur alu (selon gammes).',
    advantages: 'Confort interieur + entretien reduit cote exterieur.',
    usage: 'Projets premium, durabilite et esthetique.',
  },
  {
    title: 'Volets roulants (PVC/alu)',
    characteristics: 'Solutions manuelles ou motorisees selon configuration.',
    advantages: "Protection solaire, confort d'ete, securite, occultation.",
    usage: "Chambres, facades exposees, amelioration du confort d'usage.",
  },
]

const processSteps = [
  {
    title: 'Premier contact',
    description: 'Nombre de fenetres, type (fenetre/porte/baie), symptomes, commune, objectifs.',
  },
  {
    title: 'Visite technique',
    description: 'Mesures, verification des supports, etat des dormants, contraintes.',
  },
  {
    title: 'Etude & devis',
    description: 'Materiaux, type de pose, vitrage, options volets roulants, planning.',
  },
  {
    title: 'Preparation chantier',
    description: "Protections, organisation des acces, planification d'intervention.",
  },
  {
    title: 'Pose',
    description: 'Depose, mise en place, etancheite, reglages, finitions.',
  },
  {
    title: 'Controle qualite',
    description: 'Ouverture/fermeture, joints, finitions, nettoyage.',
  },
  {
    title: 'Reception & garanties',
    description: "Documents, conseils d'entretien et d'usage.",
  },
]

const pricing = [
  { prestation: 'Fenetre PVC (pose incluse)', fourchette: '450 a 900 EUR' },
  { prestation: 'Fenetre alu (pose incluse)', fourchette: '700 a 1 400 EUR' },
  { prestation: 'Baie vitree (pose incluse)', fourchette: '1 500 a 4 500 EUR' },
  { prestation: 'Volet roulant (selon config)', fourchette: '350 a 900 EUR' },
]

const projects = [
  { location: 'Bas-Rhin (ex.)', description: 'Fenetres PVC + volets roulants | Confort renforce', action: 'Voir le projet' },
  { location: 'Strasbourg (ex.)', description: 'Baie vitree alu + volets | Luminosite + performance', action: 'Voir le projet' },
  { location: 'Eurometropole (ex.)', description: 'Remplacement complet menuiseries | Etancheite amelioree', action: 'Voir le projet' },
  { location: 'Bas-Rhin (ex.)', description: 'Menuiseries + travaux complementaires | Performance homogene', action: 'Voir le projet' },
]

const faqs = [
  {
    question: "Faut-il changer les fenetres avant ou apres l'isolation ?",
    answer:
      "Cela depend du type d'isolation (ITE/ITI), de l'etat des menuiseries et des interfaces. L'objectif est d'eviter les ponts thermiques et d'avoir des jonctions propres.",
  },
  {
    question: 'Depose totale ou pose en renovation : que choisir ?',
    answer:
      'La depose totale est souvent plus performante mais plus intrusive. La pose en renovation peut etre plus rapide si le support est sain. Le choix se fait au cas par cas.',
  },
  {
    question: 'Les volets roulants ameliorent-ils vraiment le confort ?',
    answer:
      "Oui, surtout pour le confort d'ete (protection solaire) et la protection nocturne. Ils participent aussi a la securite et a l'occultation.",
  },
  {
    question: 'Combien coute un remplacement fenetres Bas-Rhin ?',
    answer:
      'Tres variable : materiau, dimensions, vitrage, pose et options. Les prix indicatifs servent de repere, mais le devis apres metrage est indispensable.',
  },
  {
    question: 'Est-ce que ca ameliore le DPE ?',
    answer:
      "Souvent oui, surtout si les anciennes fenetres sont tres peu performantes, mais l'impact depend de l'ensemble du logement.",
  },
  {
    question: 'Quelles aides pour changer ses fenetres ?',
    answer:
      "Selon criteres et conditions : MaPrimeRenov', CEE, TVA reduite, Eco-PTZ, aides locales eventuelles. L'eligibilite se verifie au cas par cas.",
  },
  {
    question: 'Combien de temps durent les travaux ?',
    answer:
      "De 1 a 3 jours pour quelques menuiseries, jusqu'a une semaine environ pour une maison complete, selon complexite.",
  },
]

const faqSchema = {
  "@context": 'https://schema.org',
  "@type": 'FAQPage',
  mainEntity: [
    {
      "@type": 'Question',
      name: 'Depose totale ou pose en renovation : que choisir ?',
      acceptedAnswer: {
        "@type": 'Answer',
        text: "La depose totale est souvent plus performante mais plus intrusive. La pose en renovation peut etre plus rapide si le dormant existant est sain. Le choix depend du support et de l'objectif.",
      },
    },
    {
      "@type": 'Question',
      name: 'Les volets roulants ameliorent-ils vraiment le confort ?',
      acceptedAnswer: {
        "@type": 'Answer',
        text: "Oui. Ils ameliorent le confort d'ete grace a la protection solaire, renforcent l'occultation la nuit et apportent aussi un benefice securite.",
      },
    },
    {
      "@type": 'Question',
      name: 'Quelles aides pour changer ses fenetres ?',
      acceptedAnswer: {
        "@type": 'Answer',
        text: "Selon conditions : MaPrimeRenov', CEE, TVA reduite, Eco-PTZ et parfois des aides locales. L'eligibilite se verifie au cas par cas.",
      },
    },
    {
      "@type": 'Question',
      name: 'Combien de temps durent les travaux ?',
      acceptedAnswer: {
        "@type": 'Answer',
        text: 'Selon le nombre de menuiseries : 1 a 3 jours pour un petit projet, jusqua environ une semaine pour une maison complete, selon complexite.',
      },
    },
  ],
}

export default function MenuiseriesVoletsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Fil d'Ariane */}
      <nav className="bg-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm flex-wrap">
            <li>
              <Link href="/" className="text-gray-500 hover:text-gammart-green-dark">
                Accueil
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <span className="text-gray-500">Nos Services</span>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <span className="text-gray-500">Efficacite Energetique</span>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <span className="text-gammart-green-dark font-medium">Menuiseries & Volets Roulants</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* SECTION 1 - Hero Service */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-gammart-green-dark via-gammart-green-leaf to-gammart-green-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <ScrollReveal>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Image
                      src="/images/pictos/Volets-Roulants.svg"
                      alt="Remplacement fenetres Bas-Rhin"
                      width={40}
                      height={40}
                      className="w-10 h-10 brightness-0 invert"
                    />
                  </div>
                  <span className="text-gammart-green-sage font-medium">Menuiseries & volets roulants</span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Remplacement fenetres Bas-Rhin : menuiseries et volets roulants pour gagner en confort, securite et efficacite energetique
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="space-y-4 text-lg text-white/80 leading-relaxed mb-8">
                  <p>
                    Vous cherchez un <strong>remplacement fenetres Bas-Rhin</strong> parce que vous ressentez des courants d'air, que vos vitrages sont froids
                    en hiver, que le bruit exterieur passe trop facilement, ou que vos volets sont fatigues ? Des menuiseries performantes Strasbourg et des
                    <strong> volets roulants Bas-Rhin</strong> adaptes ameliorent immediatement le confort.
                  </p>
                  <p>
                    <strong>Promesse :</strong> reduire les fuites d'air, ameliorer le confort thermique et acoustique, securiser et moderniser le logement.
                  </p>
                  <p>
                    Le remplacement des menuiseries consiste a poser des fenetres, portes et baies vitrees plus performantes, avec une mise en oeuvre
                    soignee. Le changement fenetres Alsace se joue aussi sur la qualite de pose. Les volets roulants completent la performance : protection
                    nocturne, confort d'ete, securite et integration esthetique.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Button href="/contact" variant="secondary" size="lg" glow>
                    Demander un devis Menuiseries
                  </Button>
                  <Button href="tel:0763982357" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                    07 63 98 23 57
                  </Button>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <div className="flex flex-wrap gap-4">
                  {reassuranceBadges.map((badge) => (
                    <div key={badge} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                      <svg className="w-5 h-5 text-gammart-green-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {badge}
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/photos/window-blinds.jpeg"
                    alt="Menuiseries et volets roulants"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl hidden md:block">
                  <div className="text-4xl font-bold text-gammart-green-dark">Confort</div>
                  <div className="text-gray-600 text-sm">Thermique, acoustique, securite</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 2 - Definition & Principes */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-8 text-center">
              Le principe du remplacement fenetres Bas-Rhin (et pourquoi c'est un levier cle)
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Les menuiseries sont un point strategique : elles peuvent etre a la fois une source de pertes thermiques et d'inconfort. Le{' '}
                <strong>remplacement fenetres Bas-Rhin</strong> vise a traiter ces problemes avec des fenetres plus performantes, mais aussi avec une pose
                correcte : une bonne fenetre mal posee peut perdre une partie de son interet.
              </p>
              <p>Dans une renovation energetique, les menuiseries jouent sur plusieurs axes :</p>
              <ul>
                <li>
                  <strong>Etancheite a l'air</strong> : moins de fuites = plus de confort et meilleure efficacite du chauffage.
                </li>
                <li>
                  <strong>Performance du vitrage</strong> : reduction de l'effet "vitre froide", meilleure stabilite interieure.
                </li>
                <li>
                  <strong>Confort acoustique</strong> : baisse des nuisances sonores selon vitrage et composition.
                </li>
                <li>
                  <strong>Lumiere / confort d'ete</strong> : gestion des apports solaires, protection via volets.
                </li>
              </ul>
              <p>
                Les volets roulants completent le systeme : ils ajoutent une couche de protection, ameliorent la securite et facilitent l'usage quotidien.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mt-10 bg-gammart-beige rounded-2xl p-6">
              <p className="text-gammart-green-dark font-medium flex items-start gap-3">
                <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>
                  <strong>Le saviez-vous ?</strong> Dans de nombreuses maisons, une part importante de l'inconfort vient des zones autour des fenetres. Le{' '}
                  <strong>remplacement fenetres Bas-Rhin</strong> se joue autant sur le choix du produit que sur la qualite de pose.{' '}
                  <strong>Remplacement fenetres Bas-Rhin</strong>.
                </span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 3 - Problemes resolus */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-4">
                Menuiseries & volets : pour quels problemes ?
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <ScrollReveal key={problem.title} delay={index * 100}>
                <div className="bg-white rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gammart-green-dark/10 flex items-center justify-center text-gammart-green-dark font-semibold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-gammart-green-dark mb-2">{problem.title}</h3>
                  <p className="text-gray-600">{problem.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={500}>
            <p className="mt-10 text-center text-gammart-green-dark font-medium">
              Si vous voulez un confort concret et visible, le <strong>remplacement fenetres Bas-Rhin</strong> est l'un des travaux qui se ressent le plus au
              quotidien. <strong>Remplacement fenetres Bas-Rhin</strong>.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 4 - Benefices & Avantages */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-4">
                Les avantages du remplacement fenetres Bas-Rhin
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} delay={index * 100}>
                <div className="bg-gray-50 rounded-2xl p-6 h-full border border-gray-100">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gammart-green-dark text-white flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-gammart-green-dark">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 - Techniques & Methodes */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-4">
                Comment se deroule un remplacement fenetres Bas-Rhin ?
              </h2>
              <p className="text-lg text-gray-600">
                Le resultat depend beaucoup de la methode de pose, de l'etat du bati et des finitions.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techniques.map((technique, index) => (
              <ScrollReveal key={technique.title} delay={index * 100}>
                <div className="bg-white rounded-2xl p-6 h-full shadow-sm hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold text-gammart-green-dark mb-2">{technique.title}</h3>
                  <p className="text-gray-600 mb-3">{technique.description}</p>
                  <p className="text-sm font-medium text-gammart-green-dark">Ideal pour : {technique.ideal}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - Materiaux & Produits utilises */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-4">
                Les materiaux de menuiseries pour un remplacement fenetres Bas-Rhin
              </h2>
              <p className="text-lg text-gray-600">
                Le choix depend du budget, du style, des contraintes et de l'objectif (thermique, acoustique, entretien).
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {materials.map((material, index) => (
              <ScrollReveal key={material.title} delay={index * 100}>
                <div className="bg-gray-50 rounded-2xl p-6 h-full border border-gray-100">
                  <h3 className="text-xl font-semibold text-gammart-green-dark mb-3">{material.title}</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      <strong>Caracteristiques :</strong> {material.characteristics}
                    </li>
                    <li>
                      <strong>Avantages :</strong> {material.advantages}
                    </li>
                    <li>
                      <strong>Usage recommande :</strong> {material.usage}
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 - Processus de realisation */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-4">
                Comment se deroulent vos travaux de remplacement fenetres Bas-Rhin ?
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.title} delay={index * 80}>
                <div className="bg-white rounded-2xl p-6 h-full shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-gammart-green-dark text-white flex items-center justify-center font-semibold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gammart-green-dark mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={500}>
            <div className="mt-10 bg-white rounded-2xl p-6 border border-gray-100">
              <h4 className="text-lg font-semibold text-gammart-green-dark mb-4">Informations pratiques</h4>
              <div className="grid md:grid-cols-3 gap-4 text-gray-700">
                <div>
                  <strong>Duree moyenne :</strong>
                  <p>1 a 3 jours (petit projet) ; 3 a 7 jours (maison complete)</p>
                </div>
                <div>
                  <strong>Perturbation :</strong>
                  <p>faible a moyenne (intervention piece par piece)</p>
                </div>
                <div>
                  <strong>Saison ideale :</strong>
                  <p>toute l'annee (organisation pour limiter l'ouverture prolongee)</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={600}>
            <div className="text-center mt-8">
              <Button href="/contact" variant="primary" size="lg">
                Obtenir mon estimation gratuite
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 8 - Tarifs & Estimation */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-4">
                Quel budget pour un remplacement fenetres Bas-Rhin ?
              </h2>
              <p className="text-lg text-gray-600">
                Le cout varie selon le materiau, les dimensions, le vitrage, la complexite de pose et les options (volets roulants, motorisation).
              </p>
            </div>
          </ScrollReveal>
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Prestation</th>
                    <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700">Fourchette indicative</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {pricing.map((row) => (
                    <tr key={row.prestation}>
                      <td className="px-6 py-4 text-gray-700">{row.prestation}</td>
                      <td className="px-6 py-4 text-right font-medium text-gammart-green-dark">{row.fourchette}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <ScrollReveal delay={200}>
            <div className="mt-6 bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h4 className="text-lg font-semibold text-gammart-green-dark mb-3">Facteurs de variation</h4>
              <ul className="grid md:grid-cols-2 gap-3 text-gray-600">
                <li>Nombre d'ouvrants et dimensions</li>
                <li>Type de vitrage (thermique/acoustique)</li>
                <li>Methode de pose (depose totale vs renovation)</li>
                <li>Finitions (habillages, reprises)</li>
                <li>Volets roulants (manuel/motorise) et contraintes d'integration</li>
                <li>Acces chantier et particularites (etage, grandes baies)</li>
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <p className="text-center text-sm text-gray-600 mt-4">Mention importante : prix indicatifs. Devis personnalise gratuit apres visite.</p>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <div className="text-center mt-8">
              <Button href="/contact" variant="primary" size="lg">
                Obtenir mon estimation gratuite
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 9 - Aides & Financements */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-4">
                Aides financieres pour le remplacement fenetres Bas-Rhin
              </h2>
              <p className="text-lg text-gray-600">
                Selon votre situation, le remplacement de menuiseries peut etre eligible a certains dispositifs.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "MaPrimeRenov' (selon conditions)",
              'CEE (prime energie) (selon conditions)',
              'Eco-PTZ (selon projet)',
              'TVA reduite (5,5%) (selon eligibilite)',
              'Aides locales (Grand Est / collectivites)',
            ].map((item, index) => (
              <ScrollReveal key={item} delay={index * 80}>
                <div className="bg-white rounded-2xl p-5 border border-gray-100 h-full flex items-start gap-3">
                  <svg className="w-6 h-6 text-gammart-green-dark flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={400}>
            <p className="text-center text-gray-600 mt-6">
              Message cle : nous vous aidons a comprendre ce qui s'applique a votre cas et a structurer un projet coherent.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={500}>
            <div className="text-center mt-8">
              <Button href="/aides-financements" variant="secondary" size="lg">
                Simuler mes aides
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 10 - Realisations */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-4">
                Nos realisations en remplacement fenetres Bas-Rhin
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <ScrollReveal key={`${project.location}-${index}`} delay={index * 100}>
                <div className="rounded-2xl p-6 bg-gray-50 border border-gray-100 h-full">
                  <p className="text-sm text-gammart-green-dark font-semibold mb-2">{project.location}</p>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <Link
                    href="/realisations"
                    className="text-gammart-green-dark font-medium hover:text-gammart-green-leaf transition-colors inline-flex items-center gap-2"
                  >
                    {project.action}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={300}>
            <div className="text-center mt-8">
              <Button href="/realisations" variant="primary" size="lg">
                Toutes nos realisations Menuiseries
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 11 - FAQ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-4">
                Questions frequentes sur le remplacement fenetres Bas-Rhin
              </h2>
            </div>
          </ScrollReveal>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal key={faq.question} delay={index * 80}>
                <details className="group bg-white rounded-2xl overflow-hidden border border-gray-100">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-semibold text-gammart-green-dark pr-4">{faq.question}</h3>
                    <svg
                      className="w-6 h-6 text-gammart-green-dark flex-shrink-0 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12 - Bloc expertise */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-4">
                Pourquoi choisir Gammart Habitat pour votre remplacement fenetres Bas-Rhin ?
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Pose soignee - etancheite, reglages, finitions : le resultat se joue dans les details.',
              'Conseil coherent - choix materiau/vitrage/volets selon votre bati et vos objectifs.',
              'Vision renovation globale - coordination possible avec isolation, VMC et facade.',
              'Garanties - cadre professionnel, garantie decennale et suivi.',
            ].map((item, index) => (
              <ScrollReveal key={item} delay={index * 100}>
                <div className="flex items-start gap-3 bg-gray-50 rounded-2xl p-5 border border-gray-100 h-full">
                  <svg className="w-6 h-6 text-gammart-green-dark flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={400}>
            <p className="text-center text-gammart-green-dark font-semibold mt-8">
              Notre objectif : un remplacement fenetres Bas-Rhin qui ameliore reellement votre confort, pas juste "des fenetres neuves". Remplacement
              fenetres Bas-Rhin.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

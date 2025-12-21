import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Audit energetique Bas-Rhin | Etude thermique maison & plan de travaux - Gammart Habitat',
  description:
    'Votre audit energetique Bas-Rhin avec Gammart Habitat : etude thermique, diagnostic des deperditions, priorisation des travaux (isolation, menuiseries, VMC), estimation des gains et orientation aides. Devis gratuit.',
}

const reassuranceBadges = ['Devis gratuit', 'Conseil sur-mesure', 'Vision renovation globale']

const problems = [
  {
    title: 'Je ne sais pas par ou commencer',
    description: 'L\'etude donne un plan de travaux clair et priorise. Audit energetique Bas-Rhin.',
  },
  {
    title: 'Peur de me tromper et de perdre de l\'argent',
    description: 'On cible les postes a meilleur impact et on evite les erreurs de sequence.',
  },
  {
    title: 'Factures elevees / maison inconfortable',
    description: 'On identifie les causes : deperditions, fuites d\'air, ventilation, systemes.',
  },
  {
    title: 'Objectif DPE / revente / location',
    description: 'On construit une trajectoire realiste pour ameliorer la classe energetique.',
  },
  {
    title: 'Problemes d\'humidite / condensation',
    description: 'On verifie la coherence isolation + ventilation + usages.',
  },
  {
    title: 'Projet de renovation d\'ampleur',
    description: 'On structure le projet avec des scenarios et une logique multi-postes.',
  },
]

const benefits = [
  {
    title: 'Un plan de travaux priorise',
    description: 'Vous savez quoi faire, dans quel ordre, et pourquoi.',
  },
  {
    title: 'Un budget optimise',
    description: 'On oriente le budget vers les postes qui apportent le meilleur gain.',
  },
  {
    title: 'Une renovation coordonnee',
    description: 'Les interfaces comptent : fenetres + isolation, isolation + VMC, facade + finition.',
  },
  {
    title: 'Des objectifs realistes',
    description: 'Scenarios, priorites, coherence globale : vous evitez les promesses floues.',
  },
  {
    title: 'Un meilleur confort au quotidien',
    description: 'Moins de zones froides, meilleure stabilite thermique, air interieur plus sain.',
  },
  {
    title: 'Une base solide pour les aides',
    description: 'Selon le parcours, une etude claire facilite la structuration des dossiers.',
  },
]

const techniques = [
  {
    title: 'Visite technique et collecte d\'informations',
    description: 'Releves, photos, discussion sur les symptomes, caracteristiques du bati.',
    ideal: 'Comprendre la maison reelle, pas une theorie.',
  },
  {
    title: 'Analyse des deperditions et points faibles',
    description: 'Toiture/combles, murs, menuiseries, plancher bas, ponts thermiques, ventilation.',
    ideal: 'Cibler les postes les plus rentables et les plus urgents.',
  },
  {
    title: 'Scenarios de travaux (lots coherents)',
    description: 'Prioritaire, progressif, renovation globale/ampleur avec multi-postes.',
    ideal: 'Adapter la strategie au budget et aux objectifs.',
  },
  {
    title: 'Recommandations techniques et ordre des travaux',
    description: 'Ordre conseille et vigilance sur les interfaces.',
    ideal: 'Eviter les erreurs et maximiser les gains.',
  },
]

const deliverables = [
  {
    title: 'Diagnostic global du logement',
    characteristics: 'Synthese des points faibles et des priorites.',
    advantages: 'Vous comprenez clairement ou sont les pertes et pourquoi.',
    usage: 'Base de decision pour la suite.',
  },
  {
    title: 'Plan de travaux priorise',
    characteristics: 'Lots coherents, ordre conseille, points de vigilance.',
    advantages: 'Feuille de route simple a executer.',
    usage: 'Renovation par etapes ou globale.',
  },
  {
    title: 'Scenarios et logique ROI',
    characteristics: 'Options selon budget et phases possibles.',
    advantages: 'Vous avancez sans vous bloquer, avec coherence.',
    usage: 'Travaux progressifs ou d\'ampleur.',
  },
  {
    title: 'Orientation sur les solutions techniques',
    characteristics: 'Isolation, menuiseries, VMC, facade, etc.',
    advantages: 'Choix adaptes au bati, pas de copier-coller.',
    usage: 'Decision rapide et pertinente.',
  },
  {
    title: 'Estimation qualitative des gains',
    characteristics: 'Gains attendus selon scenario (confort, coherence, DPE selon cas).',
    advantages: 'Reperes pour decider et prioriser.',
    usage: 'Comparaison des options.',
  },
]

const processSteps = [
  {
    title: 'Premier contact',
    description: 'Objectifs (confort, factures, DPE, projet), commune, type de logement.',
  },
  {
    title: 'Visite technique',
    description: 'Releves, photos, identification des zones sensibles et contraintes.',
  },
  {
    title: 'Analyse & synthese',
    description: 'Interpretation, points faibles, coherence isolation/menuiseries/ventilation.',
  },
  {
    title: 'Scenarios',
    description: 'Plan en 1 lot, en phases, ou renovation globale.',
  },
  {
    title: 'Restitution',
    description: 'Explication claire, priorites, questions/reponses.',
  },
  {
    title: 'Devis travaux (si souhaite)',
    description: 'Chiffrage par lots, planification, phasage.',
  },
  {
    title: 'Suivi',
    description: 'Coordination possible des travaux si vous lancez le projet.',
  },
]

const pricing = [
  { prestation: 'Bilan priorisation', fourchette: '150 a 350 EUR' },
  { prestation: 'Audit complet avec scenarios', fourchette: '350 a 900 EUR' },
  { prestation: 'Accompagnement global', fourchette: 'Sur devis' },
]

const projects = [
  { location: 'Bas-Rhin (ex.)', description: 'Audit + plan par phases (combles -> VMC -> menuiseries)', action: 'Voir le projet' },
  { location: 'Strasbourg (ex.)', description: 'Audit + renovation multi-postes', action: 'Voir le projet' },
  { location: 'Eurometropole (ex.)', description: 'Audit + ITE + finitions facade', action: 'Voir le projet' },
]

const faqs = [
  {
    question: 'Quelle difference entre audit energetique et DPE ?',
    answer:
      'Le DPE est une evaluation standardisee. L\'audit est plus oriente plan d\'action avec scenarios et priorisation (selon prestation).',
  },
  {
    question: 'Est-ce utile si je sais deja que je veux isoler ?',
    answer:
      'Oui, car l\'audit aide a prioriser les postes, a coordonner isolation, menuiseries et ventilation, et a eviter les erreurs de sequence.',
  },
  {
    question: 'L\'audit m\'aide-t-il a reduire mes factures ?',
    answer:
      'Indirectement oui : il permet de cibler les travaux a meilleur impact et de construire une strategie coherente.',
  },
  {
    question: 'Combien de temps faut-il pour obtenir les resultats ?',
    answer:
      'Apres visite, l\'analyse et la restitution dependent du niveau de livrable. On fixe un delai clair dans la proposition.',
  },
  {
    question: 'Peut-on faire les travaux en plusieurs etapes ?',
    answer:
      'Oui, et c\'est souvent la meilleure approche. L\'audit sert a organiser des phases coherentes.',
  },
  {
    question: 'L\'audit est-il obligatoire ?',
    answer:
      'Selon les dispositifs et le type de projet, il peut etre requis ou recommande. On verifie selon votre situation.',
  },
]

const faqSchema = {
  "@context": 'https://schema.org',
  "@type": 'FAQPage',
  mainEntity: [
    {
      "@type": 'Question',
      name: 'Quelle difference entre audit energetique et DPE ?',
      acceptedAnswer: {
        "@type": 'Answer',
        text: "Le DPE est une evaluation standardisee. L'audit est plus oriente plan d'action avec priorisation et scenarios de travaux.",
      },
    },
    {
      "@type": 'Question',
      name: 'Peut-on faire les travaux en plusieurs etapes ?',
      acceptedAnswer: {
        "@type": 'Answer',
        text: 'Oui. Un audit energetique sert a organiser des phases coherentes pour maximiser les gains.',
      },
    },
    {
      "@type": 'Question',
      name: "L'audit est-il obligatoire ?",
      acceptedAnswer: {
        "@type": 'Answer',
        text: 'Selon les dispositifs et le type de projet, il peut etre requis ou recommande. La necessite se verifie au cas par cas.',
      },
    },
    {
      "@type": 'Question',
      name: 'Est-ce utile si je sais deja que je veux isoler ?',
      acceptedAnswer: {
        "@type": 'Answer',
        text: 'Oui, car l\'audit aide a prioriser les postes, a coordonner isolation, menuiseries et ventilation, et a eviter les erreurs de sequence.',
      },
    },
  ],
}

export default function AuditEnergetiquePage() {
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
              <span className="text-gammart-green-dark font-medium">Etude Thermique</span>
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
                      src="/images/pictos/Audit-Energétique.svg"
                      alt="Audit energetique Bas-Rhin"
                      width={40}
                      height={40}
                      className="w-10 h-10 brightness-0 invert"
                    />
                  </div>
                  <span className="text-gammart-green-sage font-medium">Etude thermique maison</span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Audit energetique Bas-Rhin : l'etude thermique pour prioriser vos travaux et optimiser votre renovation
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="space-y-4 text-lg text-white/80 leading-relaxed mb-8">
                  <p>
                    Vous cherchez un <strong>audit energetique Bas-Rhin</strong> parce que vous ne savez pas par quoi commencer ou que vous visez une
                    renovation plus ambitieuse ? L'etude thermique transforme un projet flou en plan clair. Cela vaut pour une etude thermique maison
                    Strasbourg, un diagnostic renovation energetique Alsace ou un bilan energetique Bas-Rhin.
                  </p>
                  <p>
                    <strong>Promesse :</strong> un plan de travaux priorise, coherent, adapte a votre maison et a votre budget.
                  </p>
                  <p>
                    Un audit energetique ou une etude thermique analyse le logement, ses deperditions et ses points faibles, puis propose des scenarios de
                    travaux. Il aide a faire les bons choix : quels travaux ont le meilleur retour, quels lots doivent etre coordonnes, et comment eviter les
                    erreurs frequentes.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Button href="/contact" variant="secondary" size="lg" glow>
                    Demander mon audit energetique
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
                    src="/images/photos/thermal-camera-simulation.jpeg"
                    alt="Audit energetique"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl hidden md:block">
                  <div className="text-4xl font-bold text-gammart-green-dark">Plan clair</div>
                  <div className="text-gray-600 text-sm">Priorites et coherence</div>
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
              Qu'est-ce qu'un audit energetique Bas-Rhin (et a quoi sert une etude thermique) ?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Un <strong>audit energetique Bas-Rhin</strong> vise a comprendre comment votre maison consomme et ou elle perd de l'energie, puis a construire
                une feuille de route de renovation. On regarde l'isolation existante, les menuiseries, la ventilation, les systemes et les ponts thermiques.
              </p>
              <p>
                L'interet principal, c'est la priorisation. Sans etude, on risque de faire un poste qui fait envie mais qui n'apporte pas le gain attendu,
                ou de creer des problemes (isoler sans ventiler, changer les fenetres sans traiter les interfaces).
              </p>
              <p>
                Avec un audit, on cherche a identifier les travaux a fort impact, coordonner les lots, optimiser le budget et viser un objectif realiste
                (confort, factures, DPE, renovation d'ampleur).
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
                  <strong>Le saviez-vous ?</strong> Deux maisons qui se ressemblent peuvent avoir des priorites totalement differentes. Un{' '}
                  <strong>audit energetique Bas-Rhin</strong> evite les recettes universelles. <strong>Audit energetique Bas-Rhin</strong>.
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
                Pourquoi faire un audit energetique Bas-Rhin ?
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
              Si vous voulez une renovation efficace plutot qu'un empilement de travaux, l'<strong>audit energetique Bas-Rhin</strong> est l'etape la plus
              rentable. <strong>Audit energetique Bas-Rhin</strong>.
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
                Les avantages d'un audit energetique Bas-Rhin
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
                Comment se deroule un audit energetique Bas-Rhin ?
              </h2>
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

      {/* SECTION 6 - Livrables */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-4">
                Ce que vous obtenez avec un audit energetique Bas-Rhin
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {deliverables.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="bg-gray-50 rounded-2xl p-6 h-full border border-gray-100">
                  <h3 className="text-xl font-semibold text-gammart-green-dark mb-3">{item.title}</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      <strong>Caracteristiques :</strong> {item.characteristics}
                    </li>
                    <li>
                      <strong>Avantages :</strong> {item.advantages}
                    </li>
                    <li>
                      <strong>Usage recommande :</strong> {item.usage}
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 - Processus */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-4">
                Comment se deroule votre audit energetique Bas-Rhin avec Gammart Habitat ?
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
                  <p>visite 1h a 2h30 + analyse et restitution</p>
                </div>
                <div>
                  <strong>Perturbation :</strong>
                  <p>faible (diagnostic non destructif)</p>
                </div>
                <div>
                  <strong>Saison ideale :</strong>
                  <p>toute l'annee</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={600}>
            <div className="text-center mt-8">
              <Button href="/contact" variant="primary" size="lg">
                Faire le bilan de mon logement
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 8 - Tarifs */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-4">
                Quel budget pour un audit energetique Bas-Rhin ?
              </h2>
              <p className="text-lg text-gray-600">
                Le cout depend du niveau de detail souhaite, de la surface, et du type de livrable.
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
                <li>Surface et complexite (etages, extensions, combles)</li>
                <li>Niveau de livrable attendu (scenarios, restitution detaillee)</li>
                <li>Deplacements et accessibilite (combles, sous-sol)</li>
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <p className="text-center text-sm text-gray-600 mt-4">Mention importante : prix indicatifs. Devis personnalise gratuit.</p>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <div className="text-center mt-8">
              <Button href="/contact" variant="primary" size="lg">
                Demander mon audit energetique
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
                Aides et financement : pourquoi l'audit energetique Bas-Rhin est utile
              </h2>
              <p className="text-lg text-gray-600">
                Selon le type de projet, un audit peut etre demande ou recommande dans certains parcours. Il sert aussi a structurer un projet coherent.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'MaPrimeRenov\' (selon parcours)',
              'CEE',
              'Eco-PTZ',
              'TVA 5,5%',
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
              Message cle : on vous aide a clarifier ce qui est pertinent pour votre cas, sans usine a gaz.
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
                Des audits energetiques Bas-Rhin qui deviennent des renovations reussies
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                Voir toutes nos realisations
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
                Questions frequentes sur l'audit energetique Bas-Rhin
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
                Pourquoi choisir Gammart Habitat pour votre audit energetique Bas-Rhin ?
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Approche terrain - diagnostic concret, base sur votre maison et vos contraintes.',
              'Vision globale - isolation, menuiseries, VMC, facade : on pense systeme complet.',
              'Plan actionnable - priorites claires, phases possibles, interfaces identifiees.',
              'Accompagnement - possibilite d\'aller jusqu\'aux travaux avec un interlocuteur unique.',
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
              Notre objectif : un audit energetique Bas-Rhin qui debouche sur des decisions simples et des resultats reels. Audit energetique Bas-Rhin.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: "Installation VMC Bas-Rhin | Ventilation maison, qualite d'air & humidite - Gammart Habitat",
  description:
    'Votre installation VMC Bas-Rhin avec Gammart Habitat : VMC simple flux, hygro A/B, double flux, remplacement, diagnostic humidite, prix indicatifs et aides selon conditions. Devis gratuit, garantie decennale.',
}

const reassuranceBadges = ['Devis gratuit', 'Garantie decennale', 'Installation soignee']

const problems = [
  {
    title: 'Condensation sur fenetres',
    description: "La VMC evacue l'humidite avant qu'elle ne se depose. Installation VMC Bas-Rhin.",
  },
  {
    title: 'Moisissures / taches noires',
    description: "En controlant l'humidite, on limite les conditions favorables aux moisissures.",
  },
  {
    title: 'Odeurs persistantes',
    description: 'Extraction cuisine/SDB/WC = odeurs evacuees plus efficacement.',
  },
  {
    title: 'Air interieur "lourd"',
    description: "Renouvellement d'air plus regulier, meilleure sensation au quotidien.",
  },
  {
    title: 'Maison isolee mais "qui respire mal"',
    description: 'Apres isolation/menuiseries, la ventilation devient indispensable.',
  },
  {
    title: 'Degradation des materiaux',
    description: "Une meilleure gestion de l'humidite protege peintures, enduits, bois et structure.",
  },
]

const benefits = [
  {
    title: "Qualite de l'air amelioree",
    description: "L'air vicie est evacue, le renouvellement est plus regulier et plus sain.",
  },
  {
    title: 'Humidite maitrisee',
    description: "Moins de bulee, moins d'angles humides, ambiance plus stable.",
  },
  {
    title: 'Protection du bati',
    description: "Moins d'humidite = moins de risques de degradations et de moisissures.",
  },
  {
    title: 'Confort global renforce',
    description: 'Odeurs qui stagnent moins, air plus leger, sensation de proprete.',
  },
  {
    title: 'Coherence renovation energetique',
    description: 'Dans une maison plus etanche, la VMC devient un complement essentiel.',
  },
  {
    title: 'Performance possible (double flux)',
    description: "Selon la configuration, une double flux limite les pertes liees au renouvellement d'air.",
  },
]

const techniques = [
  {
    title: 'VMC simple flux',
    description: "Extraction mecanique de l'air dans les pieces humides, entrees d'air en pieces de vie.",
    ideal: 'Solution simple, fiable et efficace.',
  },
  {
    title: 'VMC hygro A',
    description: "Bouches d'extraction hygroreglables, entrees d'air classiques.",
    ideal: "Gestion de l'humidite avec un debit adapte.",
  },
  {
    title: 'VMC hygro B',
    description: "Bouches d'extraction + entrees d'air hygroreglables.",
    ideal: 'Renovation energetique, meilleur compromis confort/debits.',
  },
  {
    title: 'VMC double flux',
    description: 'Extraction + insufflation mecaniques avec echangeur de chaleur.',
    ideal: 'Projets performants, maisons plus etanches, confort renforce.',
  },
]

const materials = [
  {
    title: 'Groupe VMC (caisson)',
    characteristics: 'Coeur du systeme, choix selon type (simple flux/hygro/double flux).',
    advantages: 'Fiabilite, performances, niveau sonore selon gamme.',
    usage: 'Dimensionnement selon logement et reseau.',
  },
  {
    title: "Bouches d'extraction",
    characteristics: 'Cuisine, SDB, WC (classiques ou hygroreglables).',
    advantages: 'Debits adaptes, meilleure regulation humidite en hygro.',
    usage: 'Pieces humides, dimensionnees au cas par cas.',
  },
  {
    title: 'Reseau de gaines',
    characteristics: 'Gaines isolees ou adaptees selon implantation.',
    advantages: 'Pertes limitees, bruit reduit si reseau bien concu.',
    usage: 'Combles, faux plafonds, locaux techniques.',
  },
  {
    title: "Entrees d'air",
    characteristics: 'Integrees en haut des menuiseries ou via grilles adaptees.',
    advantages: "Apport d'air neuf organise, equilibre du systeme.",
    usage: 'Pieces de vie.',
  },
  {
    title: 'Accessoires (silencieux, isolation, supports)',
    characteristics: 'Elements qui ameliorent le confort acoustique et la durabilite.',
    advantages: 'Moins de bruit, meilleure tenue, finitions propres.',
    usage: 'Installation soignee, logements sensibles au bruit.',
  },
]

const processSteps = [
  {
    title: 'Premier contact',
    description: 'Symptomes (condensation, odeurs, humidite), type de logement, commune.',
  },
  {
    title: 'Visite technique',
    description: 'Analyse des pieces humides, etat existant, passages possibles des gaines.',
  },
  {
    title: 'Etude & devis',
    description: 'Choix de solution, implantation, niveau sonore, planning.',
  },
  {
    title: 'Preparation chantier',
    description: 'Protections, acces combles/faux plafond, organisation des percages.',
  },
  {
    title: 'Installation',
    description: "Pose caisson, reseau, bouches, entrees d'air, reglages.",
  },
  {
    title: 'Controle qualite',
    description: 'Verification fonctionnement, debits, bruit, finitions.',
  },
  {
    title: 'Reception & conseils',
    description: 'Usage, entretien, documents et garanties.',
  },
]

const pricing = [
  { prestation: 'VMC simple flux', fourchette: '900 a 2 000 EUR' },
  { prestation: 'VMC hygro A/B', fourchette: '1 200 a 3 000 EUR' },
  { prestation: 'VMC double flux', fourchette: '4 500 a 9 000 EUR' },
]

const projects = [
  { location: 'Bas-Rhin (ex.)', description: 'VMC hygro B + amelioration humidite', action: 'Voir le projet' },
  { location: 'Strasbourg (ex.)', description: 'Remplacement VMC + reseau optimise', action: 'Voir le projet' },
  { location: 'Eurometropole (ex.)', description: 'VMC double flux (selon config)', action: 'Voir le projet' },
  { location: 'Bas-Rhin (ex.)', description: 'VMC + menuiseries/isolation (approche globale)', action: 'Voir le projet' },
]

const faqs = [
  {
    question: 'Pourquoi installer une VMC apres avoir isole ?',
    answer:
      "Apres isolation et menuiseries performantes, la maison devient plus etanche. La VMC renouvelle l'air et evacue l'humidite, reduisant les risques de condensation et de moisissures.",
  },
  {
    question: 'VMC simple flux, hygro B ou double flux : que choisir ?',
    answer:
      "Le choix depend de votre logement, de l'etancheite, des passages possibles pour le reseau et de vos objectifs (confort, budget, performance).",
  },
  {
    question: 'Une VMC peut-elle resoudre la condensation ?',
    answer:
      "Souvent oui si la cause est un renouvellement d'air insuffisant. Il faut aussi verifier les habitudes et les entrees d'air.",
  },
  {
    question: 'Combien de temps durent les travaux ?',
    answer: 'En general 1 a 3 jours pour simple flux/hygro, plus pour une double flux selon reseau.',
  },
  {
    question: 'Est-ce bruyant ?',
    answer:
      'Une VMC bien dimensionnee et bien posee peut etre tres discrete. Le bruit depend du caisson, du reseau et des reglages.',
  },
  {
    question: 'Quel entretien prevoir ?',
    answer:
      "Nettoyage regulier des bouches, verification des entrees d'air, entretien du systeme. Pour une double flux, nettoyage des filtres.",
  },
]

const faqSchema = {
  "@context": 'https://schema.org',
  "@type": 'FAQPage',
  mainEntity: [
    {
      "@type": 'Question',
      name: 'VMC simple flux, hygro B ou double flux : que choisir ?',
      acceptedAnswer: {
        "@type": 'Answer',
        text: "Le choix depend de la configuration du logement, de son etancheite, des passages possibles pour les gaines et de vos objectifs. Une visite technique permet de dimensionner la solution la plus adaptee.",
      },
    },
    {
      "@type": 'Question',
      name: 'Pourquoi installer une VMC apres avoir isole ?',
      acceptedAnswer: {
        "@type": 'Answer',
        text: "Apres isolation et menuiseries performantes, la maison devient plus etanche. La VMC renouvelle l'air et evacue l'humidite, reduisant les risques de condensation et de moisissures.",
      },
    },
    {
      "@type": 'Question',
      name: 'Est-ce bruyant ?',
      acceptedAnswer: {
        "@type": 'Answer',
        text: 'Une VMC correctement dimensionnee et installee peut etre discrete. Le bruit depend du caisson, du reseau, des reglages et de la qualite de pose.',
      },
    },
    {
      "@type": 'Question',
      name: 'Quel entretien prevoir ?',
      acceptedAnswer: {
        "@type": 'Answer',
        text: "Nettoyage regulier des bouches, verification des entrees d'air, et entretien du systeme. Pour une double flux, l'entretien des filtres est indispensable.",
      },
    },
  ],
}

export default function VentilationPage() {
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
              <span className="text-gammart-green-dark font-medium">Ventilation (VMC)</span>
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
                      src="/images/pictos/VMC.svg"
                      alt="Installation VMC Bas-Rhin"
                      width={40}
                      height={40}
                      className="w-10 h-10 brightness-0 invert"
                    />
                  </div>
                  <span className="text-gammart-green-sage font-medium">Ventilation maison</span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Installation VMC Bas-Rhin : une ventilation efficace pour un air sain et une maison protegee
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="space-y-4 text-lg text-white/80 leading-relaxed mb-8">
                  <p>
                    Vous cherchez une <strong>installation VMC Bas-Rhin</strong> parce que vous avez de la condensation sur les fenetres, des odeurs
                    persistantes, des pieces humides, ou parce que vous avez isole et voulez eviter les problemes d'humidite ? Que ce soit pour une
                    ventilation maison Strasbourg, une VMC hygro B Bas-Rhin ou une VMC double flux Alsace, la ventilation est souvent le poste "invisible"
                    qui change tout.
                  </p>
                  <p>
                    <strong>Promesse :</strong> un air plus sain, une humidite mieux maitrisee et une maison plus durable.
                  </p>
                  <p>
                    La VMC renouvelle l'air interieur en evacuant l'humidite et les polluants. Une <strong>installation VMC Bas-Rhin</strong> bien dimensionnee
                    et correctement posee limite la condensation, reduit les risques de moisissures, et ameliore le confort au quotidien.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Button href="/contact" variant="secondary" size="lg" glow>
                    Demander un devis VMC
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
                    src="/images/photos/air-source-heat-pump.jpeg"
                    alt="Installation VMC"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl hidden md:block">
                  <div className="text-4xl font-bold text-gammart-green-dark">Air sain</div>
                  <div className="text-gray-600 text-sm">Humidite et confort maitrises</div>
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
              Qu'est-ce qu'une installation VMC Bas-Rhin et a quoi ca sert ?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Une VMC organise le renouvellement d'air : l'air neuf entre dans les pieces de vie et l'air vicie est extrait dans les pieces humides.
                L'objectif : evacuer l'humidite et les polluants, eviter l'air "lourd", et proteger la maison.
              </p>
              <p>
                Sans ventilation efficace, l'humidite produite au quotidien s'accumule : douche, cuisson, sechage du linge, respiration... Resultat :
                condensation, odeurs persistantes, taches noires dans les angles, degradation des peintures, voire moisissures.
              </p>
              <p>
                La ventilation est aussi une question de coherence : une isolation performante et des menuiseries recentes rendent l'enveloppe plus etanche.
                C'est une bonne chose pour les pertes thermiques, mais cela exige une ventilation maitrisee.
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
                  <strong>Le saviez-vous ?</strong> Beaucoup de problemes d'humidite viennent d'un renouvellement d'air insuffisant. Une{' '}
                  <strong>installation VMC Bas-Rhin</strong> bien concue vise a traiter la cause, pas seulement les symptomes. <strong>Installation VMC Bas-Rhin</strong>.
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
                Pourquoi opter pour une installation VMC Bas-Rhin ?
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
              Si vous isolez ou changez vos fenetres, une <strong>installation VMC Bas-Rhin</strong> adaptee evite l'effet boite hermetique.{' '}
              <strong>Installation VMC Bas-Rhin</strong>.
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
                Les avantages d'une installation VMC Bas-Rhin
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
                Nos solutions : comment choisir votre VMC ?
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
          <ScrollReveal delay={400}>
            <p className="text-center text-gray-600 mt-10">
              Important : le choix depend de la configuration, de l'etancheite du logement, des volumes et des contraintes de passage des gaines.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 6 - Materiaux & Produits utilises */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-4">
                Les elements d'une installation VMC Bas-Rhin (ce qui fait la difference)
              </h2>
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
                Comment se deroulent vos travaux d'installation VMC Bas-Rhin ?
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
                  <p>1 a 3 jours (simple flux/hygro) ; 2 a 5 jours (double flux)</p>
                </div>
                <div>
                  <strong>Perturbation :</strong>
                  <p>faible a moyenne (passage gaines, acces combles)</p>
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
                Faire diagnostiquer ma ventilation
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
                Quel budget pour une installation VMC Bas-Rhin ?
              </h2>
              <p className="text-lg text-gray-600">
                Le prix depend du type de VMC, de la taille du logement, du reseau et de l'accessibilite.
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
                <li>Nombre de pieces humides et bouches</li>
                <li>Longueur/complexite du reseau</li>
                <li>Accessibilite et reprises (percages, coffrages)</li>
                <li>Niveau acoustique attendu</li>
                <li>Remplacement d'un existant vs creation complete</li>
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
                Aides financieres pour l'installation VMC Bas-Rhin
              </h2>
              <p className="text-lg text-gray-600">
                Selon votre situation, l'installation VMC peut etre eligible a certains dispositifs.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "MaPrimeRenov' (selon conditions)",
              'CEE (selon conditions)',
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
              Message cle : on vous aide a clarifier l'eligibilite et a structurer un projet coherent.
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
                Nos realisations en installation VMC Bas-Rhin
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
                Toutes nos realisations VMC
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
                Questions frequentes sur l'installation VMC Bas-Rhin
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
                Pourquoi choisir Gammart Habitat pour votre installation VMC Bas-Rhin ?
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Diagnostic utile - on identifie les causes (humidite, condensation) et on dimensionne la solution.',
              "Pose soignee - reseau, reglages, finitions : une VMC efficace se joue sur l'installation.",
              'Vision renovation globale - coordination avec isolation, menuiseries et facade pour une performance coherente.',
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
              Notre objectif : une installation VMC Bas-Rhin efficace, discrete et durable, qui protege votre maison autant qu'elle ameliore votre confort.
              Installation VMC Bas-Rhin.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

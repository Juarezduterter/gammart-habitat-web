import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Isolation des combles Bas-Rhin | Combles perdus & rampants (devis gratuit) — Gammart Habitat',
  description:
    'Faites votre isolation des combles Bas-Rhin avec Gammart Habitat : combles perdus (soufflage) ou rampants, matériaux adaptés, aides, délais, prix indicatifs. Devis gratuit, RGE, garantie décennale.',
}

const problems = [
  {
    title: 'Chaleur qui s’échappe par la toiture',
    description:
      'L’isolant limite les déperditions vers le haut et réduit l’effet “chauffage qui tourne”. Isolation des combles Bas-Rhin.',
  },
  { title: 'Inconfort dans les chambres sous toit', description: 'Moins de parois brûlantes l’été et de sensation de froid l’hiver.' },
  { title: 'Factures énergétiques élevées', description: 'En diminuant les pertes, on réduit les besoins de chauffage à confort équivalent.' },
  { title: 'Surchauffe estivale', description: 'Le bon matériau et la bonne pose améliorent la stabilité thermique lors des fortes chaleurs.' },
  { title: 'DPE à améliorer', description: 'Traiter la toiture aide souvent à améliorer la performance globale du logement.' },
  {
    title: 'Courants d’air / sensations de déperdition',
    description: 'Une isolation homogène et des finitions soignées renforcent la sensation de confort.',
  },
]

const advantages = [
  {
    title: 'Performance thermique immédiate',
    description:
      'Le gain est souvent rapide car la toiture est un poste critique. Une isolation des combles Bas-Rhin limite les pertes et améliore l’efficacité du chauffage.',
  },
  {
    title: 'Économies d’énergie et retour sur investissement',
    description:
      'Moins de déperditions = moins de consommation pour le même confort. Le gain dépend de l’état initial, de la surface et de la cohérence avec les autres travaux.',
  },
  {
    title: 'Confort été/hiver',
    description:
      'En hiver, la maison se refroidit moins vite. En été, les pièces sous toiture deviennent plus vivables. Une isolation des combles Bas-Rhin vise cette stabilité.',
  },
  {
    title: 'Confort acoustique (selon matériaux)',
    description: 'Certains isolants améliorent les bruits extérieurs, surtout sur rampants, selon la technique et le matériau.',
  },
  { title: 'Valorisation du bien', description: 'Une maison plus confortable et plus sobre est un argument fort pour la revente ou la location.' },
  {
    title: 'Durabilité et tranquillité',
    description: 'Une pose homogène, une épaisseur adaptée et des finitions propres assurent une solution durable, encadrée par les garanties.',
  },
]

const techniques = [
  {
    title: 'Soufflage (combles perdus)',
    description: 'Isolant en vrac soufflé de manière uniforme sur le plancher des combles pour une couverture homogène.',
    ideal: 'Combles perdus, accès possible, recherche d’un excellent rapport efficacité/rapidité.',
  },
  {
    title: 'Déroulé / rouleaux (combles perdus)',
    description: 'Pose de rouleaux d’isolant, souvent en deux couches croisées pour limiter les ponts thermiques.',
    ideal: 'Combles perdus accessibles où la mise en œuvre en rouleaux est pertinente.',
  },
  {
    title: 'Panneaux / sous-rampants (combles aménageables)',
    description: 'Isolation au niveau des rampants de toiture, souvent avec une ossature et une finition intérieure.',
    ideal: 'Chambres sous combles, rénovation de l’étage ou projet d’aménagement complet.',
  },
]

const materials = [
  {
    title: 'Ouate de cellulose (soufflage)',
    characteristics: 'Isolant en vrac soufflé pour une couverture homogène et rapide.',
    advantages: 'Remplit les recoins, idéal pour un gain rapide en combles perdus.',
    usage: 'Combles perdus avec priorité “gain rapide”.',
  },
  {
    title: 'Laine de verre',
    characteristics: 'Rouleaux ou panneaux, solution très répandue et polyvalente.',
    advantages: 'Économique, adaptée aux combles perdus et aux rampants selon configuration.',
    usage: 'Combles perdus (rouleaux) et rampants (panneaux).',
  },
  {
    title: 'Laine de roche',
    characteristics: 'Performances acoustiques intéressantes, bonne tenue globale.',
    advantages: 'Bon confort acoustique sur certains rampants.',
    usage: 'Zones où l’acoustique compte et où le projet le justifie.',
  },
  {
    title: 'Fibre de bois',
    characteristics: 'Isolant biosourcé avec un bon confort d’été selon les projets.',
    advantages: 'Approche orientée confort estival et matériaux biosourcés.',
    usage: 'Rampants ou projets visant la stabilité en période chaude.',
  },
]

const processSteps = [
  { title: 'Premier contact', description: 'Vous décrivez votre maison (Bas-Rhin, Strasbourg, alentours), vos combles et vos symptômes.' },
  { title: 'Visite technique', description: 'Vérification accès, état des combles, mesures et repérage des zones sensibles.' },
  { title: 'Étude & devis', description: 'Méthode (soufflage/rouleaux/rampants), matériaux, épaisseurs, planning et options.' },
  { title: 'Préparation chantier', description: 'Protection des accès, organisation et sécurisation des zones.' },
  { title: 'Réalisation', description: 'Pose homogène, traitement des détails, contrôle d’épaisseur/continuité.' },
  { title: 'Contrôle qualité', description: 'Vérification des finitions, trappes, zones sensibles et nettoyage.' },
  { title: 'Réception & garanties', description: 'Documents, conseils, garanties et suivi.' },
]

const pricing = [
  { prestation: 'Isolation combles perdus (soufflage)', fourchette: '20 à 60 €/m²' },
  { prestation: 'Isolation combles perdus (rouleaux, 2 couches)', fourchette: '30 à 80 €/m²' },
  { prestation: 'Isolation rampants (selon technique + finitions)', fourchette: '45 à 120 €/m²' },
]

const financings = [
  'MaPrimeRénov’ — montants selon revenus et conditions',
  'CEE (prime énergie) — prime variable selon dossier',
  'Éco-PTZ — possibilité de financement',
  'TVA réduite (5,5%) — selon éligibilité',
  'Aides locales — Grand Est / collectivités (à vérifier selon commune)',
]

const projects = [
  { location: 'Bas-Rhin (ex.)', description: 'Combles perdus : soufflage + gain de confort', action: 'Voir le projet' },
  { location: 'Strasbourg (ex.)', description: 'Rampants : isolation sous toiture + finitions intérieures', action: 'Voir le projet' },
  { location: 'Eurométropole (ex.)', description: 'Combles : reprise + isolation homogène', action: 'Voir le projet' },
]

const faqs = [
  {
    question: 'Quelle isolation privilégier en premier : combles ou murs ?',
    answer:
      'Très souvent, on commence par le haut (combles) car le gain peut être rapide et le chantier est généralement plus simple. Ensuite, on traite les murs (ITE/ITI) selon les contraintes.',
  },
  {
    question: 'Combien coûte une isolation des combles Bas-Rhin ?',
    answer:
      'En combles perdus, le soufflage est souvent plus économique. Les rampants peuvent coûter plus cher car ils impliquent davantage de mise en œuvre et de finitions. Un devis après visite reste la référence.',
  },
  {
    question: 'Combien de temps durent les travaux ?',
    answer: 'Combles perdus : souvent 1 à 3 jours. Rampants : plutôt 3 à 7 jours selon surface et finitions.',
  },
  {
    question: 'Puis-je rester chez moi pendant les travaux ?',
    answer:
      'Généralement oui, surtout en combles perdus. Pour les rampants, certaines pièces peuvent être neutralisées temporairement.',
  },
  {
    question: 'Quelle épaisseur d’isolant choisir ?',
    answer:
      'Elle dépend du matériau, de la technique, de la place disponible et de l’objectif de performance. Le diagnostic permet de dimensionner correctement.',
  },
  {
    question: 'Combles perdus ou rampants : comment choisir la bonne méthode ?',
    answer:
      'Si vos combles ne sont pas aménagés, on isole souvent le plancher (perdus). Si vous avez des pièces sous toiture ou un projet d’aménagement, on isole les rampants.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

const reassuranceBadges = ['RGE', 'Garantie décennale', 'Devis gratuit']

export default function ComblesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Fil d’Ariane */}
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
              <span className="text-gray-500">Isolation du logement</span>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <span className="text-gammart-green-dark font-medium">Isolation des Combles</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* SECTION 1 — Hero Service */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-gammart-green-dark via-gammart-green-leaf to-gammart-green-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
                      src="/images/pictos/Isolation-Combles-Perdus.svg"
                      alt="Isolation des combles Bas-Rhin"
                      width={40}
                      height={40}
                      className="w-10 h-10 brightness-0 invert"
                    />
                  </div>
                  <span className="text-gammart-green-sage font-medium">Combles perdus & rampants</span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Isolation des combles Bas-Rhin : la priorité n°1 pour gagner en confort et réduire vos pertes de chaleur
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="space-y-4 text-lg text-white/80 leading-relaxed mb-8">
                  <p>
                    Vous cherchez une <strong>isolation des combles Bas-Rhin</strong> parce que votre maison est difficile à chauffer, que l’étage sous
                    toiture devient étouffant l’été, ou que vous suspectez de grosses déperditions par le haut ? Bonne intuition : les combles sont
                    souvent le premier poste à traiter pour obtenir un gain rapide, visible et durable.
                  </p>
                  <p>
                    L’isolation des combles consiste à isoler la partie haute du logement, soit au niveau du plancher des combles (combles perdus), soit
                    au niveau des rampants de toiture (combles aménageables). Une <strong>isolation des combles Bas-Rhin</strong> bien réalisée permet de
                    stabiliser la température intérieure, de réduire la sensation de “maison qui se refroidit vite”, et d’améliorer le confort été/hiver.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Button href="/contact" variant="secondary" size="lg" glow>
                    Demander un devis Combles
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
                    src="/images/photos/spray-foam-wall.jpeg"
                    alt="Isolation des combles Bas-Rhin"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl hidden md:block">
                  <div className="text-4xl font-bold text-gammart-green-dark">+ Confort</div>
                  <div className="text-gray-600 text-sm">Chantier rapide, résultats visibles</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Définition & Principes */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-8 text-center">Qu’est-ce que l’isolation des combles Bas-Rhin ?</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                L’<strong>isolation des combles Bas-Rhin</strong> vise à limiter les échanges thermiques entre votre intérieur chauffé et l’extérieur, en
                traitant la zone la plus “fuyante” d’une maison : le haut. En hiver, l’air chaud a naturellement tendance à monter, et sans isolation
                performante, il s’échappe rapidement par la toiture. En été, à l’inverse, la toiture peut accumuler de la chaleur et la restituer dans
                les pièces, créant une surchauffe désagréable, surtout dans les chambres sous combles.
              </p>
              <p>On distingue généralement deux configurations :</p>
              <ul>
                <li>
                  <strong>Combles perdus</strong> : non aménagés, difficilement habitables. On isole le plancher des combles pour protéger la maison en
                  dessous.
                </li>
                <li>
                  <strong>Combles aménageables</strong> : pièces sous toiture ou projet d’aménagement. On isole les rampants (sous la toiture) pour
                  protéger directement le volume habitable.
                </li>
              </ul>
              <p>
                L’idée est simple : créer une barrière continue et bien posée, avec une épaisseur adaptée, en soignant les détails (trappes, jonctions,
                passages techniques). Une <strong>isolation des combles Bas-Rhin</strong> réussie, ce n’est pas seulement “mettre de l’isolant”, c’est
                assurer une pose homogène et durable.
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
                  <strong>Le saviez-vous ?</strong> La toiture peut représenter une part très importante des pertes de chaleur d’une maison. C’est
                  pourquoi une isolation des combles Bas-Rhin est souvent le meilleur point de départ pour une rénovation énergétique.
                </span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 3 — Problèmes résolus */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-4">Pourquoi faire une isolation des combles Bas-Rhin ?</h2>
              <p className="text-lg text-gray-600">Les bonnes raisons d’agir rapidement sur la toiture.</p>
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
              Envie d’un résultat rapide et d’un chantier souvent court ? L’<strong>isolation des combles Bas-Rhin</strong> est un excellent premier pas.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 4 — Bénéfices */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-4">Les avantages de l’isolation des combles Bas-Rhin</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <ScrollReveal key={advantage.title} delay={index * 100}>
                <div className="bg-gray-50 rounded-2xl p-6 h-full border border-gray-100">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gammart-green-dark text-white flex items-center justify-center font-semibold">{index + 1}</div>
                    <h3 className="text-xl font-semibold text-gammart-green-dark">{advantage.title}</h3>
                  </div>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — Techniques & Méthodes */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-4">Comment se déroule une isolation des combles Bas-Rhin ?</h2>
              <p className="text-lg text-gray-600">Selon votre configuration, on adapte la méthode pour assurer une couche homogène et performante.</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {techniques.map((technique, index) => (
              <ScrollReveal key={technique.title} delay={index * 100}>
                <div className="bg-white rounded-2xl p-6 h-full shadow-sm hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold text-gammart-green-dark mb-2">{technique.title}</h3>
                  <p className="text-gray-600 mb-3">{technique.description}</p>
                  <p className="text-sm font-medium text-gammart-green-dark">Idéal pour : {technique.ideal}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={400}>
            <p className="text-center text-gray-600 mt-10">
              Pages enfants (N3) si prévues : Isolation des combles perdus · Isolation des rampants.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 6 — Matériaux */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-4">Les matériaux pour une isolation des combles Bas-Rhin</h2>
              <p className="text-lg text-gray-600">Le bon matériau + la bonne mise en œuvre = performance et durabilité.</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {materials.map((material, index) => (
              <ScrollReveal key={material.title} delay={index * 100}>
                <div className="bg-gray-50 rounded-2xl p-6 h-full border border-gray-100">
                  <h3 className="text-xl font-semibold text-gammart-green-dark mb-3">{material.title}</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      <strong>Caractéristiques :</strong> {material.characteristics}
                    </li>
                    <li>
                      <strong>Avantages :</strong> {material.advantages}
                    </li>
                    <li>
                      <strong>Usage recommandé :</strong> {material.usage}
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — Processus de réalisation */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-4">Comment se déroulent vos travaux ?</h2>
              <p className="text-lg text-gray-600">Isolation des combles Bas-Rhin en 7 étapes clés.</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.title} delay={index * 80}>
                <div className="bg-white rounded-2xl p-6 h-full shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-gammart-green-dark text-white flex items-center justify-center font-semibold mb-4">{index + 1}</div>
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
                  <strong>Durée moyenne :</strong>
                  <p>1 à 3 jours (combles perdus) ; 3 à 7 jours (rampants)</p>
                </div>
                <div>
                  <strong>Perturbation :</strong>
                  <p>Faible à moyenne selon accès et finitions intérieures.</p>
                </div>
                <div>
                  <strong>Saison idéale :</strong>
                  <p>Toute l’année, avec planification selon vos contraintes.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 8 — Tarifs */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-4">Quel budget pour une isolation des combles Bas-Rhin ?</h2>
              <p className="text-lg text-gray-600">
                Les tarifs varient selon la configuration (combles perdus vs rampants), le matériau et l’accessibilité. Prix indicatifs, devis personnalisé après visite.
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
            <p className="text-center text-sm text-gray-600 mt-4">Mention importante : prix indicatifs. Devis personnalisé gratuit après visite.</p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="text-center mt-8">
              <Button href="/contact" variant="primary" size="lg">
                Demander un devis Combles
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 9 — Aides & Financements */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-4">Aides financières pour une isolation des combles Bas-Rhin</h2>
              <p className="text-lg text-gray-600">Nous vous accompagnons dans vos démarches et la constitution des dossiers.</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {financings.map((item, index) => (
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
            <div className="text-center mt-8">
              <Button href="/aides-financements" variant="secondary" size="lg">
                Simuler mes aides
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 10 — Réalisations */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-4">Nos réalisations en isolation des combles Bas-Rhin</h2>
              <p className="text-lg text-gray-600">Exemples de chantiers : combles perdus, rampants, reprises complètes.</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ScrollReveal key={project.location} delay={index * 100}>
                <div className="rounded-2xl p-6 bg-gray-50 border border-gray-100 h-full">
                  <p className="text-sm text-gammart-green-dark font-semibold mb-2">{project.location}</p>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <Link href="/realisations" className="text-gammart-green-dark font-medium hover:text-gammart-green-leaf transition-colors inline-flex items-center gap-2">
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
                Toutes nos réalisations Combles
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 11 — FAQ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-4">Questions fréquentes sur l’isolation des combles Bas-Rhin</h2>
            </div>
          </ScrollReveal>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal key={faq.question} delay={index * 80}>
                <details className="group bg-white rounded-2xl overflow-hidden border border-gray-100">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-semibold text-gammart-green-dark pr-4">{faq.question}</h3>
                    <svg className="w-6 h-6 text-gammart-green-dark flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* SECTION 12 — Bloc expertise */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-4">Pourquoi choisir Gammart Habitat ?</h2>
              <p className="text-lg text-gray-600">Isolation des combles Bas-Rhin avec expertise locale et garanties.</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Expertise locale — connaissance des maisons et rénovations courantes en Bas-Rhin, de Strasbourg aux communes alentours.',
              'Conseil sur-mesure — choix de la bonne méthode (perdus/rampants) et du bon matériau selon vos priorités.',
              'Accompagnement — devis clair, planification, aide à la compréhension des options et des aides possibles.',
              'Garanties — cadre professionnel, garanties et suivi.',
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
              Notre objectif : une isolation des combles Bas-Rhin propre, homogène et durable, qui se ressent dès les premières semaines.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={500}>
            <div className="text-center mt-8">
              <Button href="/contact" variant="primary" size="lg">
                Discuter de mon projet combles
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

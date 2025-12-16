import { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Card, CardHeader, CardBody } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Entreprise isolation Bas-Rhin | Gammart Habitat, spécialiste rénovation énergétique en Alsace',
  description: 'Découvrez Gammart Habitat, entreprise isolation Bas-Rhin basée à Geudertheim : mission, valeurs, équipe, certifications (RGE, garanties), zone d\'intervention en Alsace et réalisations.',
}

const values = [
  {
    title: 'Expertise',
    description: 'Nous privilégions la maîtrise technique et l\'adaptation au bâti alsacien : maison en brique, murs anciens, zones humides, contraintes de façade, confort d\'été.',
    icon: (
      <svg className="w-10 h-10 text-gammart-green-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Transparence',
    description: 'Devis détaillés, explications claires, recommandations honnêtes. Vous devez comprendre ce que l\'on fait, pourquoi on le fait, et ce que cela va changer chez vous.',
    icon: (
      <svg className="w-10 h-10 text-gammart-green-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'Proximité',
    description: 'Entreprise locale basée à Geudertheim : nous intervenons avec réactivité dans le Bas-Rhin et en Alsace. La proximité, c\'est aussi un suivi.',
    icon: (
      <svg className="w-10 h-10 text-gammart-green-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Engagement',
    description: 'La qualité se voit dans les détails : préparation, protections, finitions, propreté de chantier, réception, et disponibilité après travaux.',
    icon: (
      <svg className="w-10 h-10 text-gammart-green-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

const certifications = [
  {
    name: 'RGE',
    fullName: 'Reconnu Garant de l\'Environnement',
    description: 'Accès aux aides lorsque le RGE est requis, et cadre de qualification pour les travaux concernés.',
  },
  {
    name: 'Assurance décennale',
    fullName: 'Garantie 10 ans',
    description: 'Garantie 10 ans sur les travaux concernés pour votre sécurité et tranquillité.',
  },
  {
    name: 'RC Pro',
    fullName: 'Responsabilité Civile Professionnelle',
    description: 'Protection en cas de dommage durant les travaux.',
  },
]

export default function AProposPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="beige" paddingY="lg">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gammart-green-dark mb-6">
            Gammart Habitat, votre partenaire rénovation énergétique en Alsace
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Vous cherchez une <strong>entreprise isolation Bas-Rhin</strong> capable de vous accompagner sérieusement,
            du diagnostic à la réception, sans discours flou ? Gammart Habitat intervient en Alsace pour améliorer
            la performance énergétique des logements, renforcer le confort au quotidien et valoriser le patrimoine.
          </p>
          <p className="text-lg text-gray-700">
            Nous croyons à une rénovation simple à comprendre et bien exécutée : prioriser les bons travaux,
            expliquer les choix techniques, sécuriser les aides quand c'est possible, et livrer un résultat durable.
          </p>
        </div>
      </Section>

      {/* Mission */}
      <Section background="white" paddingY="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gammart-green-dark mb-6">
            Notre mission
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 italic mb-8">
              "Rendre la rénovation énergétique accessible, claire et sereine — avec un résultat concret."
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Notre mission est de transformer des logements énergivores en habitats plus confortables, plus sains
              et plus économes. Une rénovation réussie ne se résume pas à "mettre de l'isolant" : elle consiste à
              traiter les bonnes zones, au bon moment, avec les bons matériaux.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-gammart-green-dark rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="font-bold text-gammart-green-dark mb-2">Transformer</h3>
            <p className="text-gray-700 text-sm">Les logements en habitats confortables et économes</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gammart-green-dark rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-gammart-green-dark mb-2">Accompagner</h3>
            <p className="text-gray-700 text-sm">Les propriétaires dans leur transition énergétique</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gammart-green-dark rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-gammart-green-dark mb-2">Simplifier</h3>
            <p className="text-gray-700 text-sm">La rénovation (technique + administratif)</p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section background="beige" paddingY="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gammart-green-dark mb-4">
            Nos valeurs
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <Card key={value.title}>
              <CardHeader>
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gammart-green-dark mb-2">{value.title}</h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-700 text-sm">{value.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section background="white" paddingY="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gammart-green-dark mb-4">
              L'équipe Gammart Habitat
            </h2>
            <p className="text-lg text-gray-700">
              Derrière chaque chantier, il y a une équipe et une méthode. Nous mettons un visage sur l'entreprise,
              parce que la rénovation énergétique se joue aussi sur la confiance et la clarté des échanges.
            </p>
          </div>

          <div className="bg-gammart-beige rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gammart-green-dark mb-4">Alain Gevez</h3>
            <p className="text-lg text-gammart-gray mb-4">Fondateur / Dirigeant</p>
            <p className="text-gray-700 italic mb-6 text-lg">
              "Mon objectif : que vous sachiez exactement quoi faire et dans quel ordre, pour un résultat durable."
            </p>
          </div>
        </div>
      </Section>

      {/* Certifications */}
      <Section background="beige" paddingY="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gammart-green-dark mb-4">
            Nos certifications et garanties
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Les certifications et assurances sont des preuves concrètes : elles sécurisent votre projet et
            renforcent votre éligibilité aux dispositifs d'aides.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert) => (
            <Card key={cert.name}>
              <CardHeader>
                <div className="w-12 h-12 bg-gammart-green-dark rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gammart-green-dark mb-1">{cert.name}</h3>
                <p className="text-sm font-semibold text-gammart-gray">{cert.fullName}</p>
              </CardHeader>
              <CardBody>
                <p className="text-gray-700 text-sm">{cert.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Final */}
      <Section background="white" paddingY="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gammart-green-dark mb-6">
            Prêt à nous confier votre projet ?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Rencontrons-nous pour discuter de votre maison, de vos objectifs (confort, économies, DPE),
            et construire une solution claire avec un devis gratuit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Demander un rendez-vous
            </Button>
            <Button href="tel:0763982357" variant="secondary" size="lg">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              07 63 98 23 57
            </Button>
          </div>
          <p className="text-sm text-gray-600 mt-6">
            Devis gratuit • Sans engagement
          </p>
        </div>
      </Section>
    </>
  )
}

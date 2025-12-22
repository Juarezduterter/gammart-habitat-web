import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialité | Gammart Habitat',
  description: 'Politique de confidentialité du site Gammart Habitat.',
}

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 mb-3">Dernière mise à jour : 14/12/2025</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gammart-green-dark mb-4">
            Politique de confidentialité
          </h1>
          <p className="text-lg text-gray-600">
            La présente Politique de confidentialité explique comment Gammart Habitat collecte, utilise
            et protège vos données personnelles lorsque vous utilisez le site www.gammart-habitat.fr
            (ci-après le « Site »), conformément au Règlement (UE) 2016/679 (RGPD) et à la loi
            Informatique et Libertés.
          </p>
        </div>

        <div className="space-y-10 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-gammart-green-dark mb-4">1) Responsable du traitement</h2>
            <ul className="space-y-2">
              <li>Gammart Habitat</li>
              <li><span className="font-semibold">Adresse :</span> 1 rue des Hirondelles, 67170 Geudertheim, France</li>
              <li><span className="font-semibold">Email :</span> a.gevez@gammart-habitat.fr</li>
              <li><span className="font-semibold">Téléphone :</span> 07 63 98 23 57</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gammart-green-dark mb-4">2) Quelles données collectons-nous ?</h2>
            <p className="mb-4">
              Nous collectons uniquement les données nécessaires au traitement de vos demandes et au bon
              fonctionnement du Site.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gammart-green-dark mb-2">
                  a) Données que vous fournissez directement
                </h3>
                <p className="mb-3">
                  Lorsque vous remplissez un formulaire (contact, devis, simulation d’aides), nous pouvons
                  collecter :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Identité (nom, prénom)</li>
                  <li>Coordonnées (email, téléphone)</li>
                  <li>Informations de localisation (code postal, ville)</li>
                  <li>Informations liées à votre projet (type de travaux, surface, message libre)</li>
                  <li>Toute information que vous choisissez d’indiquer dans le champ « message »</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gammart-green-dark mb-2">
                  b) Données collectées automatiquement (navigation)
                </h3>
                <p className="mb-3">
                  Selon la configuration du Site et vos choix (cookies), nous pouvons collecter :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Adresse IP (souvent raccourcie/masquée selon l’outil)</li>
                  <li>Type d’appareil, navigateur, système d’exploitation</li>
                  <li>Pages consultées, durée de visite, source de trafic</li>
                  <li>Identifiants de cookies/traceurs (si activés)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gammart-green-dark mb-4">3) Pour quelles finalités utilisons-nous vos données ?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Répondre à vos demandes (devis, contact, informations)</li>
              <li>Assurer le suivi commercial et technique de votre projet</li>
              <li>Réaliser des statistiques de fréquentation et améliorer le Site (si mesure d’audience activée)</li>
              <li>Assurer la sécurité du Site (prévention de la fraude, logs techniques)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gammart-green-dark mb-4">4) Bases légales du traitement</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mesures précontractuelles : traitement de votre demande de devis ou de rendez-vous</li>
              <li>Intérêt légitime : gestion de la relation client/prospect, amélioration du Site, sécurité</li>
              <li>Consentement : pour certains cookies/traceurs non essentiels (mesure d’audience, marketing), si activés</li>
              <li>Obligations légales : comptabilité, obligations administratives, gestion des litiges (le cas échéant)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gammart-green-dark mb-4">5) Durées de conservation</h2>
            <p className="mb-4">Nous conservons vos données pendant une durée proportionnée à la finalité :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Demandes de contact/devis (prospects) : jusqu’à 3 ans à compter du dernier échange, sauf opposition de votre part</li>
              <li>Clients : durée de la relation contractuelle puis archivage selon les obligations légales (facturation, garanties, etc.)</li>
              <li>Données techniques (logs de sécurité) : durée limitée, généralement quelques mois, sauf nécessité de sécurité/incident</li>
              <li>Cookies/traceurs : selon leur nature et votre consentement (voir section Cookies)</li>
            </ul>
            <p className="mt-4">
              Les durées ci-dessus peuvent être adaptées si une obligation légale impose une conservation
              plus longue, ou en cas de litige.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gammart-green-dark mb-4">6) Qui a accès à vos données ? (destinataires)</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Aux personnes habilitées de Gammart Habitat</li>
              <li>Aux prestataires techniques strictement nécessaires (hébergement, maintenance, formulaire, email, mesure d’audience), agissant en tant que sous-traitants</li>
            </ul>
            <p className="mt-4">Nous ne vendons pas vos données.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gammart-green-dark mb-4">7) Transferts hors Union européenne</h2>
            <div className="space-y-4">
              <p>
                Selon les prestataires utilisés (hébergement, analytics, emailing), vos données peuvent être
                traitées en dehors de l’UE. Dans ce cas, nous veillons à ce que des garanties appropriées
                soient en place (ex. clauses contractuelles types de la Commission européenne, mesures
                supplémentaires).
              </p>
              <div>
                <p className="font-semibold mb-2">Prestataires potentiels (à adapter selon votre stack réelle) :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Hébergement : IONOS</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gammart-green-dark mb-4">8) Sécurité</h2>
            <p className="mb-4">Nous mettons en œuvre des mesures techniques et organisationnelles raisonnables pour protéger vos données :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contrôle d’accès (comptes limités aux personnes habilitées)</li>
              <li>Chiffrement en transit (HTTPS)</li>
              <li>Sauvegardes et mises à jour</li>
              <li>Mesures de journalisation et protection contre les accès non autorisés</li>
            </ul>
            <p className="mt-4">
              Malgré ces efforts, aucun système n’est infaillible : si vous suspectez un problème,
              contactez-nous rapidement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gammart-green-dark mb-4">9) Vos droits</h2>
            <p className="mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Droit d’accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit d’effacement (dans les limites légales)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit d’opposition (notamment à la prospection)</li>
              <li>Droit à la portabilité (dans certains cas)</li>
              <li>Droit de retirer votre consentement à tout moment (pour les traitements basés sur le consentement)</li>
            </ul>
            <div className="mt-4 space-y-2">
              <p className="font-semibold">Exercer vos droits</p>
              <p>Envoyez votre demande à : a.gevez@gammart-habitat.fr</p>
              <p>Nous pourrons vous demander un justificatif d’identité si nécessaire (uniquement pour sécuriser la demande).</p>
              <p className="font-semibold mt-4">Réclamation</p>
              <p>Si vous estimez que vos droits ne sont pas respectés, vous pouvez déposer une réclamation auprès de la CNIL : www.cnil.fr</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gammart-green-dark mb-4">10) Cookies et traceurs</h2>
            <p className="mb-4">Le Site peut utiliser des cookies/traceurs :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cookies techniques (nécessaires) : indispensables au fonctionnement (sécurité, formulaires, préférences)</li>
              <li>Cookies de mesure d’audience (optionnels) : statistiques pour améliorer le Site</li>
              <li>Cookies marketing (optionnels, si activés) : publicité/retargeting</li>
            </ul>
            <p className="mt-4">
              Lorsque la réglementation l’exige, votre consentement est demandé via un bandeau de gestion
              des cookies. Vous pouvez refuser les cookies non essentiels sans empêcher l’accès au Site
              (hors fonctionnalités dépendantes).
            </p>
            <div className="mt-4">
              <p className="font-semibold">Gestion des cookies :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Via le bandeau cookies (si installé)</li>
                <li>Via votre navigateur : vous pouvez supprimer ou bloquer les cookies (attention : cela peut altérer certaines fonctionnalités)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gammart-green-dark mb-4">11) Formulaires (devis, contact, simulation d’aides)</h2>
            <p className="mb-4">Quand vous remplissez un formulaire, les données sont utilisées uniquement pour :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Répondre à votre demande</li>
              <li>Préparer un devis ou une estimation</li>
              <li>Vous recontacter à propos de votre projet</li>
            </ul>
            <p className="mt-4">
              Les simulations d’aides/financement restent indicatives : elles dépendent des dispositifs
              et conditions applicables au moment de la demande.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gammart-green-dark mb-4">12) Communication et prospection</h2>
            <p>
              Nous pouvons vous contacter suite à une demande (devis/contact). Si nous envoyons de la
              prospection (newsletter, offres), vous aurez la possibilité de vous y opposer à tout moment
              via un lien de désinscription ou par email à a.gevez@gammart-habitat.fr.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gammart-green-dark mb-4">13) Données des mineurs</h2>
            <p>
              Le Site s’adresse à des personnes majeures. Si vous êtes mineur, merci de demander l’accord
              d’un représentant légal avant de nous transmettre des données.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gammart-green-dark mb-4">14) Modifications de la politique</h2>
            <p>
              Nous pouvons modifier cette Politique de confidentialité afin de refléter les évolutions
              légales, techniques ou organisationnelles. La date de mise à jour est indiquée en haut de
              page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gammart-green-dark mb-4">15) Contact</h2>
            <p>
              Pour toute question relative à la protection des données personnelles :
              a.gevez@gammart-habitat.fr — 07 63 98 23 57
              Gammart Habitat, 1 rue des Hirondelles, 67170 Geudertheim
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}

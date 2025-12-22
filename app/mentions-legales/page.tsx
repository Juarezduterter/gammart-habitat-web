import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales | Gammart Habitat',
  description: 'Mentions légales du site Gammart Habitat.',
}

export default function MentionsLegalesPage() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 mb-3">Dernière mise à jour : 14/12/2025</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gammart-green-dark mb-4">
            Mentions légales
          </h1>
          <p className="text-lg text-gray-600">
            Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004 pour la confiance dans
            l’économie numérique (LCEN), il est précisé aux utilisateurs du site [
            <a
              href="https://www.gammart-habitat.fr"
              className="text-gammart-green-dark hover:underline"
            >
              www.gammart-habitat.fr
            </a>
            ] l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
          </p>
        </div>

        <div className="space-y-10 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-gammart-green-dark mb-4">1) Éditeur du site</h2>
            <ul className="space-y-2">
              <li><span className="font-semibold">Raison sociale :</span> Gammart Habitat</li>
              <li><span className="font-semibold">Forme juridique :</span> EURL, entreprise unipersonnelle à responsabilité limitée</li>
              <li><span className="font-semibold">Capital social :</span> 1 000,00 €</li>
              <li><span className="font-semibold">Adresse du siège social :</span> 1 rue des Hirondelles, 67170 Geudertheim, France</li>
              <li><span className="font-semibold">Téléphone :</span> 07 63 98 23 57</li>
              <li><span className="font-semibold">Email :</span> a.gevez@gammart-habitat.fr</li>
              <li><span className="font-semibold">SIRET :</span> 928 114 792 00015</li>
              <li><span className="font-semibold">RCS / RM :</span> 928 114 792 R.C.S. Strasbourg</li>
              <li><span className="font-semibold">N° TVA intracommunautaire :</span> FR31928114792</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gammart-green-dark mb-4">2) Directeur de la publication</h2>
            <ul className="space-y-2">
              <li><span className="font-semibold">Directeur de la publication :</span> Alain Gevez</li>
              <li><span className="font-semibold">Contact :</span> a.gevez@gammart-habitat.fr</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gammart-green-dark mb-4">3) Hébergement</h2>
            <ul className="space-y-2">
              <li><span className="font-semibold">Hébergeur :</span> IONOS</li>
              <li><span className="font-semibold">Adresse :</span> 7 place de la Gare, 57200 Sarreguemines, France</li>
              <li><span className="font-semibold">Téléphone :</span> 0970 808 911</li>
              <li><span className="font-semibold">Site :</span> https://www.ionos.fr</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gammart-green-dark mb-4">4) Conception / réalisation du site</h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-3">
                <span className="font-semibold">Conception &amp; développement :</span>
                <a
                  href="https://agence-webgenius.fr/"
                  className="inline-flex items-center gap-2 text-gammart-green-dark hover:underline"
                >
                  <Image
                    src="/images/partners/webgenius.svg"
                    alt="Webgenius"
                    width={120}
                    height={32}
                    className="h-7 w-auto"
                  />
                  <span>Webgenius</span>
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gammart-green-dark mb-4">5) Propriété intellectuelle</h2>
            <div className="space-y-4">
              <p>
                L’ensemble des contenus présents sur le site (textes, images, photographies, graphismes,
                logo, icônes, vidéos, mises en page, structure, charte graphique, etc.) est protégé par le
                droit d’auteur et, plus généralement, par les lois relatives à la propriété intellectuelle.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication, adaptation, totale ou
                partielle, de tout ou partie des éléments du site, par quelque procédé que ce soit, est
                interdite, sauf autorisation écrite préalable de Gammart Habitat.
              </p>
              <p><span className="font-semibold">Crédits photos/visuels :</span> Gammart Habitat.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gammart-green-dark mb-4">6) Responsabilité</h2>
            <div className="space-y-4">
              <p>
                Gammart Habitat s’efforce de fournir sur le site des informations aussi précises que possible.
                Toutefois, l’éditeur ne pourra être tenu responsable des omissions, des inexactitudes ou des
                carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires.
              </p>
              <p>
                Les informations disponibles sur le site sont données à titre indicatif et peuvent évoluer.
                Elles ne constituent pas un engagement contractuel. Les devis, estimations, simulations d’aides
                ou de financements sont fournis à titre informatif et doivent être confirmés par une étude
                personnalisée et/ou les organismes compétents.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gammart-green-dark mb-4">7) Liens hypertextes</h2>
            <p>
              Le site peut contenir des liens vers d’autres sites internet. Gammart Habitat n’exerce aucun
              contrôle sur ces sites et décline toute responsabilité quant à leur contenu, leurs politiques
              de confidentialité ou leurs pratiques.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gammart-green-dark mb-4">8) Données personnelles (RGPD)</h2>
            <div className="space-y-4">
              <p>
                Des données personnelles peuvent être collectées via les formulaires du site (ex. : nom,
                téléphone, email, code postal, message) afin de traiter les demandes de devis, de contact
                ou de renseignements.
              </p>
              <ul className="space-y-2">
                <li><span className="font-semibold">Responsable du traitement :</span> Gammart Habitat</li>
                <li><span className="font-semibold">Finalités :</span> gestion des demandes, relation commerciale, suivi de projet, statistiques de fonctionnement du site (si activées).</li>
                <li><span className="font-semibold">Base légale :</span> intérêt légitime et/ou exécution de mesures précontractuelles à la demande de l’utilisateur.</li>
                <li><span className="font-semibold">Durée de conservation :</span> 3 ans à compter du dernier contact pour les prospects, sauf obligation légale contraire.</li>
                <li><span className="font-semibold">Destinataires :</span> Gammart Habitat et ses prestataires strictement nécessaires (hébergement, maintenance, formulaires).</li>
                <li><span className="font-semibold">Vos droits :</span> accès, rectification, effacement, limitation, opposition, portabilité.</li>
              </ul>
              <p>
                <span className="font-semibold">Pour exercer vos droits :</span> a.gevez@gammart-habitat.fr
              </p>
              <p>
                En cas de difficulté, vous pouvez introduire une réclamation auprès de la CNIL :
                <span className="ml-1">www.cnil.fr</span>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gammart-green-dark mb-4">9) Cookies</h2>
            <p className="mb-4">
              Le site peut utiliser des cookies et/ou traceurs pour :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>assurer le bon fonctionnement du site (cookies techniques),</li>
              <li>mesurer l’audience (si un outil de mesure est activé),</li>
              <li>améliorer l’expérience utilisateur.</li>
            </ul>
            <p className="mt-4">
              Vous pouvez configurer votre navigateur pour refuser tout ou partie des cookies. Si un
              gestionnaire de consentement est en place, vous pouvez y ajuster vos choix.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gammart-green-dark mb-4">10) Droit applicable et juridiction compétente</h2>
            <p>
              Les présentes mentions légales sont soumises au droit français. En cas de litige et à défaut
              de résolution amiable, les tribunaux compétents seront ceux du ressort du siège social de
              l’éditeur, sauf disposition légale contraire.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gammart-green-dark mb-4">11) Contact</h2>
            <ul className="space-y-2">
              <li><span className="font-semibold">Email :</span> a.gevez@gammart-habitat.fr</li>
              <li><span className="font-semibold">Téléphone :</span> 07 63 98 23 57</li>
              <li><span className="font-semibold">Adresse :</span> 1 rue des Hirondelles, 67170 Geudertheim</li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  )
}

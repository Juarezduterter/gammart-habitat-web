import Link from 'next/link'
import { Container } from '@/components/ui/Container'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const servicesLinks = [
    { label: 'ITE - Isolation Extérieure', href: '/isolation/ite' },
    { label: 'ITI - Isolation Intérieure', href: '/isolation/iti' },
    { label: 'Isolation des Combles', href: '/isolation/combles' },
    { label: 'Bardage & Ravalement', href: '/efficacite-energetique/bardage-ravalement' },
    { label: 'Ventilation VMC', href: '/efficacite-energetique/ventilation' },
  ]

  const companyLinks = [
    { label: 'À Propos', href: '/a-propos' },
    { label: 'Nos Réalisations', href: '/realisations' },
    { label: 'Nos Conseils Habitat', href: '/blog' },
    { label: 'Aides & Financements', href: '/aides-financements' },
    { label: 'Contact', href: '/contact' },
  ]

  const legalLinks = [
    { label: 'Mentions Légales', href: '/mentions-legales' },
    { label: 'Politique de Confidentialité', href: '/politique-confidentialite' },
  ]

  return (
    <footer className="bg-gammart-green-dark text-white">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* À propos */}
            <div>
              <h3 className="text-xl font-bold mb-4">
                <span className="text-white">gammart</span>{' '}
                <span className="text-gammart-green-sage">habitat</span>
              </h3>
              <p className="text-gammart-green-sage text-sm mb-4">
                Le spécialiste de l'isolation thermique en Alsace. Solutions sur-mesure pour améliorer
                le confort et réduire les dépenses énergétiques de votre logement.
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Téléphone :</strong>{' '}
                  <a href="tel:0763982357" className="hover:text-gammart-green-sage transition-colors">
                    07 63 98 23 57
                  </a>
                </p>
                <p>
                  <strong>Email :</strong>{' '}
                  <a
                    href="mailto:a.gevez@gammart-habitat.fr"
                    className="hover:text-gammart-green-sage transition-colors"
                  >
                    a.gevez@gammart-habitat.fr
                  </a>
                </p>
                <p>
                  <strong>Adresse :</strong> 1 rue des Hirondelles
                  <br />
                  67170 Geudertheim
                </p>
              </div>
            </div>

            {/* Nos Services */}
            <div>
              <h4 className="font-bold text-lg mb-4">Nos Services</h4>
              <ul className="space-y-2 text-sm">
                {servicesLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gammart-green-sage hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* L'entreprise */}
            <div>
              <h4 className="font-bold text-lg mb-4">L'entreprise</h4>
              <ul className="space-y-2 text-sm">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gammart-green-sage hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Zone d'intervention */}
            <div>
              <h4 className="font-bold text-lg mb-4">Zone d'intervention</h4>
              <p className="text-gammart-green-sage text-sm mb-4">
                Nous intervenons dans tout le Bas-Rhin et l'Alsace :
              </p>
              <ul className="space-y-1 text-sm text-gammart-green-sage">
                <li>• Strasbourg et environs</li>
                <li>• Haguenau</li>
                <li>• Saverne</li>
                <li>• Sélestat</li>
                <li>• Molsheim</li>
                <li>• Et toute l'Alsace</li>
              </ul>
            </div>
          </div>

          {/* Separator */}
          <div className="border-t border-gammart-green-sage/30 my-8"></div>

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gammart-green-sage">
            <p>© {currentYear} Gammart Habitat. Tous droits réservés.</p>
            <div className="flex space-x-6">
              {legalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

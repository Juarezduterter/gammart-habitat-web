import { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'Contact - Devis gratuit | Gammart Habitat',
  description: 'Contactez Gammart Habitat pour un devis gratuit d\'isolation thermique dans le Bas-Rhin. Réponse sous 24h. Téléphone : 07 63 98 23 57',
}

export default function ContactPage() {
  return (
    <>
      <Section background="beige" paddingY="lg">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gammart-green-dark mb-4">
            Demandez votre devis gratuit
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Vous avez un projet d'isolation ou de rénovation énergétique ? Contactez-nous pour un devis
            personnalisé et gratuit, sans engagement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gammart-green-dark mb-6">Formulaire de contact</h2>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gammart-green-dark focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gammart-green-dark focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gammart-green-dark focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gammart-green-dark focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
                  Code postal *
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  required
                  pattern="[0-9]{5}"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gammart-green-dark focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                  Type de projet *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gammart-green-dark focus:border-transparent"
                >
                  <option value="">Sélectionnez un type de projet</option>
                  <option value="ITE">Isolation par l'Extérieur (ITE)</option>
                  <option value="ITI">Isolation par l'Intérieur (ITI)</option>
                  <option value="Combles">Isolation des Combles</option>
                  <option value="Plancher">Isolation Plancher Bas</option>
                  <option value="Bardage">Bardage & Ravalement</option>
                  <option value="VMC">Ventilation VMC</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Votre message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gammart-green-dark focus:border-transparent"
                  placeholder="Décrivez-nous votre projet..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gammart-green-dark text-white px-8 py-4 rounded-lg font-semibold hover:bg-gammart-green-leaf transition-colors shadow-lg hover:shadow-xl"
              >
                Envoyer ma demande
              </button>

              <p className="text-sm text-gray-600 text-center">
                Réponse sous 24h • Sans engagement • Devis gratuit
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gammart-green-dark text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Nos coordonnées</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-gammart-green-sage flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-semibold mb-1">Téléphone</p>
                    <a href="tel:0763982357" className="text-gammart-green-sage hover:text-white transition-colors">
                      07 63 98 23 57
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-gammart-green-sage flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a href="mailto:a.gevez@gammart-habitat.fr" className="text-gammart-green-sage hover:text-white transition-colors break-all">
                      a.gevez@gammart-habitat.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-gammart-green-sage flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold mb-1">Adresse</p>
                    <p className="text-gammart-green-sage">
                      1 rue des Hirondelles<br />
                      67170 Geudertheim
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gammart-beige rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gammart-green-dark mb-4">Zone d'intervention</h3>
              <p className="text-gray-700 mb-3">
                Nous intervenons dans tout le <strong>Bas-Rhin</strong> et l'<strong>Alsace</strong> :
              </p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Strasbourg et environs</li>
                <li>• Haguenau</li>
                <li>• Saverne</li>
                <li>• Sélestat</li>
                <li>• Molsheim</li>
                <li>• Et toute l'Alsace</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

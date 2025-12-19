import { Metadata } from 'next'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'Contact - Devis gratuit | Gammart Habitat',
  description: 'Contactez Gammart Habitat pour un devis gratuit d\'isolation thermique dans le Bas-Rhin. Réponse sous 24h. Téléphone : 07 63 98 23 57',
}

const contactInfos = [
  {
    title: 'Téléphone',
    value: '07 63 98 23 57',
    href: 'tel:0763982357',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: 'Email',
    value: 'a.gevez@gammart-habitat.fr',
    href: 'mailto:a.gevez@gammart-habitat.fr',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Adresse',
    value: '1 rue des Hirondelles, 67170 Geudertheim',
    href: null,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

const zones = [
  'Strasbourg et environs',
  'Haguenau',
  'Saverne',
  'Sélestat',
  'Molsheim',
  'Et toute l\'Alsace',
]

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gammart-green-dark via-gammart-green-leaf to-gammart-green-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center text-white max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Demandez votre devis gratuit
              </h1>
              <p className="text-xl md:text-2xl text-gammart-green-sage mb-6">
                Réponse sous 24h, sans engagement
              </p>
              <p className="text-lg text-white/80">
                Vous avez un projet d'isolation ou de rénovation énergétique ? Contactez-nous pour un devis personnalisé et gratuit.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <ScrollReveal>
              <div className="bg-gray-50 rounded-3xl shadow-xl p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gammart-green-dark mb-8">Formulaire de contact</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gammart-green-dark focus:border-transparent transition-all"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gammart-green-dark focus:border-transparent transition-all"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gammart-green-dark focus:border-transparent transition-all"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gammart-green-dark focus:border-transparent transition-all"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gammart-green-dark focus:border-transparent transition-all"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gammart-green-dark focus:border-transparent transition-all"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gammart-green-dark focus:border-transparent transition-all resize-none"
                      placeholder="Décrivez-nous votre projet..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gammart-green-dark text-white px-8 py-4 rounded-xl font-semibold hover:bg-gammart-green-leaf transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Envoyer ma demande
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    Réponse sous 24h • Sans engagement • Devis gratuit
                  </p>
                </form>
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <div className="space-y-6">
              <ScrollReveal direction="right">
                <div className="bg-gammart-green-dark text-white rounded-3xl p-8 md:p-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-8">Nos coordonnées</h3>

                  <div className="space-y-6">
                    {contactInfos.map((info, index) => (
                      <div key={info.title} className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-gammart-green-sage flex-shrink-0">
                          {info.icon}
                        </div>
                        <div>
                          <p className="font-semibold mb-1">{info.title}</p>
                          {info.href ? (
                            <a href={info.href} className="text-gammart-green-sage hover:text-white transition-colors">
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-gammart-green-sage">{info.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Quick contact buttons */}
                  <div className="mt-8 pt-8 border-t border-white/20 grid grid-cols-2 gap-4">
                    <a
                      href="tel:0763982357"
                      className="flex items-center justify-center gap-2 bg-white text-gammart-green-dark px-4 py-3 rounded-xl font-semibold hover:bg-gammart-green-sage transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Appeler
                    </a>
                    <a
                      href="mailto:a.gevez@gammart-habitat.fr"
                      className="flex items-center justify-center gap-2 bg-white/10 text-white px-4 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={200}>
                <div className="bg-gray-50 rounded-3xl p-8">
                  <h3 className="text-xl font-bold text-gammart-green-dark mb-6 flex items-center gap-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Zone d'intervention
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Nous intervenons dans tout le <strong>Bas-Rhin</strong> et l'<strong>Alsace</strong> :
                  </p>
                  <ul className="grid grid-cols-2 gap-2">
                    {zones.map((zone) => (
                      <li key={zone} className="flex items-center gap-2 text-gray-600">
                        <svg className="w-4 h-4 text-gammart-green-dark flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {zone}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={300}>
                <div className="bg-gammart-beige rounded-3xl p-8 text-center">
                  <div className="w-16 h-16 bg-gammart-green-dark rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gammart-green-dark mb-2">Réponse rapide</h3>
                  <p className="text-gray-700">
                    Nous vous répondons sous <strong>24 heures</strong> et planifions une visite technique gratuite.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-6">
                Pourquoi nous faire confiance ?
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                title: 'Entreprise RGE',
                description: 'Certification reconnue pour l\'accès aux aides',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Devis détaillé',
                description: 'Transparence totale sur les coûts et prestations',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: 'Accompagnement',
                description: 'Aide aux dossiers et suivi personnalisé',
              },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="bg-white rounded-2xl p-8 text-center h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gammart-green-dark/10 rounded-xl flex items-center justify-center text-gammart-green-dark mx-auto mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gammart-green-dark mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

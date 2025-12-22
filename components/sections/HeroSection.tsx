'use client'

import { useState } from 'react'
import Image from 'next/image'

export function HeroSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    setSubmitted(true)
    setIsSubmitting(false)
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="video-background hero-video-enter">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/gammarthabitat-video-background.webm" type="video/webm" />
        </video>
        <div className="video-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="animate-fade-in-up">
            {/* Logo */}
            <div className="mb-8 opacity-0 animate-fade-in-up delay-100" style={{ animationFillMode: 'forwards' }}>
              <Image
                src="/images/logos/logo-horizontal.png"
                alt="Gammart Habitat"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gammart-green-dark mb-6 leading-tight opacity-0 animate-fade-in-up delay-200" style={{ animationFillMode: 'forwards' }}>
              Optimisez votre habitat grâce à la rénovation énergétique
            </h1>

            <p className="text-xl md:text-2xl text-gammart-green-dark/80 mb-8 font-medium opacity-0 animate-fade-in-up delay-300" style={{ animationFillMode: 'forwards' }}>
              Plus d'économies, plus de confort
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mb-8 opacity-0 animate-fade-in-up delay-400" style={{ animationFillMode: 'forwards' }}>
              <div className="flex items-center gap-2 bg-gammart-green-dark text-white px-4 py-2 rounded-full text-sm font-semibold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Entreprise RGE
              </div>
              <div className="flex items-center gap-2 bg-gammart-green-dark text-white px-4 py-2 rounded-full text-sm font-semibold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Garantie décennale
              </div>
              <div className="flex items-center gap-2 bg-gammart-green-dark text-white px-4 py-2 rounded-full text-sm font-semibold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Bas-Rhin & Alsace
              </div>
            </div>

            {/* Stats preview */}
            <div className="flex gap-8 opacity-0 animate-fade-in-up delay-500" style={{ animationFillMode: 'forwards' }}>
              <div className="text-center">
                <div className="text-3xl font-bold text-gammart-green-dark">-57%</div>
                <div className="text-sm text-gray-600">d'énergie</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gammart-green-dark">200+</div>
                <div className="text-sm text-gray-600">chantiers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gammart-green-dark">98%</div>
                <div className="text-sm text-gray-600">satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="opacity-0 animate-fade-in-up delay-300" style={{ animationFillMode: 'forwards' }}>
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gammart-green-dark/10 rounded-full mb-4">
                  <svg className="w-8 h-8 text-gammart-green-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gammart-green-dark mb-2">
                  Je veux faire des économies d'énergie
                </h2>
                <p className="text-gray-600">
                  Recevez votre devis gratuit sous 24h
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gammart-green-dark mb-2">
                    Demande envoyée !
                  </h3>
                  <p className="text-gray-600">
                    Nous vous recontactons dans les 24h.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Votre nom *"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gammart-green-dark focus:ring-2 focus:ring-gammart-green-dark/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Votre email *"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gammart-green-dark focus:ring-2 focus:ring-gammart-green-dark/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Votre téléphone *"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gammart-green-dark focus:ring-2 focus:ring-gammart-green-dark/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Décrivez votre projet (optionnel)"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gammart-green-dark focus:ring-2 focus:ring-gammart-green-dark/20 outline-none transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gammart-green-dark text-white py-4 rounded-xl font-semibold text-lg hover:bg-gammart-green-leaf transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Recevoir mon devis gratuit
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                  <p className="text-xs text-gray-500 text-center">
                    En soumettant ce formulaire, vous acceptez d'être recontacté par nos équipes.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

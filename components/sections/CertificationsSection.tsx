'use client'

import Image from 'next/image'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const certifications = [
  {
    name: 'RGE',
    fullName: 'Reconnu Garant de l\'Environnement',
    description: 'Qualification obligatoire pour l\'accès aux aides de l\'État',
    logo: '/images/certifications/RGE.svg',
  },
  {
    name: 'Qualibat',
    fullName: 'Qualification Bâtiment',
    description: 'Gage de compétence et de fiabilité dans le bâtiment',
    logo: '/images/certifications/Qualibat.svg',
  },
  {
    name: 'Assurance Décennale',
    fullName: 'Garantie 10 ans',
    description: 'Protection complète de vos travaux pendant 10 ans',
    logo: null,
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    name: 'RC Pro',
    fullName: 'Responsabilité Civile Professionnelle',
    description: 'Protection en cas de dommage durant les travaux',
    logo: null,
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
]

export function CertificationsSection() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-6">
              Nos certifications & garanties
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Des qualifications reconnues pour vous garantir un travail de qualité et l'accès aux aides de l'État.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <ScrollReveal key={cert.name} delay={index * 100}>
              <div className="bg-white rounded-2xl p-8 h-full text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="h-20 flex items-center justify-center mb-6">
                  {cert.logo ? (
                    <Image
                      src={cert.logo}
                      alt={cert.name}
                      width={80}
                      height={80}
                      className="h-16 w-auto"
                    />
                  ) : (
                    <div className="text-gammart-green-dark">
                      {cert.icon}
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gammart-green-dark mb-1">{cert.name}</h3>
                <p className="text-sm font-medium text-gammart-green-sage mb-3">{cert.fullName}</p>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

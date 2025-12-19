'use client'

import Image from 'next/image'

const partners = [
  { name: 'Rockwool', logo: '/images/partners/rockwool.png' },
  { name: 'Weber', logo: '/images/partners/weber.png' },
  { name: 'Isover', logo: '/images/partners/isover.png' },
  { name: 'Knauf', logo: '/images/partners/knauf.png' },
  { name: 'STO', logo: '/images/partners/sto.png' },
  { name: 'Parexlanko', logo: '/images/partners/parexlanko.png' },
]

export function PartnersMarquee() {
  // Double the partners array for seamless loop
  const duplicatedPartners = [...partners, ...partners]

  return (
    <section className="py-8 bg-gammart-green-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-white/60 text-sm font-medium mb-6 uppercase tracking-wider">
          Nos marques partenaires
        </p>
      </div>

      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gammart-green-dark to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gammart-green-dark to-transparent z-10" />

        {/* Marquee container */}
        <div className="marquee-container">
          <div className="marquee-track">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center h-12"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={48}
                  className="h-8 md:h-10 w-auto brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

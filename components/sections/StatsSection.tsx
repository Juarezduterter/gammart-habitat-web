'use client'

import { useEffect, useRef, useState } from 'react'

function AnimatedCounter({
  end,
  duration = 2000,
  suffix = '',
  prefix = ''
}: {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
          const startTime = Date.now()

          const animate = () => {
            const now = Date.now()
            const progress = Math.min((now - startTime) / duration, 1)
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            setCount(Math.floor(end * easeOutQuart))

            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [end, duration, hasStarted])

  return (
    <span ref={ref} className="counter-animate">
      {prefix}{count}{suffix}
    </span>
  )
}

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const handleScroll = () => {
      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const threshold = windowHeight * 0.3

      // If section is partially visible and close to viewport
      if (rect.top > -threshold && rect.top < threshold) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    let scrollTimeout: NodeJS.Timeout
    const debouncedScroll = () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(handleScroll, 100)
    }

    window.addEventListener('scroll', debouncedScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', debouncedScroll)
      clearTimeout(scrollTimeout)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-gammart-green-dark via-gammart-green-leaf to-gammart-green-dark scroll-snap-section"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main stat - 57% */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="text-white/60 text-xl md:text-2xl mb-4 font-medium">
              Chiffre clé (exemple réel)
            </div>
            <div className="relative">
              <div className="text-8xl md:text-[12rem] lg:text-[16rem] font-black text-white leading-none">
                <AnimatedCounter end={57} suffix="%" prefix="-" duration={2500} />
              </div>
              <div className="absolute -bottom-2 left-0 right-0 h-2 bg-gammart-green-sage/50 rounded-full" />
            </div>
            <div className="text-white/80 text-xl md:text-2xl mt-6 font-medium max-w-xl mx-auto">
              de consommation énergétique sur une rénovation d'ampleur
            </div>
            <div className="text-gammart-green-sage text-lg mt-2">
              Cas Baerenthal - Passage de classe E à B
            </div>
          </div>
        </div>

        {/* Secondary stats */}
        <div className="grid md:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 hover:bg-white/20 hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                <AnimatedCounter end={10} suffix="+" duration={1500} />
              </div>
              <div className="text-gammart-green-sage font-medium">années d'expérience</div>
            </div>
          </div>

          <div className="text-center group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 hover:bg-white/20 hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                <AnimatedCounter end={200} suffix="+" duration={2000} />
              </div>
              <div className="text-gammart-green-sage font-medium">chantiers réalisés</div>
            </div>
          </div>

          <div className="text-center group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 hover:bg-white/20 hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                <AnimatedCounter end={98} suffix="%" duration={1800} />
              </div>
              <div className="text-gammart-green-sage font-medium">de satisfaction client</div>
            </div>
          </div>

          <div className="text-center group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 hover:bg-white/20 hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
              </div>
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                <AnimatedCounter end={10000} suffix="+" duration={2200} />
              </div>
              <div className="text-gammart-green-sage font-medium">m² isolés</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

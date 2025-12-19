'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

type NavItem = {
  label: string
  href?: string
  subMenu?: { label: string; href: string }[]
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation: NavItem[] = [
    {
      label: 'Isolation du logement',
      subMenu: [
        { label: 'ITE - Isolation par l\'Extérieur', href: '/isolation/ite' },
        { label: 'ITI - Isolation par l\'Intérieur', href: '/isolation/iti' },
        { label: 'Isolation des Combles', href: '/isolation/combles' },
        { label: 'Isolation Plancher Bas', href: '/isolation/plancher-bas' },
      ],
    },
    {
      label: 'Efficacité Énergétique',
      subMenu: [
        { label: 'Bardage & Ravalement', href: '/efficacite-energetique/bardage-ravalement' },
        { label: 'Menuiseries & Volets', href: '/efficacite-energetique/menuiseries' },
        { label: 'Ventilation (VMC)', href: '/efficacite-energetique/ventilation' },
        { label: 'Étude Thermique', href: '/efficacite-energetique/etude-thermique' },
      ],
    },
    { label: 'Réalisations', href: '/realisations' },
    { label: 'Aides & Financements', href: '/aides-financements' },
    { label: 'À Propos', href: '/a-propos' },
  ]

  const toggleMobileSubmenu = (label: string) => {
    setOpenMobileSubmenu(openMobileSubmenu === label ? null : label)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gammart-green-dark/95 backdrop-blur-sm shadow-lg' : 'bg-gammart-green-dark'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logos/logo-horizontal.png"
              alt="Gammart Habitat"
              width={180}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <div key={item.label} className="relative group">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-white hover:text-gammart-green-sage transition-colors py-2 text-sm font-medium"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="text-white hover:text-gammart-green-sage transition-colors py-2 text-sm font-medium flex items-center gap-1 cursor-default"
                  >
                    {item.label}
                    <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
                {item.subMenu && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-lg shadow-xl py-2 min-w-[250px]">
                      {item.subMenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2 text-gammart-green-dark hover:bg-gammart-beige transition-colors text-sm"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button href="/contact" variant="secondary" size="sm">
              Demander un devis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="block text-white hover:text-gammart-green-sage transition-colors py-2 text-sm font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      className="flex items-center justify-between w-full text-white hover:text-gammart-green-sage transition-colors py-2 text-sm font-medium"
                      onClick={() => toggleMobileSubmenu(item.label)}
                    >
                      {item.label}
                      <svg
                        className={`w-4 h-4 transition-transform ${openMobileSubmenu === item.label ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                  {item.subMenu && openMobileSubmenu === item.label && (
                    <div className="pl-4 space-y-2 mt-2">
                      {item.subMenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block text-gammart-green-sage hover:text-white transition-colors py-1 text-sm"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Button href="/contact" variant="secondary" size="sm" fullWidth>
                  Demander un devis
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

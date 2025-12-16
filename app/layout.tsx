import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Isolation thermique Bas-Rhin | Gammart Habitat (ITE, ITI, combles, ventilation)',
  description: 'Besoin d\'une isolation thermique Bas-Rhin efficace ? Gammart Habitat vous accompagne de l\'étude au chantier : ITE, ITI, combles, plancher bas, bardage, ventilation. Devis gratuit, RGE, garantie décennale.',
  keywords: [
    'isolation thermique',
    'Bas-Rhin',
    'ITE',
    'ITI',
    'isolation extérieure',
    'isolation intérieure',
    'isolation combles',
    'plancher bas',
    'bardage',
    'ventilation',
    'rénovation énergétique',
    'Alsace',
    'Strasbourg',
    'Gammart Habitat',
    'RGE',
  ],
  authors: [{ name: 'Gammart Habitat' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.gammart-habitat.fr',
    siteName: 'Gammart Habitat',
    title: 'Isolation thermique Bas-Rhin | Gammart Habitat (ITE, ITI, combles, ventilation)',
    description: 'Besoin d\'une isolation thermique Bas-Rhin efficace ? Gammart Habitat vous accompagne de l\'étude au chantier : ITE, ITI, combles, plancher bas, bardage, ventilation. Devis gratuit, RGE, garantie décennale.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="antialiased">
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

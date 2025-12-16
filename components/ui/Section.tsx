import { ReactNode } from 'react'
import { Container } from './Container'

interface SectionProps {
  children: ReactNode
  className?: string
  containerSize?: 'sm' | 'md' | 'lg' | 'full'
  background?: 'white' | 'beige' | 'gray'
  paddingY?: 'sm' | 'md' | 'lg' | 'xl'
}

const backgroundClasses = {
  white: 'bg-white',
  beige: 'bg-gammart-beige',
  gray: 'bg-gray-50',
}

const paddingClasses = {
  sm: 'py-8 md:py-12',
  md: 'py-12 md:py-16',
  lg: 'py-16 md:py-24',
  xl: 'py-24 md:py-32',
}

export function Section({
  children,
  className = '',
  containerSize = 'lg',
  background = 'white',
  paddingY = 'lg',
}: SectionProps) {
  return (
    <section className={`${backgroundClasses[background]} ${paddingClasses[paddingY]} ${className}`}>
      <Container size={containerSize}>{children}</Container>
    </section>
  )
}

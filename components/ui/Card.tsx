import { ReactNode } from 'react'
import Link from 'next/link'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  href?: string
  borderAccent?: boolean
}

export function Card({ children, className = '', hover = true, href, borderAccent = false }: CardProps) {
  const baseClasses = `bg-white rounded-2xl shadow-md ${
    hover ? 'hover:shadow-xl transition-shadow duration-300' : ''
  } ${borderAccent ? 'border-l-4 border-gammart-green-dark' : ''} ${className}`

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} block`}>
        {children}
      </Link>
    )
  }

  return <div className={baseClasses}>{children}</div>
}

export function CardHeader({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`p-6 ${className}`}>{children}</div>
}

export function CardBody({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>
}

export function CardFooter({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>
}

'use client'

import { useEffect, useRef, useState } from 'react'

interface UseScrollRevealOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollRevealOptions = {}
) {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options
  const ref = useRef<T>(null)
  const [isRevealed, setIsRevealed] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsRevealed(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, triggerOnce])

  return { ref, isRevealed }
}

export function useCountUp(
  end: number,
  duration: number = 2000,
  start: number = 0
) {
  const [count, setCount] = useState(start)
  const [isStarted, setIsStarted] = useState(false)

  const startCounting = () => {
    if (isStarted) return
    setIsStarted(true)

    const startTime = Date.now()
    const step = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(start + (end - start) * easeOutQuart))

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }
    requestAnimationFrame(step)
  }

  return { count, startCounting }
}

'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'

const testimonials = [
  {
    quote: "Travaux très propres, explications claires, et un vrai gain de confort dès le premier hiver.",
    author: "Marc",
    location: "Strasbourg",
    service: "ITE",
    rating: 5,
  },
  {
    quote: "On hésitait sur la solution, la visite technique a tout éclairci. Résultat : maison plus chaude, façade comme neuve.",
    author: "Sophie",
    location: "Haguenau",
    service: "ITE + façade",
    rating: 5,
  },
  {
    quote: "Équipe ponctuelle, chantier bien protégé, et surtout une sensation de chaleur stable. Très satisfait.",
    author: "Karim",
    location: "Molsheim",
    service: "combles + plancher bas",
    rating: 5,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gammart-green-dark mb-6">
              Ils nous font confiance
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Une rénovation réussie, c'est une différence ressentie au quotidien.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <div className="bg-gray-50 p-8 rounded-3xl h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                <StarRating rating={testimonial.rating} />
                <svg className="w-10 h-10 text-gammart-green-dark/20 mt-6 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 mb-6 flex-grow text-lg leading-relaxed">"{testimonial.quote}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gammart-green-dark text-lg">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.location} — {testimonial.service}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

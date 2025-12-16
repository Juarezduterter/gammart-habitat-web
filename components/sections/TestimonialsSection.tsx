import { Section } from '@/components/ui/Section'

const testimonials = [
  {
    quote: "Travaux très propres, explications claires, et un vrai gain de confort dès le premier hiver.",
    author: "Marc",
    location: "Strasbourg",
    service: "ITE",
  },
  {
    quote: "On hésitait sur la solution, la visite technique a tout éclairci. Résultat : maison plus chaude, façade comme neuve.",
    author: "Sophie",
    location: "Haguenau",
    service: "ITE + façade",
  },
  {
    quote: "Équipe ponctuelle, chantier bien protégé, et surtout une sensation de chaleur stable. Très satisfait.",
    author: "Karim",
    location: "Molsheim",
    service: "combles + plancher bas",
  },
]

export function TestimonialsSection() {
  return (
    <Section background="white" paddingY="lg">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gammart-green-dark mb-4">
          Ils ont franchi le cap… et ils ne reviendraient pas en arrière
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Rien ne vaut l'avis de propriétaires ayant vécu la même situation. Une <strong>isolation thermique Bas-Rhin</strong> réussie, c'est une différence ressentie au quotidien : silence, confort, stabilité thermique, et factures plus légères.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gammart-beige p-8 rounded-2xl relative">
            <svg className="w-12 h-12 text-gammart-green-dark/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
            <div className="border-t border-gammart-green-dark/20 pt-4">
              <p className="font-bold text-gammart-green-dark">{testimonial.author}</p>
              <p className="text-sm text-gray-600">{testimonial.location} — {testimonial.service}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

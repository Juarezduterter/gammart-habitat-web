import { HeroSection } from '@/components/sections/HeroSection'
import { PartnersMarquee } from '@/components/sections/PartnersMarquee'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { SolutionSection } from '@/components/sections/SolutionSection'
import { CertificationsSection } from '@/components/sections/CertificationsSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { CaseStudySection } from '@/components/sections/CaseStudySection'
import { StatsSection } from '@/components/sections/StatsSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { AidesSection } from '@/components/sections/AidesSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { ZoneSection } from '@/components/sections/ZoneSection'
import { CTASection } from '@/components/sections/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnersMarquee />
      <ProblemSection />
      <SolutionSection />
      <CertificationsSection />
      <ServicesSection />
      <CaseStudySection />
      <StatsSection />
      <ProcessSection />
      <AidesSection />
      <TestimonialsSection />
      <ZoneSection />
      <CTASection />
    </>
  )
}

'use client'

import HeroSection from './components/HeroSection'
import WhyTrustSection from './components/WhyTrustSection'
import HowItWorksSection from './components/HowItWorksSection'
import TestimonialsSection from './components/TestimonialsSection'

import CTASection from './components/CTASection'
import LegalNoteSection from './components/LegalNoteSection'
import FaqSection from '@/components/sections/FAQ'
import faq from '@/data/kirana-faqs.json'

export default function KiranaPage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(16,185,129,0.2),transparent_70%)] blur-3xl" />

      <HeroSection />
      <WhyTrustSection />
      <HowItWorksSection />

      <CTASection />
      <LegalNoteSection />
      <TestimonialsSection />
      <FaqSection faqs={faq} />
    </main>
  )
}

'use client'

import FaqSection from "@/components/sections/FAQ"
import CTASection from "./components/CTAAction"
import HeroSection from "./components/HeroSection"
import HowItWorksSection from "./components/HowItWorks"
import LegalNoteSection from "./components/LegalNoteSection"
import TestimonialsSection from "./components/TestimonialsSection"
import WhyTrustSection from "./components/WhyTrustSection"
import faq from '@/data/kirana-faqs.json'
import { WebPageSchema, FAQSchema } from '@/components/StructuredData'



export default function KiranaPage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <WebPageSchema
        title="Kirana Loan Services - Quick Cash for Your Store"
        description="Get instant cash for your kirana store with RupeeFlow. Quick approval, low interest rates, and flexible repayment options."
        url="/kirana"
      />
      <FAQSchema faqs={faq.map(f => ({ question: f.question, answer: f.answer }))} />

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
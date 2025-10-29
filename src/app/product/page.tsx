'use client'

import AEPSInfoSection from '@/components/sections/AepsSection'
import DMTSection from '@/components/sections/DMTSection'
import FaqSection from '@/components/sections/FAQ'
import IMPSInfoSection from '@/components/sections/IMPSSection'
import NEFTInfoSection from '@/components/sections/NEFTSection'
import ProductHero from '@/components/sections/ProductHero'
import UPISwitchSection from '@/components/sections/UPISwitchSection'
import VerificationSection from '@/components/sections/VerificationSection'
import faq from '@/data/top-faqs.json'
import { WebPageSchema, FAQSchema } from '@/components/StructuredData'


export default function SolutionPage() {
  return (
    <>
      <WebPageSchema
        title="Products - Payment Solutions for Modern Businesses"
        description="Comprehensive suite of payment products including UPI Switch, verification APIs, AEPS, DMT, IMPS, and NEFT solutions."
        url="/product"
      />
      <FAQSchema faqs={faq.map(f => ({ question: f.question, answer: f.answer }))} />
      <ProductHero />

      <NEFTInfoSection />
      <IMPSInfoSection />
      <UPISwitchSection />
      <VerificationSection />
      <AEPSInfoSection />
      <DMTSection />
      <FaqSection faqs={faq} />

    </>
  )
}

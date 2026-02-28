'use client'

import AEPSInfoSection from '@/components/sections/AepsSection'
import DMTSection from '@/components/sections/DMTSection'
import FaqSection from '@/components/sections/FAQ'
import IMPSInfoSection from '@/components/sections/IMPSSection'
import KiranaPromo from '@/components/sections/KiranaPromo'
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
        title="Products — Collect, Pay & Get Credit | RupeeFlow"
        description="RupeeFlow's complete product suite: Payment Gateway, UPI Collections, Payment Links, QR Code, Payment Button, Vendor Payments, Salary Disbursements, Bulk Payouts, Invoice Management, Bill Payments, Tax Payments, Merchant Cash Advance, Invoice Financing, and NRI Loans."
        url="/products"
      />
      <FAQSchema faqs={faq.map(f => ({ question: f.question, answer: f.answer }))} />
      <ProductHero />
      <KiranaPromo />
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

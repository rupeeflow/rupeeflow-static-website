'use client'

import HeroSection from './components/HeroSection'
import WhyChooseSection from './components/WhyChooseSection'
import IndustryFocusSection from './components/IndustryFocusSection'
import HowItWorksSection from './components/HowItWorksSection'
import BenefitsComparisonSection from './components/BenefitsComparisonSection'
import ClientLogosSection from './components/ClientLogosSection'
import EligibilitySection from './components/EligibilitySection'
import FAQSection from '@/components/sections/FAQ'
import CTASection from './components/CTASection'
import { WebPageSchema, FAQSchema } from '@/components/StructuredData'

const faqs = [
  {
    question: 'What is Invoice Financing?',
    answer: 'Invoice financing allows you to get immediate cash against your pending B2B invoices. You receive 80% upfront, and the remaining 18% (minus 2% fee) when your client pays.',
  },
  {
    question: 'How is it different from a loan?',
    answer: 'Invoice financing is not a loan. It is an advance against money you have already earned. There is no debt, no EMI, and no interest. You only pay a small processing fee.',
  },
  {
    question: 'What types of invoices are eligible?',
    answer: 'We finance B2B invoices with payment terms of 30-90 days from creditworthy companies. Invoices should be for delivered goods or completed services.',
  },
  {
    question: 'How quickly can I get funded?',
    answer: 'Once your invoice is verified, funds are disbursed within 24 hours directly to your business account.',
  },
  {
    question: 'What if my client does not pay?',
    answer: 'We assess client creditworthiness before financing. In case of non-payment, we have collection mechanisms in place. However, you may be liable in certain cases.',
  },
  {
    question: 'Is there a minimum invoice amount?',
    answer: 'Yes, we finance invoices from ₹1 lakh to ₹50 lakhs. For amounts above ₹50L, please contact our enterprise team.',
  },
]

export default function InvoicingFinancingPage() {
  return (
    <main className="relative min-h-screen bg-white text-gray-900 overflow-hidden">
      <WebPageSchema
        title="Invoice Financing - Get 80% Upfront Against B2B Invoices"
        description="Convert pending invoices to instant cash. ₹1L-₹50L financing, 24hr approval, no debt, no EMI. Perfect for B2B businesses."
        url="/invoicing-financing"
      />
      <FAQSchema faqs={faqs} />

      <HeroSection />
      <WhyChooseSection />
      <IndustryFocusSection />
      <HowItWorksSection />
      <BenefitsComparisonSection />
      <ClientLogosSection />
      <EligibilitySection />
      <FAQSection faqs={faqs} />
      <CTASection />
    </main>
  )
}

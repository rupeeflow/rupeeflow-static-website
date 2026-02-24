'use client'

import HeroSection from './components/HeroSection'
import EmergencyTypesSection from './components/EmergencyTypesSection'
import GlobalReachSection from './components/GlobalReachSection'
import WhyChooseSection from './components/WhyChooseSection'
import RepaymentSection from './components/RepaymentSection'
import LanguageSupportSection from './components/LanguageSupportSection'
import TrustIndicators from './components/TrustIndicators'
import FAQSection from '@/components/sections/FAQ'
import CTASection from './components/CTASection'
import { WebPageSchema, FAQSchema } from '@/components/StructuredData'

const faqs = [
  {
    question: 'Who can apply for NRI Emergency Loans?',
    answer: 'Any Non-Resident Indian (NRI) living abroad can apply. You need valid NRI status, overseas employment proof, and Indian bank account details for your family in India.',
  },
  {
    question: 'How quickly can funds reach my family in India?',
    answer: 'Once approved, funds are disbursed within 24 hours directly to your family member\'s bank account in India. For emergencies, we offer express processing within 2-4 hours.',
  },
  {
    question: 'Can I repay from my overseas account?',
    answer: 'Yes! We accept repayments from overseas accounts in multiple currencies including USD, GBP, EUR, AED, and SGD. Auto-debit facility is available for hassle-free payments.',
  },
  {
    question: 'What documents do I need?',
    answer: 'You need passport, overseas employment proof, salary slips, Indian bank account details, and beneficiary information. All documents can be submitted digitally.',
  },
  {
    question: 'Is there a maximum loan amount?',
    answer: 'You can borrow up to ₹10 lakhs based on your overseas income and credit profile. Higher amounts may be available for medical emergencies with proper documentation.',
  },
  {
    question: 'Do you support multiple languages?',
    answer: 'Yes! Our platform and customer support are available in 12 Indian languages including Hindi, Tamil, Telugu, Malayalam, Kannada, Bengali, Marathi, Gujarati, Punjabi, and more.',
  },
]

export default function NRIEmergencyLoansPage() {
  return (
    <main className="relative min-h-screen bg-white text-gray-900 overflow-hidden">
      <WebPageSchema
        title="NRI Emergency Loans - Quick Financial Help for Family in India"
        description="Get ₹50K-₹10L emergency loans for your family in India. 24hr disbursal, repay from overseas, support in 12 languages."
        url="/nri-emergency-loans"
      />
      <FAQSchema faqs={faqs} />

      <HeroSection />
      <EmergencyTypesSection />
      <GlobalReachSection />
      <WhyChooseSection />
      <RepaymentSection />
      <LanguageSupportSection />
      <TrustIndicators />
      <FAQSection faqs={faqs} />
      <CTASection />
    </main>
  )
}

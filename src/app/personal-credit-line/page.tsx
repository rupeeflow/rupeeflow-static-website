'use client'

import HeroSection from './components/HeroSection'
import WhyChooseSection from './components/WhyChooseSection'
import HowItWorksSection from './components/HowItWorksSection'
import EligibilitySection from './components/EligibilitySection'
import RepaymentSection from './components/RepaymentSection'
import BenefitsSection from './components/BenefitsSection'
import ComparisonSection from './components/ComparisonSection'
import UseCasesSection from './components/UseCasesSection'
import FAQSection from '@/components/sections/FAQ'
import CTASection from './components/CTASection'
import { WebPageSchema, FAQSchema } from '@/components/StructuredData'

const faqs = [
  {
    question: 'What is a Personal Credit Line?',
    answer: 'A Personal Credit Line is a revolving credit facility where you get approved for a credit limit (₹5,000 to ₹50,000) and can withdraw funds as needed. You only pay interest on the amount you use, not the entire credit limit.',
  },
  {
    question: 'How much can I get?',
    answer: 'You can get a credit line between ₹5,000 to ₹50,000 based on your income, credit history, and repayment capacity. The limit can be increased over time with good repayment behavior.',
  },
  {
    question: 'How does the voice-enabled feature work?',
    answer: 'Our platform supports voice commands in 12 Indian languages. You can apply, check balance, withdraw funds, and make payments using simple voice commands through our mobile app.',
  },
  {
    question: 'What are the interest charges?',
    answer: 'Interest is charged only on the amount you withdraw and for the duration you use it. Rates start from 1.5% per month. No interest on unused credit limit.',
  },
  {
    question: 'Can I repay early?',
    answer: 'Yes! You can repay anytime without any prepayment penalties. Early repayment reduces your interest charges and frees up your credit limit for future use.',
  },
  {
    question: 'How quickly can I access funds?',
    answer: 'Once your credit line is approved, you can withdraw funds instantly 24/7 through our app. Money is transferred to your bank account within minutes.',
  },
  {
    question: 'What can I use the credit line for?',
    answer: 'You can use it for any personal need - medical emergencies, education fees, home repairs, travel, shopping, or any unexpected expenses. No restrictions on usage.',
  },
  {
    question: 'Who is eligible for Personal Credit Line?',
    answer: 'Anyone with a regular income (salaried or self-employed), minimum credit score of 650, and age between 21-60 years is eligible. Both urban and rural residents can apply.',
  },
]

export default function PersonalCreditLinePage() {
  return (
    <main className="relative min-h-screen bg-[var(--card)] text-gray-900 overflow-hidden">
      <WebPageSchema
        title="Personal Credit Line - Revolving Credit with Voice Support"
        description="Get ₹5K-₹50K revolving credit line. Voice-enabled in 12 languages, pay only for what you use, instant withdrawals 24/7."
        url="/personal-credit-line"
      />
      <FAQSchema faqs={faqs} />

      <HeroSection />
      <WhyChooseSection />
      <HowItWorksSection />
      <EligibilitySection />
      <RepaymentSection />
      <BenefitsSection />
      <ComparisonSection />
      <UseCasesSection />
      <FAQSection faqs={faqs} />
      <CTASection />
    </main>
  )
}

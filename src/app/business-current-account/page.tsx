'use client'

import HeroSection from './components/HeroSection'
import KeyFeaturesSection from './components/KeyFeaturesSection'
import BenefitsSection from './components/BenefitsSection'
import HowItWorksSection from './components/HowItWorksSection'
import AccountTypesSection from './components/AccountTypesSection'
import FAQSection from '@/components/sections/FAQ'
import CTASection from './components/CTASection'
import { WebPageSchema, FAQSchema } from '@/components/StructuredData'

const faqs = [
  {
    question: 'How long does it take to open a Business Current Account?',
    answer: 'You can open your Business Current Account in just 10 minutes with our fully digital process. Simply submit your documents online, complete the verification, and your account will be activated instantly.',
  },
  {
    question: 'Is there a minimum balance requirement?',
    answer: 'No, there is zero minimum balance requirement. You can maintain any balance in your account without worrying about penalties or charges.',
  },
  {
    question: 'Are NEFT and RTGS transactions free?',
    answer: 'Yes, all NEFT and RTGS transactions are completely free with no hidden charges. You can transfer funds to any bank account across India at zero cost.',
  },
  {
    question: 'What are virtual accounts and how do they help?',
    answer: 'Virtual accounts are unique account numbers linked to your main current account. They help you track payments from different sources, automate reconciliation, and manage collections efficiently without opening multiple physical accounts.',
  },
  {
    question: 'What documents do I need to open an account?',
    answer: 'You need basic business documents including PAN card, business registration certificate (GST/Shop Act/Partnership Deed), address proof, and identity proof of authorized signatories. The exact requirements may vary based on your business type.',
  },
  {
    question: 'Can I integrate the account with my accounting software?',
    answer: 'Yes, our Business Current Account comes with API access that allows seamless integration with popular accounting software, ERPs, and business management tools for automated reconciliation and reporting.',
  },
  {
    question: 'Is there a limit on transactions?',
    answer: 'No, there are no limits on the number of transactions. You can make unlimited NEFT, RTGS, UPI, and other transactions without any restrictions or additional charges.',
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'We provide dedicated relationship managers for business accounts, 24/7 customer support via phone, email, and chat, along with priority resolution for any account-related queries or issues.',
  },
]

export default function BusinessCurrentAccountPage() {
  return (
    <main className="relative min-h-screen bg-[var(--card)] text-gray-900 overflow-hidden">
      <WebPageSchema
        title="Business Current Account - Open in 10 Minutes | Zero Balance"
        description="Open a Business Current Account in 10 minutes with zero balance requirement. Get free NEFT/RTGS, virtual accounts, and seamless API integration for your business."
        url="/business-current-account"
      />
      <FAQSchema faqs={faqs} />

      <HeroSection />
      <KeyFeaturesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <AccountTypesSection />
      <FAQSection faqs={faqs} />
      <CTASection />
    </main>
  )
}

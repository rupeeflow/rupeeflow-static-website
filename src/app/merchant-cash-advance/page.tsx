'use client'

import HeroSection from './components/HeroSection'
import RevenueCalculator from './components/RevenueCalculator'
import WhyChooseSection from './components/WhyChooseSection'
import QuickStatsSection from './components/QuickStatsSection'
import RepaymentSection from './components/RepaymentSection'
import BusinessTypesSection from './components/BusinessTypesSection'
import SuccessMetrics from './components/SuccessMetrics'
import FAQSection from '@/components/sections/FAQ'
import CTASection from './components/CTASection'
import { WebPageSchema, FAQSchema } from '@/components/StructuredData'

const faqs = [
  {
    question: 'What is a Merchant Cash Advance?',
    answer: 'A Merchant Cash Advance (MCA) is a financing option where you receive a lump sum upfront based on your daily UPI collections and credit history. Repayment is automatically deducted from your daily sales, making it flexible and stress-free.',
  },
  {
    question: 'How much can I borrow?',
    answer: 'You can borrow between ₹10,000 to ₹5,00,000 based on your daily UPI transaction volume, credit history, and business performance. The amount is determined after a quick assessment of your business.',
  },
  {
    question: 'How fast can I get approved?',
    answer: 'Our approval process takes just 3 minutes. Once approved, funds are disbursed to your account within 24 hours, ensuring you get the capital when you need it most.',
  },
  {
    question: 'What are the repayment options?',
    answer: 'We offer flexible repayment options including daily, weekly, or monthly auto-deductions from your sales. The repayment amount adjusts based on your business performance, ensuring you never face cash flow issues.',
  },
  {
    question: 'Do I need collateral?',
    answer: 'No collateral is required. We assess your eligibility based on your UPI transaction history and credit score, making it accessible for small businesses and gig workers.',
  },
  {
    question: 'What if my sales are low on a particular day?',
    answer: 'Our smart repayment system adjusts to your daily sales. If your sales are low, the deduction amount is proportionally reduced, ensuring your business operations are never disrupted.',
  },
  {
    question: 'Can I repay early without penalties?',
    answer: 'Yes! You can repay your advance early without any prepayment penalties. Early repayment may also help you qualify for higher amounts in the future.',
  },
  {
    question: 'Who is eligible for Merchant Cash Advance?',
    answer: 'Any business or gig worker with consistent UPI collections, a minimum credit score of 650, and at least 6 months of transaction history is eligible. This includes retailers, freelancers, delivery partners, and small business owners.',
  },
]

export default function MerchantCashAdvancePage() {
  return (
    <main className="relative min-h-screen bg-white text-gray-900 overflow-hidden">
      <WebPageSchema
        title="Merchant Cash Advance - Quick Business Loans Based on UPI Collections"
        description="Get ₹10K-₹5L instant business loans based on your daily UPI collections. 3-minute approval, flexible repayment, no collateral required."
        url="/merchant-cash-advance"
      />
      <FAQSchema faqs={faqs} />

      <HeroSection />
      <RevenueCalculator />
      <WhyChooseSection />
      <QuickStatsSection />
      <RepaymentSection />
      <BusinessTypesSection />
      <SuccessMetrics />
      <FAQSection faqs={faqs} />
      <CTASection />
    </main>
  )
}

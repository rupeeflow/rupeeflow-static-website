'use client';

import HeroSection from './components/HeroSection';
import AutoReconciliationCalculator from './components/AutoReconciliationCalculator';
import BenefitsGrid from './components/BenefitsGrid';
import StatsSection from './components/StatsSection';
import HowItWorksSection from './components/HowItWorksSection';
import ReconciliationVisual from './components/ReconciliationVisual';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import { WebPageSchema, FAQSchema } from '@/components/StructuredData';

const faqs = [
  {
    question: 'How accurate is the auto-matching?',
    answer:
      'Our AI-powered matching algorithms achieve 99.9% accuracy by analyzing transaction amounts, dates, reference numbers, and patterns. The system learns from your corrections to improve over time.',
  },
  {
    question: 'Which banks are supported?',
    answer:
      'We support all major Indian banks including HDFC, ICICI, SBI, Axis, Kotak, and 50+ others. You can connect multiple bank accounts from different banks simultaneously.',
  },
  {
    question: 'What happens to unmatched transactions?',
    answer:
      'Unmatched transactions are automatically flagged as exceptions. The system suggests potential matches based on similarity, and you can manually match or mark them for investigation.',
  },
  {
    question: 'How long does reconciliation take?',
    answer:
      'Most reconciliations complete in under 5 minutes, even with thousands of transactions. The system processes matches in real-time as you import statements.',
  },
  {
    question: 'Is my banking data secure?',
    answer:
      'Yes, we use bank-grade 256-bit encryption and read-only access. We never store your banking credentials and comply with RBI data security guidelines.',
  },
  {
    question: 'Can I reconcile historical data?',
    answer:
      'Yes, you can import and reconcile historical bank statements going back several years. This is useful for catching up on pending reconciliations.',
  },
  {
    question: 'Does it integrate with accounting software?',
    answer:
      'Yes, we integrate with Tally, QuickBooks, Zoho Books, and other major accounting platforms. Matched transactions sync automatically to your accounting system.',
  },
  {
    question: 'What about multi-currency transactions?',
    answer:
      'We support multi-currency reconciliation with automatic exchange rate application. Perfect for businesses dealing with international payments.',
  },
];

export default function AutoReconciliationPage() {
  return (
    <main>
      <WebPageSchema
        title="Auto Bank Reconciliation - RupeeFlow"
        description="Automate bank reconciliation with 99.9% accuracy. Match thousands of transactions instantly, save 85% time, and close books 10x faster with AI-powered algorithms."
        url="https://rupeeflow.com/auto-reconciliation"
      />
      <FAQSchema faqs={faqs} />

      <HeroSection />
      <AutoReconciliationCalculator />
      <BenefitsGrid />
      <ReconciliationVisual />
      <StatsSection />
      <HowItWorksSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}

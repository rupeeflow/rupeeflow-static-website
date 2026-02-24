'use client';

import HeroSection from './components/HeroSection';
import VendorManagementCalculator from './components/VendorManagementCalculator';
import BenefitsGrid from './components/BenefitsGrid';
import StatsSection from './components/StatsSection';
import HowItWorksSection from './components/HowItWorksSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import { WebPageSchema, FAQSchema } from '@/components/StructuredData';

const faqs = [
  {
    question: 'How do I onboard new vendors?',
    answer:
      'Send vendors a digital onboarding form where they provide business details, banking information, and tax documents. The system verifies information automatically and creates their profile.',
  },
  {
    question: 'Can I track vendor performance?',
    answer:
      'Yes, rate vendors on delivery time, product quality, pricing, and communication. The system calculates an overall performance score and identifies top-performing vendors.',
  },
  {
    question: 'How are early payment discounts tracked?',
    answer:
      'The system automatically identifies invoices with early payment discount terms and alerts you before the discount deadline. Track captured discounts in your savings dashboard.',
  },
  {
    question: 'Can vendors access the system?',
    answer:
      'Yes, vendors get portal access to submit invoices, update their information, view payment status, and communicate with your team. Access is secure and role-based.',
  },
  {
    question: 'How do I manage payment terms?',
    answer:
      'Set default payment terms for each vendor (Net 30, Net 60, 2/10 Net 30, etc.). The system automatically applies terms to new invoices and calculates due dates.',
  },
  {
    question: 'Can I categorize vendors?',
    answer:
      'Yes, create custom categories (critical, preferred, standard) and tags. Filter and report on vendors by category, spend level, or performance tier.',
  },
  {
    question: 'Is there a vendor communication log?',
    answer:
      'Yes, all emails, calls, and interactions are logged automatically. View complete communication history for any vendor with timestamps and participants.',
  },
  {
    question: 'How do I handle vendor contracts?',
    answer:
      'Upload and store vendor contracts with expiry date tracking. Get automatic reminders before contracts expire so you can renegotiate terms in advance.',
  },
];

export default function VendorManagementPage() {
  return (
    <main>
      <WebPageSchema
        title="Vendor Management & Relationship Optimization - RupeeFlow"
        description="Optimize vendor relationships and capture 2% early payment discounts. Centralized database, performance tracking, automated onboarding, and 95% vendor satisfaction."
        url="https://rupeeflow.com/vendor-management"
      />
      <FAQSchema faqs={faqs} />

      <HeroSection />
      <VendorManagementCalculator />
      <BenefitsGrid />
      <StatsSection />
      <HowItWorksSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}

'use client';

import HeroSection from './components/HeroSection';
import InvoiceManagementCalculator from './components/InvoiceManagementCalculator';
import BenefitsGrid from './components/BenefitsGrid';
import StatsSection from './components/StatsSection';
import HowItWorksSection from './components/HowItWorksSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import { WebPageSchema, FAQSchema } from '@/components/StructuredData';

const faqs = [
  {
    question: 'How do I set up approval workflows?',
    answer:
      'Configure approval rules based on invoice amount, vendor, department, or GL code. You can set up sequential or parallel approvals with automatic routing and escalation.',
  },
  {
    question: 'Can vendors submit invoices directly?',
    answer:
      'Yes, vendors get access to a secure portal where they can submit invoices, attach documents, and track payment status. This eliminates email back-and-forth and reduces errors.',
  },
  {
    question: 'What happens if an approver is unavailable?',
    answer:
      'Set up automatic escalation rules that route invoices to backup approvers after a specified time. You can also delegate approval authority temporarily.',
  },
  {
    question: 'How are invoices matched with purchase orders?',
    answer:
      'The system automatically matches invoices with POs using reference numbers, amounts, and vendor details. Three-way matching (PO, invoice, receipt) is supported.',
  },
  {
    question: 'Can I track invoice status in real-time?',
    answer:
      'Yes, view the current status of any invoice - pending approval, approved, scheduled for payment, or paid. Get notifications at each stage of the workflow.',
  },
  {
    question: 'Is there an audit trail?',
    answer:
      'Complete audit trail captures every action - who viewed, approved, rejected, or modified an invoice, with timestamps. Perfect for compliance and audits.',
  },
  {
    question: 'Does it integrate with accounting software?',
    answer:
      'Yes, we integrate with Tally, QuickBooks, Zoho Books, SAP, and other major accounting platforms. Approved invoices sync automatically.',
  },
  {
    question: 'Can I set payment terms by vendor?',
    answer:
      'Yes, configure default payment terms for each vendor (Net 30, Net 60, etc.). The system automatically calculates due dates and sends reminders.',
  },
];

export default function InvoiceManagementPage() {
  return (
    <main>
      <WebPageSchema
        title="Invoice Management System - RupeeFlow"
        description="Centralized invoice management with automated workflows. Multi-level approvals, vendor portal, real-time tracking, and complete audit trail for 60% faster processing."
        url="https://rupeeflow.com/invoice-management"
      />
      <FAQSchema faqs={faqs} />

      <HeroSection />
      <InvoiceManagementCalculator />
      <BenefitsGrid />
      <StatsSection />
      <HowItWorksSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}

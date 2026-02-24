'use client';

import { motion } from 'framer-motion';
import FAQ from '@/components/FAQ';

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

export default function FAQSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="fontheading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Common{' '}
            <span className="bg-gradient-to-r from-[#53BEC2] to-[#00EF64] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <FAQ faqs={faqs} />
        </div>
      </div>
    </section>
  );
}

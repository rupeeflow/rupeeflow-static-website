'use client';

import { motion } from 'framer-motion';
import FAQ from '@/components/FAQ';

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
            Frequently Asked{' '}
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

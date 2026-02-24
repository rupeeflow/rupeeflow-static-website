'use client';

import { motion } from 'framer-motion';
import FAQ from '@/components/FAQ';

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

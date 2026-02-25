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
  return <FAQ faqs={faqs} />;
}

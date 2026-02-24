'use client';

import { motion } from 'framer-motion';
import FAQ from '@/components/FAQ';

const faqs = [
  { question: 'What insights can I get from payable analytics?', answer: 'Get comprehensive insights including spend by category, vendor concentration, payment timing optimization, budget variance analysis, duplicate payment detection, and cost-saving opportunities across your entire payables portfolio.' },
  { question: 'How does the system identify savings opportunities?', answer: 'AI algorithms analyze spending patterns, vendor pricing, payment terms, and historical data to identify opportunities like vendor consolidation, early payment discounts, contract renegotiation, and duplicate payment prevention.' },
  { question: 'Can I customize the dashboards?', answer: 'Yes, create custom dashboards with drag-and-drop widgets. Choose from 50+ pre-built visualizations or create your own. Save multiple dashboard views for different stakeholders (CFO, procurement, AP team).' },
  { question: 'How often is data updated?', answer: 'Data syncs in real-time from your accounting system. Dashboards update automatically as new invoices are created and payments are made. Historical data is available for trend analysis.' },
  { question: 'Can I track budget vs actual spend?', answer: 'Yes, set budgets by category, department, or vendor. The system tracks actual spend against budgets in real-time and sends alerts when approaching or exceeding budget thresholds.' },
  { question: 'Does it integrate with my accounting software?', answer: 'Yes, we integrate with Tally, QuickBooks, Zoho Books, SAP, Oracle, and other major accounting platforms. Data syncs automatically without manual exports.' },
  { question: 'Can I export reports?', answer: 'Yes, export any report or dashboard in PDF, Excel, or CSV format. Schedule automated reports to be emailed daily, weekly, or monthly to stakeholders.' },
  { question: 'How is vendor concentration calculated?', answer: 'The system calculates what percentage of total spend goes to each vendor. It flags high-concentration risks (e.g., >20% spend with single vendor) and suggests diversification strategies.' },
];

export default function FAQSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="fontheading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-[#53BEC2] to-[#00EF64] bg-clip-text text-transparent">Questions</span>
          </h2>
        </motion.div>
        <div className="max-w-3xl mx-auto"><FAQ faqs={faqs} /></div>
      </div>
    </section>
  );
}

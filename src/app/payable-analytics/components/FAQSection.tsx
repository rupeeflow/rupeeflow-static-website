'use client';
//test

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
  return <FAQ faqs={faqs} />;
}

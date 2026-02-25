'use client';

import { motion } from 'framer-motion';
import FAQ from '@/components/FAQ';

const faqs = [
  { question: 'How accurate are the cashflow forecasts?', answer: 'Our AI-powered forecasts achieve 94% accuracy by analyzing historical patterns, seasonal trends, and upcoming commitments. Accuracy improves over time as the system learns your business patterns.' },
  { question: 'What is a 13-week rolling forecast?', answer: 'A 13-week forecast shows projected cash inflows and outflows for the next 13 weeks. It updates weekly, always showing the next 13 weeks ahead. This gives you visibility into short-term liquidity needs.' },
  { question: 'How does scenario planning work?', answer: 'Create multiple scenarios (best case, worst case, most likely) by adjusting assumptions like collection rates, payment timing, or revenue growth. Compare scenarios side-by-side to plan for different outcomes.' },
  { question: 'What are liquidity alerts?', answer: 'Automatic notifications when cash levels drop below your defined thresholds, runway shortens to critical levels, or large payments are due. Customize alert thresholds and recipients.' },
  { question: 'How is cash runway calculated?', answer: 'Cash runway = Current Cash Balance / Monthly Burn Rate. It shows how many days/months you can operate at current spending levels before running out of cash. Updated daily based on actual cash position.' },
  { question: 'Can I track multiple bank accounts?', answer: 'Yes, connect all your bank accounts and credit cards. The system consolidates balances and transactions to give you a complete view of your cash position across all accounts.' },
  { question: 'Does it integrate with accounting software?', answer: 'Yes, we integrate with Tally, QuickBooks, Zoho Books, and other major platforms. Cash data syncs automatically from your accounting system and bank feeds.' },
  { question: 'How do I optimize working capital?', answer: 'The system analyzes your receivables, payables, and inventory to identify opportunities like accelerating collections, extending payment terms, or reducing inventory levels to free up cash.' },
];

export default function FAQSection() {
  return <FAQ faqs={faqs} />;
}

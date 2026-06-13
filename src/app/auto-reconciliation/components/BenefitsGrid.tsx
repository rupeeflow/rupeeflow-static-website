'use client';

import { motion } from 'framer-motion';
import { Link2, Building2, Brain, AlertCircle, FileCheck, Activity } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';

const benefits = [
  {
    icon: Link2,
    title: 'Auto Payment Matching',
    description: 'AI algorithms automatically match bank transactions with invoices and payments in seconds',
  },
  {
    icon: Building2,
    title: 'Multi-Bank Support',
    description: 'Connect multiple bank accounts and reconcile all transactions from a single dashboard',
  },
  {
    icon: Brain,
    title: 'Smart Algorithms',
    description: 'Machine learning improves matching accuracy over time by learning your transaction patterns',
  },
  {
    icon: AlertCircle,
    title: 'Exception Handling',
    description: 'Automatically flag unmatched transactions and suggest potential matches for review',
  },
  {
    icon: FileCheck,
    title: 'Complete Audit Trail',
    description: 'Maintain detailed logs of all reconciliation activities for compliance and auditing',
  },
  {
    icon: Activity,
    title: 'Real-time Status',
    description: 'Monitor reconciliation progress in real-time with live updates and notifications',
  },
];

export default function BenefitsGrid() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="fontheading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Powerful{' '}
            <span className="bg-gradient-to-r from-[#53BEC2] to-[#00EF64] bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="fontbody2 text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to automate bank reconciliation and close books faster
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-[var(--card)] rounded-2xl p-6 md:p-8 border-2 border-gray-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4 shadow-lg">
                  <Icon className="w-7 h-7 text-[var(--foreground)]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="fontbody2 text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

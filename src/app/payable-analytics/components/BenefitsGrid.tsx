'use client';
//test

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BarChart3, PieChart, Target, TrendingDown, Calendar, AlertTriangle } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';

const benefits = [
  {
    icon: BarChart3,
    title: 'Real-time Dashboard',
    description: 'Interactive dashboards with drill-down capabilities for detailed spend analysis',
  },
  {
    icon: PieChart,
    title: 'Category Analysis',
    description: 'Break down spending by category, department, vendor, or custom dimensions',
  },
  {
    icon: Target,
    title: 'Vendor Concentration',
    description: 'Identify vendor concentration risks and diversification opportunities',
  },
  {
    icon: TrendingDown,
    title: 'Payment Optimization',
    description: 'Optimize payment timing to maximize cash flow and capture discounts',
  },
  {
    icon: Calendar,
    title: 'Budget Tracking',
    description: 'Compare actual spend against budgets with variance analysis and alerts',
  },
  {
    icon: AlertTriangle,
    title: 'Savings Identification',
    description: 'Automatically identify cost-saving opportunities and spending anomalies',
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
              Analytics
            </span>
          </h2>
          <p className="fontbody2 text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive tools to understand and optimize your spending
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

        {/* Feature Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <Image
            src="/payable-receivable/7.jpeg"
            alt="Analytics Dashboard"
            width={900}
            height={350}
            className="rounded-3xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}

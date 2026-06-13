'use client';

import { motion } from 'framer-motion';
import { Activity, Calendar, GitBranch, Bell, TrendingUp, Gauge } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';

const benefits = [
  { icon: Activity, title: 'Real-time Dashboard', description: 'Monitor cash position, inflows, and outflows in real-time with live updates' },
  { icon: Calendar, title: '13-Week Forecasting', description: 'Rolling 13-week cash forecasts with scenario planning and what-if analysis' },
  { icon: GitBranch, title: 'Scenario Planning', description: 'Model different scenarios (best case, worst case, most likely) for better planning' },
  { icon: Bell, title: 'Liquidity Alerts', description: 'Automatic alerts when cash levels drop below thresholds or runway shortens' },
  { icon: TrendingUp, title: 'Working Capital Optimization', description: 'Optimize working capital by balancing receivables, payables, and inventory' },
  { icon: Gauge, title: 'Cash Runway Tracking', description: 'Know exactly how many days of cash you have at current burn rate' },
];

export default function BenefitsGrid() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="fontheading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Complete{' '}
            <span className="bg-gradient-to-r from-[#53BEC2] to-[#00EF64] bg-clip-text text-transparent">Visibility</span>
          </h2>
          <p className="fontbody2 text-lg text-gray-600 max-w-2xl mx-auto">Everything you need to manage cashflow and liquidity</p>
        </motion.div>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div key={index} variants={staggerItem} whileHover={{ y: -8, transition: { duration: 0.2 } }} className="bg-[var(--card)] rounded-2xl p-6 md:p-8 border-2 border-gray-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300">
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

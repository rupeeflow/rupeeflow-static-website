'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Link2, Activity, Eye, Lightbulb, Calendar } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';

const steps = [
  { icon: Link2, title: 'Connect Systems', description: 'Integrate with accounting, banking, and ERP systems' },
  { icon: Activity, title: 'Track Cash Flows', description: 'Monitor all inflows and outflows in real-time' },
  { icon: Eye, title: 'View Position', description: 'See current cash position and projected balances' },
  { icon: Lightbulb, title: 'Get Forecasts', description: 'Receive 13-week rolling forecasts with scenarios' },
  { icon: Calendar, title: 'Plan for Needs', description: 'Identify funding needs and optimize timing' },
];

export default function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24 bg-[var(--card)]">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="fontheading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How It{' '}
            <span className="bg-gradient-to-r from-[#53BEC2] to-[#00EF64] bg-clip-text text-transparent">Works</span>
          </h2>
        </motion.div>

        {/* Feature Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 rounded-2xl overflow-hidden"
        >
          <Image
            src="/payable-receivable/6.jpeg"
            alt="Cashflow Forecasting Process"
            width={800}
            height={320}
            className="w-full rounded-2xl shadow-lg"
          />
        </motion.div>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative">
          <div className="hidden lg:block">
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200" />
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div key={index} variants={staggerItem} className="relative text-center">
                    <div className="relative z-10 w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-[var(--foreground)] font-bold text-xl shadow-lg">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="fontbody2 text-sm text-gray-600">{step.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div key={index} variants={staggerItem} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-[var(--foreground)] font-bold shadow-lg">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                    <p className="fontbody2 text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';
//test

import { motion } from 'framer-motion';
import { Link2, BarChart3, Eye, Lightbulb, TrendingUp } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';

const steps = [
  { icon: Link2, title: 'Connect System', description: 'Integrate with your accounting and ERP systems' },
  { icon: BarChart3, title: 'Analyze Payables', description: 'AI analyzes spending patterns and trends' },
  { icon: Eye, title: 'View Dashboards', description: 'Access real-time dashboards and reports' },
  { icon: Lightbulb, title: 'Get Recommendations', description: 'Receive actionable cost-saving insights' },
  { icon: TrendingUp, title: 'Track Savings', description: 'Monitor implemented savings and ROI' },
];

export default function HowItWorksSection() {
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
            How It{' '}
            <span className="bg-gradient-to-r from-[#53BEC2] to-[#00EF64] bg-clip-text text-transparent">
              Works
            </span>
          </h2>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative">
          <div className="hidden lg:block">
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200" />
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div key={index} variants={staggerItem} className="relative text-center">
                    <div className="relative z-10 w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
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
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold shadow-lg">
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

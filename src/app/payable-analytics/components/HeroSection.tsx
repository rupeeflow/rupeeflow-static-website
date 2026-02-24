'use client';
//test

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, PieChart } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] bg-[#020506] text-white overflow-hidden flex items-center">
      {/* Animated wave background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 Q 25 25, 50 50 T 100 50" stroke="#10b981" fill="none" strokeWidth="2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 backdrop-blur-sm rounded-full mb-6">
              <PieChart className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-400">98% Visibility • 8% Savings</span>
            </div>

            <h1 className="fontheading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Payable Analytics &{' '}
              <span className="bg-gradient-to-r from-[#53BEC2] to-[#00EF64] bg-clip-text text-transparent">
                Spend Intelligence
              </span>
            </h1>

            <p className="fontbody2 text-xl text-gray-300 mb-8 leading-relaxed">
              Gain complete visibility into spending patterns, identify cost-saving opportunities, and optimize your payables with data-driven insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-200 inline-flex items-center justify-center gap-2"
              >
                Start Analyzing
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/demo"
                className="px-8 py-4 border-2 border-emerald-500/50 text-white font-semibold rounded-xl hover:bg-emerald-500/10 hover:border-emerald-500 transition-all duration-200"
              >
                View Dashboard
              </Link>
            </div>

            <div className="flex flex-wrap gap-6">
              {['Real-time dashboards', 'Spend categorization', 'Savings identification'].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right visual - Spend breakdown chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border-2 border-emerald-500/30 shadow-2xl">
              <h3 className="font-bold text-lg mb-6">Spend Breakdown</h3>
              
              {/* Spend categories */}
              <div className="space-y-4">
                {[
                  { category: 'Inventory', amount: 450000, percentage: 45, color: 'blue' },
                  { category: 'Services', amount: 300000, percentage: 30, color: 'emerald' },
                  { category: 'Operations', amount: 150000, percentage: 15, color: 'purple' },
                  { category: 'Others', amount: 100000, percentage: 10, color: 'yellow' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{item.category}</span>
                      <span className="text-sm text-gray-400">₹{item.amount.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-3 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.percentage}%` }}
                          transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                          className={`h-full bg-gradient-to-r from-${item.color}-500 to-${item.color}-400`}
                        />
                      </div>
                      <span className="text-sm font-bold text-emerald-400 w-12 text-right">{item.percentage}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Total */}
              <div className="mt-6 pt-6 border-t border-gray-700">
                <div className="flex items-center justify-between">
                  <span className="font-bold">Total Monthly Spend</span>
                  <span className="text-2xl font-bold text-emerald-400">₹10L</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

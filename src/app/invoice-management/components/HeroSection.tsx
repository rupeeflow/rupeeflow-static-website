'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, FileText } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] bg-[#020506] text-white overflow-hidden flex items-center">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(45deg, #10b981 25%, transparent 25%), linear-gradient(-45deg, #10b981 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #10b981 75%), linear-gradient(-45deg, transparent 75%, #10b981 75%)',
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
        }} />
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
              <FileText className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-400">Real-time Tracking • Automated Workflows</span>
            </div>

            <h1 className="fontheading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Centralized Invoice{' '}
              <span className="bg-gradient-to-r from-[#53BEC2] to-[#00EF64] bg-clip-text text-transparent">
                Management
              </span>{' '}
              System
            </h1>

            <p className="fontbody2 text-xl text-gray-300 mb-8 leading-relaxed">
              Streamline invoice approvals, track payment status, and maintain complete visibility across your entire payables workflow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-200 inline-flex items-center justify-center gap-2"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/demo"
                className="px-8 py-4 border-2 border-emerald-500/50 text-white font-semibold rounded-xl hover:bg-emerald-500/10 hover:border-emerald-500 transition-all duration-200"
              >
                See Demo
              </Link>
            </div>

            <div className="flex flex-wrap gap-6">
              {['Multi-level approvals', 'Vendor portal', 'Complete audit trail'].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right visual - Invoice workflow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border-2 border-emerald-500/30 shadow-2xl">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-700">
                  <h3 className="font-bold text-lg">Invoice Workflow</h3>
                  <div className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                    3 Pending
                  </div>
                </div>

                {/* Invoice cards with approval stages */}
                {[
                  { stage: 'Pending Review', color: 'yellow', invoice: 'INV-2024-001' },
                  { stage: 'Manager Approved', color: 'blue', invoice: 'INV-2024-002' },
                  { stage: 'Payment Scheduled', color: 'emerald', invoice: 'INV-2024-003' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.2 }}
                    className="p-4 bg-gray-800/50 rounded-lg border border-gray-700"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-medium">{item.invoice}</p>
                      <div className={`px-2 py-1 bg-${item.color}-500/20 text-${item.color}-400 text-xs rounded-full`}>
                        {item.stage}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(i + 1) * 33}%` }}
                          transition={{ delay: 0.8 + i * 0.2, duration: 0.5 }}
                          className={`h-full bg-gradient-to-r from-${item.color}-500 to-${item.color}-400`}
                        />
                      </div>
                      <span className="text-xs text-gray-400">{(i + 1) * 33}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

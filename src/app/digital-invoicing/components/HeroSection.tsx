'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, FileText, Shield, Zap } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

export default function HeroSection() {
  return (
    <section className="relative bg-[#020506] text-white overflow-hidden py-20 md:py-28">
      {/* Animated background with grid pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98120_1px,transparent_1px),linear-gradient(to_bottom,#10b98120_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeInUp}
            className="space-y-8"
          >
            {/* Badge with pulse animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full"
            >
              <Shield className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-400">
                GST Compliant • Instant Generation
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="fontheading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Generate GST-Compliant{' '}
              <span className="bg-gradient-to-r from-[#53BEC2] to-[#00EF64] bg-clip-text text-transparent">
                E-Invoices
              </span>
            </h1>

            {/* Description */}
            <p className="fontbody2 text-lg md:text-xl text-gray-300 leading-relaxed">
              Create, send, and track professional invoices in seconds. Fully GST-compliant with
              automatic e-invoice generation and IRP integration.
            </p>

            {/* Trust indicators with icons */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, text: '100% GST Compliant' },
                { icon: Zap, text: 'Instant IRP Integration' },
                { icon: FileText, text: 'Auto E-way Bills' },
                { icon: Check, text: 'Digital Signatures' },
              ].map((indicator, idx) => {
                const Icon = indicator.icon;
                return (
                  <div key={idx} className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="text-sm text-gray-300">{indicator.text}</span>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-200 text-center"
              >
                Start Free Trial
              </Link>
              <Link
                href="/demo"
                className="px-8 py-4 border-2 border-emerald-500/50 text-white font-semibold rounded-xl hover:bg-emerald-500/10 hover:border-emerald-500 transition-all duration-200 text-center"
              >
                See Demo
              </Link>
            </motion.div>
          </motion.div>

          {/* Right side - Invoice preview mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            {/* Invoice mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-emerald-500/20">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b-2 border-gray-200">
                    <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">E-INVOICE</p>
                      <p className="text-sm font-bold text-gray-900">#INV-2024-001</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded w-3/4" />
                    <div className="h-3 bg-gray-200 rounded w-1/2" />
                  </div>

                  <div className="space-y-2 pt-4">
                    <div className="flex justify-between">
                      <div className="h-2 bg-gray-200 rounded w-1/3" />
                      <div className="h-2 bg-gray-200 rounded w-1/4" />
                    </div>
                    <div className="flex justify-between">
                      <div className="h-2 bg-gray-200 rounded w-1/3" />
                      <div className="h-2 bg-gray-200 rounded w-1/4" />
                    </div>
                  </div>

                  <div className="pt-4 border-t-2 border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-700">Total</span>
                      <span className="text-lg font-bold text-emerald-600">₹1,18,000</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-xs text-green-600 font-medium">GST Verified</span>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-4 -right-4 bg-emerald-500 text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold"
              >
                IRP Approved ✓
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

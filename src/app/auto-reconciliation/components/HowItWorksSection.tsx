'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Building2, Download, Link2, Eye, CheckCircle, Brain, FileCheck } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';

const steps = [
  {
    icon: Building2,
    title: 'Connect Banks',
    description: 'Securely link your bank accounts with read-only access',
  },
  {
    icon: Download,
    title: 'Import Statements',
    description: 'Automatically fetch bank statements or upload manually',
  },
  {
    icon: Link2,
    title: 'Auto-Match Payments',
    description: 'AI matches transactions with invoices and payments instantly',
  },
  {
    icon: Eye,
    title: 'Review Exceptions',
    description: 'Quickly review and resolve unmatched transactions',
  },
  {
    icon: CheckCircle,
    title: 'Finalize Reconciliation',
    description: 'Approve and close your books with complete audit trail',
  },
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
          <p className="fontbody2 text-lg text-gray-600 max-w-2xl mx-auto">
            Reconcile your accounts in 5 simple steps
          </p>
        </motion.div>

        {/* Feature Image with Unique Animations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 relative"
        >
          <div className="relative w-full max-w-[900px] mx-auto">
            <Image
              src="/payable-receivable/5.jpeg"
              alt="Reconciliation Process Flow"
              width={800}
              height={320}
              className="w-full rounded-2xl shadow-2xl"
            />

            {/* Animated Transaction Matching Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              {/* Left to Right Matching Line 1 */}
              <motion.path
                d="M 15% 30% Q 50% 25% 85% 35%"
                stroke="#10b981"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.8 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
              />
              {/* Left to Right Matching Line 2 */}
              <motion.path
                d="M 15% 50% Q 50% 55% 85% 50%"
                stroke="#3b82f6"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.8 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 1, repeat: Infinity, repeatDelay: 3 }}
              />
              {/* Left to Right Matching Line 3 */}
              <motion.path
                d="M 15% 70% Q 50% 75% 85% 65%"
                stroke="#8b5cf6"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.8 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 1.5, repeat: Infinity, repeatDelay: 3 }}
              />
            </svg>

            {/* Left Side - Bank Transactions Card */}
            <motion.div
              initial={{ x: -100, opacity: 0, scale: 0.8 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
              className="absolute left-[2%] top-[15%] w-48 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border-2 border-blue-100 p-3 hidden lg:block"
              style={{ zIndex: 2 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">Bank Statement</p>
                  <p className="text-[10px] text-gray-500">HDFC Bank</p>
                </div>
              </div>

              {/* Transaction Items */}
              <div className="space-y-2">
                {[
                  { amount: '₹45,000', status: 'matching', delay: 0.5 },
                  { amount: '₹1,20,000', status: 'matching', delay: 1 },
                  { amount: '₹80,000', status: 'matching', delay: 1.5 },
                ].map((txn, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: txn.delay, duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                    className="flex items-center justify-between p-2 bg-blue-50 rounded-lg border border-blue-100"
                  >
                    <div className="flex items-center gap-1">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.3, 1],
                          backgroundColor: ['#3b82f6', '#10b981', '#3b82f6']
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: txn.delay }}
                        className="w-1.5 h-1.5 rounded-full"
                      />
                      <span className="text-[10px] text-gray-700">Credit</span>
                    </div>
                    <span className="text-xs font-bold text-gray-900">{txn.amount}</span>
                  </motion.div>
                ))}
              </div>

              {/* Status Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
                className="mt-3 flex items-center gap-1 text-[10px] text-blue-600 font-semibold"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-3 h-3 border-2 border-blue-600 border-t-transparent rounded-full"
                />
                <span>Matching...</span>
              </motion.div>
            </motion.div>

            {/* Right Side - Invoice/Payment Records Card */}
            <motion.div
              initial={{ x: 100, opacity: 0, scale: 0.8 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
              className="absolute right-[2%] top-[15%] w-52 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border-2 border-emerald-100 p-3 hidden lg:block"
              style={{ zIndex: 2 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <FileCheck className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">Payment Records</p>
                  <p className="text-[10px] text-gray-500">Invoices & Receipts</p>
                </div>
              </div>

              {/* Invoice Items */}
              <div className="space-y-2">
                {[
                  { id: 'INV-001', amount: '₹45,000', matched: true, delay: 1 },
                  { id: 'INV-002', amount: '₹1,20,000', matched: true, delay: 1.5 },
                  { id: 'INV-003', amount: '₹80,000', matched: true, delay: 2 },
                ].map((inv, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: inv.delay, duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                    className="p-2 bg-emerald-50 rounded-lg border border-emerald-100"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] text-gray-600">{inv.id}</span>
                      {inv.matched && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: inv.delay + 0.5, type: "spring" }}
                        >
                          <CheckCircle className="w-3 h-3 text-emerald-600" />
                        </motion.div>
                      )}
                    </div>
                    <span className="text-xs font-bold text-gray-900">{inv.amount}</span>
                  </motion.div>
                ))}
              </div>

              {/* Match Status */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.5, duration: 0.5 }}
                className="mt-3 flex items-center gap-1 p-2 bg-emerald-100 rounded-lg"
              >
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span className="text-[10px] text-emerald-700 font-bold">3 Matched</span>
              </motion.div>
            </motion.div>

            {/* Bottom - Success Stats */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute bottom-[5%] left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-4 bg-white/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-2xl border-2 border-emerald-100"
              style={{ zIndex: 2 }}
            >
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-emerald-500"
                />
                <div>
                  <p className="text-xs font-bold text-gray-900">99.9% Accuracy</p>
                  <p className="text-[10px] text-gray-500">Auto-matched</p>
                </div>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="w-2 h-2 rounded-full bg-blue-500"
                />
                <div>
                  <p className="text-xs font-bold text-gray-900">5 Minutes</p>
                  <p className="text-[10px] text-gray-500">Avg. time</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Desktop: Horizontal layout with connecting line */}
          <div className="hidden lg:block">
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200" />
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="relative text-center"
                  >
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

          {/* Mobile/Tablet: Vertical layout */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="flex gap-4"
                >
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

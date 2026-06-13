'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ReconciliationVisual() {
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
            See It In{' '}
            <span className="bg-gradient-to-r from-[#53BEC2] to-[#00EF64] bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="fontbody2 text-lg text-gray-600 max-w-2xl mx-auto">
            Watch how transactions are matched automatically in real-time
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            {/* Bank Transactions */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[var(--card)] rounded-2xl p-6 border-2 border-blue-200"
            >
              <h3 className="font-bold text-lg mb-4 text-blue-600">Bank Transactions</h3>
              <div className="space-y-3">
                {[
                  { id: 'TXN001', amount: 25000, date: '24 Feb' },
                  { id: 'TXN002', amount: 15000, date: '23 Feb' },
                  { id: 'TXN003', amount: 35000, date: '22 Feb' },
                ].map((txn, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="p-3 bg-blue-50 rounded-lg border border-blue-100"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs text-gray-500">{txn.id}</p>
                        <p className="text-sm font-semibold">₹{txn.amount.toLocaleString()}</p>
                      </div>
                      <p className="text-xs text-gray-500">{txn.date}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Matching Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center justify-center py-8"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    x: [0, 20, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <ArrowRight className="w-12 h-12 text-emerald-500" />
                </motion.div>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center"
                >
                  <CheckCircle2 className="w-4 h-4 text-[var(--foreground)]" />
                </motion.div>
              </div>
              <p className="text-sm font-semibold text-emerald-600 mt-4">Auto-Matching</p>
              <p className="text-xs text-gray-500 text-center mt-1">AI-powered<br />in seconds</p>
            </motion.div>

            {/* Invoices */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[var(--card)] rounded-2xl p-6 border-2 border-emerald-200"
            >
              <h3 className="font-bold text-lg mb-4 text-emerald-600">Invoices</h3>
              <div className="space-y-3">
                {[
                  { id: 'INV-1001', amount: 25000, status: 'Matched' },
                  { id: 'INV-1002', amount: 15000, status: 'Matched' },
                  { id: 'INV-1003', amount: 35000, status: 'Matched' },
                ].map((inv, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="p-3 bg-emerald-50 rounded-lg border border-emerald-100"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs text-gray-500">{inv.id}</p>
                        <p className="text-sm font-semibold">₹{inv.amount.toLocaleString()}</p>
                      </div>
                      <div className="px-2 py-1 bg-emerald-500 text-[var(--foreground)] text-xs rounded-full">
                        {inv.status}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Zap } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] bg-white text-white overflow-hidden flex items-center">
      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
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
              <Zap className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-400">
                99.9% Accuracy • 85% Time Saved
              </span>
            </div>

            <h1 className="fontheading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Automate Bank{' '}
              <span className="text-emerald-500">Reconciliation</span> in
              Minutes
            </h1>

            <p className="fontbody2 text-xl text-gray-300 mb-8 leading-relaxed">
              Match thousands of transactions automatically with AI-powered
              algorithms. Eliminate manual reconciliation and close books 10x
              faster.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-200 inline-flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/demo"
                className="px-8 py-4 border-2 border-emerald-500/50 text-white font-semibold rounded-xl hover:bg-emerald-500/10 hover:border-emerald-500 transition-all duration-200"
              >
                Watch Demo
              </Link>
            </div>

            <div className="flex flex-wrap gap-6">
              {[
                'Multi-bank support',
                'Smart matching',
                'Exception handling',
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right visual - Reconciliation mockup */}
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
                  <h3 className="font-bold text-lg">
                    Reconciliation Dashboard
                  </h3>
                  <div className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full">
                    Live
                  </div>
                </div>

                {/* Matched transactions */}
                {[1, 2, 3].map(i => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.2 }}
                    className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-emerald-500/20"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                      <div>
                        <p className="text-sm font-medium">
                          Transaction #{1000 + i}
                        </p>
                        <p className="text-xs text-gray-400">
                          Matched automatically
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-emerald-400">
                        ₹{(25000 + i * 5000).toLocaleString()}
                      </p>
                      <p className="text-xs text-gray-400">Verified</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

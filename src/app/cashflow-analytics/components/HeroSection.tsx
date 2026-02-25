'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Activity } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] bg-[#020506] text-white overflow-hidden flex items-center">
      {/* Animated flowing lines background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent"
            style={{
              width: '200%',
              top: `${i * 10}%`,
              left: '-50%',
            }}
            animate={{
              x: ['0%', '50%'],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
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
              <Activity className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-400">94% Accuracy • Real-time Tracking</span>
            </div>

            <h1 className="fontheading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Cashflow Forecasting &{' '}
              <span className="text-emerald-500">
                Liquidity
              </span>{' '}
              Management
            </h1>

            <p className="fontbody2 text-xl text-gray-300 mb-8 leading-relaxed">
              Predict cash positions with 94% accuracy, plan for liquidity needs, and never run out of cash with intelligent forecasting.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-200 inline-flex items-center justify-center gap-2"
              >
                Start Forecasting
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
              {['13-week forecasting', 'Scenario planning', 'Liquidity alerts'].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right visual - Cashflow chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border-2 border-emerald-500/30 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg">13-Week Forecast</h3>
                <div className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full">
                  94% Accurate
                </div>
              </div>

              {/* Simple line chart visualization */}
              <div className="relative h-48">
                <svg className="w-full h-full" viewBox="0 0 400 150">
                  {/* Grid lines */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <line
                      key={i}
                      x1="0"
                      y1={i * 37.5}
                      x2="400"
                      y2={i * 37.5}
                      stroke="#374151"
                      strokeWidth="1"
                      opacity="0.3"
                    />
                  ))}

                  {/* Cashflow line */}
                  <motion.path
                    d="M 0 100 Q 50 80, 100 90 T 200 70 T 300 60 T 400 50"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                  />

                  {/* Gradient definition */}
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#14b8a6" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Labels */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-400">
                  <span>Week 1</span>
                  <span>Week 7</span>
                  <span>Week 13</span>
                </div>
              </div>

              {/* Key metrics */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-700">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Current</p>
                  <p className="text-lg font-bold text-emerald-400">₹25L</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Projected</p>
                  <p className="text-lg font-bold text-blue-400">₹32L</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Runway</p>
                  <p className="text-lg font-bold text-purple-400">90 days</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

'use client';
//test

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BarChart3, TrendingUp, Eye, Brain } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#020506] via-gray-900 to-emerald-950 text-white overflow-hidden py-20 md:py-28">
      {/* Animated dots background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
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
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full"
            >
              <Brain className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-400">
                Real-time Insights • Predictive Analytics
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="fontheading text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Collection Analytics &{' '}
              <span className="text-emerald-500">
                Insights Dashboard
              </span>
            </h1>

            {/* Description */}
            <p className="fontbody2 text-lg md:text-xl text-gray-300 leading-relaxed">
              Real-time analytics on collection performance, customer payment behavior, and cash
              flow forecasting. Make data-driven decisions with AI-powered insights.
            </p>

            {/* Key features */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: BarChart3, text: 'Real-time Dashboards', color: 'blue' },
                { icon: TrendingUp, text: 'DSO Tracking', color: 'emerald' },
                { icon: Eye, text: 'Risk Identification', color: 'red' },
                { icon: Brain, text: 'AI Predictions', color: 'purple' },
              ].map((feature, idx) => {
                const Icon = feature.icon;
                const colorClasses = {
                  blue: 'bg-blue-500/20 text-blue-400',
                  emerald: 'bg-emerald-500/20 text-emerald-400',
                  red: 'bg-red-500/20 text-red-400',
                  purple: 'bg-purple-500/20 text-purple-400',
                };
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                    className="flex items-center gap-3 bg-white/5 rounded-lg p-3"
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${colorClasses[feature.color as keyof typeof colorClasses]}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm text-gray-300">{feature.text}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-200 text-center"
              >
                View Live Demo
              </Link>
              <Link
                href="/demo"
                className="px-8 py-4 border-2 border-emerald-500/50 text-white font-semibold rounded-xl hover:bg-emerald-500/10 hover:border-emerald-500 transition-all duration-200 text-center"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>

          {/* Right side - Dashboard preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            {/* Dashboard mockup placeholder */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 border-4 border-emerald-500/20">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b-2 border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Analytics Dashboard</p>
                      <p className="text-xs text-gray-500">Real-time insights</p>
                    </div>
                  </div>
                </div>

                {/* Chart placeholder */}
                <div className="h-40 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg flex items-end justify-around p-4 gap-2">
                  {[60, 80, 45, 90, 70, 85, 95].map((height, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: 0.8 + idx * 0.1, duration: 0.5 }}
                      className="flex-1 bg-gradient-to-t from-emerald-500 to-teal-400 rounded-t"
                    />
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'DSO', value: '32', trend: '↓ 15%' },
                    { label: 'Collection', value: '85%', trend: '↑ 12%' },
                    { label: 'At Risk', value: '8', trend: '↓ 3' },
                  ].map((metric, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-lg p-3">
                      <p className="text-xs text-gray-500">{metric.label}</p>
                      <p className="text-lg font-bold text-gray-900">{metric.value}</p>
                      <p className="text-xs text-emerald-600">{metric.trend}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating insight card */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -bottom-6 -left-6 bg-emerald-500 text-white px-4 py-3 rounded-xl shadow-xl max-w-xs"
            >
              <p className="text-sm font-semibold">💡 Insight</p>
              <p className="text-xs mt-1">3 customers likely to delay payment</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

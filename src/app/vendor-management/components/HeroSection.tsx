'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Users } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] bg-[#020506] text-white overflow-hidden flex items-center">
      {/* Animated circles background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border-2 border-emerald-500"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: 'easeInOut',
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
              <Users className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-400">2% Discounts • 95% Satisfaction</span>
            </div>

            <h1 className="fontheading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Vendor Management &{' '}
              <span className="bg-gradient-to-r from-[#53BEC2] to-[#00EF64] bg-clip-text text-transparent">
                Relationship
              </span>{' '}
              Optimization
            </h1>

            <p className="fontbody2 text-xl text-gray-300 mb-8 leading-relaxed">
              Build stronger vendor relationships, capture early payment discounts, and streamline onboarding with centralized vendor management.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-200 inline-flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/demo"
                className="px-8 py-4 border-2 border-emerald-500/50 text-white font-semibold rounded-xl hover:bg-emerald-500/10 hover:border-emerald-500 transition-all duration-200"
              >
                View Demo
              </Link>
            </div>

            <div className="flex flex-wrap gap-6">
              {['Centralized database', 'Performance tracking', 'Discount capture'].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right visual - Vendor cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Vendor A', score: 95, status: 'Excellent', color: 'emerald' },
                { name: 'Vendor B', score: 88, status: 'Good', color: 'blue' },
                { name: 'Vendor C', score: 92, status: 'Excellent', color: 'emerald' },
                { name: 'Vendor D', score: 78, status: 'Fair', color: 'yellow' },
              ].map((vendor, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border-2 border-emerald-500/30 shadow-xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold">
                      {vendor.name.charAt(vendor.name.length - 1)}
                    </div>
                    <div className={`px-2 py-1 bg-${vendor.color}-500/20 text-${vendor.color}-400 text-xs rounded-full`}>
                      {vendor.status}
                    </div>
                  </div>
                  <h3 className="font-bold mb-2">{vendor.name}</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${vendor.score}%` }}
                        transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                        className={`h-full bg-gradient-to-r from-${vendor.color}-500 to-${vendor.color}-400`}
                      />
                    </div>
                    <span className="text-sm font-bold text-emerald-400">{vendor.score}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

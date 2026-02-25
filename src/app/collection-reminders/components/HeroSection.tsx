'use client';
//test

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, Bell, MessageSquare, Mail } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

export default function HeroSection() {
  return (
    <section className="relative bg-[#020506] text-white overflow-hidden py-20 md:py-28">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
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
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-emerald-400">
                24hr Automation • 99% Delivery Rate
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="fontheading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Automate Payment Reminders & Boost{' '}
              <span className="text-emerald-500">
                Collection Rates
              </span>
            </h1>

            {/* Description */}
            <p className="fontbody2 text-lg md:text-xl text-gray-300 leading-relaxed">
              Send smart, automated reminders via SMS, email, and WhatsApp. Improve collection
              rates by 35% and reduce DSO by 15 days.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4">
              {['RBI Compliant', '100% Secure', 'Bank-Grade Encryption'].map((indicator) => (
                <div key={indicator} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-emerald-400" />
                  </div>
                  <span className="text-sm text-gray-400">{indicator}</span>
                </div>
              ))}
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
                Watch Demo
              </Link>
            </motion.div>
          </motion.div>

          {/* Right side - Reminder Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border-2 border-emerald-500/30 shadow-2xl">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-700">
                  <h3 className="font-bold text-lg">Reminder Dashboard</h3>
                  <div className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full">
                    Active
                  </div>
                </div>

                {/* Reminder cards */}
                {[
                  { icon: MessageSquare, channel: 'WhatsApp', status: 'Sent', amount: '₹50,000', color: 'emerald' },
                  { icon: Mail, channel: 'Email', status: 'Delivered', amount: '₹35,000', color: 'blue' },
                  { icon: Bell, channel: 'SMS', status: 'Pending', amount: '₹25,000', color: 'purple' },
                ].map((reminder, i) => {
                  const Icon = reminder.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.2 }}
                      className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-emerald-500/20"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-${reminder.color}-500/20 flex items-center justify-center`}>
                          <Icon className={`w-5 h-5 text-${reminder.color}-400`} />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{reminder.channel} Reminder</p>
                          <p className="text-xs text-gray-400">{reminder.status}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-emerald-400">{reminder.amount}</p>
                        <p className="text-xs text-gray-400">Invoice</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Floating notification elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-10 -left-10 bg-white rounded-xl shadow-xl p-4 max-w-xs"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Payment Reminder Sent</p>
                  <p className="text-xs text-gray-600 mt-1">Invoice #1234 - ₹50,000</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
              className="absolute bottom-10 -right-10 bg-white rounded-xl shadow-xl p-4 max-w-xs"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Payment Received</p>
                  <p className="text-xs text-gray-600 mt-1">₹50,000 credited</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

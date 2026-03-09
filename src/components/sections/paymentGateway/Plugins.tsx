'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Code, Globe, Shield, Zap } from 'lucide-react'
import React from 'react'

export default function Plugins() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 mb-4">
            Developers
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Built for Teams That
            <br className="hidden md:block" />
            <span className="text-emerald-500">Ship Faster</span>
          </h2>

          <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto">
            Integrate payments with predictable APIs, clear workflows,
            and infrastructure designed for reliability at scale.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-8 sm:mt-12 lg:mt-16 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* LEFT VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-6 border border-emerald-200">

              <Image
                src="/home/plugin-girl.png"
                alt="Developer Integration"
                width={280}
                height={320}
                className="mx-auto rounded-2xl"
                priority
              />

              {/* floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-4 -right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
              >
                24/7 Support
              </motion.div>

              {/* stats */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="bg-white rounded-lg p-3 text-center border border-emerald-200">
                  <div className="text-lg font-bold text-emerald-600">99.9%</div>
                  <div className="text-xs text-gray-600">Uptime</div>
                </div>
                <div className="bg-white rounded-lg p-3 text-center border border-emerald-200">
                  <div className="text-lg font-bold text-emerald-600">&lt;2s</div>
                  <div className="text-xs text-gray-600">Response</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="max-w-xl">

              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Designed for Real Engineering Workflows
              </h3>

              <p className="text-gray-600 mt-4 text-lg">
                From first API call to production traffic, everything is built
                to reduce surprises, shorten debugging time, and keep systems stable.
              </p>

              {/* Feature Rows */}
              <div className="mt-6 sm:mt-8 lg:mt-10 space-y-6 sm:space-y-8">

                <FeatureRow
                  icon={<Code />}
                  title="Clean Integrations That Stay Maintainable"
                  desc="Consistent request patterns and predictable responses keep your codebase easy to extend and refactor."
                />

                <FeatureRow
                  icon={<Zap />}
                  title="Performance That Holds Under Load"
                  desc="Optimized processing and resilient infrastructure ensure stable transaction flow during peak demand."
                />

                <FeatureRow
                  icon={<Globe />}
                  title="Docs Focused on Real Implementation"
                  desc="Concrete examples, payload references, and error insights help teams debug faster and deploy sooner."
                />

                <FeatureRow
                  icon={<Shield />}
                  title="Test Flows Before Production Traffic"
                  desc="Validate logic and edge cases in a safe environment that mirrors real payment behavior."
                />

              </div>

              {/* CTA */}
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 sm:mt-10 lg:mt-12 flex items-center gap-3 border-2 border-emerald-500 text-emerald-600 font-semibold px-7 py-3 rounded-xl hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-sm"
              >
                Start Building →
              </motion.button> */}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}


/* Feature Row Component */

type FeatureRowProps = {
  icon: React.ReactNode
  title: string
  desc: string
}

function FeatureRow({ icon, title, desc }: FeatureRowProps) {
  return (
    <div className="flex gap-3 sm:gap-4">
      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-emerald-500 flex items-center justify-center text-emerald-600">
        {icon}
      </div>
      <div>
        <h4 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">
          {title}
        </h4>
        <p className="text-gray-600 mt-1 text-sm sm:text-base">
          {desc}
        </p>
      </div>
    </div>
  )
}
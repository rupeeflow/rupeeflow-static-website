'use client'

import { Mic, AudioLines } from 'lucide-react'
import { motion } from 'framer-motion'

export default function LanguageSection() {
  return (
    <section className="relative w-full bg-black-emerald text-white text-center py-24 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-snug">
          Don’t Loose Your Flow, Use <br />
          <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            RupeeFlow
          </span>
        </h2>

        {/* Icon Section */}
        <div className="flex justify-center items-center  my-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <AudioLines className="w-10 h-10 md:w-14 md:h-14 text-gray-300" />
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: 'spring' }}
            viewport={{ once: true }}
          >
            <Mic
              strokeWidth={1.4}
              className="w-24 h-24 md:w-30 md:h-30 text-gray-300"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <AudioLines className="w-10 h-10 md:w-14 md:h-14 text-gray-300" />
          </motion.div>
        </div>

        {/* Tagline */}
        <p className="text-gradient-teal-emerald font-semibold mb-2 text-sm md:text-base">
          Your Voice, Your Language, Your Payments
        </p>

        {/* Subtext */}
        <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-lg">
          Supports multiple Indian regional languages for true inclusivity
        </p>
      </div>
    </section>
  )
}

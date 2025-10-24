'use client'

import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import FaqCard from '../ui/FaqCard'
import faqs from '@/data/faqs.json'

export default function FaqSupportSection() {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  return (
    <section className="py-20 px-6  bg-neutral-100 text-gray-900 relative overflow-hidden">
      {/* Decorative background gradient */}

      <div className="relative z-10 max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Frequently Asked <span className="text-emerald-600">Questions</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Everything you need to know about RupeeFlow — from cross-border UPI to
          developer tools.
        </p>

        <div className="flex justify-center mt-10">
          <Image
            src="/faq/faq-illustration.png"
            alt="FAQ illustration"
            width={320}
            height={320}
            className="rounded-2xl"
          />
        </div>
      </div>

      {/* FAQ List */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 max-w-3xl mx-auto space-y-4"
      >
        {faqs.map(faq => (
          <FaqCard key={faq.id} {...faq} />
        ))}
      </motion.div>

      {/* Ask a Question Form */}
      <div className="max-w-xl mx-auto mt-20 text-center">
        <h3 className="text-2xl font-semibold mb-4">Ask a Question</h3>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-emerald-600"
          />
          <textarea
            placeholder="Enter your question here"
            className="w-full px-4 py-3 border border-gray-300 rounded-md h-24 focus:outline-none focus:border-emerald-600"
          ></textarea>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-emerald hover:bg-emerald-700 text-white font-semibold rounded-full transition cursor-pointer"
          >
            SUBMIT →
          </button>
        </form>
      </div>
    </section>
  )
}

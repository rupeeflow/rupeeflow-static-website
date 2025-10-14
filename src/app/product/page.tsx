'use client'

import { motion } from 'framer-motion'
import CardSlider from '@/components/ui/CardSlider'
import FaqSection from '@/components/ui/FAQ'

export default function SolutionPage() {
  return (
    <section className="relative w-full min-h-screen bg-black text-white  flex flex-col items-center justify-center overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="text-center max-w-5xl mb-10"
      >
        <h1 className="text-3xl md:text-4xl  mb-6 leading-[1] mt-30">
          Innovative UPI Solutions for Every User, Business & NRI
        </h1>
        <p className="text-gray-400 text-[1rem] font-regular md:text-md max-w-2xl mx-auto leading-[1.2]">
          From AI-powered bill management to global UPI transfers, RupeeFlow is
          redefining how India pays, saves, and manages finances — all through
          one unified platform.
        </p>
      </motion.div>

      {/* Card Slider */}
      <CardSlider />

      <FaqSection />
    </section>
  )
}

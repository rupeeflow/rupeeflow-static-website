import React from 'react'
import { motion, Variants } from 'framer-motion'
import CardSlider from '@/components/ui/CardSlider'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const ProductHero = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  }

  const content: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }
  return (
    <section className="relative w-full min-h-screen bg-black text-white  flex flex-col items-center justify-center overflow-hidden">
      {/* Header */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="text-center px-5 max-w-5xl mb-10"
      >
        <motion.h1
          variants={content}
          className="text-3xl md:text-4xl  mb-6 leading-[1] mt-30"
        >
          Innovative UPI Solutions for Every User, Business & NRI
        </motion.h1>
        <motion.p
          variants={content}
          className="text-gray-400 text-[1rem]  font-regular md:text-md max-w-3xl mx-auto fontbody2"
        >
          From AI-powered bill management to global UPI transfers, RupeeFlow is
          redefining how India pays, saves, and manages finances — all through
          one unified platform.
        </motion.p>
      </motion.div>
      <div className="absolute opacity-70 top-[5%] left-[15%] w-100 h-100 bg-radial-teal-soft "></div>
      <div className="absolute opacity-70 bottom-[-10%] right-[10%] w-150 h-150 bg-radial-emerald-soft "></div>

      {/* Card Slider */}
      <CardSlider />
      {/* CTA Buttons */}
      <motion.div
        variants={content}
        className="flex flex-col sm:flex-row gap-4  mb-8 md:mb-30 relative z-20"
      >
        <Link
          href="https://rupeeflow.org/"
          target="blank"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-green-400 text-black font-semibold px-6 py-3 rounded-full transition"
        >
          Get Started <ArrowRight className="w-4 h-4" />
        </Link>

        <Link
          href="https://play.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-3 border border-emerald-700 px-4 py-2 rounded-full hover:bg-green-600/20 transition"
        >
          <Image
            src="/icons/google-play.png"
            alt="Google Play"
            width={24}
            height={24}
          />
          <span className="text-sm font-semibold text-white">
            DOWNLOAD THE APP
          </span>
        </Link>
      </motion.div>
    </section>
  )
}

export default ProductHero

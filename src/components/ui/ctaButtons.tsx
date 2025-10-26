import React from 'react'
import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const CtaButtons = () => {
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
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="w-full bg-black-emerald z-10 mx-auto gap-10 flex flex-col items-center text-center"
    >
      {/* CTA Buttons */}
      <motion.div
        variants={content}
        className="flex flex-col sm:flex-row gap-4 mb-6 relative z-20"
      >
        <Link
          href="/product"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-green-400 text-black font-semibold px-6 py-3 rounded-full transition"
        >
          Explore Solutions <ArrowRight className="w-4 h-4" />
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
    </motion.div>
  )
}

export default CtaButtons

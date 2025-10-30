'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { delay, motion, Variants } from 'framer-motion'

export default function HeroSection() {
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

  const content2: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  }

  return (
    <section className="relative w-full bg-black text-white py-30 px-6 overflow-hidden">
      {/* Background Glows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 2, duration: 0.7 }}
        className="absolute inset-0 blur-3xl top-[20%] left-[20%] w-100 h-100 bg-radial-teal-soft "
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1, duration: 0.7 }}
        className="absolute blur-3xl top-[4%] right-[20%] w-100 h-100 bg-radial-emerald-soft "
      />

      {/* Faded Background Map Image */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 z-0 top-[30%]"
      >
        <motion.div variants={content2} className="relative w-full h-full">
          <Image
            src="/images/world-pay.webp"
            alt="RupeeFlow Global Map Background"
            fill
            priority
            className="object-cover opacity-60 brightness-[0.55] [mask-image:radial-gradient(circle_at_center,white,transparent_85%)]"
          />
        </motion.div>
      </motion.div>

      {/* Foreground Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center gap-10"
      >
        {/* Heading */}
        <motion.h1
          variants={content}
          className="text-3xl md:text-5xl lg:text-[5vw] fontheading2 leading-tight"
        >
          Send Money Across Borders in <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            One Tap with UPI
          </span>
          .
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={content}
          className="text-gray-300 fontbody2 text-sm md:text-base mb-4"
        >
          Move money across borders in seconds — no queues, no paperwork, no
          hidden charges. <br className="hidden md:block" /> Just the power of
          UPI, now without boundaries.
        </motion.p>

        {/* CTA Section with Subtle Dark Background */}
        <motion.div
          variants={content}
          className="relative z-20 mb-6 rounded-full px-8 py-4 md:px-10 md:py-6"
        >
          {/* Background Blur / Overlay */}
          <div className="absolute inset-0 bg-black/50 opacity-70 backdrop-blur-2xl rounded-3xl -z-10  [mask-image:radial-gradient(circle_at_center,white,transparent_85%)]" />

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link
              href="/product"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-green-400 text-black font-semibold px-6 py-3 rounded-full transition hover:opacity-90"
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
          </div>
        </motion.div>

        {/* Subheading below */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className=" text-md md:text-lg text-gray-200 font-medium"
        >
          Manage All Your Finances in One Dashboard
        </motion.h3>
      </motion.div>
    </section>
  )
}

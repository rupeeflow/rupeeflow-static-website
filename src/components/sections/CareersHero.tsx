'use client'

import { motion, Variants } from 'framer-motion'
import { Briefcase, ArrowRight } from 'lucide-react'

export default function CareersHero() {
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

  const scrollToPositions = () => {
    const element = document.getElementById('open-positions')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-32 px-6 bg-black-emerald text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-radial-teal-soft opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-radial-emerald-soft opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div
            variants={content}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <Briefcase className="w-10 h-10 text-emerald-400" />
          </motion.div>

          <motion.h1
            variants={content}
            className="fontheading2 text-5xl md:text-6xl lg:text-7xl mb-6"
          >
            Build the Future of{' '}
            <span className="text-gradient-teal-emerald">Payments</span>
          </motion.h1>

          <motion.p
            variants={content}
            className="fontbody text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto"
          >
            Join our mission to democratize financial services across India
          </motion.p>

          <motion.p
            variants={content}
            className="fontbody2 text-gray-400 text-lg mb-12 max-w-2xl mx-auto"
          >
            We&apos;re building innovative fintech solutions that empower
            freelancers, gig workers, rural merchants, and sustainable brands.
            Be part of something meaningful.
          </motion.p>

          <motion.div
            variants={content}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={scrollToPositions}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-teal-emerald-dark hover:bg-teal-emerald text-white font-semibold transition-all transform hover:scale-105"
            >
              View Open Positions
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="#life-at-rupeeflow"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold transition-all border border-white/20"
            >
              Life at RupeeFlow
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={content}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient-teal-emerald mb-2">
                50+
              </div>
              <div className="fontbody2 text-gray-400">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient-teal-emerald mb-2">
                4
              </div>
              <div className="fontbody2 text-gray-400">Office Locations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient-teal-emerald mb-2">
                15+
              </div>
              <div className="fontbody2 text-gray-400">Open Positions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient-teal-emerald mb-2">
                25L+
              </div>
              <div className="fontbody2 text-gray-400">Users Served</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import MainCTA from '../ui/mainCTA'

export default function VisionSection() {
  // 🔹 Animation Variants
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.15 },
    },
  }

  const content: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const imageReveal: Variants = {
    hidden: {
      clipPath: 'circle(0% at 100% 50%)',
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      clipPath: 'circle(150% at 100% 50%)',
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  }

  return (
    <section className=" relative w-full  lg:h-[90vh] p-4 bg-black text-white py-12 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="relative inset-0 bg-[radial-gradient(circle_at_10%_30%,rgba(16,185,129,0.15),transparent_70%)] blur-3xl" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute top-[10%] right-[20%] w-80 h-80 bg-radial-emerald-soft rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-[10%] left-[20%] w-80 h-80 bg-radial-emerald-soft rounded-full blur-3xl"
      />
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="group p-6 lg:p-0 relative h-full w-full z-10 overflow-hidden  mx-auto rounded-2xl border border-white/10 hover:border-teal-200/70 bg-gray-600/30 flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16 transition-all duration-300 ease-in"
      >
        {/* Left Content */}
        <motion.div
          variants={content}
          className="relative flex-1 text-center md:text-left lg:pl-20 space-y-4"
        >
          <h2 className="fontheading2 text-4xl md:text-6xl leading-tight">
            Bridging borders <br /> with{' '}
            <span className="text-gradient-teal-emerald">intelligent UPI</span>
          </h2>

          <p className="fontbody2 text-emerald-400 text-lg md:text-xl">
            Fast, low-cost, and limitless.
          </p>

          <p className="fontbody2 text-gray-400 max-w-md mx-auto md:mx-0">
            RupeeFlow’s vision is to make cross-border transactions as seamless
            as UPI. With advanced switching infrastructure and AI-powered
            intelligence, we bring speed, transparency, and human simplicity to
            global money movement.
          </p>
          <motion.div
            variants={content}
            className="mt-5 w-full flex justify-center lg:justify-start"
          >
            <MainCTA label="Get Started" destination="https://rupeeflow.org/" />
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={imageReveal}
          className="flex lg:absolute rounded-5xl overflow-hidden lg:w-[50%] lg:right-0 lg:translate-x-30 group-hover:translate-x-10 transition-transform duration-400 ease-in-out"
        >
          <Image
            src="/images/vision-image.png"
            alt="RupeeFlow Vision"
            width={800}
            height={900}
            className="rounded-3xl object-cover w-full h-auto"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

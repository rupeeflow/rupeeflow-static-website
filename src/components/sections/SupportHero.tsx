'use client'

import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Mail, MessageCircle, Phone } from 'lucide-react'

export default function SupportHero() {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  }

  const card: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const content: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-32 px-6 bg-black-emerald text-white relative overflow-hidden">
      {/* subtle background glow */}

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.h2
            variants={content}
            className="text-3xl md:text-5xl lg:text-[5vw]  mb-12"
          >
            We&apos;re Here to{' '}
            <span className="text-gradient-teal-emerald ">Support You</span>
          </motion.h2>
          <motion.p variants={content} className="text-gray-300 mb-2">
            Need assistance with payments, transfers, or your RupeeFlow account?
          </motion.p>
          <motion.p variants={content} className="text-gray-400 mb-12">
            Our support team is ready 24/7 to help you stay in flow.
          </motion.p>

          {/* Contact Info */}
          <motion.div
            variants={content}
            className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12 text-sm text-gray-300"
          >
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-400" />
              support@rupeeflow.in
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-400" />
              +91 
            </div>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto"
        >
          {/* Live Chat */}
          <motion.div
            variants={card}
            className="backdrop-blur-lg  bg-neutral-600/30 rounded-3xl border border-emerald-700/40  p-6 flex flex-col items-center text-center hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all duration-300"
          >
            <Image
              src="/images/chat-support.png"
              alt="Live Chat"
              width={180}
              height={180}
              className="rounded-xl mb-6"
            />
            <h3 className="text-xl font-semibold mb-2 text-white">Live Chat</h3>
            <p className="text-gray-400 text-sm mb-6">
              Connect instantly with our support specialists via in-app chat.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-teal-emerald-dark hover:bg-teal-emerald  text-white hover:text-black font-semibold transition-all"
            >
              Start Chat <MessageCircle className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Email Support */}
          <motion.div
            variants={card}
            className="backdrop-blur-lg  bg-neutral-600/30 rounded-3xl border border-emerald-700/40  p-6 flex flex-col items-center text-center hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all duration-300"
          >
            <Image
              src="/images/email-support.png"
              alt="Email Support"
              width={180}
              height={180}
              className="rounded-xl mb-6"
            />
            <h3 className="text-xl font-semibold mb-2 text-white">
              Email Support
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Send us a detailed query and our experts will respond promptly.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-teal-emerald-dark hover:bg-teal-emerald  text-white hover:text-black font-semibold transition-all"
            >
              Send Email <Mail className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Call Support */}
          <motion.div
            variants={card}
            className="backdrop-blur-lg  bg-neutral-600/30 rounded-3xl border border-emerald-700/40  p-6 flex flex-col items-center text-center hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all duration-300"
          >
            <Image
              src="/images/call-support.png"
              alt="Call Support"
              width={180}
              height={180}
              className="rounded-xl mb-6"
            />
            <h3 className="text-xl font-semibold mb-2 text-white">
              Call Us - Toll Free
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Speak directly with a support representative anytime you need
              help.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-teal-emerald-dark hover:bg-teal-emerald  text-white hover:text-black font-semibold transition-all"
            >
              Get a Call <Phone className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

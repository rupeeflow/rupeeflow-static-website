'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import InstantSettlement from '../../../../public/icons/payment-gateway/InstantSettlement'

/* ── Stat strip data ── */
const stats = [
  { src: '/home/uptime.svg', text: '99.9% Uptime', isImg: true },
  { src: '/speed.svg', text: '< 2 Sec Processing', isImg: true },
  { Icon: InstantSettlement, text: 'Instant Settlement', isImg: false },
  { src: '/support.svg', text: '24/7 Support', isImg: true },
]

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  /* Scroll-driven 3-D tilt for dashboard */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const dashRotateX = useTransform(scrollYProgress, [0, 1], [4, -6])
  const dashY = useTransform(scrollYProgress, [0, 1], [0, 60])

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-[#020506] via-black to-black overflow-x-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.35),transparent_60%)]" />

      {/* ── Text Content ── */}
      <div className="max-w-6xl mx-auto text-center pt-36 pb-10 px-6 relative z-10">

        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 border border-emerald-500/30 rounded-full px-4 py-1.5 mb-6"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="rf-caption text-emerald-400 font-semibold">India&apos;s Fastest Payment Gateway</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="rf-h1 text-white max-w-4xl mx-auto"
          initial={{ opacity: 0, y: -32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Accept Payments with a{' '}
          <span className="text-emerald-400">Cutting-Edge</span>{' '}
          Payment Gateway
        </motion.h1>

        {/* Sub text */}
        <motion.p
          className="mt-5 rf-lead text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
        >
          Accept online payments via Web, iOS, Android or APIs.
          UPI, Net Banking, Debit Cards, Wallets — anytime, anywhere.
        </motion.p>

        {/* Stats strip */}
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-8 md:gap-16"
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3, ease: 'easeOut' }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.text}
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 + i * 0.08, ease: 'easeOut' }}
            >
              {s.isImg ? (
                <img src={s.src} alt={s.text} className="w-9 h-9 object-contain" />
              ) : (
                s.Icon && <s.Icon style={{ width: 24, height: 36 }} className="text-[#53C2B7]" />
              )}
              <p className="rf-caption text-gray-400">{s.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: 'easeOut' }}
        >
          <Link
            href="#"
            className="px-8 py-3 rounded-full bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition duration-300 shadow-lg shadow-emerald-500/25"
          >
            Start Accepting Payments
          </Link>
          <Link
            href="#"
            className="px-8 py-3 rounded-full border border-emerald-500/60 text-white hover:bg-emerald-500/10 transition duration-300"
          >
            Documentation →
          </Link>
        </motion.div>
      </div>

      {/* ── Dashboard + Phone image area ── */}
      {/*
        Layout strategy:
        - Outer container is relative with padding-bottom to reserve space for the phone
        - Dashboard fills full width of container
        - Phone is absolute at bottom-0 right-[8%] — sits in the padding-bottom area
        - No overflow-hidden on section (overflow-x-hidden only) so phone never clips
      */}
      <div className="relative max-w-5xl mx-auto px-6 z-10 pb-[220px]">

        {/* Dashboard with 3D tilt */}
        <div style={{ perspective: 1200 }}>
          <motion.div
            style={{ rotateX: dashRotateX, y: dashY, transformStyle: 'preserve-3d' }}
            initial={{ opacity: 0, scale: 0.88, rotateX: 16, y: 60 }}
            animate={{ opacity: 1, scale: 1, rotateX: 4, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ rotateX: 0, scale: 1.015 }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image
                src="/Dashboard 2.svg"
                alt="RupeeFlow dashboard"
                width={1100}
                height={650}
                className="rounded-xl shadow-2xl w-full"
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Phone — absolute to the pb-[220px] container, independent animation */}
        <motion.div
          className="absolute bottom-0 right-[8%] z-30"
          style={{ perspective: 900, transformStyle: 'preserve-3d' }}
          initial={{ opacity: 0, scale: 0.82, rotateY: -18, x: 40 }}
          animate={{ opacity: 1, scale: 1, rotateY: -6, x: 0 }}
          transition={{ duration: 1.1, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ rotateY: 0, scale: 1.03 }}
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <Image
              src="/image 11.svg"
              alt="RupeeFlow mobile app"
              width={220}
              height={440}
              priority
              className="drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Wave bottom — sits below the padded container naturally */}
      <div className="relative z-0">
        <Image
          src="/wave.png"
          alt="wave"
          width={1920}
          height={200}
          className="w-full scale-110"
        />
      </div>
    </section>
  )
}

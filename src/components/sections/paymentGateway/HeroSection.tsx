'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import InstantSettlement from '../../../../public/icons/payment-gateway/InstantSettlement'

/* ── Stat strip data ── */
const stats = [
  { src: '/uptime.svg', text: '99.9% Uptime', isImg: true },
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
  const dashY = useTransform(scrollYProgress, [0, 1], [0, 80])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[1000px] bg-gradient-to-b from-[#020506] via-black to-black overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.35),transparent_60%)]" />

      {/* ── Content ── */}
      <div className="max-w-6xl mx-auto text-center pt-40 px-6 relative z-10">

        {/* Heading slides down on load */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white leading-tight"
          initial={{ opacity: 0, y: -32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Accept Payments with cutting edge <br />
          <span className="text-emerald-400">Payment Gateway</span>
        </motion.h1>

        {/* Sub text */}
        <motion.p
          className="mt-6 text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
        >
          Accept online payments via Web, iOS, Android app or APIs.
          UPI, Net Banking, Debit Cards, Wallets, Anytime.
        </motion.p>

        {/* ── Stats strip — slides top → down on load ── */}
        <motion.div
          className="mt-12 flex justify-center gap-16 md:gap-24"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3, ease: 'easeOut' }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.text}
              className="flex flex-col items-center gap-3"
              initial={{ opacity: 0, y: -24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 + i * 0.08, ease: 'easeOut' }}
            >
              {s.isImg ? (
                <img src={s.src} alt={s.text} className="w-10 h-10 object-contain" />
              ) : (
                /* InstantSettlement TSX icon */
                s.Icon && <s.Icon style={{ width: 24, height: 40 }} className="text-[#53C2B7]" />
              )}
              <p className="text-sm text-gray-400">{s.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="mt-12 flex justify-center gap-6"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: 'easeOut' }}
        >
          <Link
            href="#"
            className="px-12 py-3 mt-6 rounded-full bg-emerald-500 text-black font-semibold hover:opacity-90 transition"
          >
            Start Accepting Payments
          </Link>
          <Link
            href="#"
            className="px-8 py-3 mt-6 rounded-full border border-emerald-500 text-white hover:bg-emerald-500/10 transition"
          >
            Documentation
          </Link>
        </motion.div>
      </div>

      {/* ── 3-D Dashboard + Phone wrapper ── */}
      <div
        className="absolute bottom-[60px] left-1/2 -translate-x-1/2 z-20"
        style={{ perspective: 1200 }}
      >
        {/* Dashboard — entry animation + scroll-driven tilt */}
        <motion.div
          style={{ rotateX: dashRotateX, y: dashY, transformStyle: 'preserve-3d' }}
          initial={{ opacity: 0, scale: 0.88, rotateX: 16, y: 60 }}
          animate={{ opacity: 1, scale: 1, rotateX: 4, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ rotateX: 0, scale: 1.015 }}
        >
          {/* Subtle continuous float */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Image
              src="/Dashboard 2.svg"
              alt="RupeeFlow dashboard"
              width={1100}
              height={650}
              className="rounded-xl shadow-2xl"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Mobile phone — independent 3-D entry + float, offset timing */}
        <motion.div
          className="absolute -bottom-[130px] right-[18%] z-30"
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
              width={280}
              height={600}
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 w-full">
<<<<<<< HEAD
        <img src="/wave.png" alt="" className="w-full scale-110" />
=======
        <Image
          src="/wave.png"
          alt="wave"
          width={1920}
          height={200}
          className="w-full scale-110"
        />
>>>>>>> feat/figma-design
      </div>
    </section>
  )
}
<<<<<<< HEAD
=======

/* Feature Component */
function Feature({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <Image
        src={icon}
        alt={text}
        width={40}
        height={40}
        className="w-10 h-10 object-contain"
      />
      <p className="text-sm text-gray-400">{text}</p>
    </div>
  )
}
>>>>>>> feat/figma-design

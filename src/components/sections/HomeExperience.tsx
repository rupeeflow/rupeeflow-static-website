'use client'

import Link from 'next/link'
import { motion, useScroll, useSpring } from 'framer-motion'
// import RupeeFlowHeroVisual from '@/components/sections/RupeeFlowHeroVisual'

const coreProducts = [
  'AI Credit Engine',
  'Embedded Finance as a Service',
  'WhatsApp Native Banking',
  'Supply Chain Finance',
  'NRI Financial Super-app',
  'AI Treasury for SMBs',
  'Gig Worker Financials',
]

const featuredCapabilities = [
  {
    title: 'UPI Cashpoint',
    description: 'Launch assisted UPI acceptance points with fast onboarding, reconciliation, and settlement visibility.',
    href: '/comingsoon',
  },
  {
    title: 'Prepaid Cards',
    description: 'Create prepaid cards for teams and workflows with spend controls and instant issuance.',
    href: '/prepaid-cards',
  },
  {
    title: 'Reference Card',
    description: 'See a guided card reference experience for limits, controls, and card lifecycle states.',
    href: '/prepaid-cards',
  },
]

export default function HomeExperience() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  })

  return (
    <div className="relative min-h-screen bg-[#F4F8F6] text-[#3D5C4A]">
      <motion.div
        className="fixed top-0 left-0 right-0 z-[120] h-1 origin-left bg-gradient-to-r from-[#00875A] via-[#2AB871] to-[#006B4F]"
        style={{ scaleX: progress }}
      />

      <section className="relative min-h-[88vh] overflow-visible pb-20 pt-32 md:pt-40">
        {/* <RupeeFlowHeroVisual /> */}
        
        {/* Hero Video - Enhanced */}
        <div className="absolute right-0 top-20 bottom-0 w-1/2 lg:w-2/4 z-0">
          <video
            className="h-full w-full object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            style={{
              filter: 'contrast(1.1) brightness(1.05) saturate(1.1)',
              borderRadius: '0px'
            }}
          >
            <source src="/herosection/hf_20260617_093546_144b8369-6489-4617-b248-de1185f68175 (1).mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Subtle overlay for better contrast */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#F4F8F6]/20 pointer-events-none"></div>
        </div>

        <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-2xl pr-4">
            <p className="mb-5 inline-flex rounded-full border border-[#D0E8DA] bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#00875A] backdrop-blur-sm">
              RupeeFlow Platform
            </p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-4xl font-extrabold leading-[1.1] md:text-5xl lg:text-6xl"
            >
              <span className="bg-[linear-gradient(120deg,#006B4F,#00875A,#2AB871,#006B4F)] bg-[length:220%_220%] bg-clip-text text-transparent animate-[gradientShift_8s_ease_infinite]">
                Financial infrastructure that flows with your business.
              </span>
            </motion.h1>
            <motion.p
              className="mt-6 max-w-xl text-base leading-relaxed text-[#6B8A78] md:text-lg"
              animate={{ color: ['#6B8A78', '#4E6E5C', '#6B8A78'] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              RupeeFlow unifies payments, lending, treasury, and customer finance journeys in one platform.
              Design, launch, and scale modern finance products faster with a stack built for Indian and global growth.
            </motion.p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-[#00875A] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(0,135,90,0.25)] transition hover:bg-[#006B4F]"
              >
                Talk to Expert
              </Link>
              <Link
                href="/pricing"
                className="rounded-full border border-[#D0E8DA] bg-white/80 px-6 py-3 text-sm font-semibold text-[#3D5C4A] backdrop-blur-sm transition hover:border-[#00875A]/40 hover:bg-white"
              >
                See Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#D0E8DA] bg-white/90 py-4">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 lg:px-12">
          <div className="flex whitespace-nowrap text-sm font-semibold text-[#3D5C4A]">
            {[...coreProducts, ...coreProducts].map((name, idx) => (
              <span key={`${name}-${idx}`} className="mr-10 inline-flex items-center">
                <span className="mr-3 h-1.5 w-1.5 rounded-full bg-[#2AB871]" />
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#1F3A2D] md:text-4xl">Core products</h2>
          <p className="mt-3 max-w-3xl text-[#6B8A78]">
            Only the core RupeeFlow products are highlighted below, focused on AI-led financial growth.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {coreProducts.map((product) => (
            <div
              key={product}
              className="rounded-2xl border border-[#D0E8DA] bg-[#FFFFFF] p-5 shadow-[0_8px_28px_rgba(0,135,90,0.06)] transition hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(0,135,90,0.12)]"
            >
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#F4F8F6] text-[#00875A]">
                ●
              </div>
              <h3 className="text-lg font-semibold text-[#2A4738]">{product}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-12">
        <div className="rounded-3xl border border-[#D0E8DA] bg-white p-6 md:p-8">
          <h2 className="text-2xl font-bold text-[#1F3A2D] md:text-3xl">Featured capabilities</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {featuredCapabilities.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-2xl border border-[#D0E8DA] bg-[#F4F8F6] p-5 transition hover:border-[#00875A]/40 hover:bg-white"
              >
                <h3 className="text-lg font-semibold text-[#2A4738]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6B8A78]">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

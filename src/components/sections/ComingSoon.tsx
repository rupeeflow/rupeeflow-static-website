'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { Lock, ArrowLeft, Rocket, Zap, Bell } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'

gsap.registerPlugin(useGSAP)

interface ComingSoonProps {
  title?: string
  subtitle?: string
  progress?: number
  features?: string[]
}

export default function ComingSoon({
  title = 'This Page',
  subtitle = 'We are actively building this product. Be the first to know when it launches.',
  progress = 65,
  features = [
    'Real-time dashboard & analytics',
    'Seamless API integrations',
    'Automated workflows & alerts',
  ],
}: ComingSoonProps) {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo('.cs-badge',    { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
      .fromTo('.cs-title',    { y: 40,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.3')
      .fromTo('.cs-sub',      { y: 25,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.55 }, '-=0.4')
      .fromTo('.cs-progress', { y: 20,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.3')
      .fromTo('.cs-bar-fill', { scaleX: 0, transformOrigin: 'left' }, { scaleX: 1, duration: 1.2, ease: 'power2.inOut', transformOrigin: 'left' }, '-=0.2')
      .fromTo('.cs-feature',  { y: 30,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }, '-=0.8')
      .fromTo('.cs-cta',      { y: 20,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.3')
  }, { scope: containerRef })

  return (
    <main
      ref={containerRef}
      className="relative w-full min-h-screen bg-gradient-to-b from-[#060D0A] via-[#0C1F18] to-[#060D0A] flex items-center justify-center overflow-hidden py-24 px-4"
    >
      {/* ── Grid overlay ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* ── Ambient glows ── */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-teal-500/10 blur-[120px] pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-3xl mx-auto text-center">

        {/* Badge */}
        <div className="cs-badge inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">
            In Development
          </span>
        </div>

        {/* Title */}
        <h1 className="cs-title text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
          {title}{' '}
          <span className="block bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
            is Coming Soon
          </span>
        </h1>

        {/* Subtitle */}
        <p className="cs-sub text-gray-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-12">
          {subtitle}
        </p>

        {/* Progress block */}
        <div className="cs-progress bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 mb-8 text-left">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Rocket size={16} className="text-emerald-400" />
              <span className="text-white text-sm font-semibold">Build Progress</span>
            </div>
            <span className="text-emerald-400 font-black text-lg">{progress}%</span>
          </div>

          {/* Bar */}
          <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="cs-bar-fill h-full rounded-full bg-gradient-to-r from-[#00EF64] to-[#53BEC2]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex justify-between mt-2">
            <span className="text-gray-500 text-xs">Planning</span>
            <span className="text-gray-500 text-xs">Launch</span>
          </div>
        </div>

        {/* Feature teasers */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {features.map((feat, i) => (
            <div
              key={i}
              className="cs-feature group bg-white/5 border border-white/10 rounded-xl p-5
                hover:border-emerald-400/30 hover:bg-white/[0.07] transition duration-300"
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-emerald-500/20 transition duration-300">
                <Lock size={16} className="text-emerald-400" />
              </div>
              <p className="text-gray-300 text-sm font-medium leading-snug">{feat}</p>
            </div>
          ))}
        </div>

        {/* Notify strip */}
        <div className="cs-cta flex items-center justify-center gap-2 text-gray-500 text-xs mb-8">
          <Bell size={12} className="text-emerald-500" />
          <span>Want to know when this launches?</span>
          <Link href="/contact" className="text-emerald-400 font-semibold hover:underline">
            Get notified →
          </Link>
        </div>

        {/* CTAs */}
        <div className="cs-cta flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm bg-gradient-to-r from-[#00EF64] to-[#53BEC2] text-black hover:opacity-90 transition duration-200"
          >
            <Zap size={15} />
            Request Early Access
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm border border-white/20 text-white hover:bg-white/5 hover:border-white/30 transition duration-200"
          >
            <ArrowLeft size={15} />
            Back to Home
          </Link>
        </div>

      </div>
    </main>
  )
}

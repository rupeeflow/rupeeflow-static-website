'use client'

import { type ReactNode } from 'react'
import { motion } from 'framer-motion'

const FLOW_NODES = [
  { x: 15, delay: 0 },
  { x: 50, delay: 0.7 },
  { x: 85, delay: 1.4 },
]

function Card3D({
  className,
  rotateY,
  rotateX,
  translateZ,
  z,
  children,
  duration = 9,
}: {
  className?: string
  rotateY: number[]
  rotateX: number[]
  translateZ: number
  z: number
  children: ReactNode
  duration?: number
}) {
  return (
    <motion.div
      className={`absolute ${className ?? ''}`}
      style={{ transformStyle: 'preserve-3d', zIndex: z }}
      animate={{
        rotateY,
        rotateX,
        y: [0, -14, 0],
        z: [translateZ, translateZ + 12, translateZ],
      }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div
        className="relative rounded-2xl border border-white/80 bg-gradient-to-br from-white via-white/92 to-[#E8F5EE] p-4 shadow-[0_28px_55px_-14px_rgba(0,107,79,0.4)]"
        style={{
          transformStyle: 'preserve-3d',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.9), 0 30px 60px -20px rgba(0,107,79,0.45)',
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/30 to-transparent"
        />
        {children}
        <div
          aria-hidden
          className="absolute -right-[3px] top-2 bottom-2 w-[3px] rounded-r-sm bg-gradient-to-b from-[#D0E8DA] via-[#2AB871]/40 to-[#006B4F]/50"
          style={{ transform: 'rotateY(90deg)', transformOrigin: 'left center' }}
        />
        <div
          aria-hidden
          className="absolute -bottom-[3px] left-2 right-2 h-[3px] rounded-b-sm bg-gradient-to-r from-[#006B4F]/20 via-[#00875A]/35 to-[#006B4F]/20"
          style={{ transform: 'rotateX(-90deg)', transformOrigin: 'top center' }}
        />
      </div>
      <div
        aria-hidden
        className="absolute -bottom-8 left-1/2 h-5 w-[88%] -translate-x-1/2 rounded-[100%] bg-[#006B4F]/20 blur-lg"
        style={{ transform: 'translateZ(-30px)' }}
      />
    </motion.div>
  )
}

export default function RupeeFlowHeroVisual() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ perspective: '1100px', perspectiveOrigin: '65% 50%' }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_75%_at_70%_45%,rgba(42,184,113,0.2),transparent_60%)]" />

      <motion.div
        className="absolute right-[10%] top-[18%] h-[360px] w-[360px] rounded-full bg-[#2AB871]/16 blur-[90px]"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute inset-0"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: [-6, 6, -6], rotateX: [2, -2, 2] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Card 1 — analytics */}
        <Card3D
          className="right-[8%] top-[16%] w-52 md:w-56"
          rotateY={[-28, -12, -28]}
          rotateX={[14, 6, 14]}
          translateZ={-60}
          z={10}
          duration={10}
        >
          <div className="mb-3 h-2.5 w-24 rounded-full bg-[#D0E8DA]" />
          <div className="flex h-24 items-end gap-2">
            {[38, 62, 45, 82, 55, 70].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-t-md bg-gradient-to-t from-[#006B4F] to-[#2AB871] shadow-sm"
                animate={{ height: [`${h * 0.6}%`, `${h}%`, `${h * 0.6}%`] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.1 }}
              />
            ))}
          </div>
        </Card3D>

        {/* Card 2 — rupee flow pipeline (hero card) */}
        <Card3D
          className="right-[14%] top-[42%] w-60 md:w-64"
          rotateY={[8, 22, 8]}
          rotateX={[-12, 4, -12]}
          translateZ={40}
          z={30}
          duration={11}
        >
          <div className="relative mt-1 h-16">
            <div className="absolute left-[6%] right-[6%] top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-gradient-to-r from-[#006B4F]/30 via-[#2AB871] to-[#006B4F]/30 shadow-[0_0_12px_rgba(42,184,113,0.5)]" />
            {FLOW_NODES.map((node, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#2AB871]/60 bg-gradient-to-br from-white to-[#F4F8F6] shadow-[0_4px_14px_rgba(0,135,90,0.25)]"
                style={{ left: `${node.x}%`, transformStyle: 'preserve-3d' }}
                animate={{
                  scale: [1, 1.12, 1],
                  translateZ: [0, 10, 0],
                }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: node.delay }}
              >
                <span className="text-base font-extrabold text-[#00875A]">₹</span>
              </motion.div>
            ))}
            <motion.div
              className="absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#2AB871] shadow-[0_0_14px_#2AB871]"
              animate={{ left: ['6%', '94%', '6%'] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
            />
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="h-2 rounded-full bg-[#D0E8DA]"
                animate={{ opacity: [0.35, 1, 0.35] }}
                transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.4 }}
              />
            ))}
          </div>
        </Card3D>

        {/* Card 3 — trend line */}
        <Card3D
          className="right-[22%] top-[66%] w-48 md:w-52"
          rotateY={[-14, 10, -14]}
          rotateX={[10, -8, 10]}
          translateZ={-20}
          z={20}
          duration={12}
        >
          <svg viewBox="0 0 140 56" className="h-14 w-full" aria-hidden>
            <defs>
              <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2AB871" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#2AB871" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 0 44 L 20 36 L 45 40 L 70 22 L 95 28 L 120 14 L 140 18 L 140 56 L 0 56 Z"
              fill="url(#areaFill)"
              animate={{ opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.path
              d="M 0 44 L 20 36 L 45 40 L 70 22 L 95 28 L 120 14 L 140 18"
              fill="none"
              stroke="#00875A"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ pathLength: [0.3, 1, 0.3] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </svg>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-[#D0E8DA]/80">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#006B4F] to-[#2AB871]"
              animate={{ width: ['25%', '92%', '25%'] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </Card3D>
      </motion.div>
    </div>
  )
}

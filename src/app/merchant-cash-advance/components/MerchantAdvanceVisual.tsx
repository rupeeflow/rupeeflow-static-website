'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const PHONE_CONFIG = {
  // Phone dimensions
  width: 160,        // Phone width in pixels
  height: 330,       // Phone height in pixels

  leftPosition: '-right-20 lg:-right-24',  // Tailwind classes for horizontal position

  verticalPosition: 'top-1/2 -translate-y-1/2', 
  
  // Calculated proportional values (don't change these manually)
  get cornerRadius() { return Math.round(this.width * 0.18) }, // 18% of width for outer corner
  get innerCornerRadius() { return Math.round(this.width * 0.17) }, // 17% of width for inner corner
  get bezelSize() { return Math.max(2, Math.round(this.width * 0.012)) }, // Bezel thickness
  get notchWidth() { return Math.round(this.width * 0.42) }, // 42% of width
  get notchHeight() { return Math.round(this.height * 0.048) }, // ~5% of height
  get statusBarHeight() { return Math.round(this.height * 0.085) }, // 8.5% of height
  get gestureBarWidth() { return Math.round(this.width * 0.46) }, // 46% of width
}
// ============================================

// Professional benefit cards data - no emojis
const benefits = [
  {
    title: 'Lightning Fast Approval',
    subtitle: 'Approved in 3 minutes',
    metric: '3 min',
    label: 'Approval Time',
  },
  {
    title: 'Flexible Repayment',
    subtitle: 'Auto-deduct from daily sales',
    metric: '0%',
    label: 'Fixed EMI',
  },
  {
    title: 'No Collateral',
    subtitle: 'Based on UPI history',
    metric: '100%',
    label: 'Digital Process',
  },
  {
    title: 'Transparent Pricing',
    subtitle: 'No hidden charges',
    metric: '₹0',
    label: 'Hidden Fees',
  },
]

export default function MerchantAdvanceVisual() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [currentTime, setCurrentTime] = useState('9:41')

  // Mouse parallax tracking
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring physics for smooth parallax - More responsive
  const springConfig = { damping: 20, stiffness: 120 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  // Subtle tilt based on mouse position - Enhanced for better 3D effect
  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8])

  // Parallax layers - Enhanced movement
  const phoneY = useTransform(y, [-0.5, 0.5], [-15, 15])
  const phoneX = useTransform(x, [-0.5, 0.5], [-10, 10])

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    // Update time
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: false }))
    }
    updateTime()
    const timeInterval = setInterval(updateTime, 60000)

    // Cycle through benefits every 2.5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % benefits.length)
    }, 2500)

    return () => {
      clearInterval(interval)
      clearInterval(timeInterval)
    }
  }, [])

  useEffect(() => {
    // Mouse move handler for parallax
    const handleMouseMove = (e: MouseEvent) => {
      if (prefersReducedMotion) return
      if (window.innerWidth < 1024) return // Disable on mobile

      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      // Normalize to -0.5 to 0.5 range
      const xPct = (clientX / innerWidth - 0.5)
      const yPct = (clientY / innerHeight - 0.5)

      mouseX.set(xPct)
      mouseY.set(yPct)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY, prefersReducedMotion])

  return (
    <div className="relative w-full h-full min-h-[320px] sm:min-h-[500px]">
      {/* Background Image - Full Width with rounded corners */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="w-full h-full min-h-[320px] sm:min-h-[500px] rounded-3xl overflow-hidden relative"
      >
        <Image
          src="/merchant-cash-advance/Why Choose.jpeg"
          alt="Business owner"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Phone Mockup - Outside the image container, positioned on left */}
      <motion.div
        initial={{ opacity: 0, x: -50, rotateY: -15 }}
        animate={{ opacity: 1, x: 0, rotateY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`hidden lg:block absolute ${PHONE_CONFIG.leftPosition} ${PHONE_CONFIG.verticalPosition} z-20`}
      >
        {/* 3D perspective container with mouse parallax */}
        <motion.div 
          className="relative"
          style={
            prefersReducedMotion
              ? {
                  perspective: '1200px',
                  transformStyle: 'preserve-3d'
                }
              : {
                  perspective: '1200px',
                  transformStyle: 'preserve-3d',
                  x: phoneX,
                  y: phoneY,
                }
          }
        >
          {/* Enhanced 3D shadow layers */}
          <div 
            className="absolute inset-0 bg-[var(--background)]/40 blur-2xl rounded-[48px]"
            style={{ 
              transform: 'translateZ(-20px) translateY(15px) scale(0.95)',
              transformStyle: 'preserve-3d'
            }}
          />
          <div 
            className="absolute inset-0 bg-emerald-500/15 blur-3xl rounded-[48px]"
            style={{ 
              transform: 'translateZ(-30px) translateY(20px) scale(0.9)',
              transformStyle: 'preserve-3d'
            }}
          />

          {/* Phone with 3D transform */}
          {/* iPhone-style Phone Mockup - Responsive to config with 3D depth */}
          <motion.div 
            className="relative" 
            style={
              prefersReducedMotion
                ? {
                    width: `${PHONE_CONFIG.width}px`, 
                    height: `${PHONE_CONFIG.height}px`,
                    transformStyle: 'preserve-3d',
                    transform: 'translateZ(0) rotateY(-2deg) rotateX(2deg)',
                  }
                : {
                    width: `${PHONE_CONFIG.width}px`, 
                    height: `${PHONE_CONFIG.height}px`,
                    transformStyle: 'preserve-3d',
                    rotateX,
                    rotateY,
                  }
            }
          >
            {/* Phone outer shell - Pure black with proportional corners and 3D effect */}
            <div 
              className="absolute inset-0 bg-[var(--background)]"
              style={{ 
                borderRadius: `${PHONE_CONFIG.cornerRadius}px`,
                boxShadow: `
                  0 25px 50px -12px rgba(0, 0, 0, 0.8),
                  0 15px 30px -10px rgba(0, 0, 0, 0.6),
                  0 5px 15px -5px rgba(0, 0, 0, 0.4),
                  inset 0 0 0 1px rgba(255, 255, 255, 0.1),
                  inset -2px -2px 8px rgba(0, 0, 0, 0.5),
                  inset 2px 2px 8px rgba(255, 255, 255, 0.03)
                `,
                transform: 'translateZ(10px)',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Inner bezel with 3D depth */}
              <div 
                className="absolute bg-[var(--background)] overflow-hidden"
                style={{ 
                  inset: `${PHONE_CONFIG.bezelSize}px`,
                  borderRadius: `${PHONE_CONFIG.innerCornerRadius}px`,
                  transform: 'translateZ(2px)',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Screen with subtle 3D depth */}
                <div 
                  className="relative w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
                  style={{
                    transform: 'translateZ(1px)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Screen reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none" />
                  
                  {/* Realistic iPhone Notch - Proportional */}
                  <div 
                    className="absolute top-0 left-1/2 -translate-x-1/2 bg-[var(--background)] z-50"
                    style={{ 
                      width: `${PHONE_CONFIG.notchWidth}px`,
                      height: `${PHONE_CONFIG.notchHeight}px`,
                      borderBottomLeftRadius: `${Math.round(PHONE_CONFIG.notchHeight * 0.67)}px`,
                      borderBottomRightRadius: `${Math.round(PHONE_CONFIG.notchHeight * 0.67)}px`
                    }}
                  >
                    <div className="flex items-center justify-center h-full gap-1.5 px-2">
                      {/* Front camera - scaled */}
                      <div 
                        className="rounded-full bg-gradient-radial from-slate-800 to-slate-950 ring-[0.5px] ring-slate-700/50"
                        style={{ 
                          width: `${Math.round(PHONE_CONFIG.notchHeight * 0.33)}px`,
                          height: `${Math.round(PHONE_CONFIG.notchHeight * 0.33)}px`
                        }}
                      />
                      {/* Speaker grille - scaled */}
                      <div 
                        className="rounded-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 opacity-60"
                        style={{ 
                          width: `${Math.round(PHONE_CONFIG.notchWidth * 0.36)}px`,
                          height: `${Math.round(PHONE_CONFIG.notchHeight * 0.21)}px`
                        }}
                      />
                    </div>
                  </div>

                  {/* Status Bar - iOS style - Scaled */}
                  <div 
                    className="absolute top-0 left-0 right-0 flex items-end justify-between text-[var(--foreground)] font-medium z-40"
                    style={{ 
                      height: `${PHONE_CONFIG.statusBarHeight}px`,
                      paddingLeft: `${Math.round(PHONE_CONFIG.width * 0.12)}px`,
                      paddingRight: `${Math.round(PHONE_CONFIG.width * 0.12)}px`,
                      paddingBottom: `${Math.round(PHONE_CONFIG.statusBarHeight * 0.14)}px`,
                      fontSize: `${Math.round(PHONE_CONFIG.width * 0.044)}px`
                    }}
                  >
                    <span className="tracking-tight opacity-90">{currentTime}</span>
                    <div className="flex items-center" style={{ gap: `${Math.round(PHONE_CONFIG.width * 0.022)}px` }}>
                      {/* Cellular signal - scaled */}
                      <svg 
                        className="opacity-90" 
                        viewBox="0 0 18 12" 
                        fill="white"
                        style={{ 
                          width: `${Math.round(PHONE_CONFIG.width * 0.065)}px`,
                          height: `${Math.round(PHONE_CONFIG.width * 0.042)}px`
                        }}
                      >
                        <rect x="0" y="8" width="2.5" height="4" rx="0.5" />
                        <rect x="4" y="6" width="2.5" height="6" rx="0.5" />
                        <rect x="8" y="4" width="2.5" height="8" rx="0.5" />
                        <rect x="12" y="2" width="2.5" height="10" rx="0.5" />
                        <rect x="16" y="0" width="2" height="12" rx="0.5" />
                      </svg>
                      {/* WiFi - scaled */}
                      <svg 
                        className="opacity-90" 
                        viewBox="0 0 16 12" 
                        fill="white"
                        style={{ 
                          width: `${Math.round(PHONE_CONFIG.width * 0.058)}px`,
                          height: `${Math.round(PHONE_CONFIG.width * 0.042)}px`
                        }}
                      >
                        <path d="M8 12C8.55228 12 9 11.5523 9 11C9 10.4477 8.55228 10 8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12Z" />
                        <path d="M8 8C9.65685 8 11 9.34315 11 11H5C5 9.34315 6.34315 8 8 8Z" opacity="0.8" />
                        <path d="M8 4C11.3137 4 14 6.68629 14 10H2C2 6.68629 4.68629 4 8 4Z" opacity="0.6" />
                      </svg>
                      {/* Battery - scaled */}
                      <div className="flex items-center opacity-90" style={{ gap: `${Math.round(PHONE_CONFIG.width * 0.008)}px` }}>
                        <div 
                          className="relative border-white rounded-sm flex items-center justify-end"
                          style={{ 
                            width: `${Math.round(PHONE_CONFIG.width * 0.085)}px`,
                            height: `${Math.round(PHONE_CONFIG.width * 0.038)}px`,
                            borderWidth: `${Math.max(1, Math.round(PHONE_CONFIG.width * 0.006))}px`,
                            padding: `${Math.round(PHONE_CONFIG.width * 0.008)}px`
                          }}
                        >
                          <div 
                            className="bg-[var(--card)] rounded-[1px]"
                            style={{ 
                              width: `${Math.round(PHONE_CONFIG.width * 0.058)}px`,
                              height: `${Math.round(PHONE_CONFIG.width * 0.023)}px`
                            }}
                          />
                        </div>
                        <div 
                          className="bg-[var(--card)] rounded-r-sm"
                          style={{ 
                            width: `${Math.round(PHONE_CONFIG.width * 0.008)}px`,
                            height: `${Math.round(PHONE_CONFIG.width * 0.015)}px`
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Main Content Area - Scaled */}
                  <div 
                    className="absolute left-0 right-0 flex items-center justify-center"
                    style={{ 
                      top: `${PHONE_CONFIG.statusBarHeight}px`,
                      bottom: `${Math.round(PHONE_CONFIG.height * 0.097)}px`,
                      padding: `${Math.round(PHONE_CONFIG.width * 0.075)}px ${Math.round(PHONE_CONFIG.width * 0.062)}px`
                    }}
                  >
                    {/* Professional Animated Benefit Cards */}
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20, scale: 0.96, filter: 'blur(8px)' }}
                        animate={{
                          opacity: currentIndex === index ? 1 : 0,
                          y: currentIndex === index ? 0 : 20,
                          scale: currentIndex === index ? 1 : 0.96,
                          filter: currentIndex === index ? 'blur(0px)' : 'blur(8px)',
                        }}
                        transition={{
                          duration: 0.6,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute inset-0 flex items-center justify-center px-5"
                      >
                        {/* Professional Card Design - Scaled */}
                        <div 
                          className="relative w-full bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                          style={{ 
                            borderRadius: `${Math.round(PHONE_CONFIG.width * 0.108)}px`,
                            padding: `${Math.round(PHONE_CONFIG.width * 0.125)}px`
                          }}
                        >
                          {/* Metric Display - Scaled */}
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={
                              currentIndex === index
                                ? { scale: 1, opacity: 1 }
                                : { scale: 0.8, opacity: 0 }
                            }
                            transition={{
                              duration: 0.5,
                              delay: 0.15,
                              type: 'spring',
                              stiffness: 200,
                              damping: 15,
                            }}
                            style={{ marginBottom: `${Math.round(PHONE_CONFIG.width * 0.094)}px` }}
                          >
                            <div className="text-center">
                              <div 
                                className="font-bold bg-gradient-to-br from-emerald-400 to-teal-400 bg-clip-text text-transparent"
                                style={{ 
                                  fontSize: `${Math.round(PHONE_CONFIG.width * 0.2)}px`,
                                  marginBottom: `${Math.round(PHONE_CONFIG.width * 0.031)}px`
                                }}
                              >
                                {benefit.metric}
                              </div>
                              <div 
                                className="text-emerald-400/60 font-medium tracking-wide uppercase"
                                style={{ fontSize: `${Math.round(PHONE_CONFIG.width * 0.056)}px` }}
                              >
                                {benefit.label}
                              </div>
                            </div>
                          </motion.div>

                          {/* Divider - Scaled */}
                          <div 
                            className="h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent mx-auto"
                            style={{ 
                              width: `${Math.round(PHONE_CONFIG.width * 0.25)}px`,
                              marginBottom: `${Math.round(PHONE_CONFIG.width * 0.094)}px`
                            }}
                          />

                          {/* Title - Scaled */}
                          <motion.h3
                            initial={{ opacity: 0, y: 8 }}
                            animate={
                              currentIndex === index
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 8 }
                            }
                            transition={{ duration: 0.4, delay: 0.25 }}
                            className="text-[var(--foreground)] font-semibold text-center tracking-tight"
                            style={{ 
                              fontSize: `${Math.round(PHONE_CONFIG.width * 0.069)}px`,
                              marginBottom: `${Math.round(PHONE_CONFIG.width * 0.031)}px`
                            }}
                          >
                            {benefit.title}
                          </motion.h3>

                          {/* Subtitle - Scaled */}
                          <motion.p
                            initial={{ opacity: 0, y: 8 }}
                            animate={
                              currentIndex === index
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 8 }
                            }
                            transition={{ duration: 0.4, delay: 0.35 }}
                            className="text-slate-400 text-center font-normal leading-relaxed"
                            style={{ fontSize: `${Math.round(PHONE_CONFIG.width * 0.056)}px` }}
                          >
                            {benefit.subtitle}
                          </motion.p>

                          {/* Subtle inner glow */}
                          <div 
                            className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.03] via-transparent to-teal-500/[0.03] pointer-events-none"
                            style={{ borderRadius: `${Math.round(PHONE_CONFIG.width * 0.108)}px` }}
                          />
                          
                          {/* Border highlight */}
                          <div 
                            className="absolute inset-0 ring-1 ring-inset ring-white/[0.02] pointer-events-none"
                            style={{ borderRadius: `${Math.round(PHONE_CONFIG.width * 0.108)}px` }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Progress Indicators - iOS style - Scaled */}
                  <div 
                    className="absolute left-0 right-0 flex justify-center z-10"
                    style={{ 
                      bottom: `${Math.round(PHONE_CONFIG.height * 0.085)}px`,
                      gap: `${Math.round(PHONE_CONFIG.width * 0.023)}px`
                    }}
                  >
                    {benefits.map((_, index) => (
                      <motion.div
                        key={index}
                        className="rounded-full bg-[var(--card)] overflow-hidden"
                        animate={{
                          width: index === currentIndex ? `${Math.round(PHONE_CONFIG.width * 0.092)}px` : `${Math.round(PHONE_CONFIG.width * 0.023)}px`,
                        }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        style={{ height: `${Math.round(PHONE_CONFIG.width * 0.012)}px` }}
                      >
                        {index === currentIndex && (
                          <motion.div
                            className="h-full bg-emerald-400/90"
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 2.5, ease: 'linear' }}
                          />
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Home Indicator (Gesture Bar) - iOS style - Scaled */}
                  <div 
                    className="absolute left-1/2 -translate-x-1/2 bg-[var(--card)] rounded-full"
                    style={{ 
                      bottom: `${Math.round(PHONE_CONFIG.height * 0.024)}px`,
                      width: `${PHONE_CONFIG.gestureBarWidth}px`,
                      height: `${Math.round(PHONE_CONFIG.height * 0.015)}px`
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Realistic phone highlights with 3D edge lighting */}
            <div 
              className="absolute ring-1 ring-white/10 pointer-events-none"
              style={{ 
                inset: `${PHONE_CONFIG.bezelSize}px`,
                borderRadius: `${PHONE_CONFIG.innerCornerRadius}px`,
                transform: 'translateZ(12px)',
                boxShadow: 'inset 1px 1px 2px rgba(255, 255, 255, 0.1), inset -1px -1px 2px rgba(0, 0, 0, 0.3)'
              }}
            />
            
            {/* 3D edge highlight - left side */}
            <div 
              className="absolute top-[10%] left-0 w-[1px] h-[30%] bg-gradient-to-b from-transparent via-white/20 to-transparent pointer-events-none"
              style={{ 
                transform: 'translateZ(11px)',
                borderRadius: '1px'
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}


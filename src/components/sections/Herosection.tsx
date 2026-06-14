"use client"

import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { useEffect } from 'react'

export default function Hero() {
  useEffect(() => {
    const duration = 12000; // ms
    const values = [-420, 480, 600, 720, 1420];
    const keyTimes = [0, 0.35, 0.5, 0.65, 0.94];
    function lerp(a: number, b: number, t: number) { return a + (b - a) * t }
    function getX(t: number) {
      if (t <= keyTimes[0]) return values[0]
      if (t >= keyTimes[keyTimes.length - 1]) return values[values.length - 1]
      for (let i = 0; i < keyTimes.length - 1; i++) {
        const a = keyTimes[i], b = keyTimes[i + 1]
        if (t >= a && t <= b) {
          const local = (t - a) / (b - a)
          return lerp(values[i], values[i + 1], local)
        }
      }
      return values[values.length - 1]
    }

    let rafId: number | null = null
    let startTime = 0
    const groups = () => Array.from(document.querySelectorAll('.hero-svg .ballGroup')) as Element[]

    function frame(now: number) {
      try {
        if (!startTime) startTime = now
        const elapsed = (now - startTime) % duration
        const t = elapsed / duration
        const x = getX(t)
        groups().forEach(g => {
          g.setAttribute('transform', 'translate(' + x + ' 0)')
        })
      } catch (e) {
        // don't let a single error stop the RAF loop
        // eslint-disable-next-line no-console
        console.error('ballAnimator error', e)
      }
      rafId = requestAnimationFrame(frame)
    }

    function start() {
      const count = document.querySelectorAll('.hero-svg .ballGroup').length
      // eslint-disable-next-line no-console
      console.log('ballAnimator start - groups found:', count)
      if (!count) return
      startTime = 0
      rafId = requestAnimationFrame(frame)
    }

    if (document.readyState === 'complete') start()
    else window.addEventListener('load', start)

    document.addEventListener('visibilitychange', () => {
      if (document.hidden && rafId) cancelAnimationFrame(rafId)
      if (!document.hidden && !rafId) rafId = requestAnimationFrame(frame)
    })

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      window.removeEventListener('load', start)
    }
  }, [])
  return (
    <section className="relative w-full bg-[var(--background)] overflow-visible pb-0">
      {/* Full-screen glow wrapper (reverted) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-visible">
        <div className="rf-glow-ball" />
      </div>

      <style jsx global>{`
        /* CSS variables to tweak vertical alignment */
        :root { --hero-glow-top: 20%; --hero-dot-top: 38%; }

        .rf-glow-ball {
          position: absolute;
          left: -12%;
          top: var(--hero-glow-top);
          width: 220px;
          height: 220px;
          border-radius: 9999px;
          background: radial-gradient(circle at 30% 30%, rgba(16,185,129,0.9), rgba(5,150,105,0.45) 40%, rgba(5,150,105,0.18) 60%, transparent 70%);
          filter: blur(36px);
          transform: translateX(0);
          animation: heroSlide 12s linear infinite;
          mix-blend-mode: screen;
          will-change: transform, opacity;
          opacity: 0.95;
        }

        /* removed legacy rf-move-ball; SVG handles the moving ball now */

        /* Ball group inside SVG; animation handled by SMIL for broad compatibility */
        .hero-svg .ballGroup {
          transform-box: fill-box;
          transform-origin: 0 0;
        }

        .hero-svg .visibleBall { opacity: 0.98; }

          /* animation moved to SMIL animateTransform on the SVG groups for
            reliable SVG motion and to allow precise keyTimes/values easing. */

        @keyframes heroSlide {
          0% { left: -12%; opacity: 0 }
          6% { opacity: 1 }
          94% { opacity: 1 }
          100% { left: 112%; opacity: 0 }
        }

        @media (prefers-reduced-motion: reduce) {
          .rf-glow-ball { animation: none; opacity: 0.8 }
        }
      `}</style>

      {/* Main Content Container */}

      {/* JS animator for SVG ball: requestAnimationFrame-driven to ensure Chrome/Safari/Firefox all animate reliably */}
      {/* Use React useEffect (client component) rather than injecting inline script so it runs reliably. */}
      {/* eslint-disable-next-line react-hooks/rules-of-hooks */}
      {typeof window !== 'undefined' ? null : null}

      <div className="relative z-10 flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-12 lg:pb-16 overflow-visible">

        {/* Full-width glow wrapper was here (moved back into heading to revert changes) */}

        {/* Compact Stripe-like headline + feature strip */}
        <div className="w-full max-w-4xl text-center opacity-0 animate-fade-in-up px-4 overflow-visible">
          <p className="text-sm text-gray-500 mb-4">Modern financial building blocks for Indian businesses</p>

          <div className="hero-heading-wrap mx-auto mb-6 relative overflow-visible">
            

            {/* Heading text (kept as SVG for typography) */}
            <svg
              viewBox="0 0 1200 220"
              style={{ overflow: 'visible' }}
              className="w-full max-w-4xl h-auto overflow-visible relative z-10 hero-svg"
              role="img"
              aria-label="Financial infrastructure to grow your revenue."
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="grad" x1="0%" x2="100%">
                  <stop offset="0%" stopColor="#04402f" />
                  <stop offset="50%" stopColor="#0fa171" />
                  <stop offset="100%" stopColor="#0bb26e" />
                </linearGradient>

                <filter id="fblur" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="18" />
                </filter>

                <mask id="ballMask" maskUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="1200" height="220" fill="black" />
                  <g className="ballGroup" fill="white">
                      <circle cx="0" cy="110" r="80" />
                    </g>
                </mask>
              </defs>

              {/* Visible ball (behind the base text so it appears to go under the letters) */}
              <g className="ballGroup visibleBall" filter="url(#fblur)" aria-hidden>
                <circle cx="0" cy="110" r="80" fill="#10b981" />
              </g>

              {/* Base (dark) text */}
              <text x="50%" y="64" textAnchor="middle" fill="var(--foreground)" style={{ fontFamily: 'Nunito Sans, Arial, sans-serif', fontWeight: 800, fontSize: '48px' }}>
                AI-first credit and embedded
              </text>
              <text x="50%" y="144" textAnchor="middle" fill="var(--foreground)" style={{ fontFamily: 'Nunito Sans, Arial, sans-serif', fontWeight: 800, fontSize: '48px' }}>
                finance to power growth.
              </text>

              {/* Overlay green text revealed only through the moving ball mask */}
              <g mask="url(#ballMask)">
                <text x="50%" y="64" textAnchor="middle" fill="url(#grad)" style={{ fontFamily: 'Nunito Sans, Arial, sans-serif', fontWeight: 800, fontSize: '48px' }}>
                  AI-first credit and embedded
                </text>
                <text x="50%" y="144" textAnchor="middle" fill="url(#grad)" style={{ fontFamily: 'Nunito Sans, Arial, sans-serif', fontWeight: 800, fontSize: '48px' }}>
                  finance to power growth.
                </text>
              </g>

              {/* (no visible duplicate here — visible ball rendered before base text)
                  The mask above (in defs) uses the same .ballGroup to reveal green
                  overlay text while the visible ball sits behind the base text. */}
            </svg>
            {/* Moving green dot that travels across heading and beyond */}
            {/* moving dot is rendered at the full-screen wrapper above */}
          </div>

          <div className="flex items-center justify-center gap-4 mb-8">
            <Button href="/contact" className="px-6 py-3 font-semibold shadow-lg">
              Request an invite
            </Button>
          </div>

          <div className="mt-2 border-t border-[var(--border)] pt-6">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600 max-w-3xl mx-auto">
              <span className="opacity-90">AI credit engine</span>
              <span className="opacity-90">Embedded finance as a service</span>
              <span className="opacity-90">WhatsApp native banking</span>
              <span className="opacity-90">Supply chain finance</span>
            </div>
          </div>

          {/* Supporting paragraph and stats removed per request */}
        </div>

        {/* Pills and CTAs removed as requested */}

        {/* Stats Cards removed per request */}
      </div>
    </section>
  )
}

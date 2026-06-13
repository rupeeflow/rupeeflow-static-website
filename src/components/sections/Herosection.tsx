"use client"

import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative w-full bg-[var(--background)] overflow-hidden pb-0">
      {/* Background glows removed per request */}

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-12 lg:pb-16">

        {/* Compact Stripe-like headline + feature strip */}
        <div className="w-full max-w-4xl text-center opacity-0 animate-fade-in-up px-4">
          <p className="text-sm text-gray-500 mb-4">Modern financial building blocks for Indian businesses</p>

          <div className="hero-heading-wrap mx-auto mb-6 relative">
            

            {/* SVG heading with animated color-reveal circles (balls) mask */}
            <svg
              viewBox="0 0 1200 220"
              className="w-full max-w-4xl h-auto"
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

                <mask id="dotMask">
                  <rect x="0" y="0" width="1200" height="220" fill="#000" />
                  <circle id="dot1" r="120" fill="#fff">
                    <animate attributeName="cx" values="-200;1400" dur="12s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="40;80;40" dur="12s" repeatCount="indefinite" />
                  </circle>
                  <circle id="dot2" r="90" fill="#fff">
                    <animate attributeName="cx" values="1400;-200" dur="14.4s" begin="-2s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="100;40;100" dur="14.4s" begin="-2s" repeatCount="indefinite" />
                  </circle>
                  <circle id="dot3" r="70" fill="#fff">
                    <animate attributeName="cx" values="-300;1300" dur="10s" begin="-1s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="60;120;60" dur="10s" begin="-1s" repeatCount="indefinite" />
                  </circle>
                </mask>
              </defs>

              {/* Base (dark) text */}
              <text x="50%" y="64" textAnchor="middle" fill="var(--foreground)" style={{ fontFamily: 'Nunito Sans, Arial, sans-serif', fontWeight: 800, fontSize: '48px' }}>
                AI-first credit and embedded
              </text>
              <text x="50%" y="144" textAnchor="middle" fill="var(--foreground)" style={{ fontFamily: 'Nunito Sans, Arial, sans-serif', fontWeight: 800, fontSize: '48px' }}>
                finance to power growth.
              </text>

              {/* Gradient text revealed only where animated circles (mask) overlap */}
              <g mask="url(#dotMask)">
                <text x="50%" y="64" textAnchor="middle" fill="url(#grad)" style={{ fontFamily: 'Nunito Sans, Arial, sans-serif', fontWeight: 800, fontSize: '48px' }}>
                  AI-first credit and embedded
                </text>
                <text x="50%" y="144" textAnchor="middle" fill="url(#grad)" style={{ fontFamily: 'Nunito Sans, Arial, sans-serif', fontWeight: 800, fontSize: '48px' }}>
                  finance to power growth.
                </text>
              </g>
            </svg>
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

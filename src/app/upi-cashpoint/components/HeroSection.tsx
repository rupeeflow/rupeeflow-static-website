"use client"

import Image from 'next/image'
import MainCTA from '@/components/ui/mainCTA'

export default function HeroSection() {
  return (
    <section className="py-12">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold text-[var(--text,#0f172a)] leading-tight">
            UPI Cashpoint — Collect payments anywhere
          </h1>

          <p className="mt-6 text-[var(--muted,#6B7280)] text-lg leading-relaxed">
            Turn any device into a secure UPI collection point. Built for low
            connectivity environments with instant reconciliation and quick
            settlements.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[var(--primary)] text-white flex items-center justify-center">
                Terminal
              </div>
              <div>
                <div className="font-semibold">Device-ready Terminal</div>
                <div className="text-[var(--muted,#6B7280)] text-sm">
                  Lightweight app for Android devices that accepts UPI even when
                  offline.
                </div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[var(--accent)] text-white flex items-center justify-center">
                Agents
              </div>
              <div>
                <div className="font-semibold">Agent-friendly</div>
                <div className="text-[var(--muted,#6B7280)] text-sm">
                  Assign agents, track collections and settle payouts quickly.
                </div>
              </div>
            </li>
          </ul>

          <div className="mt-8">
            <MainCTA label="Talk to Sales" destination="/contact" />
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] shadow-lg p-6 bg-[var(--card)]">
          <div className="relative h-72 md:h-96 lg:h-112">
            <Image src="/images/upi-cashpoint/upi-cashpoint-hero.png" alt="Terminal" fill className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}

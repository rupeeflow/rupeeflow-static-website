"use client"

import Image from 'next/image'

export default function UseCases() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-semibold text-[var(--foreground)]">Use Cases</h3>
        <p className="text-[var(--muted)] mt-2">UPI Cashpoint works across merchants, field agents, and kiosks.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-[var(--card)] rounded-2xl border border-[var(--border)]">
            <Image src="/images/upi-cashpoint/usecase-merchant.svg" alt="merchant" width={420} height={280} className="object-contain" />
            <h4 className="mt-4 font-semibold">Merchants</h4>
            <p className="text-[var(--muted)] mt-2">Accept payments with offline support and simple reconciliation.</p>
          </div>

          <div className="p-6 bg-[var(--card)] rounded-2xl border border-[var(--border)]">
            <Image src="/images/upi-cashpoint/usecase-agent.svg" alt="agent" width={420} height={280} className="object-contain" />
            <h4 className="mt-4 font-semibold">Field Agents</h4>
            <p className="text-[var(--muted)] mt-2">Enable agents to collect payments in low-connectivity areas.</p>
          </div>

          <div className="p-6 bg-[var(--card)] rounded-2xl border border-[var(--border)]">
            <h4 className="mt-2 font-semibold">Kiosks & Events</h4>
            <p className="text-[var(--muted)] mt-2">Set up temporary collection points for events and kiosks.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

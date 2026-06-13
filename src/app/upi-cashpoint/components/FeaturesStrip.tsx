"use client"

import Image from 'next/image'

export default function FeaturesStrip() {
  return (
    <section className="py-12">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-[var(--card)] border border-[var(--border)] rounded-xl animate-fade-in-up">
          <h4 className="font-semibold text-[var(--primary)]">Offline Mode</h4>
          <p className="text-[var(--muted)] mt-2">Store & forward transactions when back online with full audit trail.</p>
        </div>

        <div className="p-6 bg-[var(--card)] border border-[var(--border)] rounded-xl animate-fade-in-up">
          <h4 className="font-semibold text-[var(--primary)]">QR & Intent Support</h4>
          <p className="text-[var(--muted)] mt-2">Generate dynamic QR codes or UPI intents for quick collections.</p>
        </div>

        <div className="p-6 bg-[var(--card)] border border-[var(--border)] rounded-xl animate-fade-in-up">
          <h4 className="font-semibold text-[var(--primary)]">Agent Management</h4>
          <p className="text-[var(--muted)] mt-2">Assign cashpoints, track performance and payouts in the dashboard.</p>
        </div>
      </div>
    </section>
  )
}

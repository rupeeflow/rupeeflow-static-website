"use client"

import Image from 'next/image'

export default function Integrations() {
  return (
    <section className="py-16 bg-[var(--card)]">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-semibold text-[var(--foreground)]">Integrations</h3>
        <p className="text-[var(--muted)] mt-3">Works with your accounting and payout systems.</p>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {['/images/upi-cashpoint/phone-1.svg','/images/upi-cashpoint/phone-2.svg','/images/upi-cashpoint/terminal.svg'].map((src,i)=> (
            <div key={i} className="p-4 bg-white rounded-lg border border-[var(--border)] flex items-center justify-center">
              <Image src={src} alt="integration" width={160} height={120} className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

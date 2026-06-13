'use client'

export default function LegalNoteSection() {
  return (
    <section className="relative z-10 py-12 px-6 bg-[var(--background)]/80 text-gray-400 text-center border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto fontbody2 text-sm">
        <p className="mb-2">
          RupeeFlow Kirana is a Tech Service Provider to (RBI-licensed
          Payment Aggregator). We do not hold your money.
        </p>
        <p>
          All settlements are direct to your bank via NPCI UPI.
          <br />© 2025 RupeeFlow Technologies Pvt Ltd. Made with ❤ for
          Bharat’s 60M+ small merchants.
        </p>
      </div>
    </section>
  )
}
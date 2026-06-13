"use client"

import { motion } from 'framer-motion'

export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-semibold text-[var(--foreground)]">What customers say</h3>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <motion.blockquote key={i} className="p-6 bg-[var(--card)] rounded-2xl border border-[var(--border)]" initial={{ y: 8, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ delay: i*0.06 }}>
              <p className="text-[var(--muted)]">"UPI Cashpoint made field collections easier and reconciliations painless."</p>
              <footer className="mt-3 text-sm font-semibold">— Business owner</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

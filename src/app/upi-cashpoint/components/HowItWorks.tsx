"use client"

import Image from 'next/image'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'

export default function HowItWorks() {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const phoneA = useRef<HTMLDivElement | null>(null)
  const phoneB = useRef<HTMLDivElement | null>(null)
  const terminal = useRef<HTMLDivElement | null>(null)
  const qr = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!rootRef.current) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.2 })
      tl.from([phoneA.current, phoneB.current, terminal.current], {
        y: 30,
        opacity: 0,
        stagger: 0.12,
        duration: 0.6,
        ease: 'power2.out',
      })

      tl.to(phoneA.current, { y: -10, duration: 0.6, yoyo: true, repeat: 1, ease: 'sine.inOut' }, '-=0.2')
      tl.to(phoneB.current, { y: -6, duration: 0.5, yoyo: true, repeat: 1, ease: 'sine.inOut' }, '<')

      tl.fromTo(qr.current, { scale: 0.6, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.45, ease: 'back.out(1.2)' }, '<0.1')
      tl.to(qr.current, { rotate: 6, duration: 0.6, yoyo: true, repeat: 1 }, '<')
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <h3 className="text-3xl font-semibold text-[var(--foreground)]">How UPI Cashpoint Works</h3>
          <p className="text-[var(--muted)] mt-3">A simple flow for on-device collections, reconciliation and settlement.</p>

          <div className="mt-8 space-y-6">
            {[
              { title: 'Install Terminal', desc: 'Install the Cashpoint app on any Android device.' },
              { title: 'Generate QR / Intent', desc: 'Create quick QR codes or intents to collect payments.' },
              { title: 'Auto Reconcile', desc: 'Transactions auto-match and sync when online.' },
            ].map((s, i) => (
              <div key={i} className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)]">
                <h4 className="font-semibold">{s.title}</h4>
                <p className="text-[var(--muted)] mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div ref={rootRef} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 relative overflow-visible">
          <div className="relative w-full h-64 rounded-lg overflow-visible bg-gradient-to-br from-[#effbf7] to-[#dbfff0]">
            <div ref={phoneA} className="absolute left-6 top-6 w-40 h-56 rounded-lg shadow-lg overflow-hidden bg-white flex items-center justify-center">
              <Image src="/images/upi-cashpoint/Install Terminal.png" alt="Install Terminal" width={240} height={320} className="object-contain" />
            </div>

            <div ref={phoneB} className="absolute left-28 top-12 w-36 h-52 rounded-lg shadow-md overflow-hidden bg-white flex items-center justify-center">
              <Image src="/images/upi-cashpoint/Field Agents.png" alt="Field Agents" width={220} height={300} className="object-contain" />
            </div>

            <div ref={terminal} className="absolute right-6 bottom-6 w-48 h-36 rounded-lg shadow-md overflow-hidden bg-white flex items-center justify-center">
              <Image src="/images/upi-cashpoint/Auto Reconcile.png" alt="Auto Reconcile" width={300} height={200} className="object-contain" />
            </div>

            <div ref={qr} className="absolute right-20 top-8 w-16 h-16 rounded-full bg-white/90 flex items-center justify-center border border-[var(--border)]">
              <div className="w-10 h-10 bg-[var(--primary)] rounded-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

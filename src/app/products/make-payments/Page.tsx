'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import PaymentMethodsGrid from './explore/components/PaymentMethodsGrid';
import ComparisonSection from './explore/components/ComparisonSection';
import IntegrationShowcase from './explore/components/IntegrationShowcase';
import UseCasesSection from './explore/components/UseCasesSection';
import Button from '@/components/ui/Button';

/* ─────────────────────────────────────────────
   HERO DASHBOARD COMPONENTS (from original page)
───────────────────────────────────────────── */

function SendPaymentCard() {
  const modes = [
    { label: 'NEFT', icon: <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> },
    { label: 'RTGS', icon: <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg> },
    { label: 'IMPS', icon: <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
    { label: 'UPI', icon: <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg> },
  ];

  return (
    <motion.div className="bg-[#1a2b1f] border border-white/[0.07] rounded-2xl p-6 h-full" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
      <div className="flex items-center gap-3 mb-5">
        <p className="text-emerald-400 font-bold text-base">Send Payment</p>
        <div className="flex-1 h-px bg-[var(--card)]" />
      </div>
      <p className="text-gray-500 text-[11px] mb-0.5">Buyer Detail</p>
      <p className="text-[var(--foreground)] font-semibold text-sm">Sun Private Limited</p>
      <p className="text-emerald-400 font-bold text-2xl mt-0.5 mb-5">₹48,560.00</p>
      <p className="text-gray-500 text-[11px] mb-3">Select Payment Method</p>
      <div className="flex gap-2">
        {modes.map(({ label, icon }) => (
          <div key={label} className="bg-[var(--card)] rounded-xl p-3 flex flex-col items-center gap-1.5 flex-1 cursor-pointer hover:shadow-sm transition-shadow">
            {icon}
            <span className="text-[9px] font-bold text-gray-600">{label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

const utilityIcons: Record<string, React.ReactNode> = {
  'ELECTRICITY': <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  'GAS': <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg>,
  'TELEPHONE': <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
  'INTERNET': <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>,
  'PHONE': <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
  'WATER': <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3C12 3 6 10 6 14a6 6 0 0012 0c0-4-6-11-6-11z" /></svg>,
};

function HeroDashboard() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_220px] gap-4 mb-4">
        <div className="flex flex-row lg:flex-col gap-4">
          <motion.div className="bg-[#1a2b1f] border border-white/[0.07] rounded-2xl px-4 py-4 flex items-center gap-3 flex-1" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
            <div className="w-11 h-11 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
              <p className="text-emerald-400 text-lg font-bold leading-none">2 Sec</p>
              <p className="text-gray-400 text-[11px] mt-1 leading-snug">Average<br/>Transfer Time</p>
            </div>
          </motion.div>
          <motion.div className="bg-[#1a2b1f] border border-white/[0.07] rounded-2xl p-5 flex flex-col items-center justify-center gap-3 flex-1" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            <div className="w-14 h-14 rounded-full bg-[#233028] border border-emerald-900/50 flex items-center justify-center">
              <svg className="w-7 h-7 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <p className="text-[var(--foreground)] font-semibold text-sm">Secure Payout</p>
          </motion.div>
        </div>
        <div className="relative min-h-[280px]">
          <div className="h-full"><SendPaymentCard /></div>
          <div className="absolute bottom-0 right-6 w-[160px] lg:w-[200px] pointer-events-none select-none">
            <Image src="/images/salary-disbursment/jumping-man.png" alt="" width={300} height={400} className="w-full h-auto" style={{ mixBlendMode: 'multiply' }} />
          </div>
        </div>
        <div className="flex flex-row lg:flex-col gap-4">
          <motion.div className="bg-[#1a2b1f] border border-white/[0.07] rounded-2xl p-5 flex flex-col items-center justify-center gap-3 flex-1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
            <div className="w-14 h-14 rounded-full bg-[#233028] border border-emerald-900/50 flex items-center justify-center">
              <svg className="w-7 h-7 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
            <p className="text-[var(--foreground)] font-semibold text-sm text-center">Bulk<br/>Transfers</p>
          </motion.div>
          <motion.div className="bg-[#1a2b1f] border border-white/[0.07] rounded-2xl p-4 flex-1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            <div className="flex items-center justify-between mb-3">
              <p className="text-[var(--foreground)] font-semibold text-xs">Payout Mode</p>
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 42 42" className="w-16 h-16 shrink-0 -rotate-90">
                <circle cx="21" cy="21" r="15.915" fill="none" stroke="#1e3a28" strokeWidth="5" />
                <motion.circle cx="21" cy="21" r="15.915" fill="none" stroke="#109F58" strokeWidth="5" strokeDasharray="56 44" strokeLinecap="round" initial={{ strokeDashoffset: 100 }} animate={{ strokeDashoffset: 0 }} transition={{ duration: 1.2, delay: 0.6 }} />
                <motion.circle cx="21" cy="21" r="15.915" fill="none" stroke="#3b82f6" strokeWidth="5" strokeDasharray="24 76" strokeDashoffset="-56" strokeLinecap="round" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1 }} />
              </svg>
              <div>
                <p className="text-[10px] text-gray-500">RTGS</p>
                <p className="text-[var(--foreground)] text-sm font-bold">₹40,000</p>
                <div className="mt-2 space-y-0.5">
                  <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /><span className="text-[9px] text-gray-400">NEFT</span></div>
                  <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" /><span className="text-[9px] text-gray-400">IMPS</span></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div className="bg-[#1a2b1f] border border-white/[0.07] rounded-2xl px-6 py-5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}>
        <p className="text-gray-400 text-xs font-semibold mb-4">Quick Filters</p>
        <div className="flex gap-6 md:gap-10 overflow-x-auto pb-1">
          {['ELECTRICITY', 'GAS', 'TELEPHONE', 'INTERNET', 'PHONE', 'WATER'].map((key) => (
            <div key={key} className="flex flex-col items-center gap-2 shrink-0 cursor-pointer group">
              <div className="w-11 h-11 rounded-full bg-[#233028] border border-emerald-900/40 flex items-center justify-center group-hover:border-emerald-500/50 transition-colors">{utilityIcons[key]}</div>
              <p className="text-[9px] text-gray-500 uppercase text-center w-14 leading-tight">{key} BILL</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   FAQ
───────────────────────────────────────────── */
const faqs = [
  { q: 'What types of payments can I manage with RupeeFlow?', a: 'RupeeFlow supports the full spectrum of business payables — vendor payments, rent, utility bills, bulk payouts, GST and statutory payments, payroll, and invoice management. Everything from a single, unified platform.' },
  { q: 'How does the maker-checker approval workflow work?', a: 'You can configure multi-level approval hierarchies so that payments are initiated by a maker, reviewed by a checker, and released only after all required approvals. This prevents unauthorized transactions and ensures compliance.' },
  { q: 'Can I schedule recurring payments automatically?', a: 'Yes. RupeeFlow lets you set up recurring payment schedules for rent, utilities, salaries, and vendor retainers. Payments go out automatically on the configured date.' },
  { q: 'What payment modes are supported for outgoing payments?', a: 'We support NEFT, RTGS, IMPS, and UPI for all outgoing payments. You can choose the mode based on urgency, amount threshold, or your banking partner preferences.' },
  { q: 'Is reconciliation automated?', a: 'Yes. RupeeFlow automatically matches payments with corresponding invoices and purchase orders. This eliminates manual reconciliation effort and ensures your books are always accurate.' },
  { q: 'How secure is RupeeFlow for business payments?', a: 'RupeeFlow is ISO 27001 compliant with 256-bit AES encryption, real-time fraud detection, and multi-factor authentication. All payment operations are logged with a full audit trail.' },
  { q: 'Can I integrate RupeeFlow with my existing ERP or accounting software?', a: 'Yes. RupeeFlow provides REST APIs and native integrations with popular ERPs like SAP, Tally, Zoho Books, and QuickBooks.' },
];

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <button className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors" onClick={onToggle}>
        <span className="fontheading text-base text-gray-900 pr-8">{q}</span>
        <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${open ? 'bg-emerald-500 text-[var(--foreground)]' : 'bg-gray-100 text-gray-500'}`}>
          <svg className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-45' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
            <div className="px-6 pb-5"><p className="text-sm text-gray-500 fontbody2 leading-relaxed">{a}</p></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function MakePaymentsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="w-full relative">
      {/* HERO */}
      <section className="relative bg-[var(--background)] overflow-hidden pb-16">
        <div className="absolute -left-[100px] top-[10%] w-[500px] h-[500px] rounded-full opacity-35 blur-[130px] pointer-events-none" style={{ background: 'radial-gradient(circle, #109F58 0%, #055949 40%, transparent 70%)' }} />
        <div className="absolute right-[5%] top-[30%] w-[300px] h-[300px] rounded-full opacity-20 blur-[100px] pointer-events-none" style={{ background: 'radial-gradient(circle, #109F58 0%, transparent 70%)' }} />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-28 pb-14 text-center">
          <motion.div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-1.5 mb-6" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase">Make Payments</span>
          </motion.div>
          
          <motion.h1 className="fontheading text-4xl sm:text-5xl lg:text-[3.4rem] leading-tight text-[var(--foreground)] mb-5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            The Control Tower for<br />All Your <span className="text-emerald-400">Business Payments</span>
          </motion.h1>
          
          <motion.p className="text-gray-400 text-base md:text-lg fontbody2 leading-relaxed mb-10 max-w-2xl mx-auto" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            The most powerful payables platform for growing businesses — one dashboard for every outgoing payment you make.
          </motion.p>
          
          <motion.div className="flex flex-wrap gap-4 justify-center" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <Button href="/contact" className="px-8 py-3.5 text-sm font-semibold">Get Started Free</Button>
            <Button href="/contact" className="px-8 py-3.5 text-sm font-semibold bg-[var(--card)] text-[var(--foreground)] border border-[var(--border)] hover:bg-[var(--card)]">Talk to Us →</Button>
          </motion.div>
        </div>
        
        <HeroDashboard />
      </section>

      {/* PAYMENT METHODS GRID */}
      <PaymentMethodsGrid />

      {/* COMPARISON SECTION */}
      <ComparisonSection />

      {/* INTEGRATION SHOWCASE */}
      <IntegrationShowcase />

      {/* USE CASES */}
      <UseCasesSection />

      {/* TRUST STRIP */}
      <section className="bg-[var(--card)] py-14 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            {[
              { value: '₹500Cr+', label: 'Payments Processed' },
              { value: '10,000+', label: 'Businesses Trust Us' },
              { value: '99.9%', label: 'Platform Uptime' },
              { value: '< 2 Sec', label: 'Average Settlement' },
              { value: '24/7', label: 'Dedicated Support' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="fontheading text-2xl md:text-3xl text-emerald-600">{s.value}</p>
                <p className="text-xs text-gray-400 mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 bg-[var(--card)]">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-emerald-600 text-xs font-semibold tracking-widest uppercase bg-emerald-50 rounded-full px-4 py-1.5 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              FAQ
            </span>
            <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
              Frequently Asked <span className="text-emerald-500">Questions</span>
            </h2>
            <p className="mt-3 text-gray-500 text-sm fontbody2">Everything you need to know about RupeeFlow&apos;s payment automation platform.</p>
          </motion.div>
          
          <motion.div className="space-y-3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
            ))}
          </motion.div>
          
          <motion.div className="text-center mt-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <p className="text-sm text-gray-400 mb-4">Still have questions?</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-500 text-[var(--foreground)] text-sm font-semibold hover:bg-emerald-600 transition-colors">
              Talk to our team
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

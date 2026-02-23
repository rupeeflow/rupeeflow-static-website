'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import AdvancedAnalyticsIcon from '../../../public/icons/salary-disbursment/AdvancedIcon'
import AnalyticsIcon from '../../../public/icons/salary-disbursment/AnalyticsIcon'
import ApprovalIcon from '../../../public/icons/salary-disbursment/Approvalcon'
import ClockIcon from '../../../public/icons/salary-disbursment/ClockIcon'
import CloudIcon from '../../../public/icons/salary-disbursment/CloudIcon'
import CrossRoundedIcon from '../../../public/icons/salary-disbursment/CrossRoundedIcon'
import DataMmgIcon from '../../../public/icons/salary-disbursment/DataMmgIcon'
import ERPIcon from '../../../public/icons/salary-disbursment/ERPIcon'
import MultiSupportIcon from '../../../public/icons/salary-disbursment/MultiSupportIcon'
import WalletIcon from '../../../public/icons/salary-disbursment/WalletIcon'
import SalaryFaq from '@/components/sections/salaryDisbursement/SalaryFaq'

/* ─────────────────────────────────────────────
   MOCKUP COMPONENTS
───────────────────────────────────────────── */

/* 1. One-Click Salary Disbursement */
function BulkUploadMockup() {
  const employees = [
    { name: 'Priya Sharma', role: 'Engineering', amount: '₹1,25,000', status: 'paid' },
    { name: 'Rajan Mehta', role: 'Design', amount: '₹95,000', status: 'paid' },
    { name: 'Anita Rao', role: 'Finance', amount: '₹88,000', status: 'processing' },
    { name: 'Kunal Das', role: 'Marketing', amount: '₹72,000', status: 'pending' },
  ]
  return (
    <div className="w-full bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-4 flex items-center justify-between">
        <div>
          <p className="text-white text-xs font-semibold opacity-80">January 2025 Payroll</p>
          <p className="text-white text-lg font-bold">₹12,45,000</p>
        </div>
        <motion.button whileTap={{ scale: 0.95 }} className="bg-white text-emerald-600 text-xs font-bold px-4 py-2 rounded-full shadow">
          Pay All →
        </motion.button>
      </div>
      <div className="p-4 space-y-2">
        {employees.map((emp, i) => (
          <motion.div
            key={emp.name}
            className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-xs font-bold text-emerald-700">
                {emp.name[0]}
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-800">{emp.name}</p>
                <p className="text-[10px] text-gray-400">{emp.role}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold text-gray-800">{emp.amount}</p>
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                emp.status === 'paid' ? 'bg-emerald-100 text-emerald-600' :
                emp.status === 'processing' ? 'bg-amber-100 text-amber-600' :
                'bg-gray-100 text-gray-500'
              }`}>{emp.status}</span>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="px-5 pb-4 flex gap-2">
        {['NEFT', 'RTGS', 'IMPS', 'UPI'].map((mode) => (
          <span key={mode} className="text-[10px] font-semibold bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full border border-blue-100">{mode}</span>
        ))}
      </div>
    </div>
  )
}

/* 2. Multi-Level Approval Workflows */
function ApprovalFlowMockup() {
  const steps = [
    { role: 'HR Manager', action: 'Batch Created', user: 'Neha K.', done: true },
    { role: 'Finance Lead', action: 'Reviewed & Approved', user: 'Arjun M.', done: true },
    { role: 'CFO', action: 'Final Authorization', user: 'Sunita R.', done: false },
  ]
  return (
    <div className="w-full bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
      <div className="px-5 pt-5 pb-4 border-b border-gray-100">
        <div className="flex items-center justify-between mb-1">
          <p className="text-sm font-bold text-gray-800">Salary Batch #2025-01</p>
          <span className="text-[10px] font-semibold bg-amber-100 text-amber-600 px-2.5 py-1 rounded-full">Pending CFO</span>
        </div>
        <p className="text-xs text-gray-400">₹48,25,000 · 387 employees</p>
      </div>
      <div className="p-5">
        {steps.map((step, i) => (
          <div key={step.role} className="flex gap-4">
            <div className="flex flex-col items-center">
              <motion.div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${step.done ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-400 border-2 border-dashed border-gray-300'}`}
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                {step.done ? '✓' : i + 1}
              </motion.div>
              {i < steps.length - 1 && <div className={`w-0.5 h-10 mt-1 ${step.done ? 'bg-emerald-300' : 'bg-gray-200'}`} />}
            </div>
            <motion.div
              className="pb-4 flex-1"
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 + 0.05 }}
            >
              <p className="text-xs font-semibold text-gray-800">{step.role}</p>
              <p className="text-[10px] text-gray-400">{step.action} · {step.user}</p>
            </motion.div>
          </div>
        ))}
      </div>
      <div className="px-5 pb-5 flex gap-2">
        <motion.button whileHover={{ scale: 1.02 }} className="flex-1 bg-emerald-500 text-white text-xs font-bold py-2.5 rounded-xl">
          Approve & Release
        </motion.button>
        <motion.button whileHover={{ scale: 1.02 }} className="px-4 bg-gray-100 text-gray-500 text-xs font-bold py-2.5 rounded-xl">
          Reject
        </motion.button>
      </div>
    </div>
  )
}

/* 3. Real-Time Payroll Tracking */
function TrackingMockup() {
  const events = [
    { time: '10:02 AM', label: 'Batch initiated', sub: '387 records uploaded', color: 'bg-blue-500' },
    { time: '10:03 AM', label: 'Approved by CFO', sub: 'Authorization complete', color: 'bg-emerald-500' },
    { time: '10:04 AM', label: '312 payments sent', sub: 'NEFT · RTGS dispatched', color: 'bg-emerald-400' },
    { time: '10:06 AM', label: '3 failed — retrying', sub: 'Invalid account detected', color: 'bg-amber-500' },
    { time: '10:08 AM', label: 'All payments settled', sub: '387/387 successful', color: 'bg-emerald-500' },
  ]
  return (
    <div className="w-full bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
      <div className="px-5 pt-5 pb-3 flex items-center justify-between border-b border-gray-100">
        <p className="text-sm font-bold text-gray-800">Live Payroll Status</p>
        <span className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-600">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />Live
        </span>
      </div>
      <div className="px-5 py-4">
        <div className="flex justify-between text-[10px] text-gray-400 mb-1.5">
          <span>Progress</span>
          <span className="font-semibold text-emerald-600">387 / 387</span>
        </div>
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-emerald-500 rounded-full"
            initial={{ width: '0%' }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
        </div>
      </div>
      <div className="px-5 pb-4 space-y-3">
        {events.map((ev, i) => (
          <motion.div
            key={ev.label}
            className="flex items-start gap-3"
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className={`w-2 h-2 rounded-full ${ev.color} mt-1 shrink-0`} />
            <div className="flex-1">
              <p className="text-xs font-semibold text-gray-800">{ev.label}</p>
              <p className="text-[10px] text-gray-400">{ev.sub}</p>
            </div>
            <span className="text-[10px] text-gray-400 shrink-0">{ev.time}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

/* 4. Seamless ERP & HRMS Integration */
function IntegrationsMockup() {
  const integrations = [
    { name: 'SAP', color: 'bg-blue-50 border-blue-200 text-blue-700' },
    { name: 'Zoho', color: 'bg-red-50 border-red-200 text-red-600' },
    { name: 'Tally', color: 'bg-amber-50 border-amber-200 text-amber-700' },
    { name: 'Darwinbox', color: 'bg-violet-50 border-violet-200 text-violet-700' },
    { name: 'QuickBooks', color: 'bg-green-50 border-green-200 text-green-700' },
    { name: 'GreytHR', color: 'bg-orange-50 border-orange-200 text-orange-600' },
  ]
  return (
    <div className="w-full bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
      <div className="px-5 pt-5 pb-3 border-b border-gray-100">
        <p className="text-sm font-bold text-gray-800">Connected Platforms</p>
        <p className="text-[10px] text-gray-400 mt-0.5">Sync employee data automatically</p>
      </div>
      <div className="p-5 grid grid-cols-3 gap-3">
        {integrations.map((intg, i) => (
          <motion.div
            key={intg.name}
            className={`${intg.color} border rounded-xl p-3 text-center`}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <p className="text-xs font-bold">{intg.name}</p>
            <p className="text-[9px] mt-0.5 opacity-70">Connected</p>
          </motion.div>
        ))}
      </div>
      <div className="px-5 pb-5">
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3 flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-bold text-emerald-700">Auto-sync active</p>
            <p className="text-[10px] text-emerald-500">Last synced: 2 min ago · 1,247 employees</p>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function SalaryDisbursementPage() {
  return (
    <div className="w-full relative">

      {/* ── HERO SECTION — Text Left / Image Right ── */}
      <section className="relative min-h-screen bg-[#020506] overflow-hidden flex items-center">
        {/* Spotlights */}
        <div
          className="absolute -left-[100px] top-[10%] w-[400px] h-[400px] rounded-full opacity-50 blur-[120px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #109F58 0%, #055949 40%, transparent 70%)' }}
        />
        <div
          className="absolute right-[-50px] top-[25%] w-[500px] h-[500px] rounded-full opacity-30 blur-[100px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #109F58 0%, transparent 70%)' }}
        />
        {/* Green swooshes */}
        <div className="absolute left-[-60px] bottom-[20%] w-[180px] h-[300px] pointer-events-none z-[5]">
          <div className="w-full h-full rounded-[50%] border-[3px] border-emerald-500/60" style={{ transform: 'rotate(-20deg)' }} />
        </div>
        <div className="absolute right-[-40px] bottom-[8%] w-[200px] h-[350px] pointer-events-none z-[5]">
          <div className="w-full h-full rounded-[50%] border-[3px] border-emerald-500/40" style={{ transform: 'rotate(25deg)' }} />
        </div>

        {/* Content — text LEFT, image RIGHT */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* LEFT — Text */}
          <motion.div
            className="flex-1 text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-1.5 mb-6"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase">Salary Disbursements</span>
            </motion.div>

            <h1 className="fontheading text-4xl sm:text-5xl lg:text-[3.4rem] leading-tight text-white mb-6">
              Bulk <span className="text-emerald-400">Salary Disbursement</span>
              <br />in One Click
            </h1>

            <p className="text-gray-400 max-w-lg text-base md:text-lg fontbody2 leading-relaxed mb-10">
              Your ultimate solution for accurate, compliant, and stress-free salary disbursement.
              Advanced payroll management designed to meet your workforce&apos;s diverse needs.
            </p>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap gap-10 mb-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              {[
                { value: '10K+', label: 'Businesses' },
                { value: '99.9%', label: 'Success Rate' },
                { value: '< 2s', label: 'Per Transfer' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="fontheading text-2xl text-emerald-400">{s.value}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                href="#"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-white font-semibold text-sm transition-all duration-300 shadow-lg border border-white/10"
                style={{ background: 'linear-gradient(135deg, #53BEC2 0%, #00EF64 100%)' }}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white/80" />
                Pay Your Employees
              </Link>
              <Link
                href="#"
                className="px-8 py-3.5 rounded-full border border-emerald-500/50 text-white font-semibold text-sm hover:bg-emerald-500/10 transition-colors"
              >
                See a Demo →
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT — jumping-man image */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full max-w-[480px]"
            >
              <Image
                src="/images/salary-disbursment/jumping-man.png"
                alt="Salary Disbursement"
                width={520}
                height={560}
                className="w-full h-auto"
                style={{ mixBlendMode: 'screen' }}
                priority
              />
              {/* Floating badges */}
              <motion.div
                className="absolute top-8 -left-4 bg-white text-gray-800 text-xs font-bold px-4 py-2 rounded-full shadow-lg border border-gray-100"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                ✓ 387 Paid
              </motion.div>
              <motion.div
                className="absolute bottom-12 -right-4 bg-emerald-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                ₹48.2L Disbursed
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ── STREAMLINE YOUR PAYROLL — Alternating Features ── */}
      <section className="relative py-24 bg-[#f4f8fb] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
              Streamline Your <span className="text-emerald-500">Payroll</span> with Rupeeflow
            </h2>
          </motion.div>

          <div className="space-y-24">

            {/* 1. One-Click Salary Disbursement */}
            <motion.div
              className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <WalletIcon className="w-12 h-12 shrink-0" />
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">One-Click Salary Disbursement</h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Pay your entire workforce in a single click. Upload salary data in bulk via CSV or
                  use our API to automate monthly payroll runs. Rupeeflow handles NEFT, RTGS, IMPS,
                  and UPI transfers seamlessly.
                </p>
                <Link href="#" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors">
                  Get Started
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              <div className="lg:w-[45%]"><BulkUploadMockup /></div>
            </motion.div>

            {/* 2. Multi-Level Approval Workflows */}
            <motion.div
              className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <ApprovalIcon className="w-12 h-12 shrink-0" />
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">Multi-Level Approval Workflows</h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Set up configurable maker-checker approval hierarchies for salary batches. Ensure
                  every disbursement is verified by authorized personnel before execution, maintaining
                  compliance and preventing unauthorized payouts.
                </p>
                <Link href="#" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors">
                  Get Started
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              <div className="lg:w-[45%]"><ApprovalFlowMockup /></div>
            </motion.div>

            {/* 3. Real-Time Payroll Tracking */}
            <motion.div
              className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <ClockIcon className="w-12 h-12 shrink-0" />
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">Real-Time Payroll Tracking</h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Monitor every salary payment in real time from initiation to completion. Get instant
                  notifications for successful transfers, failed transactions, and pending approvals.
                </p>
                <Link href="#" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors">
                  Get Started
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              <div className="lg:w-[45%]"><TrackingMockup /></div>
            </motion.div>

            {/* 4. Seamless ERP & HRMS Integration */}
            <motion.div
              className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <ERPIcon className="w-12 h-12 shrink-0" />
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">Seamless ERP & HRMS Integration</h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Connect Rupeeflow with your existing ERP, HRMS, or accounting software effortlessly.
                  Sync employee data, automate payroll runs, and eliminate manual data entry.
                </p>
                <Link href="#" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors">
                  Get Started
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              <div className="lg:w-[45%]"><IntegrationsMockup /></div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section className="relative py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
              Rupeeflow <span className="text-emerald-500">Salary Disbursement</span> Features
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { Icon: WalletIcon, title: 'One-Click Bulk Payroll', desc: 'Pay all employees simultaneously with a single batch upload.' },
              { Icon: ClockIcon, title: 'Scheduled Payroll', desc: 'Set recurring schedules for automatic salary disbursement.' },
              { Icon: ApprovalIcon, title: 'Maker-Checker Approvals', desc: 'Dual authorization for every salary batch before processing.' },
              { Icon: CloudIcon, title: 'Cloud-Based Platform', desc: 'Access your payroll dashboard from anywhere, anytime.' },
              { Icon: AnalyticsIcon, title: 'Payroll Analytics', desc: 'Detailed insights into salary costs, trends, and department breakdowns.' },
              { Icon: AdvancedAnalyticsIcon, title: 'Advanced Reporting', desc: 'Generate custom reports for tax filing, audits, and compliance.' },
              { Icon: DataMmgIcon, title: 'Employee Data Management', desc: 'Centralized employee records with bank details and salary history.' },
              { Icon: MultiSupportIcon, title: 'Multi-Channel Support', desc: 'Disburse via NEFT, RTGS, IMPS, or UPI based on your needs.' },
              { Icon: ERPIcon, title: 'ERP Integration', desc: 'Sync with Zoho, Tally, SAP, and other platforms seamlessly.' },
              { Icon: CrossRoundedIcon, title: 'Error Handling', desc: 'Auto-detect failed transactions and retry with smart error resolution.' },
            ].map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <div className="flex justify-center mb-4"><Icon className="w-12 h-12" /></div>
                <h3 className="fontheading text-sm text-gray-900 mb-2">{title}</h3>
                <p className="text-xs text-gray-500 fontbody2 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <SalaryFaq />
    </div>
  )
}

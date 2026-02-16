import Link from 'next/link'
import Image from 'next/image'
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

export default function SalaryDisbursementPage() {
  return (
    <div className="w-full relative">
      {/* ── HERO SECTION ── */}
      <section className="relative min-h-screen bg-[#020506] overflow-hidden">
        {/* Spotlights */}
        <div
          className="absolute -left-[100px] top-[10%] w-[400px] h-[400px] rounded-full opacity-50 blur-[120px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #109F58 0%, #055949 40%, transparent 70%)',
          }}
        />
        <div
          className="absolute right-[-50px] top-[25%] w-[500px] h-[500px] rounded-full opacity-30 blur-[100px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #109F58 0%, transparent 70%)',
          }}
        />

        {/* Green swoosh — left */}
        <div className="absolute left-[-60px] bottom-[20%] w-[180px] h-[300px] pointer-events-none z-[5]">
          <div
            className="w-full h-full rounded-[50%] border-[3px] border-emerald-500/60"
            style={{ transform: 'rotate(-20deg)' }}
          />
        </div>

        {/* Green swoosh — bottom right */}
        <div className="absolute right-[-40px] bottom-[8%] w-[200px] h-[350px] pointer-events-none z-[5]">
          <div
            className="w-full h-full rounded-[50%] border-[3px] border-emerald-500/40"
            style={{ transform: 'rotate(25deg)' }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center pt-48 px-6">
          <h1 className="fontheading text-3xl sm:text-4xl md:text-[2.5rem] lg:text-[3.5rem] leading-tight text-white">
            Bulk <span className="text-emerald-400">Salary Disbursement</span>
            <br />
            in One Click
          </h1>

          <p className="mt-8 text-gray-400 max-w-2xl mx-auto text-base md:text-lg fontbody2 leading-relaxed">
            Your ultimate solution for accurate, compliant, and stress-free salary disbursement.
            Empower your business with Rupeeflow&apos;s advanced payroll management software in India,
            designed to meet your workforce&apos;s diverse needs and ensure seamless payroll
          </p>

          {/* CTA Button — gradient #53BEC2 → #00EF64 */}
          <div className="flex justify-center mt-10">
            <Link
              href="#"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-white font-semibold text-sm transition-all duration-300 shadow-lg border border-white/10"
              style={{
                background: 'linear-gradient(135deg, #53BEC2 0%, #00EF64 100%)',
              }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-white/80" />
              Pay Your Employees
            </Link>
          </div>

          {/* Salary list image */}
          <div className="relative mt-14 max-w-3xl mx-auto pb-8">
            <Image
              src="/images/salary-disbursment/salary-list.png"
              alt="Pay Your Employees Dashboard"
              width={800}
              height={500}
              className="w-full h-auto rounded-xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── STREAMLINE YOUR PAYROLL — Alternating Features ── */}
      <section className="relative py-24 bg-[#f4f8fb] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
              Streamline Your <span className="text-emerald-500">Payroll</span> with Rupeeflow
            </h2>
          </div>

          <div className="space-y-24">

            {/* 1. One-Click Salary Disbursement */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
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
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Get Started
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              <div className="lg:w-[40%] flex justify-center">
                <div className="w-full max-w-[340px] h-[260px] bg-white rounded-xl border border-gray-200 flex items-center justify-center shadow-sm">
                  <svg className="w-14 h-14 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* 2. Multi-Level Approval Workflows */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
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
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Get Started
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              <div className="lg:w-[40%] flex justify-center">
                <div className="w-full max-w-[340px] h-[260px] bg-white rounded-xl border border-gray-200 flex items-center justify-center shadow-sm">
                  <svg className="w-14 h-14 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* 3. Real-Time Payroll Tracking */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <ClockIcon className="w-12 h-12 shrink-0" />
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">Real-Time Payroll Tracking</h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Monitor every salary payment in real time from initiation to completion. Get instant
                  notifications for successful transfers, failed transactions, and pending approvals to
                  maintain full visibility over your payroll operations.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Get Started
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              <div className="lg:w-[40%] flex justify-center">
                <div className="w-full max-w-[340px] h-[260px] bg-white rounded-xl border border-gray-200 flex items-center justify-center shadow-sm">
                  <svg className="w-14 h-14 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* 4. Seamless ERP & HRMS Integration */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <ERPIcon className="w-12 h-12 shrink-0" />
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">Seamless ERP & HRMS Integration</h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Connect Rupeeflow with your existing ERP, HRMS, or accounting software effortlessly.
                  Sync employee data, automate payroll runs, and eliminate manual data entry with
                  pre-built integrations for popular platforms.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Get Started
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              <div className="lg:w-[40%] flex justify-center">
                <div className="w-full max-w-[340px] h-[260px] bg-white rounded-xl border border-gray-200 flex items-center justify-center shadow-sm">
                  <svg className="w-14 h-14 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SALARY DISBURSEMENT FEATURES — 2x5 Grid ── */}
      <section className="relative py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
              Rupeeflow <span className="text-emerald-500">Salary Disbursement</span> Features
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow text-center">
              <div className="flex justify-center mb-4">
                <WalletIcon className="w-12 h-12" />
              </div>
              <h3 className="fontheading text-sm text-gray-900 mb-2">One-Click Bulk Payroll</h3>
              <p className="text-xs text-gray-500 fontbody2 leading-relaxed">
                Pay all employees simultaneously with a single batch upload.
              </p>
            </div>

            {/* 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow text-center">
              <div className="flex justify-center mb-4">
                <ClockIcon className="w-12 h-12" />
              </div>
              <h3 className="fontheading text-sm text-gray-900 mb-2">Scheduled Payroll</h3>
              <p className="text-xs text-gray-500 fontbody2 leading-relaxed">
                Set recurring schedules for automatic salary disbursement.
              </p>
            </div>

            {/* 3 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow text-center">
              <div className="flex justify-center mb-4">
                <ApprovalIcon className="w-12 h-12" />
              </div>
              <h3 className="fontheading text-sm text-gray-900 mb-2">Maker-Checker Approvals</h3>
              <p className="text-xs text-gray-500 fontbody2 leading-relaxed">
                Dual authorization for every salary batch before processing.
              </p>
            </div>

            {/* 4 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow text-center">
              <div className="flex justify-center mb-4">
                <CloudIcon className="w-12 h-12" />
              </div>
              <h3 className="fontheading text-sm text-gray-900 mb-2">Cloud-Based Platform</h3>
              <p className="text-xs text-gray-500 fontbody2 leading-relaxed">
                Access your payroll dashboard from anywhere, anytime.
              </p>
            </div>

            {/* 5 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow text-center">
              <div className="flex justify-center mb-4">
                <AnalyticsIcon className="w-12 h-12" />
              </div>
              <h3 className="fontheading text-sm text-gray-900 mb-2">Payroll Analytics</h3>
              <p className="text-xs text-gray-500 fontbody2 leading-relaxed">
                Detailed insights into salary costs, trends, and department breakdowns.
              </p>
            </div>

            {/* 6 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow text-center">
              <div className="flex justify-center mb-4">
                <AdvancedAnalyticsIcon className="w-12 h-12" />
              </div>
              <h3 className="fontheading text-sm text-gray-900 mb-2">Advanced Reporting</h3>
              <p className="text-xs text-gray-500 fontbody2 leading-relaxed">
                Generate custom reports for tax filing, audits, and compliance.
              </p>
            </div>

            {/* 7 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow text-center">
              <div className="flex justify-center mb-4">
                <DataMmgIcon className="w-12 h-12" />
              </div>
              <h3 className="fontheading text-sm text-gray-900 mb-2">Employee Data Management</h3>
              <p className="text-xs text-gray-500 fontbody2 leading-relaxed">
                Centralized employee records with bank details and salary history.
              </p>
            </div>

            {/* 8 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow text-center">
              <div className="flex justify-center mb-4">
                <MultiSupportIcon className="w-12 h-12" />
              </div>
              <h3 className="fontheading text-sm text-gray-900 mb-2">Multi-Channel Support</h3>
              <p className="text-xs text-gray-500 fontbody2 leading-relaxed">
                Disburse via NEFT, RTGS, IMPS, or UPI based on your needs.
              </p>
            </div>

            {/* 9 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow text-center">
              <div className="flex justify-center mb-4">
                <ERPIcon className="w-12 h-12" />
              </div>
              <h3 className="fontheading text-sm text-gray-900 mb-2">ERP Integration</h3>
              <p className="text-xs text-gray-500 fontbody2 leading-relaxed">
                Sync with Zoho, Tally, SAP, and other platforms seamlessly.
              </p>
            </div>

            {/* 10 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow text-center">
              <div className="flex justify-center mb-4">
                <CrossRoundedIcon className="w-12 h-12" />
              </div>
              <h3 className="fontheading text-sm text-gray-900 mb-2">Error Handling</h3>
              <p className="text-xs text-gray-500 fontbody2 leading-relaxed">
                Auto-detect failed transactions and retry with smart error resolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <SalaryFaq />
    </div>
  )
}

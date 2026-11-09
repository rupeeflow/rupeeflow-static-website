import Link from 'next/link'
import { ERP_URL, ONICHANNEL_LABEL } from '@/data/industrySolutions'
import NoLoanNotice from '@/components/ui/NoLoanNotice'

/** Shown when SHOW_LOAN_OFFERING is false — original loan page content stays in the route file. */
export default function LoanOfferingUnavailable() {
  return (
    <main className="min-h-[70vh] bg-white px-4 pb-20 pt-28 text-[#0B1628] sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <NoLoanNotice className="mb-6" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
          Not available
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          This product is currently unavailable
        </h1>
        <p className="mt-4 text-base leading-relaxed text-gray-600">
          RupeeFlow is focused on payments, payouts, and industry solutions.
          This page is not part of our current product offering.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-800 transition hover:border-emerald-500 hover:text-emerald-700"
          >
            Back to home
          </Link>
          <a
            href={ERP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 text-sm font-semibold text-white"
          >
            Open {ONICHANNEL_LABEL}
          </a>
        </div>
      </div>
    </main>
  )
}

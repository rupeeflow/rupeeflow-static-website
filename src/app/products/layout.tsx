import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products — Collect, Pay & Get Credit | RupeeFlow',
  description: "Explore RupeeFlow's complete product suite: Payment Gateway, UPI Collections, Payment Links, QR Code, Payment Button, Vendor Payments, Salary Disbursements, Bulk Payouts, Invoice Management, Bill Payments, Tax Payments, Merchant Cash Advance, Invoice Financing, and NRI Loans — all built for Indian businesses.",
  keywords: [
    'payment gateway India',
    'UPI collections',
    'payment links',
    'QR code payments',
    'payment button',
    'vendor payments',
    'salary disbursements',
    'bulk payouts',
    'invoice management',
    'bill payments',
    'tax payments',
    'merchant cash advance',
    'invoice financing',
    'NRI loans India',
    'business credit India',
    'RupeeFlow products',
  ],
  openGraph: {
    title: 'Products — Collect, Pay & Get Credit | RupeeFlow',
    description: 'Payment Gateway, UPI, Vendor Payouts, Bulk Transfers, Invoice Management & Business Credit — one platform for Indian businesses.',
    url: 'https://rupeeflow.co/products',
    siteName: 'RupeeFlow',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Products — Collect, Pay & Get Credit | RupeeFlow',
    description: 'Payment Gateway, UPI, Vendor Payouts, Bulk Transfers, Invoice Management & Business Credit.',
  },
  alternates: {
    canonical: 'https://rupeeflow.co/products',
  },
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

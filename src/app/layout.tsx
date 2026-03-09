import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import Script from 'next/script'

import './globals.css'
import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer'
import SmoothScrollProvider from '@/lib/smoothScrollProvider'
import Marquee from '@/components/sections/MarqueeSection'

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-nunito-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  applicationName: 'RupeeFlow',
  title: {
    default: 'RupeeFlow — Payments, Payouts & Business Credit for India',
    template: '%s | RupeeFlow',
  },
  description:
    'RupeeFlow is India\'s all-in-one fintech platform. Accept payments via Payment Gateway, UPI, Payment Links, QR Code & Payment Button. Send money with Vendor Payouts, Salary Disbursements, Bulk Transfers, Bill Payments & Invoice Management. Get business credit with Merchant Cash Advance, Invoice Financing & NRI Loans.',
  keywords: [
    'payment gateway India',
    'UPI collections',
    'payment links',
    'QR code payments',
    'payment button',
    'vendor payments',
    'bulk payouts',
    'salary disbursements',
    'invoice management',
    'business bill payments',
    'rental payments',
    'tax payments GST',
    'merchant cash advance',
    'invoice financing',
    'NRI emergency loans',
    'personal credit line',
    'business credit India',
    'payroll processing India',
    'auto collect',
    'instant settlements',
    'fintech India',
    'RupeeFlow',
  ],
  authors: [{ name: 'RupeeFlow' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://rupeeflow.co',
    siteName: 'RupeeFlow',
    title: 'RupeeFlow — Payments, Payouts & Business Credit for India',
    description:
      'Accept payments via Payment Gateway, UPI & QR Code. Send payouts for vendors, salary & bulk transfers. Get business credit with Merchant Cash Advance & Invoice Financing.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rupeeflow',
    creator: '@rupeeflow',
    title: 'RupeeFlow — Payments, Payouts & Business Credit for India',
    description:
      'India\'s all-in-one fintech platform for payment collection, vendor payouts, salary disbursements, and business credit.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/rupeeflow.png', type: 'image/png', sizes: '32x32' },
      { url: '/rupeeflow.svg', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${nunitoSans.variable} overflow-x-hidden`}>
      <head>
        {/* WebSite structured data — tells Google the site name is "RupeeFlow" */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'RupeeFlow',
              alternateName: 'RupeeFlow',
              url: 'https://rupeeflow.co',
            }),
          }}
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4B37EK5RBC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4B37EK5RBC');
          `}
        </Script>
      </head>
      <body className="antialiased background-black text-white overflow-x-hidden">
        <SmoothScrollProvider>
          <Navbar />
          <main>{children}</main>
          <Marquee />
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}

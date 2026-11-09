import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kirana Store Payment Solutions | UPI, QR & Bill Payments — RupeeFlow',
  description:
    'Run your kirana store with RupeeFlow — UPI and QR collections, bill payments, POS billing, and daily settlement reports built for small merchants.',
  keywords: [
    'kirana store payment solutions',
    'kirana UPI QR payments',
    'small shop payment gateway India',
    'grocery store bill payments',
    'kirana POS payments',
    'RupeeFlow kirana',
  ],
  authors: [{ name: 'RupeeFlow' }],
  alternates: {
    canonical: 'https://rupeeflow.co/solutions/kirana',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://rupeeflow.co/solutions/kirana',
    siteName: 'RupeeFlow',
    title:
      'Kirana Store Payment Solutions | UPI, QR & Bill Payments — RupeeFlow',
    description:
      'UPI, QR, bill payments, and settlement tools for kirana stores and small merchants across India.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rupeeflow',
    creator: '@rupeeflow',
    title: 'Kirana Store Payment Solutions | RupeeFlow',
    description:
      'UPI, QR, and bill payment tools built for kirana stores and small merchants.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function KiranaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

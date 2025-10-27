import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products - Payment Solutions for Modern Businesses | RupeeFlow',
  description: 'Comprehensive suite of payment products including UPI Switch, verification APIs, AEPS, DMT, IMPS, and NEFT solutions. Enterprise-grade payment infrastructure for India.',
  keywords: ['payment products', 'UPI switch', 'verification API', 'AEPS', 'DMT', 'IMPS', 'NEFT', 'payment gateway'],
  openGraph: {
    title: 'Products - Payment Solutions | RupeeFlow',
    description: 'Comprehensive payment infrastructure for modern businesses',
    url: 'https://rupeeflow.co/product',
    siteName: 'RupeeFlow',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Products - Payment Solutions | RupeeFlow',
    description: 'Comprehensive payment infrastructure for modern businesses',
  },
  alternates: {
    canonical: 'https://rupeeflow.co/product',
  },
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

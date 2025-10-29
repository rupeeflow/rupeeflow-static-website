import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kirana Loan Services - Quick Cash for Your Store | RupeeFlow',
  description: 'Get instant cash for your kirana store with RupeeFlow. Quick approval, low interest rates, and flexible repayment options. Power your business growth with hassle-free loans for small shop owners.',
  keywords: ['kirana store loan', 'small shop loan India', 'instant cash for shopkeepers', 'retail business loan', 'grocery store financing', 'working capital for kirana', 'merchant loan', 'small business loan', 'quick approval loan', 'kiranadhara loan'],
  authors: [{ name: 'RupeeFlow' }],
  alternates: {
    canonical: 'https://rupeeflow.co/kirana',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://rupeeflow.co/kirana',
    siteName: 'RupeeFlow',
    title: 'Kirana Loan Services - Quick Cash for Your Store | RupeeFlow',
    description: 'Get instant cash for your kirana store. Quick approval, low interest rates, and flexible repayment. Trusted by thousands of small shop owners across India.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RupeeFlow Kirana Loan Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rupeeflow',
    creator: '@rupeeflow',
    title: 'Kirana Loan Services - Quick Cash for Your Store',
    description: 'Instant cash loans for kirana stores. Quick approval, flexible repayment, low interest rates.',
    images: ['/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function KiranaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

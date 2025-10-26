import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DMT - Domestic Money Transfer API | RupeeFlow',
  description: 'Build instant money transfer solutions with RupeeFlow DMT API. Fast, secure, and compliant domestic transfers via IMPS and NEFT across India. Quick settlements with low latency APIs.',
  keywords: ['DMT', 'domestic money transfer', 'money transfer API', 'remittance API', 'instant transfer', 'DMT API'],
  openGraph: {
    title: 'DMT - Domestic Money Transfer API | RupeeFlow',
    description: 'Instant money transfer solutions with IMPS and NEFT across India',
    url: 'https://rupeeflow.co/solutions/dmt',
    siteName: 'RupeeFlow',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DMT API | RupeeFlow',
    description: 'Fast, secure domestic money transfer API',
  },
  alternates: {
    canonical: 'https://rupeeflow.co/solutions/dmt',
  },
}

export default function DMTLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

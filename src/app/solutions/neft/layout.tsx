import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NEFT API - Automate Reliable Bank Transfers | RupeeFlow',
  description: 'RupeeFlow NEFT API for fast, compliant inter-bank transfers. 24×7 availability, intelligent routing, automated reconciliation. Secure and RBI-compliant payment infrastructure for businesses.',
  keywords: ['NEFT', 'NEFT API', 'bank transfer', 'inter-bank transfer', 'payment automation', 'NEFT integration'],
  openGraph: {
    title: 'NEFT Payment API - Automate Bank Transfers | RupeeFlow',
    description: '24×7 NEFT transfers with intelligent routing and real-time reconciliation',
    url: 'https://rupeeflow.co/solutions/neft',
    siteName: 'RupeeFlow',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEFT API | RupeeFlow',
    description: 'Automate reliable inter-bank transfers',
  },
  alternates: {
    canonical: 'https://rupeeflow.co/solutions/neft',
  },
}

export default function NEFTLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

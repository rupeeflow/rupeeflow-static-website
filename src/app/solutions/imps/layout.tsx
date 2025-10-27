import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IMPS API - Instant Real-Time Payment Transfers | RupeeFlow',
  description: 'Enable lightning-fast IMPS transfers with RupeeFlow API. 24×7 instant interbank transactions, automated payouts, real-time settlements. Secure, RBI-compliant, developer-friendly payment API.',
  keywords: ['IMPS', 'IMPS API', 'instant transfer', 'real-time payments', 'interbank transfer', 'instant settlement'],
  openGraph: {
    title: 'IMPS Payment API - Instant Real-Time Transfers | RupeeFlow',
    description: '24×7 instant IMPS transfers with real-time settlements and automated payouts',
    url: 'https://rupeeflow.co/solutions/imps',
    siteName: 'RupeeFlow',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IMPS API - Instant Transfers | RupeeFlow',
    description: 'Lightning-fast IMPS transfers available 24×7',
  },
  alternates: {
    canonical: 'https://rupeeflow.co/solutions/imps',
  },
}

export default function IMPSLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AEPS - Aadhaar Enabled Payment System API | RupeeFlow',
  description: 'Enable Aadhaar-based banking with RupeeFlow AEPS API. Instant cash withdrawals, deposits, balance inquiries with biometric authentication. Bank-grade security with instant settlements.',
  keywords: ['AEPS', 'Aadhaar payments', 'biometric banking', 'micro ATM', 'Aadhaar banking', 'AEPS API'],
  openGraph: {
    title: 'AEPS - Aadhaar Enabled Payment System | RupeeFlow',
    description: 'Aadhaar-based banking with instant settlements and biometric authentication',
    url: 'https://rupeeflow.co/solutions/aeps',
    siteName: 'RupeeFlow',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AEPS - Aadhaar Payments | RupeeFlow',
    description: 'Secure Aadhaar-based banking with biometric authentication',
  },
  alternates: {
    canonical: 'https://rupeeflow.co/solutions/aeps',
  },
}

export default function AEPSLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

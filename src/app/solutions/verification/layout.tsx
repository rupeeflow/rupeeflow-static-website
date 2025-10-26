import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Verification APIs - Instant KYC & Identity Verification | RupeeFlow',
  description: 'Secure and instant identity verification APIs for Aadhaar, PAN, Voter ID, Driving License, Passport, and Vehicle RC. Fast, compliant, and AI-optimized KYC verification for every industry.',
  keywords: ['verification API', 'KYC API', 'Aadhaar verification', 'PAN verification', 'identity verification', 'document verification'],
  openGraph: {
    title: 'Verification APIs - Secure & Instant KYC | RupeeFlow',
    description: 'Instant identity verification for Aadhaar, PAN, Voter ID, Driving License, Passport, and Vehicle RC',
    url: 'https://rupeeflow.co/solutions/verification',
    siteName: 'RupeeFlow',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verification APIs - Instant KYC | RupeeFlow',
    description: 'Secure identity verification for all major Indian documents',
  },
  alternates: {
    canonical: 'https://rupeeflow.co/solutions/verification',
  },
}

export default function VerificationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

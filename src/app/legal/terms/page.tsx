import TermsContent from '@/components/sections/TermsContent'
import TermsHero from '@/components/sections/TermsHero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | RupeeFlow',
  description: 'Read the Terms and Conditions for RupeeFlow Finance Private Limited. Understand your rights and obligations when using our payment services.',
  alternates: {
    canonical: 'https://rupeeflow.co/terms',
  },
  openGraph: {
    title: 'Terms & Conditions | RupeeFlow',
    description: 'Read the Terms and Conditions for RupeeFlow. Understand your rights and obligations when using our services.',
    type: 'website',
    url: 'https://rupeeflow.co/terms',
    siteName: 'RupeeFlow',
  },
  twitter: {
    card: 'summary',
    site: '@rupeeflow',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  return (
    <div>
      <TermsHero />
      <TermsContent />
    </div>
  )
}

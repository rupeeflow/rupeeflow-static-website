import TermsContent from '@/components/sections/TermsContent'
import TermsHero from '@/components/sections/TermsHero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | RupeeFlow',
  description:
    'Read the Terms and Conditions for RupeeFlow Finance Private Limited. Understand your rights and obligations when using our payment services.',
}

export default function TermsPage() {
  return (
    <div>
      <TermsHero />
      <TermsContent />
    </div>
  )
}

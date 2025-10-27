import PrivacyContent from '@/components/sections/PrivacyContent'
import PrivacyHero from '@/components/sections/PrivacyHero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | RupeeFlow',
  description:
    'Learn how RupeeFlow Finance Private Limited protects your privacy. Read our comprehensive Privacy Policy covering data collection, usage, security, and your rights.',
}

export default function PrivacyPage() {
  return (
    <div>
      <PrivacyHero />
      <PrivacyContent />
    </div>
  )
}

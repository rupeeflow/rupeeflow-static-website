import PrivacyContent from '@/components/sections/PrivacyContent'
import PrivacyHero from '@/components/sections/PrivacyHero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | RupeeFlow',
  description: 'Learn how RupeeFlow Finance Private Limited protects your privacy. Read our comprehensive Privacy Policy covering data collection, usage, security, and your rights.',
  alternates: {
    canonical: 'https://rupeeflow.co/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | RupeeFlow',
    description: 'Learn how RupeeFlow protects your privacy. Comprehensive privacy policy covering data security and your rights.',
    type: 'website',
    url: 'https://rupeeflow.co/privacy',
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

export default function PrivacyPage() {
  return (
    <div>
      <PrivacyHero />
      <PrivacyContent />
    </div>
  )
}

import { Metadata } from 'next'
import CareersHero from '@/components/sections/CareersHero'
import CareersContent from '@/components/sections/CareersContent'
import { WebPageSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Careers at RupeeFlow | Join Our Team',
  description: 'Join RupeeFlow in revolutionizing digital payments in India. Explore exciting career opportunities in engineering, product, and more. Build the future of fintech with us.',
  keywords: ['RupeeFlow careers', 'fintech jobs India', 'payment technology jobs', 'Bangalore tech jobs', 'engineering careers', 'product manager jobs', 'remote jobs India', 'startup jobs', 'UPI technology jobs'],
  alternates: {
    canonical: 'https://rupeeflow.co/careers',
  },
  openGraph: {
    title: 'Careers at RupeeFlow | Join Our Team',
    description: 'Join RupeeFlow in revolutionizing digital payments in India. Explore exciting career opportunities.',
    type: 'website',
    url: 'https://rupeeflow.co/careers',
    siteName: 'RupeeFlow',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Careers at RupeeFlow',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rupeeflow',
    creator: '@rupeeflow',
    title: 'Careers at RupeeFlow | Join Our Team',
    description: 'Join us in revolutionizing digital payments. Explore exciting opportunities in engineering, product, and more.',
    images: ['/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <WebPageSchema
        title="Careers at RupeeFlow | Join Our Team"
        description="Join RupeeFlow in revolutionizing digital payments in India. Explore exciting career opportunities in engineering, product, and more."
        url="/careers"
      />
      <CareersHero />
      <CareersContent />
    </main>
  )
}

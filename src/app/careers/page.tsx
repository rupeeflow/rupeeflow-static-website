import { Metadata } from 'next'
import CareersHero from '@/components/sections/CareersHero'
import CareersContent from '@/components/sections/CareersContent'

export const metadata: Metadata = {
  title: 'Careers at RupeeFlow | Join Our Team',
  description: 'Join RupeeFlow in revolutionizing digital payments in India. Explore exciting career opportunities in engineering, product, and more. Build the future of fintech with us.',
  keywords: 'RupeeFlow careers, fintech jobs India, payment technology jobs, Bangalore tech jobs, engineering careers, product manager jobs',
  openGraph: {
    title: 'Careers at RupeeFlow | Join Our Team',
    description: 'Join RupeeFlow in revolutionizing digital payments in India. Explore exciting career opportunities.',
    type: 'website',
    url: 'https://rupeeflow.co/careers',
  }
}

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <CareersHero />
      <CareersContent />
    </main>
  )
}

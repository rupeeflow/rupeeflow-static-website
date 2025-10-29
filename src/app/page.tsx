import { Metadata } from 'next'
import './globals.css'
import HeroSection from '@/components/sections/Herosection'

import PartnerShip from '@/components/sections/PartnerShip'

import FuturePayments from '@/components/ui/FuturePayments'
import ChooseRupeeFlow from '@/components/sections/ChooseRupeeFlow'

import StatsSection from '@/components/sections/StatsSection'

import LanguageSection from '@/components/sections/RegionalLanguage'
import BuiltForSection from '@/components/sections/BuiltForSection'
import FaqSection from '@/components/sections/FAQ'
import BlogSection from '@/components/sections/BlogSection'

import blogPosts from '@/data/blogPostsHome.json'
import VisionSection from '@/components/sections/VisionSection'
import FeatureSection from '@/components/sections/FeatureSection'
import faq from '@/data/top-faqs.json'
import { OrganizationSchema, WebPageSchema, FAQSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'RupeeFlow - Modern UPI Payment Infrastructure for India',
  description: 'Enterprise-grade UPI payment solutions, digital banking APIs, AEPS, DMT, IMPS, and NEFT services. Power your fintech with RupeeFlow\'s reliable, secure, and scalable payment infrastructure for modern India.',
  keywords: ['UPI payments India', 'payment gateway API', 'fintech infrastructure', 'digital banking API', 'AEPS service', 'DMT money transfer', 'IMPS instant payment', 'NEFT transfer', 'payment solution India', 'UPI switch', 'merchant payment system', 'financial technology', 'payment processing', 'banking API India', 'digital payment platform'],
  authors: [{ name: 'RupeeFlow' }],
  alternates: {
    canonical: 'https://rupeeflow.co',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://rupeeflow.co',
    siteName: 'RupeeFlow',
    title: 'RupeeFlow - Modern UPI Payment Infrastructure for India',
    description: 'Enterprise-grade UPI payment solutions, digital banking APIs, AEPS, DMT, IMPS, and NEFT services. Trusted by businesses across India for reliable payment processing.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RupeeFlow - Modern Payment Infrastructure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rupeeflow',
    creator: '@rupeeflow',
    title: 'RupeeFlow - Modern UPI Payment Infrastructure for India',
    description: 'Enterprise-grade payment solutions for modern India. UPI, AEPS, DMT, IMPS, and more.',
    images: ['/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}


export default function HomePage() {
  return (
    <div className="w-full relative">
      <OrganizationSchema />
      <WebPageSchema
        title="RupeeFlow - Modern UPI Payment Infrastructure for India"
        description="Enterprise-grade UPI payment solutions, digital banking APIs, AEPS, DMT, IMPS, and NEFT services"
        url="/"
      />
      <FAQSchema faqs={faq.map(f => ({ question: f.question, answer: f.answer }))} />

      <HeroSection />
      <VisionSection />
      <FeatureSection />
      <PartnerShip />
      <FuturePayments />
      <BuiltForSection />
      <ChooseRupeeFlow />
      <StatsSection />
      <LanguageSection />

      <BlogSection
        title="News and Articles"
        microcopy="Explore fresh perspectives and updates from the RupeeFlow team."
        posts={blogPosts}
      />
      <FaqSection faqs={faq} />

    </div>
  )
}

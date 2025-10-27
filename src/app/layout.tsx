import type { Metadata } from 'next'

import './globals.css'
import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer'
import SmoothScrollProvider from '@/lib/smoothScrollProvider'
import Marquee from '@/components/sections/MarqueeSection'

export const metadata: Metadata = {
 title: {
      default: 'RupeeFlow - Modern UPI Payment Infrastructure for India',
      template: '%s | RupeeFlow'
    },
    description: 'Enterprise-grade UPI payment solutions, digital banking APIs, AEPS, DMT, and IMPS services. Power your fintech with RupeeFlow\'s reliable payment infrastructure.',
    keywords: ['UPI payments', 'payment gateway', 'fintech API', 'digital banking', 'AEPS',
  'DMT', 'IMPS', 'NEFT'],
    authors: [{ name: 'RupeeFlow' }],
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url: 'https://rupeeflow.com',
      siteName: 'RupeeFlow',
      title: 'RupeeFlow - Modern UPI Payment Infrastructure',
      description: 'Enterprise-grade payment solutions for India',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@rupeeflow',
      creator: '@rupeeflow',
    },
    robots: {
      index: true,
      follow: true,
    },
  icons: {
    icon: '/rupeeflow.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`antialiased background-black text-white`}>
        <SmoothScrollProvider>
          <Navbar />
          <main>{children}</main>
          <Marquee />
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}

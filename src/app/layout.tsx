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
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 5,
    },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url: 'https://rupeeflow.co',
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
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/rupeeflow.png', type: 'image/png', sizes: '32x32' },
      { url: '/rupeeflow.svg', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
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

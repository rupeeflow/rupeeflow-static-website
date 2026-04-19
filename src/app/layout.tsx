import type { Metadata } from 'next'
import { Nunito_Sans, Plus_Jakarta_Sans, Inter } from 'next/font/google'
import Script from 'next/script'

import './globals.css'
import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer'
import SmoothScrollProvider from '@/lib/smoothScrollProvider'
import Marquee from '@/components/sections/MarqueeSection'

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-nunito-sans',
  display: 'swap',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  applicationName: 'RupeeFlow',
  title: {
    default: 'RupeeFlow — Bank on WhatsApp | Payments, Credit & Payouts for Indian Businesses',
    template: '%s | RupeeFlow',
  },
  description:
    'India\'s first WhatsApp-native banking platform. Send money, pay bills, get instant credit in Hindi & 11 other languages. Zero app download needed. Trusted by 100,000+ businesses.',
  keywords: [
    'payment gateway India',
    'UPI collections',
    'payment links',
    'QR code payments',
    'payment button',
    'vendor payments',
    'bulk payouts',
    'salary disbursements',
    'invoice management',
    'business bill payments',
    'rental payments',
    'tax payments GST',
    'merchant cash advance',
    'invoice financing',
    'NRI emergency loans',
    'personal credit line',
    'business credit India',
    'payroll processing India',
    'auto collect',
    'instant settlements',
    'fintech India',
    'RupeeFlow',
  ],
  authors: [{ name: 'RupeeFlow' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://rupeeflow.co',
    siteName: 'RupeeFlow',
    title: 'RupeeFlow — Bank on WhatsApp',
    description:
      'Send money, get credit, pay bills — just type in Hindi',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rupeeflow',
    creator: '@rupeeflow',
    title: 'RupeeFlow — Bank on WhatsApp | Payments, Credit & Payouts for Indian Businesses',
    description:
      'India\'s first WhatsApp-native banking platform. Send money, pay bills, get instant credit in Hindi & 11 other languages. Zero app download needed. Trusted by 100,000+ businesses.',
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
    <html lang="en" className={`${nunitoSans.variable} ${plusJakartaSans.variable} ${inter.variable} overflow-x-hidden`}>
      <head>
        {/* WebSite structured data — tells Google the site name is "RupeeFlow" */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'RupeeFlow',
              alternateName: 'RupeeFlow',
              url: 'https://rupeeflow.co',
            }),
          }}
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4B37EK5RBC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4B37EK5RBC');
          `}
        </Script>
      </head>
      <body className="antialiased  text-white overflow-x-hidden">
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

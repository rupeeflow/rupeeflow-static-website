import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
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

export const metadata: Metadata = {
  applicationName: 'RupeeFlow',
  title: {
    default: 'RupeeFlow — Payments & Payouts for Indian Businesses',
    template: '%s | RupeeFlow',
  },
  description:
    "RupeeFlow is India's all-in-one payments platform for B2B manufacturing, cafes, restaurants, retail, beverages, SaaS, and more. Accept payments via Payment Gateway, UPI, Payment Links & QR. Send vendor payouts, salary disbursements, and bulk transfers.",
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
    'payroll processing India',
    'auto collect',
    'instant settlements',
    'fintech India',
    'RupeeFlow',
    'B2B manufacturing payments India',
    'cafe payment solutions India',
    'restaurant payment gateway India',
    'retail UPI QR payments',
    'beverage manufacturing payments',
    'FMCG B2B collections',
  ],
  authors: [{ name: 'RupeeFlow' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://rupeeflow.co',
    siteName: 'RupeeFlow',
    title: 'RupeeFlow — Payments & Payouts for Indian Businesses',
    description:
      'Accept payments via Payment Gateway, UPI & QR Code. Send payouts for vendors, salary & bulk transfers — all on one platform.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rupeeflow',
    creator: '@rupeeflow',
    title: 'RupeeFlow — Payments & Payouts for Indian Businesses',
    description:
      "India's all-in-one fintech platform for payment collection, vendor payouts, and salary disbursements.",
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
    <html lang="en" className={`${nunitoSans.variable} overflow-x-hidden`}>
      <head>
        {/* WebSite + Organization structured data for industry query coverage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'RupeeFlow',
              alternateName: 'RupeeFlow',
              url: 'https://rupeeflow.co',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://rupeeflow.co/solutions/{search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'RupeeFlow',
              url: 'https://rupeeflow.co',
              logo: 'https://rupeeflow.co/rupeeflow.png',
              sameAs: ['https://erp.rupeeflow.co'],
              description:
                'Payments and payouts platform for B2B manufacturing, cafes, restaurants, retail, beverages, SaaS, ecommerce, education, BFSI, and freelancers in India.',
              knowsAbout: [
                'B2B Manufacturing payments',
                'Cafe payments',
                'Restaurant payments',
                'Retail payments',
                'Beverage manufacturing payments',
                'SaaS billing',
                'E-commerce checkout',
                'Education fee collection',
                'BFSI collections',
                'Freelance payment links',
              ],
              areaServed: 'IN',
              makesOffer: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'B2B Manufacturing Payment Solutions',
                    url: 'https://rupeeflow.co/solutions/b2b-manufacturing',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Cafe Payment Solutions',
                    url: 'https://rupeeflow.co/solutions/cafe',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Restaurant Payment Solutions',
                    url: 'https://rupeeflow.co/solutions/restaurants',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Retail Payment Solutions',
                    url: 'https://rupeeflow.co/solutions/retail',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Beverage Payment Solutions',
                    url: 'https://rupeeflow.co/solutions/beverages',
                  },
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'RupeeFlow Industry Solutions',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'B2B Manufacturing',
                  url: 'https://rupeeflow.co/solutions/b2b-manufacturing',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Cafe',
                  url: 'https://rupeeflow.co/solutions/cafe',
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: 'Restaurants',
                  url: 'https://rupeeflow.co/solutions/restaurants',
                },
                {
                  '@type': 'ListItem',
                  position: 4,
                  name: 'Retail',
                  url: 'https://rupeeflow.co/solutions/retail',
                },
                {
                  '@type': 'ListItem',
                  position: 5,
                  name: 'Beverages',
                  url: 'https://rupeeflow.co/solutions/beverages',
                },
              ],
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
      <body className="antialiased background-black text-white overflow-x-hidden">
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

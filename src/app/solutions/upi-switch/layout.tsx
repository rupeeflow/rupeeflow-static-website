import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UPI Switch - Advanced UPI Payment Routing | RupeeFlow',
  description: 'RupeeFlow\'s intelligent UPI Switch dynamically routes transactions for maximum speed and reliability. AI-powered decision layer ensures instant, secure UPI payments with smart transaction routing.',
  keywords: ['UPI switch', 'UPI routing', 'payment switch', 'UPI infrastructure', 'intelligent routing', 'UPI API'],
  openGraph: {
    title: 'Advanced UPI Switch - The Core of RupeeFlow\'s Speed',
    description: 'AI-powered UPI routing for instant, secure payments with maximum efficiency',
    url: 'https://rupeeflow.co/solutions/upi-switch',
    siteName: 'RupeeFlow',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advanced UPI Switch | RupeeFlow',
    description: 'AI-powered UPI routing for instant, secure payments',
  },
  alternates: {
    canonical: 'https://rupeeflow.co/solutions/upi-switch',
  },
}

export default function UPISwitchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

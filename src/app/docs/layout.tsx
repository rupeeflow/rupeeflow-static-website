import { Metadata } from 'next'
import DocsSidebar from '@/components/docs/DocsSidebar'

export const metadata: Metadata = {
  title: 'API Documentation | RupeeFlow',
  description: 'Complete API documentation for RupeeFlow payment infrastructure. Learn how to integrate Pay-In, Pay-Out, and other payment services.',
  keywords: ['API documentation', 'payment API', 'UPI API', 'payment integration', 'developer docs', 'RupeeFlow API', 'payment gateway API'],
  alternates: {
    canonical: 'https://rupeeflow.co/docs',
  },
  openGraph: {
    title: 'API Documentation | RupeeFlow',
    description: 'Complete API documentation for RupeeFlow payment infrastructure',
    type: 'website',
    url: 'https://rupeeflow.co/docs',
    siteName: 'RupeeFlow',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rupeeflow',
    title: 'API Documentation | RupeeFlow',
    description: 'Complete API documentation for RupeeFlow payment infrastructure',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-black-emerald min-h-screen pt-24">
      <div className="flex max-w-[1400px] mx-auto">
        {/* Sidebar */}
        <DocsSidebar />

        {/* Main Content */}
        <main className="flex-1 py-8 px-8 max-w-4xl">
          {children}
        </main>
      </div>
    </div>
  )
}

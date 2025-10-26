import { Metadata } from 'next'

interface SEOProps {
  title: string
  description: string
  path?: string
  image?: string
  article?: boolean
  keywords?: string[]
}

export function generateMetadata({
  title,
  description,
  path = '',
  image = '/og-image.png',
  article = false,
  keywords = [],
}: SEOProps): Metadata {
  const url = `https://rupeeflow.co${path}`

  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    openGraph: {
      title,
      description,
      url,
      siteName: 'RupeeFlow',
      images: [{ url: image }],
      type: article ? 'article' : 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  }
}

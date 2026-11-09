import type { Metadata } from 'next'
import type { IndustrySolution } from '@/data/industrySolutions'

export function buildIndustryMetadata(solution: IndustrySolution): Metadata {
  const url = `https://rupeeflow.co/solutions/${solution.slug}`

  return {
    title: solution.metaTitle,
    description: solution.metaDescription,
    keywords: solution.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url,
      siteName: 'RupeeFlow',
      title: solution.metaTitle,
      description: solution.metaDescription,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@rupeeflow',
      creator: '@rupeeflow',
      title: solution.metaTitle,
      description: solution.metaDescription,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

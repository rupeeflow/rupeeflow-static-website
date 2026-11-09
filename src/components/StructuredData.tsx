import type { FAQ } from '@/types/page-components'
import type { IndustrySolution } from '@/data/industrySolutions'
import { ERP_URL } from '@/data/industrySolutions'

interface WebPageSchemaProps {
  title: string
  description: string
  url: string
}

export function WebPageSchema({ title, description, url }: WebPageSchemaProps) {
  const absoluteUrl = url.startsWith('http')
    ? url
    : `https://rupeeflow.co${url}`
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: absoluteUrl,
    isPartOf: {
      '@type': 'WebSite',
      name: 'RupeeFlow',
      url: 'https://rupeeflow.co',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface FAQSchemaProps {
  faqs: FAQ[]
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface IndustryServiceSchemaProps {
  solution: IndustrySolution
}

/** Rich Service + Breadcrumb schema for industry solution landing pages */
export function IndustryServiceSchema({
  solution,
}: IndustryServiceSchemaProps) {
  const pageUrl = `https://rupeeflow.co/solutions/${solution.slug}`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${solution.name} Payment Solutions by RupeeFlow`,
    serviceType: solution.serviceType,
    description: solution.metaDescription,
    url: pageUrl,
    provider: {
      '@type': 'Organization',
      name: 'RupeeFlow',
      url: 'https://rupeeflow.co',
      sameAs: [ERP_URL],
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    audience: {
      '@type': 'BusinessAudience',
      audienceType: solution.audience,
    },
    category: solution.industrySegments,
    termsOfService: 'https://rupeeflow.co/legal/terms',
    offers: {
      '@type': 'Offer',
      url: ERP_URL,
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR',
      description: `Get started with Onichannel for ${solution.name}`,
    },
    keywords: solution.keywords.join(', '),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://rupeeflow.co/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Solutions',
        item: 'https://rupeeflow.co/solutions/saas',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: solution.name,
        item: pageUrl,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}

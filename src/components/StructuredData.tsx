export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RupeeFlow",
    "url": "https://rupeeflow.co",
    "logo": "https://rupeeflow.co/rupeeflow.svg",
    "description": "Modern UPI payment infrastructure for India",
    "sameAs": [
      "https://twitter.co/rupeeflow",
      "https://linkedin.co/company/rupeeflow"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ArticleSchema({
  title,
  description,
  image,
  datePublished,
  author = "RupeeFlow Editorial"
}: {
  title: string
  description: string
  image: string
  datePublished: string
  author?: string
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": `https://rupeeflow.co${image}`,
    "datePublished": datePublished,
    "author": {
      "@type": "Person",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "RupeeFlow",
      "logo": {
        "@type": "ImageObject",
        "url": "https://rupeeflow.co/rupeeflow.svg"
      }
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://rupeeflow.co${item.url}`
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

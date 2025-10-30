import { MetadataRoute } from 'next'
import blogList from '@/data/blogPosts.json'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rupeeflow.co'

  // Static pages
  const staticPages = [
    '',
    '/product',
    '/pricing',
    '/support',
    '/blog',
    '/faqs',
    '/solutions/kirana',
    '/solutions/upi-switch',
    '/solutions/verification',
    '/solutions/aeps',
    '/solutions/dmt',
    '/solutions/imps',
    '/solutions/neft',
    '/legal/terms',
    '/legal/privacy',
    '/legal/cookies',
    '/legal/refund',
    '/careers',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Blog posts
  const blogPages = blogList.map(blog => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...blogPages]
}

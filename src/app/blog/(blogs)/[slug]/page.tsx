import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import blogList from '@/data/blogPosts.json'

// 👇 Tell Next.js to pre-generate all /blog/[slug] pages at build time
export async function generateStaticParams() {
  return blogList.map(blog => ({
    slug: blog.slug,
  }))
}

// 👇 Generate SEO metadata per post dynamically
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const blog = blogList.find(b => b.slug === params.slug)
  if (!blog) return {}

  return {
    title: `${blog.title} | RupeeFlow Blog`,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: [blog.image],
      type: 'article',
      url: `https://yourdomain.com/blog/${blog.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.description,
      images: [blog.image],
    },
  }
}

// 👇 Main component for the blog post page
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const blog = blogList.find(b => b.slug === params.slug)
  if (!blog) return notFound()

  const blogDir = path.join(process.cwd(), 'src/data/blogcontent')
  const filePath = path.join(blogDir, `${blog.file}`)
  const file = fs.readFileSync(filePath, 'utf-8')
  const { content, data } = matter(file) // supports optional frontmatter in MDX

  return (
    <article className="max-w-3xl mx-auto py-10 px-6">
      {/* Blog cover image */}
      {blog.image && (
        <Image
          src={blog.image}
          alt={blog.title}
          width={800}
          height={500}
          className="rounded-xl mb-6 w-full object-cover"
        />
      )}

      {/* Blog header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-3 leading-tight text-gray-900">
          {blog.title}
        </h1>
        <p className="text-gray-500 text-sm">{blog.date}</p>
      </header>

      {/* Blog content */}
      <div className="prose prose-lg max-w-none text-gray-800">
        <MDXRemote source={content} />
      </div>
    </article>
  )
}

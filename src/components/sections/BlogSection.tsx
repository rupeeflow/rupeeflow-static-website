'use client'

import BlogPostCard from '../ui/BlogPostCard'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

interface BlogPost {
  id: number
  slug: string
  title: string
  description: string
  date: string
  image: string
  file: string
}

interface BlogSectionProps {
  title: string
  microcopy: string
  label?: string
  link?: string
  posts: BlogPost[]
}

export default function BlogSection({
  title,
  microcopy,
  label = 'Read More Articles',
  link = '/blog',
  posts,
}: BlogSectionProps) {
  return (
    <section className="flex flex-col items-center py-20 px-6 bg-neutral-100 text-gray-900">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-5xl lg:text-[5vw] text-gray-900 mb-4">
          {title}
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">{microcopy}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-8 pb-24 max-w-7xl mx-auto">
        {posts.map(post => (
          <BlogPostCard key={post.id} {...post} />
        ))}
      </div>

      <Link
        href={link}
        className="flex gap-6 px-8 py-3 bg-gradient-to-r from-teal-400 to-emerald-500 text-black font-semibold rounded-full hover:scale-105 transition"
      >
        {label} <ArrowUpRight />
      </Link>
    </section>
  )
}

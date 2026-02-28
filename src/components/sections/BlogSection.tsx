'use client'

import { useRef } from 'react'
import BlogPostCard from '../ui/BlogPostCard'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

gsap.registerPlugin(useGSAP)

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
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    // Header fades up
    gsap.fromTo('.bs-header',
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.65, ease: 'power2.out',
        scrollTrigger: { trigger: '.bs-header', start: 'top 92%', once: true },
      }
    )

    // Blog cards stagger up
    gsap.fromTo('.bs-card',
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.65, stagger: 0.12, ease: 'power2.out',
        scrollTrigger: { trigger: '.bs-cards', start: 'top 92%', once: true },
      }
    )

    // CTA button fades up
    gsap.fromTo('.bs-cta',
      { y: 25, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.55, ease: 'power2.out',
        scrollTrigger: { trigger: '.bs-cta', start: 'top 95%', once: true },
      }
    )

    ScrollTrigger.refresh()
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="flex flex-col items-center py-20 px-6 bg-neutral-100 text-gray-900">
      <div className="bs-header max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-5xl lg:text-[5vw] text-gray-900 mb-4">
          {title}
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">{microcopy}</p>
      </div>

      <div className="bs-cards grid grid-cols-1 md:grid-cols-3 gap-10 pt-8 pb-24 max-w-7xl mx-auto">
        {posts.map(post => (
          <div key={post.id} className="bs-card">
            <BlogPostCard {...post} />
          </div>
        ))}
      </div>

      <Link
        href={link}
        className="bs-cta flex gap-6 px-8 py-3 bg-gradient-to-r from-teal-400 to-emerald-500 text-black font-semibold rounded-full hover:scale-105 transition"
      >
        {label} <ArrowUpRight />
      </Link>
    </section>
  )
}

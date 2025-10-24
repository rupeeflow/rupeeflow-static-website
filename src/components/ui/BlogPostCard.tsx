'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CalendarDays, ArrowRight } from 'lucide-react'

interface BlogPostCardProps {
  id: number
  slug: string
  title: string
  description: string
  date: string
  image: string
  file?: string
}

export default function BlogPostCard({
  slug,
  title,
  description,
  date,
  image,
}: BlogPostCardProps) {
  return (
    <div className="group border border-emerald-100 bg-neutral-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative bg-neutral-200 w-full h-52 overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col gap-5 h-full">
        <div>
          <div className="flex items-center text-gray-400 text-sm mb-3">
            <CalendarDays className="w-4 h-4 mr-2 text-emerald-500" />
            {date}
          </div>

          <h3 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-emerald-700 transition-colors">
            {title}
          </h3>

          <p className="text-gray-500 text-sm line-clamp-2">{description}</p>
        </div>

        {/* ✅ Correct Link — points to the dynamic blog route */}
        <Link
          href={`/blog/${slug}`}
          className="text-black text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all"
        >
          Read More
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

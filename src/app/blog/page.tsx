'use client'

import BlogSection from '@/components/sections/BlogSection'
import blogPosts from '@/data/blogPosts.json'

export default function BlogPage() {
  return (
    <main className="min-h-screen text-gray-900">
      <section className="relative bg-black-emerald text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-[6vw] fontheadingthin mb-8">
            Insights, Innovation & UPI Intelligence
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Stay updated with the latest trends in payments, cross-border UPI,
            and fintech innovation.
          </p>
        </div>
      </section>

      <BlogSection
        title="Latest Articles"
        microcopy="Explore fresh perspectives and updates from the RupeeFlow team."
        label="BACK TO HOME"
        link="/"
        posts={blogPosts}
      />
    </main>
  )
}

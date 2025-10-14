'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ReviewCard from './ReviewCard'

const testimonials = [
  {
    quote:
      "The necklace is more than jewelry. It's a work of art that tells my story.",
    name: 'Elizabeth Hartley',
    role: 'Creative Director, London',
    image: '/images/client1.jpg',
  },
  {
    quote:
      'Exceptional craftsmanship. Each piece feels like a personal treasure.',
    name: 'Michael Chen',
    role: 'Entrepreneur, New York',
    image: '/images/client2.jpg',
  },
  {
    quote:
      'Bespoke design that exceeded all my expectations. Truly remarkable.',
    name: 'Sophie Laurent',
    role: 'Art Curator, Paris',
    image: '/images/client3.jpg',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          What our clients say
        </h2>
        <p className="text-gray-600 mb-12">
          Hear from those who have experienced the Elanore Joaillerie difference
        </p>

        <div className="relative flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="w-full flex justify-center"
            >
              <ReviewCard {...testimonials[current]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === current ? 'bg-gray-800 w-6' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

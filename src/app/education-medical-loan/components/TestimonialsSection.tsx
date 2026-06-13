'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'MBA Student',
    loan: 'Education Loan - ₹15L',
    text: 'RupeeFlow made my dream of studying at IIM possible. The approval was quick and the moratorium period helped me focus on studies without worrying about repayment.',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    role: 'IT Professional',
    loan: 'Medical Loan - ₹8L',
    text: 'When my father needed emergency surgery, RupeeFlow approved the loan in 2 hours. The direct hospital payment feature was a lifesaver during that stressful time.',
    rating: 5,
  },
  {
    name: 'Anita Desai',
    role: 'Graphic Designer',
    loan: 'Skill Development - ₹3L',
    text: 'Took a loan for UX design certification. The flexible EMI and no prepayment charges allowed me to pay off early when I got my first freelance project.',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="relative bg-gray-50 py-20 md:py-28 overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="fontheading text-3xl md:text-5xl text-gray-900 mb-4">
            Success{' '}
            <span className="bg-gradient-to-r from-[#10b981] to-[#14b8a6] bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="fontbody2 text-gray-600 text-lg max-w-3xl mx-auto">
            Real experiences from our customers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-[var(--card)] rounded-3xl p-8 border-2 border-gray-100 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 fontbody2 text-base leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author Info */}
              <div className="border-t border-gray-100 pt-6">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-[var(--foreground)] font-bold text-lg flex-shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  
                  {/* Details */}
                  <div className="flex-1">
                    <div className="text-gray-900 font-bold text-base">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                
                {/* Loan Badge */}
                <div className="mt-4 inline-block px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200">
                  <span className="text-emerald-700 text-xs font-semibold">
                    {testimonial.loan}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--card)] border-2 border-emerald-200">
            <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700 font-semibold text-sm">
              Trusted by 50,000+ customers
            </span>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

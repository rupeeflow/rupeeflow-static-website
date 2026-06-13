'use client';
//test

import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/AnimatedCounter';
import { staggerContainer, staggerItem } from '@/lib/animations';

const stats = [
  { value: 35, suffix: '%', label: 'Collection Rate Improvement' },
  { value: 15, suffix: ' days', label: 'DSO Reduction' },
  { value: 99, suffix: '%', label: 'Reminder Delivery Rate' },
  { value: 80, suffix: '%', label: 'Time Saved on Follow-ups' },
];

export default function StatsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="fontheading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Proven Results That{' '}
            <span className="bg-gradient-to-r from-[#53BEC2] to-[#00EF64] bg-clip-text text-transparent">
              Drive Growth
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="text-center bg-[var(--card)] rounded-2xl p-6 md:p-8 border-2 border-emerald-100"
            >
              <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

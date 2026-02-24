'use client';
//test

import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/AnimatedCounter';
import { staggerContainer, staggerItem } from '@/lib/animations';

const stats = [
  { value: 25, suffix: '%', label: 'DSO Improvement' },
  { value: 95, suffix: '%', label: 'Forecast Accuracy' },
  { value: 40, suffix: '%', label: 'Faster Decisions' },
  { value: 100, suffix: '+', label: 'Insights per Month' },
];

export default function StatsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-900 to-teal-900 text-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="fontheading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Proven{' '}
            <span className="text-emerald-300">
              Results
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
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20"
            >
              <div className="text-4xl md:text-5xl font-bold text-emerald-300 mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-emerald-100 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/AnimatedCounter';
import { staggerContainer, staggerItem } from '@/lib/animations';

const stats = [
  { value: 60, suffix: '%', label: 'Faster Approvals' },
  { value: 95, suffix: '%', label: 'Complete Visibility' },
  { value: 80, suffix: '%', label: 'Fewer Queries' },
  { value: 98, suffix: '%', label: 'Compliance Rate' },
];

export default function StatsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#020506] via-gray-900 to-[#020506] text-[var(--foreground)]">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="fontheading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Measurable{' '}
            <span className="bg-gradient-to-r from-[#53BEC2] to-[#00EF64] bg-clip-text text-transparent">
              Impact
            </span>
          </h2>
          <p className="fontbody2 text-lg text-gray-300 max-w-2xl mx-auto">
            Real results from businesses using our invoice management system
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="fontbody2 text-gray-300 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { StatItem } from '@/types/payment-pages';
import { fadeInUp, viewportConfig } from '@/lib/animations';

interface StatsSectionProps {
  stats: StatItem[];
  backgroundColor?: string;
}

/**
 * StatsSection Component
 * 
 * Displays trust indicators and key metrics.
 * 
 * Features:
 * - White background section
 * - Horizontal layout (desktop) and vertical layout (mobile)
 * - Large numbers with emerald accent
 * - Descriptive labels
 * 
 * Requirements: 1.5, 9.5
 */
export default function StatsSection({
  stats,
  backgroundColor = 'white',
}: StatsSectionProps) {
  return (
    <section className={`py-16 md:py-20 bg-${backgroundColor}`}>
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-24"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                {Icon && (
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-emerald-600" />
                  </div>
                )}
                <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

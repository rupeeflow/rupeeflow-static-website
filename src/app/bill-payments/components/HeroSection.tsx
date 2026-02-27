'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { fadeInUp, viewportConfig } from '@/lib/animations';

// TypeScript interfaces for component props
interface CTAButton {
  text: string;
  href: string;
  variant: 'primary' | 'secondary';
}

interface StatItem {
  value: string;
  label: string;
}

interface HeroSectionProps {
  badge: {
    text: string;
    icon?: LucideIcon;
  };
  heading: string;
  headingAccent: string;
  description: string;
  primaryCTA: CTAButton;
  secondaryCTA: CTAButton;
  stats: StatItem[];
  mockupComponent: React.ComponentType;
}

export default function HeroSection({
  badge,
  heading,
  headingAccent,
  description,
  primaryCTA,
  secondaryCTA,
  stats,
  mockupComponent: MockupComponent,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen bg-[#020506] overflow-hidden">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Blob 1 - Top left */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.45, 0.6, 0.45],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-emerald-500/30 to-teal-500/30 rounded-full blur-3xl"
        />
        
        {/* Blob 2 - Top right */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.55, 0.4],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute top-20 -right-40 w-[500px] h-[500px] bg-gradient-to-bl from-emerald-400/25 to-cyan-500/25 rounded-full blur-3xl"
        />
        
        {/* Blob 3 - Bottom center */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.65, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-t from-teal-500/20 to-emerald-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Content container */}
      <div className="relative container mx-auto px-6 md:px-8 lg:px-12 pt-24 md:pt-32 pb-16">
        {/* Responsive grid layout - single column mobile, two columns desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, y: -48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Badge with pulse animation */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
            >
              {badge.icon && <badge.icon className="w-4 h-4 text-emerald-400" />}
              <span className="text-sm font-semibold text-emerald-400">{badge.text}</span>
            </motion.div>

            {/* Heading with emerald accent */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {heading}{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                {headingAccent}
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
              {description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              {/* Primary CTA */}
              <motion.a
                href={primaryCTA.href}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-shadow"
              >
                {primaryCTA.text}
              </motion.a>

              {/* Secondary CTA */}
              <motion.a
                href={secondaryCTA.href}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl border-2 border-emerald-500/30 text-white font-semibold hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all"
              >
                {secondaryCTA.text}
              </motion.a>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="text-2xl md:text-3xl font-bold text-emerald-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column - Mockup component */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            viewport={viewportConfig}
            className="flex justify-center lg:justify-end"
          >
            <MockupComponent />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

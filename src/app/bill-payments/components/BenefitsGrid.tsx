'use client';

import { motion } from 'framer-motion';
import { BenefitCard } from '@/types/payment-pages';
import { staggerContainer, slideUpSmall, viewportConfig } from '@/lib/animations';

/**
 * BenefitsGrid Component Props
 * Requirements: 1.4, 6.1, 6.2, 6.6, 9.4
 */
interface BenefitsGridProps {
  title: string;
  titleAccent: string;
  subtitle?: string;
  benefits: BenefitCard[];
}

/**
 * BenefitsGrid Component
 * 
 * Displays 6-8 benefit cards in a responsive grid with staggered animations.
 * 
 * Features:
 * - Light background (#f4f8fb) - Requirement 6.2, 9.4
 * - Responsive grid: 1 col (mobile), 2 col (tablet), 3 col (desktop) - Requirement 6.6
 * - Staggered entrance animations - Requirement 6.3, 8.3
 * - Hover effects with scale and shadow - Requirement 6.5, 8.7
 * 
 * @param title - Main section heading
 * @param titleAccent - Text to highlight in emerald color
 * @param subtitle - Optional subtitle text
 * @param benefits - Array of benefit cards to display
 */
export default function BenefitsGrid({
  title,
  titleAccent,
  subtitle,
  benefits,
}: BenefitsGridProps) {
  return (
    <section className="relative py-20 bg-[#f4f8fb] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          variants={slideUpSmall}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title}{' '}
            <span className="text-[#109F58]">{titleAccent}</span>
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {benefits.map((benefit, index) => (
            <BenefitCardItem key={index} benefit={benefit} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Individual Benefit Card Component
 * 
 * Displays a single benefit card with icon, title, description, and optional link.
 * Includes hover effects and animations.
 * 
 * Requirements: 6.4, 6.5, 8.7
 */
function BenefitCardItem({ benefit }: { benefit: BenefitCard }) {
  const { icon, title, description, link } = benefit;
  
  // Check if icon is a string (emoji) or a component
  const isEmoji = typeof icon === 'string';
  const IconComponent = !isEmoji ? icon : null;

  const cardContent = (
    <motion.div
      variants={slideUpSmall}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
    >
      {/* Icon */}
      <div className="mb-4">
        {isEmoji ? (
          <span className="text-4xl" role="img" aria-label={title}>
            {icon}
          </span>
        ) : IconComponent ? (
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center">
            <IconComponent className="w-6 h-6 text-[#109F58]" />
          </div>
        ) : null}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed flex-grow">
        {description}
      </p>

      {/* Optional Link */}
      {link && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <span className="text-[#109F58] font-medium text-sm inline-flex items-center group">
            Learn more
            <svg
              className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      )}
    </motion.div>
  );

  // If there's a link, wrap in an anchor tag
  if (link) {
    return (
      <a
        href={link}
        className="block focus:outline-none focus:ring-2 focus:ring-[#109F58] focus:ring-offset-2 rounded-2xl"
      >
        {cardContent}
      </a>
    );
  }

  return cardContent;
}

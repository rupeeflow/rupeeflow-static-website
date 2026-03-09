'use client';

import { motion } from 'framer-motion';
import { fadeInUp, slideUpFeature, viewportConfig, STAGGER_DELAYS } from '@/lib/animations';
import { FeatureCard } from '@/types/payment-pages';

interface FeatureShowcaseProps {
  features: FeatureCard[];
  backgroundColor?: string;
}

export default function FeatureShowcase({
  features,
  backgroundColor = 'white',
}: FeatureShowcaseProps) {
  return (
    <section className={`py-16 md:py-24 bg-${backgroundColor}`}>
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="space-y-16 md:space-y-24">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const MockupComponent = feature.mockup;
            // Alternate layout: even indices = text-left/mockup-right, odd indices = text-right/mockup-left
            const isTextLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="show"
                viewport={viewportConfig}
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: STAGGER_DELAYS.fast,
                    },
                  },
                }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  !isTextLeft ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Text Content */}
                <motion.div
                  variants={slideUpFeature}
                  className={`${!isTextLeft ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  {/* Icon with emerald gradient background */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/25">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>

                {/* Mockup Component */}
                <motion.div
                  variants={fadeInUp}
                  className={`${!isTextLeft ? 'lg:order-1' : 'lg:order-2'} flex justify-center`}
                >
                  {MockupComponent && (
                    <div className="relative w-full max-w-md lg:max-w-lg">
                      {/* Border styling with emerald accent */}
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-3xl blur-xl" />
                      <div className="relative bg-white rounded-3xl border-2 border-emerald-100 p-6 shadow-xl">
                        <MockupComponent />
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

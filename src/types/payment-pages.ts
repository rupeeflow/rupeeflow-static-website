/**
 * Shared TypeScript interfaces for Payment Pages
 * Used by both Bill Payments and Explore More Payments pages
 */

import { ComponentType } from 'react';

/**
 * Animation configuration for Framer Motion animations
 */
export interface AnimationConfig {
  duration: number;
  delay?: number;
  ease?: string | number[];
}

/**
 * Call-to-action button configuration
 */
export interface CTAButton {
  text: string;
  href: string;
  variant: 'primary' | 'secondary';
}

/**
 * Statistical metric display
 */
export interface StatItem {
  value: string;
  label: string;
  icon?: ComponentType<{ className?: string }>;
}

/**
 * Feature card with optional mockup component
 */
export interface FeatureCard {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  link?: string;
  mockup?: ComponentType;
  imagePosition?: 'left' | 'right';
}

/**
 * Benefit card for grid display
 */
export interface BenefitCard {
  icon: string | ComponentType<{ className?: string }>;
  title: string;
  description: string;
  link?: string;
}

/**
 * FAQ item for accordion section
 */
export interface FAQItem {
  question: string;
  answer: string;
}

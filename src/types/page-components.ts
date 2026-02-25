// TypeScript interfaces for page component props

export interface HeroSectionProps {
  badge: string;
  title: string;
  highlightText: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
  trustIndicators: string[];
  heroImage: string;
  floatingElements?: FloatingElement[];
}

export interface FloatingElement {
  type: 'notification' | 'badge' | 'icon';
  content: React.ReactNode;
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  animation: 'float' | 'pulse' | 'slide';
}

export interface BenefitProps {
  icon: React.ReactNode | string;
  title: string;
  description: string;
  highlight?: string;
}

export interface BenefitsGridProps {
  benefits: BenefitProps[];
}

export interface StatProps {
  value: string | number;
  label: string;
  suffix?: string;
  prefix?: string;
  animateCounter?: boolean;
}

export interface StatsSectionProps {
  stats: StatProps[];
  title?: string;
  description?: string;
}

export interface ProcessStep {
  number: number;
  icon: React.ReactNode | string;
  title: string;
  description: string;
}

export interface HowItWorksSectionProps {
  steps: ProcessStep[];
  title?: string;
  description?: string;
}

export interface UseCase {
  industry: string;
  icon: string;
  scenario: string;
  solution: string;
  results: string[];
}

export interface UseCasesSectionProps {
  useCases: UseCase[];
  title?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
}

export interface CTASectionProps {
  title: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  features?: string[];
}

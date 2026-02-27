// Reusable framer-motion animation variants for consistent motion across all pages

// ============================================================================
// ANIMATION CONFIGURATION CONSTANTS
// ============================================================================

// Spring physics configuration for smooth, natural motion
export const springConfig = {
  damping: 30,
  stiffness: 100,
};

// Easing functions for smooth transitions (Requirements 8.8)
export const customEase = [0.22, 1, 0.36, 1] as const;
export const easeOut = 'easeOut' as const;
export const easeInOut = 'easeInOut' as const;

// Animation duration constants (Requirements 8.9, 8.10)
export const ANIMATION_DURATIONS = {
  // UI interaction durations (0.3s - 1s) - Requirement 8.9
  fast: 0.3,
  normal: 0.5,
  medium: 0.6,
  slow: 0.8,
  slower: 1.0,
  
  // Ambient/looping animation durations (4s - 6s) - Requirement 8.10
  ambientShort: 4,
  ambientMedium: 5,
  ambientLong: 6,
} as const;

// Stagger delay increments (0.05s - 0.2s) - Requirement 8.3
export const STAGGER_DELAYS = {
  fast: 0.05,
  normal: 0.1,
  medium: 0.15,
  slow: 0.2,
} as const;

// Floating animation ranges (Requirements 4.3, 4.4, 8.4)
export const FLOAT_RANGES = {
  // Mockup floating range: -7px to 0px
  mockup: { min: -7, max: 0 },
  // Hero mockup floating range: -14px to 0px
  hero: { min: -14, max: 0 },
} as const;

// Slide animation ranges (Requirements 8.6)
export const SLIDE_RANGES = {
  small: 20,
  medium: 32,
  large: 40,
} as const;

// Hover scale ranges (Requirements 8.7)
export const HOVER_SCALES = {
  min: 1.02,
  max: 1.05,
  subtle: 1.02,
  normal: 1.03,
  prominent: 1.05,
} as const;

// ============================================================================
// FRAMER MOTION VARIANT OBJECTS
// ============================================================================

// Fade in animation (Requirements 8.5)
export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: ANIMATION_DURATIONS.medium, ease: easeOut },
  },
};

// Fade in from bottom (Requirements 8.5, 8.6)
export const fadeInUp = {
  hidden: { opacity: 0, y: SLIDE_RANGES.large },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: ANIMATION_DURATIONS.medium, ease: customEase },
  },
};

// Slide up animation (Requirements 8.6)
export const slideUp = {
  hidden: { opacity: 0, y: SLIDE_RANGES.medium },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: ANIMATION_DURATIONS.normal, ease: easeOut },
  },
};

// Slide up for feature cards (Task 5.2 - y: 32px, duration: 0.55s)
export const slideUpFeature = {
  hidden: { opacity: 0, y: SLIDE_RANGES.medium },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

// Slide up small (for feature cards)
export const slideUpSmall = {
  hidden: { opacity: 0, y: SLIDE_RANGES.small },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: ANIMATION_DURATIONS.medium, ease: easeOut },
  },
};

// Fade in from left
export const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: customEase },
  },
};

// Fade in from right
export const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: customEase },
  },
};

// Container for staggered children animations (Requirements 8.3)
export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER_DELAYS.normal,
      delayChildren: 0.2,
    },
  },
};

// Fast stagger container
export const staggerContainerFast = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER_DELAYS.fast,
      delayChildren: 0.1,
    },
  },
};

// Slow stagger container
export const staggerContainerSlow = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER_DELAYS.slow,
      delayChildren: 0.2,
    },
  },
};

// Individual item in staggered animation
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// Scale in animation
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: customEase },
  },
};

// Floating animation for mockup components (Requirements 4.3, 4.4, 8.4, 8.10)
export const float = {
  y: [FLOAT_RANGES.mockup.max, FLOAT_RANGES.mockup.min, FLOAT_RANGES.mockup.max],
  transition: {
    duration: ANIMATION_DURATIONS.ambientMedium,
    repeat: Infinity,
    ease: easeInOut,
  },
};

// Hero mockup floating animation (larger range)
export const floatHero = {
  y: [FLOAT_RANGES.hero.max, FLOAT_RANGES.hero.min, FLOAT_RANGES.hero.max],
  transition: {
    duration: ANIMATION_DURATIONS.ambientLong,
    repeat: Infinity,
    ease: easeInOut,
  },
};

// Floating animation for notification cards (legacy - kept for compatibility)
export const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

// Hover scale effect for cards (Requirements 8.7)
export const hoverScale = {
  scale: HOVER_SCALES.prominent,
  transition: { duration: ANIMATION_DURATIONS.fast },
};

// Subtle hover scale for buttons
export const hoverScaleSubtle = {
  scale: HOVER_SCALES.subtle,
  transition: { duration: ANIMATION_DURATIONS.fast },
};

// Normal hover scale
export const hoverScaleNormal = {
  scale: HOVER_SCALES.normal,
  transition: { duration: ANIMATION_DURATIONS.fast },
};

// ============================================================================
// VIEWPORT ANIMATION UTILITIES
// ============================================================================

/**
 * Standard viewport configuration for whileInView animations
 * Triggers animation once when element enters viewport (Requirements 8.2, 3.9)
 */
export const viewportConfig = {
  once: true,
  amount: 0.3, // Trigger when 30% of element is visible
} as const;

/**
 * Viewport configuration with margin
 * Triggers animation before element fully enters viewport
 */
export const viewportConfigWithMargin = {
  once: true,
  amount: 0.2,
  margin: '-100px',
} as const;

/**
 * Creates a viewport animation configuration with custom settings
 * @param once - Whether animation should trigger only once (default: true)
 * @param amount - Percentage of element that must be visible (default: 0.3)
 * @returns Viewport configuration object
 */
export function createViewportConfig(
  once: boolean = true,
  amount: number = 0.3
) {
  return {
    once,
    amount,
  };
}

/**
 * Creates a stagger container variant with custom delay
 * @param staggerDelay - Delay between child animations (default: 0.1s)
 * @param delayChildren - Initial delay before first child (default: 0.2s)
 * @returns Stagger container variant object
 */
export function createStaggerContainer(
  staggerDelay: number = STAGGER_DELAYS.normal,
  delayChildren: number = 0.2
) {
  return {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };
}

/**
 * Creates a floating animation with custom range and duration
 * @param yMin - Minimum y position (default: -7)
 * @param yMax - Maximum y position (default: 0)
 * @param duration - Animation duration in seconds (default: 5)
 * @returns Floating animation object
 */
export function createFloatAnimation(
  yMin: number = FLOAT_RANGES.mockup.min,
  yMax: number = FLOAT_RANGES.mockup.max,
  duration: number = ANIMATION_DURATIONS.ambientMedium
) {
  return {
    y: [yMax, yMin, yMax],
    transition: {
      duration,
      repeat: Infinity,
      ease: easeInOut,
    },
  };
}

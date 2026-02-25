// Reusable framer-motion animation variants for consistent motion across all pages

// Spring physics configuration for smooth, natural motion
export const springConfig = {
  damping: 30,
  stiffness: 100,
};

// Easing function for smooth transitions
export const customEase = [0.22, 1, 0.36, 1] as const;

// Fade in from bottom
export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: customEase },
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

// Container for staggered children animations
export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

// Floating animation for notification cards
export const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

// Hover scale effect for cards
export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.2 },
};

// Subtle hover scale for buttons
export const hoverScaleSubtle = {
  scale: 1.02,
  transition: { duration: 0.2 },
};

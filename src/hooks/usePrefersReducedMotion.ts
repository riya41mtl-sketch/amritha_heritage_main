import { useReducedMotion } from 'framer-motion';

/**
 * A custom hook that returns true if the user has requested reduced motion.
 * This is a simple wrapper around Framer Motion's useReducedMotion hook
 * to promote consistency and abstraction in our codebase.
 * @returns {boolean} - True if the user prefers reduced motion, otherwise false.
 */
export const usePrefersReducedMotion = (): boolean => {
  const shouldReduceMotion = useReducedMotion();
  return shouldReduceMotion ?? false; // Fallback to false if the value is null
};

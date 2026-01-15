"use client";

import { motion, MotionProps, Variants, Easing } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps extends MotionProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
  duration?: number;
}

/**
 * PageTransition - A beautiful page transition wrapper component
 * 
 * @param children - The content to animate
 * @param className - Optional CSS classes
 * @param direction - Animation direction: 'up' (slide up), 'left' (slide from right), 'right' (slide from left), 'none' (fade only)
 * @param duration - Animation duration in seconds (default: 0.5)
 */
export default function PageTransition({
  children,
  className = "",
  direction = "up",
  duration = 0.5,
  ...props
}: PageTransitionProps) {
  // Animation variants based on direction
  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...(direction === "up" && { y: 30 }),
      ...(direction === "left" && { x: 50 }),
      ...(direction === "right" && { x: -50 }),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: "easeOut" as Easing,
      },
    },
    exit: {
      opacity: 0,
      ...(direction === "up" && { y: -30 }),
      ...(direction === "left" && { x: -50 }),
      ...(direction === "right" && { x: 50 }),
      transition: {
        duration: duration * 0.8,
        ease: "easeIn" as Easing,
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerContainer - For animating multiple children with staggered timing
 */
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  delayChildren = 0,
}: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerItem - Individual item for stagger animations
 */
interface StaggerItemProps extends MotionProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({
  children,
  className = "",
  variants,
  ...props
}: StaggerItemProps) {
  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as Easing,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants || defaultVariants}
      {...props}
    >
      {children}
    </motion.div>
  );
}


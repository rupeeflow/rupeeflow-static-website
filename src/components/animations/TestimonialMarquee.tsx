"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TestimonialMarqueeProps {
  children: ReactNode;
  speed?: number; 
}

export default function TestimonialMarquee({ children, speed = 30 }: TestimonialMarqueeProps) {
  return (
    <div className="overflow-hidden w-full relative py-6">
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        <div className="flex">{children}</div>
        <div className="flex">{children}</div>
      </motion.div>
    </div>
  );
}

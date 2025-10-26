'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  y?: number;
  once?: boolean;
  amount?: number;
}

export const Reveal = ({ 
  children, 
  delay = 0, 
  duration = 0.6,
  className = '',
  y = 30,
  once = true,
  amount = 0.3
}: RevealProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ 
        duration, 
        delay,
        ease: [0.25, 0.25, 0, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

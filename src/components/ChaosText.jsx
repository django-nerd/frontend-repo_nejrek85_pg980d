import React from 'react'
import { motion } from 'framer-motion'

// Splits text into letters and drives per-letter chaotic motion on loop
export default function ChaosText({ text, className = '' }) {
  const letters = Array.from(text)

  return (
    <div className={`inline-flex flex-wrap items-baseline gap-1 relative ${className}`} aria-label={text}>
      {letters.map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block will-change-transform"
          initial={{ y: 40, rotate: -10, opacity: 0 }}
          animate={{
            y: [40, -6, 4, -2, 0, 8, -4, 0],
            rotate: [-10, 8, -6, 12, 0, -8, 6, 0],
            opacity: [0, 1, 1, 1, 1, 1, 1, 1],
          }}
          transition={{ duration: 6 + (i % 5) * 0.3, delay: i * 0.03, repeat: Infinity, ease: 'easeInOut' }}
        >
          {ch === ' ' ? '\u00A0' : ch}
        </motion.span>
      ))}
    </div>
  )
}

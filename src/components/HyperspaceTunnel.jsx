import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Rotating radial tunnel lines to evoke hyperspace
export default function HyperspaceTunnel() {
  const { scrollYProgress } = useScroll()
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.6])
  const opacity = useTransform(scrollYProgress, [0, 1], [0.25, 0.1])

  return (
    <motion.div style={{ rotate, scale, opacity }} className="pointer-events-none fixed inset-0 -z-5 grid place-items-center mix-blend-screen">
      <div className="relative h-[160vmin] w-[160vmin]">
        {Array.from({ length: 64 }).map((_, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 h-[70vmin] w-px -translate-x-1/2 -translate-y-1/2"
            style={{
              transform: `rotate(${(360/64)*i}deg)`,
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.6), rgba(255,255,255,0))',
              filter: 'blur(0.5px)'
            }}
          />
        ))}
        {/* Rings for depth */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`r-${i}`}
            className="absolute left-1/2 top-1/2 rounded-full"
            style={{
              width: `${30 + i*14}vmin`,
              height: `${30 + i*14}vmin`,
              transform: 'translate(-50%, -50%)',
              border: '1px solid rgba(255,255,255,0.16)',
              filter: 'blur(0.5px)'
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}

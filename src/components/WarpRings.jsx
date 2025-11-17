import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Concentric rings that scale/rotate with scroll to evoke warp speed
export default function WarpRings({ color = 'rgba(255,255,255,0.08)' }) {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2.4])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 90])
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 0.2])

  return (
    <motion.div style={{ scale, rotate, opacity }} className="pointer-events-none absolute inset-0 -z-10 grid place-items-center">
      <div className="relative h-[140vmin] w-[140vmin]">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="absolute inset-0 rounded-full" style={{
            border: `1px solid ${color}`,
            transform: `scale(${1 + i * 0.07})`,
            filter: 'blur(0.2px)'
          }} />
        ))}
      </div>
    </motion.div>
  )
}

import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

// Magnetic wrapper: pulls child toward the cursor with springy resistance
export default function Magnetic({ strength = 40, children, className = '' }) {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const x = useSpring(mx, { stiffness: 200, damping: 20, mass: 0.4 })
  const y = useSpring(my, { stiffness: 200, damping: 20, mass: 0.4 })
  const r = useTransform([x, y], ([vx, vy]) => (vx + vy) / 10)

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)
    mx.set((relX / rect.width) * strength)
    my.set((relY / rect.height) * strength)
  }

  const reset = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x, y, rotate: r }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

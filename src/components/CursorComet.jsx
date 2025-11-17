import React, { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorComet({ colorA = 'rgba(108,71,255,0.25)', colorB = 'rgba(0,212,255,0.18)' }) {
  const mx = useMotionValue(-200)
  const my = useMotionValue(-200)
  const x = useSpring(mx, { stiffness: 300, damping: 30, mass: 0.6 })
  const y = useSpring(my, { stiffness: 300, damping: 30, mass: 0.6 })

  useEffect(() => {
    const move = (e) => {
      mx.set(e.clientX)
      my.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [mx, my])

  return (
    <div className="pointer-events-none fixed inset-0 z-[5] mix-blend-screen">
      <motion.div
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
        className="relative h-32 w-32"
      >
        <div className="absolute inset-0 rounded-full blur-3xl" style={{ background: `radial-gradient(closest-side, ${colorA}, transparent)` }} />
        <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full blur-2xl" style={{ background: `linear-gradient(90deg, ${colorA}, ${colorB})` }} />
      </motion.div>
    </div>
  )
}

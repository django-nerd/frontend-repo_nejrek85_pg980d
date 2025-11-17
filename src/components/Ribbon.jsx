import React from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

// Flowing gradient ribbon that swims with scroll + time
export default function Ribbon({ height = 180, opacity = 0.4, colors = ['#6c47ff', '#00d4ff', '#f472b6'] }) {
  const { scrollY } = useScroll()
  const sy = useSpring(scrollY, { stiffness: 50, damping: 20, mass: 0.8 })
  const rotate = useTransform(sy, [0, 1500], [0, 25])

  return (
    <motion.svg
      style={{ rotate }}
      className="pointer-events-none absolute -z-10 left-0 right-0"
      height={height}
      viewBox={`0 0 1440 ${height}`}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={colors[0]} />
          <stop offset="50%" stopColor={colors[1]} />
          <stop offset="100%" stopColor={colors[2]} />
        </linearGradient>
      </defs>
      <motion.path
        d={`M0 ${height/2} C 360 ${height/2-60}, 720 ${height/2+60}, 1080 ${height/2-40} S 1440 ${height/2+40}, 1440 ${height/2}`}
        fill="none"
        stroke="url(#grad1)"
        strokeOpacity={opacity}
        strokeWidth={48}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0.7, 1, 0.7] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.svg>
  )
}

import React, { useMemo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// CPU-light starfield using CSS + parallax layers
export default function Starfield() {
  const { scrollY } = useScroll()
  const ySlow = useTransform(scrollY, [0, 2000], [0, -150])
  const yMid = useTransform(scrollY, [0, 2000], [0, -300])
  const yFast = useTransform(scrollY, [0, 2000], [0, -500])

  const stars1 = useMemo(() => generateStars(80), [])
  const stars2 = useMemo(() => generateStars(60), [])
  const stars3 = useMemo(() => generateStars(40), [])

  return (
    <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
      <motion.div style={{ y: ySlow }} className="absolute inset-0">
        {stars1.map((s, i) => (
          <span key={i} className="absolute rounded-full bg-white/50" style={{ left: s.x+'%', top: s.y+'%', width: s.size, height: s.size, filter: 'blur(0.5px)' }} />
        ))}
      </motion.div>
      <motion.div style={{ y: yMid }} className="absolute inset-0">
        {stars2.map((s, i) => (
          <span key={i} className="absolute rounded-full bg-cyan-100/70" style={{ left: s.x+'%', top: s.y+'%', width: s.size, height: s.size, filter: 'blur(0.5px)' }} />
        ))}
      </motion.div>
      <motion.div style={{ y: yFast }} className="absolute inset-0">
        {stars3.map((s, i) => (
          <span key={i} className="absolute rounded-full bg-fuchsia-100/80" style={{ left: s.x+'%', top: s.y+'%', width: s.size, height: s.size, filter: 'blur(0.5px)' }} />
        ))}
      </motion.div>
    </div>
  )
}

function generateStars(n) {
  return Array.from({ length: n }).map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
  }))
}

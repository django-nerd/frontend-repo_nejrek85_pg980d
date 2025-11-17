import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxLayers() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 600], [0, 60])
  const y2 = useTransform(scrollY, [0, 600], [0, -40])
  const y3 = useTransform(scrollY, [0, 600], [0, 100])

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div style={{ y: y1 }} className="absolute left-[-10%] top-[-10%] h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <motion.div style={{ y: y2 }} className="absolute right-[-10%] top-[20%] h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
      <motion.div style={{ y: y3 }} className="absolute bottom-[-10%] left-[30%] h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
    </div>
  )
}

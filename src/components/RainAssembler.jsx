import React, { useMemo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// RainAssembler
// Glyph droplets fall like rain and magnetize into a composite image near the bottom.
export default function RainAssembler() {
  const { scrollYProgress } = useScroll()
  const join = useTransform(scrollYProgress, [0.8, 0.95], [0, 1])

  const drops = useMemo(() => {
    const count = 120
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      d: 6 + Math.random() * 14,
      delay: Math.random() * 1.2,
      hue: Math.floor(Math.random() * 360),
    }))
  }, [])

  return (
    <section className="relative py-36">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative h-[340px] overflow-hidden rounded-3xl border border-white/15 bg-white/40 shadow-2xl backdrop-blur dark:bg-zinc-900/40">
          {drops.map((d) => (
            <motion.span
              key={d.id}
              className="absolute rounded-full"
              style={{ left: d.x + '%', width: d.d, height: d.d, backgroundColor: `hsl(${d.hue} 90% 60%)`, mixBlendMode: 'screen' }}
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: [ -80, 320 ] , opacity: [0, 1, 1, 0] }}
              transition={{ duration: 4 + (d.d % 3), repeat: Infinity, delay: d.delay, ease: 'easeIn' }}
            />
          ))}

          {/* Composite image target */}
          <motion.div
            className="pointer-events-none absolute bottom-8 left-1/2 grid h-28 w-28 -translate-x-1/2 place-items-center rounded-2xl border border-white/20 bg-white/10"
            style={{ opacity: join, scale: join.to([0, 1], [0.9, 1.05]) }}
          >
            <motion.div
              className="h-10 w-10 rounded-md"
              style={{ background: 'linear-gradient(135deg, #FF1D8E, #00E5FF)' }}
              animate={{ rotate: [0, 45, 0], borderRadius: ['8px', '50%', '8px'] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.span
              className="absolute inset-0 rounded-2xl"
              animate={{ opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                background:
                  'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent 60%), conic-gradient(from 0deg, rgba(255,0,128,0.25), rgba(0,200,255,0.25), rgba(160,255,80,0.25), rgba(255,0,128,0.25))',
                mixBlendMode: 'screen',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

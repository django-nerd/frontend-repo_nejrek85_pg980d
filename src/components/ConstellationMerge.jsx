import React, { useMemo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// ConstellationMerge
// Star particles drift, then connect lines and converge into a single emblem as you scroll.
export default function ConstellationMerge() {
  const { scrollYProgress } = useScroll()
  const converge = useTransform(scrollYProgress, [0.55, 0.75], [0, 1])

  const points = useMemo(() => generatePoints(36), [])

  return (
    <section className="relative py-36">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative h-[360px] overflow-hidden rounded-3xl border border-white/15 bg-white/40 shadow-2xl backdrop-blur dark:bg-zinc-900/40">
          {/* stars */}
          {points.map((p, i) => (
            <motion.span
              key={i}
              className="absolute h-1 w-1 rounded-full bg-white"
              style={{ left: p.x + '%', top: p.y + '%', opacity: 0.9 }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.9 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: i * 0.02 }}
            />
          ))}
          {/* connecting lines */}
          <svg className="absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
            {points.map((p, i) => (
              i < points.length - 1 && (
                <motion.line
                  key={i}
                  x1={p.x}
                  y1={p.y}
                  x2={points[i + 1].x}
                  y2={points[i + 1].y}
                  stroke="url(#glow)"
                  strokeWidth="0.3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.8, delay: i * 0.03 }}
                />
              )
            ))}
            <defs>
              <radialGradient id="glow">
                <stop offset="0%" stopColor="white" stopOpacity="0.9" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>

          {/* Converging emblem */}
          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl"
            style={{
              scale: converge.to([0, 1], [0.6, 1.1]),
              filter: converge.to([0, 1], ['blur(10px)', 'blur(0px)']),
              opacity: converge,
              mixBlendMode: 'screen',
              background:
                'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6), transparent 60%), conic-gradient(from 0deg, rgba(255,0,128,0.5), rgba(0,200,255,0.5), rgba(160,255,80,0.5), rgba(255,0,128,0.5))',
            }}
          >
            <motion.div
              className="h-10 w-10 rounded-md"
              style={{ background: 'linear-gradient(135deg, #A78BFA, #22D3EE)' }}
              animate={{ rotate: [0, 45, 0], borderRadius: ['8px', '50%', '8px'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function generatePoints(n) {
  return Array.from({ length: n }).map(() => ({ x: Math.random() * 100, y: Math.random() * 100 }))
}

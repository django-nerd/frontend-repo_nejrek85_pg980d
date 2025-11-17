import React, { useMemo, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// MorphExploder
// A central orb detonates into particles that then flock into four quadrant glyphs.
// Click to detonate, or it auto-detonates after entering the viewport.
export default function MorphExploder() {
  const [detonated, setDetonated] = useState(false)
  const [phase, setPhase] = useState('idle') // idle -> explode -> assemble

  const particles = useMemo(() => {
    const count = 140
    const arr = Array.from({ length: count }).map((_, i) => ({
      id: i,
      // random hue for psychedelic look
      hue: Math.floor(Math.random() * 360),
      r: 4 + Math.random() * 10,
      angle: Math.random() * Math.PI * 2,
      speed: 80 + Math.random() * 220,
      delay: Math.random() * 0.15,
      group: i % 4, // route to 4 quadrants when assembling
    }))
    return arr
  }, [])

  useEffect(() => {
    const t = setTimeout(() => setDetonated(true), 1600)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (detonated) {
      setPhase('explode')
      const t = setTimeout(() => setPhase('assemble'), 1600)
      return () => clearTimeout(t)
    }
  }, [detonated])

  // target positions for 4 glyphs (relative to center)
  const targets = [
    { x: -180, y: -120 }, // top-left
    { x: 180, y: -120 }, // top-right
    { x: -180, y: 120 }, // bottom-left
    { x: 180, y: 120 }, // bottom-right
  ]

  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-5xl px-4">
        <div className="relative grid place-items-center overflow-hidden rounded-3xl border border-white/15 bg-white/40 p-12 shadow-2xl backdrop-blur dark:bg-zinc-900/40">
          <motion.div
            className="pointer-events-auto z-10 grid place-items-center"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8 }}
          >
            <motion.button
              onClick={() => setDetonated(true)}
              className="relative grid h-36 w-36 place-items-center rounded-full"
              style={{
                background:
                  'conic-gradient(from 0deg, rgba(255,0,128,0.7), rgba(0,200,255,0.7), rgba(160,255,80,0.7), rgba(255,0,128,0.7))',
                boxShadow:
                  '0 0 40px rgba(255,0,128,0.6), inset 0 0 30px rgba(255,255,255,0.4)',
                mixBlendMode: 'screen',
              }}
            >
              <span className="text-sm font-bold tracking-widest text-white drop-shadow">{phase === 'idle' ? 'DETONATE' : phase === 'explode' ? 'CHAOS' : 'MORPH'}</span>
              <motion.span
                className="absolute inset-0 rounded-full"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                style={{
                  background:
                    'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent 60%), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.2), transparent 60%)',
                }}
              />
            </motion.button>
          </motion.div>

          {/* Particles layer */}
          <div className="pointer-events-none absolute inset-0">
            {particles.map((p) => {
              // explosion vector
              const dx = Math.cos(p.angle) * p.speed
              const dy = Math.sin(p.angle) * p.speed
              const target = targets[p.group]
              return (
                <motion.span
                  key={p.id}
                  className="absolute rounded-full"
                  style={{ width: p.r, height: p.r, left: '50%', top: '50%', backgroundColor: `hsl(${p.hue} 90% 60%)`, mixBlendMode: 'screen' }}
                  initial={{ x: 0, y: 0, opacity: 0 }}
                  animate={
                    phase === 'explode'
                      ? { x: dx, y: dy, opacity: 1, scale: 1 }
                      : phase === 'assemble'
                      ? { x: target.x + (Math.random() - 0.5) * 40, y: target.y + (Math.random() - 0.5) * 40, opacity: 1, scale: 0.9 }
                      : { x: 0, y: 0, opacity: 0 }
                  }
                  transition={{ duration: phase === 'explode' ? 1.2 : 1.6, delay: p.delay, ease: [0.16, 1, 0.3, 1] }}
                />
              )
            })}
          </div>

          {/* Quadrant glyphs (appear after assemble) */}
          <AnimatePresence>
            {phase === 'assemble' && (
              <>
                {targets.map((t, i) => (
                  <motion.div
                    key={i}
                    className="pointer-events-none absolute grid h-28 w-28 place-items-center rounded-2xl"
                    style={{
                      left: `calc(50% + ${t.x}px)`,
                      top: `calc(50% + ${t.y}px)`,
                      mixBlendMode: 'screen',
                    }}
                    initial={{ scale: 0, rotate: -30, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0.2 + i * 0.05 }}
                  >
                    <Glyph index={i} />
                  </motion.div>
                ))}
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

function Glyph({ index }) {
  const palettes = [
    ['#FF1D8E', '#FF7A00'],
    ['#00E5FF', '#5AFF7E'],
    ['#A78BFA', '#22D3EE'],
    ['#FDE047', '#FB7185'],
  ]
  const [a, b] = palettes[index % palettes.length]
  return (
    <div className="relative h-20 w-20">
      <div
        className="absolute inset-0 rounded-2xl"
        style={{ background: `linear-gradient(135deg, ${a}, ${b})`, filter: 'blur(8px)', opacity: 0.8 }}
      />
      <div className="absolute inset-0 grid place-items-center rounded-2xl border border-white/30 bg-white/10 backdrop-blur">
        <motion.div
          className="h-8 w-8 rounded-md"
          style={{ background: `linear-gradient(180deg, ${a}, ${b})` }}
          animate={{ rotate: [0, 45, 0], borderRadius: ['6px', '50%', '6px'], scale: [1, 1.1, 1] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </div>
  )
}

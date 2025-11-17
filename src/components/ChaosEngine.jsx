import React, { useMemo } from 'react'
import { motion } from 'framer-motion'

// ChaosEngine sprays animated, blended blobs and streaks across the viewport.
// Heavy motion, additive blending, perpetual drift and jitter.
export default function ChaosEngine() {
  const blobs = useMemo(() => Array.from({ length: 9 }).map((_, i) => ({
    id: i,
    size: 220 + Math.random() * 380,
    hue: Math.floor(Math.random() * 360),
    x: Math.random() * 100,
    y: Math.random() * 100,
    dur: 10 + Math.random() * 16,
    amp: 120 + Math.random() * 200,
  })), [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[6] mix-blend-screen">
      {blobs.map(b => (
        <motion.div
          key={b.id}
          initial={{ x: `${b.x}vw`, y: `${b.y}vh`, rotate: 0 }}
          animate={{
            x: [ `${b.x}vw`, `${b.x + 10}vw`, `${b.x - 8}vw`, `${b.x}vw` ],
            y: [ `${b.y}vh`, `${b.y - 8}vh`, `${b.y + 12}vh`, `${b.y}vh` ],
            rotate: [0, 120, -80, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: b.dur, repeat: Infinity, ease: 'easeInOut' }}
          style={{ filter: 'blur(30px)', opacity: 0.35 }}
          className="absolute"
        >
          <div
            style={{
              width: b.size,
              height: b.size,
              borderRadius: '9999px',
              background: `conic-gradient(from 0deg, hsla(${b.hue},100%,60%,0.7), hsla(${(b.hue+160)%360},100%,60%,0.7), hsla(${(b.hue+300)%360},100%,60%,0.7))`,
            }}
          />
        </motion.div>
      ))}

      {/* Streaks */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`s-${i}`}
          className="absolute"
          style={{ left: `${Math.random()*100}vw`, top: `${Math.random()*100}vh`, opacity: 0.18 }}
          animate={{
            x: [0, -200, 200, 0],
            y: [0, 120, -160, 0],
            rotate: [0, 360],
          }}
          transition={{ duration: 14 + Math.random()*10, repeat: Infinity, ease: 'linear' }}
        >
          <div className="h-[2px] w-[40vmin] bg-gradient-to-r from-transparent via-white/70 to-transparent blur-[1px]" />
        </motion.div>
      ))}
    </div>
  )
}

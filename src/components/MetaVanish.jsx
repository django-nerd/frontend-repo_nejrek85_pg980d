import React, { useEffect } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

// MetaVanish
// When this section scrolls into view, surrounding page content tilts, slides, and exits offscreen.
export default function MetaVanish() {
  const { scrollYProgress } = useScroll({})
  const tilt = useTransform(scrollYProgress, [0.2, 0.35], [0, -8])
  const yExit = useTransform(scrollYProgress, [0.25, 0.45], [0, -400])
  const blur = useTransform(scrollYProgress, [0.25, 0.45], [0, 12])
  const opacity = useTransform(scrollYProgress, [0.25, 0.45], [1, 0])

  useEffect(() => {
    // add a class to body so global styles can react
    const cls = 'meta-vanish'
    const on = () => document.documentElement.classList.add(cls)
    const off = () => document.documentElement.classList.remove(cls)
    const u = scrollYProgress.on('change', (v) => {
      if (v > 0.25 && v < 0.6) on()
      else off()
    })
    return () => {
      off()
      u()
    }
  }, [scrollYProgress])

  return (
    <section id="meta" className="relative py-40">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          style={{ rotateX: tilt, y: yExit, filter: blur.to((b) => `blur(${b}px)`), opacity }}
          className="rounded-3xl border border-white/15 bg-white/50 p-14 text-center shadow-2xl backdrop-blur dark:bg-zinc-900/50"
        >
          <h3 className="text-3xl font-extrabold">The Meta Layer</h3>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">
            As you approach, reality bends. When you pass, it evaporates.
          </p>
        </motion.div>
      </div>
      {/* Global overlay lines that slide away */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[120vh]"
        style={{ opacity }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
            style={{ top: `${(i + 1) * 5}%` }}
            initial={{ x: 0 }}
            animate={{ x: [0, (i % 2 ? -1 : 1) * 200, (i % 3 ? 1 : -1) * 600] }}
            transition={{ duration: 6 + i * 0.1, repeat: Infinity, ease: 'easeInOut' }}
          />)
        )}
      </motion.div>
    </section>
  )
}

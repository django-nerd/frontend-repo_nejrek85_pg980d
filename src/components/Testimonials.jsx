import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useBrand } from './BrandProvider'
import ChaosTextHeading from './ChaosTextHeading'

const items = [
  {
    quote: 'They delivered a jaw-dropping site in days. Conversions jumped immediately.',
    author: 'Ava Martinez',
    role: 'CMO, Nova Labs',
    avatar: 'https://i.pravatar.cc/120?img=5',
  },
  {
    quote: 'The most fluid, cinematic web experience we\'ve launched to date.',
    author: 'Daniel Yu',
    role: 'Head of Brand, Orbit',
    avatar: 'https://i.pravatar.cc/120?img=15',
  },
  {
    quote: 'Every interaction feels alive. Our team is obsessed.',
    author: 'Maya Cohen',
    role: 'Product Lead, Flux',
    avatar: 'https://i.pravatar.cc/120?img=25',
  },
  {
    quote: 'They don\'t just build websites—they stage performances.',
    author: 'Leo Fischer',
    role: 'Founder, Helix Studio',
    avatar: 'https://i.pravatar.cc/120?img=35',
  },
]

export default function Testimonials() {
  const { brand } = useBrand()
  const { scrollYProgress } = useScroll()
  const angle = useTransform(scrollYProgress, [0, 1], [-6, 6])

  return (
    <section id="testimonials" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <ChaosTextHeading text={'Voices|What clients say'} gradient={`linear-gradient(90deg, ${brand.primary}, ${brand.secondary})`} />
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">Real words from teams we\'ve launched with.</p>
          </div>
          <div className="hidden h-px flex-1 items-center gap-2 md:flex">
            <span className="h-px w-12 rounded-full" style={{ background: brand.primary }} />
            <span className="h-px w-full bg-zinc-200 dark:bg-zinc-800" />
          </div>
        </div>

        <motion.div style={{ rotate: angle }} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: 'spring', stiffness: 120, damping: 16, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/60 p-5 shadow backdrop-blur dark:border-white/10 dark:bg-zinc-900/50"
            >
              <motion.div
                animate={{ y: [0, -8, 0, 6, 0], rotate: [0, 1.2, 0, -1, 0] }}
                transition={{ repeat: Infinity, duration: 10 + i * 1.5, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.author} className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-white">{t.author}</p>
                    <p className="text-xs text-zinc-500">{t.role}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">“{t.quote}”</p>
              </motion.div>
              <div className="pointer-events-none absolute -inset-10 -z-10" style={{ background: `radial-gradient(300px at 30% 20%, ${brand.primary}20, transparent)` }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

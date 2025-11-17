import React from 'react'
import { useBrand } from './BrandProvider'
import { motion } from 'framer-motion'

export default function Hero() {
  const { brand } = useBrand()
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_circle_at_50%_-200px,rgba(99,102,241,0.25),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-extrabold leading-tight text-zinc-900 dark:text-white sm:text-5xl md:text-6xl"
            >
              High-Conversion Wix Websites
              <span className="block text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(90deg, ${brand.primary}, ${brand.secondary})` }}>
                Built Lightning Fast
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 max-w-xl text-lg text-zinc-600 dark:text-zinc-300"
            >
              Strategy, design, and development tailored for bold brands. Launch faster, rank higher, convert better.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#contact"
                className="rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10"
                style={{ background: brand.primary }}
              >
                Start a Project
              </a>
              <a
                href="#work"
                className="rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-800 hover:bg-white/60 dark:border-zinc-700 dark:text-zinc-100"
              >
                See Our Work
              </a>
            </motion.div>
            <div className="mt-8 flex gap-8 text-sm text-zinc-600 dark:text-zinc-400">
              <div>
                <p className="text-2xl font-bold text-zinc-900 dark:text-white">300+</p>
                <p>Projects shipped</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-zinc-900 dark:text-white">4.9/5</p>
                <p>Average rating</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-zinc-900 dark:text-white">48h</p>
                <p>Avg. turnaround</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative rounded-2xl border border-white/20 bg-white/50 p-2 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-zinc-900/50"
            >
              <div className="aspect-[16/10] w-full overflow-hidden rounded-xl">
                {brand.heroUrl ? (
                  <img src={brand.heroUrl} alt="Hero" className="h-full w-full object-cover" />
                ) : (
                  <div className="grid h-full place-items-center bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700">
                    <span className="text-zinc-500">Hero image placeholder</span>
                  </div>
                )}
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/40" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

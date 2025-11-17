import React from 'react'
import { motion } from 'framer-motion'
import { useBrand } from './BrandProvider'

export default function Work() {
  const { brand } = useBrand()
  const images = brand.gallery && brand.gallery.length > 0 ? brand.gallery : []

  const fallback = [
    'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600267175161-cfaa711b4a8e?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1564865887011-9f44e78921d1?q=80&w=1600&auto=format&fit=crop',
  ]

  const gallery = images.length > 0 ? images : fallback

  return (
    <section id="work" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">Selected Work</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">A few snapshots from recent launches.</p>
          </div>
          <div className="hidden h-px flex-1 items-center gap-2 md:flex">
            <span className="h-px w-12 rounded-full" style={{ background: brand.primary }} />
            <span className="h-px w-full bg-zinc-200 dark:bg-zinc-800" />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="overflow-hidden rounded-2xl border border-white/20 bg-white/60 p-2 backdrop-blur dark:border-white/10 dark:bg-zinc-900/50"
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl">
                <img src={src} alt="Portfolio" className="h-full w-full object-cover transition duration-500 hover:scale-105" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

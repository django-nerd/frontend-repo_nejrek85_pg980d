import React from 'react'
import { motion } from 'framer-motion'
import { useBrand } from './BrandProvider'
import MotionGrid from './MotionGrid'
import ChaosTextHeading from './ChaosTextHeading'

export default function Work() {
  const { brand } = useBrand()
  const images = brand.gallery && brand.gallery.length > 0 ? brand.gallery : []

  const fallback = [
    'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600267175161-cfaa711b4a8e?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1564865887011-9f44e78921d1?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542393545-10f5cde2c810?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop'
  ]

  const gallery = images.length > 0 ? images : fallback

  return (
    <section id="work" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <ChaosTextHeading text={'Selected Work|Snapshots from launches'} gradient={`linear-gradient(90deg, ${brand.primary}, ${brand.secondary})`} />
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">A few snapshots from recent launches.</p>
          </div>
          <div className="hidden h-px flex-1 items-center gap-2 md:flex">
            <span className="h-px w-12 rounded-full" style={{ background: brand.primary }} />
            <span className="h-px w-full bg-zinc-200 dark:bg-zinc-800" />
          </div>
        </div>

        <MotionGrid items={gallery} color={brand.primary} />
      </div>
    </section>
  )
}

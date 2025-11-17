import React from 'react'
import { useBrand } from './BrandProvider'
import { motion } from 'framer-motion'
import { Sparkles, Rocket, Megaphone, Wrench } from 'lucide-react'
import ChaosTextHeading from './ChaosTextHeading'

const services = [
  { icon: Sparkles, title: 'Wix Design', desc: 'Clean, conversion-first designs tuned for your brand.' },
  { icon: Rocket, title: 'Lightning Dev', desc: 'Pixel-perfect builds, performance-focused and SEO-ready.' },
  { icon: Megaphone, title: 'CRO & SEO', desc: 'Strategy, funnels, and on-page SEO to grow faster.' },
  { icon: Wrench, title: 'Ongoing Care', desc: 'Plans for updates, fixes, and continuous improvements.' },
]

export default function Services() {
  const { brand } = useBrand()
  return (
    <section id="services" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <ChaosTextHeading text={'Services|Everything you need'} gradient={`linear-gradient(90deg, ${brand.primary}, ${brand.secondary})`} />
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">Design, build, and grow with momentum.</p>
          </div>
          <div className="hidden h-px flex-1 items-center gap-2 md:flex">
            <span className="h-px w-12 rounded-full" style={{ background: brand.primary }} />
            <span className="h-px w-full bg-zinc-200 dark:bg-zinc-800" />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="group rounded-2xl border border-zinc-200/70 bg-white/70 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-800/70 dark:bg-zinc-900/50"
            >
              <div className="mb-4 inline-flex rounded-xl p-2 text-white" style={{ background: brand.primary }}>
                <s.icon size={18} />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import BrandPanel from './components/BrandPanel'
import { BrandProvider, useBrand } from './components/BrandProvider'

function Testimonials() {
  const { brand } = useBrand()
  const items = [
    {
      quote:
        'They transformed our site and bookings jumped immediately. The process was fast and collaborative.',
      author: 'Alex Rivera',
      role: 'Founder, Nova Studio',
    },
    {
      quote:
        'Sharp design and smart SEO. We saw an uptick in qualified leads within weeks of launch.',
      author: 'Priya Malhotra',
      role: 'Marketing Lead, Apex Labs',
    },
    {
      quote:
        'Reliable, fast, and creative. Easily one of the best experiences we have had with a web team.',
      author: 'Jordan Lee',
      role: 'COO, Bright & Co.',
    },
  ]

  return (
    <section id="testimonials" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">Clients love the results</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">Here are a few words from recent projects.</p>
          </div>
          <div className="hidden h-px flex-1 items-center gap-2 md:flex">
            <span className="h-px w-12 rounded-full" style={{ background: brand.primary }} />
            <span className="h-px w-full bg-zinc-200 dark:bg-zinc-800" />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-zinc-200/70 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-900/50"
            >
              <div className="mb-4 h-1 w-12 rounded-full" style={{ background: brand.primary }} />
              <p className="text-zinc-700 dark:text-zinc-200">“{t.quote}”</p>
              <div className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="font-semibold text-zinc-900 dark:text-white">{t.author}</span> · {t.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  const { brand } = useBrand()
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/60 p-8 text-center shadow-2xl backdrop-blur dark:border-white/10 dark:bg-zinc-900/60">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white sm:text-3xl">Ready to boost conversions?</h3>
          <p className="mx-auto mt-2 max-w-2xl text-zinc-600 dark:text-zinc-300">
            Tell us about your goals and we’ll propose the fastest path to launch.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:hello@lordofthewix.com"
              className="rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-lg"
              style={{ background: brand.primary }}
            >
              Get a Free Quote
            </a>
            <a
              href="#services"
              className="rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-800 hover:bg-white/60 dark:border-zinc-700 dark:text-zinc-100"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const { brand } = useBrand()
  return (
    <footer className="relative border-t border-zinc-200/70 py-10 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full" style={{ background: brand.primary }} />
            <span className="text-sm text-zinc-600 dark:text-zinc-300">{brand.name} © {new Date().getFullYear()}</span>
          </div>
          <div className="text-xs text-zinc-500">Built with care and a dash of magic.</div>
        </div>
      </div>
    </footer>
  )
}

function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 text-zinc-900 dark:from-zinc-950 dark:to-zinc-900 dark:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Testimonials />
      <CTA />
      <Footer />
      <BrandPanel />
    </div>
  )
}

export default function App() {
  return (
    <BrandProvider>
      <Page />
    </BrandProvider>
  )
}

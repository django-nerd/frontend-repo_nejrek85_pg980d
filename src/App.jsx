import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import BrandPanel from './components/BrandPanel'
import { BrandProvider } from './components/BrandProvider'
import ScrollProgress from './components/ScrollProgress'
import ParallaxLayers from './components/ParallaxLayers'

function Page() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 text-zinc-900 dark:from-zinc-950 dark:to-zinc-900 dark:text-white">
      <ScrollProgress />
      <ParallaxLayers />
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <section className="relative py-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/60 p-10 text-center shadow-2xl backdrop-blur dark:border-white/10 dark:bg-zinc-900/60">
            <h3 className="text-2xl font-bold sm:text-3xl">Ready to boost conversions?</h3>
            <p className="mx-auto mt-2 max-w-2xl text-zinc-600 dark:text-zinc-300">
              Tell us about your goals and we’ll propose the fastest path to launch.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:hello@lordofthewix.com"
                className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-lg dark:bg-white dark:text-zinc-900"
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
      <footer className="relative border-t border-zinc-200/70 py-10 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400" />
              <span className="text-sm text-zinc-600 dark:text-zinc-300">All rights reserved</span>
            </div>
            <div className="text-xs text-zinc-500">Built with care and a dash of motion.</div>
          </div>
        </div>
      </footer>
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

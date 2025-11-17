import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import Testimonials from './components/Testimonials'
import BrandPanel from './components/BrandPanel'
import { BrandProvider } from './components/BrandProvider'
import ScrollProgress from './components/ScrollProgress'
import ParallaxLayers from './components/ParallaxLayers'
import Starfield from './components/Starfield'
import WarpRings from './components/WarpRings'
import CursorComet from './components/CursorComet'
import Ribbon from './components/Ribbon'
import Magnetic from './components/Magnetic'
import ChaosEngine from './components/ChaosEngine'
import HyperspaceTunnel from './components/HyperspaceTunnel'
import ChaosScroller from './components/ChaosScroller'
import SectionChaosPack from './components/SectionChaosPack'

function Page() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 text-zinc-900 dark:from-zinc-950 dark:to-zinc-900 dark:text-white">
      {/* Global chaos toggles */}
      <ChaosScroller />

      {/* Foreground comet that tracks cursor */}
      <CursorComet />

      {/* Chaos engine and tunnel sit under UI but above background */}
      <ChaosEngine />
      <HyperspaceTunnel />

      {/* Background systems */}
      <ScrollProgress />
      <Starfield />
      <WarpRings />
      <ParallaxLayers />

      <div className="relative z-10">
        <Magnetic>
          <Navbar />
        </Magnetic>

        <div className="relative">
          <Ribbon height={160} opacity={0.45} />
          <Hero />
        </div>

        <Ribbon height={160} opacity={0.35} />
        <Services />

        {/* Surreal interaction pack */}
        <SectionChaosPack />

        <Ribbon height={160} opacity={0.3} />
        <Work />

        <Ribbon height={160} opacity={0.28} />
        <Testimonials />

        <section className="relative py-24">
          <div className="mx-auto max-w-5xl px-4">
            <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/60 p-10 text-center shadow-2xl backdrop-blur dark:border-white/10 dark:bg-zinc-900/60">
              <h3 className="text-2xl font-bold sm:text-3xl">Ready to boost conversions?</h3>
              <p className="mx-auto mt-2 max-w-2xl text-zinc-600 dark:text-zinc-300">
                Tell us about your goals and we’ll propose the fastest path to launch.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Magnetic>
                  <a
                    href="mailto:hello@lordofthewix.com"
                    className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-lg dark:bg-white dark:text-zinc-900"
                  >
                    Get a Free Quote
                  </a>
                </Magnetic>
                <Magnetic>
                  <a
                    href="#services"
                    className="rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-800 hover:bg-white/60 dark:border-zinc-700 dark:text-zinc-100"
                  >
                    Explore Services
                  </a>
                </Magnetic>
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

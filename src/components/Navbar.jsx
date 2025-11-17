import React from 'react'
import { useBrand } from './BrandProvider'
import { Menu, Rocket, Sparkles } from 'lucide-react'

export default function Navbar() {
  const { brand } = useBrand()
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/50 p-3 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-white/10 dark:bg-zinc-900/50">
          <a href="#" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl" style={{ background: brand.primary }}>
              <Rocket size={18} className="text-white" />
            </div>
            <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">{brand.name}</span>
          </a>
          <nav className="hidden gap-6 md:flex">
            {['Services', 'Work', 'Testimonials', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href="#contact" className="hidden rounded-xl px-4 py-2 text-sm font-semibold text-white md:inline-flex" style={{ background: brand.primary }}>
              <Sparkles size={16} className="mr-2" />
              Get a Quote
            </a>
            <button className="inline-flex rounded-xl p-2 md:hidden" aria-label="Open Menu">
              <Menu size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

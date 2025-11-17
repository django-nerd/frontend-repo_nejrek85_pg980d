import React, { useMemo, useState } from 'react'
import { useBrand } from './BrandProvider'
import { Settings, Image as ImageIcon, Palette } from 'lucide-react'

export default function BrandPanel() {
  const { brand, setBrand } = useBrand()
  const [open, setOpen] = useState(false)

  const [form, setForm] = useState({
    name: brand.name,
    primary: brand.primary,
    secondary: brand.secondary,
    heroUrl: brand.heroUrl || '',
    logoUrl: brand.logoUrl || '',
    gallery: (brand.gallery || []).join(', '),
  })

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const apply = () => {
    const gallery = form.gallery
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)
    setBrand({
      ...brand,
      name: form.name,
      primary: form.primary,
      secondary: form.secondary,
      heroUrl: form.heroUrl,
      logoUrl: form.logoUrl,
      gallery,
    })
    setOpen(false)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 rounded-xl bg-white/80 px-4 py-2 text-sm font-semibold shadow backdrop-blur hover:bg-white dark:bg-zinc-900/70 dark:text-white"
        >
          <Settings size={16} />
          Brand
        </button>
      ) : (
        <div className="w-[360px] overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center justify-between border-b border-zinc-200 p-3 dark:border-zinc-800">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Settings size={16} /> Brand Settings
            </div>
            <button onClick={() => setOpen(false)} className="rounded-lg px-2 py-1 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800">Close</button>
          </div>
          <div className="max-h-[70vh] space-y-3 overflow-y-auto p-4 text-sm">
            <div>
              <label className="mb-1 block text-zinc-600 dark:text-zinc-300">Brand Name</label>
              <input name="name" value={form.name} onChange={onChange} className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 dark:border-zinc-700 dark:bg-zinc-800" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1 block text-zinc-600 dark:text-zinc-300">Primary Color</label>
                <div className="flex items-center gap-2">
                  <input name="primary" value={form.primary} onChange={onChange} className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 font-mono text-xs dark:border-zinc-700 dark:bg-zinc-800" />
                  <span className="h-8 w-8 rounded" style={{ background: form.primary }} />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-zinc-600 dark:text-zinc-300">Secondary Color</label>
                <div className="flex items-center gap-2">
                  <input name="secondary" value={form.secondary} onChange={onChange} className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 font-mono text-xs dark:border-zinc-700 dark:bg-zinc-800" />
                  <span className="h-8 w-8 rounded" style={{ background: form.secondary }} />
                </div>
              </div>
            </div>
            <div>
              <label className="mb-1 block text-zinc-600 dark:text-zinc-300">Logo URL</label>
              <input name="logoUrl" value={form.logoUrl} onChange={onChange} className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 dark:border-zinc-700 dark:bg-zinc-800" />
            </div>
            <div>
              <label className="mb-1 block text-zinc-600 dark:text-zinc-300">Hero Image URL</label>
              <input name="heroUrl" value={form.heroUrl} onChange={onChange} className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 dark:border-zinc-700 dark:bg-zinc-800" />
            </div>
            <div>
              <label className="mb-1 block text-zinc-600 dark:text-zinc-300">Gallery Image URLs (comma-separated)</label>
              <textarea name="gallery" value={form.gallery} onChange={onChange} rows={3} className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 dark:border-zinc-700 dark:bg-zinc-800" />
            </div>
          </div>
          <div className="flex items-center justify-between gap-2 border-t border-zinc-200 p-3 dark:border-zinc-800">
            <div className="text-xs text-zinc-500">Paste assets from your site to instantly theme the page.</div>
            <button onClick={apply} className="rounded-lg bg-zinc-900 px-3 py-2 text-xs font-semibold text-white dark:bg-white dark:text-zinc-900">Apply</button>
          </div>
        </div>
      )}
    </div>
  )
}

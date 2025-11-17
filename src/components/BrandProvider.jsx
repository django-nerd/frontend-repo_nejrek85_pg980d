import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const DEFAULT_BRAND = {
  // You can update these live from the Brand Panel on the page
  name: 'Lord of the Wix',
  primary: '#6c47ff', // fallback primary
  secondary: '#00d4ff', // fallback secondary
  accent: '#111827',
  textOnPrimary: '#ffffff',
  logoUrl: '',
  heroUrl: '',
  gallery: [],
}

const STORAGE_KEY = 'brand-config-v1'

const BrandContext = createContext({ brand: DEFAULT_BRAND, setBrand: () => {} })

export function BrandProvider({ children }) {
  const [brand, setBrand] = useState(DEFAULT_BRAND)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) setBrand({ ...DEFAULT_BRAND, ...JSON.parse(saved) })
    } catch {}
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(brand))
    } catch {}
  }, [brand])

  const value = useMemo(() => ({ brand, setBrand }), [brand])
  return <BrandContext.Provider value={value}>{children}</BrandContext.Provider>
}

export function useBrand() {
  return useContext(BrandContext)
}

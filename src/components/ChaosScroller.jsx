import React, { useEffect } from 'react'

// Global class toggles to intensify motion amplitudes
export default function ChaosScroller() {
  useEffect(() => {
    const root = document.documentElement
    root.classList.add('chaos')
    return () => root.classList.remove('chaos')
  }, [])
  return null
}

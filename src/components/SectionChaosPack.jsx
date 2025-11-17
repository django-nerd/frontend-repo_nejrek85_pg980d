import React from 'react'
import MorphExploder from './MorphExploder'
import MetaVanish from './MetaVanish'
import ConstellationMerge from './ConstellationMerge'
import RainAssembler from './RainAssembler'

// SectionChaosPack combines four surreal interaction scenes
export default function SectionChaosPack() {
  return (
    <div className="relative">
      <MorphExploder />
      <MetaVanish />
      <ConstellationMerge />
      <RainAssembler />
    </div>
  )
}

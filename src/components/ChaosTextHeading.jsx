import React from 'react'
import ChaosText from './ChaosText'

export default function ChaosTextHeading({ text, gradient }) {
  return (
    <h3 className="text-3xl font-extrabold sm:text-4xl">
      <span className="block"><ChaosText text={text.split('|')[0]} /></span>
      {text.includes('|') && (
        <span className="block text-transparent bg-clip-text" style={{ backgroundImage: gradient || 'linear-gradient(90deg,#FF1D8E,#00E5FF)' }}>
          <ChaosText text={text.split('|')[1]} />
        </span>
      )}
    </h3>
  )
}

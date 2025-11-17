import React from 'react'
import { motion } from 'framer-motion'

export default function MotionGrid({ items = [], color = '#6c47ff' }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((it, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16, rotate: -1 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: 'spring', stiffness: 120, damping: 14, delay: i * 0.05 }}
          whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.12)', rotate: 0.5 }}
          className="group overflow-hidden rounded-2xl border border-white/20 bg-white/60 p-4 backdrop-blur dark:border-white/10 dark:bg-zinc-900/50"
        >
          <div className="aspect-[4/3] w-full overflow-hidden rounded-xl">
            <img src={it} alt="item" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
          </div>
          <motion.div
            layout
            className="mt-3 h-1 w-10 rounded-full"
            style={{ background: color }}
          />
        </motion.div>
      ))}
    </div>
  )
}

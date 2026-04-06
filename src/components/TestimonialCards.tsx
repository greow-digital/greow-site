'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

interface Testimonial {
  id: number
  quote: string
  author: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: 'Working with Erik gave us direction we had been missing for months. Within weeks we had a clear roadmap and the team was aligned for the first time.',
    author: 'Placeholder Name',
    role: 'CEO @ Company',
  },
  {
    id: 2,
    quote: 'He challenged us to drop three initiatives we had been running for a year. That decision alone freed us up to double down on what actually moved the needle.',
    author: 'Placeholder Name',
    role: 'Head of Growth @ Company',
  },
  {
    id: 3,
    quote: 'I expected strategy. I got strategy plus a complete shift in how the team prioritizes and runs experiments. The impact has been real and lasting.',
    author: 'Placeholder Name',
    role: 'CMO @ Company',
  },
]

type Position = 'front' | 'middle' | 'back'

function TestimonialCard({
  handleShuffle,
  testimonial,
  position,
}: {
  handleShuffle: () => void
  testimonial: Testimonial
  position: Position
}) {
  const dragRef = useRef(0)
  const isFront = position === 'front'

  const zIndex = position === 'front' ? 2 : position === 'middle' ? 1 : 0
  const rotate = position === 'front' ? '-4deg' : position === 'middle' ? '0deg' : '4deg'
  const x = position === 'front' ? 0 : position === 'middle' ? 14 : 28

  return (
    <motion.div
      style={{ zIndex }}
      animate={{ rotate, x }}
      drag={isFront}
      dragElastic={0.35}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      onDragStart={(e: any) => { dragRef.current = e.clientX }}
      onDragEnd={(e: any) => {
        if (dragRef.current - e.clientX > 150) handleShuffle()
        dragRef.current = 0
      }}
      transition={{ duration: 0.35 }}
      className={isFront ? 'testimonial-card testimonial-card--front' : 'testimonial-card'}
    >
      <img
        src={`https://i.pravatar.cc/128?img=${testimonial.id}`}
        alt={`Avatar of ${testimonial.author}`}
        className="testimonial-avatar"
        draggable={false}
      />
      <p className="testimonial-quote">"{testimonial.quote}"</p>
      <div>
        <p className="testimonial-author">{testimonial.author}</p>
        <p className="testimonial-role">{testimonial.role}</p>
      </div>
    </motion.div>
  )
}

export default function TestimonialCards() {
  const [positions, setPositions] = useState<Position[]>(['front', 'middle', 'back'])

  const handleShuffle = () => {
    setPositions((prev) => {
      const next = [...prev]
      next.unshift(next.pop() as Position)
      return next
    })
  }

  return (
    <div className="testimonial-stack-wrap">
      <div className="testimonial-stack">
        {testimonials.map((t, i) => (
          <TestimonialCard
            key={t.id}
            testimonial={t}
            position={positions[i]}
            handleShuffle={handleShuffle}
          />
        ))}
      </div>
      <p className="testimonial-hint">Drag to shuffle →</p>
    </div>
  )
}

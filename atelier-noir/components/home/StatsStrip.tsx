'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 120, suffix: '+', label: 'Projects Completed' },
  { value: 8, suffix: '', label: 'Years of Excellence' },
  { value: 40, suffix: '+', label: 'Corporate Clients' },
  { value: 15, suffix: '', label: 'Design Awards' },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1500
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function StatsStrip() {
  return (
    <section className="border-y border-divider bg-charcoal px-8 py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col gap-1 ${i > 0 ? 'md:border-l md:border-divider md:pl-8' : ''}`}
            >
              <p className="font-playfair text-[clamp(40px,5vw,64px)] leading-none text-warm-white">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="font-inter text-[10px] uppercase tracking-[0.25em] text-stone">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

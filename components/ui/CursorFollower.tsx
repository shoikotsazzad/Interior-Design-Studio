'use client'

import { useEffect, useRef } from 'react'

export default function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    const label = labelRef.current
    if (!dot || !ring || !label) return

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0
    let rafId: number
    let isHovering = false

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`
    }

    const onMouseEnterCard = () => {
      isHovering = true
      ring.style.width = '80px'
      ring.style.height = '80px'
      ring.style.opacity = '0.9'
      label.style.opacity = '1'
    }

    const onMouseLeaveCard = () => {
      isHovering = false
      ring.style.width = '40px'
      ring.style.height = '40px'
      ring.style.opacity = '0.4'
      label.style.opacity = '0'
    }

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const animate = () => {
      ringX = lerp(ringX, mouseX, 0.12)
      ringY = lerp(ringY, mouseY, 0.12)
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`
      rafId = requestAnimationFrame(animate)
    }
    rafId = requestAnimationFrame(animate)

    document.addEventListener('mousemove', onMouseMove)

    const cards = document.querySelectorAll('.project-card')
    cards.forEach((card) => {
      card.addEventListener('mouseenter', onMouseEnterCard)
      card.addEventListener('mouseleave', onMouseLeaveCard)
    })

    const observer = new MutationObserver(() => {
      const newCards = document.querySelectorAll('.project-card')
      newCards.forEach((card) => {
        card.removeEventListener('mouseenter', onMouseEnterCard)
        card.removeEventListener('mouseleave', onMouseLeaveCard)
        card.addEventListener('mouseenter', onMouseEnterCard)
        card.addEventListener('mouseleave', onMouseLeaveCard)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
      observer.disconnect()
      const allCards = document.querySelectorAll('.project-card')
      allCards.forEach((card) => {
        card.removeEventListener('mouseenter', onMouseEnterCard)
        card.removeEventListener('mouseleave', onMouseLeaveCard)
      })
    }
  }, [])

  return (
    <>
      {/* Small gold dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-3 w-3 rounded-full bg-gold"
        style={{ willChange: 'transform' }}
      />
      {/* Lagging ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] flex items-center justify-center rounded-full border border-gold transition-[width,height,opacity] duration-300"
        style={{
          width: '40px',
          height: '40px',
          opacity: 0.4,
          willChange: 'transform',
        }}
      >
        <span
          ref={labelRef}
          className="font-inter text-[10px] font-medium uppercase tracking-widest text-gold transition-opacity duration-200"
          style={{ opacity: 0 }}
        >
          View
        </span>
      </div>
    </>
  )
}

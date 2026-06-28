'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionEyebrow from '@/components/ui/SectionEyebrow'

const words = ['Crafting', 'Spaces', 'That', 'Last', 'A', 'Lifetime']

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center bg-black pt-20">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-12 px-8 py-12">
        {/* Left 55% */}
        <div className="flex w-full flex-col gap-6 md:w-[55%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionEyebrow text="Interior Design Studio — Dhaka" />
          </motion.div>

          <h1 className="font-playfair text-[clamp(48px,7vw,80px)] italic leading-[1.05] text-warm-white">
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0, y: 30, clipPath: 'inset(100% 0 0 0)' }}
                animate={{ opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)' }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="max-w-md font-inter text-sm leading-relaxed text-stone"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            We design homes, offices, and hospitality spaces for those who refuse to compromise on
            beauty.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <Link
              href="/projects"
              className="inline-block border border-gold px-8 py-3 font-inter text-xs uppercase tracking-[0.12em] text-gold transition-colors hover:bg-gold hover:text-black"
            >
              View Our Work
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-gold px-8 py-3 font-inter text-xs font-medium uppercase tracking-[0.12em] text-black transition-colors hover:bg-gold-light"
            >
              Start a Project
            </Link>
          </motion.div>

          <motion.p
            className="font-inter text-xs text-stone"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            Est. 2016 · Gulshan, Dhaka
          </motion.p>
        </div>

        {/* Right 45% — image with decorative offset border */}
        <motion.div
          className="relative hidden md:block md:w-[45%]"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Offset border */}
          <div
            className="pointer-events-none absolute border border-gold"
            style={{ inset: 0, transform: 'translate(12px, 12px)', zIndex: 0 }}
          />
          <div className="relative z-10 aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800"
              alt="Atelier Noir featured interior"
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-8 flex flex-col items-center gap-3">
        <div className="h-12 w-px overflow-hidden bg-divider">
          <motion.div
            className="h-full w-full bg-gold"
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          />
        </div>
        <p
          className="font-inter text-[10px] uppercase tracking-[0.3em] text-stone"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Scroll
        </p>
      </div>
    </section>
  )
}

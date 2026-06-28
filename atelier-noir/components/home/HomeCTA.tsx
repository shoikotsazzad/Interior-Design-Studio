'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HomeCTA() {
  return (
    <section
      className="px-8 py-20"
      style={{ background: 'linear-gradient(135deg, #B8A06A 0%, #8B6F3A 100%)' }}
    >
      <div className="mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          <h2 className="font-playfair text-[clamp(36px,4vw,52px)] italic text-black">
            Your Dream Space
            <br />
            Starts Here
          </h2>
          <p className="max-w-md font-inter text-sm text-black/70">
            Let&apos;s talk about your project. No commitment, just conversation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-black px-10 py-4 font-inter text-xs font-medium uppercase tracking-[0.12em] text-warm-white transition-opacity hover:opacity-80"
          >
            Schedule a Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import SectionEyebrow from '@/components/ui/SectionEyebrow'

const steps = [
  { num: '01', title: 'Discovery', desc: 'We listen before we design.' },
  { num: '02', title: 'Concept', desc: 'Ideas take shape through mood and material.' },
  { num: '03', title: 'Execution', desc: 'We manage every detail on site.' },
  { num: '04', title: 'Handover', desc: 'Delivered perfectly, every time.' },
]

export default function HomeProcess() {
  return (
    <section className="bg-charcoal px-8 py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-10 flex flex-col justify-between gap-4 border-b border-divider pb-8 md:flex-row md:items-end"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <SectionEyebrow text="How We Work" />
            <h2 className="mt-3 font-playfair text-[clamp(32px,4vw,50px)] text-warm-white">
              From Brief
              <br />
              to Beautiful
            </h2>
          </div>
          <Link
            href="/process"
            className="self-start font-inter text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-light md:self-end"
          >
            Full Process →
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 gap-0 md:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className={`flex flex-col gap-4 py-10 ${i > 0 ? 'md:border-l md:border-divider md:pl-8' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <p
                className="font-playfair text-6xl font-bold leading-none"
                style={{ color: 'rgba(184,160,106,0.18)' }}
              >
                {step.num}
              </p>
              <div>
                <h3 className="font-playfair text-lg text-warm-white">{step.title}</h3>
                <p className="mt-1 font-inter text-[13px] leading-relaxed text-stone">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

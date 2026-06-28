'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import SectionEyebrow from '@/components/ui/SectionEyebrow'

const services = [
  {
    num: '01',
    title: 'Residential Design',
    desc: 'Homes designed around the people who live in them — from apartments to penthouses.',
  },
  {
    num: '02',
    title: 'Commercial & Office',
    desc: 'Workspaces that reflect your brand, attract talent, and drive performance.',
  },
  {
    num: '03',
    title: 'Hospitality & Hotels',
    desc: 'Atmospheres that create emotion, earn loyalty, and keep guests coming back.',
  },
]

export default function HomeServices() {
  return (
    <section className="bg-black px-8 py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <SectionEyebrow text="What We Do" />
            <h2 className="mt-3 font-playfair text-[clamp(32px,4vw,50px)] text-warm-white">
              Every Space,
              <br />
              Designed Differently
            </h2>
          </div>
          <Link
            href="/services"
            className="self-start font-inter text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-light md:self-end"
          >
            All Services →
          </Link>
        </motion.div>

        <div className="flex flex-col">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="group flex flex-col justify-between gap-4 border-t border-divider py-8 md:flex-row md:items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span
                className="font-playfair text-5xl font-bold leading-none"
                style={{ color: 'rgba(184,160,106,0.2)' }}
              >
                {s.num}
              </span>
              <h3 className="font-playfair text-2xl text-warm-white md:w-[32%]">{s.title}</h3>
              <p className="font-inter text-[13px] leading-relaxed text-stone md:w-[40%]">
                {s.desc}
              </p>
              <Link
                href="/services"
                className="font-inter text-[11px] uppercase tracking-[0.2em] text-gold opacity-0 transition-opacity group-hover:opacity-100"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
          <div className="border-t border-divider" />
        </div>
      </div>
    </section>
  )
}

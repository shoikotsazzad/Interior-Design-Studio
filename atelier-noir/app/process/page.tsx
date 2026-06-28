'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import SectionEyebrow from '@/components/ui/SectionEyebrow'

const steps = [
  {
    num: '01',
    title: 'Discovery & Brief',
    duration: '2–3 days',
    desc: 'Initial consultation to understand your vision, lifestyle, budget, and timeline. Site visit included. We ask the questions no one else thinks to ask.',
  },
  {
    num: '02',
    title: 'Concept Development',
    duration: '1–2 weeks',
    desc: 'Mood boards, space planning, material palette proposals. We present 2 concept directions for you to choose from — each grounded in your brief.',
  },
  {
    num: '03',
    title: 'Design Development',
    duration: '2–3 weeks',
    desc: 'Detailed floor plans, 3D renders, material specifications, furniture selection, and lighting design. Every surface, every layer, resolved on paper before anything is built.',
  },
  {
    num: '04',
    title: 'Client Approval',
    duration: 'Ongoing',
    desc: 'Review and refine. We iterate until you love every detail before anything is procured or built. Your sign-off is the only brief that matters.',
  },
  {
    num: '05',
    title: 'Execution & Procurement',
    duration: '4–12 weeks',
    desc: 'We manage contractors, suppliers, and timelines. Weekly updates keep you in the loop. Nothing is left to chance.',
  },
  {
    num: '06',
    title: 'Handover & Styling',
    duration: '1–2 days',
    desc: "Final styling, photography, and walkthrough. We don't leave until it's perfect. Your new space, handed over with care.",
  },
]

export default function ProcessPage() {
  return (
    <div className="bg-black">
      {/* Header */}
      <div className="px-8 pb-14 pt-36">
        <div className="mx-auto max-w-7xl border-b border-divider pb-12">
          <SectionEyebrow text="Our Process" />
          <h1 className="mt-3 font-playfair text-[clamp(40px,5.5vw,68px)] italic text-warm-white">
            How We Bring
            <br />
            Your Vision to Life
          </h1>
        </div>
      </div>

      {/* Timeline */}
      <div className="px-8 pb-28">
        <div className="mx-auto max-w-4xl">
          {/* Vertical gold line */}
          <div className="relative">
            <div className="absolute left-6 top-0 h-full w-px bg-gold/20 md:left-1/2" />

            <div className="flex flex-col gap-16">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  className={`relative flex flex-col md:flex-row ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Content */}
                  <div
                    className={`w-full pl-16 md:w-1/2 md:pl-0 ${i % 2 !== 0 ? 'md:pr-14 md:text-right' : 'md:pl-14'}`}
                  >
                    <div className="mb-2 flex items-center gap-3 md:justify-start">
                      {i % 2 !== 0 && (
                        <span className="hidden md:inline font-inter text-xs border border-gold/40 px-2 py-0.5 text-stone">
                          {step.duration}
                        </span>
                      )}
                      <p
                        className="font-playfair text-6xl font-bold leading-none"
                        style={{ color: 'rgba(184,160,106,0.2)' }}
                      >
                        {step.num}
                      </p>
                      {i % 2 === 0 && (
                        <span className="hidden md:inline font-inter text-xs border border-gold/40 px-2 py-0.5 text-stone">
                          {step.duration}
                        </span>
                      )}
                    </div>
                    <span className="mb-2 inline-block font-inter text-xs border border-gold/40 px-2 py-0.5 text-stone md:hidden">
                      {step.duration}
                    </span>
                    <h2 className="font-playfair text-2xl text-warm-white">{step.title}</h2>
                    <p className="mt-2 font-inter text-sm leading-relaxed text-stone">{step.desc}</p>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-[18px] top-6 h-3 w-3 rounded-full bg-gold md:left-1/2 md:-translate-x-1/2 md:top-8" />

                  {/* Empty half */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-divider px-8 py-20 text-center">
        <h2 className="font-playfair text-3xl italic text-warm-white">Ready to Start?</h2>
        <p className="mt-3 font-inter text-sm text-stone">
          Let&apos;s talk about your project — no commitment required.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block bg-gold px-10 py-4 font-inter text-xs font-medium uppercase tracking-[0.12em] text-black transition-colors hover:bg-gold-light"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  )
}

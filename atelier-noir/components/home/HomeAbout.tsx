'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionEyebrow from '@/components/ui/SectionEyebrow'

export default function HomeAbout() {
  return (
    <section className="bg-charcoal overflow-hidden">
      <div className="mx-auto flex max-w-7xl flex-col md:flex-row">
        {/* Image — fills the full column height, landscape */}
        <motion.div
          className="relative w-full overflow-hidden md:w-[52%]"
          style={{ minHeight: '460px' }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"
            alt="Atelier Noir studio interior"
            fill
            className="object-cover"
            unoptimized
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="flex w-full flex-col justify-center gap-6 px-8 py-16 md:w-[48%] md:px-14 md:py-20"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <SectionEyebrow text="The Studio" />
          <h2 className="font-playfair text-[clamp(30px,3vw,46px)] italic leading-[1.1] text-warm-white">
            Designed by Detail,
            <br />
            Driven by Vision
          </h2>
          <p className="font-inter text-[14px] leading-[1.85] text-stone">
            Founded in 2016 by Shaira Hossain, Atelier Noir was built on the belief that great
            design is never accidental — it is the result of careful listening, deep research, and
            obsessive craft.
          </p>
          <p className="font-inter text-[14px] leading-[1.85] text-stone">
            We work with a select number of clients each year, ensuring that every project receives
            the full weight of our attention.
          </p>
          <Link
            href="/about"
            className="group mt-2 flex w-fit items-center gap-3 font-inter text-[11px] uppercase tracking-[0.25em] text-gold transition-colors hover:text-gold-light"
          >
            <span className="h-px w-8 bg-gold transition-all duration-300 group-hover:w-14 group-hover:bg-gold-light" />
            Our Story
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

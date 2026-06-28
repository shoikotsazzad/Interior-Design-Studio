'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import SectionEyebrow from '@/components/ui/SectionEyebrow'

const featured = projects.filter((p) => p.featured).slice(0, 3)

function ProjectCard({
  project,
  index,
  large = false,
}: {
  project: (typeof projects)[0]
  index: number
  large?: boolean
}) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      {/* Image */}
      <div
        className="project-card relative overflow-hidden bg-charcoal"
        style={{ aspectRatio: large ? '16/10' : '4/3' }}
      >
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          unoptimized
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 flex translate-y-full flex-col justify-end bg-black/70 p-6 transition-transform duration-500 group-hover:translate-y-0">
          <p className="font-inter text-[10px] uppercase tracking-[0.25em] text-gold">
            {project.category}
          </p>
          <h3 className="mt-1 font-playfair text-xl text-warm-white">{project.title}</h3>
          <p className="mt-2 font-inter text-xs text-gold">View Project →</p>
        </div>
      </div>
      {/* Card footer */}
      <div className="mt-3 flex items-center justify-between">
        <div>
          <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-stone">
            {project.category} · {project.year}
          </p>
          <h3 className="mt-0.5 font-playfair text-base text-warm-white">{project.title}</h3>
        </div>
        <span
          className="font-playfair text-3xl font-bold leading-none"
          style={{ color: 'rgba(184,160,106,0.2)' }}
        >
          0{index + 1}
        </span>
      </div>
    </Link>
  )
}

export default function HomeFeaturedProjects() {
  return (
    <section className="bg-black px-8 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="mb-10 flex flex-col justify-between gap-4 border-b border-divider pb-8 md:flex-row md:items-end"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <SectionEyebrow text="Selected Work" />
            <h2 className="mt-3 font-playfair text-[clamp(32px,4vw,50px)] text-warm-white">
              Projects We&apos;re
              <br />
              Proud Of
            </h2>
          </div>
          <Link
            href="/projects"
            className="self-end font-inter text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-light md:self-auto"
          >
            View All →
          </Link>
        </motion.div>

        {/* Grid: large top + 2 side by side below */}
        <div className="flex flex-col gap-4">
          {featured[0] && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
            >
              <ProjectCard project={featured[0]} index={0} large />
            </motion.div>
          )}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {featured.slice(1, 3).map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <ProjectCard project={project} index={i + 1} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

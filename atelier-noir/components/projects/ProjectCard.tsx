'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Project } from '@/data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="block">
      <div className="project-card group relative mb-4 overflow-hidden bg-charcoal">
        <div className="relative w-full" style={{ paddingBottom: '75%' }}>
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            unoptimized
          />
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 flex translate-y-full flex-col justify-end bg-black/75 p-5 transition-transform duration-500 group-hover:translate-y-0">
          <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-gold">
            {project.category}
          </p>
          <h3 className="mt-1 font-playfair text-lg text-warm-white">{project.title}</h3>
          <p className="mt-1 font-inter text-xs text-gold">View Project →</p>
        </div>
      </div>
    </Link>
  )
}

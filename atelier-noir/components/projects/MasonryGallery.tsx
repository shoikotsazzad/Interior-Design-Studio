'use client'

import { useState } from 'react'
import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard'

const filters = ['All', 'Residential', 'Commercial', 'Hospitality', 'Renovation']

export default function MasonryGallery() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <div>
      {/* Filter tabs */}
      <div className="mb-10 flex flex-wrap gap-3">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`font-inter text-xs uppercase tracking-[0.15em] px-4 py-2 border transition-colors ${
              active === f
                ? 'border-gold bg-gold text-black'
                : 'border-divider text-stone hover:border-gold hover:text-warm-white'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* CSS masonry */}
      <div
        style={{
          columns: '3',
          columnGap: '16px',
        }}
        className="[column-count:1] sm:[column-count:2] lg:[column-count:3]"
      >
        {filtered.map((project) => (
          <div key={project.slug} style={{ breakInside: 'avoid' }}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  )
}

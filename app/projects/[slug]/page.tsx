import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  return { title: project ? `${project.title} — Atelier Noir` : 'Project — Atelier Noir' }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  const currentIndex = projects.indexOf(project)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  const galleryImages =
    project.images.length > 0
      ? project.images
      : [project.coverImage, project.coverImage, project.coverImage, project.coverImage]

  return (
    <div className="bg-black">
      {/* Hero — full-width image 70vh */}
      <div className="relative" style={{ height: '70vh' }}>
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-10 left-8 md:left-16">
          <p className="font-inter text-[11px] uppercase tracking-[0.3em] text-gold">
            {project.category}
          </p>
          <h1 className="mt-2 font-playfair text-[clamp(32px,5vw,64px)] italic text-warm-white">
            {project.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-8 py-20">
        <div className="flex flex-col gap-12 md:flex-row">
          {/* Left — gallery 65% */}
          <div className="md:w-[65%]">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={galleryImages[0]}
                alt={project.title}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            {galleryImages.length > 1 && (
              <div className="mt-4 grid grid-cols-2 gap-4">
                {galleryImages.slice(1, 5).map((img, i) => (
                  <div key={i} className="relative aspect-video overflow-hidden">
                    <Image
                      src={img}
                      alt={`${project.title} view ${i + 2}`}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right — info card 35% */}
          <div className="md:w-[35%]">
            <div className="border border-gold/30 bg-charcoal p-8">
              <h2 className="mb-6 font-inter text-[11px] uppercase tracking-[0.3em] text-gold">
                Project Details
              </h2>
              {[
                { label: 'Client', value: project.client },
                { label: 'Location', value: project.location },
                { label: 'Year', value: String(project.year) },
                { label: 'Category', value: project.category },
                { label: 'Area', value: project.area },
              ].map((item) => (
                <div key={item.label} className="mb-4 border-b border-divider pb-4">
                  <p className="font-inter text-xs uppercase tracking-wider text-stone">
                    {item.label}
                  </p>
                  <p className="mt-1 font-inter text-sm text-warm-white">{item.value}</p>
                </div>
              ))}
              <div className="mb-4">
                <p className="font-inter text-xs uppercase tracking-wider text-stone">Scope</p>
                <ul className="mt-2 flex flex-col gap-1">
                  {project.scope.map((s) => (
                    <li key={s} className="font-inter text-sm text-warm-white">
                      — {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-16 border-t border-divider pt-16">
          <h2 className="mb-6 font-playfair text-3xl text-warm-white">
            The Challenge &amp; Approach
          </h2>
          <p className="max-w-2xl font-inter text-sm leading-relaxed text-stone">
            {project.description}
          </p>
          <p className="mt-4 max-w-2xl font-inter text-sm leading-relaxed text-stone">
            Every decision was made with the client&apos;s lifestyle in mind — from the placement
            of natural light to the selection of materials that would age gracefully over time.
            The result is a space that feels both timeless and deeply personal.
          </p>
        </div>

        {/* Next project */}
        <div className="mt-16 border-t border-divider pt-10">
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex items-center justify-between"
          >
            <div>
              <p className="font-inter text-[11px] uppercase tracking-[0.3em] text-stone">
                Next Project
              </p>
              <h3 className="mt-1 font-playfair text-2xl text-warm-white group-hover:text-gold-light transition-colors">
                {nextProject.title}
              </h3>
            </div>
            <span className="font-inter text-2xl text-gold transition-transform group-hover:translate-x-2">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

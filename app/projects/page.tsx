import MasonryGallery from '@/components/projects/MasonryGallery'
import SectionEyebrow from '@/components/ui/SectionEyebrow'

export const metadata = {
  title: 'Our Work — Atelier Noir',
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black pt-28 pb-28 px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <SectionEyebrow text="Portfolio" />
          <h1 className="mt-3 font-playfair text-[clamp(48px,6vw,80px)] italic text-warm-white">
            Our Work
          </h1>
        </div>
        <MasonryGallery />
      </div>
    </div>
  )
}

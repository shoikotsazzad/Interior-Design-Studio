import Image from 'next/image'
import SectionEyebrow from '@/components/ui/SectionEyebrow'

export const metadata = { title: 'About — Atelier Noir' }

const team = [
  {
    name: 'Shaira Hossain',
    role: 'Founder & Lead Designer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
  },
  {
    name: 'Rifat Karim',
    role: 'Senior Interior Architect',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
  },
  {
    name: 'Nadia Islam',
    role: '3D Visualisation Lead',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b977?w=400',
  },
  {
    name: 'Tanvir Ahmed',
    role: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
  },
]

const values = [
  {
    num: '01',
    title: 'Honest Design',
    desc: "We don't follow trends. We follow your life.",
  },
  {
    num: '02',
    title: 'Craft Over Speed',
    desc: 'Every detail is deliberate. Every finish, intentional.',
  },
  {
    num: '03',
    title: 'Your Vision',
    desc: 'You live here. We just make it extraordinary.',
  },
]

const awards = [
  'Best Interior Studio — Dhaka Design Awards 2023',
  'Featured in Architecture + Design BD 2022',
  'Top 10 Studios — Lifestyle Bangladesh 2021',
  'Excellence in Commercial Design — BNELFA 2023',
]

export default function AboutPage() {
  return (
    <div className="bg-black">
      {/* Studio intro — split screen */}
      <div className="overflow-hidden">
        <div className="mx-auto flex max-w-7xl flex-col md:flex-row">
          {/* Image fills full height */}
          <div className="relative w-full overflow-hidden md:w-[44%]" style={{ minHeight: '560px' }}>
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700"
              alt="Shaira Hossain, Founder"
              fill
              className="object-cover object-top"
              unoptimized
            />
          </div>

          {/* Text column */}
          <div className="flex w-full flex-col justify-center gap-6 px-8 py-16 md:w-[56%] md:px-14 md:pt-36 md:pb-20">
            <SectionEyebrow text="The Studio" />
            <h1 className="font-playfair text-[clamp(36px,4.5vw,60px)] italic leading-[1.1] text-warm-white">
              We Design With
              <br />
              Purpose
            </h1>
            <p className="font-inter text-[14px] leading-[1.85] text-stone">
              Atelier Noir was founded in 2016 by Shaira Hossain — a Dhaka-born designer who
              studied in Milan and returned home with a singular conviction: that Bangladeshi
              interiors deserved the same level of craft and intention as anywhere in the world.
            </p>
            <p className="font-inter text-[14px] leading-[1.85] text-stone">
              Our philosophy is simple: a great space should feel effortless to live in, even
              when it was anything but effortless to create. We obsess over the details so that
              you never have to think about them.
            </p>
            <p className="font-inter text-[14px] leading-[1.85] text-stone">
              What sets us apart is our refusal to apply a signature style to every project.
              Each home, office, or restaurant we design emerges from the people it is built for
              — their stories, their routines, their aspirations.
            </p>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="bg-charcoal px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 border-b border-divider pb-8">
            <SectionEyebrow text="The People" />
            <h2 className="mt-3 font-playfair text-[clamp(30px,4vw,48px)] text-warm-white">
              Our Team
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="group">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-gold/0 transition-colors duration-300 group-hover:bg-gold/25">
                    <span className="font-inter text-2xl text-transparent transition-colors group-hover:text-black">in</span>
                  </div>
                </div>
                <div className="mt-4 border-t border-divider pt-3">
                  <h3 className="font-playfair text-base text-warm-white">{member.name}</h3>
                  <p className="mt-0.5 font-inter text-[11px] uppercase tracking-[0.15em] text-stone">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-black px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 border-b border-divider pb-8">
            <SectionEyebrow text="What We Stand For" />
            <h2 className="mt-3 font-playfair text-[clamp(30px,4vw,48px)] text-warm-white">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {values.map((v, i) => (
              <div
                key={v.num}
                className={`flex flex-col gap-4 py-10 ${i > 0 ? 'md:border-l md:border-divider md:pl-10' : ''}`}
              >
                <p
                  className="font-playfair text-6xl font-bold leading-none"
                  style={{ color: 'rgba(184,160,106,0.18)' }}
                >
                  {v.num}
                </p>
                <div>
                  <h3 className="font-playfair text-xl text-warm-white">{v.title}</h3>
                  <p className="mt-2 font-inter text-[13px] leading-relaxed text-stone">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Awards strip */}
      <div className="border-t border-divider bg-charcoal px-8 py-14">
        <div className="mx-auto max-w-7xl">
          <SectionEyebrow text="Recognition" />
          <div className="mt-8 flex flex-col gap-4 md:flex-row md:gap-0">
            {awards.map((award, i) => (
              <p
                key={award}
                className={`shrink-0 font-inter text-[13px] text-stone md:pr-10 ${i > 0 ? 'md:border-l md:border-divider md:pl-10' : ''}`}
              >
                {award}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

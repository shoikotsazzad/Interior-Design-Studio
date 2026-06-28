'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import SectionEyebrow from '@/components/ui/SectionEyebrow'

export default function ServicesPage() {
  const services = [
    {
      title: 'Residential Interior Design',
      desc: 'Full home design — space planning, material selection, furniture sourcing, lighting, décor, and project management for apartments, villas, and bungalows.',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800',
    },
    {
      title: 'Commercial & Office Design',
      desc: 'Creating productive, branded workspaces. We work with startups, corporates, clinics, and retail chains to design spaces that perform.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
    },
    {
      title: 'Hospitality & Restaurant Design',
      desc: 'Hotels, restaurants, cafes, and lounges. Concept-driven design that creates atmosphere and drives business.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800',
    },
    {
      title: 'Renovation & Makeover',
      desc: 'Transform existing spaces without full construction. Furniture, lighting, and décor refresh — fast turnaround.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800',
    },
  ]

  const tiers = [
    {
      name: 'Studio Package',
      tag: 'Essential',
      price: 'From ৳1,50,000',
      for: 'Single room, apartments up to 1000 sqft',
      features: [
        'Space planning',
        'Material & colour palette',
        'Furniture selection',
        'Lighting plan',
        '2 design revisions',
        'Site visit included',
      ],
      featured: false,
    },
    {
      name: 'Full Home',
      tag: 'Most Popular',
      price: 'From ৳4,00,000',
      for: 'Complete home design, up to 3000 sqft',
      features: [
        'Everything in Studio',
        '3D renders & visualisation',
        'Procurement management',
        'Contractor coordination',
        'Weekly site updates',
        'Styling & handover',
      ],
      featured: true,
    },
    {
      name: 'Signature',
      tag: 'Premium',
      price: 'Custom Quote',
      for: 'Large residences, commercial, hospitality',
      features: [
        'Everything in Full Home',
        'Bespoke joinery design',
        'Art & accessories curation',
        'Smart home integration',
        'Full FF&E procurement',
        'Dedicated project manager',
      ],
      featured: false,
    },
  ]

  const faqs = [
    {
      q: 'How long does a project take?',
      a: 'A single room takes 4–6 weeks. A full home typically runs 3–6 months from concept to handover, depending on construction scope.',
    },
    {
      q: 'Do you work outside Dhaka?',
      a: 'Yes. We have completed projects in Cox\'s Bazar, Chittagong, and Sylhet. Travel fees apply for projects outside Dhaka.',
    },
    {
      q: 'Can I see your portfolio before deciding?',
      a: 'Absolutely. Browse our full project portfolio here, or schedule a studio visit to see material samples and process boards in person.',
    },
    {
      q: 'Do you handle procurement and sourcing?',
      a: 'Yes. We manage all furniture, lighting, and accessory procurement — locally and internationally — through our supplier network.',
    },
    {
      q: 'What is your payment structure?',
      a: '30% on signing, 40% at design approval, 30% on project completion. Procurement costs are handled separately on a pass-through basis.',
    },
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="bg-black">
      {/* Page hero */}
      <div className="px-8 pb-14 pt-36">
        <div className="mx-auto max-w-7xl border-b border-divider pb-12">
          <SectionEyebrow text="Services" />
          <h1 className="mt-3 font-playfair text-[clamp(40px,5.5vw,68px)] italic text-warm-white">
            Services Built
            <br />
            Around You
          </h1>
          <p className="mt-4 max-w-lg font-inter text-[14px] leading-relaxed text-stone">
            From concept to completion, we handle every detail.
          </p>
        </div>
      </div>

      {/* Service categories */}
      <div className="px-8 pb-20">
        <div className="mx-auto max-w-7xl flex flex-col gap-20">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className={`flex flex-col items-center gap-12 md:flex-row ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden md:w-1/2">
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-4">
                <div className="h-px w-10 bg-gold" />
                <h2 className="font-playfair text-3xl text-warm-white">{svc.title}</h2>
                <p className="font-inter text-sm leading-relaxed text-stone">{svc.desc}</p>
                <Link
                  href="/contact"
                  className="mt-2 font-inter text-xs uppercase tracking-[0.15em] text-gold hover:underline"
                >
                  Enquire →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="bg-charcoal px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 border-b border-divider pb-8">
            <SectionEyebrow text="Investment" />
            <h2 className="mt-3 font-playfair text-[clamp(30px,4vw,48px)] text-warm-white">
              Transparent Pricing,
              <br />
              No Surprises
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`flex flex-col gap-6 p-8 ${tier.featured ? 'border border-gold' : 'border border-divider'}`}
              >
                {tier.featured && (
                  <span className="w-fit bg-gold px-3 py-1 font-inter text-[10px] uppercase tracking-widest text-black">
                    {tier.tag}
                  </span>
                )}
                {!tier.featured && (
                  <span className="font-inter text-[11px] uppercase tracking-[0.2em] text-stone">
                    {tier.tag}
                  </span>
                )}
                <div>
                  <h3 className="font-playfair text-2xl text-warm-white">{tier.name}</h3>
                  <p className="mt-1 font-inter text-xs text-stone">{tier.for}</p>
                </div>
                <p className="font-playfair text-3xl text-gold">{tier.price}</p>
                <ul className="flex flex-col gap-2">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 font-inter text-sm text-stone">
                      <span className="mt-0.5 text-gold">—</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-auto block text-center py-3 font-inter text-xs uppercase tracking-[0.12em] transition-colors ${
                    tier.featured
                      ? 'bg-gold text-black hover:bg-gold-light'
                      : 'border border-gold text-gold hover:bg-gold hover:text-black'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center font-inter text-xs text-stone">
            All prices are starting estimates. Final quote after consultation.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-black px-8 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <SectionEyebrow text="FAQ" />
            <h2 className="mt-3 font-playfair text-[clamp(28px,3.5vw,44px)] text-warm-white">
              Common Questions
            </h2>
          </div>

          <div className="flex flex-col gap-0">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-divider">
                <button
                  className="flex w-full items-center justify-between py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-inter text-sm text-warm-white">{faq.q}</span>
                  <span className="ml-4 font-inter text-lg text-gold transition-transform" style={{ transform: openFaq === i ? 'rotate(45deg)' : 'none' }}>
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <p className="pb-5 font-inter text-sm leading-relaxed text-stone">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

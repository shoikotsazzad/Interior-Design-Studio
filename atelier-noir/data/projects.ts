export interface Project {
  slug: string
  title: string
  category: string
  location: string
  year: number
  area: string
  scope: string[]
  featured: boolean
  coverImage: string
  images: string[]
  description: string
  client: string
}

export const projects: Project[] = [
  {
    slug: 'the-zen-residence',
    title: 'The Zen Residence',
    category: 'Residential',
    location: 'Gulshan-2, Dhaka',
    year: 2024,
    area: '3,200 sqft',
    scope: ['Full Interior', 'Furniture Sourcing', 'Lighting Design'],
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800',
    images: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800',
      'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=800',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800',
    ],
    description:
      'A serene 3,200 sqft residence in Gulshan designed around the concept of quiet luxury. Every material was chosen for its tactility — brushed stone, natural linen, and hand-finished plaster walls that change colour with the light. The result is a home that feels like a breath of fresh air in the heart of the city.',
    client: 'Private Client',
  },
  {
    slug: 'axis-corporate-hq',
    title: 'Axis Corporate HQ',
    category: 'Commercial',
    location: 'Banani, Dhaka',
    year: 2023,
    area: '6,500 sqft',
    scope: ['Office Design', 'Branding Integration', 'Furniture & Lighting'],
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200586c0818?w=800',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800',
    ],
    description:
      'A flagship HQ for a fintech company — designed to communicate innovation, trust, and forward momentum. Open collaboration zones sit alongside private focus rooms, all tied together by a consistent material palette of dark steel, white oak, and brand-forward graphics.',
    client: 'Axis Technologies Ltd.',
  },
  {
    slug: 'miro-restaurant',
    title: 'Miro Restaurant',
    category: 'Hospitality',
    location: 'Dhanmondi, Dhaka',
    year: 2023,
    area: '2,800 sqft',
    scope: ['Concept Design', 'Lighting', 'Custom Furniture'],
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800',
    images: [
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    ],
    description:
      'A Mediterranean-inspired fine dining restaurant — moody, warm, and theatrical. Arched openings frame intimate dining alcoves while hand-blown glass pendants cast amber light across rough-plastered walls. The space invites guests to slow down and stay.',
    client: 'Miro F&B Group',
  },
  {
    slug: 'baridhara-penthouse',
    title: 'Baridhara Penthouse',
    category: 'Residential',
    location: 'Baridhara, Dhaka',
    year: 2024,
    area: '4,800 sqft',
    scope: ['Full Interior', 'Smart Home Integration', 'Art Curation'],
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
    images: [],
    description:
      'A sky-high penthouse where every material was chosen for how it feels underfoot, how it catches light, and how it ages. Integrated smart home systems disappear behind seamless joinery. Curated art anchors each room with intention.',
    client: 'Private Client',
  },
  {
    slug: 'nova-clinic',
    title: 'Nova Wellness Clinic',
    category: 'Commercial',
    location: 'Uttara, Dhaka',
    year: 2022,
    area: '1,800 sqft',
    scope: ['Healthcare Interior', 'Wayfinding', 'Lighting'],
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800',
    images: [],
    description:
      'A calming, clinical-grade wellness space that makes patients feel at ease from the moment they walk in. Soft curves replace sharp corners, biophilic elements bring nature indoors, and a warm lighting system adapts to the time of day.',
    client: 'Nova Health Group',
  },
  {
    slug: 'the-loft-bashundhara',
    title: 'The Loft',
    category: 'Residential',
    location: 'Bashundhara, Dhaka',
    year: 2022,
    area: '2,100 sqft',
    scope: ['Renovation', 'Furniture', 'Styling'],
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
    images: [],
    description:
      'An industrial-loft conversion that balances rawness with refined details. Exposed concrete ceilings meet hand-knotted rugs and custom walnut shelving. The result is a home that feels both effortlessly cool and deeply liveable.',
    client: 'Private Client',
  },
  {
    slug: 'harbour-hotel-suite',
    title: 'Harbour Hotel Suite',
    category: 'Hospitality',
    location: "Cox's Bazar",
    year: 2023,
    area: '5,200 sqft (12 suites)',
    scope: ['Suite Design', 'Procurement', 'FF&E'],
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800',
    images: [],
    description:
      "Twelve ocean-view suites designed to frame the Bay of Bengal at every angle. Floor-to-ceiling glazing, rattan headboards, and a natural stone palette bring the outside in — giving each guest a room that feels like a personal sanctuary.",
    client: 'Harbour Resorts Ltd.',
  },
  {
    slug: 'gulshan-duplex',
    title: 'Gulshan Duplex',
    category: 'Residential',
    location: 'Gulshan-1, Dhaka',
    year: 2021,
    area: '3,900 sqft',
    scope: ['Full Interior', 'Custom Joinery', 'Lighting'],
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800',
    images: [],
    description:
      'A duplex that demanded two personalities — active family living below, quiet retreat above. Custom joinery maximises storage without sacrificing beauty. Warm oak tones flow throughout, unifying two very different floors into one cohesive home.',
    client: 'Private Client',
  },
  {
    slug: 'stitch-flagship-store',
    title: 'Stitch Flagship Store',
    category: 'Commercial',
    location: 'Banani, Dhaka',
    year: 2023,
    area: '1,200 sqft',
    scope: ['Retail Design', 'Display Systems', 'Lighting'],
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
    images: [],
    description:
      'A fashion-forward retail flagship where the space becomes part of the brand story. Bespoke display systems in blackened steel and smoked glass keep the focus on the product while creating a shopping environment that feels genuinely editorial.',
    client: 'Stitch BD',
  },
  {
    slug: 'mirpur-family-home',
    title: 'Mirpur Family Home',
    category: 'Renovation',
    location: 'Mirpur DOHS, Dhaka',
    year: 2024,
    area: '2,400 sqft',
    scope: ["Renovation", "Children's Rooms", 'Open Kitchen'],
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800',
    images: [],
    description:
      'A full renovation for a growing family — functional, joyful, and built to last. The open-plan kitchen and living area become the heart of the home, while each child\'s room has its own personality without breaking the overall design language.',
    client: 'Private Client',
  },
  {
    slug: 'caffeine-cafe-chain',
    title: 'Caffeine Café',
    category: 'Hospitality',
    location: 'Multiple — Dhaka',
    year: 2022,
    area: '800 sqft per unit',
    scope: ['Brand Identity Interior', 'Rollout Design'],
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800',
    images: [],
    description:
      'A consistent yet adaptable café interior system deployed across 4 locations. Each site shares a common material language — raw concrete, warm brass, and bentwood seating — while adapting to its unique footprint and neighbourhood character.',
    client: 'Caffeine F&B',
  },
  {
    slug: 'dhanmondi-studio-apartment',
    title: 'Dhanmondi Studio',
    category: 'Residential',
    location: 'Dhanmondi, Dhaka',
    year: 2024,
    area: '850 sqft',
    scope: ['Small Space Design', 'Custom Storage', 'Multifunctional Furniture'],
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
    images: [],
    description:
      'Proof that small can be extraordinary. Every centimetre of this studio was designed to breathe — a Murphy bed doubles as a feature wall, the kitchen island extends into a dining table, and floor-to-ceiling mirrors dissolve the boundaries of the space.',
    client: 'Private Client',
  },
]

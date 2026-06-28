import Link from 'next/link'

const quickLinks = [
  { href: '/projects', label: 'Projects' },
  { href: '/services', label: 'Services' },
  { href: '/process', label: 'Process' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer>
      <div className="bg-charcoal px-8 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-3">
          {/* Col 1 — Brand */}
          <div>
            <p className="font-inter text-sm font-light tracking-[0.25em] text-warm-white">
              ATELIER NOIR
            </p>
            <p className="mt-3 font-cormorant text-lg italic text-stone">
              "Spaces That Tell Your Story"
            </p>
            <p className="mt-4 font-inter text-xs text-stone">Est. 2016 · Gulshan, Dhaka</p>
          </div>

          {/* Col 2 — Nav */}
          <div>
            <p className="mb-4 font-inter text-[11px] uppercase tracking-[0.3em] text-gold">
              Navigate
            </p>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-stone transition-colors hover:text-warm-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <p className="mb-4 font-inter text-[11px] uppercase tracking-[0.3em] text-gold">
              Contact
            </p>
            <div className="flex flex-col gap-2">
              <p className="font-inter text-sm text-stone">
                Level 8, Navana Tower, Gulshan-2
                <br />
                Dhaka 1212, Bangladesh
              </p>
              <p className="font-inter text-sm text-stone">+880 1800-000000</p>
              <p className="font-inter text-sm text-stone">hello@ateliernoir.design</p>
              <p className="mt-1 font-inter text-xs text-stone">Sun–Thu 10am–7pm</p>
            </div>

            {/* Social icons */}
            <div className="mt-5 flex gap-4">
              {['Instagram', 'Facebook', 'Behance'].map((name) => (
                <span
                  key={name}
                  className="font-inter text-xs uppercase tracking-wider text-gold transition-colors hover:text-gold-light"
                  style={{ cursor: 'none' }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-divider bg-black px-8 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <p className="font-inter text-xs text-stone">
            © 2025 Atelier Noir. All rights reserved.
          </p>
          <p className="font-inter text-xs text-stone">Crafted in Dhaka.</p>
        </div>
      </div>
    </footer>
  )
}

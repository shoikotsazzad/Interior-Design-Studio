'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/services', label: 'Services' },
  { href: '/process', label: 'Process' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-divider bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          {/* Logo */}
          <Link
            href="/"
            className="font-inter text-sm font-light tracking-[0.25em] text-warm-white"
          >
            ATELIER NOIR
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-inter text-sm transition-colors duration-200 ${
                    pathname === link.href
                      ? 'border-b border-gold text-warm-white'
                      : 'text-stone hover:text-warm-white'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden border border-gold px-5 py-2 font-inter text-xs font-medium uppercase tracking-[0.12em] text-gold transition-colors duration-200 hover:bg-gold hover:text-black md:block"
            >
              Start a Project
            </Link>

            {/* Hamburger */}
            <button
              className="flex flex-col gap-[5px] md:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <span className="block h-px w-6 bg-gold" />
              <span className="block h-px w-6 bg-gold" />
              <span className="block h-px w-4 bg-gold" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black">
          <button
            className="absolute right-8 top-6 font-inter text-2xl text-warm-white"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`font-playfair text-4xl ${
                    pathname === link.href ? 'text-gold' : 'text-warm-white'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 block border border-gold px-8 py-3 font-inter text-sm uppercase tracking-[0.12em] text-gold"
              >
                Start a Project
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

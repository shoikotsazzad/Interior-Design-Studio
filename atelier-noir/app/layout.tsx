import type { Metadata } from 'next'
import { Playfair_Display, Inter, Cormorant } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CursorFollower from '@/components/ui/CursorFollower'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Atelier Noir — Interior Design Studio, Dhaka',
  description:
    'Luxury interior design studio in Dhaka. Residential, commercial, and hospitality spaces designed with intention.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${cormorant.variable}`}>
      <body>
        <CursorFollower />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

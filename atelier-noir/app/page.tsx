import Hero from '@/components/home/Hero'
import StatsStrip from '@/components/home/StatsStrip'
import HomeFeaturedProjects from '@/components/home/HomeFeaturedProjects'
import HomeServices from '@/components/home/HomeServices'
import HomeAbout from '@/components/home/HomeAbout'
import HomeProcess from '@/components/home/HomeProcess'
import HomeCTA from '@/components/home/HomeCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <HomeFeaturedProjects />
      <HomeServices />
      <HomeAbout />
      <HomeProcess />
      <HomeCTA />
    </>
  )
}

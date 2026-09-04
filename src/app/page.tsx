import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { Stats } from '@/components/Stats'
import { Highlights } from '@/components/Highlights'
import { Projects } from '@/components/Projects'
import { Career } from '@/components/Career'
import { Capabilities } from '@/components/Capabilities'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'

export default function Home() {
  return (
    <main className="bg-mesh min-h-screen">
      <Nav />
      <Hero />
      {/* <Stats /> */}
      <Highlights />
      {/* <Projects /> */}
      <Career />
      {/* <Capabilities /> */}
      <About />
      <Contact />
    </main>
  )
}

import { lazy, Suspense } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollProgress from './components/layout/ScrollProgress'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Timeline from './components/sections/Timeline'
import Awards from './components/sections/Awards'
import Blog from './components/sections/Blog'
import Contact from './components/sections/Contact'
import RopeDivider from './components/ui/RopeDivider'

const DesertScene = lazy(() => import('./components/three/DesertScene'))

function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-cowboy-dark flex items-center justify-center z-50">
      <div className="text-center">
        <div className="text-6xl animate-bounce mb-4">🌵</div>
        <p className="font-western text-cowboy-gold text-xl animate-pulse">
          Riding into town...
        </p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="relative">
      <ScrollProgress />
      <Navbar />

      <main>
        <section className="relative">
          <Suspense fallback={<LoadingSpinner />}>
            <DesertScene />
          </Suspense>
          <Hero />
        </section>

        <RopeDivider />
        <About />
        <RopeDivider />
        <Skills />
        <RopeDivider />
        <Projects />
        <RopeDivider />
        <Timeline />
        <RopeDivider />
        <Awards />
        <RopeDivider />
        <Blog />
        <RopeDivider />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

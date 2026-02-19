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

export default function App() {
  return (
    <div className="relative">
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Awards />
        <Blog />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

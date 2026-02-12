import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const phrases = [
  'Building scalable backend systems',
  'From idea to deployment',
  'Clean architecture, robust APIs',
]

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 60)
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 30)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setPhraseIndex((i) => (i + 1) % phrases.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, phraseIndex])

  const scrollToProjects = () => {
    const el = document.getElementById('projects')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-dark-900">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(56,189,248,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(56,189,248,0.04) 0%, transparent 50%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(226,232,240,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(226,232,240,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-6"
        >
          <span className="text-accent text-sm font-medium">Backend Engineer</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="font-heading text-5xl sm:text-7xl md:text-8xl font-bold text-light mb-6 tracking-tight"
        >
          Lim ChanHyuck
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="h-8 mb-12"
        >
          <span className="font-body text-lg sm:text-xl text-muted">
            {phrases[phraseIndex].substring(0, charIndex)}
            <span className="inline-block w-[2px] h-5 bg-accent ml-1 animate-pulse" />
          </span>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToProjects}
          className="font-body text-sm font-medium px-8 py-3 border border-accent/30 text-accent
            bg-accent/5 rounded-lg hover:bg-accent/10 hover:border-accent/50
            transition-all duration-300"
        >
          View Projects
        </motion.button>
      </div>
    </section>
  )
}

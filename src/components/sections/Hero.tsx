import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'

const phrases = [
  'Welcome to the Wild West of Code',
  'Building scalable backend systems',
  'From idea to deployment',
]

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

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

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const { clientX, clientY } = e
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      setMousePos({
        x: (clientX - cx) / cx,
        y: (clientY - cy) / cy,
      })
    },
    [],
  )

  const scrollToProjects = () => {
    const el = document.getElementById('projects')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  /* Stars: random positions generated once */
  const [stars] = useState(() =>
    Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 50,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 4,
      duration: Math.random() * 2 + 2,
    })),
  )

  const [dustParticles] = useState(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: 50 + Math.random() * 50,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 6,
      duration: Math.random() * 8 + 6,
    })),
  )

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background gradient layers with parallax */}
      <div
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          background:
            'linear-gradient(to bottom, #0D1B2A 0%, #1a1040 25%, #8B2500 60%, #D4731A 85%, #C9A227 100%)',
          transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px) scale(1.05)`,
        }}
      />

      {/* Stars */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -15}px)`,
        }}
      >
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: star.size,
              height: star.size,
              animation: `twinkle ${star.duration}s ${star.delay}s infinite ease-in-out`,
            }}
          />
        ))}
      </div>

      {/* Dust particles */}
      <div className="absolute inset-0 pointer-events-none">
        {dustParticles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-cowboy-dust/40"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
              animation: `floatDust ${p.duration}s ${p.delay}s infinite ease-in-out`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-western text-5xl sm:text-7xl md:text-8xl text-cowboy-cream mb-4"
          style={{
            textShadow:
              '0 0 20px rgba(212,115,26,0.6), 0 0 60px rgba(212,115,26,0.3), 0 4px 8px rgba(0,0,0,0.5)',
          }}
        >
          ChanHyeok Lim
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-2xl sm:text-3xl text-cowboy-gold mb-8 tracking-wider"
        >
          Backend Engineer
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="h-8 mb-12"
        >
          <span className="font-body text-lg sm:text-xl text-cowboy-cream/80">
            {phrases[phraseIndex].substring(0, charIndex)}
            <span className="inline-block w-[2px] h-5 bg-cowboy-orange ml-1 animate-pulse" />
          </span>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToProjects}
          className="font-western text-lg px-8 py-3 border-2 border-cowboy-gold text-cowboy-gold
            bg-cowboy-dark/50 rounded hover:bg-cowboy-gold hover:text-cowboy-dark
            transition-colors duration-300 backdrop-blur-sm"
        >
          Explore My Trail
        </motion.button>
      </div>

      {/* Inline keyframes */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        @keyframes floatDust {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          25% { transform: translate(30px, -20px); opacity: 0.6; }
          50% { transform: translate(-20px, -40px); opacity: 0.4; }
          75% { transform: translate(15px, -10px); opacity: 0.5; }
        }
      `}</style>
    </section>
  )
}

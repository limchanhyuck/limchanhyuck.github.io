import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaEnvelope, FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  const [isLassoing, setIsLassoing] = useState(false)

  const scrollToTop = () => {
    setIsLassoing(true)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setIsLassoing(false)
    }, 600)
  }

  return (
    <footer className="relative bg-cowboy-dark border-t border-cowboy-dust/20 overflow-hidden">
      {/* Sunset Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{
            background:
              'linear-gradient(to top, #1A0F0A 0%, #2C1B0E 30%, #8B2500 60%, #D4731A 80%, #C9A227 100%)',
            opacity: 0.15,
          }}
        />
      </div>

      {/* Cowboy Silhouette Scene */}
      <div className="relative w-full h-24 overflow-hidden">
        <svg
          viewBox="0 0 800 120"
          className="absolute bottom-0 w-full"
          preserveAspectRatio="xMidYMax meet"
        >
          {/* Sun */}
          <circle cx="400" cy="50" r="30" fill="#D4731A" opacity="0.6" />
          <circle cx="400" cy="50" r="22" fill="#C9A227" opacity="0.4" />

          {/* Ground line */}
          <rect x="0" y="100" width="800" height="20" fill="#2C1B0E" />

          {/* Cacti */}
          <g fill="#1A0F0A">
            {/* Left cactus */}
            <rect x="100" y="65" width="8" height="35" rx="3" />
            <rect x="96" y="72" width="6" height="18" rx="3" transform="rotate(-20 99 81)" />
            <rect x="106" y="68" width="6" height="15" rx="3" transform="rotate(25 109 75)" />

            {/* Right cactus */}
            <rect x="680" y="70" width="8" height="30" rx="3" />
            <rect x="676" y="75" width="6" height="15" rx="3" transform="rotate(-15 679 82)" />
            <rect x="686" y="72" width="6" height="18" rx="3" transform="rotate(20 689 81)" />
          </g>

          {/* Cowboy silhouette walking right toward sunset */}
          <g fill="#1A0F0A" transform="translate(350, 58)">
            {/* Hat */}
            <ellipse cx="12" cy="4" rx="14" ry="3" />
            <rect x="4" y="0" width="16" height="6" rx="2" />
            {/* Head */}
            <circle cx="12" cy="12" r="6" />
            {/* Body */}
            <rect x="8" y="18" width="8" height="16" rx="2" />
            {/* Left leg (walking stride) */}
            <rect x="6" y="33" width="4" height="14" rx="1" transform="rotate(-10 8 33)" />
            {/* Right leg */}
            <rect x="14" y="33" width="4" height="14" rx="1" transform="rotate(10 16 33)" />
            {/* Left arm */}
            <rect x="3" y="19" width="4" height="12" rx="1" transform="rotate(-15 5 19)" />
            {/* Right arm */}
            <rect x="17" y="19" width="4" height="12" rx="1" transform="rotate(10 19 19)" />
          </g>

          {/* Distant mountains */}
          <polygon points="0,100 80,55 160,100" fill="#2C1B0E" opacity="0.5" />
          <polygon points="120,100 220,45 320,100" fill="#2C1B0E" opacity="0.4" />
          <polygon points="500,100 620,50 740,100" fill="#2C1B0E" opacity="0.4" />
          <polygon points="650,100 750,60 800,100" fill="#2C1B0E" opacity="0.5" />
        </svg>
      </div>

      {/* Rope border */}
      <div className="rope-border" />

      {/* Footer Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com/limchanhyuck"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-cowboy-dust hover:text-cowboy-gold transition-colors"
            >
              <FaGithub className="text-xl" />
              <span className="text-sm hidden sm:inline">GitHub</span>
            </motion.a>
            <motion.a
              href="mailto:dlacksgur311@gmail.com"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-cowboy-dust hover:text-cowboy-gold transition-colors"
            >
              <FaEnvelope className="text-xl" />
              <span className="text-sm hidden sm:inline">Email</span>
            </motion.a>
          </div>

          {/* Copyright */}
          <p className="text-cowboy-dust/70 text-sm text-center">
            &copy; 2025 ChanHyeok Lim. Built with grit and code.
          </p>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative group flex items-center justify-center w-10 h-10 rounded-full border-2 border-cowboy-dust/40 hover:border-cowboy-gold text-cowboy-dust hover:text-cowboy-gold transition-colors"
            aria-label="Scroll to top"
          >
            {/* Lasso ring animation */}
            {isLassoing && (
              <motion.span
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: 2.5, opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="absolute inset-0 rounded-full border-2 border-cowboy-gold"
              />
            )}
            <motion.span
              animate={isLassoing ? { y: [0, -4, 0], rotate: [0, -10, 10, 0] } : {}}
              transition={{ duration: 0.4 }}
            >
              <FaArrowUp className="text-sm" />
            </motion.span>
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer

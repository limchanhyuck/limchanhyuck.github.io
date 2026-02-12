import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollProgress from './ScrollProgress'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Awards', href: '#awards' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navItems.map((item) => item.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const id = href.slice(1)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileOpen(false)
  }

  return (
    <>
      <ScrollProgress />
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-cowboy-dark/90 backdrop-blur-md shadow-lg shadow-black/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2 group"
            >
              <span className="text-2xl" role="img" aria-label="cowboy hat">
                🤠
              </span>
              <span className="font-western text-xl md:text-2xl text-cowboy-gold group-hover:text-cowboy-orange transition-colors">
                CL
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const sectionId = item.href.slice(1)
                const isActive = activeSection === sectionId
                return (
                  <a
                    key={sectionId}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-cowboy-gold'
                        : 'text-cowboy-cream/70 hover:text-cowboy-cream'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="navbar-underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-cowboy-gold rounded-full"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </a>
                )
              })}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={isMobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-cowboy-cream rounded-full origin-center"
              />
              <motion.span
                animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-0.5 bg-cowboy-cream rounded-full"
              />
              <motion.span
                animate={isMobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-cowboy-cream rounded-full origin-center"
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden bg-cowboy-dark/95 backdrop-blur-md border-t border-cowboy-dust/20"
            >
              <div className="px-4 py-4 space-y-1">
                {navItems.map((item, index) => {
                  const sectionId = item.href.slice(1)
                  const isActive = activeSection === sectionId
                  return (
                    <motion.a
                      key={sectionId}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-cowboy-gold bg-cowboy-brown/50'
                          : 'text-cowboy-cream/70 hover:text-cowboy-cream hover:bg-cowboy-brown/30'
                      }`}
                    >
                      {item.label}
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}

export default Navbar

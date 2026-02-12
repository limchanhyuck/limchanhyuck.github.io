import { FaGithub, FaEnvelope, FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark-800 border-t border-dark-600/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <a href="https://github.com/limchanhyuck" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted hover:text-accent transition-colors">
              <FaGithub className="text-lg" />
              <span className="text-sm hidden sm:inline">GitHub</span>
            </a>
            <a href="mailto:dlacksgur311@gmail.com" className="flex items-center gap-2 text-muted hover:text-accent transition-colors">
              <FaEnvelope className="text-lg" />
              <span className="text-sm hidden sm:inline">Email</span>
            </a>
          </div>

          <p className="text-muted/60 text-sm text-center">&copy; 2025 Lim ChanHyuck. All rights reserved.</p>

          <button onClick={scrollToTop}
            className="flex items-center justify-center w-9 h-9 rounded-lg border border-dark-600/30 text-muted hover:text-accent hover:border-accent/30 transition-all"
            aria-label="Scroll to top">
            <FaArrowUp className="text-sm" />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer

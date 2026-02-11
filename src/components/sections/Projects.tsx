import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { projects } from '../../data/projects'
import type { Project } from '../../types/project'

function ProjectCard({
  project,
  index,
  onSelect,
}: {
  project: Project
  index: number
  onSelect: (p: Project) => void
}) {
  const [cardRef, cardInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      setTilt({ x: y * -10, y: x * 10 })
    },
    [],
  )

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(project)}
      className="relative cursor-pointer group"
      style={{
        perspective: '800px',
      }}
    >
      {/* Pin */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-red-400 to-red-700 border border-red-900 shadow-md" />
        <div className="w-[2px] h-3 bg-gray-500 mx-auto -mt-[2px]" />
      </div>

      <div
        className="bg-cowboy-cream/95 border border-cowboy-dust/50 rounded p-6 pt-8
          shadow-lg transition-shadow duration-300 group-hover:shadow-2xl"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        <h3 className="font-heading text-xl text-cowboy-brown font-bold mb-2">
          {project.title}
        </h3>
        <p className="font-body text-sm text-cowboy-brown/70 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-body text-xs px-2 py-1 rounded bg-cowboy-brown/10 text-cowboy-brown/80 border border-cowboy-brown/20"
            >
              {t}
            </span>
          ))}
        </div>

        {/* GitHub link */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1 font-body text-sm text-cowboy-orange
            hover:text-cowboy-red transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          GitHub
        </a>
      </div>
    </motion.div>
  )
}

/* Detail modal */
function ProjectModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ type: 'spring', damping: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-cowboy-cream border-2 border-cowboy-red rounded-lg p-6 sm:p-8
          max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-2xl"
      >
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-western text-2xl text-cowboy-red">{project.title}</h3>
          <button
            onClick={onClose}
            className="text-cowboy-brown/50 hover:text-cowboy-red text-2xl leading-none"
          >
            &times;
          </button>
        </div>

        <p className="font-body text-cowboy-brown/80 mb-4 leading-relaxed">
          {project.longDescription}
        </p>

        <h4 className="font-heading text-lg text-cowboy-brown font-bold mb-2">
          Highlights
        </h4>
        <ul className="space-y-2 mb-6">
          {project.highlights.map((h, i) => (
            <li
              key={i}
              className="flex items-start gap-2 font-body text-sm text-cowboy-brown/80"
            >
              <span className="text-cowboy-orange mt-0.5 shrink-0">&#9670;</span>
              {h}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-body text-xs px-3 py-1 rounded-full bg-cowboy-orange/20 text-cowboy-orange border border-cowboy-orange/30"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-body text-sm px-4 py-2
            bg-cowboy-brown text-cowboy-cream rounded hover:bg-cowboy-red transition-colors"
        >
          View on GitHub
        </a>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [sectionRef, sectionInView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const [selected, setSelected] = useState<Project | null>(null)
  const [techFilter, setTechFilter] = useState<string>('All')

  /* Gather all unique tech tags */
  const allTech = Array.from(new Set(projects.flatMap((p) => p.tech)))

  const filtered =
    techFilter === 'All'
      ? projects
      : projects.filter((p) => p.tech.includes(techFilter))

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 px-4 overflow-hidden"
      style={{
        background:
          'linear-gradient(to bottom, #2C1B0E, #1A0F0A)',
      }}
    >
      {/* Wooden board texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,0.04) 60px, rgba(255,255,255,0.04) 62px)',
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-western text-4xl sm:text-5xl text-cowboy-gold text-center mb-4"
          style={{ textShadow: '0 2px 10px rgba(201,162,39,0.3)' }}
        >
          Bounty Board
        </motion.h2>

        <p className="font-body text-cowboy-dust text-center mb-10">
          Click a card for details
        </p>

        {/* Tech filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {['All', ...allTech].map((t) => (
            <button
              key={t}
              onClick={() => setTechFilter(t)}
              className={`font-body text-sm px-3 py-1.5 rounded-full border transition-all duration-300 ${
                techFilter === t
                  ? 'bg-cowboy-orange text-cowboy-dark border-cowboy-orange'
                  : 'bg-transparent text-cowboy-dust border-cowboy-dust/30 hover:border-cowboy-orange/50'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onSelect={setSelected}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}

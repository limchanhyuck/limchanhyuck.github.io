import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { projects } from '../../data/projects'
import type { Project } from '../../types/project'

function ProjectCard({ project, index, onSelect }: { project: Project; index: number; onSelect: (p: Project) => void }) {
  const [cardRef, cardInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => onSelect(project)}
      className="cursor-pointer group"
    >
      <div className="bg-dark-700/50 border border-dark-600/30 rounded-xl p-6 hover:border-accent/30 transition-all duration-300 h-full">
        <h3 className="font-heading text-xl text-light font-bold mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
        <p className="font-body text-sm text-muted mb-4 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="font-code text-xs px-2.5 py-1 rounded-md bg-dark-600/30 text-accent/80 border border-dark-600/20">{t}</span>
          ))}
        </div>
        <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1.5 font-body text-sm text-muted hover:text-accent transition-colors">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          GitHub
        </a>
      </div>
    </motion.div>
  )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-dark-800 border border-dark-600/50 rounded-xl p-6 sm:p-8 max-w-lg w-full max-h-[80vh] overflow-y-auto"
      >
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-heading text-2xl font-bold text-light">{project.title}</h3>
          <button onClick={onClose} className="text-muted hover:text-light text-2xl leading-none ml-4">&times;</button>
        </div>
        <p className="font-body text-muted mb-6 leading-relaxed">{project.longDescription}</p>
        <h4 className="font-heading text-sm font-semibold text-accent uppercase tracking-wider mb-3">Highlights</h4>
        <ul className="space-y-2 mb-6">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 font-body text-sm text-muted">
              <span className="text-accent mt-1 shrink-0">&#9656;</span>{h}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="font-code text-xs px-3 py-1 rounded-md bg-accent/10 text-accent border border-accent/20">{t}</span>
          ))}
        </div>
        <a href={project.github} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-body text-sm px-4 py-2 bg-accent/10 text-accent border border-accent/20 rounded-lg hover:bg-accent/20 transition-colors">
          View on GitHub
        </a>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [sectionRef, sectionInView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-4 bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={sectionInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          className="font-heading text-3xl sm:text-4xl font-bold text-light text-center mb-4">
          Projects
        </motion.h2>
        <p className="font-body text-muted text-center mb-12 text-sm">Click a card for details</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} onSelect={setSelected} />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}

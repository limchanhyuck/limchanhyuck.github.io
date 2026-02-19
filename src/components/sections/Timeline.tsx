import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { timeline } from '../../data/timeline'
import type { TimelineEvent } from '../../types/timeline'

const typeColors: Record<TimelineEvent['type'], string> = {
  project: 'text-accent border-accent bg-accent/10',
  education: 'text-accent-light border-accent-light bg-accent-light/10',
  career: 'text-light border-light bg-light/10',
  certificate: 'text-emerald-400 border-emerald-400 bg-emerald-400/10',
}

const dotColors: Record<TimelineEvent['type'], string> = {
  project: 'bg-accent',
  education: 'bg-accent-light',
  career: 'bg-light',
  certificate: 'bg-emerald-400',
}

function TimelineNode({ event, index }: { event: TimelineEvent; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const isLeft = index % 2 === 0

  return (
    <div ref={ref} className={`relative flex items-start mb-12 md:mb-16 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}
      >
        <div className="panel-card p-6">
          <div className={`flex items-center gap-2 mb-2 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
            <span className="font-body text-sm text-muted">{event.date}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full border font-body capitalize ${typeColors[event.type]}`}>{event.type}</span>
          </div>
          <h3 className="font-heading text-lg text-light font-semibold mb-1">{event.title}</h3>
          <p className="font-body text-sm text-muted leading-relaxed mb-3">{event.description}</p>
          <div className={`flex flex-wrap gap-1.5 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
            {event.tags.map((tag) => (
              <span key={tag} className="font-code text-xs px-2 py-0.5 rounded bg-dark-600/30 text-muted">{tag}</span>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6 z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.2, type: 'spring' }}
          className={`w-4 h-4 rounded-full ${dotColors[event.type]} border-2 border-dark-900 shadow-lg`}
        />
      </div>
    </div>
  )
}

export default function Timeline() {
  const [sectionRef, sectionInView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="timeline" ref={sectionRef} className="py-24 px-4 bg-dark-800">
      <div className="max-w-4xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={sectionInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          className="section-heading mb-16">
          Timeline
        </motion.h2>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-[0.5px] top-0 bottom-0 w-[1px] bg-dark-600/50" />
          {timeline.map((event, i) => (
            <TimelineNode key={`${event.date}-${event.title}`} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

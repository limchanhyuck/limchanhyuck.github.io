import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { timeline } from '../../data/timeline'
import type { TimelineEvent } from '../../types/timeline'

const typeConfig: Record<
  TimelineEvent['type'],
  { color: string; bgColor: string; icon: string }
> = {
  project: { color: 'text-cowboy-orange', bgColor: 'bg-cowboy-orange', icon: '&#9881;' },
  education: { color: 'text-cowboy-gold', bgColor: 'bg-cowboy-gold', icon: '&#9733;' },
  career: { color: 'text-cowboy-cream', bgColor: 'bg-cowboy-cream', icon: '&#9670;' },
  certificate: { color: 'text-cowboy-red', bgColor: 'bg-cowboy-red', icon: '&#9830;' },
}

function TimelineNode({
  event,
  index,
}: {
  event: TimelineEvent
  index: number
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const isLeft = index % 2 === 0
  const config = typeConfig[event.type]

  return (
    <div
      ref={ref}
      className={`relative flex items-start mb-12 md:mb-16 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-row`}
    >
      {/* Card */}
      <motion.div
        initial={{
          opacity: 0,
          x: isLeft ? -50 : 50,
        }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
          isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
        }`}
      >
        <div className="bg-cowboy-brown/50 border border-cowboy-dust/20 rounded-lg p-5 backdrop-blur-sm">
          <div
            className={`flex items-center gap-2 mb-2 ${
              isLeft ? 'md:justify-end' : 'md:justify-start'
            }`}
          >
            <span className={`font-body text-sm ${config.color}`}>
              {event.date}
            </span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${config.bgColor}/20 ${config.color} border border-current/20 font-body capitalize`}
            >
              {event.type}
            </span>
          </div>

          <h3 className="font-heading text-lg text-cowboy-cream font-bold mb-1">
            {event.title}
          </h3>
          <p className="font-body text-sm text-cowboy-dust leading-relaxed mb-3">
            {event.description}
          </p>

          <div
            className={`flex flex-wrap gap-1.5 ${
              isLeft ? 'md:justify-end' : 'md:justify-start'
            }`}
          >
            {event.tags.map((tag) => (
              <span
                key={tag}
                className="font-body text-xs px-2 py-0.5 rounded bg-cowboy-dark/40 text-cowboy-dust/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Center node (railroad track) - visible on md+ */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-4 z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.2, type: 'spring' }}
          className={`w-5 h-5 rounded-full ${config.bgColor} border-2 border-cowboy-dark shadow-lg`}
          dangerouslySetInnerHTML={{ __html: '' }}
        />
      </div>
    </div>
  )
}

export default function Timeline() {
  const [sectionRef, sectionInView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('timeline')
      if (!section) return
      const rect = section.getBoundingClientRect()
      const sectionHeight = section.offsetHeight
      const viewportHeight = window.innerHeight
      const scrolled = Math.max(0, -rect.top + viewportHeight * 0.3)
      const total = sectionHeight - viewportHeight * 0.5
      setScrollProgress(Math.min(1, Math.max(0, scrolled / total)))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="relative py-24 px-4 bg-cowboy-dark overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-western text-4xl sm:text-5xl text-cowboy-gold text-center mb-16"
          style={{ textShadow: '0 2px 10px rgba(201,162,39,0.3)' }}
        >
          The Trail
        </motion.h2>

        {/* Railroad track */}
        <div className="relative">
          {/* Center rail */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-cowboy-dust/30" />

          {/* Railroad ties */}
          <div
            className="absolute left-[6px] md:left-1/2 md:-translate-x-[10px] top-0 bottom-0 w-5 pointer-events-none"
            style={{
              backgroundImage:
                'repeating-linear-gradient(to bottom, transparent 0px, transparent 18px, rgba(168,146,121,0.2) 18px, rgba(168,146,121,0.2) 20px)',
            }}
          />

          {/* Scroll progress fill */}
          <div
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 w-[2px] bg-cowboy-orange transition-all duration-100"
            style={{ height: `${scrollProgress * 100}%` }}
          />

          {/* Train marker */}
          <div
            className="absolute left-[2px] md:left-1/2 md:-translate-x-[10px] w-5 h-5 z-20 transition-all duration-100"
            style={{ top: `${scrollProgress * 100}%` }}
          >
            <div className="w-5 h-5 bg-cowboy-orange rounded-full border-2 border-cowboy-gold shadow-lg shadow-cowboy-orange/40" />
          </div>

          {/* Timeline nodes */}
          {timeline.map((event, i) => (
            <TimelineNode key={`${event.date}-${event.title}`} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

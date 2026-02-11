import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaJava,
  FaDocker,
  FaLinux,
  FaPython,
  FaReact,
  FaDatabase,
} from 'react-icons/fa'
import {
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiRedis,
} from 'react-icons/si'
import { skills } from '../../data/skills'
import type { Skill } from '../../types/skill'

type IconComponent = React.ComponentType<{ className?: string }>

const iconMap: Record<string, IconComponent> = {
  java: FaJava,
  spring: SiSpringboot,
  python: FaPython,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  redis: SiRedis,
  hibernate: FaDatabase,
  mybatis: FaDatabase,
  javascript: FaReact,
  react: FaReact,
  docker: FaDocker,
  linux: FaLinux,
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const [cardRef, cardInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const IconComp = iconMap[skill.icon] || FaDatabase

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="bg-cowboy-brown/60 border border-cowboy-dust/30 rounded-lg p-5
        backdrop-blur-sm hover:border-cowboy-orange/50 transition-colors duration-300"
    >
      <div className="flex items-center gap-3 mb-3">
        <IconComp className="text-2xl text-cowboy-orange shrink-0" />
        <span className="font-heading text-cowboy-cream text-lg">{skill.name}</span>
        <span className="ml-auto font-body text-sm text-cowboy-dust">{skill.level}%</span>
      </div>
      <div className="w-full h-2 bg-cowboy-dark/60 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={cardInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.08 + 0.3, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-cowboy-orange to-cowboy-gold"
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const categories = Object.keys(skills)
  const [active, setActive] = useState<string>('All')
  const [sectionRef, sectionInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const filteredCategories =
    active === 'All' ? categories : categories.filter((c) => c === active)

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 px-4 bg-gradient-to-b from-cowboy-dark to-cowboy-brown"
    >
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-western text-4xl sm:text-5xl text-cowboy-gold text-center mb-12"
          style={{ textShadow: '0 2px 10px rgba(201,162,39,0.3)' }}
        >
          Arsenal
        </motion.h2>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {['All', ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-body text-sm px-4 py-2 rounded-full border transition-all duration-300 ${
                active === cat
                  ? 'bg-cowboy-orange text-cowboy-dark border-cowboy-orange'
                  : 'bg-transparent text-cowboy-dust border-cowboy-dust/40 hover:border-cowboy-orange/60 hover:text-cowboy-cream'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredCategories.map((category) => (
              <div key={category} className="mb-10 last:mb-0">
                {active === 'All' && (
                  <h3 className="font-heading text-xl text-cowboy-cream mb-4 border-b border-cowboy-dust/20 pb-2">
                    {category}
                  </h3>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {skills[category].map((skill, i) => (
                    <SkillCard key={skill.name} skill={skill} index={i} />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

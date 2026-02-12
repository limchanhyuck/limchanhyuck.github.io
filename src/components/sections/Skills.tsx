import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaJava, FaDocker, FaLinux, FaPython, FaReact, FaDatabase } from 'react-icons/fa'
import { SiSpringboot, SiMysql, SiPostgresql, SiRedis } from 'react-icons/si'
import { skills } from '../../data/skills'
import type { Skill } from '../../types/skill'

type IconComponent = React.ComponentType<{ className?: string }>

const iconMap: Record<string, IconComponent> = {
  java: FaJava, spring: SiSpringboot, python: FaPython,
  mysql: SiMysql, postgresql: SiPostgresql, redis: SiRedis,
  hibernate: FaDatabase, mybatis: FaDatabase,
  javascript: FaReact, react: FaReact, docker: FaDocker, linux: FaLinux,
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const [cardRef, cardInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const IconComp = iconMap[skill.icon] || FaDatabase

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="bg-dark-700/50 border border-dark-600/30 rounded-lg p-4 hover:border-accent/30 transition-all duration-300 group"
    >
      <div className="flex items-center gap-3">
        <IconComp className="text-xl text-accent/70 group-hover:text-accent shrink-0 transition-colors" />
        <span className="font-body text-light text-base">{skill.name}</span>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const categories = Object.keys(skills)
  const [active, setActive] = useState<string>('All')
  const [sectionRef, sectionInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const filteredCategories = active === 'All' ? categories : categories.filter((c) => c === active)

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-4 bg-dark-800">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl sm:text-4xl font-bold text-light text-center mb-12"
        >
          Skills
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {['All', ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-body text-sm px-4 py-2 rounded-lg border transition-all duration-300 ${
                active === cat
                  ? 'bg-accent/10 text-accent border-accent/30'
                  : 'bg-transparent text-muted border-dark-600/30 hover:border-accent/20 hover:text-light'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            {filteredCategories.map((category) => (
              <div key={category} className="mb-8 last:mb-0">
                {active === 'All' && (
                  <h3 className="font-heading text-lg font-semibold text-light/80 mb-4 border-b border-dark-600/30 pb-2">{category}</h3>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
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

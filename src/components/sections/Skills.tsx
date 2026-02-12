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

// 카테고리별 색상 테마
const categoryTheme: Record<string, { icon: string; border: string; bg: string; tag: string }> = {
  Backend: {
    icon: 'text-orange-400 group-hover:text-orange-300',
    border: 'hover:border-orange-400/30',
    bg: 'bg-orange-400/5',
    tag: 'bg-orange-400/10 text-orange-400 border-orange-400/30',
  },
  Database: {
    icon: 'text-emerald-400 group-hover:text-emerald-300',
    border: 'hover:border-emerald-400/30',
    bg: 'bg-emerald-400/5',
    tag: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/30',
  },
  'ORM / Data Access': {
    icon: 'text-violet-400 group-hover:text-violet-300',
    border: 'hover:border-violet-400/30',
    bg: 'bg-violet-400/5',
    tag: 'bg-violet-400/10 text-violet-400 border-violet-400/30',
  },
  Frontend: {
    icon: 'text-cyan-400 group-hover:text-cyan-300',
    border: 'hover:border-cyan-400/30',
    bg: 'bg-cyan-400/5',
    tag: 'bg-cyan-400/10 text-cyan-400 border-cyan-400/30',
  },
  DevOps: {
    icon: 'text-blue-400 group-hover:text-blue-300',
    border: 'hover:border-blue-400/30',
    bg: 'bg-blue-400/5',
    tag: 'bg-blue-400/10 text-blue-400 border-blue-400/30',
  },
}

const defaultTheme = {
  icon: 'text-accent group-hover:text-accent-light',
  border: 'hover:border-accent/30',
  bg: 'bg-accent/5',
  tag: 'bg-accent/10 text-accent border-accent/30',
}

function SkillCard({ skill, index, category }: { skill: Skill; index: number; category: string }) {
  const [cardRef, cardInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const IconComp = iconMap[skill.icon] || FaDatabase
  const theme = categoryTheme[category] || defaultTheme

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={`${theme.bg} border border-dark-600/30 rounded-lg p-4 ${theme.border} transition-all duration-300 group`}
    >
      <div className="flex items-center gap-3">
        <IconComp className={`text-xl shrink-0 transition-colors ${theme.icon}`} />
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
          {['All', ...categories].map((cat) => {
            const theme = categoryTheme[cat]
            const isActive = active === cat
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-body text-sm px-4 py-2 rounded-lg border transition-all duration-300 ${
                  isActive
                    ? theme
                      ? theme.tag
                      : 'bg-accent/10 text-accent border-accent/30'
                    : 'bg-transparent text-muted border-dark-600/30 hover:border-dark-600/60 hover:text-light'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            {filteredCategories.map((category) => {
              const theme = categoryTheme[category] || defaultTheme
              return (
                <div key={category} className="mb-8 last:mb-0">
                  {active === 'All' && (
                    <h3 className="font-heading text-lg font-semibold text-light/80 mb-4 border-b border-dark-600/30 pb-2">
                      <span className={theme.icon.split(' ')[0]}>{category}</span>
                    </h3>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {skills[category].map((skill, i) => (
                      <SkillCard key={skill.name} skill={skill} index={i} category={category} />
                    ))}
                  </div>
                </div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

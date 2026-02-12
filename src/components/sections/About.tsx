import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  const items = [
    'Backend 중심 개발 — Spring Boot + JPA/MyBatis 기반',
    'Docker 기반 개발 환경 구성',
    '서버 아키텍처 설계에 관심',
    '실제 서비스를 만드는 걸 좋아함',
  ]

  return (
    <section id="about" className="py-24 px-4 bg-dark-900">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl sm:text-4xl font-bold text-light text-center mb-12"
        >
          ABOUT ME
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-dark-700/50 border border-dark-600/50 rounded-xl p-8 sm:p-10"
        >
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-full bg-dark-600/50 border border-dark-600 flex items-center justify-center text-accent text-2xl font-bold">
              CL
            </div>
          </div>

          <div className="space-y-4">
            {items.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="text-accent mt-1 shrink-0">&#9656;</span>
                <span className="font-body text-muted text-base sm:text-lg leading-relaxed">
                  {text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const highlights = [
  {
    label: 'API Endpoint',
    value: '20+',
    desc: 'Meeting/Issue/Branch/Notification 도메인 API 설계·구현',
  },
  {
    label: 'N+1 개선',
    value: '94%',
    desc: '쿼리 수 52회 → 3회로 절감',
  },
  {
    label: '실시간 알림',
    value: '7종',
    desc: 'WebSocket(STOMP) 기반 알림 타입 운영',
  },
  {
    label: '권한 검증',
    value: '3계층',
    desc: 'Team → Meeting → Role 계층형 접근 제어',
  },
]

export default function BackendHighlights() {
  const [sectionRef, sectionInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="highlights" ref={sectionRef} className="py-20 px-4 bg-dark-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl sm:text-4xl font-bold text-light text-center mb-4"
        >
          Backend Highlights
        </motion.h2>
        <p className="text-center text-muted mb-12">숫자로 보여주는 백엔드 성과</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-dark-600/30 bg-dark-700/40 p-6 hover:border-accent/40 transition-colors"
            >
              <p className="text-xs uppercase tracking-wider text-muted mb-3">{item.label}</p>
              <p className="font-heading text-3xl font-bold text-accent mb-3">{item.value}</p>
              <p className="text-sm text-light/80 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const cards = [
  {
    title: 'API Layer',
    points: ['Spring Boot 기반 REST API', '도메인 분리(회의/이슈/브랜치/알림)', 'JWT 기반 인증·인가'],
  },
  {
    title: 'Data Layer',
    points: ['PostgreSQL + Redis', 'QueryDSL로 동적 조회 최적화', 'N+1 방지 쿼리 전략 적용'],
  },
  {
    title: 'Realtime & Infra',
    points: ['WebSocket(STOMP) 실시간 알림', 'Docker 기반 배포 환경', '운영 관점의 권한·정합성 검증'],
  },
]

export default function Architecture() {
  const [sectionRef, sectionInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="architecture" ref={sectionRef} className="py-24 px-4 bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl sm:text-4xl font-bold text-light text-center mb-4"
        >
          Architecture
        </motion.h2>
        <p className="text-center text-muted mb-12">백엔드 설계 관점에서 정리한 핵심 구성</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-dark-600/30 bg-dark-800/60 p-6"
            >
              <h3 className="font-heading text-xl text-accent mb-4">{card.title}</h3>
              <ul className="space-y-2">
                {card.points.map((p) => (
                  <li key={p} className="text-sm text-light/85 leading-relaxed flex gap-2">
                    <span className="text-accent">▸</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

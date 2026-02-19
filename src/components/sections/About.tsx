import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  const items = [
    '개발 철학: 기능 구현을 넘어서 운영 가능한 구조를 설계하고, 문제를 재현·측정·개선하는 과정을 중시합니다.',
    '강점: Spring Boot 기반 도메인 설계, Query 최적화, 권한 모델링, 실시간 알림(WebSocket) 구현 경험을 갖췄습니다.',
    '협업 방식: 요구사항을 기술 언어로 번역하고, API 계약/에러 정책/로그 기준을 명확히 정리합니다.',
    '지향점: 트래픽과 데이터가 커져도 안정적으로 확장 가능한 백엔드 엔지니어가 되는 것이 목표입니다.',
  ]

  return (
    <section id="about" className="py-24 px-4 bg-dark-900">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-heading mb-12"
        >
          ABOUT ME
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="panel-card p-12 sm:p-14"
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

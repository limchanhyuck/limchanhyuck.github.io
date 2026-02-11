import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section
      id="about"
      className="relative py-24 px-4 bg-cowboy-dark overflow-hidden"
    >
      {/* Subtle wood-grain texture overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 42px)',
        }}
      />

      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 60, rotate: -2 }}
          animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative"
        >
          {/* Nail / pin at top */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 border-2 border-gray-600 shadow-lg" />
          </div>

          {/* Wanted poster card */}
          <div
            className="relative border-4 border-cowboy-red rounded-sm p-8 sm:p-12 shadow-2xl"
            style={{
              background:
                'linear-gradient(135deg, #F5E6C8 0%, #e8d5a8 40%, #F5E6C8 60%, #dcc998 100%)',
              boxShadow:
                'inset 0 0 30px rgba(0,0,0,0.15), 0 10px 40px rgba(0,0,0,0.4)',
            }}
          >
            {/* Aged paper edges */}
            <div className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                backgroundImage:
                  'radial-gradient(ellipse at top left, rgba(139,37,0,0.3) 0%, transparent 50%), radial-gradient(ellipse at bottom right, rgba(139,37,0,0.3) 0%, transparent 50%)',
              }}
            />

            {/* Header */}
            <motion.h2
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-western text-3xl sm:text-5xl text-cowboy-red text-center mb-2 tracking-wide"
            >
              ABOUT THIS COWBOY
            </motion.h2>

            <div className="w-3/4 mx-auto border-t-2 border-b-2 border-cowboy-red/40 py-1 mb-8">
              <div className="border-t border-cowboy-red/20" />
            </div>

            {/* Profile image placeholder */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5, type: 'spring' }}
              className="flex justify-center mb-8"
            >
              <div
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-cowboy-brown
                  flex items-center justify-center text-cowboy-brown/50 text-5xl font-western
                  bg-cowboy-cream shadow-inner"
                style={{
                  boxShadow:
                    'inset 0 4px 12px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.15)',
                }}
              >
                CL
              </div>
            </motion.div>

            {/* About text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="space-y-3 text-cowboy-brown font-body text-base sm:text-lg leading-relaxed"
            >
              <p className="flex items-start gap-2">
                <span className="text-cowboy-orange font-bold mt-1 shrink-0">&#9733;</span>
                <span>Backend 중심 개발 — Spring Boot + JPA/MyBatis 기반</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-cowboy-orange font-bold mt-1 shrink-0">&#9733;</span>
                <span>Docker 기반 개발 환경 구성</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-cowboy-orange font-bold mt-1 shrink-0">&#9733;</span>
                <span>서버 아키텍처 설계에 관심</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-cowboy-orange font-bold mt-1 shrink-0">&#9733;</span>
                <span>실제 서비스를 만드는 걸 좋아함</span>
              </p>
            </motion.div>

            {/* Decorative corner marks */}
            <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-cowboy-red/50" />
            <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-cowboy-red/50" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-cowboy-red/50" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-cowboy-red/50" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

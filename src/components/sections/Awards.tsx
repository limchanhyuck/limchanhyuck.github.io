import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Award {
  title: string
  org: string
  date: string
  image: string
}

const awards: Award[] = [
  {
    title: '교내 경진대회 최우수상',
    org: '광주대학교',
    date: '2024',
    image: '/assets/images/광주대학교_교내경진대회_최우수상.png',
  },
  {
    title: 'KDN 경진대회 우수상',
    org: '한전 KDN',
    date: '2024',
    image: '/assets/images/한전_KDN_경진대회_우수상.png',
  },
]

const certificates = [
  { title: '정보처리기사', org: '한국산업인력공단', date: '2025' },
  { title: 'SQLD', org: '한국데이터산업진흥원', date: '2024' },
]

export default function Awards() {
  const [sectionRef, sectionInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section
      id="awards"
      ref={sectionRef}
      className="relative py-24 px-4 bg-cowboy-dark overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-western text-4xl sm:text-5xl text-cowboy-gold text-center mb-16"
          style={{ textShadow: '0 2px 10px rgba(201,162,39,0.3)' }}
        >
          Achievements
        </motion.h2>

        {/* Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h3 className="font-heading text-2xl text-cowboy-cream mb-6 text-center">
            Certificates
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {certificates.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="wood-texture rounded-lg p-6 text-center"
              >
                <div className="text-3xl mb-3">📜</div>
                <h4 className="font-heading text-lg text-cowboy-gold font-bold mb-1">
                  {cert.title}
                </h4>
                <p className="text-cowboy-dust text-sm">{cert.org}</p>
                <p className="text-cowboy-dust/70 text-xs mt-1">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Awards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="font-heading text-2xl text-cowboy-cream mb-6 text-center">
            Awards
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {awards.map((award, i) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={sectionInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                className="wood-texture rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(award.image)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-48 object-contain bg-cowboy-brown/50 p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-body">
                      클릭하여 확대
                    </span>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-heading text-lg text-cowboy-gold font-bold mb-1">
                    {award.title}
                  </h4>
                  <p className="text-cowboy-dust text-sm">{award.org}</p>
                  <p className="text-cowboy-dust/70 text-xs mt-1">{award.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            src={selectedImage}
            alt="Award"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-cowboy-gold transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  )
}

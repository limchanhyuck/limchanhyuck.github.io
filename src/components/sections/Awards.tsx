import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Award { title: string; org: string; date: string; image: string }

const awards: Award[] = [
  { title: '교내 경진대회 최우수상', org: '광주대학교', date: '2024', image: '/assets/images/광주대학교_교내경진대회_최우수상.png' },
  { title: 'KDN 경진대회 우수상', org: '한전 KDN', date: '2024', image: '/assets/images/한전_KDN_경진대회_우수상.png' },
]

const certificates = [
  { title: '정보처리기사', org: '한국산업인력공단', date: '2025' },
  { title: 'SQLD', org: '한국데이터산업진흥원', date: '2024' },
]

export default function Awards() {
  const [sectionRef, sectionInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="awards" ref={sectionRef} className="py-24 px-4 bg-dark-900">
      <div className="max-w-5xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={sectionInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          className="font-heading text-3xl sm:text-4xl font-bold text-light text-center mb-16">
          Achievements
        </motion.h2>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={sectionInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="mb-16">
          <h3 className="font-heading text-xl font-semibold text-light/80 mb-6 text-center">Certificates</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {certificates.map((cert, i) => (
              <motion.div key={cert.title} initial={{ opacity: 0, y: 15 }} animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="bg-dark-700/50 border border-dark-600/30 rounded-xl p-6 text-center">
                <h4 className="font-heading text-lg text-accent font-semibold mb-1">{cert.title}</h4>
                <p className="text-muted text-sm">{cert.org}</p>
                <p className="text-muted/60 text-xs mt-1">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={sectionInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }}>
          <h3 className="font-heading text-xl font-semibold text-light/80 mb-6 text-center">Awards</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {awards.map((award, i) => (
              <motion.div key={award.title} initial={{ opacity: 0, scale: 0.95 }} animate={sectionInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="bg-dark-700/50 border border-dark-600/30 rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(award.image)}>
                <div className="relative overflow-hidden">
                  <img src={award.image} alt={award.title} className="w-full h-48 object-contain bg-dark-800 p-2 group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-light opacity-0 group-hover:opacity-100 transition-opacity text-sm font-body">클릭하여 확대</span>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-heading text-lg text-accent font-semibold mb-1">{award.title}</h4>
                  <p className="text-muted text-sm">{award.org}</p>
                  <p className="text-muted/60 text-xs mt-1">{award.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer" onClick={() => setSelectedImage(null)}>
          <motion.img initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}
            src={selectedImage} alt="Award" className="max-w-full max-h-[90vh] object-contain rounded-lg" />
          <button className="absolute top-6 right-6 text-light text-3xl font-bold hover:text-accent transition-colors" onClick={() => setSelectedImage(null)}>&times;</button>
        </div>
      )}
    </section>
  )
}

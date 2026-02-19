import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Award { title: string; org: string; date: string; image: string }

const awards: Award[] = [
  { title: '교내 경진대회 최우수상', org: '광주대학교', date: '2024', image: '/assets/images/gwangju-univ-award.png' },
  { title: 'KDN 경진대회 우수상', org: '한전 KDN', date: '2024', image: '/assets/images/kdn-award.png' },
]

export default function Awards() {
  const [sectionRef, sectionInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({})

  const handleImgError = (title: string) => {
    setImgErrors((prev) => ({ ...prev, [title]: true }))
  }

  return (
    <section id="awards" ref={sectionRef} className="py-24 px-4 bg-dark-900">
      <div className="max-w-5xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={sectionInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          className="section-heading mb-16">
          Awards
        </motion.h2>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={sectionInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {awards.map((award, i) => (
              <motion.div key={award.title} initial={{ opacity: 0, scale: 0.95 }} animate={sectionInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="panel-card overflow-hidden cursor-pointer group hover:border-accent/40 transition-all"
                onClick={() => !imgErrors[award.title] && setSelectedImage(award.image)}>
                <div className="relative overflow-hidden">
                  {!imgErrors[award.title] ? (
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-52 object-contain bg-dark-800 p-3 group-hover:scale-105 transition-transform duration-300"
                      onError={() => handleImgError(award.title)}
                    />
                  ) : (
                    <div className="w-full h-52 bg-dark-800 p-3 flex items-center justify-center text-center">
                      <div>
                        <p className="text-accent font-semibold">{award.title}</p>
                        <p className="text-muted text-sm mt-2">이미지 파일을 찾을 수 없습니다</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-light opacity-0 group-hover:opacity-100 transition-opacity text-sm font-body">
                      {imgErrors[award.title] ? '이미지 경로 확인 필요' : '클릭하여 확대'}
                    </span>
                  </div>
                </div>
                <div className="p-5 text-center">
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

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import type { BlogPost } from '../../types/blog'
import postsData from '../../data/posts.json'

const posts: BlogPost[] = postsData as BlogPost[]

export default function Blog() {
  const [sectionRef, sectionInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="blog" ref={sectionRef} className="py-24 px-4 bg-dark-800">
      <div className="max-w-5xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={sectionInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          className="font-heading text-3xl sm:text-4xl font-bold text-light text-center mb-12">
          Blog
        </motion.h2>

        {posts.length === 0 ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={sectionInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="max-w-md mx-auto">
            <div className="bg-dark-700/50 border border-dark-600/30 rounded-xl p-8 text-center">
              <p className="font-heading text-xl text-light/80 font-semibold mb-2">Coming Soon</p>
              <div className="w-12 h-[1px] bg-dark-600 mx-auto mb-4" />
              <p className="font-body text-sm text-muted">Notion 블로그 연동 예정</p>
            </div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <PostCard key={post.id} post={post} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function PostCard({ post, index }: { post: BlogPost; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.a ref={ref} href={post.notionUrl} target="_blank" rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: index * 0.1 }} className="block group">
      <div className="bg-dark-700/50 border border-dark-600/30 rounded-xl p-6 h-full hover:border-accent/30 transition-all duration-300">
        <p className="font-body text-xs text-muted mb-2">{post.date}</p>
        <h3 className="font-heading text-lg text-light font-semibold mb-2 group-hover:text-accent transition-colors">{post.title}</h3>
        <p className="font-body text-sm text-muted mb-4 leading-relaxed line-clamp-3">{post.summary}</p>
        <div className="flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <span key={tag} className="font-code text-xs px-2 py-0.5 rounded bg-dark-600/30 text-muted">{tag}</span>
          ))}
        </div>
      </div>
    </motion.a>
  )
}

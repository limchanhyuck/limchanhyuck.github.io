import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import type { BlogPost } from '../../types/blog'
import postsData from '../../data/posts.json'

const posts: BlogPost[] = postsData as BlogPost[]

export default function Blog() {
  const [sectionRef, sectionInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="relative py-24 px-4 bg-gradient-to-b from-cowboy-brown to-cowboy-dark"
    >
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-western text-4xl sm:text-5xl text-cowboy-gold text-center mb-4"
          style={{ textShadow: '0 2px 10px rgba(201,162,39,0.3)' }}
        >
          Western Gazette
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={sectionInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-48 h-[2px] bg-cowboy-dust/40 mx-auto mb-12"
        />

        {posts.length === 0 ? (
          /* Coming soon placeholder */
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-md mx-auto"
          >
            <div
              className="border-2 border-cowboy-dust/30 rounded p-8 text-center"
              style={{
                background:
                  'linear-gradient(135deg, #F5E6C8 0%, #e8d5a8 50%, #F5E6C8 100%)',
              }}
            >
              {/* Newspaper masthead style */}
              <div className="border-b-2 border-t-2 border-cowboy-brown/30 py-2 mb-6">
                <p className="font-western text-2xl text-cowboy-brown tracking-wider">
                  EXTRA! EXTRA!
                </p>
              </div>

              <div className="space-y-4">
                <p className="font-heading text-xl text-cowboy-brown italic">
                  Coming Soon
                </p>
                <div className="w-16 h-[1px] bg-cowboy-brown/30 mx-auto" />
                <p className="font-body text-sm text-cowboy-brown/70 leading-relaxed">
                  Notion 블로그 연동 예정
                </p>
                <p className="font-body text-xs text-cowboy-dust italic">
                  Stay tuned, partner...
                </p>
              </div>

              {/* Decorative columns like newspaper */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[0, 1].map((i) => (
                  <div key={i} className="space-y-1">
                    {Array.from({ length: 4 }, (_, j) => (
                      <div
                        key={j}
                        className="h-2 bg-cowboy-brown/10 rounded-sm"
                        style={{ width: `${60 + Math.random() * 40}%` }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          /* Actual blog posts */
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
    <motion.a
      ref={ref}
      href={post.notionUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="block group"
    >
      <div
        className="border border-cowboy-dust/30 rounded p-6 h-full
          hover:border-cowboy-orange/40 transition-all duration-300"
        style={{
          background:
            'linear-gradient(135deg, #F5E6C8 0%, #e8d5a8 100%)',
        }}
      >
        {/* Date */}
        <p className="font-body text-xs text-cowboy-dust mb-2">{post.date}</p>

        {/* Title */}
        <h3 className="font-heading text-lg text-cowboy-brown font-bold mb-2 group-hover:text-cowboy-red transition-colors">
          {post.title}
        </h3>

        {/* Summary */}
        <p className="font-body text-sm text-cowboy-brown/70 mb-4 leading-relaxed line-clamp-3">
          {post.summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="font-body text-xs px-2 py-0.5 rounded bg-cowboy-brown/10 text-cowboy-brown/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  )
}

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface FormData {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const [sectionRef, sectionInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(
      `Message received, partner!\n\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`,
    )
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 px-4 bg-cowboy-dark overflow-hidden"
    >
      {/* Telegram paper texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 24px, rgba(255,255,255,0.1) 24px, rgba(255,255,255,0.1) 25px)',
        }}
      />

      <div className="max-w-2xl mx-auto relative">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-western text-4xl sm:text-5xl text-cowboy-gold text-center mb-12"
          style={{ textShadow: '0 2px 10px rgba(201,162,39,0.3)' }}
        >
          Send a Telegram
        </motion.h2>

        {/* Telegram form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            className="border-2 border-cowboy-dust/30 rounded-lg p-6 sm:p-10 shadow-2xl"
            style={{
              background:
                'linear-gradient(135deg, #F5E6C8 0%, #e8d5a8 40%, #F5E6C8 60%, #dcc998 100%)',
              boxShadow: 'inset 0 0 20px rgba(0,0,0,0.08), 0 8px 32px rgba(0,0,0,0.3)',
            }}
          >
            {/* Telegram header */}
            <div className="text-center mb-8">
              <div className="border-b-2 border-t-2 border-cowboy-brown/20 py-2 mb-4">
                <p className="font-western text-lg text-cowboy-brown/60 tracking-[0.3em] uppercase">
                  Western Union Telegram
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block font-body text-sm text-cowboy-brown/70 mb-1 uppercase tracking-wider">
                  From (Name)
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border-b-2 border-cowboy-brown/30
                    font-body text-cowboy-brown placeholder-cowboy-dust/50
                    focus:outline-none focus:border-cowboy-orange transition-colors"
                  placeholder="Your name, partner"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-body text-sm text-cowboy-brown/70 mb-1 uppercase tracking-wider">
                  Return Address (Email)
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border-b-2 border-cowboy-brown/30
                    font-body text-cowboy-brown placeholder-cowboy-dust/50
                    focus:outline-none focus:border-cowboy-orange transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block font-body text-sm text-cowboy-brown/70 mb-1 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-transparent border-2 border-cowboy-brown/20 rounded
                    font-body text-cowboy-brown placeholder-cowboy-dust/50 resize-none
                    focus:outline-none focus:border-cowboy-orange transition-colors"
                  placeholder="Write your message here..."
                />
              </div>

              {/* Submit */}
              <div className="text-center pt-2">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="font-western text-lg px-10 py-3 border-2 border-cowboy-brown
                    text-cowboy-brown bg-transparent rounded
                    hover:bg-cowboy-brown hover:text-cowboy-cream
                    transition-colors duration-300"
                >
                  Send Telegram
                </motion.button>
              </div>
            </form>

            {/* Decorative stamp */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-20">
              <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-cowboy-red rounded-full flex items-center justify-center">
                <span className="font-western text-cowboy-red text-xs sm:text-sm">PAID</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center gap-6 mt-10"
        >
          {/* GitHub */}
          <a
            href="https://github.com/limchanhyuck"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-cowboy-dust hover:text-cowboy-orange transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span className="font-body text-sm">GitHub</span>
          </a>

          {/* Email */}
          <a
            href="mailto:contact@example.com"
            className="flex items-center gap-2 text-cowboy-dust hover:text-cowboy-orange transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <span className="font-body text-sm">Email</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

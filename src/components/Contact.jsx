import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'

export default function Contact() {
  const submit = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    alert(`Thanks ${name}! I\'ll reach out shortly.`)
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="relative z-10 py-24 bg-gradient-to-b from-black to-gray-950">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s work together</h2>
          <p className="mt-3 text-white/70">Have a project in mind? Drop a line.</p>
        </div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-10 grid gap-4 rounded-2xl bg-white/5 ring-1 ring-white/10 p-6"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Your name" className="w-full rounded-xl bg-black/40 text-white placeholder-white/40 ring-1 ring-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/30" />
            <input type="email" name="email" required placeholder="Email" className="w-full rounded-xl bg-black/40 text-white placeholder-white/40 ring-1 ring-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/30" />
          </div>
          <input name="subject" placeholder="Subject" className="w-full rounded-xl bg-black/40 text-white placeholder-white/40 ring-1 ring-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/30" />
          <textarea name="message" required rows="5" placeholder="Tell me about your project" className="w-full rounded-xl bg-black/40 text-white placeholder-white/40 ring-1 ring-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/30" />

          <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-gray-900 px-5 py-3 font-semibold shadow hover:shadow-lg transition-all">
            <Mail size={18} /> Send message
            <Send size={16} className="opacity-70" />
          </button>
        </motion.form>
      </div>
    </section>
  )
}

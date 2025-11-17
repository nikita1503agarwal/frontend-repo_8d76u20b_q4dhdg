import { motion } from 'framer-motion'
import { Mail, Send, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const submit = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    alert(`Thanks ${name}! I'll reach out shortly.`)
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="relative z-10 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Let’s work together</h2>
          <p className="mt-3 text-gray-700 dark:text-white/70">Have a project in mind? Drop a line.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl ring-1 ring-black/10 dark:ring-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-6"
          >
            <h3 className="text-lg font-semibold">Contact details</h3>
            <ul className="mt-4 space-y-3 text-gray-700 dark:text-white/70">
              <li className="flex items-center gap-3"><Mail size={18}/> hello@awaiskhan.dev</li>
              <li className="flex items-center gap-3"><Phone size={18}/> +92 300 123 4567</li>
              <li className="flex items-center gap-3"><MapPin size={18}/> Lahore, PK — Remote worldwide</li>
            </ul>
            <div className="mt-6 text-sm opacity-80">
              I usually respond within 24 hours on weekdays.
            </div>
          </motion.div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="lg:col-span-2 grid gap-4 rounded-2xl bg-black/[0.03] dark:bg-white/5 ring-1 ring-black/10 dark:ring-white/10 p-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" required placeholder="Your name" className="w-full rounded-xl bg-white dark:bg-black/40 text-gray-900 dark:text-white placeholder-black/40 dark:placeholder-white/40 ring-1 ring-black/10 dark:ring-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/30" />
              <input type="email" name="email" required placeholder="Email" className="w-full rounded-xl bg-white dark:bg-black/40 text-gray-900 dark:text-white placeholder-black/40 dark:placeholder-white/40 ring-1 ring-black/10 dark:ring-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/30" />
            </div>
            <input name="subject" placeholder="Subject" className="w-full rounded-xl bg-white dark:bg-black/40 text-gray-900 dark:text-white placeholder-black/40 dark:placeholder-white/40 ring-1 ring-black/10 dark:ring-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/30" />
            <textarea name="message" required rows="5" placeholder="Tell me about your project" className="w-full rounded-xl bg-white dark:bg-black/40 text-gray-900 dark:text-white placeholder-black/40 dark:placeholder-white/40 ring-1 ring-black/10 dark:ring-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/30" />

            <button type="submit" className="inline-flex w-max items-center justify-center gap-2 rounded-xl bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-5 py-3 font-semibold shadow hover:shadow-lg transition-all">
              <Mail size={18} /> Send message
              <Send size={16} className="opacity-70" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

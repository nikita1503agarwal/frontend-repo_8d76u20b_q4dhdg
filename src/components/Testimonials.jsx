import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Ava Thompson',
    role: 'Product Lead, NovaTech',
    quote:
      'Their attention to detail and motion made our product feel premium. Collaboration was smooth from day one.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Liam Carter',
    role: 'Founder, Streamly',
    quote:
      'We shipped faster than expected and the UI looks incredible across devices. Absolutely recommend.',
    avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Sophia Nguyen',
    role: 'Design Manager, Aurora',
    quote:
      'A perfect blend of craft and pragmatism. The animations feel purposeful and the codebase is clean.',
    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop',
  },
]

export default function Testimonials(){
  return (
    <section className="relative z-10 py-20 bg-gradient-to-b from-black to-gray-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What clients say</h2>
          <p className="mt-3 text-white/70">A few kind words from happy partners.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover"/>
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-white/60 text-sm">{t.role}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
              </div>
              <p className="mt-3 text-white/80">“{t.quote}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

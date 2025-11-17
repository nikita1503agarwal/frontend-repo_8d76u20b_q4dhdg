import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

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
  {
    name: 'Noah Patel',
    role: 'CTO, Helix Labs',
    quote:
      'From kickoff to launch, the process felt effortless and the results exceeded expectations.',
    avatar: 'https://images.unsplash.com/photo-1543589077-47d81606c1bf?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Maya Chen',
    role: 'Marketing, Orbit',
    quote:
      'Our conversions climbed after the redesign. The micro‑interactions add so much polish.',
    avatar: 'https://images.unsplash.com/photo-1541534401786-2077eed87a72?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Ethan Brown',
    role: 'Founder, Peko',
    quote:
      'Clean architecture, thoughtful UX, and fast delivery. Couldn’t ask for more.',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=400&auto=format&fit=crop',
  },
]

export default function Testimonials(){
  const scroller = useRef(null)

  const scrollByAmount = (dir) => {
    const el = scroller.current
    if (!el) return
    const amount = el.clientWidth * 0.9
    el.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <section className="relative z-10 py-20 bg-gradient-to-b from-black to-gray-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-4">
          <div className="text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">What clients say</h2>
            <p className="mt-3 text-white/70">A few kind words from happy partners.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button onClick={() => scrollByAmount(-1)} aria-label="Previous" className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 ring-1 ring-white/15">
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => scrollByAmount(1)} aria-label="Next" className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 ring-1 ring-white/15">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div ref={scroller} className="mt-8 flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="snap-start shrink-0 w-[85%] sm:w-[60%] lg:w-[32%] rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 hover:bg-white/10 transition-colors"
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

        <div className="mt-6 sm:hidden flex items-center justify-center gap-3">
          <button onClick={() => scrollByAmount(-1)} aria-label="Previous" className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 ring-1 ring-white/15">
            <ChevronLeft size={18} />
          </button>
          <button onClick={() => scrollByAmount(1)} aria-label="Next" className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 ring-1 ring-white/15">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const items = [
  { id: 'interactive-3d-portfolio', title: 'Interactive 3D Portfolio', cover: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476e?q=80&w=1200&auto=format&fit=crop', tags: ['React', 'Spline', 'Framer Motion'] },
  { id: 'realtime-chat', title: 'Realtime Chat App', cover: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop', tags: ['React', 'WebSocket', 'Tailwind'] },
  { id: 'headless-ecommerce', title: 'Headless Ecommerce', cover: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200&auto=format&fit=crop', tags: ['Next.js', 'Stripe', 'Prisma'] },
  { id: 'dashboards', title: 'Analytics Dashboards', cover: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop', tags: ['D3.js', 'React', 'Tailwind'] },
]

export default function Portfolio(){
  return (
    <section className="relative z-10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Portfolio</h1>
          <p className="mt-3 text-white/70">Handpicked case studies and experiments.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <motion.div key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 hover:bg-white/10"
            >
              <Link to={`/portfolio/${p.id}`}>
                <div className="aspect-video w-full overflow-hidden">
                  <img src={p.cover} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {p.tags.map(t => (
                      <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80 ring-1 ring-white/15">{t}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

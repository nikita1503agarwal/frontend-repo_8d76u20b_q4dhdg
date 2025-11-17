import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Interactive 3D Portfolio',
    description: 'Showcasing WebGL/Spline integrations with smooth, accessible motion.',
    tags: ['React', 'Spline', 'Framer Motion'],
    repo: '#',
    demo: '#',
  },
  {
    title: 'Realtime Chat App',
    description: 'End‑to‑end encrypted chat with optimistic UI updates and presence.',
    tags: ['React', 'WebSocket', 'Tailwind'],
    repo: '#',
    demo: '#',
  },
  {
    title: 'Headless Ecommerce',
    description: 'Composable storefront with fast edge caching and analytics.',
    tags: ['Next.js', 'Stripe', 'Prisma'],
    repo: '#',
    demo: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-24 bg-gradient-to-b from-black to-gray-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Work</h2>
          <p className="mt-3 text-white/70">A few things I’ve been building lately.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 hover:bg-white/10 transition-colors"
            >
              <div className="h-40 rounded-xl bg-gradient-to-br from-violet-500/30 via-fuchsia-500/30 to-blue-500/30 ring-1 ring-white/10" />
              <h3 className="mt-4 text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-white/70">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80 ring-1 ring-white/15">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a href={p.repo} className="inline-flex items-center gap-1 text-white/80 hover:text-white">
                  <Github size={16} /> Code
                </a>
                <a href={p.demo} className="inline-flex items-center gap-1 text-white/80 hover:text-white">
                  <ExternalLink size={16} /> Live
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

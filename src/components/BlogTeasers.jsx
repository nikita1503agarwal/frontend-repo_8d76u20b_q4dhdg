import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const posts = [
  {
    slug: 'designing-with-motion',
    title: 'Designing with Motion: Subtle, Purposeful, Accessible',
    cover: 'https://images.unsplash.com/photo-1517697471339-4aa32003c11a?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Add motion that supports comprehension without overwhelm.',
    tags: ['Motion', 'UX'],
  },
  {
    slug: 'dark-mode-design',
    title: 'Dark Mode Done Right: Contrast, Color, and Craft',
    cover: 'https://images.unsplash.com/photo-1551281044-8a5c1a979f6b?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Make dark UIs legible and delightful.',
    tags: ['Design', 'Color'],
  },
  {
    slug: 'perf-first-react',
    title: 'Performance‑First React: Patterns for Snappy Apps',
    cover: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Keep your UI instant with practical tips.',
    tags: ['React', 'Performance'],
  },
]

export default function BlogTeasers(){
  return (
    <section className="relative z-10 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Latest from the blog</h2>
            <p className="mt-2 text-white/70">Fresh ideas and hands‑on walkthroughs.</p>
          </div>
          <Link to="/blog" className="hidden sm:inline-flex text-sm font-semibold text-white/80 hover:text-white">View all</Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <motion.div key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 hover:bg-white/10"
            >
              <Link to={`/blog/${p.slug}`}>
                <div className="aspect-video w-full overflow-hidden">
                  <img src={p.cover} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                  <p className="mt-2 text-white/70 text-sm">{p.excerpt}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
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

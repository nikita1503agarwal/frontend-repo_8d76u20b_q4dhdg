import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const posts = {
  'designing-with-motion': {
    title: 'Designing with Motion: Subtle, Purposeful, Accessible',
    cover: 'https://images.unsplash.com/photo-1517697471339-4aa32003c11a?q=80&w=1600&auto=format&fit=crop',
    content: `
      Motion is a layer of communication. Used thoughtfully, it can guide attention, explain relationships, and add delight.

      1. Prefer small, composable animations over large choreography.
      2. Animate properties that feel natural: opacity, transform, color.
      3. Respect accessibility: reduce or disable nonessential motion when requested.

      In practice, aim for motion that supports comprehension. If it distracts from the task, it’s noise.
    `,
  },
  'dark-mode-design': {
    title: 'Dark Mode Done Right: Contrast, Color, and Craft',
    cover: 'https://images.unsplash.com/photo-1551281044-8a5c1a979f6b?q=80&w=1600&auto=format&fit=crop',
    content: `
      Dark UIs are more than inverted colors. Focus on contrast, depth, and warmth. Consider subtle overlays, soft gradients, and a disciplined palette.

      Test in varied environments and devices. Pair typography carefully to avoid glow and fatigue.
    `,
  },
  'perf-first-react': {
    title: 'Performance‑First React: Patterns for Snappy Apps',
    cover: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop',
    content: `
      Performance is a feature. Use code‑splitting, memoization, and suspense wisely. Keep components small and predictable.

      Measure before optimizing. Users feel responsiveness long before they notice micro‑benchmarks.
    `,
  },
}

export default function BlogSingle(){
  const { slug } = useParams()
  const data = useMemo(() => posts[slug] || null, [slug])

  if(!data){
    return (
      <section className="relative z-10 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-3xl font-bold">Not found</h1>
          <p className="text-white/70 mt-2">That post does not exist.</p>
          <Link to="/blog" className="inline-block mt-6 px-4 py-2 rounded-xl bg-white text-gray-900">Back to blog</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="relative z-10 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="aspect-video w-full overflow-hidden rounded-2xl ring-1 ring-white/10">
          <img src={data.cover} alt={data.title} className="h-full w-full object-cover"/>
        </div>
        <motion.h1 initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="mt-8 text-4xl font-bold text-white">{data.title}</motion.h1>
        <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.6, delay:0.05}} className="prose prose-invert prose-p:text-white/80 mt-4 max-w-none">
          {data.content.split('\n').map((p, idx) => p.trim() && <p key={idx}>{p}</p>)}
        </motion.div>
        <Link to="/blog" className="inline-block mt-8 px-4 py-2 rounded-xl bg-white text-gray-900">← Back to blog</Link>
      </div>
    </section>
  )
}

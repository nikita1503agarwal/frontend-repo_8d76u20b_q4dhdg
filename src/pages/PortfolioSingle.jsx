import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const items = {
  'interactive-3d-portfolio': {
    title: 'Interactive 3D Portfolio',
    cover: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476e?q=80&w=1600&auto=format&fit=crop',
    content: 'A concept portfolio that blends Spline 3D scenes with crisp, accessible motion. Built with React, Tailwind, and Framer Motion. The goal was to make 3D feel purposeful and performant.',
  },
  'realtime-chat': {
    title: 'Realtime Chat App',
    cover: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
    content: 'A snappy chat experience with presence and optimistic updates. Focused on UX, message grouping, and connection resilience.',
  },
  'headless-ecommerce': {
    title: 'Headless Ecommerce',
    cover: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&auto=format&fit=crop',
    content: 'Composable storefront with headless CMS, payments, and analytics. Emphasis on SEO, performance, and design systems.',
  },
  'dashboards': {
    title: 'Analytics Dashboards',
    cover: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop',
    content: 'Data‑dense dashboards with legible typography and motion to guide attention. Built with React and D3.',
  },
}

export default function PortfolioSingle(){
  const { id } = useParams()
  const data = useMemo(() => items[id] || null, [id])

  if(!data){
    return (
      <section className="relative z-10 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-3xl font-bold">Not found</h1>
          <p className="text-white/70 mt-2">The portfolio item you’re looking for does not exist.</p>
          <Link to="/portfolio" className="inline-block mt-6 px-4 py-2 rounded-xl bg-white text-gray-900">Back to portfolio</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="relative z-10 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="aspect-video w-full overflow-hidden rounded-2xl ring-1 ring-white/10">
          <img src={data.cover} alt={data.title} className="h-full w-full object-cover"/>
        </div>
        <motion.h1 initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="mt-8 text-4xl font-bold text-white">{data.title}</motion.h1>
        <motion.p initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.6, delay:0.05}} className="mt-3 text-white/80 leading-relaxed">{data.content}</motion.p>
        <Link to="/portfolio" className="inline-block mt-8 px-4 py-2 rounded-xl bg-white text-gray-900">← Back to portfolio</Link>
      </div>
    </section>
  )
}

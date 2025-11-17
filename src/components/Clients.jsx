import { motion } from 'framer-motion'

const logos = [
  {
    name: 'Shopify',
    src: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTaG9waWZ5fGVufDB8MHx8fDE3NjMzNTg2MTd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Stripe',
    src: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTaG9waWZ5fGVufDB8MHx8fDE3NjMzNTg2MTd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Framer',
    src: 'https://images.unsplash.com/photo-1628699265231-97b2a3e7b9ae?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHJpcGV8ZW58MHwwfHx8MTc2MzM1ODYxN3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Vercel',
    src: 'https://images.unsplash.com/photo-1575025498742-77c00f2c7c29?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGcmFtZXJ8ZW58MHwwfHx8MTc2MzM1ODYxOHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Figma',
    src: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
  },
  {
    name: 'Adobe',
    src: 'https://images.unsplash.com/photo-1648854006531-361649aa182c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGaWdtYXxlbnwwfDB8fHwxNzYzMzU4NjE4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
]

export default function Clients(){
  // duplicate list to create seamless loop
  const marquee = [...logos, ...logos]
  return (
    <section className="relative z-10 py-16 bg-black/40 border-y border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between gap-6 overflow-hidden">
          <motion.div
            className="flex items-center gap-12 min-w-max"
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          >
            {marquee.map((logo, i) => (
              <div key={i} className="shrink-0 opacity-80 hover:opacity-100 transition-opacity">
                <img src={logo.src} alt={logo.name} className="h-8 sm:h-10 object-contain" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

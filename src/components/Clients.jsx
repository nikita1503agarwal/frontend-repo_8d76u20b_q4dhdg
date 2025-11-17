import { motion } from 'framer-motion'

const brands = [
  { name: 'Shopify', logo: 'https://cdn.worldvectorlogo.com/logos/shopify.svg' },
  { name: 'Stripe', logo: 'https://cdn.worldvectorlogo.com/logos/stripe-4.svg' },
  { name: 'Framer', logo: 'https://cdn.worldvectorlogo.com/logos/framer-2.svg' },
  { name: 'Vercel', logo: 'https://cdn.worldvectorlogo.com/logos/vercel.svg' },
  { name: 'Figma', logo: 'https://cdn.worldvectorlogo.com/logos/figma-1.svg' },
  { name: 'Adobe', logo: 'https://cdn.worldvectorlogo.com/logos/adobe-2.svg' },
]

export default function Clients(){
  const logos = [...brands, ...brands, ...brands]
  return (
    <section className="relative z-10 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between gap-6 overflow-hidden rounded-2xl ring-1 ring-black/10 dark:ring-white/10 bg-black/5 dark:bg-white/5">
          <motion.div
            className="flex items-center gap-12 min-w-max py-6"
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
          >
            {logos.map((logo, i) => (
              <div key={i} className="shrink-0 opacity-80 hover:opacity-100 transition-opacity">
                <img src={logo.logo} alt={logo.name} className="h-8 sm:h-10 object-contain invert-0 dark:invert" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

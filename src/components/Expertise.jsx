import { motion } from 'framer-motion'
import { Wrench, Boxes, Code2, Puzzle } from 'lucide-react'

const skills = [
  { title: 'Elementor', desc: 'Pixel‑perfect pages with theme builder, loops, and dynamic content.', icon: Wrench },
  { title: 'WordPress', desc: 'Custom themes, ACF, security hardening, and blazing performance.', icon: Boxes },
  { title: 'WooCommerce', desc: 'Conversion‑focused stores, checkout UX, payments, and integrations.', icon: Puzzle },
  { title: 'Custom Development', desc: 'Headless, APIs, and tailored features that scale with your business.', icon: Code2 },
]

export default function Expertise(){
  return (
    <section className="relative z-10 py-20 bg-gradient-to-b from-gray-950 to-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Expertise</h2>
          <p className="mt-3 text-white/70">Elementor • WordPress • WooCommerce • Custom Development</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 ring-1 ring-white/20 grid place-items-center text-white">
                {s.icon && <s.icon size={22} />}
              </div>
              <h3 className="mt-4 text-white font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative z-10 py-24 bg-gradient-to-b from-gray-950 to-black">
      <div className="mx-auto max-w-5xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">About Me</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            I’m a product‑minded engineer focused on crafting experiences that feel fast, fluid, and fun.
            I care about accessibility, performance, and sharp visual design.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
              <p className="text-3xl font-bold text-white">5+</p>
              <p className="text-white/70">years experience</p>
            </div>
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
              <p className="text-3xl font-bold text-white">30+</p>
              <p className="text-white/70">projects shipped</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-blue-500/20 via-violet-500/20 to-fuchsia-500/20 ring-1 ring-white/10" />
        </motion.div>
      </div>
    </section>
  )
}

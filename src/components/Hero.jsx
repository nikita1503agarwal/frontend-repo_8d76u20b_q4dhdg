import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-white/90 ring-1 ring-white/20 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs">Open to work • Frontend & Full‑stack</span>
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-transparent">
            Building delightful web experiences
          </h1>
          <p className="mt-4 text-white/80 text-lg leading-relaxed">
            I craft modern, accessible interfaces with clean code and thoughtful motion.
            Let’s turn ideas into interactive products that people love.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-xl bg-white text-gray-900 px-5 py-3 font-semibold shadow hover:shadow-lg transition-shadow">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-white/10 text-white px-5 py-3 font-semibold ring-1 ring-white/20 hover:bg-white/20">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

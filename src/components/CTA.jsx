import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CTA(){
  return (
    <section className="relative z-10 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl bg-gradient-to-br from-violet-600/30 via-fuchsia-600/20 to-cyan-500/20 ring-1 ring-white/15 p-8 sm:p-12 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Have a project in mind?</h3>
            <p className="mt-2 text-white/80">Let’s build something exceptional together. I’m available for new work.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-gray-900 px-5 py-3 rounded-xl font-semibold">
                Contact me <ArrowRight size={18} />
              </Link>
              <Link to="/portfolio" className="inline-flex items-center gap-2 bg-white/10 ring-1 ring-white/20 text-white px-5 py-3 rounded-xl font-semibold hover:bg-white/20">
                View work
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

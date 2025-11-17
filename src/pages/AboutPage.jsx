import { motion } from 'framer-motion'

const sections = [
  {
    title: 'Who I am',
    body: 'I am Awais Khan, a product‑minded engineer and designer hybrid. I help teams build polished, performant web experiences with a focus on accessibility, motion, and measurable outcomes.',
  },
  {
    title: 'What I do',
    body: 'I design and develop websites, stores, and apps using Elementor, WordPress, WooCommerce, and custom React stacks. From concept to launch, I bring clarity, craftsmanship, and pace.',
  },
  {
    title: 'Principles',
    list: ['Accessible by default', 'Fast is a feature', 'Motion with meaning', 'Systems over one‑offs'],
  },
  {
    title: 'Toolbox',
    list: ['React, Vite, Tailwind, Framer Motion', 'Elementor & WordPress', 'WooCommerce & payments', 'Figma, Linear, Notion'],
  },
]

const timeline = [
  { year: '2024', label: 'Senior Frontend Engineer — Freelance', desc: 'Leading design‑to‑code handoffs and complex UI builds.' },
  { year: '2022', label: 'Frontend Engineer — Studio', desc: 'Shipped marketing sites and web apps for startups.' },
  { year: '2020', label: 'Web Designer/Developer', desc: 'Built stores and templates for SMBs and creators.' },
]

export default function AboutPage(){
  return (
    <section className="relative z-10 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h1 initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-4xl sm:text-5xl font-bold">About</motion.h1>
        <p className="mt-3 text-gray-700 dark:text-white/70 max-w-2xl">A snapshot of my background, principles, and how I work.</p>

        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          {sections.map((s, i) => (
            <motion.div key={s.title}
              initial={{opacity:0, y:20}}
              whileInView={{opacity:1, y:0}}
              viewport={{ once: true, amount: 0.2 }}
              transition={{duration:0.5, delay: i*0.05}}
              className="rounded-2xl ring-1 ring-black/10 dark:ring-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-6"
            >
              <h3 className="text-xl font-semibold">{s.title}</h3>
              {s.body && <p className="mt-2 text-gray-700 dark:text-white/70">{s.body}</p>}
              {s.list && (
                <ul className="mt-3 space-y-2 text-gray-700 dark:text-white/70 list-disc list-inside">
                  {s.list.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl ring-1 ring-black/10 dark:ring-white/10 bg-black/[0.03] dark:bg-white/5 p-6">
          <h3 className="text-xl font-semibold">Experience timeline</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {timeline.map((t, i) => (
              <motion.div key={t.year}
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                viewport={{ once: true, amount: 0.2 }}
                transition={{duration:0.5, delay: i*0.05}}
                className="rounded-xl ring-1 ring-black/10 dark:ring-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-4"
              >
                <p className="text-sm opacity-70">{t.year}</p>
                <p className="mt-1 font-semibold">{t.label}</p>
                <p className="text-sm text-gray-700 dark:text-white/70">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-2xl ring-1 ring-black/10 dark:ring-white/10 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 p-6">
          <h3 className="text-xl font-semibold">How I work</h3>
          <p className="mt-2 text-gray-700 dark:text-white/70">I collaborate in short, focused cycles. We define outcomes, prototype quickly, and iterate with feedback. Communication is clear and async‑friendly, with weekly check‑ins and transparent progress.</p>
        </div>
      </div>
    </section>
  )
}

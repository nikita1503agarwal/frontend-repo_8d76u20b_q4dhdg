import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 via-violet-500 to-fuchsia-500"></div>
              <span className="text-white/90 font-semibold tracking-tight">My Portfolio</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-white/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/90">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/90">
                <Linkedin size={18} />
              </a>
              <a href="#contact" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/90">
                <Mail size={18} />
              </a>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg bg-white/10 text-white/90">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-white/90 bg-white/10 hover:bg-white/20 rounded-lg px-3 py-2">
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-3 mt-3">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/90">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/90">
                  <Linkedin size={18} />
                </a>
                <a href="#contact" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/90">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import SocialBar from './SocialBar'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Blog', to: '/blog' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">
          <div className="flex items-center justify-between px-4 py-3">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 via-violet-500 to-fuchsia-500" />
              <span className="text-white/90 font-semibold tracking-tight">Awais Khan</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `text-white/80 hover:text-white transition-colors ${isActive ? 'text-white' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <SocialBar />
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg bg-white/10 text-white/90">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `text-white/90 bg-white/10 hover:bg-white/20 rounded-lg px-3 py-2 ${isActive ? 'ring-1 ring-white/30' : ''}`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
              <div className="flex items-center gap-3 mt-3">
                <SocialBar />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

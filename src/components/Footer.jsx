import { Link } from 'react-router-dom'
import SocialBar from './SocialBar'

export default function Footer(){
  return (
    <footer className="relative z-10 mt-20 border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 via-violet-500 to-fuchsia-500" />
              <span className="text-white font-semibold">Awais Khan</span>
            </div>
            <p className="mt-3 text-white/70 max-w-md">I design and build polished websites and stores with Elementor, WordPress, WooCommerce, and custom code.</p>
            <div className="mt-4"><SocialBar /></div>
          </div>

          <div>
            <h4 className="text-white font-semibold">Navigate</h4>
            <ul className="mt-3 space-y-2 text-white/70">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold">Expertise</h4>
            <ul className="mt-3 space-y-2 text-white/70">
              <li>Elementor</li>
              <li>WordPress</li>
              <li>WooCommerce</li>
              <li>Custom Development</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Awais Khan. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="mailto:hello@awaiskhan.dev" className="hover:text-white">hello@awaiskhan.dev</a>
            <span className="opacity-30">•</span>
            <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp</a>
            <span className="opacity-30">•</span>
            <a href="https://www.linkedin.com/in/awaiskhan" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

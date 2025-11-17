import { Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export default function ThemeToggle(){
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'
  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className={`p-2 rounded-lg transition-colors ring-1 ${isDark ? 'bg-white/10 hover:bg-white/20 text-white/90 ring-white/20' : 'bg-black/5 hover:bg-black/10 text-gray-900 ring-black/10'}`}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}

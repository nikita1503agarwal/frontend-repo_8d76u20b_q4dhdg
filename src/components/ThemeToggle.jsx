import { Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export default function ThemeToggle(){
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'
  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/90"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}

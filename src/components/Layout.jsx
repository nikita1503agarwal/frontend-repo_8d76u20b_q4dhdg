import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900 dark:bg-black dark:text-white transition-colors">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(70%_50%_at_50%_-10%,rgba(99,102,241,0.25),transparent_60%),radial-gradient(60%_40%_at_80%_10%,rgba(236,72,153,0.18),transparent_60%),radial-gradient(50%_40%_at_20%_10%,rgba(56,189,248,0.18),transparent_60%)]" />
        <div className="absolute inset-0 dark:hidden bg-[radial-gradient(60%_40%_at_20%_-10%,rgba(99,102,241,0.10),transparent_60%),radial-gradient(50%_30%_at_80%_0%,rgba(236,72,153,0.08),transparent_60%),linear-gradient(to_bottom,rgba(0,0,0,0.02),transparent)]" />
      </div>
      <Navbar />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

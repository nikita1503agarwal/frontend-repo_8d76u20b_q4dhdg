import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <div className="fixed inset-0 bg-[radial-gradient(70%_50%_at_50%_-10%,rgba(99,102,241,0.25),transparent_60%),radial-gradient(60%_40%_at_80%_10%,rgba(236,72,153,0.18),transparent_60%),radial-gradient(50%_40%_at_20%_10%,rgba(56,189,248,0.18),transparent_60%)]" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="relative z-10 border-t border-white/10 py-8 text-center text-white/60">
        © {new Date().getFullYear()} Your Name — Built with love
      </footer>
    </div>
  )
}

export default App

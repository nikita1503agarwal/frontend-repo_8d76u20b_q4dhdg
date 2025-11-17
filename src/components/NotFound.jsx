import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <section className="relative z-10 min-h-[60vh] flex items-center">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/60">404</h1>
        <p className="mt-3 text-white/70">This page could not be found.</p>
        <Link to="/" className="inline-block mt-6 px-4 py-2 rounded-xl bg-white text-gray-900">Back home</Link>
      </div>
    </section>
  )
}

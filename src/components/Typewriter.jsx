import { useEffect, useRef, useState } from 'react'

export default function Typewriter({ words = [], speed = 90, delay = 1200, className = '' }){
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [blink, setBlink] = useState(true)
  const mounted = useRef(true)

  useEffect(() => {
    return () => { mounted.current = false }
  }, [])

  useEffect(() => {
    if (!words.length) return
    const current = words[index % words.length]

    if (!deleting && subIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), delay)
      return () => clearTimeout(t)
    }

    if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
      return
    }

    const timeout = setTimeout(() => {
      if (!mounted.current) return
      setSubIndex((s) => s + (deleting ? -1 : 1))
    }, deleting ? speed / 2 : speed)

    return () => clearTimeout(timeout)
  }, [subIndex, deleting, index, words, speed, delay])

  useEffect(() => {
    const t = setInterval(() => setBlink((b) => !b), 600)
    return () => clearInterval(t)
  }, [])

  const text = words.length ? words[index % words.length].substring(0, subIndex) : ''

  return (
    <span className="inline-flex items-baseline">
      <span className={className}>{text}</span>
      <span
        aria-hidden
        className={`ml-1 inline-block h-[1em] w-[2px] self-end rounded-sm align-baseline ${blink ? 'opacity-100' : 'opacity-0'} bg-gray-900 dark:bg-white`}
      />
    </span>
  )
}

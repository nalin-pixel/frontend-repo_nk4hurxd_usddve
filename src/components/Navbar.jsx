import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const sections = [
  { id: 'home', label: 'Hjem' },
  { id: 'about', label: 'Om Studioet' },
  { id: 'projects', label: 'Prosjekter' },
  { id: 'services', label: 'Tjenester' },
  { id: 'contact', label: 'Kontakt' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    handler()
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    const observers = sections.map((s) => {
      const el = document.getElementById(s.id)
      if (!el) return null
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(s.id)
          })
        },
        { threshold: 0.5 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((o) => o && o.disconnect())
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-black/60 backdrop-blur-md' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-sm bg-gradient-to-br from-cyan-400 to-blue-600" />
          <span className="text-white font-semibold tracking-wide">AURORA STUDIO</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`text-sm tracking-wide transition-colors ${active === s.id ? 'text-cyan-300' : 'text-zinc-300 hover:text-white'}`}
            >
              {s.label}
            </button>
          ))}
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur-lg">
          <div className="px-6 py-4 flex flex-col gap-3">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`text-left text-base py-2 ${active === s.id ? 'text-cyan-300' : 'text-zinc-300'}`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

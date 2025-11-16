import { useEffect, useRef, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const hue = useTransform(scrollYProgress, [0, 1], [200, 140])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const [pointer, setPointer] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      setPointer({ x: (e.clientX / window.innerWidth - 0.5) * 2, y: (e.clientY / window.innerHeight - 0.5) * 2 })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section id="home" ref={containerRef} className="relative min-h-[90vh] md:min-h-screen overflow-hidden bg-black text-white flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <motion.div style={{ opacity }} className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.12),transparent_50%),radial-gradient(circle_at_80%_40%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none" />

      <motion.div
        style={{ filter: hue.to((h) => `hue-rotate(${h}deg)`) }}
        className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:py-40 grid md:grid-cols-12 gap-8"
      >
        <div className="md:col-span-7">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            Bærekraftig arkitektur, designet for fremtiden
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            className="mt-6 text-zinc-300 max-w-2xl"
          >
            Vi kombinerer miljøteknologi, AI-drevet analyse og menneskesentrert formgiving for å skape bygg som leverer i generasjoner.
          </motion.p>
          <div className="mt-10 flex gap-4">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-cyan-500/90 hover:bg-cyan-400 text-black font-semibold px-6 py-3 transition-all">
              Utforsk prosjekter
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 hover:border-white/40 text-white px-6 py-3 transition-all">
              Kontakt oss
            </a>
          </div>
        </div>
        <motion.div
          className="md:col-span-5 hidden md:block"
          style={{ transform: `perspective(1200px) rotateX(${pointer.y * -2}deg) rotateY(${pointer.x * 3}deg)` }}
        >
          <div className="h-72" />
        </motion.div>
      </motion.div>
    </section>
  )
}

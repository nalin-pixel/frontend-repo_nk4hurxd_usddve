import { motion } from 'framer-motion'
import { Leaf, Cpu, Building2 } from 'lucide-react'

const items = [
  { icon: Leaf, title: 'Bærekraft', desc: 'Livsløpsanalyse, materialoptimalisering og sirkulære løsninger.' },
  { icon: Cpu, title: 'AI-Design', desc: 'Parametrisk design og generative verktøy for optimale løsninger.' },
  { icon: Building2, title: 'Urbant Design', desc: 'Menneskesentrert byutvikling med natur og mobilitet i balanse.' },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-black text-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-5xl font-bold">Tjenester</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <Icon className="text-cyan-300" />
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-zinc-300 text-sm">{desc}</p>
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(60% 60% at 30% 20%, rgba(0,255,255,0.1), transparent)' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

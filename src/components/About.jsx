import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative bg-black text-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-6">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-5xl font-bold">
            Filosofi & Team
          </motion.h2>
          <p className="mt-6 text-zinc-300 leading-relaxed">
            Vår filosofi er enkel: arkitektur skal være vakker, sirkulær og intelligent. Vi designer med data,
            materialforståelse og dyp respekt for stedet \u2014 alltid med mennesket i sentrum.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6">
            {[1,2,3,4].map((i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <div className="h-10 w-10 rounded bg-gradient-to-br from-cyan-400 to-blue-600" />
                <p className="mt-4 text-zinc-300 text-sm">Tverrfaglig team med ingeniører, arkitekter og datasyn-spesialister.</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="md:col-span-6">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-1">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-500/10 to-blue-500/10" />
          </div>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  { id: 1, title: 'Vertical Forest Hub', tag: 'Bærekraft', color: 'from-cyan-500/20 to-emerald-500/20' },
  { id: 2, title: 'AI Modular Campus', tag: 'AI-Design', color: 'from-blue-500/20 to-indigo-500/20' },
  { id: 3, title: 'Urban Living Grid', tag: 'Urbant', color: 'from-purple-500/20 to-pink-500/20' },
  { id: 4, title: 'Zero Energy Tower', tag: 'Bærekraft', color: 'from-emerald-500/20 to-lime-500/20' },
]

export default function Projects() {
  const [hovered, setHovered] = useState(null)
  const [open, setOpen] = useState(null)

  return (
    <section id="projects" className="relative bg-black text-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold">Prosjekter</h2>
            <p className="mt-4 text-zinc-300">Et utvalg av våre pågående og konseptuelle prosjekter.</p>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.button
              key={p.id}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setOpen(p.id)}
              className={`group relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br ${p.color} p-0 text-left`}
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            >
              <div className="relative z-10 p-6">
                <span className="text-xs uppercase tracking-wider text-zinc-300">{p.tag}</span>
                <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-zinc-400 text-sm max-w-sm">Utforsker nye typologier som kombinerer teknologi, natur og sosial bærekraft.</p>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute -inset-[1px] bg-[radial-gradient(60%_60%_at_50%_50%,rgba(59,130,246,0.35),transparent)] animate-pulse" />
              </div>
              <motion.div
                className="absolute inset-0"
                animate={{
                  backgroundPosition: hovered === p.id ? ['0% 0%', '100% 100%'] : '0% 0%'
                }}
                transition={{ duration: 2, repeat: hovered === p.id ? Infinity : 0, repeatType: 'reverse' }}
                style={{ backgroundImage: 'linear-gradient(120deg, rgba(255,255,255,0.05) 0%, transparent 30%, transparent 70%, rgba(255,255,255,0.06) 100%)' }}
              />
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {open && (
            <motion.div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center px-6"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(null)}
            >
              <motion.div
                layoutId={`card-${open}`}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full rounded-2xl overflow-hidden border border-white/10 bg-zinc-900"
                initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }}
              >
                <div className="p-6 md:p-10">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl md:text-3xl font-semibold">{projects.find((x) => x.id === open)?.title}</h3>
                    <button onClick={() => setOpen(null)} className="text-zinc-400 hover:text-white">Lukk</button>
                  </div>
                  <div className="mt-6 grid md:grid-cols-12 gap-8">
                    <div className="md:col-span-8">
                      <div className="aspect-video rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent" />
                    </div>
                    <div className="md:col-span-4">
                      <div className="sticky top-6 space-y-6">
                        {['Konsept','Materialer','Energi','Mobilitet','Sosial verdi'].map((s, i) => (
                          <div key={s} className="border-l-2 pl-4 border-cyan-400/50">
                            <h4 className="text-white font-medium">{s}</h4>
                            <p className="mt-1 text-zinc-400 text-sm">Detaljer om {s.toLowerCase()} for prosjektet, strukturert og innsiktsfullt.</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

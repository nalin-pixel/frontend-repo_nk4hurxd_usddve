import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-black text-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <h2 className="text-3xl md:text-5xl font-bold">Kontakt</h2>
          <p className="mt-4 text-zinc-300">Fortell oss om visjonen din. Vi svarer raskt.</p>
          <div className="mt-8 space-y-2 text-zinc-300">
            <p>E-post: hello@aurora.studio</p>
            <p>Telefon: +47 22 33 44 55</p>
            <p>Adresse: Universitetsgata 7, Oslo</p>
          </div>
        </div>
        <div className="md:col-span-7">
          <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Navn" />
            <input className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="E-post" />
            <input className="md:col-span-2 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Tema" />
            <textarea rows={5} className="md:col-span-2 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Melding" />
            <div className="md:col-span-2">
              <motion.button whileTap={{ scale: 0.98 }} whileHover={{ y: -1 }} className="rounded-full bg-cyan-400 text-black font-semibold px-6 py-3">Send melding</motion.button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

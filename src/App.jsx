import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
        <footer className="border-t border-white/10 py-10 text-center text-zinc-400">© {new Date().getFullYear()} Aurora Studio — Fremtidens arkitektur</footer>
      </main>
    </div>
  )
}

export default App

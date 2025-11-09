import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Your Name — Cybersecurity Professional</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-slate-900">Top</a>
            <a href="#projects" className="hover:text-slate-900">Work</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

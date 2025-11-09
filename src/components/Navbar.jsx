import { Shield, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-slate-900">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
            <Shield className="h-5 w-5" />
          </span>
          <span className="tracking-tight">Amal Thomas</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#about" className="hover:text-slate-900">About</a>
          <a href="#skills" className="hover:text-slate-900">Skills</a>
          <a href="#projects" className="hover:text-slate-900">Projects</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-slate-100">
            <Github className="h-5 w-5 text-slate-700" />
          </a>
          <a aria-label="LinkedIn" href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-slate-100">
            <Linkedin className="h-5 w-5 text-slate-700" />
          </a>
          <a aria-label="Email" href="mailto:amal@example.com" className="p-2 rounded-md hover:bg-slate-100">
            <Mail className="h-5 w-5 text-slate-700" />
          </a>
        </div>
      </div>
    </header>
  );
}

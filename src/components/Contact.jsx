import { Mail, ArrowRight, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Open to collaborations
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">Let’s strengthen your security</h2>
            <p className="mt-3 text-white/70">Share your needs—assessment, pentest, or ongoing defense. I’ll respond within 24 hours.</p>
            <div className="mt-6 flex items-center gap-3">
              <a href="mailto:hiamalthomas@gmail.com" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10">
                <Mail className="h-4 w-4" />
                hiamalthomas@gmail.com
              </a>
              <a href="#" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 hover:bg-white/10">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" target="_blank" rel="noreferrer" aria-label="GitHub" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 hover:bg-white/10">
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
          <form onSubmit={(e)=>e.preventDefault()} className="rounded-2xl bg-white p-6 text-slate-900 shadow-xl">
            <div className="grid gap-4">
              <div>
                <label className="text-sm font-medium text-slate-700">Your Name</label>
                <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="you@company.com" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Message</label>
                <textarea rows="4" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Tell me about your goals" />
              </div>
              <button className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-white font-medium shadow hover:bg-indigo-700">
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

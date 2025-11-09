import { Mail, ArrowRight } from 'lucide-react';

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
              <p className="text-xs text-slate-500">Or email me directly: <a href="mailto:you@example.com" className="underline">you@example.com</a></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

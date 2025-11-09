import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/90" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-24">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Open to roles & collaborations
          </p>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Amal Thomas — Cybersecurity Portfolio
          </h1>
          <p className="mt-4 text-slate-700 text-lg">
            I secure systems, hunt vulnerabilities, and build resilient defenses. Explore skills, projects, and how I can help strengthen your organization.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-white font-medium shadow hover:bg-indigo-700">
              View Projects
            </a>
            <a href="#about" className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-slate-900 font-medium hover:bg-slate-50">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

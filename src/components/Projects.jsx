import { ExternalLink, Shield } from 'lucide-react';

const projects = [
  {
    title: 'Web App Pentest Report',
    desc: 'Comprehensive OWASP ASVS-aligned penetration test with prioritized remediation plan.',
    tags: ['OWASP', 'ASVS', 'Burp Suite', 'Auth'],
    link: '#',
  },
  {
    title: 'SIEM Detection Pack',
    desc: 'Custom Sigma rules and detections for common TTPs aligned to MITRE ATT&CK.',
    tags: ['Sigma', 'Splunk', 'MITRE ATT&CK'],
    link: '#',
  },
  {
    title: 'Cloud Hardening Guide',
    desc: 'Guardrails and automated checks for IAM, encryption, and network segmentation.',
    tags: ['AWS', 'Terraform', 'CIS Benchmarks'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Highlighted Work</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">Selected projects that showcase offensive and defensive expertise.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50">
            <Shield className="h-4 w-4" />
            Request a demo
          </a>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <a href={p.link} className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-3 text-sm text-slate-600">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ShieldCheck, Lock, Bug, Network, Terminal, Wifi } from 'lucide-react';

const skills = [
  { icon: ShieldCheck, title: 'Threat Modeling', desc: 'Identify attack surfaces and prioritize mitigations for robust security architectures.' },
  { icon: Lock, title: 'Penetration Testing', desc: 'Web, API, and network pentests with actionable remediation guidance.' },
  { icon: Bug, title: 'Vulnerability Management', desc: 'Scanning, triage, CVSS scoring, and coordinated remediation workflows.' },
  { icon: Network, title: 'Cloud & Network Security', desc: 'Hardening, IAM least-privilege, segmentation, and zero-trust patterns.' },
  { icon: Terminal, title: 'Blue/Red Teaming', desc: 'Detection engineering, adversary emulation, and purple team exercises.' },
  { icon: Wifi, title: 'Incident Response', desc: 'Playbooks, forensics, tabletop exercises, and post-incident reviews.' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Core Skills</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">A snapshot of the capabilities I use to protect products and infrastructure.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-700">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

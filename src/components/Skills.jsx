import { Code, Globe, Database, Shield, Wrench, Users } from 'lucide-react';

const categories = [
  {
    icon: Code,
    title: 'Programming',
    items: ['C', 'C++', 'Python', 'Java', 'JavaScript'],
  },
  {
    icon: Globe,
    title: 'Web',
    items: ['HTML', 'CSS', 'Basic Web Development'],
  },
  {
    icon: Database,
    title: 'Databases',
    items: ['SQL', 'SSAS', 'DBMS', 'JDBC'],
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    items: ['Port Scanning', 'Vulnerability Assessment', 'Log Analysis', 'Penetration Testing Basics', 'SOC Analysis'],
  },
  {
    icon: Wrench,
    title: 'Tools',
    items: ['Nmap', 'Burp Suite', 'OWASP ZAP', 'TryHackMe', 'GitHub', 'VS Code', 'Jupyter Notebook'],
  },
  {
    icon: Users,
    title: 'Soft Skills',
    items: ['Teamwork', 'Communication', 'Quick Learner', 'Time Management'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Skills</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">A clear snapshot of my technical and professional strengths.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(({ icon: Icon, title, items }) => (
            <div key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-700">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-indigo-600" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

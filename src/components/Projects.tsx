const PROJECTS = [
  {
    id: '01',
    name: 'SymxAI Analytics Platform',
    company: 'SymxAI',
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    highlight: 'Real-time inspection data & offline sync',
    link: null,
  },
  {
    id: '02',
    name: 'Podopolo',
    company: 'Podopolo',
    stack: ['Next.js', 'React', 'PostgreSQL'],
    highlight: 'Content & podcast platform',
    link: null,
  },
  {
    id: '03',
    name: 'BuyPower Electricity Vending',
    company: 'BuyPower Inc.',
    stack: ['React', 'Node.js', 'AWS', 'Docker'],
    highlight: 'Multi-tenant utility tokens',
    link: null,
  },
]

export function Projects() {
  return (
    <section className="py-24 px-6" id="projects">
      <div className="mx-auto max-w-6xl">
        <p className="section-label">Selected work</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
          Projects worth talking about
        </h2>
        <p className="text-slate-400 mb-12 max-w-xl">
          Full-stack systems I&apos;ve led or built from requirements to production.
        </p>
        <ul className="space-y-6">
          {PROJECTS.map((project, i) => (
            <li key={project.id}>
              <article className="group rounded-xl border border-slate-700/60 bg-slate-900/40 p-6 md:p-8 card-hover flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-slate-500 font-mono text-sm">{project.id}</span>
                    <h3 className="text-xl font-semibold text-slate-100">{project.name}</h3>
                  </div>
                  <p className="text-slate-400 text-sm mb-3">{project.company}</p>
                  <p className="text-slate-300 text-sm mb-4">{project.highlight}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-slate-800 px-2 py-0.5 text-xs text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 text-sm font-medium hover:text-sky-300 shrink-0"
                  >
                    View →
                  </a>
                )}
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

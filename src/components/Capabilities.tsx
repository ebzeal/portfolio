const CAPABILITIES = [
  {
    title: 'Frontend & UI',
    description: 'Building performant, accessible interfaces with React and TypeScript.',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind', 'Material UI'],
  },
  {
    title: 'Backend & APIs',
    description: 'Designing scalable services, APIs, and data systems.',
    items: ['Node.js', 'Python', 'Golang', 'NestJS', 'Express', 'FastAPI', 'REST', 'GraphQL', 'OAuth2', 'JWT'],
  },
  {
    title: 'Data & Storage',
    description: 'Relational modeling and high-throughput data workflows.',
    items: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'Redis'],
  },
  {
    title: 'Cloud & DevOps',
    description: 'Infrastructure, CI/CD, and production reliability.',
    items: ['AWS', 'Lambda', 'EC2', 'S3', 'Docker', 'CI/CD', 'Microservices'],
  },
  {
    title: 'Testing & Quality',
    description: 'Confidence through automated and E2E testing.',
    items: ['Jest', 'Cypress', 'Playwright', 'Integration testing'],
  },
]

export function Capabilities() {
  return (
    <section className="py-24 px-6" id="capabilities">
      <div className="mx-auto max-w-6xl">
        <p className="section-label">Capabilities</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
          What I know, and how I&apos;ve used it
        </h2>
        <p className="text-slate-400 mb-12 max-w-xl">
          Full-stack depth from product requirements to production deployment.
        </p>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap) => (
            <li
              key={cap.title}
              className="rounded-xl border border-slate-700/60 bg-slate-900/40 p-6 card-hover"
            >
              <h3 className="text-lg font-semibold text-slate-100 mb-2">{cap.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{cap.description}</p>
              <div className="flex flex-wrap gap-2">
                {cap.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-slate-800 px-2 py-0.5 text-xs text-slate-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

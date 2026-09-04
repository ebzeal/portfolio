const JOBS = [
  {
    company: 'SymxAI',
    period: 'Apr 2023 — March 2026',
    location: 'Ontario, Canada · full-time',
    role: 'Senior Software Engineer',
    bullets: [
      'Lead development across frontend and backend for a real-time analytics platform processing inspection data and media.',
      'Built React + TypeScript dashboards visualizing thousands of inspection records and field media assets.',
      'Designed scalable APIs and backend services using Node.js and PostgreSQL.',
      'Implemented offline-first sync for mobile clients; optimized queries, caching, and frontend performance.',
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'CesiumJS', 'Flutter', 'React Native', 'CDK', 'Microservices', 'Athena', 'DynamoDB', 'Postgresql', 'Sequelize'],
  },
  {
    company: 'Podopolo',
    period: 'Jun 2021 — Dec 2022',
    location: 'USA',
    role: 'Senior Software Engineer',
    bullets: [
      'Led full-stack development for a content and podcast platform used by thousands of users.',
      'Migrated frontend from React to Next.js for better performance and SEO.',
      'Designed backend APIs for engagement, analytics, and content delivery.',
      'Migrated data architecture from MongoDB to PostgreSQL for complex relational queries.',
    ],
    tags: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'MongoDB', 'AWS'],
  },
  {
    company: 'BuyPower Inc.',
    period: 'Mar 2020 — Dec 2020',
    location: 'Nigeria',
    role: 'Senior Software Engineer',
    bullets: [
      'Designed and built a multi-tenant electricity vending platform for utility token generation.',
      'Implemented React interfaces for billing, payment workflows, and transaction monitoring.',
      'Built Node.js backend APIs for token generation, billing, reconciliation, and payment integrations.',
      'Managed deployment with Docker, Nginx, and AWS EC2.',
    ],
    tags: ['React', 'Node.js', 'AWS', 'Docker'],
  },
  {
    company: 'Andela, EppMe Digitals, RCCG HQ, Placid Properties',
    period: '2008 — 2019',
    location: 'Various',
    role: 'Earlier Engineering Roles',
    bullets: [
      'Built and maintained full-stack applications using JavaScript, Node.js, PHP, Python, Ruby on Rails, MySQL, MongoDB, and PostgreSQL in Agile environments.',
    ],
    tags: ['JavaScript', 'Node.js', 'Python', 'PostgreSQL', 'Agile'],
  },
]

export function Career() {
  return (
    <section className="py-24 px-6" id="career">
      <div className="mx-auto max-w-6xl">
        <p className="section-label">Career</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12">
          Where I have worked
        </h2>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-700 hidden md:block" />
          <ul className="space-y-16">
            {JOBS.map((job) => (
              <li key={job.company + job.period} className="relative pl-0 md:pl-12">
                <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-sky-500 -translate-x-1.5 hidden md:block" />
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-100">{job.company}</h3>
                    <p className="text-slate-500 text-sm">{job.period}</p>
                  </div>
                  <p className="text-slate-400 text-sm">{job.location}</p>
                </div>
                <h4 className="text-sky-400 font-medium mb-4">{job.role}</h4>
                <ul className="list-disc list-inside space-y-2 text-slate-400 text-sm mb-4">
                  {job.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-slate-800 px-2 py-0.5 text-xs text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

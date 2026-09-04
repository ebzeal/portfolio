const HIGHLIGHTS = [

  {
    metric: 'MAP GIS',
    industry: 'Mining',
    companyType:'SaaS',
    title: 'SymxAI Asset Tracking',
    description: `Designed and built real-time inventory (trucks and loaders on mine site) tracking on a live
map with Geolocators, using CesiumJS, React, TypeScript, and short-polling in Node.js. This
showed the location of each asset as well as its operational and engine statuses in real time.`,
    tags: ['React', 'Resium', 'TypeScript', 'Node.js', 'PostgreSQL', 'CesiumJS', 'Geolocators', 'Short-polling'],
  },
  {
    metric: 'Real-time analytics',
    industry: 'Mining',
    companyType:'SaaS',
    title: 'SymxAI inspection platform',
    description: 'Web and Mobile Dashboards visualizing thousands of inspection records and field media; offline-first sync for mobile.',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'CDK', 'Microservices', 'Athena', 'DynamoDB', 'Postgresql', 'Sequelize', 'React Native', 'Flutter'],
  },
  {
    metric: 'Next.js migration',
    industry: 'Podcasting',
    companyType:'SaaS',
    title: 'Podopolo podcast platform',
    description: 'Migrated frontend to Next.js for better performance and SEO; MongoDB to PostgreSQL for relational data.',
    tags: ['Next.js', 'React', 'PostgreSQL', 'React Native'],
  },
  {
    metric: 'MongoDB to PostgreSQL',
    industry: 'Podcasting',
    companyType:'SaaS',
    title: 'Podopolo podcast platform',
    description: 'Migrated data architecture from MongoDB to PostgreSQL for complex relational queries.',
    tags: ['React', 'Node.js', 'AWS', 'Docker', 'React Native'],
  },
  {
    metric: 'Multi-tenant platform',
    industry: 'Fashion',
    companyType:'e-Commerce',
    title: 'The Fitting Room',
    description: '3D fitting room where buys can try clothes on in a virtual environment, using their 3D body scan tocheck size and fittings.',
    tags: ['React', 'Node.js', 'Three.js', 'WebGL', 'WebXR'],
  },
  {
    metric: 'Multi-tenant platform',
    industry: 'Energy',
    companyType:'Fintech',
    title: 'BuyPower electricity vending',
    description: 'Solely designed and built a multi‑tenant electricity/water vending platform',
    tags: ['React', 'Node.js', 'AWS', 'Docker'],
  },
]

export function Highlights() {
  return (
    <section className="py-24 px-6" id="live-products">
      <div className="mx-auto max-w-6xl">
        <p className="section-label">Live Products</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12">
          A few of production-grade products I have worked on
        </h2>
        <ul className="grid md:grid-cols-3 gap-6">
          {HIGHLIGHTS.map((item) => (
            <li
              key={item.title}
              className="rounded-xl border border-slate-700/60 bg-slate-900/40 p-6 card-hover"
            >
              <div className="text-sm font-medium text-sky-400 mb-2 flex flex-row items-center justify-between">
                {item.metric} <span className="text-green-800 text-sm ">{item.industry} - {item.companyType}</span></div>
              <h3 className="text-lg font-semibold text-slate-100 mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
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
    </section>
  )
}

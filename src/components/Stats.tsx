const STATS = [
  { value: '8+', label: 'years of engineering experience' },
  { value: 'Fintech · AI · Industrial', label: 'domains shipped in' },
  { value: 'Full-stack', label: 'frontend to production' },
  { value: 'AWS · TypeScript · React', label: 'core stack' },
]

export function Stats() {
  return (
    <section className="py-16 px-6 border-y border-slate-800/50">
      <div className="mx-auto max-w-6xl">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat) => (
            <li key={stat.label} className="text-center md:text-left">
              <div className="text-2xl md:text-3xl font-bold text-sky-400">{stat.value}</div>
              <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

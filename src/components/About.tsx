const EDUCATION = [
  { degree: 'BSc Computer Science', school: 'Algoma University', location: 'Ontario, Canada' },
  { degree: 'ND Electrical/Electronics Engineering', school: 'Osun State Polytechnic Iree', location: 'Nigeria' },
]

const CERTIFICATIONS = [
  'AWS Certified Cloud Practitioner',
  'Oracle Certified Java SE7 Associate & Professional',
]

export function About() {
  return (
    <section className="py-24 px-6" id="about">
      <div className="mx-auto max-w-4xl">
        <p className="section-label">About</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-8">
          My Philosophy
        </h2>
        <div className="prose prose-invert prose-slate max-w-none mb-12">
          <p className="text-slate-400 leading-relaxed mb-4">
            I&apos;m a senior full-stack engineer who believes the best software comes from
            understanding the problem deeply before writing code. Over eight years I&apos;ve
            built real-time analytics platforms, content and podcast systems, multi-tenant
            fintech products, and industrial inspection tools — each time focusing on
            reliable APIs, performant UIs, and systems that support real-world workflows.
          </p>
          <p className="text-slate-400 leading-relaxed">
            I care about clean abstractions, type safety, and shipping systems that scale.
            I&apos;m most energized when owning systems end-to-end — from product requirements
            to production deployment — and working with teams that value both engineering
            depth and user impact.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-lg font-semibold text-slate-100 mb-4">Education</h3>
          <ul className="space-y-3">
            {EDUCATION.map((edu) => (
              <li key={edu.school} className="text-slate-400">
                <span className="font-medium text-slate-300">{edu.degree}</span>
                <span className="text-slate-500"> — {edu.school}</span>
                <span className="text-slate-500"> · {edu.location}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-100 mb-4">Certifications</h3>
          <ul className="flex flex-wrap gap-3">
            {CERTIFICATIONS.map((cert) => (
              <li
                key={cert}
                className="rounded-lg border border-slate-700/60 bg-slate-900/40 px-4 py-2 text-sm text-slate-400"
              >
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

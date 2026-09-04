const LINKS = [
  { label: 'GitHub', href: 'https://github.com/ebzeal' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ebzeal' },
]

export function Contact() {
  return (
    <section className="py-24 px-6 border-t border-slate-800/50" id="contact">
      <div className="mx-auto max-w-2xl text-center">
        <p className="section-label">Contact</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
          Let&apos;s build something worth using
        </h2>
        <p className="text-slate-400 mb-10">
          Have a project in mind or want to connect? I&apos;d love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
          <a
            href="mailto:ebenezerajayi@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-sky-600 transition-colors"
          >
            ebenezerajayi@gmail.com
          </a>
          <span className="text-slate-500 text-sm">+1 (249) 525-6115</span>
        </div>
        <div className="flex items-center justify-center gap-6">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-sky-400 text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="mt-12 text-slate-500 text-sm">
          Ontario, Canada · Open to opportunities
        </p>
      </div>
    </section>
  )
}

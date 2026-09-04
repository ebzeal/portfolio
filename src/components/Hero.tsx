'use client'

import { useState } from 'react'
import { Chatbot } from '@/components/Chatbot'

export function Hero() {
  const [isChatActive, setIsChatActive] = useState(false)
  const textWidth = isChatActive ? 'max-w-none' : 'max-w-2xl'

  return (
    <section className="relative px-6 pb-24 pt-32">
      <div className={`mx-auto grid max-w-6xl items-center gap-12 transition-[grid-template-columns] duration-500 ease-out ${
        isChatActive ? 'lg:grid-cols-1' : 'lg:grid-cols-[1.15fr_0.85fr]'
      }`}>
        <div className={`mx-auto w-full transition-[max-width] duration-500 ease-out lg:mx-0 ${
          isChatActive ? 'order-1 max-w-none' : 'order-1 max-w-lg lg:order-2'
        }`}>
          <Chatbot onActiveChange={setIsChatActive} />
        </div>
        <div className={`w-full ${isChatActive ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}`}>
          <p className="section-label mb-2">Ontario, Canada</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-100 mb-6">
            Olusola Ajayi
          </h1>
          <p className={`text-xl md:text-2xl text-slate-400 ${textWidth} mb-8 leading-relaxed`}>
            Building scalable, user-centric systems.
          </p>
          <p className={`text-slate-400 ${textWidth} mb-10 leading-relaxed`}>
            A Senior Software, AI & Cloud Engineer with over a decade of experience building, deploying, and scaling production-grade software systems.
          </p>
          <p className={`text-slate-400 ${textWidth} mb-10 leading-relaxed`}>
            I design and build intelligent, event-driven, real-time, and distributed systems—from user-facing applications and AI-powered workflows to the cloud infrastructure that runs them. Experienced with AWS, Docker, Kubernetes, Terraform, Ansible, Monitoring, CI/CD, and cloud-native architectures, I focus on creating platforms that are scalable, resilient, observable, and cost-efficient.
          </p>
          <p className={`text-slate-400 ${textWidth} mb-10 leading-relaxed`}>
            I bring an end-to-end engineering mindset: translating product requirements into robust software, designing reliable architectures, integrating AI where it creates meaningful value, and automating the infrastructure and delivery pipelines required to run systems reliably in production.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-sky-600 transition-colors"
            >
              View projects
              <span aria-hidden>→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg border border-slate-600 px-5 py-2.5 text-sm font-medium text-slate-300 hover:border-sky-500/50 hover:text-sky-400 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

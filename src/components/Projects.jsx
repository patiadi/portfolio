import Reveal from './Reveal.jsx'
import { IconArrowUpRight } from './Icons.jsx'

const PROJECTS = [
  {
    id: '01',
    name: 'QFund11',
    role: 'Loan Management Platform',
    description:
      'An end-to-end loan management platform covering applications, approvals, and repayment tracking, built with a React front end talking to a Node/Express API backed by MySQL.',
    stack: ['React.js', 'Redux', 'Node.js', 'Express.js', 'MySQL'],
    href: '#',
  },
  {
    id: '02',
    name: 'Money Tree',
    role: 'Custom Client Lending Platform',
    description:
      'A bespoke lending platform built for a client, handling custom underwriting flows, dashboards, and secure JWT-authenticated access for borrowers and staff.',
    stack: ['React.js', 'TypeScript', 'Material-UI', 'JWT', 'MySQL'],
    href: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 border-t border-rule">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          {/* <p className="font-mono text-xs tracking-[0.3em] text-brass uppercase mb-3">Entry 004</p> */}
          <h2 className="font-display text-3xl text-paper mb-14">Selected Work</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 120}>
              <a
                href={p.href}
                className="group block h-full border border-rule p-8 hover:border-brass/50 transition-colors relative overflow-hidden"
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="font-mono text-xs text-brass/70">{p.id}</span>
                  <IconArrowUpRight className="w-5 h-5 text-muted group-hover:text-brass group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl text-paper mb-2">{p.name}</h3>
                <p className="font-mono text-xs tracking-widest text-brass uppercase mb-5">{p.role}</p>
                <p className="text-muted leading-relaxed mb-8">{p.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10px] tracking-wide text-muted border border-rule rounded-full px-2.5 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

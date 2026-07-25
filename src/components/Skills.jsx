import Reveal from './Reveal.jsx'

const LEDGER = [
  {
    code: 'FE',
    label: 'Front End',
    items: ['React.js', 'JavaScript (ES6+)', 'TypeScript', 'Redux', 'React Router'],
  },
  {
    code: 'BE',
    label: 'Back End',
    items: ['Node.js', 'Express.js', 'JWT Auth', 'MySQL'],
  },
  {
    code: 'UI',
    label: 'Styling & Forms',
    items: ['Tailwind CSS', 'Material-UI', 'Formik', 'React Testing Library'],
  },
  {
    code: 'TL',
    label: 'Tooling',
    items: ['Git', 'Jest', 'Webpack', 'Babel', 'Axios'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 border-t border-rule">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal className="flex items-baseline justify-between mb-12 flex-wrap gap-4">
          <div>
            {/* <p className="font-mono text-xs tracking-[0.3em] text-brass uppercase mb-3">Entry 003</p> */}
            <h2 className="font-display text-3xl text-paper">Stack Ledger</h2>
          </div>
          <p className="font-mono text-xs text-muted uppercase tracking-widest">Balanced &amp; in production</p>
        </Reveal>

        <div className="border-t border-rule">
          {LEDGER.map((row, i) => (
            <Reveal key={row.code} delay={i * 80}>
              <div className="grid grid-cols-[3rem_1fr] sm:grid-cols-[4rem_10rem_1fr] gap-4 sm:gap-8 py-6 border-b border-rule items-baseline group">
                <span className="font-mono text-brass/70 text-sm">{row.code}</span>
                <span className="font-display text-xl text-paper sm:col-span-1 col-span-2 sm:order-none order-first">
                  {row.label}
                </span>
                <div className="flex flex-wrap gap-x-2 gap-y-2 sm:col-start-3 col-span-2 sm:col-span-1">
                  {row.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs text-muted px-2.5 py-1 border border-rule rounded-full group-hover:border-brass/40 group-hover:text-paper transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

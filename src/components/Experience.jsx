import Reveal from './Reveal.jsx'

const ROLE = {
  company: 'Virinchi Limited',
  title: 'Software Developer — Full Stack (React.js)',
  period: '2022 — Present',
  location: 'Hyderabad, India',
  points: [
    'Build and maintain front-end architecture for fintech lending platforms using React.js, Redux, and TypeScript.',
    'Develop and integrate REST APIs with Node.js and Express, backed by MySQL.',
    'Implement secure, JWT-authenticated flows and form-heavy UI with Formik and React Hook Form.',
    'Write and maintain test coverage with Jest and React Testing Library.',
  ],
}

export default function Experience() {
  return (
    <section
      id="resume"
      className="relative py-24 md:py-32 border-t border-rule"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal className="flex items-baseline justify-between mb-14 flex-wrap gap-4">
          <div>
            {/* <p className="font-mono text-xs tracking-[0.3em] text-brass uppercase mb-3">Entry</p> */}
            <h2 className="font-display text-3xl text-paper">Experience</h2>
          </div>
          <a
            href="/public/resume.pdf"
            download="Aditya-Pati-Resume.pdf"
            className="font-mono text-xs tracking-widest uppercase border border-rule text-muted px-4 py-2 hover:border-brass hover:text-brass transition-colors"
          >
            Download Résumé ↓
          </a>
        </Reveal>

        <Reveal>
          <div className="grid sm:grid-cols-[10rem_1fr] gap-4 sm:gap-10 border-t border-b border-rule py-10">
            <div>
              <p className="font-mono text-xs text-brass/70 tracking-widest">
                {ROLE.period}
              </p>
              <p className="font-mono text-xs text-muted mt-1">
                {ROLE.location}
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl text-paper">{ROLE.title}</h3>
              <p className="font-mono text-xs tracking-widest text-brass uppercase mt-1 mb-6">
                {ROLE.company}
              </p>
              <ul className="space-y-3">
                {ROLE.points.map((pt) => (
                  <li
                    key={pt}
                    className="text-muted leading-relaxed flex gap-3"
                  >
                    <span className="text-brass/60 font-mono">—</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

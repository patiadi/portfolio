import Reveal from './Reveal.jsx'
import { IconGithub, IconLinkedin, IconMail, IconTwitter } from './Icons.jsx'
import {IconReact,IconNode,IconTypeScript,IconMySQL,IconRedux,IconExpress,IconMUI,IconJavaScript,} from './TechIcons.jsx'
import adiPhoto from '../images/adiPassphoto.jpeg';

const ORBIT = [
  { label: 'React', Icon: IconReact },
  { label: 'Node.js', Icon: IconNode },
  { label: 'JavaScript', Icon: IconJavaScript },
  { label: 'TypeScript', Icon: IconTypeScript },
  { label: 'MUI', Icon: IconMUI },
  { label: 'MySQL', Icon: IconMySQL },
  { label: 'Redux', Icon: IconRedux },
  { label: 'Express', Icon: IconExpress },
]

function orbitStyle(index, total, radiusPct = 62) {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2
  const left = 50 + Math.cos(angle) * radiusPct
  const top = 50 + Math.sin(angle) * radiusPct
  return {
    left: `${left}%`,
    top: `${top}%`,
    transform: 'translate(-50%, -50%)',
  }
}

const SOCIALS = [
  { Icon: IconTwitter, href: 'https://x.com/adityan26873742?t=bUiYV_k4LGZ_WLKk2dfStA&s=09', label: 'Twitter' },
  { Icon: IconLinkedin, href: 'https://www.linkedin.com/in/adityanarayan-pati-70b2b2148/', label: 'LinkedIn' },
  { Icon: IconGithub, href: 'https://github.com/patiadi', label: 'GitHub' },
  { Icon: IconMail, href: 'mailto:adityanarayanpati7@gmail.com', label: 'Email' },
]

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* ledger ruled background */}
      <div className="absolute inset-0 bg-ledger-lines opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/95 to-ink pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">
        <Reveal>
          <h1 className="font-display font-medium text-5xl sm:text-6xl lg:text-7xl leading-[1.03] text-paper">
            Adityanarayan
          </h1>
          <p className="mt-5 font-mono text-sm sm:text-base tracking-wide text-brass uppercase">
            Full Stack Developer — React.js Focus
          </p>
          <p className="mt-6 max-w-md text-muted leading-relaxed">
            I build and balance the books on lending platforms — turning fintech
            complexity into interfaces that are fast, precise, and trusted with
            other people's money.
          </p>

          {/* mini balance strip */}
          <dl className="mt-10 grid grid-cols-3 max-w-md border-t border-rule">
            <div className="py-4 pr-4 border-r border-rule">
              <dt className="font-mono text-[10px] tracking-widest text-muted uppercase">Experience</dt>
              <dd className="font-display text-2xl text-paper mt-1">3.8 yrs</dd>
            </div>
            <div className="py-4 px-4 border-r border-rule">
              <dt className="font-mono text-[10px] tracking-widest text-muted uppercase">Domain</dt>
              <dd className="font-display text-2xl text-paper mt-1">Fintech</dd>
            </div>
            <div className="py-4 pl-4">
              <dt className="font-mono text-[10px] tracking-widest text-muted uppercase">Platforms</dt>
              <dd className="font-display text-2xl text-paper mt-1">02 live</dd>
            </div>
          </dl>

          <div className="mt-10 flex items-center gap-5">
            {SOCIALS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-full border border-rule flex items-center justify-center text-muted hover:text-brass hover:border-brass transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="relative flex justify-center md:justify-end">
          <div className="relative w-56 h-56 sm:w-72 sm:h-72">
            <div className="absolute inset-0 rounded-full border border-brass/30" />
            <div className="absolute -inset-4 rounded-full border border-rule" />
            <div className="absolute inset-0 rounded-full bg-ink-surface flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#161B23' }}>
              <span className="font-display text-6xl text-brass/80">  <img src={adiPhoto} alt="AP" /></span>
            </div>

            {ORBIT.map((o, i) => (
              <span
                key={o.label}
                title={o.label}
                aria-label={o.label}
                className="absolute w-11 h-11 rounded-full border border-rule bg-ink-soft flex items-center justify-center text-paper shadow-lg hover:border-brass hover:text-brass hover:scale-110 transition-all"
                style={{ ...orbitStyle(i, ORBIT.length), backgroundColor: '#12161D' }}
              >
                <o.Icon className="w-5 h-5" />
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

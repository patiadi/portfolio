import Reveal from './Reveal.jsx'
import { IconGithub, IconLinkedin, IconMail, IconTwitter } from './Icons.jsx'

const SOCIALS = [
  { Icon: IconMail, label: 'Email', href: 'mailto:adityanarayanpati7@gmail.com' },
  { Icon: IconLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/adityanarayan-pati-70b2b2148/' },
  { Icon: IconGithub, label: 'GitHub', href: 'https://github.com/patiadi' },
  { Icon: IconTwitter, label: 'Twitter', href: 'https://x.com/adityan26873742?t=bUiYV_k4LGZ_WLKk2dfStA&s=09' },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 border-t border-rule">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          {/* <p className="font-mono text-xs tracking-[0.3em] text-brass uppercase mb-3">Entry</p> */}
          <h2 className="font-display text-4xl sm:text-5xl text-paper max-w-xl leading-tight">
            Have a lending or fintech build in mind? Let's balance it together.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 flex flex-wrap gap-x-12 gap-y-6">
            {SOCIALS.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-3 font-mono text-sm text-muted hover:text-brass transition-colors"
              >
                <Icon className="w-4 h-4" />
                {label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

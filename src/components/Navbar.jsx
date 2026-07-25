import { useEffect, useState } from 'react'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Ledger', href: '#skills' },
  { label: 'Work', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          scrolled ? 'bg-ink/90 backdrop-blur border-b border-rule' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <span className="w-10 h-10 rounded-full border border-brass/60 flex items-center justify-center font-display text-sm text-brass tracking-wide group-hover:bg-brass group-hover:text-ink transition-colors">
              AP
            </span>
            {/* <span className="hidden sm:block font-mono text-xs tracking-[0.2em] text-muted uppercase">
              Ledger&nbsp;No.&nbsp;001
            </span> */}
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {LINKS.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-xs tracking-widest uppercase text-muted hover:text-paper transition-colors relative"
              >
                <span className="text-brass/70 mr-1"></span>
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="font-mono text-xs tracking-widest uppercase border border-brass text-brass px-4 py-2 hover:bg-brass hover:text-ink transition-colors"
            >
              Hire Me
            </a>
          </nav>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="md:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5 border border-rule rounded"
          >
            <span className="w-5 h-px bg-paper" />
            <span className="w-5 h-px bg-paper" />
            <span className="w-5 h-px bg-paper" />
          </button>
        </div>
      </header>

      {/* Mobile slide-in menu */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-ink/80" onClick={close} />
        <div
          className={`absolute right-0 top-0 h-full w-[82%] max-w-sm bg-ink-soft bg-ink-soft border-l border-rule px-8 py-8 flex flex-col transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ backgroundColor: '#12161D' }}
        >
          <div className="flex items-center justify-between mb-14">
            <span className="font-mono text-xs tracking-[0.2em] text-muted uppercase">Menu</span>
            <button
              onClick={close}
              aria-label="Close menu"
              className="w-9 h-9 border border-rule rounded flex items-center justify-center text-muted"
            >
              ✕
            </button>
          </div>
          <nav className="flex flex-col gap-8">
            {LINKS.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                className="font-display text-3xl text-paper hover:text-brass transition-colors"
              >
                <span className="font-mono text-sm text-brass/70 mr-3 align-middle">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={close}
            className="mt-auto font-mono text-xs tracking-widest uppercase border border-brass text-brass text-center px-4 py-3 hover:bg-brass hover:text-ink transition-colors"
          >
            Hire Me
          </a>
        </div>
      </div>
    </>
  )
}

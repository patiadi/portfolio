// Minimal line-icon interpretations of the stack, drawn to match the
// ledger aesthetic (currentColor stroke, 24x24 viewBox) — not brand logo
// files, just clean glyphs that read clearly at badge size.

export const IconReact = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...props}>
    <circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none" />
    <ellipse cx="12" cy="12" rx="9" ry="3.6" />
    <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" />
  </svg>
)

export const IconNode = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
    <path
      d="M12 2.5 20.5 7v10L12 21.5 3.5 17V7z"
      strokeLinejoin="round"
    />
    <path d="M12 2.5v19M3.5 7l8.5 5 8.5-5M3.5 17l8.5-5" strokeLinejoin="round" strokeLinecap="round" opacity="0.5" />
  </svg>
)

export const IconTypeScript = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8 9h4M10 9v7" strokeLinecap="round" />
    <path d="M14.5 15c0 .8.7 1.2 1.6 1.2s1.6-.4 1.6-1.1c0-.9-.8-1.1-1.6-1.3-.9-.2-1.6-.5-1.6-1.3 0-.7.7-1.1 1.5-1.1.8 0 1.4.3 1.6.9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
export const IconJavaScript = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path
      d="M9.5 8.5v6.2c0 1.2-.6 1.8-1.6 1.8-.7 0-1.2-.3-1.6-.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.5 15c0 .8.8 1.5 1.8 1.5s1.7-.5 1.7-1.2c0-.9-.9-1.2-1.8-1.4-1-.2-1.8-.6-1.8-1.5 0-.8.8-1.3 1.7-1.3.9 0 1.5.4 1.7 1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export const IconMySQL = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
    <ellipse cx="12" cy="5.5" rx="8" ry="3" />
    <path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13" strokeLinecap="round" />
    <path d="M4 11c0 1.7 3.6 3 8 3s8-1.3 8-3M4 16c0 1.7 3.6 3 8 3s8-1.3 8-3" />
  </svg>
)

export const IconRedux = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...props}>
    <circle cx="17.5" cy="17.5" r="1.8" fill="currentColor" stroke="none" />
    <circle cx="6" cy="18.5" r="1.8" fill="currentColor" stroke="none" />
    <circle cx="7" cy="5" r="1.8" fill="currentColor" stroke="none" />
    <path
      d="M7 5c5.5-1.5 10 1.6 10.5 8"
      strokeLinecap="round"
    />
    <path
      d="M17.5 17.5c-4.5 2.5-11 1-12.5-5"
      strokeLinecap="round"
    />
    <path
      d="M6 18.5c-3-3.5-2.5-9 2-12"
      strokeLinecap="round"
    />
  </svg>
)

export const IconExpress = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
    <path d="M3 16c1.2 0 1.8-.5 2.6-1.6l3-4.2c.6-.9 1.2-1.5 2.2-1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 8c1.2 0 1.8.5 2.6 1.6l5.6 7.8c.8 1.1 1.4 1.6 2.6 1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 13c0-2.5 1.6-4.5 3.8-4.5S21 10.3 21 12.7v.3h-6.9" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.3 15.3c.6.9 1.7 1.5 2.9 1.5 1 0 1.9-.4 2.5-1" strokeLinecap="round" />
  </svg>
)

export const IconMUI = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
    <path d="M4 8.5 12 4l8 4.5v7L12 20l-8-4.5z" strokeLinejoin="round" />
    <path d="M4 8.5 12 13l8-4.5M12 13v7" strokeLinejoin="round" strokeLinecap="round" opacity="0.55" />
  </svg>
)

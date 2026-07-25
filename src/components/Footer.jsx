export default function Footer() {
  return (
    <footer className="border-t border-rule py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[11px] tracking-widest text-muted uppercase">
          © {new Date().getFullYear()} Aditya Pati — Ledger closed, books balanced.
        </p>
        <a
          href="#home"
          className="font-mono text-[11px] tracking-widest text-muted hover:text-brass uppercase transition-colors"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}

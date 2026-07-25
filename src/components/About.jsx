import Reveal from './Reveal.jsx'
import adiPhoto from '../images/adiPassphoto.jpeg';

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 border-t border-rule"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-[220px_1fr] gap-12 md:gap-20">
        <Reveal>
          {/* <p className="font-mono text-xs tracking-[0.3em] text-brass uppercase mb-3">Entry</p> */}
          <h2 className="font-display text-3xl text-paper">About</h2>
        </Reveal>

        <Reveal delay={100}>
          {/* <div className="w-20 h-20 rounded-full border border-brass/40 flex items-center justify-center mb-8 overflow-hidden">
            <img
              src={adiPhoto}
              alt="AP"
              className="w-full h-full object-cover rounded-full"
            />
          </div> */}
          <p className="text-lg sm:text-xl leading-relaxed text-paper/90 max-w-2xl">
            Hello there — I'm Aditya, a full stack developer with 3.8+ years
            building software for the lending and fintech world at Virinchi
            Limited in Hyderabad. My focus sits on the front end: React.js,
            Redux,JavaScript and TypeScript, wired into Node.js and Express
            services with MySQL underneath.
          </p>
          <p className="mt-6 text-muted leading-relaxed max-w-2xl">
            I came into software from an unlikely starting point — a mechanical
            engineering degree — and that path taught me to care about how
            systems actually hold together under load, not just how they look.
            Day to day, that means shipping loan management and lending
            platforms where accuracy, auth, and clean state management aren't
            optional. I've worked across the stack: reusable component libraries
            in Material-UI and Tailwind, form-heavy flows with Formik and React
            Hook Form, JWT-secured APIs, and test coverage with Jest and React
            Testing Library.
          </p>
          <p className="mt-6 text-muted leading-relaxed max-w-2xl">
            Outside the ticket queue, I'm usually refining this portfolio,
            tightening up my resume, or quietly shipping side projects on
            GitHub.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

# Aditya Pati — Portfolio

A React (Vite + Tailwind CSS) personal portfolio with a "ledger" visual
identity — built for a fintech/lending-focused full stack developer.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## What to personalize before publishing

- **Photo**: swap the "AP" monogram circles in `src/components/Hero.jsx` and
  `src/components/About.jsx` for a real photo (an `<img>` inside the circular
  frame works — keep the `rounded-full overflow-hidden` wrapper).
- **Links**: update the placeholder `href="#"` values in `Hero.jsx`,
  `Contact.jsx`, and `Projects.jsx` with your real LinkedIn, GitHub, X/Twitter,
  email, and project URLs.
- **Résumé file**: point the "Download Résumé" button in `Experience.jsx` at
  your actual PDF (e.g. drop it in `public/` and link to `/resume.pdf`).
- **Dates**: `Experience.jsx` has a placeholder `2022 — Present` for Virinchi
  — adjust to your real start date.
- **Project links**: `Projects.jsx` cards for QFund11 and Money Tree currently
  link to `#` — point them at live URLs or case-study pages if you have them.

## Structure

```
src/
  components/
    Navbar.jsx       fixed nav + mobile slide-in menu
    Hero.jsx          intro, stats strip, orbiting stack badges
    About.jsx
    Skills.jsx         "stack ledger" register
    Experience.jsx     role timeline
    Projects.jsx        QFund11 / Money Tree cards
    Contact.jsx
    Footer.jsx
    Reveal.jsx          scroll-reveal wrapper (IntersectionObserver)
    Icons.jsx           inline SVG icon set
  App.jsx
  index.css
  main.jsx
```

## Deploying

Works out of the box on Vercel or Netlify — just point either at this repo,
build command `npm run build`, output directory `dist`.

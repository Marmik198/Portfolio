# Portfolio (Next.js + Material UI)

A single-page portfolio themed from one primary colour, with animated sections (About, Skills, Experience, Internships, Education, Awards and Achievements, Projects, Freelancing, Certificates, Contact). Nav links scroll to each section with an eased animation; the nav bar has a sliding indicator, active-section dot and scroll-progress line. Elements animate individually: split-text reveals, cards that tilt and light up under the cursor, magnetic buttons, a self-drawing timeline and a scroll-reactive marquee. Dark and light modes, responsive down to mobile, and reduced-motion support.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

Needs Node.js 18.17 or newer.

## Edit your content

Everything you see on the page comes from **`src/data/portfolio.js`**. Search that file for `TODO` and replace:

- name, email, phone, LinkedIn and GitHub links
- GitHub links on the personal projects
- the `education` list (school or college, score, and an optional `subjects` list)
- the `certifications` list (three placeholder entries; add your own or delete them)
- the freelancing availability line, and `freelancing.caseStudies` (empty by default; add your own case studies)

Your resume PDF lives at `public/Marmik_Shah_Resume.pdf`. Replace it with your latest file, keeping the same name or updating `profile.resume`.
The Resume buttons add the GitHub Pages base path (`/Protfolio`) automatically, so the download works on the deployed site.

### Logos

Experience, Internships, Education and Projects each have a logo slot. Until you add a logo it shows initials.
Put the image in `public/logos/` (square works best, PNG or SVG) and set `logo` on the entry in `src/data/portfolio.js`, for example `logo: '/logos/waiterio.png'`.
The GitHub Pages base path is added automatically.

## Change the look

The whole theme is generated from **one primary colour**. Open `src/theme/tokens.js` and change `PRIMARY` (default `#5B4BFF`). Backgrounds, surfaces, borders, text tints, glows, gradients and the hero diagram all follow it, in both dark and light mode.

- Fonts: Sora (headings), Manrope (body), Fira Code (small labels). Self-hosted through `@fontsource`, set in `FONTS` in `src/theme/tokens.js` and imported in `src/app/layout.js`.
- Typography and component defaults: `src/theme/ThemeRegistry.js`
- Animation building blocks (spotlight and tilt cards, magnetic buttons, split-text reveals, glow buttons): `src/components/ui.js`
- Background mesh, floating shapes and cursor ring: `src/components/Backdrop.js`, `src/components/Cursor.js`
- Scroll animation speed and easing: `src/lib/scroll.js`

## Deploy

Push to GitHub and import the repo into Vercel. No environment variables are needed.

## Stack

Next.js 14 (App Router), React 18, Material UI 5, Emotion, Framer Motion, Fontsource.

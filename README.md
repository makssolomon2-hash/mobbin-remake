## Mobbin Remake

<img width="1280" height="720" alt="mobbin-gif" src="https://github.com/user-attachments/assets/a8a73a98-a8b7-474f-996a-c0d73b65d9b6"/>
A frontend recreation of the [Mobbin](https://mobbin.com) marketing/landing experience — the popular UI & UX design reference library.

Built as a practice / portfolio project to study modern landing-page patterns, scroll-driven animation, and interactive backgrounds.

![Mobbin](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?logo=greensock&logoColor=white)

## Features

- **Hero section** — headline, CTAs, and “Trusted by” logos matching Mobbin’s marketing page
- **Interactive dot background** — canvas-based particle field that reacts to mouse movement
- **Animated navbar** — scroll-aware navigation with GSAP + ScrollTrigger
- **Join / video section** — promotional content block
- **Floating icons gallery** — scroll-triggered scatter + continuous floating motion of app icons
- Responsive layout with custom breakpoints (including a `2k` breakpoint)

## Tech Stack

| Tool | Purpose |
|------|---------|
| [React 19](https://react.dev) | UI |
| [Vite 8](https://vitejs.dev) | Build tool & dev server |
| [Tailwind CSS 4](https://tailwindcss.com) | Styling |
| [GSAP 3](https://gsap.com) + `@gsap/react` | Animations (ScrollTrigger, SplitText, TextPlugin) |

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm (or pnpm / yarn)

### Install

```bash
git clone https://github.com/makssolomon2-hash/mobbin-remake.git
cd mobbin-remake
npm install
```

### Development

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```
mobbin-remake/
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── src/
    ├── main.jsx              # App entry
    ├── App.jsx               # Root layout & section composition
    ├── index.css             # Tailwind + global styles
    ├── App.css
    ├── components/
    │   ├── Hero.jsx
    │   ├── JoinVideo.jsx
    │   ├── FloatingIcons.jsx
    │   └── ui/
    │       ├── NavBar.jsx
    │       ├── HeroBackground.jsx   # Interactive canvas dots
    │       └── ...
    ├── constants/            # Image lists & positions for floating icons
    ├── data/
    ├── assets/               # Static images / icons
    └── ref/                  # Design reference screenshots
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Notes

- This is an **unofficial fan remake** for learning and portfolio purposes. It is not affiliated with or endorsed by [Mobbin](https://mobbin.com).
- Some sections and interactions are still works in progress (see `src/ref/` for design references).
- Large image assets live under `src/assets/`.

## Media

<img width="2560" height="1440" alt="Screenshot 2026-10-12 195936" src="https://github.com/user-attachments/assets/7ed16dde-b67f-4a37-bd2d-a79a17ecfab6" />
<img width="2560" height="1440" alt="Screenshot 2026-10-12 195953" src="https://github.com/user-attachments/assets/e8708759-2c4a-4756-833a-6281b3981a19" />
<img width="2560" height="1440" alt="Screenshot 2026-10-12 195946" src="https://github.com/user-attachments/assets/e7a7c1f0-85f6-414d-b3ab-9c1c1cfaf3d9" />
<img width="2560" height="1440" alt="Screenshot 2026-10-12 195957" src="https://github.com/user-attachments/assets/7596ae5e-61be-481f-94c8-b7b634f5ba6a" />

## License

This project is provided as-is for educational use. Mobbin branding, copy, and design are the property of their respective owners.

---

Inspired by [mobbin.com](https://mobbin.com)


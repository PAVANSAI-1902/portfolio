# Pavansai Rangdal — Portfolio v2

A fully redesigned portfolio with modern animations, 3D scroll effects, and a dark terminal aesthetic. Built with Next.js 14, Framer Motion, and Tailwind CSS.

## ✨ What's New in v2

- **Dark terminal aesthetic** — Deep dark bg (#080A0F) with teal (#00E5A0) + purple (#7B61FF) + coral (#FF6B6B) accents
- **Custom fonts** — Clash Display (headings) + Cabinet Grotesk (body) + JetBrains Mono (code)
- **Animated hero** — Parallax scroll, floating particles, 3D code card with blinking cursor
- **Skill bars** — Animated on scroll with intersection observer
- **Tech marquee** — Auto-scrolling tech stack strip
- **Project cards** — Hover 3D lift, tag system, live/GitHub links
- **Timeline experience** — Gradient-linked vertical timeline
- **Scroll progress bar** — Framer spring-based reading indicator
- **Custom cursor glow** — Mouse-tracking radial gradient
- **Noise texture overlay** — Subtle grain for depth
- **Grid background** — Subtle dot-grid throughout hero
- **Fully responsive** — Mobile nav with animated dropdown
- **Copy-to-clipboard** email in contact section
- **Static export** — Netlify-ready with `next export`

## 🚀 Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 14 (App Router compatible) |
| Animations | Framer Motion |
| Styling | Tailwind CSS + CSS Variables |
| Fonts | Clash Display, Cabinet Grotesk, JetBrains Mono |
| Deployment | Netlify (static export) |

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Dev server
npm run dev

# Build for production
npm run build

# Static export for Netlify
npm run export
```

## 📁 Structure

```
portfolio/
├── pages/
│   ├── _app.jsx         # Global styles + layout
│   ├── _document.jsx    # Font preloading, meta
│   └── index.jsx        # Main portfolio page (all sections)
├── styles/
│   └── globals.css      # CSS variables, animations, utilities
├── public/              # Static assets
├── next.config.js       # Static export config
├── tailwind.config.js   # Tailwind + custom tokens
└── netlify.toml         # Netlify build config
```

## 🎨 Design System

### Colors
```css
--bg: #080A0F        /* deep space black */
--surface: #0E1118   /* card backgrounds */
--panel: #131825     /* nested elements */
--border: #1E2535    /* borders */
--accent: #00E5A0    /* teal — primary actions */
--accent2: #7B61FF   /* purple — secondary */
--accent3: #FF6B6B   /* coral — highlights */
```

### Typography
- **Headings**: Clash Display (fontshare) — 600 weight
- **Body**: Cabinet Grotesk (fontshare) — 400/500
- **Code**: JetBrains Mono — 400

## 📝 Customization

To update content, edit these arrays at the top of `pages/index.jsx`:

- `PROJECTS` — add/remove projects
- `CERTIFICATIONS` — add new certs
- `EXPERIENCE` — update work history
- `SKILLS` — adjust skill percentages
- `PUBLICATIONS` — add research papers

## 🌐 Deploy to Netlify

1. Push to `PAVANSAI-1902/portfolio` on GitHub
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `out`

---

Made with 🟢 by Pavansai Rangdal

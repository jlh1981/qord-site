# qord

A methodology and protocol for preserving the continuity of understanding across any boundary the work touches.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

This project is designed for Vercel deployment via GitHub.

1. Create a GitHub repo (e.g., `qord-site`)
2. Push this project to the repo
3. Connect the repo to Vercel
4. Point `theqord.com` DNS to Vercel when ready

### Using Claude Code

```
cd /path/to/qord-site
git init
git add .
git commit -m "initial site build"
git remote add origin https://github.com/YOUR_USER/qord-site.git
git push -u origin main
```

After that, the update cycle is:
1. Make changes here in Claude.ai
2. Download the zip, unzip into project folder
3. Tell Claude Code what changed, it pushes
4. Vercel rebuilds automatically

## Stack

- Next.js 14 (App Router)
- Static export
- No frameworks, no Tailwind — custom CSS design system
- Google Fonts: Silkscreen (headings), Space Mono (body)
- 1-bit Early Mac aesthetic

## File Map

```
qord-site/
  src/
    app/
      page.jsx              ← Single-page site
      layout.jsx            ← Root layout + metadata
      globals.css           ← Full design system
    components/
      MenuBar.jsx           ← Fixed top nav
      Window.jsx            ← Reusable Mac window chrome
      ScanLine.jsx          ← Load animation
      Hero.jsx              ← Hero section
      Problem.jsx           ← The problem + three lines
      Protocol.jsx          ← How it works (4 steps)
      Toolkit.jsx           ← 6-item grid
      About.jsx             ← Origin story
      CTA.jsx               ← Call to action
      Footer.jsx            ← Footer
  public/
    images/                 ← All brand assets
    favicon.png
```

## License

Content and concept: CC BY-NC 4.0 — Justin Lee Hodges

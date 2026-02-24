# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server at localhost:5173
npm run build      # Production build
npm run preview    # Preview production build locally
npm run screenshot # Capture full-page screenshots via Puppeteer (requires dev server running)
```

The screenshot script outputs timestamped folders to `references/captures/` covering both pages at desktop (1920x1080) and mobile (375x667).

## Architecture

React + Vite SPA with React Router. Two routes:

- `/` → `HomePage` — about section with alternating image/text cards, milestone block, modal trigger
- `/community` → `CommunityPage` — event gallery page

**Component hierarchy:**
- Pages compose: `Navbar` + `Hero` + page-specific content + `Footer`
- `CommunityPage` uses `EventSection` which wraps `Carousel` and testimonials
- `HomePage` uses `Modal` for card detail view

**Content model:**
- All event data is hardcoded directly in page files (no CMS, no API)
- Media lives in `public/yap_media/` organized by event folder (images + optional video + writeup.md)
- Adding a new event = add images to `public/yap_media/<event>/`, define an object in `CommunityPage.jsx`, render `<EventSection />`

## Design System

Tailwind with a custom palette in `tailwind.config.js`:

| Token | Hex | Usage |
|---|---|---|
| `yap-yellow` | `#F5C800` | Hero bg, accent, CTAs |
| `yap-red` | `#B81C24` | Borders, active states, dots |
| `yap-green` | `#1B6E3A` | Navbar bg |
| `yap-dark` | `#1C0A00` | Footer bg |
| `yap-light` | `#F7F0E3` | Page/section bg |
| `yap-text` | `#1E1008` | Body text |
| `yap-muted` | `#6B5744` | Secondary text |

Font: Noto Serif (Google Fonts) for everything — both `font-serif` and `font-sans` map to it. Base font-size is 21px.

Page background is `vector.webp` tiled at 300×300px over `#F7F0E3`. The About section uses `vector.svg` as a full-cover background.

Max content width is `max-w-[70vw]` throughout.

## Intent

This is a heritage/memorial site for the Yap Fraternity (Cebu Chapter), a Chinese-Filipino socio-civic family organization. Aesthetic priority: dignity, simplicity, and cultural weight — not marketing. Avoid over-engineered features. No backend, no database, no external APIs.

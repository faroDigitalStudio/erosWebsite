# erosWebsite
## Website for Eros Wedding & Event Photography, a Metalumina endeavor
**Live:** [erosphotos.com](https://erosphotos.com/) • **Pages:** [erosPhotography.github.io](https://erosPhotography.github.io)

**Version:** 1.2.0 (2025-09-26)

---

## Table of Contents
- [Structure of the Site](#structure-of-the-site)
  - [Layout](#layout)
  - [Features](#features)
  - [Tech](#tech)
  - [Brand](#brand)
- [Planning](#planning)
- [Updates / Changelog](#updates--changelog)

---

## Structure of the Site
Eros is a modern, art-forward wedding & event photography brand. The site showcases the experience, curated work, and a clear booking funnel.

### Layout
- **About**  
  Philosophy, approach, and service area (Harlingen & RGV; travel welcome).
- **Portfolio**  
  Curated highlights (currently stock placeholders with descriptive alts).
- **Contact**  
  Two-step conversion (Book a 30-Minute Wedding Vision Call + Email), social links.

### Features
- Centered hero with headline: **“Unveiling Love, Celebrating Connection.”**
- Subtitle: **Modern Wedding & Event Photography for the Rio Grande Valley**
- Feature chips: **Real Moments • Clean Edits • A Little Edge • Drone Available**
- About chips (mini highlight row): **Real • Beautiful • Present**
- Smooth in-page navigation, image lightbox (magnify overlay)
- SEO foundations: canonical, OG/Twitter cards, descriptive alt text
- LocalBusiness JSON-LD (Harlingen/RGV)
- External links (social + Calendly) open in new tabs with `rel="noopener"`

### Tech
- **Stack:** HTML5, CSS3, vanilla JS + jQuery, GitHub Pages hosting
- **Analytics:** Google gtag (`G-ZXQ3X0J7ZV`)
- **Scheduling:** Calendly — event: *30-Minute Wedding Vision Call*  
  (Link embed now; inline embed optional later)

### Brand
- **Accent gold:** `#A67C00` (site-wide)
- **Ink:** `#2A2A2A`
- **Soft background (optional):** `#FBEEDA`  
- CSS variable: `--accent-gold` used for borders, buttons, hover states

---

## Planning
- [x] Set up repo / organization
- [x] Configure GitHub Pages + custom domain + SSL
- [x] Bootstrap template and responsive layout
- [x] Headings and typography adjustments
- [x] **About** section (emphasis + chips)
- [x] **Portfolio** section (stock placeholders for now)
- [x] **Contact** section (Book + Email CTAs)
- [x] Footer
- [x] Social links (**Instagram, Facebook, Pinterest, X**)
- [x] Google Analytics tag added
- [x] LocalBusiness JSON-LD added
- [x] Open external links in new tabs
- [x] Adopt deep gold accent `#A67C00`
- [ ] Verify GA property receiving data (Analytics UI)
- [ ] Replace stock assets with owned imagery
- [ ] (Optional) Embed Calendly inline on Contact
- [ ] (Optional) Google Business Profile + venue/article SEO
- [ ] (Optional) Image optimization pass (`webp` + responsive `srcset`)
- [ ] (Optional) Update logo mark/wordmark to `#A67C00`

---

## Updates / Changelog
### v1.2.0 — Accent & polish
- Adopt deep gold `#A67C00` site-wide; add `--accent-gold` CSS variable
- Hero feature chips: gold border + **black** text/icons for stronger contrast
- About section: emphasize **real / beautiful / present** + mini chip row
- Social hover: invert to **white** icons on gold (fix earlier override)
- Open external links (social + Calendly) in new tabs with `rel="noopener"`
- Portfolio: ensure relative `images/...` paths (stock placeholders now visible)
- README: update structure/brand/changes

### v1.1.0 — 2025 Refresh
- Refresh `<head>`: title, meta description, canonical, OG/Twitter, preconnect
- Center hero; restore primary headline; add centered subtitle
- Add feature chips (Real Moments / Clean Edits / A Little Edge / Drone)
- Replace intake form with booking flow: **30-Minute Wedding Vision Call (Calendly)** + Email
- Add LocalBusiness JSON-LD scoped to Harlingen/RGV (phone omitted for parity)
- Improve accessibility: descriptive alt text, ARIA labels, clearer link text
- Optimize portfolio display: lazy-load, explicit dimensions, stock-friendly filenames
- Update socials to **Instagram, Facebook, Pinterest, X** (remove Flickr/Behance)
- Open external links in new tabs with `rel="noopener"`
- Maintain dependency order (jQuery before site JS); small spacing/centering polish

### v1.0
- Format **The Experience**, **Portfolio**, **Connect**
- Contact form with reCAPTCHA (now deprecated)
- Footer adjustments; social highlight color; navbar anchor links
- Google Analytics connected (legacy)
- **MILESTONE:** *Initial Release*

### v0.2
- Establish
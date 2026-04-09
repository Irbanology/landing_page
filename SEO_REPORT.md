# SEO Report - WibeIT Landing

Date: 2026-04-09  
Project: `wibeit-landing`

## Audit Scope

This report is based on a code-level audit of:
- Global metadata setup
- Crawl/index signals (`robots`, `sitemap`)
- Structured data (JSON-LD)
- Heading hierarchy and on-page semantics
- Internal/external linking
- SEO-critical static assets (favicon, OG image, content images)

## Overall Status

- Foundation is present: global metadata, `robots`, `sitemap`, and JSON-LD exist.
- Major blockers exist: multiple missing SEO-critical assets and likely broken image/file URLs.
- Estimated health: **Medium-Low** until blockers are fixed.

## Critical Findings (Fix First)

### 1) Missing social/meta assets referenced in metadata
- File: `src/app/layout.js`
- Referenced assets:
  - `/favicon.png`
  - `/apple-touch-icon.png`
  - `/og-image.png`
- These files are not present in `public`, so favicon and social preview rendering are likely broken.

### 2) Multiple image paths referenced but files missing
- Referenced in components but not found in `public`:
  - `/section.png`
  - `/Layer 1.png`
  - `/login_Ui.png`
  - `/intro_Ui.png`
  - `/Mask group 1.png`
  - `/Mask group 2.png`
  - `/formimage.svg`
- Broken media hurts UX and can indirectly reduce SEO performance.

### 3) Likely broken policy document links
- Policy pages link to:
  - `https://wibeit.co/docs/privacy_policy.pdf`
  - `https://wibeit.co/docs/child_safety.pdf`
- No `docs` assets are present in this repo snapshot.

### 4) Canonical URL is globally fixed to homepage
- File: `src/app/layout.js`
- `alternates.canonical` is set to `https://wibeit.co` for all pages.
- Policy routes should use their own canonical URLs.

## High-Priority Improvements

### 1) Multiple `<h1>` tags on homepage
- `Hero` contains an `h1`.
- `ContactForm` also contains an `h1` ("Contact Us").
- Recommendation: Keep one primary `h1` on homepage; convert secondary section heading to `h2`.

### 2) Missing route-level metadata on policy pages
- Files:
  - `src/app/policies/privacy_policy/page.jsx`
  - `src/app/policies/child_safety/page.jsx`
  - `src/app/policies/legal/page.jsx`
- Recommendation: Add per-route `metadata` (`title`, `description`, canonical, OG/Twitter where relevant).

### 3) Blog CTAs are not crawlable links
- File: `src/app/components/Blog.jsx`
- "Read" and "Read the blog" are text/button, not links to indexable pages.
- Recommendation: Use real links if blog pages exist.

## What Is Already Good

- `src/app/robots.js` is present and includes sitemap reference.
- `src/app/sitemap.js` includes homepage and policy routes.
- Global metadata in `src/app/layout.js` includes:
  - Title template
  - Description
  - Robots
  - Open Graph
  - Twitter card
- JSON-LD (`SoftwareApplication`) is implemented.
- Custom 404 page (`src/app/not-found.js`) is present.

## Technical Notes

- `sitemap.js` uses `lastModified: new Date()` dynamically; consider content-based dates for better accuracy.
- JSON-LD keywords include typo/spammy phrasing (e.g., "Best Encryptin algorithm 2026"); clean for quality signals.
- Anchor-based internal navigation is generally structured well.

## Prioritized Action Plan

1. Add missing files to `public` (or update image paths to existing files).
2. Add real favicon, apple-touch-icon, and OG image.
3. Add route-level metadata and canonical URLs for each policy page.
4. Keep one homepage `h1`; demote secondary hero/section titles as needed.
5. Fix or remove broken policy PDF links.
6. Convert blog CTA elements into crawlable links.
7. Re-check with Lighthouse + Google Search Console URL Inspection.

## Suggested Verification Checklist

- [ ] `https://wibeit.co/robots.txt` renders correctly.
- [ ] `https://wibeit.co/sitemap.xml` renders all expected URLs.
- [ ] Homepage social preview works in Open Graph debuggers.
- [ ] No missing image requests in browser devtools network tab.
- [ ] Home page has a single `h1`.
- [ ] Each policy route has unique `title`, `description`, and canonical.


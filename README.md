# Chizurum Ibeawuchi — product design portfolio

A static HTML/CSS/JavaScript portfolio designed for GitHub Pages. No build tools or npm install are required.

## What changed in this version

This update keeps the original visual language and expands the portfolio from short project summaries into richer product-design case studies.

Selected Work now includes:

- Zenith Bank Mobile App
- FirstBank / FirstMobile
- Smart ID
- Open Banking with Thrive MFB
- Mobile POS
- PearlX

The case-study renderer in `cases.js` now supports narrative sections, bullet insights, callouts, image galleries, and outcome cards. Project assets are organised under `assets/projects/`.

## Preview locally

From the repository folder run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

You can also open `index.html` directly, but a local server is better for testing relative links consistently.

## Structure

```text
index.html
case-study.html
cases.js
script.js
styles.css
assets/
  Chizurum-Ibeawuchi-CV.pdf
  projects/
    zenith/
    firstbank/
    smart-id/
    open-banking/
    mobile-pos/
    pearlx-cover.webp
```

All links use relative paths, so the site works from a GitHub Pages project URL or a custom domain.

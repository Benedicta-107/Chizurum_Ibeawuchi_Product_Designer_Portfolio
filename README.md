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

## Update the existing GitHub Pages repository

If the current portfolio is already published from the `main` branch, you do **not** need a new repository.

1. Download and unzip this updated portfolio.
2. Open the existing GitHub repository.
3. Replace the old root files with the new versions:
   - `index.html`
   - `case-study.html`
   - `cases.js`
   - `styles.css`
   - `script.js`
   - `README.md`
4. Replace the repository's `assets/` folder with this version of `assets/`.
5. Add `CHANGELOG.md` if you want to keep the project notes in the repo.
6. Commit the changes to the same branch GitHub Pages already uses (normally `main`).
7. Wait for the Pages deployment to complete, then hard-refresh the live site.

If uploading through the GitHub website, it is usually easiest to upload the **contents of this folder**, not the ZIP itself.

## Git command option

If you have the repository cloned locally, copy these updated files into the cloned repository, then run:

```bash
git status
git add .
git commit -m "Expand portfolio case studies and add new project work"
git push origin main
```

GitHub Pages should redeploy automatically if it is already configured for `main` / root.

## Before making the updated site public

- Ask Chizurum to review all FirstMobile, Zenith, Smart ID, Open Banking, Thrive MFB, Mobile POS, and PearlX images for public-sharing approval.
- The earlier document marked `Interswitch - INTERNAL` is **not** included in this website.
- Open Banking is deliberately described as a concept/prototype; no production launch metric is claimed.
- Product metrics are worded as product-level outcomes, not proof that design alone caused the result.
- The downloadable CV still contains the contact details present in the supplied CV. Replace `assets/Chizurum-Ibeawuchi-CV.pdf` if a different public CV is preferred.

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

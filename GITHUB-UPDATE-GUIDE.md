# Updating the existing GitHub Pages site

You can keep the **same GitHub repository and the same GitHub Pages URL**.

## Easiest option — GitHub website

1. Unzip the updated portfolio on your computer.
2. Open the existing portfolio repository on GitHub.
3. Upload/replace these root files:
   - `index.html`
   - `case-study.html`
   - `cases.js`
   - `styles.css`
   - `script.js`
   - `README.md`
4. Upload the new `assets/projects/` folder, keeping all subfolders intact.
5. The existing CV and `pearlx.webp` can stay as they are if GitHub already has the same copies.
6. Commit the changes to the branch currently used by Pages, normally `main`.
7. Open **Actions** or **Settings → Pages** and wait until the deployment finishes.
8. Hard refresh the live site (`Ctrl+Shift+R` on Windows, `Cmd+Shift+R` on Mac).

Old unused image files such as the previous `assets/zenith.webp`, `assets/smart-id.webp`, and `assets/mobile-pos.webp` can be deleted later, but leaving them in the repository will not break the new site.

## Safer option — Git locally

From your existing cloned repository:

```bash
# copy the updated files into your existing repository first
git status
git add .
git commit -m "Expand portfolio case studies and add new project work"
git push origin main
```

If GitHub Pages is already configured, the same URL will redeploy automatically.

## Check after deployment

Open each of these from the live homepage:

- Zenith Bank Mobile App
- FirstBank / FirstMobile
- Smart ID
- Open Banking with Thrive MFB
- Mobile POS
- PearlX

Also check:

- mobile menu
- CV download
- contact email link
- images at desktop and phone widths
- “Next case study” links

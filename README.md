# Chizurum Ibeawuchi — portfolio

A static portfolio made with HTML, CSS, and basic JavaScript. No build tools or dependencies are required to publish it. The site uses Google Fonts when available and local fallback fonts otherwise.

## Publish on GitHub Pages

1. Create a new public GitHub repository, such as `chizurum-portfolio`.
2. Upload **the contents of this folder** to the repository root, keeping `index.html`, `case-study.html`, `styles.css`, `script.js`, `cases.js`, and `assets/` together.
3. In the repository, open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/ (root)`, then save.
4. Once GitHub provides the URL, check the homepage, each case study, the CV download, and the email link.

The links use relative paths, so the same files work at a GitHub Pages project URL or a custom domain. There is no contact form or server; the contact link opens an email client.

## Before publishing

- Get Chizurum’s approval of the copy, product images, CV, and contact email. The CV includes a phone number, even though the site does not display it.
- Review whether the selected portfolio images can be shared publicly under client or employer agreements. The file marked `Interswitch - INTERNAL` is excluded.
- If any CV metric needs updating, edit the Zenith case in `cases.js` and the relevant text in `index.html`.
- Replace the CV at `assets/Chizurum-Ibeawuchi-CV.pdf` if Chizurum prefers a public version without a phone number.

## Local preview

Open `index.html` in a browser, or run `python3 -m http.server 8000` from this folder and visit `http://localhost:8000`.

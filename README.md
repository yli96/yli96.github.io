# yli96.github.io

Personal research homepage of **Yuening Li** (`https://yli96.github.io`).

## Structure

This is a zero-build static site (`.nojekyll`) designed for instant deployment on GitHub Pages:

- `index.html` — Single-page homepage (Bio, Frontier Models & Post-Training, Publications, Experience & Education, Academic Service).
- `assets/css/styles.css` — Editorial minimalist stylesheet (Light & Dark themes, responsive layout, 1:1 circular avatar rules).
- `assets/js/main.js` — Theme toggle, email copy helper, and publication filter tabs.
- `images/avatar.jpg` — Square-cropped (`600x600`) portrait headshot (with EXIF stripped). An alternate outdoor portrait is also included at `images/avatar-outdoor.jpg`.
- `cv/index.html`, `publications/index.html`, `about/index.html` — Lightweight redirects so legacy links resolve cleanly to `/`.

## Local Preview

```bash
python3 -m http.server 8080 --bind 127.0.0.1
```

## Deploying to GitHub Pages

Replace the contents of your `yli96/yli96.github.io` repository with the files in this folder (preserving `.git`), commit, and push to `master` / `main`:

```bash
git add -A
git commit -m "Redesign personal homepage (single-page GDM & research style)"
git push
```

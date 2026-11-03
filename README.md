# joshuawalulik.com

My portfolio site — a single-page React app, live at
**[joshuawalulik.com](https://joshuawalulik.com)**.

## Stack

- React 18 + Vite 6, plain CSS (no UI library, 2 runtime dependencies)
- All content lives in [`src/data.js`](src/data.js) — update that file when
  the resume changes, no markup edits needed
- Deployed to GitHub Pages by [GitHub Actions](.github/workflows/deploy.yml)
  on every push to `main`, behind Cloudflare with HTTPS enforced

## Notes

- GitHub Pages can't set HTTP response headers, so a small custom Vite plugin
  injects a Content Security Policy `<meta>` tag at build time (see
  [`vite.config.js`](vite.config.js))
- Respects `prefers-reduced-motion`, works down to phone widths

## Running locally

```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # production build in dist/
```

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages can't set HTTP headers, so the CSP ships as a meta tag.
// Injected only at build time — the dev server needs inline scripts for HMR.
const csp = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src https://fonts.gstatic.com",
  "img-src 'self' data:",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join('; ')

const injectCsp = {
  name: 'inject-csp',
  apply: 'build',
  transformIndexHtml(html) {
    return html.replace(
      '<meta charset="UTF-8" />',
      `<meta charset="UTF-8" />\n    <meta http-equiv="Content-Security-Policy" content="${csp}" />`,
    )
  },
}

export default defineConfig({
  plugins: [react(), injectCsp],
  base: '/',
})

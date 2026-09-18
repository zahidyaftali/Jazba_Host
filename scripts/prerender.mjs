// Renders every route to static HTML after `vite build`, so crawlers and
// social scrapers get a finished page without executing any JavaScript.
// The client then hydrates that same markup.
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = process.cwd()
const dist = path.join(root, 'dist')

const { render } = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href)
const { allRoutes, SITE } = await import(pathToFileURL(path.join(root, 'src', 'seo.js')).href)

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8')

function page(url) {
  const { html, head } = render(url)
  return template
    // Drop the template's placeholder title/description — Helmet supplies the
    // real per-route ones, and two of each only confuses crawlers.
    .replace(/\s*<title>[\s\S]*?<\/title>/, '')
    .replace(/\s*<meta name="description"[^>]*>/, '')
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    .replace('</head>', `  ${head}\n  </head>`)
}

// Indexable routes, plus the two noindex pages that still need to exist.
const routes = [...allRoutes(), '/coming-soon']

for (const url of routes) {
  const dir = url === '/' ? dist : path.join(dist, url)
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'index.html'), page(url))
}

// 404.html for hosts that serve it on unmatched paths.
fs.writeFileSync(path.join(dist, '404.html'), page('/this-route-does-not-exist'))

// sitemap.xml — indexable routes only.
const today = new Date().toISOString().slice(0, 10)
const priorityFor = (u) => (u === '/' ? '1.0' : u.split('/').length > 2 ? '0.7' : '0.8')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes()
  .map(
    (u) => `  <url>
    <loc>${SITE.url}${u === '/' ? '/' : u}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${priorityFor(u)}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap)

fs.writeFileSync(
  path.join(dist, 'robots.txt'),
  `User-agent: *
Allow: /
Disallow: /coming-soon

Sitemap: ${SITE.url}/sitemap.xml
`,
)

console.log(
  `prerendered ${routes.length} routes + 404.html, sitemap.xml (${allRoutes().length} urls), robots.txt`,
)

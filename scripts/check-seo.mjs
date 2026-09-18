// Fails the build if any route's meta title or description breaks the limits.
// Title <= 55 chars, description <= 155 chars.
import { pathToFileURL } from 'node:url'
import path from 'node:path'

const { pageSeo, serviceSeo, projectSeo } = await import(
  pathToFileURL(path.join(process.cwd(), 'src', 'seo.js')).href
)

const TITLE_MAX = 55
const DESC_MAX = 155

const entries = [
  ...Object.entries(pageSeo).map(([k, v]) => [k, v]),
  ...Object.entries(serviceSeo).map(([k, v]) => [`services/${k}`, v]),
  ...Object.entries(projectSeo).map(([k, v]) => [`portfolio/${k}`, v]),
]

const problems = []
for (const [key, meta] of entries) {
  if (!meta.title) problems.push(`${key}: missing title`)
  else if (meta.title.length > TITLE_MAX)
    problems.push(`${key}: title ${meta.title.length}/${TITLE_MAX} — "${meta.title}"`)

  if (!meta.description) problems.push(`${key}: missing description`)
  else if (meta.description.length > DESC_MAX)
    problems.push(`${key}: description ${meta.description.length}/${DESC_MAX}`)
}

if (problems.length) {
  console.error(`\nSEO check failed (${problems.length}):`)
  for (const p of problems) console.error('  ' + p)
  process.exit(1)
}

const longestTitle = Math.max(...entries.map(([, m]) => m.title?.length ?? 0))
const longestDesc = Math.max(...entries.map(([, m]) => m.description?.length ?? 0))
console.log(
  `SEO check passed — ${entries.length} routes, longest title ${longestTitle}/${TITLE_MAX}, longest description ${longestDesc}/${DESC_MAX}`,
)

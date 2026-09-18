import { Helmet } from 'react-helmet-async'
import { SITE, pageSeo, serviceSeo, projectSeo } from '../seo.js'

/**
 * Per-route <head> content. Renders into the real HTML during the
 * prerender pass (scripts/prerender.mjs), so crawlers see the finished
 * title, description, canonical and Open Graph tags without running JS.
 *
 * Usage:
 *   <Seo page="pricing" />
 *   <Seo service={slug} title={...} description={...} path={...} />
 */
export default function Seo({
  page,
  service,
  project,
  title,
  description,
  path,
  image,
  noindex,
  jsonLd,
}) {
  const base =
    (page && pageSeo[page]) ||
    (service && serviceSeo[service]) ||
    (project && projectSeo[project]) ||
    {}

  const resolvedPath =
    path ||
    base.path ||
    (service ? `/services/${service}` : '') ||
    (project ? `/portfolio/${project}` : '') ||
    '/'

  const finalTitle = title || base.title || SITE.name
  const finalDesc = description || base.description || ''
  const canonical = `${SITE.url}${resolvedPath}`
  const ogImage = `${SITE.url}${image || SITE.ogImage}`
  const hide = noindex ?? base.noindex ?? false

  return (
    <Helmet prioritizeSeoTags>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDesc} />
      <link rel="canonical" href={canonical} />
      {hide
        ? <meta name="robots" content="noindex, nofollow" />
        : <meta name="robots" content="index, follow, max-image-preview:large" />}

      {/* Open Graph — used by Facebook, LinkedIn, WhatsApp, Slack */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content={SITE.locale} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${SITE.name} — web design, development and UK hosting`} />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE.twitter} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDesc} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  )
}

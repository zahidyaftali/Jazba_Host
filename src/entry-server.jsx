import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './index.css'

// Rendered once per route by scripts/prerender.mjs so every page ships as
// real HTML. Returns the markup plus the <head> tags Helmet collected.
export function render(url) {
  const helmetContext = {}
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>,
  )
  const { helmet } = helmetContext
  // prioritizeSeoTags moves title/description/canonical/og into `priority`,
  // so it has to be emitted too or those tags silently vanish.
  const head = [
    helmet?.priority?.toString(),
    helmet?.title?.toString(),
    helmet?.meta?.toString(),
    helmet?.link?.toString(),
    helmet?.script?.toString(),
  ].filter(Boolean).join('\n    ')
  return { html, head }
}

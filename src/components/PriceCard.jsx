import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { scaleIn } from './motion.js'

// How many features a card shows before the "View more" toggle.
const COLLAPSED = 6

/**
 * One pricing card. Collapses long feature lists so every card in a row
 * is the same height, with a toggle to reveal the rest.
 *
 * `amount` and `note` are nodes because hosting, one-off project and
 * "Custom pricing" cards all format their figure differently.
 */
export default function PriceCard({
  plan,
  amount,
  note,
  badge,
  ctaLabel,
  ctaTo = '/contact',
}) {
  const [open, setOpen] = useState(false)

  const canCollapse = plan.features.length > COLLAPSED
  const shown = open || !canCollapse ? plan.features : plan.features.slice(0, COLLAPSED)
  const hiddenCount = plan.features.length - COLLAPSED

  return (
    <motion.div variants={scaleIn} className={`price-card ${plan.featured ? 'featured' : ''}`}>
      {badge && <span className="price-badge">{badge}</span>}
      <div className="price-name">{plan.name}</div>
      <div className="price-tag">{plan.tagline}</div>

      {amount}
      {note && <div className="price-note">{note}</div>}

      <ul className="price-features">
        {shown.map((f) => (
          <li key={f}><span className="tick">✓</span>{f}</li>
        ))}
      </ul>

      {canCollapse && (
        <button
          type="button"
          className="price-more"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          {open ? 'Show less' : `View ${hiddenCount} more feature${hiddenCount === 1 ? '' : 's'}`}
          <svg
            className={`price-more-chev ${open ? 'open' : ''}`}
            width="11" height="7" viewBox="0 0 11 7" fill="none" aria-hidden="true"
          >
            <path d="M1 1l4.5 4.5L10 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

      <Link to={ctaTo} className={`btn ${plan.featured ? 'btn-primary' : 'btn-secondary'}`}>
        {ctaLabel}
      </Link>
    </motion.div>
  )
}

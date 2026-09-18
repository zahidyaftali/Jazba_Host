import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { fadeUp, stagger } from './motion.js'
import { stats } from '../data.js'

export function Chevron() {
  return <span className="chev" aria-hidden>›</span>
}

// Small eyebrow label with the orange accent dash.
export function Eyebrow({ children, onDark }) {
  return (
    <div className="eyebrow-row">
      <span className="stripe-divider" style={{ width: 32 }} />
      <span className="eyebrow" style={onDark ? { color: 'var(--on-dark)' } : undefined}>{children}</span>
    </div>
  )
}

// Page opener for secondary pages on the hero's orange mesh:
// breadcrumb + display-xl + optional subtitle, lead and buttons.
export function PageHero({ crumbs, title, subtitle, lead, children }) {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <motion.div variants={stagger} initial="hidden" animate="show">
          {crumbs && <motion.p variants={fadeUp} className="breadcrumb">{crumbs}</motion.p>}
          <motion.h1 variants={fadeUp} className="display-xl" style={{ marginTop: crumbs ? 28 : 0 }}>{title}</motion.h1>
          {subtitle && <motion.p variants={fadeUp} className="subtitle" style={{ marginTop: 16, color: 'var(--on-dark)' }}>{subtitle}</motion.p>}
          {lead && <motion.p variants={fadeUp} className="body-lg page-hero-lead">{lead}</motion.p>}
          {children && <motion.div variants={fadeUp} className="hero-actions" style={{ marginTop: 32 }}>{children}</motion.div>}
        </motion.div>
      </div>
    </section>
  )
}

// Section header: eyebrow + display heading + optional lead.
export function SectionHead({ eyebrow, title, lead, center, onDark, max = 720 }) {
  return (
    <Reveal className={`section-head ${center ? 'text-center' : ''}`} variants={stagger}>
      {eyebrow && (
        <motion.div variants={fadeUp} style={center ? { display: 'flex', justifyContent: 'center' } : undefined}>
          <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>
        </motion.div>
      )}
      <motion.h2 variants={fadeUp} className="display-lg" style={{ marginTop: 16 }}>{title}</motion.h2>
      {lead && (
        <motion.p variants={fadeUp} className="body-md" style={{ marginTop: 16, maxWidth: max, ...(center ? { marginLeft: 'auto', marginRight: 'auto' } : {}) }}>
          {lead}
        </motion.p>
      )}
    </Reveal>
  )
}

// Pre-footer CTA band — identical design to the home page closing stripe.
export function CtaBand({ title, text, primaryLabel = 'Get a Quote', primaryTo = '/contact', secondaryLabel, secondaryTo }) {
  return (
    <section className="closing-band">
      <div className="container">
        <Reveal variants={stagger}>
          <motion.h2 variants={fadeUp} className="display-xl">{title}</motion.h2>
          {text && <motion.p variants={fadeUp} className="body-lg">{text}</motion.p>}
          <motion.div variants={fadeUp} className="closing-actions">
            <Link to={primaryTo} className="btn btn-dark">{primaryLabel}</Link>
            {secondaryLabel && <Link to={secondaryTo} className="btn btn-light">{secondaryLabel}</Link>}
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}

// Stat strip used on Home & About.
export function StatStrip({ dark }) {
  return (
    <Reveal variants={stagger} className={`stat-strip ${dark ? 'band-dark' : ''}`}>
      <div className="container stat-grid">
        {stats.map((s) => (
          <motion.div key={s.label} variants={fadeUp} className="stat-cell">
            <div className="stat-value display-md">{s.value}</div>
            <div className="stat-label label-uppercase">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </Reveal>
  )
}

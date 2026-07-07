import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { services } from '../data.js'
import './navbar.css'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services', mega: true },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/pricing', label: 'Hosting Pricing' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const location = useLocation()

  useEffect(() => { setOpen(false); setMegaOpen(false) }, [location])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled || megaOpen ? 'nav-scrolled' : ''}`} onMouseLeave={() => setMegaOpen(false)}>
      <div className="container nav-inner">
        <Link to="/" className="brand" aria-label="Jazba Host home" onMouseEnter={() => setMegaOpen(false)}>
          <span className="brand-mark">J</span>
          <span className="brand-text">Jazba<span className="brand-accent">Host</span></span>
        </Link>

        <nav className="nav-menu" aria-label="Primary">
          {links.map((l) => (
            l.mega ? (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} ${megaOpen ? 'mega-hot' : ''}`}
                onMouseEnter={() => setMegaOpen(true)}
                onFocus={() => setMegaOpen(true)}
                aria-expanded={megaOpen}
                aria-haspopup="true"
              >
                {l.label} <span className={`nav-caret ${megaOpen ? 'up' : ''}`} aria-hidden>▾</span>
              </NavLink>
            ) : (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onMouseEnter={() => setMegaOpen(false)}
              >
                {l.label}
              </NavLink>
            )
          ))}
        </nav>

        <div className="nav-cta" onMouseEnter={() => setMegaOpen(false)}>
          <a href="tel:+443335777014" className="nav-phone">+44 (0)333 5777 014</a>
          <Link to="/contact" className="btn btn-primary nav-btn">Get a Quote</Link>
        </div>

        <button className={`hamburger ${open ? 'is-open' : ''}`} onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          <span></span><span></span><span></span>
        </button>
      </div>

      {/* MEGA MENU — full-width panel */}
      <AnimatePresence>
        {megaOpen && (
          <motion.div
            className="mega-panel"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
          >
            <div className="container mega-grid">
              <div className="mega-services">
                {services.map((s, i) => (
                  <Link key={s.slug} to={`/services/${s.slug}`} className="mega-item">
                    <span className="mega-num">{String(i + 1).padStart(2, '0')}</span>
                    <span>
                      <span className="mega-title">{s.title}</span>
                      <span className="mega-tag">{s.tagline}</span>
                    </span>
                  </Link>
                ))}
              </div>
              <aside className="mega-aside">
                <div className="mega-aside-label">Keep it online</div>
                <div className="title-md">Managed hosting from £3.99/mo.</div>
                <p className="body-sm" style={{ color: 'var(--muted)' }}>
                  Free SSL, daily backups and a 99.9% uptime guarantee on every plan.
                </p>
                <Link to="/pricing" className="btn btn-dark mega-aside-btn">View Hosting Pricing</Link>
                <Link to="/services" className="link-cta">All services <span className="chev" aria-hidden>›</span></Link>
              </aside>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE SHEET */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-sheet"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="container mobile-links">
              {links.map((l) => (
                <NavLink key={l.to} to={l.to} end={l.end} className="mobile-link">{l.label}</NavLink>
              ))}
              <div className="mobile-sub-label label-uppercase">Our Services</div>
              {services.map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`} className="mobile-sublink">{s.title}</Link>
              ))}
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: 12 }}>Get a Quote</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

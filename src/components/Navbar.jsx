import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { services } from '../data.js'
import './navbar.css'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/pricing', label: 'Hosting Pricing' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => { setOpen(false); setServicesOpen(false) }, [location])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-inner">
        <Link to="/" className="brand" aria-label="Jazba Host home">
          <span className="brand-mark">J</span>
          <span className="brand-text">Jazba<span className="brand-accent">Host</span></span>
        </Link>

        <nav className="nav-menu" aria-label="Primary">
          {links.map((l) => (
            l.label === 'Services' ? (
              <div
                key={l.to}
                className="nav-dropdown"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <NavLink to={l.to} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  {l.label}
                </NavLink>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      className="dropdown-panel"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                    >
                      {services.map((s) => (
                        <Link key={s.slug} to={`/services/${s.slug}`} className="dropdown-item">
                          <span className="dropdown-title">{s.title}</span>
                          <span className="dropdown-tag">{s.tagline}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                {l.label}
              </NavLink>
            )
          ))}
        </nav>

        <div className="nav-cta">
          <Link to="/contact" className="btn btn-primary nav-btn">Get a Quote</Link>
        </div>

        <button className={`hamburger ${open ? 'is-open' : ''}`} onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          <span></span><span></span><span></span>
        </button>
      </div>

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

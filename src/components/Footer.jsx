import { Link } from 'react-router-dom'
import { services, offices } from '../data.js'
import './footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <span className="brand-mark">J</span>
            <span className="brand-text">Jazba<span className="brand-accent">Host</span></span>
          </Link>
          <p className="body-sm footer-blurb">
            A complete web solution. We design, build and host websites for any business —
            any framework, CMS, AI, ecommerce, booking and automation.
          </p>
          <div className="stripe-divider" style={{ marginTop: 20 }} />
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Services</h4>
          <ul className="stack-sm">
            {services.map((s) => (
              <li key={s.slug}><Link className="footer-link" to={`/services/${s.slug}`}>{s.title}</Link></li>
            ))}
            <li><Link className="footer-link" to="/pricing">Hosting Pricing</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Company</h4>
          <ul className="stack-sm">
            <li><Link className="footer-link" to="/">Home</Link></li>
            <li><Link className="footer-link" to="/about">About Us</Link></li>
            <li><Link className="footer-link" to="/services">All Services</Link></li>
            <li><Link className="footer-link" to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Offices</h4>
          <ul className="stack-md">
            {offices.map((o) => (
              <li key={o.country}>
                <div className="footer-office-country">{o.country}</div>
                <div className="body-sm footer-office-addr">{o.address.join(' ')}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span className="body-sm">© {year} Jazba Host — Jazba Entertainment Ltd. All rights reserved.</span>
        <span className="body-sm footer-bottom-links">
          <Link to="/contact" className="footer-link">Get a Quote</Link>
          <span className="dot">·</span>
          <a href="mailto:info@jazbaentertainment.com" className="footer-link">info@jazbaentertainment.com</a>
        </span>
      </div>
    </footer>
  )
}

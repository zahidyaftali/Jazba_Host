import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './pages.css'
import { hostingPlans, domainPricing } from '../data.js'
import { pageTransition, fadeUp, stagger, scaleIn } from '../components/motion.js'
import Reveal from '../components/Reveal.jsx'
import { SectionHead, CtaBand, PageHero } from '../components/Shared.jsx'

const faqs = [
  { q: 'Do I get a free domain?', a: 'Yes — every annual plan includes a free domain for the first year (.com, .co.uk and more). It renews at the standard rate after that.' },
  { q: 'Is SSL really free?', a: 'Always. Every plan ships with a free SSL certificate, auto-renewed, so your site is secure and trusted out of the box.' },
  { q: 'Can I upgrade later?', a: 'Absolutely. Start on Starter and move up whenever you grow — upgrades are instant and prorated, with zero downtime.' },
  { q: 'What is the uptime guarantee?', a: 'We guarantee 99.9% uptime, backed by 24/7 monitoring and a real support team. If we ever miss it, you are covered by our SLA.' },
  { q: 'Do you migrate my existing site?', a: 'Yes — free migration on Business and Enterprise plans. Our team moves your site over and checks everything before go-live.' },
]

export default function Pricing() {
  const [billing, setBilling] = useState('monthly')
  const [openFaq, setOpenFaq] = useState(0)

  const factor = billing === 'annual' ? 0.8 : 1 // 20% off annual

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      {/* HERO — cream opener */}
      <PageHero
        crumbs={<><Link to="/">Home</Link> / Hosting Pricing</>}
        eyebrow="Hosting & Domain"
        title="Fast, secure hosting. Simple pricing."
        lead="SSD-backed servers, free SSL, daily backups and a 99.9% uptime guarantee — plus a free domain for your first year. No hidden fees, ever."
      />

      {/* PLANS */}
      <section className="section container">
        <SectionHead
          eyebrow="Hosting plans"
          title="Choose your plan."
          lead="Every plan includes free SSL, a free domain for year one, and 24/7 support."
          center
        />

        {/* billing toggle */}
        <Reveal variants={fadeUp} className="text-center">
          <div className="segment" style={{ marginBottom: 48 }}>
            {['monthly', 'annual'].map((b) => (
              <button key={b} onClick={() => setBilling(b)} className={billing === b ? 'active' : ''}>
                {b === 'annual' ? 'Annual · Save 20%' : 'Monthly'}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal variants={stagger} className="price-grid">
          {hostingPlans.map((p) => (
            <motion.div variants={scaleIn} key={p.name} className={`price-card ${p.featured ? 'featured' : ''}`}>
              {p.featured && <span className="price-badge">Most Popular</span>}
              <div className="price-name">{p.name}</div>
              <div className="price-tag">{p.tagline}</div>
              <div className="price-amount">
                <span className="cur">£</span>
                <span className="num">{(p.price * factor).toFixed(2)}</span>
                <span className="per">/ mo</span>
              </div>
              <ul className="price-features">
                {p.features.map((f) => (
                  <li key={f}><span className="tick">✓</span>{f}</li>
                ))}
              </ul>
              <Link to="/contact" className={`btn ${p.featured ? 'btn-primary' : 'btn-secondary'}`}>Choose {p.name}</Link>
            </motion.div>
          ))}
        </Reveal>
        <Reveal variants={fadeUp} className="text-center" >
          <p className="caption" style={{ marginTop: 24 }}>All prices exclude VAT. Annual billing shown as monthly equivalent.</p>
        </Reveal>
      </section>

      {/* DOMAIN PRICING — soft band */}
      <section className="section band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Domains"
            title="Register or transfer your domain."
            lead="Grab the perfect name — hundreds of extensions available, managed right alongside your hosting."
          />
          <Reveal variants={fadeUp}>
            <div className="table-scroll" style={{ background: 'var(--surface-card)', border: '1px solid var(--hairline)', borderRadius: 'var(--r-md)', overflow: 'hidden' }}>
              <table className="domain-table">
                <thead>
                  <tr><th>Extension</th><th>Register (1st year)</th><th>Renewal</th><th></th></tr>
                </thead>
                <tbody>
                  {domainPricing.map((d) => (
                    <tr key={d.tld}>
                      <td className="tld">{d.tld}</td>
                      <td className="price-cell">{d.price}</td>
                      <td>{d.renew} / yr</td>
                      <td style={{ textAlign: 'right' }}><Link to="/contact" className="link-cta on-blue">Get it ›</Link></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INCLUDED FEATURES — light */}
      <section className="section container">
        <SectionHead eyebrow="Every plan includes" title="More than just space on a server." center />
        <Reveal variants={stagger} className="grid grid-4">
          {[
            { t: 'Free SSL', b: 'HTTPS on every site, auto-renewed.' },
            { t: 'Daily Backups', b: 'Restore any time with one click.' },
            { t: 'Global CDN', b: 'Fast load times, everywhere.' },
            { t: '99.9% Uptime', b: 'SLA-backed, always monitored.' },
            { t: 'Free Domain', b: 'On us for your first year.' },
            { t: 'Free SSD', b: 'Solid-state speed as standard.' },
            { t: '24/7 Support', b: 'Real people, any time zone.' },
            { t: 'One-Click Apps', b: 'WordPress & more, instantly.' },
          ].map((f) => (
            <motion.div variants={fadeUp} key={f.t} className="value-card">
              <h4 className="title-md">{f.t}</h4>
              <p className="body-sm" style={{ color: 'var(--muted)' }}>{f.b}</p>
            </motion.div>
          ))}
        </Reveal>
      </section>

      {/* FAQ — soft band */}
      <section className="section band-soft">
        <div className="container" style={{ maxWidth: 860 }}>
          <SectionHead eyebrow="Questions" title="Hosting FAQ." center />
          <Reveal variants={stagger} className="faq-list">
            {faqs.map((f, i) => (
              <motion.div variants={fadeUp} key={f.q} className="faq-item">
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}>
                  <span className="title-md">{f.q}</span>
                  <span className={`faq-toggle ${openFaq === i ? 'open' : ''}`}>+</span>
                </button>
                <motion.div
                  className="faq-a"
                  initial={false}
                  animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                >
                  <p className="body-md">{f.a}</p>
                </motion.div>
              </motion.div>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Need something bigger? We do custom too."
        text="Dedicated servers, high-traffic ecommerce, bespoke infrastructure — talk to our team."
        primaryLabel="Talk to Sales"
        secondaryLabel="Our Services"
        secondaryTo="/services"
      />
    </motion.div>
  )
}

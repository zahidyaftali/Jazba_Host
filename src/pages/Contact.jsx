import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './pages.css'
import { offices, services } from '../data.js'
import { pageTransition, fadeUp, stagger, scaleIn } from '../components/motion.js'
import Reveal from '../components/Reveal.jsx'
import Seo from '../components/Seo.jsx'
import { SectionHead, PageHero } from '../components/Shared.jsx'

const quickContacts = [
  {
    label: 'email',
    value: 'info@jazbaentertainment.com',
    href: 'mailto:info@jazbaentertainment.com',
    note: 'We usually reply within one business day.',
  },
  {
    label: 'uk-office',
    value: '+44 (0)333 5777 014',
    href: 'tel:+443335777014',
    note: 'Birmingham, United Kingdom',
  },
  {
    label: 'pk-office',
    value: '+92 (0)302 5777 014',
    href: 'tel:+923025777014',
    note: 'Islamabad | Lahore, Pakistan',
  },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value })
  const submit = (e) => { e.preventDefault(); setSent(true) }

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <Seo page="contact" />
      {/* HERO — orange mesh opener */}
      <PageHero
        crumbs={<><Link to="/">Home</Link> / Contact</>}
        eyebrow="Get in touch"
        title="Let's start your project."
        lead="Two offices, one dedicated team. Tell us what you need — a website, hosting, or the full package — and we'll come back fast with a clear plan."
      />

      {/* QUICK CONTACT TILES */}
      <section className="section container">
        <Reveal variants={stagger} className="grid grid-3">
          {quickContacts.map((q) => (
            <motion.a variants={fadeUp} key={q.label} href={q.href} className="quick-card">
              <span className="qk-label">{q.label}</span>
              <span className="qk-value">{q.value}</span>
              <span className="body-sm" style={{ color: 'var(--muted)' }}>{q.note}</span>
            </motion.a>
          ))}
        </Reveal>
      </section>

      {/* FORM — centered card on the bone band */}
      <section className="section band-soft">
        <div className="container" style={{ maxWidth: 900 }}>
          <SectionHead
            eyebrow="Send us a message"
            title="Tell us about your project."
            lead="Fill in the form and our team will come back with a clear plan and a fair quote — no jargon, no pressure."
            center
          />
          <Reveal variants={fadeUp}>
            <div className="form-card">
              {sent ? (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="form-success">
                  <strong style={{ fontWeight: 600 }}>Thank you, {form.name || 'there'}!</strong><br />
                  Your message has been received. Our team will be in touch shortly at {form.email || 'your email'}.
                </motion.div>
              ) : (
                <form className="form-grid" onSubmit={submit}>
                  <div className="field">
                    <label htmlFor="name">Full Name</label>
                    <input id="name" className="input" required value={form.name} onChange={update('name')} placeholder="Jane Doe" />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" className="input" required value={form.email} onChange={update('email')} placeholder="jane@company.com" />
                  </div>
                  <div className="field">
                    <label htmlFor="company">Company</label>
                    <input id="company" className="input" value={form.company} onChange={update('company')} placeholder="Company Ltd." />
                  </div>
                  <div className="field">
                    <label htmlFor="service">Service</label>
                    <select id="service" className="input" value={form.service} onChange={update('service')}>
                      <option value="">Select a service…</option>
                      {services.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
                      <option value="Ecommerce / AI / Automation">Ecommerce / AI / Automation</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>
                  <div className="field full">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" className="input textarea" required value={form.message} onChange={update('message')} placeholder="Tell us about your project…" />
                  </div>
                  <div className="full">
                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* OFFICES — cards with embedded Google Maps */}
      <section className="section container">
        <SectionHead eyebrow="Our offices" title="Two locations, one team." center />
        <Reveal variants={stagger} className="grid grid-2">
          {offices.map((o) => (
            <motion.div variants={scaleIn} key={o.country} className="office-card">
              <div className="office-media">
                <iframe
                  className="office-map"
                  title={`Map of the ${o.country} office`}
                  src={o.map}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="office-body">
                <div className="office-country">
                  <span className="stripe-divider" style={{ width: 28 }} />
                  <h3>{o.country}</h3>
                </div>
                <div className="title-sm" style={{ marginBottom: 8 }}>{o.company}</div>
                <div className="office-addr">{o.address.map((line, i) => <div key={i}>{line}</div>)}</div>
                <div className="office-rows">
                  {o.rows.map((r, i) => (
                    <div className="office-row" key={i}>
                      <span className="rk">{r.label}</span>
                      <span className="rv">
                        {r.label === 'Email'
                          ? <a href={`mailto:${r.value}`}>{r.value}</a>
                          : r.label.includes('Telephone') || r.label.includes('Mobile')
                            ? <a href={`tel:${r.value.replace(/[^+\d]/g, '')}`}>{r.value}</a>
                            : r.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </Reveal>
      </section>
    </motion.div>
  )
}

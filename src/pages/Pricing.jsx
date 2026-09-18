import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './pages.css'
import { hostingPlans, domainPricing, projectPricing, ANNUAL_DISCOUNT } from '../data.js'
import { pageTransition, fadeUp, stagger } from '../components/motion.js'
import Reveal from '../components/Reveal.jsx'
import PriceCard from '../components/PriceCard.jsx'
import Seo from '../components/Seo.jsx'
import { SectionHead, CtaBand, PageHero, Chevron } from '../components/Shared.jsx'

const faqs = [
  { q: 'Is the project price really fixed?', a: 'Yes. We scope the work with you, agree a number, and that is what you pay. If you later ask for something outside that scope we price it separately and you decide — you will never get a surprise invoice at the end.' },
  { q: 'Why are you cheaper than a UK agency?', a: 'Because we are not one. We are a small, experienced team working remotely from Pakistan for a UK company — no account managers, no sales floor, no city-centre office. You get the same build standards without paying for any of that overhead.' },
  { q: 'What do I actually pay up front?', a: 'A 40% deposit to book the work in, 30% at design sign-off and the final 30% before go-live. Hosting starts the month your site goes live, not before.' },
  { q: 'Do I get a free domain?', a: 'Yes — every hosting plan includes a free domain for the first year (.com, .co.uk and more). It renews at the standard rate shown in the table below.' },
  { q: 'Can I change hosting plan later?', a: 'Any time. Upgrades are instant and prorated with no downtime, and you can move back down again if a busy season passes.' },
  { q: 'Do you take over a site someone else built?', a: 'Often, yes. Migration onto our hosting is free on Business and Enterprise. If the existing build needs fixing before we can support it, we will tell you what that costs before you commit.' },
  { q: 'What happens after launch?', a: 'Launch support is included — 30 days on Launch and Assist, 90 days on Growth and Convert. After that, our hosting plans cover updates, backups, monitoring and small changes.' },
]

const gbp = (n) => n.toLocaleString('en-GB')

export default function Pricing() {
  const [billing, setBilling] = useState('monthly')
  const [openFaq, setOpenFaq] = useState(0)

  const annual = billing === 'annual'

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <Seo page="pricing" />

      {/* HERO — cream opener */}
      <PageHero
        crumbs={<><Link to="/">Home</Link> / Pricing</>}
        title="Clear prices. No day rates."
        lead="Managed hosting from £8 a month, and fixed-price builds for websites, apps and AI chatbots. Freelance rates from a small team — not agency rates."
      >
        <a href="#website-development" className="btn btn-light">Project Prices</a>
        <Link to="/contact" className="btn btn-dark">Get a Free Quote</Link>
      </PageHero>

      {/* HOSTING PLANS */}
      <section className="section container" id="hosting">
        <SectionHead
          eyebrow="Hosting & maintenance"
          title="Hosting, handled."
          lead="Every plan includes free SSL, a free domain for year one, daily backups and the updates done for you."
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
          {hostingPlans.map((p) => {
            const yearTotal = p.price * 12 * (1 - ANNUAL_DISCOUNT)
            const fullYear = p.price * 12
            return (
              <PriceCard
                key={p.name}
                plan={p}
                badge={p.featured ? 'Most Popular' : null}
                ctaLabel={`Choose ${p.name}`}
                amount={
                  <div className="price-amount">
                    <span className="cur">£</span>
                    <span className="num">{annual ? yearTotal.toFixed(2) : p.price}</span>
                    <span className="per">{annual ? 'total / year' : '/ month'}</span>
                  </div>
                }
                note={
                  annual
                    ? `Billed as one payment of £${yearTotal.toFixed(2)} — you save £${(fullYear - yearTotal).toFixed(2)} a year.`
                    : `£${fullYear.toFixed(2)} a year billed monthly · switch to annual and pay £${yearTotal.toFixed(2)}.`
                }
              />
            )
          })}
        </Reveal>
        <Reveal variants={fadeUp} className="text-center">
          <p className="caption" style={{ marginTop: 24 }}>All prices exclude VAT. Annual plans are billed once as the total shown.</p>
        </Reveal>
      </section>

      {/* PROJECT PRICING — website, app, chatbot. One-off fees, not monthly. */}
      {projectPricing.map((group, gi) => (
        <section
          key={group.id}
          id={group.id}
          className={gi % 2 === 0 ? 'section band-soft' : 'section'}
        >
          <div className="container">
            <SectionHead eyebrow={group.eyebrow} title={group.title} lead={group.lead} center />
            <Reveal variants={stagger} className="price-grid">
              {group.plans.map((p) => (
                <PriceCard
                  key={p.name}
                  plan={p}
                  badge={p.featured ? 'Best Value' : null}
                  ctaLabel={p.price === null ? 'Get a Custom Quote' : `Start with ${p.name}`}
                  amount={
                    p.price === null ? (
                      <div className="price-amount">
                        <span className="num-custom">Custom pricing</span>
                      </div>
                    ) : (
                      <div className="price-amount">
                        <span className="cur">£</span>
                        <span className="num">{gbp(p.price)}</span>
                        <span className="per">one-off</span>
                      </div>
                    )
                  }
                  note={
                    p.price === null
                      ? `Scoped and quoted for what you actually need · ${p.timeline}`
                      : `Fixed price, agreed before we start · ${p.timeline}`
                  }
                />
              ))}
            </Reveal>
            <Reveal variants={fadeUp} className="text-center" style={{ marginTop: 32 }}>
              <Link to={group.serviceTo} className="link-cta">
                What&rsquo;s involved in {group.eyebrow.toLowerCase()} <Chevron />
              </Link>
            </Reveal>
          </div>
        </section>
      ))}

      {/* DOMAIN PRICING — soft band */}
      <section className="section band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Domains"
            title="Register or transfer your domain."
            lead="Grab the perfect name — hundreds of extensions available, managed right alongside your hosting."
          />
          <Reveal variants={fadeUp}>
            <div className="table-scroll">
              <table className="domain-table">
                <caption className="sr-only">Domain registration and renewal prices by extension</caption>
                <thead>
                  <tr><th scope="col">Extension</th><th scope="col">Register (1st year)</th><th scope="col">Renewal</th><th scope="col"><span className="sr-only">Action</span></th></tr>
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
        <SectionHead eyebrow="Every hosting plan includes" title="More than just space on a server." center />
        <Reveal variants={stagger} className="grid grid-4">
          {[
            { t: 'Free SSL', b: 'HTTPS on every site, auto-renewed.' },
            { t: 'Daily Backups', b: 'Restore any time with one click.' },
            { t: 'Global CDN', b: 'Fast load times, everywhere.' },
            { t: '99.9% Uptime', b: 'SLA-backed, always monitored.' },
            { t: 'Free Domain', b: 'On us for your first year.' },
            { t: 'NVMe Storage', b: 'Solid-state speed as standard.' },
            { t: 'Updates Done', b: 'Core and plugins kept current.' },
            { t: 'Real Support', b: 'People who know your site.' },
          ].map((f) => (
            <motion.div variants={fadeUp} key={f.t} className="value-card">
              <h3 className="title-md">{f.t}</h3>
              <p className="body-sm" style={{ color: 'var(--muted)' }}>{f.b}</p>
            </motion.div>
          ))}
        </Reveal>
      </section>

      {/* FAQ — soft band */}
      <section className="section band-soft">
        <div className="container" style={{ maxWidth: 860 }}>
          <SectionHead eyebrow="Questions" title="Pricing FAQ." center />
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
        title="Not sure which one you need?"
        text="Tell us what the business actually needs to do and we will point you at the smallest thing that does it — free consultation, no pressure."
        primaryLabel="Get a Free Quote"
        secondaryLabel="Our Services"
        secondaryTo="/services"
      />
    </motion.div>
  )
}

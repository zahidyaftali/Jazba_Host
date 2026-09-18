import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './pages.css'
import { homeServices, featuredWork, testimonials, homeFaqs, hostingPlans, process } from '../data.js'
import { pageTransition, fadeUp, stagger, scaleIn } from '../components/motion.js'
import Reveal from '../components/Reveal.jsx'
import Seo from '../components/Seo.jsx'
import { SectionHead, StatStrip, Chevron } from '../components/Shared.jsx'

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <Seo
        page="home"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          '@id': 'https://jazbahost.com/#organization',
          name: 'Jazba Host',
          url: 'https://jazbahost.com',
          logo: 'https://jazbahost.com/favicon.svg',
          image: 'https://jazbahost.com/og-image.jpg',
          description:
            'Web design, development, managed UK hosting, app development and AI chatbots for businesses across the UK.',
          telephone: '+44-333-5777-014',
          email: 'info@jazbaentertainment.com',
          priceRange: '££',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '16 Grosvenor Road, Birchfield',
            addressLocality: 'Birmingham',
            postalCode: 'B20 3NP',
            addressCountry: 'GB',
          },
          areaServed: [{ '@type': 'Country', name: 'United Kingdom' }],
          makesOffer: [
            { '@type': 'Offer', name: 'Managed Hosting', priceCurrency: 'GBP', price: '8', description: 'Managed UK hosting per month' },
            { '@type': 'Offer', name: 'Website Development', priceCurrency: 'GBP', price: '1400', description: 'Fixed-price 5-page website' },
            { '@type': 'Offer', name: 'App Development', priceCurrency: 'GBP', price: '7200', description: 'Fixed-price cross-platform app' },
            { '@type': 'Offer', name: 'AI Chatbot', priceCurrency: 'GBP', price: '2000', description: 'Fixed-price AI chatbot build' },
          ],
        }}
      />
      {/* HERO — full-bleed orange band with atmospheric mesh */}
      <section className="home-hero">
        <div className="container home-hero-inner">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div variants={fadeUp}>
              <span className="hero-eyebrow">Complete Web Solutions</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="display-xxl" style={{ marginTop: 32 }}>
              Connect to The World
            </motion.h1>
            <motion.p variants={fadeUp} className="hero-lead">
              Premium web development, hosting, and digital solutions for businesses
              across the United Kingdom.
            </motion.p>
            <motion.div variants={fadeUp} className="hero-actions">
              <Link to="/services" className="btn btn-dark">Explore Services</Link>
              <Link to="/contact" className="btn btn-light">Get a Quote</Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <span className="line" />
        </div>
      </section>

      {/* STATS */}
      <StatStrip />

      {/* SERVICES — six white cards on cream */}
      <section className="section container">
        <SectionHead
          eyebrow="Our Services"
          title="Comprehensive digital solutions."
          lead="Tailored to elevate your business. From stunning websites to intelligent AI chatbots, we deliver results that matter."
        />
        <Reveal variants={stagger} className="grid grid-3">
          {homeServices.map((s, i) => (
            <motion.div variants={scaleIn} key={s.title} style={{ height: '100%' }}>
              <Link to={s.to} className="svc-mini">
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="title-md">{s.title}</h3>
                <p className="body-sm" style={{ color: 'var(--muted)' }}>{s.body}</p>
                <span className="link-cta">Learn More <Chevron /></span>
              </Link>
            </motion.div>
          ))}
        </Reveal>
      </section>

      {/* HOW WE WORK — dark band, horizontal numbered rail */}
      <section className="section band-dark">
        <div className="container">
          <SectionHead title="How We Work" center />
          <Reveal variants={stagger} className="process-rail">
            {process.map((p, i) => (
              <motion.div variants={fadeUp} key={p.step} className="process-node">
                <div className="process-dot">{i + 1}</div>
                <h4 className="title-lg">{p.title}</h4>
                <p className="body-sm">{p.body}</p>
              </motion.div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* FEATURED WORK — case-study cards on cream */}
      <section className="section container">
        <SectionHead
          eyebrow="Featured Work"
          title="Projects that deliver."
          lead="Live client sites we designed, built, host and maintain — a snapshot of the work."
        />
        <Reveal variants={stagger} className="grid grid-3">
          {featuredWork.map((w) => (
            <motion.div variants={scaleIn} key={w.slug} style={{ height: '100%' }}>
              <Link to={`/portfolio/${w.slug}`} className="work-card">
                <div className="work-photo">
                  <img src={w.image} alt={`Homepage of ${w.domain} — ${w.title}`} loading="lazy" width="1200" height="675" />
                  <span className="work-cat">{w.category}</span>
                </div>
                <div className="work-body">
                  <h3 className="title-md">{w.title}</h3>
                  <p className="body-sm" style={{ color: 'var(--muted)' }}>{w.body}</p>
                  <div className="work-tech">
                    {w.tech.slice(0, 4).map((t) => <span className="tech-chip" key={t}>{t}</span>)}
                  </div>
                  <div className="work-metrics">
                    {w.facts.map((m) => (
                      <div key={m.label}>
                        <div className="metric-v">{m.value}</div>
                        <div className="metric-l">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </Reveal>
        <Reveal variants={fadeUp} className="text-center" style={{ marginTop: 40 }}>
          <Link to="/portfolio" className="btn btn-secondary">View All Projects</Link>
        </Reveal>
      </section>

      {/* TESTIMONIALS — bone band */}
      <section className="section band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Client feedback"
            title="What Our Clients Say"
            lead="Every quote below comes from a live project you can open and look at yourself."
            center
          />
          <Reveal variants={stagger} className="grid grid-3">
            {testimonials.map((t) => (
              <motion.div variants={fadeUp} key={t.name} className="quote-card">
                <div className="quote-stars" aria-label="5 out of 5 stars">{'★'.repeat(5)}</div>
                <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                <div className="quote-footer">
                  <div className="quote-name">{t.name}</div>
                  <div className="quote-role">{t.role}</div>
                  <div className="quote-loc">{t.location}</div>
                  {t.slug && (
                    <Link to={`/portfolio/${t.slug}`} className="link-cta" style={{ marginTop: 12 }}>
                      See the project <Chevron />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* HOSTING PLANS — three tiers, featured dark inversion */}
      <section className="section container">
        <SectionHead
          eyebrow="Hosting"
          title="Reliable hosting, built for business."
          lead="Fast, secure UK hosting with free SSL, daily backups and the updates handled for you. From £8 a month, or 20% off when you pay yearly."
          center
        />
        <Reveal variants={stagger} className="price-grid">
          {hostingPlans.map((p) => (
            <motion.div variants={scaleIn} key={p.name} className={`price-card ${p.featured ? 'featured' : ''}`}>
              {p.featured && <span className="price-badge">Most Popular</span>}
              <div className="price-name">{p.name}</div>
              <div className="price-tag">{p.tagline}</div>
              <div className="price-amount">
                <span className="cur">£</span>
                <span className="num">{p.price}</span>
                <span className="per">/ month</span>
              </div>
              <ul className="price-features">
                {p.features.map((f) => (
                  <li key={f}><span className="tick">✓</span>{f}</li>
                ))}
              </ul>
              <Link to="/pricing" className={`btn ${p.featured ? 'btn-primary' : 'btn-secondary'}`}>Get Started</Link>
            </motion.div>
          ))}
        </Reveal>
        <Reveal variants={fadeUp} className="text-center" style={{ marginTop: 40 }}>
          <Link to="/pricing" className="btn btn-ghost">View All Plans <Chevron /></Link>
        </Reveal>
      </section>

      {/* FAQ — bone band */}
      <section className="section band-soft">
        <div className="container" style={{ maxWidth: 860 }}>
          <SectionHead eyebrow="Questions" title="Frequently asked questions." center />
          <Reveal variants={stagger} className="faq-list">
            {homeFaqs.map((f, i) => (
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

      {/* CLOSING STRIPE — full-bleed orange mesh, matching the hero */}
      <section className="closing-band">
        <div className="container">
          <Reveal variants={stagger}>
            <motion.h2 variants={fadeUp} className="display-xl">
              Ready to Connect to World?
            </motion.h2>
            <motion.p variants={fadeUp} className="body-lg">
              Let's discuss your project and find the perfect solution for your business.
              Get in touch today for a free consultation.
            </motion.p>
            <motion.div variants={fadeUp} className="closing-actions">
              <Link to="/contact" className="btn btn-dark">Start Your Project</Link>
              <Link to="/contact" className="btn btn-light">Contact Us</Link>
            </motion.div>
          </Reveal>
        </div>
      </section>
    </motion.div>
  )
}

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './pages.css'
import { services, capabilities, process } from '../data.js'
import { pageTransition, fadeUp, stagger, scaleIn } from '../components/motion.js'
import Reveal from '../components/Reveal.jsx'
import Seo from '../components/Seo.jsx'
import { SectionHead, CtaBand, PageHero, Chevron } from '../components/Shared.jsx'

const serviceTags = {
  'web-development': ['booking', 'ecommerce', 'portals', 'custom'],
  'web-design': ['branding', 'ux', 'mobile-first', 'wcag'],
  'hosting-and-maintenance': ['ssl', 'backups', 'updates', '24/7'],
  'wordpress-and-shopify': ['wordpress', 'woocommerce', 'shopify', 'seo'],
  'app-development': ['react-native', 'ios', 'android', 'expo'],
  'ai-chatbot': ['ai', 'leads', 'whatsapp', 'booking'],
}

export default function Services() {
  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <Seo page="services" />
      {/* HERO — orange mesh opener */}
      <PageHero
        crumbs={<><Link to="/">Home</Link> / Services</>}
        title="Everything you need to go live."
        lead="Three core services and a stack of smart capabilities — so you can build any type of website for any kind of business, and keep it running fast and secure."
      />

      {/* CORE SERVICES — editorial index rows */}
      <section className="section container">
        <SectionHead eyebrow="Core services" title="What we do best." />
        <div>
          {services.map((s, i) => (
            <Reveal variants={stagger} key={s.slug} className="svc-row">
              <motion.span variants={fadeUp} className="svc-row-num">{String(i + 1).padStart(2, '0')}</motion.span>
              <motion.div variants={fadeUp} className="svc-row-body">
                <h3 className="display-md">{s.title}</h3>
                <p className="title-md" style={{ color: 'var(--primary)', marginTop: 8 }}>{s.tagline}</p>
                <p className="body-md" style={{ marginTop: 16, color: 'var(--body)' }}>{s.intro}</p>
                <div className="svc-row-tags">
                  {(serviceTags[s.slug] || []).map((t) => <span className="badge" key={t}>{t}</span>)}
                </div>
                <div style={{ marginTop: 28 }}>
                  <Link to={`/services/${s.slug}`} className="btn btn-dark">Explore {s.title}</Link>
                </div>
              </motion.div>
              <motion.div variants={scaleIn} className="svc-row-media">
                <Link to={`/services/${s.slug}`}>
                  <img src={s.hero} alt={`${s.title} — ${s.tagline}`} loading="lazy" />
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CAPABILITIES — bone band */}
      <section className="section band-soft">
        <div className="container">
          <SectionHead
            eyebrow="Add-on capabilities"
            title="Smart features for modern businesses."
            lead="Bolt these onto any project — or let us build your whole platform around them."
          />
          <Reveal variants={stagger} className="grid grid-4">
            {capabilities.map((c) => (
              <motion.div variants={scaleIn} key={c.title} className="cap-card">
                <div className="cap-card-bg" style={{ backgroundImage: `url(${c.image})` }} />
                <div className="cap-card-veil" />
                <div className="cap-card-body">
                  <h3 className="title-md" style={{ color: 'var(--on-dark)' }}>{c.title}</h3>
                  <p className="body-sm">{c.body}</p>
                </div>
              </motion.div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* HOW WE WORK — dark band, numbered rail */}
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

      {/* HOSTING BANNER — dark inversion card */}
      <section className="section container">
        <Reveal variants={scaleIn}>
          <div className="hosting-banner">
            <div>
              <div className="eyebrow" style={{ color: 'var(--on-dark-soft)' }}>Keep it online</div>
              <h2 className="display-md" style={{ color: 'var(--on-dark)', marginTop: 12 }}>
                Managed hosting from £8/mo.
              </h2>
              <p className="body-md" style={{ color: 'var(--on-dark-soft)', marginTop: 12, maxWidth: 560 }}>
                Fast SSD servers, free SSL, daily backups and a 99.9% uptime guarantee — plus a free
                domain for your first year.
              </p>
            </div>
            <Link to="/pricing" className="btn btn-primary">View Pricing <Chevron /></Link>
          </div>
        </Reveal>
      </section>

      <CtaBand
        title="Not sure which service you need? Let's talk."
        text="Tell us about your business and we'll recommend the right mix — and quote it clearly."
        primaryLabel="Get a Quote"
        secondaryLabel="About Us"
        secondaryTo="/about"
      />
    </motion.div>
  )
}

import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import './pages.css'
import { services } from '../data.js'
import { pageTransition, fadeUp, stagger, scaleIn } from '../components/motion.js'
import Reveal from '../components/Reveal.jsx'
import { SectionHead, CtaBand, Eyebrow, Chevron, PageHero } from '../components/Shared.jsx'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)
  if (!service) return <Navigate to="/services" replace />

  const others = services.filter((s) => s.slug !== slug)

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      {/* HERO — cream opener */}
      <PageHero
        crumbs={<><Link to="/">Home</Link> / <Link to="/services">Services</Link> / {service.title}</>}
        eyebrow="Service"
        title={service.title}
        subtitle={service.tagline}
        lead={service.intro}
      >
        <Link to="/contact" className="btn btn-dark">Start a Project</Link>
        {slug === 'hosting-and-domain' && <Link to="/pricing" className="btn btn-light">View Pricing</Link>}
      </PageHero>

      {/* WHAT'S INCLUDED */}
      <section className="section container">
        <SectionHead eyebrow="What's included" title={`Everything in ${service.title}.`} />
        <Reveal variants={stagger}>
          <motion.ul className="detail-highlights">
            {service.highlights.map((h) => (
              <motion.li variants={fadeUp} key={h}><span className="tick">✓</span>{h}</motion.li>
            ))}
          </motion.ul>
        </Reveal>
      </section>

      {/* DELIVERABLES / PROCESS — soft band */}
      <section className="section band-soft">
        <div className="container">
          <SectionHead eyebrow="How it works" title="From brief to launch." />
          <Reveal variants={stagger} className="deliver-grid">
            {service.deliverables.map((d, i) => (
              <motion.div variants={fadeUp} key={d.title} className="deliver-card">
                <div className="dnum">STEP {`0${i + 1}`}</div>
                <h4 className="title-lg">{d.title}</h4>
                <p className="body-md" style={{ color: 'var(--muted)' }}>{d.body}</p>
              </motion.div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* SUPPORTING SPLIT */}
      <section className="section container">
        <div className="split">
          <Reveal className="split-media" variants={scaleIn}>
            <img src={service.hero} alt={service.title} loading="lazy" />
          </Reveal>
          <Reveal className="split-body" variants={stagger}>
            <motion.div variants={fadeUp}><Eyebrow>Why it matters</Eyebrow></motion.div>
            <motion.h2 variants={fadeUp} className="display-md" style={{ marginTop: 16 }}>
              Built to perform, made to last.
            </motion.h2>
            <motion.p variants={fadeUp} className="body-md" style={{ marginTop: 16 }}>
              {service.title} at Jazba Host isn't a template drop. We tailor everything to your
              business goals, wire in the integrations you need, and back it with real support — so
              your investment keeps paying off.
            </motion.p>
            <motion.div variants={fadeUp} style={{ marginTop: 28 }}>
              <Link to="/contact" className="btn btn-secondary">Discuss Your Project</Link>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="section band-soft">
        <div className="container">
          <SectionHead eyebrow="Keep exploring" title="Other services." />
          <Reveal variants={stagger} className="grid grid-2">
            {others.map((s) => (
              <motion.div variants={scaleIn} key={s.slug}>
                <Link to={`/services/${s.slug}`} className="svc-card">
                  <div className="card-photo" style={{ aspectRatio: '16 / 9' }}><img src={s.hero} alt={s.title} loading="lazy" /></div>
                  <div className="svc-card-body">
                    <h3 className="title-md">{s.title}</h3>
                    <p className="body-sm" style={{ color: 'var(--muted)' }}>{s.tagline}</p>
                    <span className="link-cta">Learn More <Chevron /></span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand
        title={`Ready to get started with ${service.title}?`}
        text="Send us a message and we'll come back with a clear plan and a fair quote."
        primaryLabel="Get a Quote"
      />
    </motion.div>
  )
}

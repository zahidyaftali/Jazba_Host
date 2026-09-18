import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import './pages.css'
import { services } from '../data.js'
import { pageTransition, fadeUp, stagger, scaleIn } from '../components/motion.js'
import Reveal from '../components/Reveal.jsx'
import Seo from '../components/Seo.jsx'
import { SectionHead, CtaBand, PageHero, Chevron } from '../components/Shared.jsx'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)
  if (!service) return <Navigate to="/services" replace />

  // Show only the three highest-priority sibling services (array is in priority order).
  const others = services.filter((s) => s.slug !== slug).slice(0, 3)

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <Seo
        service={service.slug}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.title,
          serviceType: service.title,
          provider: { '@type': 'Organization', name: 'Jazba Host', url: 'https://jazbahost.com' },
          areaServed: 'GB',
          description: service.tagline,
        }}
      />
      {/* 1 — HERO */}
      <PageHero
        crumbs={<><Link to="/">Home</Link> / <Link to="/services">Services</Link> / {service.title}</>}
        eyebrow="Service"
        title={service.title}
        subtitle={service.tagline}
        lead={service.intro}
      >
        <Link to="/contact" className="btn btn-dark">Get a Free Quote</Link>
        <Link to="/pricing" className="btn btn-light">See Pricing</Link>
      </PageHero>

      {/* 2 — WHO IT'S FOR */}
      <section className="section container">
        <SectionHead
          eyebrow="Who it's for"
          title={service.audiencesTitle}
          lead={service.audiencesLead}
        />
        <Reveal variants={stagger} className="grid grid-3">
          {service.audiences.map((a, i) => (
            <motion.div variants={scaleIn} key={a.title} className="svc-mini" style={{ cursor: 'default' }}>
              <span className="num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="title-md">{a.title}</h3>
              <p className="body-sm" style={{ color: 'var(--muted)' }}>{a.body}</p>
            </motion.div>
          ))}
        </Reveal>
      </section>

      {/* 3 — WHAT'S INCLUDED */}
      <section className="section band-soft">
        <div className="container">
          <SectionHead eyebrow="What's included" title={`Everything in ${service.title}.`} />
          <Reveal variants={stagger}>
            <motion.ul className="detail-highlights">
              {service.highlights.map((h) => (
                <motion.li variants={fadeUp} key={h}><span className="tick">✓</span>{h}</motion.li>
              ))}
            </motion.ul>
          </Reveal>
        </div>
      </section>

      {/* 4 — WHAT WE CAN BUILD */}
      <section className="section container">
        <SectionHead
          eyebrow="Possibilities"
          title={service.useCasesTitle}
          lead={service.useCasesLead}
          center
        />
        <Reveal variants={stagger} className="usecase-chips">
          {service.useCases.map((u) => (
            <motion.span variants={fadeUp} key={u} className="usecase-chip">{u}</motion.span>
          ))}
        </Reveal>
      </section>

      {/* 5 — HOW IT WORKS */}
      <section className="section band-dark">
        <div className="container">
          <SectionHead title="How it works" center />
          <Reveal variants={stagger} className="process-rail rail-3">
            {service.deliverables.map((d, i) => (
              <motion.div variants={fadeUp} key={d.title} className="process-node">
                <div className="process-dot">{i + 1}</div>
                <h4 className="title-lg">{d.title}</h4>
                <p className="body-sm">{d.body}</p>
              </motion.div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 6 — TOOLS & HOW WE DO IT */}
      <section className="section container">
        <SectionHead
          eyebrow="Tools & tech"
          title={service.toolsTitle}
          lead={service.toolsLead}
          center
        />
        <Reveal variants={stagger} className="grid grid-3">
          {service.tools.map((t) => (
            <motion.div variants={scaleIn} key={t.name} className="tool-card">
              <span className="tool-name">{t.name}</span>
              <p className="body-sm" style={{ color: 'var(--muted)' }}>{t.note}</p>
            </motion.div>
          ))}
        </Reveal>
      </section>

      {/* 7 — OTHER SERVICES */}
      <section className="section band-soft">
        <div className="container">
          <SectionHead eyebrow="Keep exploring" title="Other services." />
          <Reveal variants={stagger} className="grid grid-3">
            {others.map((s) => (
              <motion.div variants={scaleIn} key={s.slug} style={{ height: '100%' }}>
                <Link to={`/services/${s.slug}`} className="svc-card">
                  <div className="card-photo" style={{ aspectRatio: '16 / 9' }}><img src={s.hero} alt={`${s.title} — ${s.tagline}`} loading="lazy" /></div>
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

      {/* 8 — CTA */}
      <CtaBand
        title={`Ready to get started with ${service.title}?`}
        text="Send us a message and we'll come back with a clear plan and a fair quote — free consultation, no pressure."
      />
    </motion.div>
  )
}

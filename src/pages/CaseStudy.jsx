import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import './pages.css'
import { projects } from '../data.js'
import { pageTransition, fadeUp, stagger, scaleIn } from '../components/motion.js'
import Reveal from '../components/Reveal.jsx'
import Seo from '../components/Seo.jsx'
import { SectionHead, CtaBand, PageHero, Eyebrow, Chevron } from '../components/Shared.jsx'

export default function CaseStudy() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  if (!project) return <Navigate to="/portfolio" replace />

  const next = projects[(projects.indexOf(project) + 1) % projects.length]

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <Seo
        project={project.slug}
        image={project.image}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: project.title,
          about: project.client,
          url: project.url,
          image: `https://jazbahost.com${project.image}`,
          creator: { '@type': 'Organization', name: 'Jazba Host', url: 'https://jazbahost.com' },
        }}
      />
      {/* 1 — HERO */}
      <PageHero
        crumbs={<><Link to="/">Home</Link> / <Link to="/portfolio">Portfolio</Link> / {project.title}</>}
        eyebrow={project.category}
        title={project.title}
        subtitle={`${project.client} · ${project.location}`}
        lead={project.body}
      >
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-light">
          Visit {project.domain} ↗
        </a>
        <Link to="/contact" className="btn btn-dark">Start a Project Like This</Link>
      </PageHero>

      {/* 2 — HEADLINE METRICS */}
      <Reveal variants={stagger} className="stat-strip">
        <div className="container stat-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {project.facts.map((m) => (
            <motion.div key={m.label} variants={fadeUp} className="stat-cell">
              <div className="stat-value display-md">{m.value}</div>
              <div className="stat-label label-uppercase">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </Reveal>

      {/* 3 — LIVE SCREENSHOT + WHAT'S ON THE PAGE */}
      <section className="section-sm container">
        <Reveal variants={scaleIn} className="cs-hero-img">
          <img src={project.image} alt={`Homepage of ${project.domain} — ${project.title} built by Jazba Host`} />
        </Reveal>
        <Reveal variants={fadeUp} className="cs-shot-note">
          <div className="eyebrow">What you&rsquo;re looking at</div>
          <p className="body-md">{project.screenshotNotes}</p>
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="link-cta">
            See it live at {project.domain} ↗
          </a>
        </Reveal>
      </section>

      {/* 4 — CHALLENGE & SOLUTION */}
      <section className="section container">
        <div className="cs-cols">
          <Reveal variants={stagger}>
            <motion.div variants={fadeUp}><Eyebrow>The challenge</Eyebrow></motion.div>
            <motion.h2 variants={fadeUp} className="display-md" style={{ marginTop: 16 }}>
              Where they started.
            </motion.h2>
            <motion.p variants={fadeUp} className="body-lg" style={{ marginTop: 20, color: 'var(--body)' }}>
              {project.challenge}
            </motion.p>
          </Reveal>
          <Reveal variants={stagger}>
            <motion.div variants={fadeUp}><Eyebrow>What we built</Eyebrow></motion.div>
            <motion.h2 variants={fadeUp} className="display-md" style={{ marginTop: 16 }}>
              Our solution.
            </motion.h2>
            <motion.p variants={fadeUp} className="body-lg" style={{ marginTop: 20, color: 'var(--body)' }}>
              {project.solution}
            </motion.p>
            <motion.div variants={fadeUp} className="work-tech" style={{ marginTop: 24 }}>
              {project.tech.map((t) => <span className="tech-chip" key={t}>{t}</span>)}
            </motion.div>
            <motion.div variants={fadeUp} className="cs-services">
              {project.serviceLinks.map((s) => (
                <Link key={s.to} to={s.to} className="badge">{s.label}</Link>
              ))}
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* 5 — RESULTS + ONGOING CARE */}
      <section className="section band-soft">
        <div className="container">
          <SectionHead eyebrow="The results" title="What changed." />
          <div className="cs-cols" style={{ alignItems: 'start' }}>
            <Reveal variants={stagger}>
              <motion.ul className="feature-list">
                {project.results.map((r) => (
                  <motion.li variants={fadeUp} key={r}><span className="tick">✓</span>{r}</motion.li>
                ))}
              </motion.ul>
            </Reveal>
            <Reveal variants={scaleIn} className="quote-card care-card">
              <div className="eyebrow">Still on our books</div>
              <h3 className="title-lg" style={{ marginTop: 12 }}>{project.care.title}</h3>
              <ul className="care-list">
                {project.care.points.map((c) => <li key={c}>{c}</li>)}
              </ul>
              <Link to="/services/hosting-and-maintenance" className="link-cta">
                How our hosting &amp; care works <Chevron />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6 — NEXT PROJECT */}
      <section className="section container">
        <Reveal variants={scaleIn}>
          <Link to={`/portfolio/${next.slug}`} className="next-card">
            <div>
              <div className="eyebrow">Next project</div>
              <h2 className="display-md" style={{ marginTop: 12 }}>{next.title}</h2>
              <p className="body-md" style={{ color: 'var(--muted)', marginTop: 8 }}>{next.body}</p>
            </div>
            <span className="link-cta">View case study <Chevron /></span>
          </Link>
        </Reveal>
      </section>

      <CtaBand
        title="Want results like these?"
        text="Tell us about your business and we'll show you what's possible — free consultation, no pressure."
        primaryLabel="Get a Free Quote"
        secondaryLabel="All Projects"
        secondaryTo="/portfolio"
      />
    </motion.div>
  )
}

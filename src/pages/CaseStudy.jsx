import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import './pages.css'
import { projects } from '../data.js'
import { pageTransition, fadeUp, stagger, scaleIn } from '../components/motion.js'
import Reveal from '../components/Reveal.jsx'
import { SectionHead, CtaBand, PageHero, Eyebrow, Chevron } from '../components/Shared.jsx'

export default function CaseStudy() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  if (!project) return <Navigate to="/portfolio" replace />

  const next = projects[(projects.indexOf(project) + 1) % projects.length]

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      {/* 1 — HERO */}
      <PageHero
        crumbs={<><Link to="/">Home</Link> / <Link to="/portfolio">Portfolio</Link> / {project.title}</>}
        eyebrow={project.category}
        title={project.title}
        subtitle={`${project.client} · ${project.location} · ${project.year}`}
        lead={project.body}
      >
        <Link to="/contact" className="btn btn-dark">Start a Project Like This</Link>
      </PageHero>

      {/* 2 — HEADLINE METRICS */}
      <Reveal variants={stagger} className="stat-strip">
        <div className="container stat-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {project.metrics.map((m) => (
            <motion.div key={m.label} variants={fadeUp} className="stat-cell">
              <div className="stat-value display-md">{m.value}</div>
              <div className="stat-label label-uppercase">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </Reveal>

      {/* 3 — HERO IMAGE */}
      <section className="section-sm container">
        <Reveal variants={scaleIn} className="cs-hero-img">
          <img src={project.image} alt={project.title} />
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

      {/* 5 — RESULTS + CLIENT QUOTE */}
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
            <Reveal variants={scaleIn} className="quote-card">
              <div className="quote-stars" aria-label="5 out of 5 stars">{'★'.repeat(5)}</div>
              <blockquote>&ldquo;{project.quote.text}&rdquo;</blockquote>
              <div className="quote-footer">
                <div className="quote-name">{project.quote.name}</div>
                <div className="quote-role">{project.quote.role}</div>
              </div>
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

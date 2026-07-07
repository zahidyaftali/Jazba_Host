import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './pages.css'
import { projects } from '../data.js'
import { pageTransition, fadeUp } from '../components/motion.js'
import Reveal from '../components/Reveal.jsx'
import { CtaBand, PageHero, Chevron } from '../components/Shared.jsx'

const categories = ['All', ...new Set(projects.map((p) => p.category))]

export default function Portfolio() {
  const [cat, setCat] = useState('All')
  const shown = cat === 'All' ? projects : projects.filter((p) => p.category === cat)

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      {/* HERO */}
      <PageHero
        crumbs={<><Link to="/">Home</Link> / Portfolio</>}
        eyebrow="Our Work"
        title="Work that works."
        lead="Real projects for UK startups, growing businesses and large organisations — built, hosted and maintained by one team. Every number below is measured, not guessed."
      />

      {/* PROJECT GRID */}
      <section className="section container">
        <Reveal variants={fadeUp} className="filter-pills">
          {categories.map((c) => (
            <button key={c} className={`filter-pill ${cat === c ? 'active' : ''}`} onClick={() => setCat(c)}>
              {c}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="grid grid-2">
          <AnimatePresence mode="popLayout">
            {shown.map((p) => (
              <motion.div
                layout
                key={p.slug}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                style={{ height: '100%' }}
              >
                <Link to={`/portfolio/${p.slug}`} className="work-card project-card">
                  <div className="work-photo">
                    <img src={p.image} alt={p.title} loading="lazy" />
                    <span className="work-cat">{p.category}</span>
                  </div>
                  <div className="work-body">
                    <div className="project-meta">{p.client} · {p.location} · {p.year}</div>
                    <h3 className="title-lg">{p.title}</h3>
                    <p className="body-sm" style={{ color: 'var(--muted)' }}>{p.body}</p>
                    <div className="work-tech">
                      {p.tech.slice(0, 4).map((t) => <span className="tech-chip" key={t}>{t}</span>)}
                    </div>
                    <div className="work-metrics">
                      {p.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="metric-v">{m.value}</div>
                          <div className="metric-l">{m.label}</div>
                        </div>
                      ))}
                    </div>
                    <span className="link-cta" style={{ marginTop: 16 }}>View case study <Chevron /></span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <CtaBand
        title="Your project could be next."
        text="Tell us what your business needs and we'll come back with a clear plan and a fair quote — free consultation, no pressure."
        primaryLabel="Start Your Project"
        secondaryLabel="Our Services"
        secondaryTo="/services"
      />
    </motion.div>
  )
}

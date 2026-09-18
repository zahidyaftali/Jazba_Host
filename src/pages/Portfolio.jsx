import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './pages.css'
import { projects } from '../data.js'
import { pageTransition, fadeUp } from '../components/motion.js'
import Reveal from '../components/Reveal.jsx'
import Seo from '../components/Seo.jsx'
import { CtaBand, PageHero, Chevron } from '../components/Shared.jsx'

const categories = ['All', ...new Set(projects.map((p) => p.category))]

export default function Portfolio() {
  const [cat, setCat] = useState('All')
  const shown = cat === 'All' ? projects : projects.filter((p) => p.category === cat)

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <Seo page="portfolio" />
      {/* HERO */}
      <PageHero
        crumbs={<><Link to="/">Home</Link> / Portfolio</>}
        eyebrow="Our Work"
        title="Work that works."
        lead="Every site below is live right now — designed and built by us, running on our hosting, and looked after by us every week. Charities, restaurants, salons, cleaning contractors, retail launches and awards nights."
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
                    <img src={p.image} alt={`Homepage of ${p.domain} — ${p.title}`} loading="lazy" width="1200" height="675" />
                    <span className="work-cat">{p.category}</span>
                  </div>
                  <div className="work-body">
                    <div className="project-meta">{p.client} · {p.location}</div>
                    <h3 className="title-lg">{p.title}</h3>
                    <p className="body-sm" style={{ color: 'var(--muted)' }}>{p.body}</p>
                    <div className="work-tech">
                      {p.tech.slice(0, 4).map((t) => <span className="tech-chip" key={t}>{t}</span>)}
                    </div>
                    <div className="work-metrics">
                      {p.facts.map((m) => (
                        <div key={m.label}>
                          <div className="metric-v">{m.value}</div>
                          <div className="metric-l">{m.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="work-foot">
                      <span className="work-domain">{p.domain}</span>
                      <span className="link-cta">View case study <Chevron /></span>
                    </div>
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

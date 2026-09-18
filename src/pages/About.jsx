import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './pages.css'
import { img } from '../data.js'
import { pageTransition, fadeUp, stagger, scaleIn } from '../components/motion.js'
import Reveal from '../components/Reveal.jsx'
import Seo from '../components/Seo.jsx'
import { SectionHead, CtaBand, StatStrip, Eyebrow, PageHero } from '../components/Shared.jsx'

const values = [
  { title: 'One team, end to end', body: 'Design, development and hosting sit under one roof — no handoffs, no finger-pointing, no gaps.' },
  { title: 'The right tool, always', body: 'React, WordPress, Shopify or plain HTML — we choose the stack that fits your goals, not our habits.' },
  { title: 'Built to last', body: 'Clean code, real security and managed hosting mean your site keeps performing long after launch.' },
  { title: 'People who answer', body: 'A real team across the UK and Pakistan, reachable when you need us — 24/7 monitoring included.' },
]

export default function About() {
  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <Seo page="about" />
      {/* HERO — orange mesh opener */}
      <PageHero
        crumbs={<><Link to="/">Home</Link> / About</>}
        title="A complete web solution."
        lead="Part of Jazba Entertainment Ltd., we design, build and host websites for businesses of every shape — from a single landing page to a full ecommerce platform."
      />

      {/* MANIFESTO — centered statement */}
      <section className="section container">
        <Reveal variants={stagger} className="manifesto">
          <motion.div variants={fadeUp} style={{ display: 'flex', justifyContent: 'center' }}>
            <Eyebrow>Who we are</Eyebrow>
          </motion.div>
          <motion.h2 variants={fadeUp} className="display-lg" style={{ marginTop: 24 }}>
            We turn business goals into websites that work.
          </motion.h2>
          <motion.p variants={fadeUp} className="body-lg" style={{ marginTop: 24, color: 'var(--muted)' }}>
            Jazba Host exists to remove the friction of building online. Instead of juggling a
            designer, a developer and a hosting company, you get one partner who understands the
            whole picture — and is accountable for all of it. With offices in the United Kingdom
            and Pakistan, we combine European standards with a deep, hands-on engineering team.
          </motion.p>
        </Reveal>

        {/* PHOTO STRIP */}
        <Reveal variants={stagger} className="photo-strip" style={{ marginTop: 64 }}>
          {[
            { src: img.team, alt: 'The Jazba Host team collaborating' },
            { src: img.office, alt: 'Modern office workspace' },
            { src: img.strategy, alt: 'Planning a web strategy together' },
          ].map((p) => (
            <motion.div variants={scaleIn} key={p.src} className="photo-strip-item">
              <img src={p.src} alt={p.alt} loading="lazy" />
            </motion.div>
          ))}
        </Reveal>
      </section>

      {/* STATS — dark */}
      <StatStrip dark />

      {/* VALUES — numbered white cards on the bone band */}
      <section className="section band-soft">
        <div className="container">
          <SectionHead eyebrow="What we stand for" title="Principles behind every build." />
          <Reveal variants={stagger} className="grid grid-4">
            {values.map((v, i) => (
              <motion.div variants={scaleIn} key={v.title} className="svc-mini" style={{ cursor: 'default' }}>
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <h4 className="title-md">{v.title}</h4>
                <p className="body-sm" style={{ color: 'var(--muted)' }}>{v.body}</p>
              </motion.div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* MISSION SPLIT */}
      <section className="section container">
        <div className="split">
          <Reveal className="split-media" variants={scaleIn}>
            <img src={img.code} alt="Clean code on screen" loading="lazy" />
          </Reveal>
          <Reveal className="split-body" variants={stagger}>
            <motion.div variants={fadeUp}><Eyebrow>Our mission</Eyebrow></motion.div>
            <motion.h2 variants={fadeUp} className="display-lg" style={{ marginTop: 16 }}>
              Connect to the World.
            </motion.h2>
            <motion.p variants={fadeUp} className="body-lg" style={{ marginTop: 24 }}>
              We believe great software shouldn't be reserved for big budgets. Our mission is to make
              world-class web design, development and hosting accessible to every business — with the
              modern extras that used to be out of reach: AI chat, automation, ecommerce and booking.
            </motion.p>
            <motion.ul variants={stagger} className="feature-list" style={{ marginTop: 24 }}>
              {['Two international offices, one team', 'Frameworks, CMS, HTML & AI', 'Design, build and hosting in-house', 'Long-term support & partnership'].map((f) => (
                <motion.li variants={fadeUp} key={f}><span className="tick">✓</span>{f}</motion.li>
              ))}
            </motion.ul>
            <motion.div variants={fadeUp} style={{ marginTop: 32 }}>
              <Link to="/services" className="btn btn-dark">Our Services</Link>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <CtaBand
        title="Let's build the website your business deserves."
        text="Wherever you are, we're a message away. Tell us what you need and we'll take it from there."
        primaryLabel="Contact Us"
        secondaryLabel="See Our Work"
        secondaryTo="/services"
      />
    </motion.div>
  )
}

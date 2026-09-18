import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './pages.css'
import { pageTransition, fadeUp, stagger } from '../components/motion.js'
import { Eyebrow } from '../components/Shared.jsx'
import Seo from '../components/Seo.jsx'

// Launch target — update this date to move the countdown.
const LAUNCH_DATE = new Date('2026-10-01T09:00:00Z')

const units = [
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hours' },
  { key: 'minutes', label: 'Minutes' },
  { key: 'seconds', label: 'Seconds' },
]

function remaining() {
  const ms = Math.max(0, LAUNCH_DATE.getTime() - Date.now())
  const total = Math.floor(ms / 1000)
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
    done: ms === 0,
  }
}

export default function ComingSoon() {
  const [time, setTime] = useState(remaining)
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const id = setInterval(() => setTime(remaining()), 1000)
    return () => clearInterval(id)
  }, [])

  const submit = (e) => { e.preventDefault(); setSent(true) }

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <Seo page="comingSoon" />
      <section className="coming">
        <div className="container coming-inner">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div variants={fadeUp}>
              <Link to="/" className="brand coming-brand" aria-label="Jazba Host home">
                <span className="brand-mark">J</span>
                <span className="brand-text">Jazba<span className="brand-accent">Host</span></span>
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} style={{ marginTop: 48 }}>
              <Eyebrow onDark>Launching soon</Eyebrow>
            </motion.div>

            <motion.h1 variants={fadeUp} className="display-xxl coming-title">
              Something new is<br />on the way.
            </motion.h1>

            <motion.p variants={fadeUp} className="body-lg coming-lead">
              We're putting the finishing touches on our next release. Leave your email and
              we'll let you know the moment it goes live — no spam, just one message.
            </motion.p>

            <motion.div variants={fadeUp} className="countdown" aria-live="polite">
              {units.map((u) => (
                <div key={u.key} className="count-cell">
                  <div className="count-value">{String(time[u.key]).padStart(2, '0')}</div>
                  <div className="count-label label-uppercase">{u.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="coming-form-wrap">
              {sent ? (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="coming-success">
                  <strong style={{ fontWeight: 600 }}>You're on the list.</strong><br />
                  We'll email {email} as soon as we launch.
                </motion.div>
              ) : (
                <form className="coming-form" onSubmit={submit}>
                  <label htmlFor="notify-email" className="sr-only">Email address</label>
                  <input
                    id="notify-email"
                    type="email"
                    required
                    className="input"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="submit" className="btn btn-dark">Notify Me</button>
                </form>
              )}
            </motion.div>

            <motion.p variants={fadeUp} className="body-sm coming-foot">
              Need something today? <Link to="/contact">Talk to our team</Link> or head <Link to="/">back home</Link>.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

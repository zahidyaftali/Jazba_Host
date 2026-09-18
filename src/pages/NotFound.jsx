import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './pages.css'
import { pageTransition } from '../components/motion.js'
import Seo from '../components/Seo.jsx'

export default function NotFound() {
  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <Seo page="notFound" />
      <section className="notfound container">
        <div>
          <div className="code">404</div>
          <span className="stripe-divider mx-auto" style={{ margin: '16px auto' }} />
          <h1 className="display-md" style={{ marginTop: 16 }}>Page not found.</h1>
          <p className="body-md" style={{ color: 'var(--muted)', margin: '16px auto 32px', maxWidth: 440 }}>
            The page you're looking for has moved or never existed. Let's get you back on track.
          </p>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </section>
    </motion.div>
  )
}

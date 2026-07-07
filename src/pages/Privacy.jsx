import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './pages.css'
import { pageTransition } from '../components/motion.js'
import Reveal from '../components/Reveal.jsx'
import { PageHero } from '../components/Shared.jsx'

const sections = [
  {
    h: '1. Who we are',
    ps: [
      'Jazba Host is a trading name of Jazba Entertainment Ltd., registered in England and Wales, with its registered office at 16 Grosvenor Road, Birchfield, Birmingham B20 3NP, United Kingdom. We are the data controller for personal information collected through this website and our services.',
    ],
  },
  {
    h: '2. What we collect',
    ps: [
      'Contact details you give us — name, email address, phone number, company name — when you fill in our contact form, request a quote, or sign up for hosting.',
      'Billing information needed to invoice you for projects and hosting plans. Card payments are processed by our payment providers; we never store full card numbers.',
      'Technical data such as your IP address, browser type and pages visited, collected through cookies and analytics when you browse this website.',
      'Service data required to operate your hosting — such as domain details, server logs and backup archives of your website.',
    ],
  },
  {
    h: '3. How we use your information',
    ps: [
      'To respond to enquiries and provide quotes; to deliver, host and maintain the services you engage us for; to invoice and collect payment; to send service notices such as renewal reminders, maintenance windows and security alerts; and to improve our website and services.',
      'We only send marketing emails if you have opted in, and every one includes an unsubscribe link. We never sell your personal information.',
    ],
  },
  {
    h: '4. Legal bases',
    ps: [
      'We process personal data under UK GDPR on the following bases: performance of a contract (delivering your project or hosting), legitimate interests (responding to enquiries, improving our services, securing our infrastructure), legal obligation (tax and accounting records), and consent (marketing communications and non-essential cookies).',
    ],
  },
  {
    h: '5. Cookies & analytics',
    ps: [
      'This website uses essential cookies needed for it to function, and analytics cookies that help us understand how visitors use the site so we can improve it. Embedded services — such as Google Maps on our contact page — may set their own cookies subject to their own policies. You can control cookies through your browser settings.',
    ],
  },
  {
    h: '6. Who we share data with',
    ps: [
      'Trusted service providers who help us operate: hosting infrastructure and CDN providers, payment processors, email providers and analytics services — each bound by their own data-protection obligations.',
      'We may also disclose information where required by law. We do not sell or rent personal information to anyone.',
    ],
  },
  {
    h: '7. International transfers',
    ps: [
      'We operate from the United Kingdom and Pakistan. Where personal data is transferred outside the UK, we ensure appropriate safeguards are in place, such as UK-approved standard contractual clauses.',
    ],
  },
  {
    h: '8. How long we keep data',
    ps: [
      'Enquiry data is kept for up to two years after last contact. Customer account and billing records are kept for six years, as required by UK tax law. Website backups within hosting plans are retained on the rolling schedule described in your plan, and deleted when your plan ends.',
    ],
  },
  {
    h: '9. Your rights',
    ps: [
      'Under UK GDPR you have the right to access, correct, delete or export the personal data we hold about you, to object to or restrict processing, and to withdraw consent at any time. To exercise any of these rights, email info@jazbaentertainment.com — we respond within 30 days.',
      'You also have the right to lodge a complaint with the Information Commissioner\'s Office (ico.org.uk) if you are unhappy with how we handle your data.',
    ],
  },
  {
    h: '10. Changes & contact',
    ps: [
      'We may update this policy from time to time; the latest version will always be published on this page with its revision date.',
      'Questions about your data? Email info@jazbaentertainment.com or write to Jazba Entertainment Ltd., 16 Grosvenor Road, Birchfield, Birmingham B20 3NP, United Kingdom.',
    ],
  },
]

export default function Privacy() {
  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <PageHero
        crumbs={<><Link to="/">Home</Link> / Privacy Policy</>}
        eyebrow="Legal"
        title="Privacy Policy"
        lead="How Jazba Host collects, uses and protects your personal information, in line with UK GDPR. Last updated: 7 July 2026."
      />
      <section className="section container">
        <Reveal className="legal-body">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="title-lg">{s.h}</h2>
              {s.ps.map((p, i) => <p className="body-md" key={i}>{p}</p>)}
            </div>
          ))}
        </Reveal>
      </section>
    </motion.div>
  )
}

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './pages.css'
import { pageTransition } from '../components/motion.js'
import Reveal from '../components/Reveal.jsx'
import Seo from '../components/Seo.jsx'
import { PageHero } from '../components/Shared.jsx'

const sections = [
  {
    h: '1. Who we are',
    ps: [
      'These Terms of Use ("Terms") govern your use of the Jazba Host website and services. Jazba Host is a trading name of Jazba Entertainment Ltd., registered in England and Wales, with its registered office at 16 Grosvenor Road, Birchfield, Birmingham B20 3NP, United Kingdom ("we", "us", "our").',
      'By using our website or engaging our services, you agree to these Terms. If you do not agree, please do not use the website or our services.',
    ],
  },
  {
    h: '2. Our services',
    ps: [
      'We provide web design, web development, WordPress and Shopify builds, app development, AI chatbot development, and website hosting and maintenance services. The specific scope, deliverables, timelines and fees for any project are set out in the individual written proposal or agreement we provide before work begins.',
      'Proposals are valid for 30 days unless stated otherwise. Work commences once a proposal is accepted in writing and any agreed deposit has been received.',
    ],
  },
  {
    h: '3. Quotes, payments & billing',
    ps: [
      'Project work is quoted individually and may be billed against agreed milestones. Hosting and maintenance plans are billed monthly or annually in advance, as selected at sign-up. All prices exclude VAT unless stated otherwise.',
      'If an invoice remains unpaid 14 days after its due date, we may suspend services (including hosting) until payment is received. We will always contact you before any suspension.',
    ],
  },
  {
    h: '4. Hosting & maintenance',
    ps: [
      'Our hosting plans include the resources, backup frequency and support levels described on our pricing page. We target 99.9% uptime, excluding scheduled maintenance windows, which we announce in advance wherever possible.',
      'Daily backups are retained on a rolling basis. While we take every reasonable measure to protect your data, you are responsible for maintaining your own copies of any critical content you upload.',
      'You may cancel a hosting plan at any time with 30 days\' notice. We will provide a full export of your website files and databases on request at cancellation.',
    ],
  },
  {
    h: '5. Your responsibilities',
    ps: [
      'You agree to provide the content, feedback and approvals needed for us to deliver your project on schedule, and you confirm that any material you supply (text, images, logos, data) does not infringe the rights of any third party.',
      'You agree not to use our hosting infrastructure for unlawful content, spam, malware or any activity that could harm our network or other customers.',
    ],
  },
  {
    h: '6. Intellectual property',
    ps: [
      'Upon full payment, you own the final deliverables we create for your project — the design, content and code of your website or app — except for third-party components (such as WordPress plugins, Shopify apps or open-source libraries), which remain subject to their own licences.',
      'We retain the right to display completed work in our portfolio and marketing unless you ask us in writing not to.',
    ],
  },
  {
    h: '7. Warranties & liability',
    ps: [
      'We warrant that our work will materially conform to the agreed specification and will fix defects reported within 30 days of launch at no charge. Beyond this, ongoing fixes and improvements are covered by a maintenance plan.',
      'To the fullest extent permitted by law, our total liability arising from any project or service shall not exceed the fees you paid to us for that project or service in the preceding 12 months. Nothing in these Terms limits liability that cannot be limited under the law of England and Wales.',
    ],
  },
  {
    h: '8. Termination',
    ps: [
      'Either party may terminate a project agreement in writing if the other materially breaches these Terms and fails to remedy the breach within 14 days of notice. On termination, you will be invoiced for work completed to date, and we will hand over all paid-for deliverables.',
    ],
  },
  {
    h: '9. Changes & governing law',
    ps: [
      'We may update these Terms from time to time; the latest version will always be published on this page with its revision date. Material changes affecting active customers will be notified by email.',
      'These Terms are governed by the law of England and Wales, and the courts of England and Wales have exclusive jurisdiction over any dispute arising from them.',
    ],
  },
  {
    h: '10. Contact',
    ps: [
      'Questions about these Terms? Email us at info@jazbaentertainment.com or write to Jazba Entertainment Ltd., 16 Grosvenor Road, Birchfield, Birmingham B20 3NP, United Kingdom.',
    ],
  },
]

export default function Terms() {
  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <Seo page="terms" />
      <PageHero
        crumbs={<><Link to="/">Home</Link> / Terms of Use</>}
        title="Terms of Use"
        lead="The terms that apply when you use our website or engage Jazba Host for design, development, hosting or maintenance. Last updated: 7 July 2026."
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

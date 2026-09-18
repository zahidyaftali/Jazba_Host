// ============================================================
// SEO metadata, one entry per route.
//
// Rules enforced by scripts/check-seo.mjs at build time:
//   title       <= 55 characters
//   description <= 155 characters
// Titles here are the full <title>; no site-name suffix is appended,
// so what you read is what Google gets.
// ============================================================

export const SITE = {
  name: 'Jazba Host',
  url: 'https://jazbahost.com',
  locale: 'en_GB',
  twitter: '@jazbahost',
  ogImage: '/og-image.jpg',
}

// Static routes.
export const pageSeo = {
  home: {
    path: '/',
    title: 'Jazba Host | Web Design, Development & UK Hosting',
    description:
      'We build, host and maintain websites for UK businesses. Fixed-price builds at freelance rates from £499, plus managed hosting from £8 a month.',
  },
  about: {
    path: '/about',
    title: 'About Jazba Host | Birmingham Web Studio',
    description:
      'A Birmingham web studio building, hosting and maintaining sites for charities, restaurants, salons and trades across the UK and beyond.',
  },
  services: {
    path: '/services',
    title: 'Services | Websites, Apps, Hosting & AI Chatbots',
    description:
      'Web design, development, WordPress and Shopify, app development, AI chatbots and managed UK hosting — built and looked after by one team.',
  },
  portfolio: {
    path: '/portfolio',
    title: 'Our Work | Live Client Websites We Host',
    description:
      'Eight live client sites we designed, built, host and maintain — restaurants, charities, cleaning firms, salons, retail and awards events.',
  },
  pricing: {
    path: '/pricing',
    title: 'Pricing | Hosting from £8/mo, Fixed-Price Builds',
    description:
      'Managed UK hosting from £8 a month with 20% off annually, plus fixed-price websites from £499, apps from £1,999 and AI chatbots from £399.',
  },
  contact: {
    path: '/contact',
    title: 'Contact Jazba Host | Free Quote & Consultation',
    description:
      'Tell us what your business needs and we will come back with a clear plan and a fair fixed quote. Offices in Birmingham, UK and Pakistan.',
  },
  terms: {
    path: '/terms',
    title: 'Terms of Service | Jazba Host',
    description:
      'The terms covering our web design, development, hosting and maintenance services, including payment, scope, uptime and cancellation.',
  },
  privacy: {
    path: '/privacy',
    title: 'Privacy Policy | Jazba Host',
    description:
      'How Jazba Host collects, uses and protects your data, including enquiry forms, hosting records, cookies and your rights under UK GDPR.',
  },
  notFound: {
    path: '/404',
    title: 'Page Not Found | Jazba Host',
    description: 'That page has moved or never existed. Head back to the homepage, or browse our services, work and pricing.',
    noindex: true,
  },
  comingSoon: {
    path: '/coming-soon',
    title: 'Coming Soon | Jazba Host',
    description: 'Something new from Jazba Host is on the way. Leave your details and we will let you know the moment it goes live.',
    noindex: true,
  },
}

// Per-service metadata, keyed by the service slug in data.js.
export const serviceSeo = {
  'web-development': {
    title: 'Web Development UK | Custom Websites Built Right',
    description:
      'Custom websites, booking systems, portals and ecommerce builds for UK businesses. Fixed price from £499, agreed before we start and hosted by us.',
  },
  'web-design': {
    title: 'Web Design UK | Mobile-First Sites That Convert',
    description:
      'Clean, mobile-first web design that builds trust and turns visitors into customers. Custom layouts, never an off-the-shelf template.',
  },
  'hosting-and-maintenance': {
    title: 'Managed UK Hosting & Maintenance from £8/month',
    description:
      'Fast UK hosting with free SSL, daily backups, a 99.9% uptime SLA and your updates handled. From £8 a month, or 20% off paid yearly.',
  },
  'wordpress-and-shopify': {
    title: 'WordPress & Shopify Development | Jazba Host',
    description:
      'Custom WordPress themes, WooCommerce and Shopify stores built properly — fast, editable by you, and maintained long after launch.',
  },
  'app-development': {
    title: 'App Development UK | iOS & Android, Fixed Price',
    description:
      'Cross-platform iOS and Android apps for bookings, ordering and loyalty, connected to your website. Fixed price from £1,999.',
  },
  'ai-chatbot': {
    title: 'AI Chatbot Development UK | From £399 Fixed',
    description:
      'An AI assistant trained on your business that answers questions, captures leads and books appointments 24/7. Fixed price from £399.',
  },
}

// Per-case-study metadata, keyed by the project slug in data.js.
export const projectSeo = {
  'arif-lohar-jugni-king': {
    title: 'Arif Lohar Official Site | Jazba Host Case Study',
    description:
      'How we built the official Arif Lohar artist site — music, awards, events and gallery in one cinematic place, hosted and maintained by us.',
  },
  'bab-alzahia-cleaning': {
    title: 'Bab Alzahia Cleaning | Jazba Host Case Study',
    description:
      'A booking-first WordPress site for a cleaning company in Ajman, UAE — packages, FAQs and a Schedule A Service button on every page.',
  },
  'beaute-academy': {
    title: 'Beaute Academy Salon Site | Jazba Host Case Study',
    description:
      'A dark, type-led site for a Birmingham salon and training academy, built around online booking and published treatment prices.',
  },
  'between-you-and-me-seva': {
    title: 'SEVA Counselling Site | Jazba Host Case Study',
    description:
      'A calm, trust-led site for a not-for-profit counselling service, with open fees and a referral form built into the navigation.',
  },
  'buynow-uk': {
    title: 'BuyNow UK Storefront | Jazba Host Case Study',
    description:
      'A React and Tailwind storefront for a UK retail launch — category browsing and waiting-list capture before there was stock to sell.',
  },
  'csfm-cleaning': {
    title: 'CSFM Cleaning Birmingham | Jazba Host Case Study',
    description:
      'A professional site for a Birmingham cleaning contractor, built so the coverage area and the Schedule A Service button are never hidden.',
  },
  'istanbul-restaurant-birmingham': {
    title: 'Istanbul Restaurant | Jazba Host Case Study',
    description:
      'An appetite-first site for a Birmingham Turkish restaurant, with the phone number, menu and table booking all above the fold.',
  },
  'pmm-awards': {
    title: 'PMM Awards Site | Jazba Host Case Study',
    description:
      'An awards site handling public voting, ticket sales and a live countdown for a Symphony Hall ceremony, hosted through traffic spikes.',
  },
}

// Everything that should end up in sitemap.xml, in priority order.
export function allRoutes() {
  const statics = Object.values(pageSeo)
    .filter((p) => !p.noindex)
    .map((p) => p.path)
  const services = Object.keys(serviceSeo).map((s) => `/services/${s}`)
  const projects = Object.keys(projectSeo).map((s) => `/portfolio/${s}`)
  return [...statics, ...services, ...projects]
}

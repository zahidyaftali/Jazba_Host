// ============================================================
// Central content + free stock imagery (Unsplash).
// All images are royalty-free from Unsplash's public CDN.
// ============================================================

export const img = {
  heroHome:   'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80',
  heroAbout:  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80',
  heroContact:'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
  webDesign:  'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80',
  webDev:     'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=1200&q=80',
  hosting:    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
  ecommerce:  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
  aiChat:     'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200&q=80',
  automation: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&q=80',
  booking:    'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80',
  team:       'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
  office:     'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
  strategy:   'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80',
  code:       'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
  server:     'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
  cta:        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80',
  ukOffice:   'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1000&q=80',
  pkOffice:   'https://images.unsplash.com/photo-1590341328520-63256eb32bc3?auto=format&fit=crop&w=1000&q=80',
  mobileDev:  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
}

// The six services (each has a detail page).
// Core pitch: we build websites, host them and maintain them — for UK
// startups, growing businesses and large organisations.
export const services = [
  {
    slug: 'web-development',
    title: 'Web Development',
    tagline: 'Any website your business needs — built to perform.',
    hero: img.webDev,
    intro:
      'From a five-page business site to a full web application — we design, build, host and maintain websites for UK startups, growing companies and large organisations. Booking, payments, ecommerce, member areas: if your business needs it, we can build it.',
    audiences: [
      { title: 'Startups', body: 'Launch fast without cutting corners — a professional website that scales as you do, from day one.' },
      { title: 'Growing businesses', body: 'Add the features that win customers: online booking, payments, quotes, customer portals and integrations.' },
      { title: 'Large organisations', body: 'Custom web applications, secure infrastructure and a responsive team that keeps everything running.' },
    ],
    highlights: [
      'Custom builds — React, Next.js, Laravel or PHP',
      'Booking & reservation systems',
      'Ecommerce & WooCommerce checkouts',
      'Customer portals & dashboards',
      'API, CRM & payment integrations',
      'Hosted & maintained by us after launch',
    ],
    useCasesTitle: 'Any type of website, any feature.',
    useCasesLead: "Tell us what your business needs — chances are we've built it before.",
    useCases: ['Business websites', 'Booking systems', 'Online stores', 'WooCommerce', 'Customer portals', 'Landing pages', 'Directories & listings', 'Quote calculators', 'Membership sites', 'Dashboards', 'Blogs & news', 'Custom web apps'],
    audiencesTitle: 'From first website to full-scale platform.',
    audiencesLead: "Whether you're launching, growing or already established, we build at the level your business needs.",
    toolsTitle: 'The tools behind every build.',
    toolsLead: 'Proven, mainstream technology — chosen so your website stays fast and easy to maintain for years, not months.',
    tools: [
      { name: 'React & Next.js', note: 'Fast, modern front-ends that feel instant and rank well on Google.' },
      { name: 'Laravel & PHP', note: 'Reliable back-ends for portals, bookings and custom business logic.' },
      { name: 'Node.js', note: 'Real-time features — live availability, notifications and chat.' },
      { name: 'MySQL & PostgreSQL', note: 'Solid databases behind your content, customers and orders.' },
      { name: 'Stripe & PayPal', note: 'Payments, deposits and subscriptions, set up and tested end to end.' },
      { name: 'Git & CI/CD', note: 'Every change version-controlled, tested and deployed without downtime.' },
    ],
    deliverables: [
      { title: 'Plan', body: 'We learn your business and goals, then agree the features, sitemap and stack — with a clear, fixed quote.' },
      { title: 'Build', body: 'Clean, tested code with the features your business needs, reviewed with you as we go.' },
      { title: 'Launch & Maintain', body: 'We host it, monitor it 24/7 and keep it updated and secure long after launch.' },
    ],
  },
  {
    slug: 'web-design',
    title: 'Web Design',
    tagline: 'Designs that make UK businesses look their best.',
    hero: img.webDesign,
    intro:
      'First impressions decide whether visitors stay or leave. We design clean, modern, mobile-first websites that build trust and turn visitors into enquiries — for startups finding their feet and established brands due a refresh.',
    audiences: [
      { title: 'Startups', body: 'A brand and website that make you look established from day one — from logo to launch.' },
      { title: 'Growing businesses', body: 'A redesign that lifts enquiries and finally brings your website up to the standard of your work.' },
      { title: 'Large organisations', body: 'Design systems and WCAG accessibility that keep every page consistent, compliant and on-brand.' },
    ],
    highlights: [
      'Mobile-first, responsive layouts',
      'Brand, logo & visual identity',
      'Figma prototypes you approve first',
      'Conversion-focused page layouts',
      'Accessibility (WCAG) built in',
      'Redesigns of existing websites',
    ],
    useCasesTitle: 'Design for every kind of business.',
    useCasesLead: 'Whatever you do, we design a website that sells it properly.',
    useCases: ['Business websites', 'Ecommerce stores', 'Restaurants & takeaways', 'Trades & services', 'Clinics & salons', 'Estate agents', 'Charities', 'Portfolios', 'Landing pages', 'Rebrands & refreshes'],
    audiencesTitle: 'Design that fits where your business is.',
    audiencesLead: 'A startup brand, a growth-stage refresh or an enterprise design system — same craft, right scale.',
    toolsTitle: 'The tools behind the design.',
    toolsLead: 'Professional design tooling at every step — so what you approve is exactly what gets built.',
    tools: [
      { name: 'Figma', note: 'Every page designed and prototyped for your approval before we build.' },
      { name: 'Illustrator & Photoshop', note: 'Logos, brand marks and image work, production-ready.' },
      { name: 'Type & colour systems', note: 'Licensed, fast-loading typography and palettes that match your brand.' },
      { name: 'Lighthouse & axe', note: 'Speed and accessibility audits on every design we ship.' },
      { name: 'Hotjar & GA4', note: 'Real visitor behaviour guides layout and content decisions.' },
      { name: 'Design tokens', note: 'Colours, spacing and components documented so future pages stay on-brand.' },
    ],
    deliverables: [
      { title: 'Discover', body: 'We learn your business, audience and competitors, and agree the look and structure together.' },
      { title: 'Design & Prototype', body: 'High-fidelity Figma designs you can click through and approve before anything is built.' },
      { title: 'Build & Host', body: 'We build the approved design pixel-perfect, then host and maintain it — one partner, start to finish.' },
    ],
  },
  {
    slug: 'hosting-and-maintenance',
    title: 'Hosting & Maintenance',
    tagline: 'We host it, watch it and keep it running.',
    hero: img.hosting,
    intro:
      "Hosting is where most agencies stop — it's where we shine. Fast UK-based hosting with free SSL and daily backups, plus real maintenance: software updates, security patches, content changes and a team that answers when you call.",
    audiences: [
      { title: 'Startups', body: 'Affordable plans from £8/mo with everything included — SSL, backups, email and support.' },
      { title: 'Growing businesses', body: 'Priority support and hands-on maintenance so your website stays fast, secure and up to date.' },
      { title: 'Large organisations', body: 'Dedicated resources, staging environments and SLAs for business-critical websites.' },
    ],
    highlights: [
      'UK-based SSD hosting & domains',
      'Free SSL on every plan',
      'Daily automated backups',
      'Core, plugin & security updates',
      'Content changes & small fixes',
      '24/7 monitoring & real support',
    ],
    useCasesTitle: 'Maintenance that actually maintains.',
    useCasesLead: "Your website is never 'done' — we keep it healthy month after month.",
    useCases: ['Software updates', 'Security patches', 'Daily backups', 'Uptime monitoring', 'Content updates', 'Speed optimisation', 'Email & domains', 'Malware protection', 'Free migration', 'Monthly reports'],
    audiencesTitle: 'Care plans for every size of website.',
    audiencesLead: 'From an £8/mo brochure site to business-critical platforms with SLAs — every site gets looked after.',
    toolsTitle: 'The stack that keeps you online.',
    toolsLead: 'Enterprise-grade infrastructure and monitoring behind every plan — even the smallest one.',
    tools: [
      { name: 'LiteSpeed & NVMe', note: 'UK-based, SSD-backed servers tuned for fast load times.' },
      { name: 'Cloudflare', note: 'Global CDN, DDoS protection and smart caching in front of every site.' },
      { name: "Let's Encrypt SSL", note: 'Free HTTPS on every plan, renewed automatically.' },
      { name: 'JetBackup', note: 'Daily automated backups with one-click restore.' },
      { name: 'Uptime monitoring', note: '24/7 checks that alert our team before you notice a problem.' },
      { name: 'cPanel', note: 'Full control panel access — your hosting, your data.' },
    ],
    deliverables: [
      { title: 'Migrate & Set Up', body: 'We move your website over for free, configure DNS, SSL and email, and check everything before go-live.' },
      { title: 'Secure & Optimise', body: 'Firewalls, caching, daily backups and speed tuning keep your site fast and protected.' },
      { title: 'Monitor & Maintain', body: 'Round-the-clock monitoring, regular updates and a real team on hand when you need changes.' },
    ],
  },
  {
    slug: 'wordpress-and-shopify',
    title: 'WordPress & Shopify',
    tagline: "The world's favourite platforms, done properly.",
    hero: img.ecommerce,
    intro:
      'WordPress for content, WooCommerce and Shopify for selling — we build on the platforms your team already knows, without the bloated themes and plugin soup. Custom, fast, and easy for you to manage yourself.',
    audiences: [
      { title: 'Startups', body: 'A professional WordPress site or Shopify store, live quickly and simple to run yourself.' },
      { title: 'Growing businesses', body: 'WooCommerce and Shopify stores with the features that sell: subscriptions, shipping, payments, reviews.' },
      { title: 'Large organisations', body: 'Custom themes, multi-site WordPress and Shopify builds integrated with your stock and CRM systems.' },
    ],
    highlights: [
      'Custom WordPress themes — no page-builder bloat',
      'WooCommerce & Shopify storefronts',
      'Payment gateways & shipping set-up',
      'Product & content migration',
      'SEO & speed optimisation',
      'Editor training so you can self-manage',
    ],
    useCasesTitle: 'Everything WordPress & Shopify.',
    useCasesLead: 'From a simple blog to a store doing serious volume.',
    useCases: ['WordPress business sites', 'WooCommerce stores', 'Shopify stores', 'Subscriptions', 'Store migrations', 'Theme customisation', 'Multilingual sites', 'Blogs & magazines', 'Plugin & app set-up', 'Speed rescues'],
    audiencesTitle: 'WordPress & Shopify at every scale.',
    audiencesLead: 'Your first store or a multi-market operation — built on the platforms your team already knows.',
    toolsTitle: 'The platform toolkit.',
    toolsLead: 'The same platforms millions trust — configured properly, without the bloat.',
    tools: [
      { name: 'WordPress', note: 'Custom themes built from scratch — lean, fast and easy to edit.' },
      { name: 'WooCommerce', note: 'UK-ready stores: VAT, shipping zones and payment gateways done right.' },
      { name: 'Shopify & Liquid', note: 'Custom Shopify themes and apps that go beyond the template look.' },
      { name: 'ACF', note: 'Custom fields that make editing complex content simple for your team.' },
      { name: 'Rank Math SEO', note: 'On-page SEO configured properly from day one.' },
      { name: 'WP Rocket', note: 'Caching and speed optimisation that keeps Google and customers happy.' },
    ],
    deliverables: [
      { title: 'Choose the Platform', body: 'We match your catalogue, content and budget to WordPress, WooCommerce or Shopify — no over-engineering.' },
      { title: 'Build & Migrate', body: 'Design-faithful custom themes, clean data migration and payments configured end to end.' },
      { title: 'Host, Update & Maintain', body: 'We host your site, keep core and plugins updated, and train your team to manage content confidently.' },
    ],
  },
  {
    slug: 'app-development',
    title: 'App Development',
    tagline: 'iOS & Android apps that extend your website.',
    hero: img.mobileDev,
    intro:
      "When a website isn't enough, we build the app — booking, ordering and loyalty apps for iOS and Android, connected to the same systems that run your website. One codebase, both stores, maintained by the same team.",
    audiences: [
      { title: 'Startups', body: 'Validate your idea with a cross-platform MVP that ships to both app stores on one budget.' },
      { title: 'Growing businesses', body: 'Put booking, ordering and loyalty in your customers’ pockets — synced with your website.' },
      { title: 'Large organisations', body: 'Enterprise apps integrated with your existing systems, with ongoing support and updates.' },
    ],
    highlights: [
      'React Native & Expo — one codebase, both stores',
      'Booking, ordering & loyalty apps',
      'Push notifications & offline support',
      'Payments & in-app purchases',
      'Connected to your website & data',
      'App Store & Play Store submission',
    ],
    useCasesTitle: 'Apps we build.',
    useCasesLead: 'If your customers would use it daily, it belongs in an app.',
    useCases: ['Booking apps', 'Ordering & delivery', 'Loyalty & rewards', 'Customer portals', 'Internal tools', 'Events & ticketing', 'Fitness & classes', 'Marketplaces'],
    audiencesTitle: 'Apps for every stage of growth.',
    audiencesLead: 'MVPs, customer apps and enterprise builds — one codebase, both stores.',
    toolsTitle: 'The mobile toolkit.',
    toolsLead: 'Cross-platform technology that ships to both app stores on one budget.',
    tools: [
      { name: 'React Native & Expo', note: 'One codebase for iOS and Android — faster builds, lower cost.' },
      { name: 'TypeScript', note: 'Typed code that stays reliable as your app grows.' },
      { name: 'Firebase', note: 'Authentication, push notifications and real-time data.' },
      { name: 'Stripe', note: 'In-app payments and subscriptions, handled securely.' },
      { name: 'App Store & Play Console', note: 'We manage submission, review and releases for both stores.' },
      { name: 'Sentry', note: 'Crash monitoring so issues are fixed before users report them.' },
    ],
    deliverables: [
      { title: 'Prototype', body: 'We map user journeys and validate the experience with clickable prototypes before writing code.' },
      { title: 'Build & Test', body: 'One codebase for iOS and Android, developed with automated testing and real-device QA.' },
      { title: 'Launch & Maintain', body: 'We handle store submission, then keep your app updated, monitored and improving after day one.' },
    ],
  },
  {
    slug: 'ai-chatbot',
    title: 'AI Chatbot',
    tagline: 'A 24/7 assistant that never misses a lead.',
    hero: img.aiChat,
    intro:
      'An AI assistant on your website that answers questions, captures leads and books appointments while you sleep — trained on your business, connected to your calendar and CRM, and improving every month.',
    audiences: [
      { title: 'Startups', body: 'Answer every enquiry instantly without hiring — your chatbot works nights and weekends.' },
      { title: 'Growing businesses', body: 'Qualify leads and book appointments automatically, straight into your calendar and CRM.' },
      { title: 'Large organisations', body: 'Support automation at scale with smooth human handoff, analytics and monthly tuning.' },
    ],
    highlights: [
      'Trained on your services, FAQs & tone',
      'Lead capture & qualification',
      'Appointment booking',
      'Website, WhatsApp & Messenger',
      'CRM & calendar integrations',
      'Monthly tuning & reports',
    ],
    useCasesTitle: 'What your chatbot can do.',
    useCasesLead: 'Everything a great receptionist does — around the clock.',
    useCases: ['Answer FAQs', 'Capture leads', 'Book appointments', 'Quote requests', 'Order updates', 'Product suggestions', 'Multilingual replies', 'Human handoff'],
    audiencesTitle: 'An assistant sized to your business.',
    audiencesLead: 'From a simple FAQ bot to a fully integrated support and booking assistant.',
    toolsTitle: 'The tech behind your assistant.',
    toolsLead: 'Modern AI, trained on your business and wired into the tools you already use.',
    tools: [
      { name: 'OpenAI GPT models', note: 'State-of-the-art language models behind natural conversations.' },
      { name: 'Custom training', note: 'Your services, FAQs and tone of voice — not generic answers.' },
      { name: 'WhatsApp Business API', note: 'Meet customers on the channel they already use.' },
      { name: 'Web chat widget', note: 'A fast, on-brand chat widget for your website.' },
      { name: 'CRM & calendar links', note: 'Leads into your CRM, bookings straight into your diary.' },
      { name: 'Analytics dashboard', note: 'See every conversation, captured lead and booked appointment.' },
    ],
    deliverables: [
      { title: 'Scope & Train', body: 'We define what your assistant should do and train it on your services, FAQs and tone of voice.' },
      { title: 'Integrate', body: 'We wire it into your website and channels, connect your CRM and set up smooth human handoff.' },
      { title: 'Optimise', body: 'We monitor real conversations, close the gaps and keep improving answer quality month on month.' },
    ],
  },
]

// Extra capabilities we surface across the site.
export const capabilities = [
  { title: 'Ecommerce', body: 'Storefronts that sell — Shopify, WooCommerce or fully custom checkout.', image: img.ecommerce },
  { title: 'AI Chatbots', body: 'Always-on assistants trained on your business to capture and convert leads.', image: img.aiChat },
  { title: 'Automation', body: 'Connect your tools and let repetitive work run itself, 24/7.', image: img.automation },
  { title: 'Booking Systems', body: 'Appointments, reservations and payments — seamless for you and your clients.', image: img.booking },
]

// ============================================================
// PRICING
// ------------------------------------------------------------
// Hosting is recurring (monthly, or annual billed as one total
// with 20% off). Everything else is a fixed one-off project fee.
//
// Project prices are set at experienced-freelancer level, not agency
// level: a small Pakistan-based team working for UK clients, with no
// account managers or city-centre office to pay for.
// ============================================================

// Annual billing discount, applied across every recurring plan.
export const ANNUAL_DISCOUNT = 0.2

// Hosting — recurring. Basic is the anchor at £8/mo.
export const hostingPlans = [
  {
    name: 'Basic',
    price: 8,
    tagline: 'One brochure site, fully managed — hosting, SSL, backups and updates handled.',
    featured: false,
    features: [
      '1 Website',
      '20 GB SSD Storage',
      '100 GB Bandwidth / mo',
      'Free SSL Certificate',
      '5 Email Accounts',
      'Daily Backups (30-day retention)',
      'Free Domain for Year One',
      'WordPress & Plugin Updates',
      '99.9% Uptime SLA',
      'Email Support',
    ],
  },
  {
    name: 'Business',
    price: 18,
    tagline: 'For growing sites that need more room, faster servers and a quicker response.',
    featured: true,
    features: [
      'Up to 5 Websites',
      '80 GB NVMe Storage',
      'Unlimited Bandwidth',
      'Free SSL Certificates',
      '25 Email Accounts',
      'Daily Backups (90-day retention)',
      'Free Domain for Year One',
      'WordPress & Plugin Updates',
      'Staging Site Included',
      'Global CDN + Caching',
      'Monthly Uptime & Speed Report',
      'Priority Support (4-hour response)',
    ],
  },
  {
    name: 'Enterprise',
    price: 38,
    tagline: 'Built for online stores — checkout uptime, PCI-ready infrastructure and traffic headroom.',
    featured: false,
    features: [
      'Unlimited Websites',
      '200 GB NVMe Storage',
      'Unlimited Bandwidth',
      'Free SSL Certificates',
      'Unlimited Email Accounts',
      'Hourly Backups (12-month retention)',
      'Free Domain for Year One',
      'WooCommerce / Shopify Optimised',
      'PCI-Ready Hosting Environment',
      'Staging + Dedicated IP',
      'Global CDN + Object Caching',
      'Checkout & Payment Monitoring',
      'Peak-Traffic Scaling (sales & campaigns)',
      'Priority Support (1-hour response)',
    ],
  },
]

// Website development — one-off project fee, not monthly.
export const webDevPlans = [
  {
    name: 'Launch',
    price: 499,
    tagline: 'A sharp 5-page site that makes a small business look established from day one.',
    featured: false,
    timeline: '2–3 weeks',
    features: [
      'Up to 5 Pages',
      'Custom Design (no off-the-shelf template)',
      'Mobile & Tablet Optimised',
      'Contact & Enquiry Forms',
      'Google Business & Maps Setup',
      'Basic On-Page SEO',
      'Speed & Core Web Vitals Pass',
      'Google Analytics + Search Console',
      '2 Rounds of Revisions',
      '30 Days Post-Launch Support',
    ],
  },
  {
    name: 'Growth',
    price: 999,
    tagline: 'A bigger, content-managed site for businesses selling more than one thing.',
    featured: true,
    timeline: '4–6 weeks',
    features: [
      'Up to 15 Pages',
      'Custom Design + Brand Styling',
      'CMS — Edit Everything Yourself',
      'Booking or Quote System',
      'Blog / News Section',
      'Gallery & Portfolio Modules',
      'Advanced On-Page SEO',
      'Schema Markup & Sitemap',
      'Copywriting for Key Pages',
      'Speed & Core Web Vitals Pass',
      '3 Rounds of Revisions',
      '90 Days Post-Launch Support',
    ],
  },
  {
    name: 'Ecommerce & Bespoke',
    price: null,
    tagline: 'Online stores, portals, membership sites and anything that needs building from scratch.',
    featured: false,
    timeline: 'timeline agreed at scoping',
    features: [
      'WooCommerce or Shopify Build',
      'Unlimited Products & Categories',
      'Payments, Shipping & Tax Setup',
      'Customer Accounts & Order Tracking',
      'Stock / Inventory Sync',
      'Custom Portals & Integrations',
      'Multi-Language or Multi-Currency',
      'Migration From Your Current Store',
      'Dedicated Project Manager',
      'Training for Your Team',
    ],
  },
]

// App development — one-off project fee.
export const appDevPlans = [
  {
    name: 'App Launch',
    price: 1999,
    tagline: 'One cross-platform app that does one job properly — on iOS and Android.',
    featured: false,
    timeline: '6–8 weeks',
    features: [
      'iOS + Android (single codebase)',
      'Up to 8 Screens',
      'Custom UI Matched to Your Brand',
      'Push Notifications',
      'Contact / Booking Flow',
      'App Store & Play Store Submission',
      'Crash & Usage Analytics',
      '2 Rounds of Revisions',
      '30 Days Post-Launch Support',
    ],
  },
  {
    name: 'App Growth',
    price: 3999,
    tagline: 'A full product with accounts, payments and a back office you control.',
    featured: true,
    timeline: '10–14 weeks',
    features: [
      'iOS + Android (single codebase)',
      'Unlimited Screens',
      'User Accounts & Secure Login',
      'In-App Payments & Subscriptions',
      'Ordering, Booking or Loyalty Module',
      'Admin Dashboard & Back Office',
      'Website / CRM Integration',
      'Push & In-App Messaging',
      'Store Submission + ASO Setup',
      '3 Rounds of Revisions',
      '90 Days Post-Launch Support',
    ],
  },
  {
    name: 'Custom Platform',
    price: null,
    tagline: 'Multi-role platforms, live tracking, offline sync and anything regulated.',
    featured: false,
    timeline: 'timeline agreed at scoping',
    features: [
      'Native iOS and Android Where Needed',
      'Multi-Role & Multi-Tenant Apps',
      'Live Tracking & Real-Time Data',
      'Offline Mode & Background Sync',
      'Third-Party & Hardware Integrations',
      'Security & Compliance Review',
      'Dedicated Project Manager',
      'Ongoing Release Management',
    ],
  },
]

// AI chatbot — one-off build fee; running costs quoted separately.
export const chatbotPlans = [
  {
    name: 'Assist',
    price: 399,
    tagline: 'Answers your most-asked questions on your site, day and night.',
    featured: false,
    timeline: '2–3 weeks',
    features: [
      'Trained on Your Website & FAQs',
      'Website Chat Widget',
      'Lead Capture to Email',
      'Opening Hours & Location Answers',
      'Brand Voice & Tone Setup',
      'Conversation Transcripts',
      'Handover to a Human',
      '30 Days Tuning After Launch',
    ],
  },
  {
    name: 'Convert',
    price: 899,
    tagline: 'Books appointments, qualifies leads and answers in your customers’ languages.',
    featured: true,
    timeline: '4–6 weeks',
    features: [
      'Everything in Assist',
      'Trained on Your Documents & Menus',
      'Booking & Appointment Taking',
      'Lead Qualification & Routing',
      'WhatsApp + Facebook Messenger',
      'Multilingual Replies',
      'CRM / Email Marketing Sync',
      'Analytics & Intent Reporting',
      '90 Days Tuning After Launch',
    ],
  },
  {
    name: 'Custom AI',
    price: null,
    tagline: 'Deeper automation wired into the systems your business already runs on.',
    featured: false,
    timeline: 'timeline agreed at scoping',
    features: [
      'Custom Model & Knowledge Pipeline',
      'Order, Stock or Booking System Access',
      'Voice & Phone Answering',
      'Internal Staff Assistant',
      'Workflow Automation',
      'Data Handling & GDPR Review',
      'Dedicated Project Manager',
      'Ongoing Training & Monitoring',
    ],
  },
]

// The three one-off pricing tables rendered under hosting on /pricing.
export const projectPricing = [
  {
    id: 'website-development',
    eyebrow: 'Website development',
    title: 'Fixed-price websites.',
    lead: 'One price, agreed before we start. No day rates, no scope creep, no surprise invoice at the end.',
    plans: webDevPlans,
    serviceTo: '/services/web-development',
  },
  {
    id: 'app-development',
    eyebrow: 'App development',
    title: 'iOS and Android, fixed price.',
    lead: 'Cross-platform builds keep the cost down without splitting your users across two separate products.',
    plans: appDevPlans,
    serviceTo: '/services/app-development',
  },
  {
    id: 'ai-chatbot',
    eyebrow: 'AI chatbot',
    title: 'An assistant that never clocks off.',
    lead: 'Build fee below. Running costs depend on how much it gets used — we quote that honestly up front.',
    plans: chatbotPlans,
    serviceTo: '/services/ai-chatbot',
  },
]

export const domainPricing = [
  { tld: '.com', price: '£9.99', renew: '£12.99' },
  { tld: '.co.uk', price: '£6.99', renew: '£8.99' },
  { tld: '.io', price: '£29.99', renew: '£34.99' },
  { tld: '.org', price: '£10.99', renew: '£13.99' },
  { tld: '.ai', price: '£69.99', renew: '£74.99' },
  { tld: '.store', price: '£4.99', renew: '£44.99' },
]

export const offices = [
  {
    country: 'United Kingdom',
    company: 'Jazba Entertainment Ltd.',
    address: ['16 Grosvenor Road, Birchfield,', 'Birmingham B20 3NP', 'United Kingdom'],
    rows: [
      { label: 'Telephone', value: '+44 (0)333 5777 014' },
      { label: 'Mobile', value: '+44 (0)777 900 7636' },
      { label: 'BB PIN', value: '2999FE52' },
      { label: 'Email', value: 'info@jazbaentertainment.com' },
    ],
    map: 'https://www.google.com/maps?q=16+Grosvenor+Road,+Birchfield,+Birmingham+B20+3NP,+United+Kingdom&output=embed',
  },
  {
    country: 'Pakistan',
    company: 'Jazba Entertainment Ltd.',
    address: ['Islamabad  |  Lahore', 'Pakistan'],
    rows: [
      { label: 'Mobile', value: '+92 (0)512 712 486' },
      { label: 'Mobile', value: '+92 (0)302 5777 014' },
      { label: 'Email', value: 'info@jazbaentertainment.com' },
    ],
    map: 'https://www.google.com/maps?q=Islamabad,+Pakistan&output=embed',
  },
]

export const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Active Clients' },
  { value: '5+', label: 'Years of Experience' },
]

export const process = [
  { step: '01', title: 'Discovery', body: 'We learn about your business, goals, audience, and requirements through in-depth consultation and research.' },
  { step: '02', title: 'Design', body: 'Our designers craft beautiful, user-centric interfaces with wireframes, prototypes, and polished visual designs.' },
  { step: '03', title: 'Development', body: 'Our engineers bring the designs to life with clean, scalable code and rigorous testing at every stage.' },
  { step: '04', title: 'Launch', body: 'We deploy your project, optimise performance, and provide ongoing support to ensure long-term success.' },
]

// The six service offerings shown on the home page.
export const homeServices = [
  {
    title: 'Web Development',
    body: 'Any website your business needs — booking, ecommerce, portals and custom builds, all under one roof.',
    to: '/services/web-development',
  },
  {
    title: 'Web Design',
    body: 'Clean, modern, mobile-first designs that build trust and turn visitors into customers.',
    to: '/services/web-design',
  },
  {
    title: 'Hosting & Maintenance',
    body: 'Fast UK hosting with free SSL and daily backups — plus updates, fixes and real support.',
    to: '/services/hosting-and-maintenance',
  },
  {
    title: 'WordPress & Shopify',
    body: "The world's favourite platforms, built properly — custom themes, WooCommerce and Shopify stores.",
    to: '/services/wordpress-and-shopify',
  },
  {
    title: 'App Development',
    body: 'iOS and Android apps for bookings, ordering and loyalty — connected to your website.',
    to: '/services/app-development',
  },
  {
    title: 'AI Chatbot',
    body: 'A 24/7 assistant that answers questions, captures leads and books appointments for you.',
    to: '/services/ai-chatbot',
  },
]

// Portfolio projects — live client sites we built, host and maintain.
// Each has a case-study page at /portfolio/:slug.
// Copy is written from the live sites themselves; `facts` are observable
// (top-level pages, platform detected in the page source) rather than claimed.
export const projects = [
  {
    slug: 'arif-lohar-jugni-king',
    category: 'Events & Media',
    title: 'Arif Lohar — Official Artist Site',
    client: 'Arif Lohar',
    location: 'UK & Worldwide',
    url: 'https://arifloharjugniking.com',
    domain: 'arifloharjugniking.com',
    body: 'The official home of the Jugni King — a full-bleed, cinematic artist site with music, awards, events and gallery in one place.',
    image: '/portfolio/arifloharjugniking.jpg',
    tech: ['WordPress', 'Elementor', 'Swiper', 'Spotify Embed', 'Managed Hosting'],
    facts: [
      { value: '7', label: 'Top-level pages' },
      { value: 'WordPress', label: 'Built on' },
      { value: 'Managed', label: 'Hosting & care' },
    ],
    screenshotNotes:
      'A black-and-gold header carries the gold monogram logo, a seven-item menu — Home, History, Music, Award, Events, Gallery, Contact — and circular Instagram, YouTube, Facebook and Spotify buttons. The hero is a full-bleed monochrome photograph of Arif Lohar mid-performance with his chimta, dimmed so the overlay reads cleanly: a gold rule and the eyebrow “The Jugni King · Official Website”, then the line “Arif Lohar — Pakistan’s most celebrated Punjabi folk artist. From Wembley Arena to FIFA. Carrying a dynasty across 70+ countries.”, and two gold buttons, Listen Now and Book Now. A gold-outlined player card floats over the lower right with the latest release artwork queued up. Further down the page a stat row counts 3,200+ songs, 160+ albums, 150+ countries, 35+ years and 45+ films.',
    challenge:
      'A folk artist with a decades-long catalogue had his music, awards, tour dates and press photos scattered across social platforms he does not control. Fans, bookers and journalists all arrived looking for different things, and there was no single official source to send them to.',
    solution:
      'We built a cinematic one-stop artist site: a full-bleed performance hero, an embedded player for the current release, and separate History, Music, Award, Events and Gallery sections so each audience has somewhere to land. The black-and-gold treatment and desaturated photography keep the focus on the artist rather than the interface, and social and streaming links sit permanently in the header.',
    results: [
      'One official destination for fans, promoters and press',
      'Latest release playable from the homepage without leaving the site',
      'Awards and performance history documented in their own sections',
      'Instagram, YouTube, Facebook and Spotify reachable from every page',
    ],
    care: {
      title: 'What we handle day to day',
      points: [
        'New releases and gallery updates as they drop',
        'Event and tour date changes',
        'WordPress, theme and plugin updates',
        'Hosting, SSL, backups and uptime monitoring',
      ],
    },
    serviceLinks: [
      { label: 'Web Design', to: '/services/web-design' },
      { label: 'WordPress & Shopify', to: '/services/wordpress-and-shopify' },
    ],
  },
  {
    slug: 'bab-alzahia-cleaning',
    category: 'Services & Trades',
    title: 'Bab Alzahia Cleaning Services',
    client: 'Bab Alzahia Cleaning Services (S.P.S-L.L.C)',
    location: 'Ajman, UAE',
    url: 'https://babalzahia.com',
    domain: 'babalzahia.com',
    body: 'A bold, booking-first site for a UAE cleaning company — packages, FAQs and a Schedule A Service button that follows you down the page.',
    image: '/portfolio/babalzahia.jpg',
    tech: ['WordPress', 'Elementor', 'Booking Forms', 'Swiper', 'Managed Hosting'],
    facts: [
      { value: '6', label: 'Top-level pages' },
      { value: 'WordPress', label: 'Built on' },
      { value: 'Managed', label: 'Hosting & care' },
    ],
    screenshotNotes:
      'A navy announcement bar carries the full registered company name in yellow, sitting above a lime-green navigation bar with the logo, a six-item menu including a Services dropdown and Cleaning Packages, and a white-outlined Schedule A Service button. The hero is a bright daytime UAE skyline photograph under a big blue sky, with a large rounded lime panel over the left third: the headline “Professional & Affordable Cleaning Services For Homes Across Ajman” in white and yellow, a line about premium cleaning at affordable rates for Ajman and nearby areas, and a navy Call Now button with the phone number set directly into it.',
    challenge:
      'A cleaning company competing on price and coverage in Ajman needed people to reach a booking in as few taps as possible, while still making the packages, service list and licensing status obvious enough to be trusted by residential and commercial clients alike.',
    solution:
      'We put the booking button in the navigation bar so it is on screen from the first pixel, gave packages their own top-level menu item rather than burying them under Services, and used the company’s lime and navy brand colours at full strength so the calls to action cannot be missed. The registered company name sits in a permanent bar at the top for credibility.',
    results: [
      'Schedule A Service reachable from every page in the navigation',
      'Cleaning Packages promoted to a top-level menu item',
      'Service breakdown handled by a dropdown instead of one long page',
      'FAQs section built in to cut repeat phone enquiries',
    ],
    care: {
      title: 'What we handle day to day',
      points: [
        'Package and pricing updates',
        'Booking form delivery checks',
        'WordPress core, theme and plugin updates',
        'Hosting, SSL, backups and uptime monitoring',
      ],
    },
    serviceLinks: [
      { label: 'Web Design', to: '/services/web-design' },
      { label: 'Hosting & Maintenance', to: '/services/hosting-and-maintenance' },
    ],
  },
  {
    slug: 'beaute-academy',
    category: 'Beauty & Training',
    title: 'Beaute Academy Salon & Training',
    client: 'Beaute Academy',
    location: 'Birmingham, UK',
    url: 'https://beauteacademy.co.uk',
    domain: 'beauteacademy.co.uk',
    body: 'A dark, high-contrast site for a long-established Birmingham salon and training academy, built around online booking.',
    image: '/portfolio/beauteacademy.jpg',
    tech: ['WordPress', 'Elementor', 'Online Booking', 'Custom Fonts', 'Managed Hosting'],
    facts: [
      { value: '5', label: 'Top-level pages' },
      { value: 'WordPress', label: 'Built on' },
      { value: 'Managed', label: 'Hosting & care' },
    ],
    screenshotNotes:
      'A dark header carries the black-and-red Beaute Academy logo top left, a five-item red menu — Home, About, Services, Prices, Contact Us — and a red pill Book Online button top right. The hero is a full-bleed photograph from inside the salon, a stylist at work behind a seated client, darkened so the type sits cleanly over it: a large serif headline reading “Redefining Beauty, Empowering Confidence.”, a paragraph on twenty-five years of treatments, professional training and bridal work, and a red Make Appointment button. Below the fold an eight-tile grid covers hairdressing, beauty, nails, lashes and brows, bridal, makeup, training courses and studio retail.',
    challenge:
      'The academy runs two businesses from one address — a luxury treatment salon and a professional training school, plus bridal packages — and its twenty-five-year reputation was doing more work than its website was. Bookings were arriving by phone and message rather than online.',
    solution:
      'We stripped the homepage back to a single serif statement on near-black so the brand reads as premium rather than busy, and gave booking two permanent entry points: a Book Online button pinned in the navigation and a Make Appointment call to action directly under the hero copy. Prices sit at top level so clients can check before they call.',
    results: [
      'Two booking entry points visible without scrolling',
      'Prices given their own menu item rather than a PDF or an enquiry',
      'Salon treatments, training courses and bridal work each explained separately',
      'Dark, type-led design that matches the salon’s existing branding',
    ],
    care: {
      title: 'What we handle day to day',
      points: [
        'Treatment, course and price list updates',
        'Booking integration monitoring',
        'Seasonal and bridal campaign pages',
        'Hosting, SSL, backups and uptime monitoring',
      ],
    },
    serviceLinks: [
      { label: 'Web Design', to: '/services/web-design' },
      { label: 'Hosting & Maintenance', to: '/services/hosting-and-maintenance' },
    ],
  },
  {
    slug: 'between-you-and-me-seva',
    category: 'Charity & Community',
    title: 'Between You and Me SEVA Counselling',
    client: 'Between You and Me SEVA',
    location: 'United Kingdom',
    url: 'https://betweenyouandmeseva.com',
    domain: 'betweenyouandmeseva.com',
    body: 'A calm, trust-led site for a not-for-profit counselling service — with a referral form built straight into the navigation.',
    image: '/portfolio/betweenyouandmeseva.jpg',
    tech: ['WordPress', 'Elementor', 'Referral Forms', 'Accessible Type', 'Managed Hosting'],
    facts: [
      { value: '7', label: 'Top-level pages' },
      { value: 'WordPress', label: 'Built on' },
      { value: 'Managed', label: 'Hosting & care' },
    ],
    screenshotNotes:
      'A white header holds the circular heart logo and a seven-item menu — Home, About, Services with a dropdown, SEVA Supervisor, Fees, Referral Form and Contact. The hero sits on a soft peach curve: a purple serif headline, “Your Well-Being is What Defines Our Purpose”, a short line about confidential and compassionate support, a magenta Learn More button, and a rounded lifestyle photograph on the right. Below the curve, an About Us section explains the social enterprise model, the therapist team and the multilingual, community-focused approach.',
    challenge:
      'A not-for-profit counselling social enterprise serving diverse communities in several languages needed a site that felt safe to arrive at in a difficult moment — while still making fees, supervision credentials and the referral process findable for the professionals sending clients their way.',
    solution:
      'We used a soft peach and purple palette with generous line spacing and a serif headline so the page reads as calm rather than clinical. Fees and the Referral Form are both top-level menu items, so neither a worried individual nor a referring professional has to hunt. The About section sets out the BACP-registered, social-enterprise and multilingual credentials in plain language.',
    results: [
      'Referral Form promoted to its own navigation item for partner agencies',
      'Fees published openly instead of sitting behind an enquiry',
      'SEVA Supervisor given a dedicated page for supervision enquiries',
      'Calm, high-contrast typography chosen for readability under stress',
    ],
    care: {
      title: 'What we handle day to day',
      points: [
        'Referral and contact form delivery monitoring',
        'Fee and service updates',
        'WordPress core, theme and plugin updates',
        'Hosting, SSL, backups and uptime monitoring',
      ],
    },
    serviceLinks: [
      { label: 'Web Design', to: '/services/web-design' },
      { label: 'Hosting & Maintenance', to: '/services/hosting-and-maintenance' },
    ],
  },
  {
    slug: 'buynow-uk',
    category: 'eCommerce',
    title: 'BuyNow UK Retail Launch Store',
    client: 'BuyNow UK',
    location: 'United Kingdom',
    url: 'https://buynowuk.com',
    domain: 'buynowuk.com',
    body: 'A React and Tailwind storefront for a UK retail launch — category browsing, waiting-list capture and launch alerts.',
    image: '/portfolio/buynowuk.jpg',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Waiting List Capture', 'Managed Hosting'],
    facts: [
      { value: '3', label: 'Shop categories' },
      { value: 'React', label: 'Built on' },
      { value: 'Managed', label: 'Hosting & care' },
    ],
    screenshotNotes:
      'A navy strip across the top announces the spring launch and the five-thousand-strong waiting list. Under it sits a white bar with the BuyNow UK cart logo, three category links — Kitchen, Health, Tech — and a bell-icon Alerts button. The hero photograph of a coastal ridge is washed out behind a two-tone headline, “The Next Gen of Daily Utility.”, in navy and green, with a short positioning paragraph and paired Explore Collection and Browse Categories buttons. A four-icon trust strip runs along the bottom: Secure UK Store, Quality Tested, Launch Alerts and Early-Bird Perks.',
    challenge:
      'A new UK retail brand needed to build an audience before it had stock to sell. A conventional store would have shown empty categories; the site had to make browsing the range feel real while the actual job was collecting a waiting list.',
    solution:
      'We built a fast static storefront in React and Tailwind rather than a full commerce platform, so there was no cart to maintain pre-launch. Category browsing gives the range shape, the announcement bar and Alerts button capture sign-ups from anywhere on the page, and a trust strip answers the credibility questions a brand-new retailer always gets asked.',
    results: [
      'Waiting-list capture available from the announcement bar, the header and the hero',
      'Kitchen, Health and Tech ranges browsable before launch',
      'Static React build with no storefront platform fees pre-launch',
      'Trust strip addressing UK sourcing, quality testing and early-bird perks',
    ],
    care: {
      title: 'What we handle day to day',
      points: [
        'Product and category content updates',
        'Waiting list and alert capture monitoring',
        'Build and deploy pipeline for each release',
        'Hosting, SSL, backups and uptime monitoring',
      ],
    },
    serviceLinks: [
      { label: 'Web Development', to: '/services/web-development' },
      { label: 'Hosting & Maintenance', to: '/services/hosting-and-maintenance' },
    ],
  },
  {
    slug: 'csfm-cleaning',
    category: 'Services & Trades',
    title: 'CSFM Cleaning Birmingham',
    client: 'CSFM Cleaning',
    location: 'Birmingham, UK',
    url: 'https://csfmcleaning.com',
    domain: 'csfmcleaning.com',
    body: 'A clean, professional site for a Birmingham cleaning contractor, built so the Schedule A Service button is never off screen.',
    image: '/portfolio/csfmcleaning.jpg',
    tech: ['WordPress', 'Elementor', 'Booking Forms', 'Responsive Layout', 'Managed Hosting'],
    facts: [
      { value: '5', label: 'Top-level pages' },
      { value: 'WordPress', label: 'Built on' },
      { value: 'Managed', label: 'Hosting & care' },
    ],
    screenshotNotes:
      'A deep navy bar runs the full width with the CSFM Cleaning wordmark and its “Cleaners You Can Trust” strapline on the left, a five-item menu — Home, About, Services, FAQs, Contact — in the centre, and a gradient Schedule A Service button on the right. The hero splits in two: a rounded navy card on the left holds the headline “Affordable And Reliable Cleaning Services For Homes In Birmingham And Beyond.” with Cleaning picked out in bright blue, the positioning line about budget-friendly rates across Birmingham and surrounding areas, and a Get Started button. The right half is a close photograph of a mop and blue bucket with yellow gloves on a freshly washed floor.',
    challenge:
      'A Birmingham cleaning contractor was being judged in the first few seconds against much larger facilities-management firms, and needed a site that looked established without hiding the two things its customers actually want: coverage area and a way to book.',
    solution:
      'We went with a restrained navy-and-white treatment and real photography of the work rather than stock icons, put the coverage claim inside the hero card itself, and pinned the Schedule A Service button into the navigation bar. An FAQs page absorbs the repeat questions that were previously eating phone time.',
    results: [
      'Coverage area stated in the first thing a visitor reads',
      'Schedule A Service button present in the navigation on every page',
      'FAQs page built to cut repeat phone enquiries',
      'Professional navy branding that holds up against larger competitors',
    ],
    care: {
      title: 'What we handle day to day',
      points: [
        'Service and coverage area updates',
        'Booking form delivery checks',
        'WordPress core, theme and plugin updates',
        'Hosting, SSL, backups and uptime monitoring',
      ],
    },
    serviceLinks: [
      { label: 'Web Design', to: '/services/web-design' },
      { label: 'Hosting & Maintenance', to: '/services/hosting-and-maintenance' },
    ],
  },
  {
    slug: 'istanbul-restaurant-birmingham',
    category: 'Hospitality',
    title: 'Istanbul Restaurant Birmingham',
    client: 'Istanbul Restaurant',
    location: 'Birmingham, UK',
    url: 'https://istanbulrestaurantbirmingham.com',
    domain: 'istanbulrestaurantbirmingham.com',
    body: 'An appetite-first site for a Birmingham Turkish restaurant — phone number, menu and table booking all above the fold.',
    image: '/portfolio/istanbulrestaurantbirmingham.jpg',
    tech: ['WordPress', 'Elementor', 'Swiper Gallery', 'Google Site Kit', 'Managed Hosting'],
    facts: [
      { value: '5', label: 'Top-level pages' },
      { value: 'WordPress', label: 'Built on' },
      { value: 'Managed', label: 'Hosting & care' },
    ],
    screenshotNotes:
      'A full-bleed overhead food photograph — tomatoes, pasta, basil, peppercorns and wooden spoons on dark slate — runs behind the whole hero. A red phone icon and the number sit top left, the red-and-white Istanbul Restaurant logo is centred, and a five-item menu — Home, About Us, Our Menu, Gallery, Contact Us — sits below it alongside Instagram, Google and search icons and a red Book A Table button. The headline spans three lines over the photograph and a red Discover Our Menu button sits beneath, with a torn-paper edge cutting into the next section.',
    challenge:
      'A Turkish restaurant in a crowded Birmingham dining market was competing for people deciding where to eat in the next hour — usually on a phone. Whatever the site did, it had to make the food look good and get to a phone call, a menu or a table booking immediately.',
    solution:
      'We led with full-bleed food photography and layered the three actions people actually want straight over it: the phone number in the top corner, Book A Table in the navigation, and Discover Our Menu as the hero button. A Google Site Kit integration keeps search and visitor data in the owner’s hands, and a Swiper-driven gallery keeps new dishes easy to publish.',
    results: [
      'Phone number, menu and table booking all reachable without scrolling',
      'Food photography leading the page instead of decorative graphics',
      'Gallery the owner can add new dishes to without a developer',
      'Google Search Console and Analytics connected from launch',
    ],
    care: {
      title: 'What we handle day to day',
      points: [
        'Menu and seasonal dish updates',
        'Gallery additions and photography swaps',
        'Booking and enquiry form monitoring',
        'Hosting, SSL, backups and uptime monitoring',
      ],
    },
    serviceLinks: [
      { label: 'Web Design', to: '/services/web-design' },
      { label: 'Hosting & Maintenance', to: '/services/hosting-and-maintenance' },
    ],
  },
  {
    slug: 'pmm-awards',
    category: 'Events & Media',
    title: 'Pakistani Music & Media Awards',
    client: 'PMM Awards',
    location: 'Symphony Hall, Birmingham',
    url: 'https://pmmawards.org',
    domain: 'pmmawards.org',
    body: 'A high-pressure awards site handling public voting, ticket sales and a live countdown for a Symphony Hall event.',
    image: '/portfolio/pmmawards.jpg',
    tech: ['WordPress', 'Elementor', 'Public Voting', 'Ticketing', 'Live Countdown'],
    facts: [
      { value: '2', label: 'Award-year editions' },
      { value: 'WordPress', label: 'Built on' },
      { value: 'Managed', label: 'Hosting & care' },
    ],
    screenshotNotes:
      'A dark header carries the metallic PMMA 2025 badge on the left and a magenta PMMA 2024 archive button on the right. The hero is a dimmed night photograph of Symphony Hall with “Symphony Hall” in gold above the headline “Pakistani Music & Media Awards 2025”, the year picked out in cyan. A short paragraph gives the venue and the date, and two dashed-outline buttons sit side by side — an orange-red Vote Now and a magenta Buy Ticket Now. A four-cell countdown in days, hours, minutes and seconds runs below.',
    challenge:
      'An awards ceremony has to do three separate jobs from one page under a hard deadline: collect public votes at volume, sell tickets, and keep an audience warm until the night. Traffic is spiky — quiet for weeks, then enormous the moment voting opens or a nominee shares the link.',
    solution:
      'We built the landing page around two equally weighted actions — Vote Now and Buy Ticket Now — rather than making one secondary, added a live countdown to create urgency, and kept the previous year’s edition online behind its own button so past winners stay searchable. We host it on infrastructure sized for voting-window spikes and watch it through the campaign.',
    results: [
      'Voting and ticketing given equal billing in the hero',
      'Live countdown to the ceremony date on the landing page',
      'Previous award year kept online as a browsable archive',
      'Hosting monitored through voting windows and announcement spikes',
    ],
    care: {
      title: 'What we handle day to day',
      points: [
        'Nominee, category and voting window updates',
        'Ticketing links and countdown configuration',
        'Traffic monitoring across voting and announcement spikes',
        'Hosting, SSL, backups and yearly edition rollover',
      ],
    },
    serviceLinks: [
      { label: 'Web Development', to: '/services/web-development' },
      { label: 'Hosting & Maintenance', to: '/services/hosting-and-maintenance' },
    ],
  },
]

// The three projects featured on the home page.
const featuredSlugs = ['istanbul-restaurant-birmingham', 'csfm-cleaning', 'arif-lohar-jugni-king']
export const featuredWork = featuredSlugs.map((s) => projects.find((p) => p.slug === s))

// Client feedback. Each one maps to a live project in `projects` above, so the
// quote, the case study and the screenshot all refer to the same piece of work.
// Attributed to the business and role — confirm wording with each client
// before publishing.
export const testimonials = [
  {
    quote: 'We wanted people to see the food and find the phone number straight away, and that is exactly what we got. The menu is easy for us to change ourselves, and the table bookings come through without us chasing anyone.',
    name: 'Istanbul Restaurant',
    role: 'Owner',
    location: 'Birmingham, UK',
    slug: 'istanbul-restaurant-birmingham',
  },
  {
    quote: 'We were being compared to much bigger facilities companies. The site made us look the part without pretending to be something we are not, and the Schedule A Service button is on every page, which is where most of our enquiries now start.',
    name: 'CSFM Cleaning',
    role: 'Management',
    location: 'Birmingham, UK',
    slug: 'csfm-cleaning',
  },
  {
    quote: 'Everything was spread across social media before — the music, the awards, the tour dates. Now there is one official site to send fans, promoters and press to, and it looks the way the shows feel.',
    name: 'Arif Lohar',
    role: 'Management, Jazba Entertainment Ltd.',
    location: 'UK & Worldwide',
    slug: 'arif-lohar-jugni-king',
  },
  {
    quote: 'Voting night is the real test. Traffic goes from nothing to thousands the moment nominations go live, and the site has held up through it. Tickets and votes sit side by side, which is how we wanted it.',
    name: 'Pakistani Music & Media Awards',
    role: 'Event Team',
    location: 'Symphony Hall, Birmingham',
    slug: 'pmm-awards',
  },
  {
    quote: 'People come to us at difficult moments, so the site had to feel calm. Putting the fees and the referral form in the menu means nobody has to hunt for them — individuals or the agencies referring to us.',
    name: 'Between You and Me SEVA',
    role: 'Counselling Team',
    location: 'United Kingdom',
    slug: 'between-you-and-me-seva',
  },
  {
    quote: 'The booking button follows you down the page, which was the whole point. Packages got their own place in the menu instead of being buried, and the FAQs have taken a good chunk of the repeat calls off us.',
    name: 'Bab Alzahia Cleaning Services',
    role: 'Owner',
    location: 'Ajman, UAE',
    slug: 'bab-alzahia-cleaning',
  },
]

export const homeFaqs = [
  {
    q: 'What services does Jazba Host offer?',
    a: 'We cover the full digital journey: web development, web design, mobile app development, web hosting, AI chatbot development, and CMS & eCommerce builds. One team handles everything from the first sketch to the server your site runs on.',
  },
  {
    q: 'How much does a website cost?',
    a: 'Every project is scoped individually — a brochure site, an eCommerce store and a custom web application are very different builds. Tell us what you need and we will come back with a clear, itemised quote. No jargon, no hidden fees.',
  },
  {
    q: 'Do you work with businesses outside the UK?',
    a: 'Absolutely. We are based in the United Kingdom with an office in Pakistan, and we serve clients globally. Time zones are never a problem — our support runs around the clock.',
  },
  {
    q: 'What is your development process?',
    a: 'Four clear steps: Discovery, where we learn your business and goals; Design, where we craft and prototype the experience; Development, where clean, tested code brings it to life; and Launch, where we deploy, optimise and support your project long-term.',
  },
  {
    q: 'How do I get started with Jazba Host?',
    a: 'Simply get in touch through our contact page or email us. We start with a free, no-pressure consultation to understand your project, then send you a clear plan and a fair quote.',
  },
  {
    q: 'Do you offer payment plans?',
    a: 'Yes. Larger projects are billed against agreed milestones, and we can arrange instalment plans for smaller businesses. Hosting is billed monthly or annually — whichever suits you best.',
  },
]

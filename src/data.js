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
  work1:      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1000&q=80',
  work2:      'https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1000&q=80',
  work3:      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
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
      { title: 'Startups', body: 'Affordable plans from £3.99/mo with everything included — SSL, backups, email and support.' },
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
    audiencesLead: 'From a £3.99/mo starter site to business-critical platforms with SLAs — every site gets looked after.',
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

// Hosting pricing plans.
export const hostingPlans = [
  {
    name: 'Starter',
    price: 3.99,
    tagline: 'Perfect for personal websites and small projects getting started online.',
    featured: false,
    features: ['1 Website', '10 GB SSD Storage', '100 GB Bandwidth', 'Free SSL Certificate', '1 Email Account', 'Daily Backups', 'cPanel Access', 'Free Website Migration'],
  },
  {
    name: 'Business',
    price: 9.99,
    tagline: 'Ideal for growing businesses that need more resources and priority support.',
    featured: true,
    features: ['5 Websites', '50 GB SSD Storage', 'Unlimited Bandwidth', 'Free SSL Certificate', '10 Email Accounts', 'Daily Backups', 'cPanel Access', 'Free Website Migration', 'Priority Support'],
  },
  {
    name: 'Enterprise',
    price: 24.99,
    tagline: 'Maximum power and resources for high-traffic websites and demanding applications.',
    featured: false,
    features: ['Unlimited Websites', '200 GB SSD Storage', 'Unlimited Bandwidth', 'Free SSL Certificate', 'Unlimited Email', 'Daily Backups', 'cPanel Access', 'Free Website Migration', 'Priority Support', 'Dedicated IP'],
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

// Portfolio projects — each has a case-study page at /portfolio/:slug.
export const projects = [
  {
    slug: 'bloom-and-co',
    category: 'eCommerce',
    title: 'Bloom & Co. eCommerce Platform',
    client: 'Bloom & Co.',
    location: 'London, UK',
    year: '2025',
    body: 'A premium Shopify store for a luxury floral brand, featuring custom product configurators and subscription services.',
    image: img.work1,
    tech: ['Shopify', 'Shopify Liquid', 'Custom Theme', 'Stripe', 'Klaviyo'],
    metrics: [
      { value: '120%', label: 'Revenue Increase' },
      { value: '4.2%', label: 'Conversion Rate' },
      { value: '1.8s', label: 'Page Load Time' },
    ],
    challenge:
      "Bloom & Co.'s template store looked nothing like their luxury brand, took almost five seconds to load, and made building a bouquet a ten-click ordeal. Subscriptions — the heart of their business plan — were bolted on with three conflicting apps that regularly double-charged customers.",
    solution:
      'We rebuilt the store on a custom Shopify theme designed around their brand, with a drag-and-drop bouquet configurator, a native subscription flow with Stripe billing, and Klaviyo automations for post-purchase care. We host and maintain the store, so seasonal campaigns ship in days, not weeks.',
    results: [
      '120% revenue increase in the first six months',
      'Conversion rate up from 1.9% to 4.2%',
      'Page load time cut from 4.6s to 1.8s',
      'Subscriptions now make up 30% of monthly revenue',
    ],
    quote: {
      text: 'Jazba Host transformed our online presence completely. Their team understood our brand perfectly and delivered beyond our expectations.',
      name: 'Sarah Mitchell',
      role: 'Founder, Bloom & Co.',
    },
    serviceLinks: [
      { label: 'WordPress & Shopify', to: '/services/wordpress-and-shopify' },
      { label: 'Hosting & Maintenance', to: '/services/hosting-and-maintenance' },
    ],
  },
  {
    slug: 'techbridge-analytics',
    category: 'Web Development',
    title: 'TechBridge Analytics Dashboard',
    client: 'TechBridge Solutions',
    location: 'Birmingham, UK',
    year: '2025',
    body: 'A real-time analytics dashboard built with Next.js, featuring interactive data visualisations and role-based access control.',
    image: img.work3,
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Recharts', 'Node.js'],
    metrics: [
      { value: '50x faster', label: 'Data Processing' },
      { value: '95%', label: 'User Adoption' },
      { value: '99.97%', label: 'Uptime' },
    ],
    challenge:
      'TechBridge ran client reporting out of a tangle of spreadsheets that took analysts two days per client per month to assemble — and clients could never see live numbers. Off-the-shelf BI tools priced them out and none matched their workflow.',
    solution:
      'We built a custom analytics platform: a Node.js pipeline ingesting client data into PostgreSQL, a Next.js dashboard with role-based access so each client sees only their own numbers, and interactive Recharts visualisations with scheduled PDF exports. Hosted and monitored by us with a 99.9% SLA.',
    results: [
      'Report generation from two days to under an hour — 50x faster',
      '95% of clients now log in weekly',
      '99.97% measured uptime in the last 12 months',
      'Analyst hours redirected to consultancy revenue',
    ],
    quote: {
      text: 'We needed a complex web application with real-time features, and Jazba Host delivered it on time and within budget. Their technical expertise is outstanding.',
      name: 'James Patel',
      role: 'Director, TechBridge Solutions',
    },
    serviceLinks: [
      { label: 'Web Development', to: '/services/web-development' },
      { label: 'Hosting & Maintenance', to: '/services/hosting-and-maintenance' },
    ],
  },
  {
    slug: 'pureskin-app',
    category: 'App Development',
    title: 'PureSkin Mobile App',
    client: 'PureSkin',
    location: 'Manchester, UK',
    year: '2024',
    body: 'A cross-platform beauty and skincare app with AI-powered product recommendations and virtual try-on features.',
    image: img.work2,
    tech: ['React Native', 'Expo', 'Firebase', 'OpenAI', 'Stripe'],
    metrics: [
      { value: '50K+', label: 'App Downloads' },
      { value: '12K', label: 'Daily Active Users' },
      { value: '+85%', label: 'In-App Purchases' },
    ],
    challenge:
      "PureSkin's mobile web store converted poorly — customers wanted personalised routines and repeat ordering, but the website couldn't remember preferences or send restock reminders. Two earlier agency quotes for separate iOS and Android apps blew the budget.",
    solution:
      'One React Native codebase, both app stores. We built an AI skin-quiz that generates personalised routines with OpenAI, push-notification restock reminders, Stripe in-app purchases and a loyalty wallet — all synced with their existing website, which we also host.',
    results: [
      '50,000+ downloads in the first year',
      '12,000 daily active users',
      'In-app purchases up 85% versus mobile web',
      'One codebase — roughly half the cost of two native apps',
    ],
    quote: {
      text: 'The store Jazba Host built for us is beautiful and incredibly fast. Our conversion rate has doubled since the launch.',
      name: 'Emily Richardson',
      role: 'Marketing Manager, PureSkin',
    },
    serviceLinks: [
      { label: 'App Development', to: '/services/app-development' },
      { label: 'AI Chatbot', to: '/services/ai-chatbot' },
    ],
  },
  {
    slug: 'thames-dental',
    category: 'Web Design',
    title: 'Thames Dental Studio Website',
    client: 'Thames Dental Studio',
    location: 'London, UK',
    year: '2025',
    body: 'A calm, trust-building redesign for a private dental practice, with online booking that fills the diary while the phones are quiet.',
    image: img.booking,
    tech: ['Figma', 'WordPress', 'Booking System', 'Stripe', 'GA4'],
    metrics: [
      { value: '+65%', label: 'Online Bookings' },
      { value: '2x', label: 'New Patient Enquiries' },
      { value: '1.2s', label: 'Page Load Time' },
    ],
    challenge:
      "Thames Dental's dated website made a premium practice look budget, and every appointment still went through the phone — missed calls meant missed patients. Treatment pages buried pricing, so front desk spent hours answering the same questions.",
    solution:
      'We redesigned the site around patient trust: real photography, clear treatment pages with transparent pricing, and reviews woven throughout. An online booking system with deposits via Stripe syncs to their practice diary, and we host and maintain the site under a care plan.',
    results: [
      'Online bookings up 65% in three months',
      'New patient enquiries doubled',
      'Load time cut to 1.2 seconds',
      'Front-desk call volume down by a third',
    ],
    quote: {
      text: 'Patients now tell us the website was the reason they chose us. Booking online has quietly become our best receptionist.',
      name: 'Dr. Priya Sharma',
      role: 'Principal Dentist, Thames Dental Studio',
    },
    serviceLinks: [
      { label: 'Web Design', to: '/services/web-design' },
      { label: 'Web Development', to: '/services/web-development' },
    ],
  },
  {
    slug: 'northgate-properties',
    category: 'WordPress',
    title: 'Northgate Properties Portal',
    client: 'Northgate Properties',
    location: 'Birmingham, UK',
    year: '2024',
    body: 'A WordPress property portal for a growing estate agency — live listings, instant valuations and lead capture built in.',
    image: img.ukOffice,
    tech: ['WordPress', 'ACF', 'Property Feed API', 'Rank Math', 'WP Rocket'],
    metrics: [
      { value: '300+', label: 'Live Listings' },
      { value: '+45%', label: 'Vendor Leads' },
      { value: '98/100', label: 'PageSpeed Score' },
    ],
    challenge:
      'Northgate paid heavy monthly fees to the big property portals but their own website — a slow page-builder theme — generated almost no direct leads. Listings had to be retyped by hand and vanished from Google.',
    solution:
      'A custom WordPress build with ACF-powered listings synced automatically from their agency software, map and filter search, an instant-valuation tool that captures vendor leads, and Rank Math SEO tuned for local searches. We host it on our UK servers and keep everything updated.',
    results: [
      '300+ listings syncing automatically — zero retyping',
      'Vendor valuation leads up 45%',
      '98/100 Google PageSpeed on mobile',
      'Page-one rankings for 14 local search terms',
    ],
    quote: {
      text: 'For the first time our own website out-performs the portals we pay for. The valuation tool alone paid for the build in two months.',
      name: 'Mark Davies',
      role: 'Director, Northgate Properties',
    },
    serviceLinks: [
      { label: 'WordPress & Shopify', to: '/services/wordpress-and-shopify' },
      { label: 'Hosting & Maintenance', to: '/services/hosting-and-maintenance' },
    ],
  },
  {
    slug: 'digiventure-assistant',
    category: 'AI Chatbot',
    title: 'DigiVenture AI Support Assistant',
    client: 'DigiVenture',
    location: 'Islamabad, Pakistan',
    year: '2025',
    body: 'An AI assistant trained on 400+ support articles, resolving customer queries in seconds across web chat and WhatsApp.',
    image: img.aiChat,
    tech: ['OpenAI', 'WhatsApp API', 'Web Chat Widget', 'HubSpot', 'Analytics'],
    metrics: [
      { value: '92%', label: 'Queries Auto-Resolved' },
      { value: '<5s', label: 'Avg. Response Time' },
      { value: '+38%', label: 'Captured Leads' },
    ],
    challenge:
      "DigiVenture's support inbox took hours to answer even simple questions, and enquiries arriving overnight were lost by morning. Hiring a 24/7 support team was not an option at their stage.",
    solution:
      'We trained an AI assistant on their 400+ help articles and product docs, deployed it on web chat and WhatsApp, and connected it to HubSpot so qualified leads and unresolved cases route to the right human instantly. Monthly tuning keeps answer quality climbing.',
    results: [
      '92% of queries resolved without a human',
      'Average response time from hours to under 5 seconds',
      'Captured leads up 38% — nights and weekends included',
      'Support team refocused on high-value accounts',
    ],
    quote: {
      text: "Jazba Host's AI chatbot has revolutionised our customer support. Response times dropped from hours to seconds.",
      name: 'Ahmed Khan',
      role: 'CEO, DigiVenture',
    },
    serviceLinks: [
      { label: 'AI Chatbot', to: '/services/ai-chatbot' },
      { label: 'Web Development', to: '/services/web-development' },
    ],
  },
]

// The three projects featured on the home page.
export const featuredWork = projects.slice(0, 3)

export const testimonials = [
  {
    quote: 'Jazba Host transformed our online presence completely. The new website they built has increased our leads by 40% in just three months. Their team understood our brand perfectly and delivered beyond our expectations.',
    name: 'Sarah Mitchell',
    role: 'Founder, Bloom & Co.',
    location: 'London, UK',
  },
  {
    quote: 'We needed a complex web application with real-time features, and Jazba Host delivered it on time and within budget. Their technical expertise is outstanding, and their communication throughout the project was excellent.',
    name: 'James Patel',
    role: 'Director, TechBridge Solutions',
    location: 'Birmingham, UK',
  },
  {
    quote: 'The eCommerce store Jazba Host built for us is beautiful and incredibly fast. Our conversion rate has doubled since the launch. They also set up our hosting and email, making everything seamless.',
    name: 'Emily Richardson',
    role: 'Marketing Manager, PureSkin',
    location: 'Manchester, UK',
  },
  {
    quote: "Jazba Host's AI chatbot has revolutionised our customer support. Response times dropped from hours to seconds, and our customer satisfaction scores have never been higher. Highly recommend their AI services.",
    name: 'Ahmed Khan',
    role: 'CEO, DigiVenture',
    location: 'Islamabad, Pakistan',
  },
  {
    quote: 'From the initial consultation to the final launch, working with Jazba Host was an absolute pleasure. They took the time to understand our small business needs and delivered a website that truly represents our brand.',
    name: 'Claire Thompson',
    role: 'Owner, The Artisan Bakery',
    location: 'Edinburgh, UK',
  },
  {
    quote: 'We hired Jazba Host to build our customer-facing dashboard, and the result is phenomenal. Clean code, intuitive UX, and rock-solid performance. They are now our go-to development partner.',
    name: 'David Okonkwo',
    role: 'CTO, FinServe Analytics',
    location: 'London, UK',
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

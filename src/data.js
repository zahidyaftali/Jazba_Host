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

// The three headline services (each has a detail page).
export const services = [
  {
    slug: 'web-design',
    title: 'Web Design',
    tagline: 'Interfaces engineered to convert.',
    hero: img.webDesign,
    intro:
      'Pixel-precise, brand-driven design systems. We craft interfaces that feel considered on every screen — from the first fold to the checkout — balancing clarity, speed and personality.',
    highlights: [
      'Brand & visual identity systems',
      'UX research, wireframes & prototyping',
      'Responsive, mobile-first layouts',
      'Design systems & component libraries',
      'Accessibility (WCAG) built in',
      'Figma-to-code, no compromise handoff',
    ],
    deliverables: [
      { title: 'Discovery & Strategy', body: 'We map your audience, goals and competitors, then define the experience before a single pixel is drawn.' },
      { title: 'UI & Prototyping', body: 'High-fidelity, interactive prototypes so you feel the product before we build it.' },
      { title: 'Design System', body: 'A reusable, documented component library that keeps every future page on-brand.' },
    ],
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    tagline: 'Any framework. Any CMS. Any scale.',
    hero: img.webDev,
    intro:
      'From a marketing site to a full-scale web application — React, Next.js, WordPress, Shopify, Laravel, or hand-crafted HTML. We build fast, secure, maintainable code, and wire in the smart features modern businesses need.',
    highlights: [
      'React, Next.js, Vue & modern JS stacks',
      'WordPress, Webflow & headless CMS',
      'Ecommerce — Shopify, WooCommerce, custom',
      'AI chatbots & assistants',
      'Booking & reservation systems',
      'Workflow automation & integrations',
    ],
    deliverables: [
      { title: 'Architecture', body: 'We pick the right stack for your budget, team and roadmap — never the trendiest, always the fittest.' },
      { title: 'Build & Integrate', body: 'Clean, tested code plus the integrations that matter: payments, CRM, AI, analytics and more.' },
      { title: 'Launch & Support', body: 'CI/CD deployment, performance tuning and ongoing support so your site keeps earning.' },
    ],
  },
  {
    slug: 'hosting-and-domain',
    title: 'Hosting & Domain',
    tagline: 'Fast, secure, always-on infrastructure.',
    hero: img.hosting,
    intro:
      'Managed hosting and domains under one roof. SSD-backed servers, free SSL, daily backups and a 99.9% uptime guarantee — plus a team that actually answers when you need them.',
    highlights: [
      'Managed cloud & VPS hosting',
      'Domain registration & transfer',
      'Free SSL on every plan',
      'Daily automated backups',
      'Global CDN & caching',
      '24/7 monitoring & support',
    ],
    deliverables: [
      { title: 'Provision', body: 'We register your domain, configure DNS and spin up hardened, SSD-backed hosting.' },
      { title: 'Secure & Optimise', body: 'Free SSL, firewalls, CDN caching and daily backups keep you fast and protected.' },
      { title: 'Monitor 24/7', body: 'Round-the-clock monitoring and a real support team keep you online, guaranteed.' },
    ],
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    tagline: 'Native & cross-platform apps for iOS and Android.',
    hero: img.mobileDev,
    intro:
      'From idea to the App Store — we build mobile apps that feel native on every device. React Native and Expo for cross-platform speed, or fully native builds where performance demands it, with the backend and integrations to match.',
    highlights: [
      'React Native, Expo & Flutter',
      'Native iOS & Android builds',
      'Push notifications & offline-first',
      'AI-powered features & recommendations',
      'Payments, bookings & in-app purchases',
      'App Store & Play Store submission',
    ],
    deliverables: [
      { title: 'Strategy & Prototype', body: 'We map user journeys and validate the experience with clickable prototypes before writing code.' },
      { title: 'Build & Test', body: 'One codebase, both platforms — developed with automated testing and real-device QA at every stage.' },
      { title: 'Launch & Iterate', body: 'We handle store submission, analytics and updates so your app keeps improving after day one.' },
    ],
  },
  {
    slug: 'ai-chatbot-development',
    title: 'AI Chatbot Development',
    tagline: 'Always-on assistants that capture and convert.',
    hero: img.aiChat,
    intro:
      'Intelligent chatbots trained on your business — answering questions, capturing leads and booking appointments around the clock. On your website, WhatsApp or wherever your customers are.',
    highlights: [
      'Custom AI assistants trained on your content',
      'Lead capture & qualification',
      'Customer support automation',
      'Website, WhatsApp & Messenger channels',
      'CRM & calendar integrations',
      'Conversation analytics & tuning',
    ],
    deliverables: [
      { title: 'Scope & Train', body: 'We define what your assistant should do and train it on your services, FAQs and tone of voice.' },
      { title: 'Integrate', body: 'We wire it into your website and channels, connect your CRM and set up smooth human handoff.' },
      { title: 'Optimise', body: 'We monitor real conversations, close the gaps and keep improving answer quality month on month.' },
    ],
  },
  {
    slug: 'cms-ecommerce-development',
    title: 'CMS & eCommerce Development',
    tagline: "Content and commerce on the world's leading platforms.",
    hero: img.ecommerce,
    intro:
      'Powerful content management and online stores your team can actually run. WordPress, Webflow or headless CMS for content; Shopify, WooCommerce or fully custom checkout for commerce — chosen to fit your business, not the other way round.',
    highlights: [
      'WordPress, Webflow & headless CMS',
      'Shopify & WooCommerce storefronts',
      'Custom checkout & product configurators',
      'Payment gateways & subscriptions',
      'SEO, performance & analytics baked in',
      'Editor training & documentation',
    ],
    deliverables: [
      { title: 'Platform Fit', body: 'We match your catalogue, content and budget to the right platform — no over-engineering.' },
      { title: 'Build & Migrate', body: 'Design-faithful themes, clean data migration and payments configured end to end.' },
      { title: 'Grow', body: 'SEO, speed and conversion tuning plus training so your team ships content and products with confidence.' },
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
    body: 'Custom full-stack web applications built with cutting-edge technologies to drive your business forward.',
    to: '/services/web-development',
  },
  {
    title: 'Web Design',
    body: 'Visually stunning, user-centred designs that elevate your brand and convert visitors into customers.',
    to: '/services/web-design',
  },
  {
    title: 'Mobile App Development',
    body: 'Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android.',
    to: '/services/mobile-app-development',
  },
  {
    title: 'Web Hosting',
    body: 'Reliable, high-performance web hosting with enterprise-grade infrastructure and UK-based support.',
    to: '/services/hosting-and-domain',
  },
  {
    title: 'AI Chatbot Development',
    body: 'Intelligent AI-powered chatbots that automate customer support and streamline business operations.',
    to: '/services/ai-chatbot-development',
  },
  {
    title: 'CMS & eCommerce Development',
    body: "Powerful content management and online store solutions built on the world's leading platforms.",
    to: '/services/cms-ecommerce-development',
  },
]

// Featured case studies on the home page.
export const featuredWork = [
  {
    category: 'eCommerce',
    title: 'Bloom & Co. eCommerce Platform',
    body: 'A premium Shopify store for a luxury floral brand, featuring custom product configurators and subscription services.',
    image: img.work1,
    tech: ['Shopify', 'Shopify Liquid', 'Custom Theme', 'Stripe', '+1'],
    metrics: [
      { value: '120%', label: 'Revenue Increase' },
      { value: '4.2%', label: 'Conversion Rate' },
      { value: '1.8s', label: 'Page Load Time' },
    ],
  },
  {
    category: 'Web Development',
    title: 'TechBridge Analytics Dashboard',
    body: 'A real-time analytics dashboard built with Next.js, featuring interactive data visualisations and role-based access control.',
    image: img.work3,
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Recharts', '+2'],
    metrics: [
      { value: '50x faster', label: 'Data Processing' },
      { value: '95%', label: 'User Adoption' },
      { value: '99.97%', label: 'Uptime' },
    ],
  },
  {
    category: 'Mobile App',
    title: 'PureSkin Mobile App',
    body: 'A cross-platform beauty and skincare app with AI-powered product recommendations and virtual try-on features.',
    image: img.work2,
    tech: ['React Native', 'Expo', 'Firebase', 'OpenAI', '+1'],
    metrics: [
      { value: '50K+', label: 'App Downloads' },
      { value: '12K', label: 'Daily Active Users' },
      { value: '+85%', label: 'In-App Purchases' },
    ],
  },
]

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

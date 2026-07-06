# Jazba Host — Website

A complete, multi-page marketing website for **Jazba Host** (Jazba Entertainment Ltd.) — a full web-solutions company offering **Web Design, Web Development, and Hosting & Domain**, plus ecommerce, AI chatbots, booking and automation.

Built with **React + Vite**, routing via **react-router-dom**, and animation via **Framer Motion**. The design follows a Replicate-inspired system: a **warm cream canvas** (`#f9f7f3`) with full-bleed **orange mesh** hero and CTA bands (`#ea2804`), dark `#202020` feature bands, **fully-rounded** interactive elements, and a three-family type stack — **Bricolage Grotesque** for display, **Inter** for body, **JetBrains Mono** for code and labels.

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/services` | Services overview |
| `/services/web-design` | Web Design (single service) |
| `/services/web-development` | Web Development (single service) |
| `/services/hosting-and-domain` | Hosting & Domain (single service) |
| `/pricing` | Hosting Pricing (plans, domains, FAQ) |
| `/contact` | Contact (form + both office locations) |
| `*` | 404 |

## Run it

```bash
npm install      # already done
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Structure

```
src/
  main.jsx            # entry + BrowserRouter
  App.jsx             # routes + page transitions
  index.css           # design-system tokens & base styles
  data.js             # all content, services, pricing, offices, stock image URLs
  components/
    Navbar.jsx / navbar.css
    Footer.jsx / footer.css
    Shared.jsx        # SectionHead, CtaBand, StatStrip, Eyebrow
    Reveal.jsx        # scroll-triggered reveal wrapper
    motion.js         # shared Framer Motion variants
  pages/
    Home / About / Services / ServiceDetail / Pricing / Contact / NotFound
    pages.css         # shared page styles
```

## Notes

- **Images** are royalty-free from [Unsplash](https://unsplash.com) (loaded via their CDN). Swap the URLs in `src/data.js` for your own assets any time.
- **Fonts**: Inter (via Google Fonts) as the documented open-source substitute for BMW Type Next Latin.
- **Content** (services, pricing, office details, phone numbers) lives entirely in `src/data.js` — edit there to update the whole site.
- The contact form is a front-end demo (shows a success state on submit). Wire it to your email/CRM backend to make it live.

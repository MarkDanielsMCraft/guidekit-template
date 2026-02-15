# GuideKit Template
### Premium guide-site template for content-first teams

React 19 · Vite 7 · Tailwind 3 · i18n · Framer Motion

**Last Updated:** February 15, 2026

GuideKit is a production-ready template for building modern guide hubs: checklists, walkthroughs, and resource libraries with polished UX.
All content ships as placeholders so you can insert your own verified information.

## Features
- **Content-first structure**: Guides, steps, and resource library schemas
- **Progress tracking**: Checklist completion stored in local storage
- **Search + filtering**: Fast discovery across titles, tags, and steps
- **Modern UI**: Glassmorphism, gradients, and smooth transitions
- **SEO basics**: Meta tags and 404 fallback (add sitemap/robots for your domain)
- **Legal page templates**: About, Terms, Privacy, Impressum, Datenschutz

## Tech Stack
- **Frontend**: React 19, Vite 7
- **Styling**: Tailwind CSS 3, Framer Motion
- **Routing**: React Router
- **Localization**: i18next

## Quick Start
```bash
git clone https://github.com/MarkDanielsMCraft/guidekit-template.git
cd guidekit-template
npm install
npm run dev
```

## Customize Content
1. Replace the sample guide in src/data/posts/template-guide.jsx
2. Replace resources in src/data/resources.js
3. Update metadata in src/constants/config.js
4. Update SEO tags in index.html (title, description, OG/Twitter URLs)
5. Review legal pages in src/pages
6. Add public/sitemap.xml and public/robots.txt for your domain

## Forking Checklist (Do This Before You Publish)
1. **Branding**: Update site name, tagline, and site URL in src/constants/config.js.
2. **SEO**: Set title/description and OG/Twitter tags in index.html.
3. **Guides**: Replace src/data/posts/template-guide.jsx with your real content.
4. **Resources**: Replace src/data/resources.js with verified sources.
5. **Legal**: Edit About/Terms/Privacy/Impressum/Datenschutz pages or remove routes if you do not need them.
6. **Search**: Confirm your content appears in search and filters.
7. **Sitemap/Robots**: Add public/sitemap.xml and public/robots.txt for your domain.
8. **Verification**: Add verified dates to each post and double-check all links.
9. **Deploy**: Run npm run build and npm run preview before going live.

## Deploy
```bash
npm run build
npm run preview
```

## Credits
- Created by [MCraft](https://github.com/MarkDanielsMCraft)

If GuideKit saves you a few late nights, consider fueling the next release with a coffee.

[![Buy Me a Coffee](https://img.buymeacoffee.com/button-api/?text=Buy%20me%20a%20coffee&emoji=☕&slug=markdanielsmcraft&button_colour=FF813F&font_colour=ffffff&font_family=Poppins&outline_colour=ffffff&coffee_colour=FFDD00)](https://buymeacoffee.com/markdanielsmcraft)

## License
MIT © MCraft

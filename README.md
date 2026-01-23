# 🇩🇪 Survival Kit: Move to Germany with Confidence

[![Live Demo](https://img.shields.io/badge/Live%20Demo-survival--kit-blue?style=flat-square)](https://markdanielsmcraft.github.io/survival-kit/)
[![React](https://img.shields.io/badge/React-19.2-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646cff?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38b2ac?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

> Data-first, verified guides for international students, scholars, and trainees building a life in Germany.

---

## Overview
- Interactive SPA covering arrival, housing, work rights, healthcare, daily life, and emergencies
- Built for newcomers; explains German terms inline and links to official sources
- 17 posts with stage-specific styling and matched photography
- Resource library with source badges (official, NGO, tool, learning, referral) and search
- Checklists with localStorage persistence; emergency shortcuts (112/110/116117) in the header

**Content verified:** January 23, 2026 — see [CURRENT_AS_OF_JAN19_2026.md](./CURRENT_AS_OF_JAN19_2026.md) for source notes.

---

## Support the Project
- Buy Me a Coffee keeps the guides free and updated for newcomers. 
- Direct link: [https://www.buymeacoffee.com/MarkDanielsMCraft](https://www.buymeacoffee.com/MarkDanielsMCraft)
- In-app support entry: Footer “Buy Me a Coffee” button (pulled from `LINKS.buyMeACoffee`).

---

## Data-First Content Model
- Posts in `src/data/posts.jsx` with structured blocks (`type: "p" | "h2" | "ul"`, plus `items` for lists) and per-post background images.
- Resources in `src/data/resources.js`; categories must match `RESOURCE_CATEGORIES` in `src/constants/config.js`.
- Stage styles in `src/constants/ui.js` (pills, icons, progress bars).
- Safety: external URLs pass through `isSafeUrl()` / `safeOpen()`.
- Hero overlay in post detail is tuned for readability while keeping images visible.

---

## Project Structure
```
survival-kit/
├── src/
│   ├── data/           # posts.jsx, resources.js
│   ├── components/     # cards, detail view, filters, navigation
│   ├── constants/      # stage styles, config, asset references
│   ├── utils/          # text renderer, helpers, security
│   ├── styles/         # global styles injection
│   ├── App.jsx         # app shell, view toggles, filters
│   └── main.jsx        # entry point
├── public/
├── vite.config.js      # base: /survival-kit/
└── package.json
```

---

## Getting Started
```
git clone https://github.com/MarkDanielsMCraft/survival-kit.git
cd survival-kit
npm install

# dev server
npm run dev

# lint
npm run lint

# production build
npm run build

# preview build
npm run preview
```
Open http://localhost:5173.

---

## Deployment (GitHub Pages)
- Base path is `/survival-kit/` (see `vite.config.js`).
- Deploy by pushing to `main`; GitHub Actions builds and publishes Pages automatically.
- Local build: `npm run build` outputs to `dist/`.

---

## Authoring Guidelines
- Keep posts beginner-friendly; define German terms inline (e.g., Anmeldung = address registration).
- Every post needs `verified: "YYYY-MM-DD"` when content changes.
- Use official/NGO sources first; ensure URLs are http/https.
- Maintain content block schema and keep background images assigned and imported at the top of `posts.jsx`.

---

## Quality Checks
- `npm run lint`
- Visual sanity check at 320–375px widths for card spacing, hero contrast, and tap targets.

---

## Contributing
- Fork, branch, commit, and open a PR with a clear description.
- Issues and feature ideas are welcome in the GitHub tracker.

---

## License
MIT. See [LICENSE](LICENSE).

*Last verified: January 18, 2026*

---

## 🎓 Who is This For?

This guide is designed for:

- 🏥 **Nursing scholars & healthcare professionals** (Auszubildende, Pflegefachpersonen)
- 🎓 **International students** in Germany (all fields of study)
- 💼 **Working professionals** relocating to Germany
- 🌍 **Anyone** seeking practical advice for navigating German bureaucracy and culture
- 🤝 **Expats** wanting to understand German workplace culture and society

---

## 📚 Additional Resources

- [Official Handbook Germany](https://handbookgermany.de)
- [Integreat App](https://integreat.app) - Local information in your language
- [BAMF (Federal Office for Migration and Refugees)](https://www.bamf.bund.de)
- [DB Navigator](https://www.bahn.de/service/mobile/db-navigator) - Train tickets

---

## 🙏 Acknowledgments

Made with ❤️ for future colleagues navigating life in Germany.

Thank you to the nursing community, international students, and mentors who shaped this guide through their experiences and feedback.

---

**Ready to start your German adventure?** [Visit the live guide →](https://markdanielsmcraft.github.io/survival-kit/)


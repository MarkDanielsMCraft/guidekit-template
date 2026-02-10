# StartGermany 🇩🇪
### The Ultimate Orientation Guide for Internationals

[Live Demo](https://markdanielsm.github.io/survival-kit/) · React 19 · Vite 7 · Tailwind 3 · i18n

**Last Updated:** February 10, 2026

StartGermany is a premium, data-driven orientation platform built by internationals for internationals. It provides 18+ high-impact, verified walkthroughs to help students, scholars, and trainees navigate the first year in Germany with zero stress.

## ✨ Features
-   **Bilingual Experience**: Full English and German support with i18next
-   **18 Verified Guides**: Step-by-step walkthroughs for Anmeldung, Banking, Health Insurance, Housing, and more
-   **Modern UI/UX**: Text-based logo with gradient styling, glassmorphism effects, and spotlight card interactions
-   **Legal Pages**: Complete Impressum and Datenschutz (GDPR-compliant privacy policy)
-   **Progress Tracking**: Reading progress saved automatically to your device
-   **Emergency Ready**: One-tap access to German emergency numbers (112, 110, 116117)
-   **Dark Mode**: System-aware theme with smooth transitions
-   **SEO Optimized**: Dynamic meta tags, sitemap, and robots.txt
-   **Offline PDF Export**: Download clean, print-ready guides

## 🛠️ Tech Stack
-   **Frontend**: React 19, Vite 7
-   **Styling**: Tailwind CSS 3, Framer Motion
-   **Routing**: React Router v6 with clean URLs
-   **Localization**: i18next with browser language detection
-   **SEO**: react-helmet-async for dynamic meta tags
-   **Typography**: Outfit (headings) + Plus Jakarta Sans (body)

## 🚀 Getting Started
```bash
git clone https://github.com/MarkDanielsMCraft/survival-kit.git
cd survival-kit
npm install
npm run dev
```

## 📦 Deployment

### GitHub Pages
```bash
# Build with GitHub Pages base path
VITE_BASE_PATH=/survival-kit/ npm run build
npm run deploy
```

### Vercel
```bash
# Deploy directly (uses vercel.json for routing)
vercel --prod
```

The project supports both platforms:
-   **GitHub Pages**: Uses `404.html` fallback for clean SPA URLs
-   **Vercel**: Uses native `vercel.json` rewrites for optimal routing

## 📝 Recent Updates (Feb 2026)
- ✅ Fixed router import bug (HashRouter → BrowserRouter)
- ✅ Added text-based "StartGermany" logo with German flag gradient
- ✅ Created Impressum and Datenschutz legal pages
- ✅ Fixed post card navigation links
- ✅ Added custom favicon (SG initials)
- ✅ Updated all guide verification dates to February 2026

## 🤝 Support
If this project helped you avoid a fine or clear a bureaucratic hurdle, consider [Supporting the Project](https://buymeacoffee.com/markdanielsmcraft).

---
*Disclaimer: This is an unofficial orientation guide. Always verify with official German authorities for the latest legal requirements.*

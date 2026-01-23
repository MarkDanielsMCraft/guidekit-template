# 🇩🇪 Survival Kit: Your Guide to Life in Germany

> **The honest, step-by-step guide for international students and scholars navigating life, work, and study in Germany**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-survival--kit-blue?style=flat-square)](https://markdanielsmcraft.github.io/survival-kit/)
[![React](https://img.shields.io/badge/React-19.2-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646cff?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38b2ac?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

---

## 📖 About

Survival Kit is an interactive guide designed to help international students, scholars, and professionals thrive in Germany. Initially created for nursing scholars (Auszubildende), it has evolved to cover essential topics relevant to **any international student or worker** in Germany.

It covers everything from the first 72 hours after arrival to understanding workplace rights, navigating bureaucracy, and building community.

**Why we built this:**
- Living and working abroad is challenging and can feel isolating
- Official information is scattered and often in German
- International newcomers face a steep learning curve with bureaucracy
- We wanted to create a friendly, honest resource that actually helps
- Practical tips that aren't found in official guides

### 📅 **Content Verified as of January 23, 2026**
✅ All prices, timelines, and procedures are current and verified  
✅ Written specifically for complete beginners with no unexplained German jargon  
✅ Every complex concept explained thoroughly with real examples  
✅ Links to official German government sources for local verification  
👉 **See [CURRENT_AS_OF_JAN19_2026.md](./CURRENT_AS_OF_JAN19_2026.md) for full verification details**

---

## ✨ Key Features

### 📚 **Comprehensive Blog Guides**
- **Mindset & Culture** - Expectations, quiet hours, Coconut Culture, direct feedback
- **Arrival (First 72 Hours)** - From airport to bed: internet, transport, essentials
- **Money & Paperwork** - Banking, Anmeldung, taxes, health insurance
- **Housing** - Finding flats, furnishing for free, house rules and neighborly culture
- **Career & Language** - Workplace German, Aus­bildung study support
- **Rights & Workplace Culture** - Contracts, hierarchy, and employee rights
- **Health & Emergencies** - Doctors, insurance, what to do beyond 112
- **Daily Life & Food** - Shopping, eating cheaply, city hacks
- **Legal/Financial Defense** - Rundfunkbeitrag, liability insurance, subscription traps
- **Community & Wellbeing** - Mental health, discrimination, building friendships

### 🔍 **Smart Resource Library**
- Curated links to tools, apps, and websites
- Categorized by topic (Arrival, Money, Housing, Nursing, Rights, Health)
- Source badges (Official, NGO, Tool, Learning, Referral)
- Search functionality

### ✅ **Interactive Checklist System**
- Track progress through guides
- Action items with step-by-step instructions
- Progress persistence via localStorage
- Reset functionality per guide

### 🚨 **Emergency Mode**
- Quick access to emergency numbers (112, 110)
- Lost document guidance
- Always visible in header

### 📱 **Mobile-First Design**
- Responsive on phones, tablets, and desktops
- Touch-friendly interface
- Optimized for accessibility

### 💬 **Support the Author**
- Buy Me a Coffee integration
- Direct links to support

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/MarkDanielsMCraft/survival-kit.git
cd survival-kit

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 🛠️ Development

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

### Project Structure (data-first)

```
survival-kit/
├── src/
│   ├── data/
│   │   ├── posts.jsx         # All blog posts (JSX content blocks)
│   │   └── resources.js      # Curated external links
│   ├── components/           # UI components (cards, detail, filters, navigation)
│   ├── constants/            # Stage styles, config, assets
│   ├── utils/                # text renderer, helpers, security
│   ├── styles/               # globalStyles injection
│   ├── App.jsx               # App shell (view toggles, filters)
│   └── main.jsx              # Entry point
├── public/                   # Static files
├── index.html                # HTML entry point
├── vite.config.js            # Vite configuration (base /survival-kit/)
├── tailwind.config.js        # Tailwind CSS config
├── postcss.config.js         # PostCSS config
└── package.json              # Dependencies
```

---

## 📊 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 19** | UI framework |
| **Vite** | Build tool & dev server |
| **Tailwind CSS** | Styling |
| **Lucide React** | Icon library |
| **JavaScript (ES6+)** | Core language |

---

## 🎯 Features Explained

### Content Management
- Blog posts live in `src/data/posts.jsx` (structured blocks: `type: "p"|"h2"|"ul"` with `items`)
- Resources live in `src/data/resources.js` and categories map to `RESOURCE_CATEGORIES` in `src/constants/config.js`
- Stage styles live in `src/constants/ui.js` (pills, bars, accents)
- Background/hero images imported at the top of `posts.jsx`; each post references a specific image

### State Management
- **localStorage** for progress tracking
- React hooks for UI state
- Custom search and filter logic

### Styling
- **Tailwind CSS** utility-first
- Responsive breakpoints: `sm`, `md`, `lg`
- Global styles/animations injected from `src/styles/globalStyles.js`
- Post detail hero uses a softened overlay (from-black/40 → via-black/22 → to-black/36) so background photos stay visible

---

## 📝 Content Structure

Each blog post includes:
- **Title & Summary** - Quick overview
- **Rich Content** - Paragraphs, headings, lists
- **Golden Rule** - Key takeaway
- **Action Plan** - Checklist of steps
- **Read More** - Curated links with source verification
- **Downloads** - PDF templates
- **Videos** - YouTube tutorials

---

## 🌐 Deployment

### GitHub Pages

The app is configured for GitHub Pages with base path `/survival-kit/` (see `vite.config.js`).

```bash
# Build production version
npm run build

# Deploy (GitHub Actions on push to main)
git push origin main
```

**GitHub Actions** handles automatic deployment on every push to `main`.

---

## 🤝 Contributing

We welcome contributions! Areas where help is needed:

- **Content Updates** - Keep information current
- **Translations** - Add more languages
- **Bug Fixes** - Report and fix issues
- **Features** - Suggest improvements

### How to Contribute

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m "Add your feature"`
4. Push to branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 💡 Customization

### Add New Content

Edit the `POSTS` array in `App.jsx`:

```javascript
{
  slug: "your-guide",
  title: "Your Guide Title",
  subtitle: "Brief description",
  stage: "Category",
  readTime: "10 min",
  icon: <YourIcon size={24} />,
  color: "from-blue-600 to-indigo-600",
  content: [
    { type: "p", text: "Your content" },
    { type: "h2", text: "Section heading" },
    { type: "ul", items: ["Item 1", "Item 2"] }
  ],
  // ... more fields
}
```

### Customize Styling

Modify `tailwind.config.js` for theme changes or update `src/App.css` for global styles.

---

## 📄 License

This project is open source and available under the MIT License - see [LICENSE](LICENSE) file for details.

---

## ❤️ Support & Contribute

If this guide has genuinely helped you navigate life in Germany, consider supporting the author's work. Your support helps keep resources like this free and accessible for other international students and scholars.

### ☕ Support on Buy Me a Coffee

<div align="center">
  
**[👉Buy Me a Coffee](https://www.buymeacoffee.com/MarkDanielsMCraft)**

*Your coffee helps fund more guides, updates, and resources for the international community in Germany*

</div>

### 🤝 Contributing

We welcome contributions in many forms:

- **Content Updates** - Help keep information current and accurate
- **Translations** - Help reach more international communities
- **Bug Reports** - Found something broken? Let us know
- **Feature Suggestions** - Have ideas for improvements?
- **Sharing** - Spread the word to friends who might benefit

**How to contribute:**
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-improvement`
3. Make your changes and commit: `git commit -m "Add your improvement"`
4. Push to your fork: `git push origin feature/your-improvement`
5. Open a Pull Request with a clear description

### 📧 Connect

- **Have questions?** [Open an issue on GitHub](https://github.com/MarkDanielsMCraft/survival-kit/issues)
- **Want to suggest changes?** [Submit a Pull Request](https://github.com/MarkDanielsMCraft/survival-kit/pulls)
- **Found a bug?** [Report it here](https://github.com/MarkDanielsMCraft/survival-kit/issues/new)

---

## ⚠️ Disclaimer

**This is an unofficial guide.** Rules, prices, and processes can change frequently in Germany. If something in this guide conflicts with:
- An official letter from authorities
- Instructions from your employer
- Guidance from your city office

**Always follow the official instructions.** This guide is meant to help, not replace official information.

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


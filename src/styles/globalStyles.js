import { IMAGES } from '../constants/assets';

export const styles = `
  :root {
    --font-sans: 'Plus Jakarta Sans', system-ui, sans-serif;
    --font-display: 'Outfit', system-ui, sans-serif;
  }

  * { 
    -webkit-font-smoothing: antialiased; 
    -moz-osx-font-smoothing: grayscale; 
  }
  
  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--font-sans);
    background-color: #f8fafc;
    background-image:
      radial-gradient(at 0% 0%, rgba(99, 102, 241, 0.15) 0px, transparent 50%),
      radial-gradient(at 100% 0%, rgba(168, 85, 247, 0.15) 0px, transparent 50%),
      url('${IMAGES.globalBg}');
    background-size: 100% 100%, 100% 100%, cover;
    background-position: center;
    background-attachment: fixed;
    color: #0f172a;
    font-size: 16px;
    line-height: 1.6;
  }

  /* Dark mode overrides */
  .dark body {
    background-color: #020617; /* Slate 950 */
    background-image: 
      radial-gradient(at 0% 0%, rgba(99, 102, 241, 0.15) 0px, transparent 50%),
      radial-gradient(at 100% 100%, rgba(168, 85, 247, 0.10) 0px, transparent 50%);
    color: #f1f5f9;
  }

  h1, h2, h3, h4, h5, h6, .display-heading {
    font-family: var(--font-display);
    font-weight: 600;
    letter-spacing: -0.02em;
  }

  .app-shell {
    position: relative;
    background-color: transparent;
    transition: background-color 0.3s ease;
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar { width: 10px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { 
    background: #cbd5e1; 
    border-radius: 5px; 
    border: 2px solid transparent;
    background-clip: content-box;
  }
  ::-webkit-scrollbar-thumb:hover { background-color: #94a3b8; }
  
  .dark ::-webkit-scrollbar-thumb { background-color: #334155; }
  .dark ::-webkit-scrollbar-thumb:hover { background-color: #475569; }

  .hide-scrollbar { scrollbar-width: none; }
  .hide-scrollbar::-webkit-scrollbar { display: none; }

  /* Selection */
  ::selection {
    background: rgba(99, 102, 241, 0.2); /* Indigo 500 */
    color: inherit;
  }
  .dark ::selection {
    background: rgba(99, 102, 241, 0.4);
    color: #fff;
  }

  /* Utilities */
  .glass-panel {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.5);
  }
  .dark .glass-panel {
    background: rgba(15, 23, 42, 0.6); /* Slate 900 */
    border: 1px solid rgba(255, 255, 255, 0.08);
  }

  @media (prefers-reduced-motion: reduce) {
    *, ::before, ::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

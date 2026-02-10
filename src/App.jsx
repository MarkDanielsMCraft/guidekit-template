import React, { useState, useEffect, useCallback, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { STORAGE_KEY } from './constants/config';
import { styles } from './styles/globalStyles';
import { ScrollToTop } from './components/ScrollToTop';
import { AnimatePresence } from 'framer-motion';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const LibraryPage = lazy(() => import('./pages/LibraryPage').then(m => ({ default: m.LibraryPage })));
const PostPage = lazy(() => import('./pages/PostPage').then(m => ({ default: m.PostPage })));
const ImpressumPage = lazy(() => import('./pages/ImpressumPage').then(m => ({ default: m.ImpressumPage })));
const DatenschutzPage = lazy(() => import('./pages/DatenschutzPage').then(m => ({ default: m.DatenschutzPage })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));

// Components (not lazy loaded - needed immediately)
import { CookieConsent } from './components/CookieConsent';

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Loading...</p>
    </div>
  </div>
);

export default function App() {
  const [emergencyMode, setEmergencyMode] = useState(false);
  const location = useLocation();
  const [progress, setProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const toggleStep = useCallback((slug, idx) => {
    const key = `${slug}-${idx}`;
    setProgress((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const resetPost = (slug) => {
    if (!window.confirm("Reset checklist for this post?")) return;
    setProgress((prev) => {
      const next = { ...prev };
      Object.keys(next).forEach((k) => {
        if (k.startsWith(`${slug}-`)) delete next[k];
      });
      return next;
    });
  };

  return (
    <>
      <style>{styles}</style>
      <div className="app-shell min-h-screen text-slate-900 dark:text-slate-100 font-sans selection:bg-indigo-100 selection:text-indigo-900 transition-colors duration-300">
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <Suspense fallback={<PageLoader />}>
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <HomePage
                    progress={progress}
                    emergencyMode={emergencyMode}
                    setEmergencyMode={setEmergencyMode}
                  />
                }
              />
              <Route
                path="/library"
                element={
                  <LibraryPage
                    emergencyMode={emergencyMode}
                    setEmergencyMode={setEmergencyMode}
                  />
                }
              />
              <Route
                path="/guide/:slug"
                element={
                  <PostPage
                    progress={progress}
                    onToggle={toggleStep}
                    onReset={resetPost}
                    emergencyMode={emergencyMode}
                    setEmergencyMode={setEmergencyMode}
                  />
                }
              />
              <Route
                path="/impressum"
                element={
                  <ImpressumPage
                    emergencyMode={emergencyMode}
                    setEmergencyMode={setEmergencyMode}
                  />
                }
              />
              <Route
                path="/datenschutz"
                element={
                  <DatenschutzPage
                    emergencyMode={emergencyMode}
                    setEmergencyMode={setEmergencyMode}
                  />
                }
              />
              <Route
                path="/privacy-policy"
                element={
                  <PrivacyPolicyPage
                    emergencyMode={emergencyMode}
                    setEmergencyMode={setEmergencyMode}
                  />
                }
              />
            </Routes>
          </Suspense>
        </AnimatePresence>
        <CookieConsent />
      </div>
    </>
  );
}

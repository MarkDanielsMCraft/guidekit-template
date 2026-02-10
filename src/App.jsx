import React, { useState, useEffect, useCallback } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { STORAGE_KEY } from './constants/config';
import { styles } from './styles/globalStyles';
import { ScrollToTop } from './components/ScrollToTop';
import { AnimatePresence } from 'framer-motion';

// Pages
import { HomePage } from './pages/HomePage';
import { LibraryPage } from './pages/LibraryPage';
import { PostPage } from './pages/PostPage';
import { ImpressumPage } from './pages/ImpressumPage';
import { DatenschutzPage } from './pages/DatenschutzPage';

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
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

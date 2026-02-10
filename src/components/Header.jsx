import { Siren, ArrowLeft, Globe, Moon, Sun } from "lucide-react";
import { META } from '../constants/config';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

export const Header = ({
  emergencyMode,
  setEmergencyMode,
  onNavigateHome,
  sections = [],
  activeSectionId,
  onSelectSection,
  searchValue = "",
  onSearchChange,
  onSearchSubmit,
  showSearch = false,
  showBack = false,
  onBack,
  backLabel = "Back",
}) => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'de' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="sticky top-0 z-50 glass-panel border-b border-white/20 dark:border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-[180px]">
          {showBack && Boolean(onBack) && (
            <button
              type="button"
              onClick={onBack}
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 px-3 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 transition hover:bg-white dark:hover:bg-slate-700"
            >
              <ArrowLeft size={14} />
              {backLabel}
            </button>
          )}
          <button
            type="button"
            onClick={onNavigateHome}
            className={`flex items-center gap-2 group ${onNavigateHome ? 'cursor-pointer' : 'cursor-default'}`}
            aria-label={onNavigateHome ? 'Go to StartGermany home' : undefined}
            title={onNavigateHome ? 'Back to StartGermany home' : undefined}
          >
            <div className="flex flex-col items-start gap-0.5">
              <div className="flex items-center gap-1">
                <span className="text-2xl font-display font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent transition-transform group-hover:scale-105">
                  Start<span className="bg-gradient-to-r from-red-600 via-yellow-500 to-slate-900 dark:to-white bg-clip-text">Germany</span>
                </span>
              </div>
              <p className="text-[9px] uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 ml-0.5">
                {t('verified')}: {META.lastUpdatedDate}
              </p>
            </div>
          </button>
        </div>

        {sections.length > 0 && (
          <nav className="flex items-center justify-center flex-1 min-w-0 hidden md:flex">
            <div className="flex items-center gap-1 overflow-x-auto hide-scrollbar p-1 rounded-full bg-slate-100/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => onSelectSection?.(section.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all ${activeSectionId === section.id
                    ? "bg-white dark:bg-slate-700 text-primary-600 dark:text-primary-400 shadow-sm"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                    }`}
                  aria-current={activeSectionId === section.id ? "page" : undefined}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </nav>
        )}

        <div className="flex items-center gap-2 flex-wrap justify-end min-w-[220px]">
          {showSearch && (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                onSearchSubmit?.();
              }}
              className="flex items-center"
            >
              <input
                type="search"
                value={searchValue}
                onChange={(event) => onSearchChange?.(event.target.value)}
                placeholder="Search..."
                className="w-32 sm:w-40 rounded-full border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/30 transition-all"
              />
            </form>
          )}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            title="Switch Language"
          >
            <Globe size={14} />
            {i18n.language === 'en' ? 'DE' : 'EN'}
          </button>

          <button
            onClick={() => setEmergencyMode(!emergencyMode)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all shadow-sm hover:shadow ${emergencyMode ? "bg-red-600 text-white animate-pulse" : "bg-white dark:bg-slate-800 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 border border-red-100 dark:border-red-900/30"}`}
          >
            <Siren size={14} />
            <span className="hidden sm:inline">{emergencyMode ? "Close" : "Emergency"}</span>
          </button>
        </div>
      </div>

      {/* Emergency Overlay */}
      {emergencyMode && (
        <div className="border-t border-red-200 bg-red-50">
          <div className="max-w-5xl mx-auto grid grid-cols-1 gap-8 px-6 py-7 md:grid-cols-3 text-slate-900">
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-xl sm:text-2xl font-semibold">Emergency contacts</h3>
              <p className="text-sm text-slate-700 font-medium leading-relaxed">
                Call the numbers below immediately in a life-threatening situation. Operators speak German and English.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="tel:112" className="rounded-xl border border-red-200 bg-white px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex min-w-[3rem] items-center justify-center rounded-full bg-red-600 px-3 py-1 text-sm font-semibold text-white">112</div>
                    <div>
                      <p className="text-base font-semibold">Ambulance & Fire</p>
                      <p className="text-xs text-slate-600">Medical emergencies or fire brigade</p>
                    </div>
                  </div>
                </a>
                <a href="tel:110" className="rounded-xl border border-red-200 bg-white px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex min-w-[3rem] items-center justify-center rounded-full bg-red-600 px-3 py-1 text-sm font-semibold text-white">110</div>
                    <div>
                      <p className="text-base font-semibold">Police</p>
                      <p className="text-xs text-slate-600">Immediate danger or crime</p>
                    </div>
                  </div>
                </a>
                <a href="tel:116117" className="rounded-xl border border-red-200 bg-white px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex min-w-[3rem] items-center justify-center rounded-full bg-red-600 px-3 py-1 text-sm font-semibold text-white">116 117</div>
                    <div>
                      <p className="text-base font-semibold">Medical On-Call Service</p>
                      <p className="text-xs text-slate-600">Non-life-threatening urgent care</p>
                    </div>
                  </div>
                </a>
                <a href="tel:116123" className="rounded-xl border border-red-200 bg-white px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex min-w-[3rem] items-center justify-center rounded-full bg-red-600 px-3 py-1 text-sm font-semibold text-white">116 123</div>
                    <div>
                      <p className="text-base font-semibold">Emotional Support Hotline</p>
                      <p className="text-xs text-slate-600">TelefonSeelsorge 24/7 in German & English</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">Lost documents?</h3>
              <div className="rounded-xl border border-red-200 bg-white p-4 space-y-3">
                <p className="text-sm text-slate-700 font-semibold">
                  Lost passport or residence permit:
                </p>
                <ul className="list-disc pl-5 text-xs space-y-2 text-slate-600">
                  <li>Contact your embassy or consulate. Most have 24/7 emergency lines.</li>
                  <li>Report the loss to the local police (Polizei) within 24 hours.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-red-200 bg-white p-4 space-y-3">
                <p className="text-sm text-slate-700 font-semibold">Lost bank or credit card:</p>
                <ul className="list-disc pl-5 text-xs space-y-2 text-slate-600">
                  <li>Call 116 116 to block German-issued cards immediately.</li>
                  <li>For international cards, use the emergency number on your bank’s app.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.header>
  );
};

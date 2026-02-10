import { META, LINKS } from '../constants/config';
import { safeOpen } from '../utils/security';
import { motion } from 'framer-motion';

export const Footer = ({ onShowPosts, onShowLibrary, onOpenEmergency, variant = "default", onBackToGuideList, onDownloadGuides }) => (
  <footer className="relative mt-10 border-t border-slate-200 dark:border-white/10 bg-white/50 dark:bg-slate-950/50 backdrop-blur-xl text-slate-600 dark:text-slate-400 overflow-hidden">
    {/* Ambient Glows */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-[100px] -left-[100px] w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px]" />
      <div className="absolute -bottom-[100px] -right-[100px] w-[300px] h-[300px] bg-rose-500/10 rounded-full blur-[100px]" />
    </div>

    <div className="relative max-w-7xl mx-auto px-6 py-16 z-10">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12">

          <div className="max-w-sm space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Germany Orientation</span>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white">StartGermany</h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Built by internationals for internationals. Trusted playbooks, verified links, and pricing notes so your first year in Germany stays predictable.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              Verified {META.lastUpdatedDate}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full lg:w-auto">
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">Navigate</h4>
              <nav className="flex flex-col gap-3 text-sm font-medium">
                <button onClick={variant === "detail" ? onBackToGuideList : onShowPosts} className="text-left text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {variant === "detail" ? "Back to Guides" : "Guides"}
                </button>
                <button onClick={onShowLibrary} className="text-left text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Resources
                </button>
                <button onClick={onOpenEmergency} className="text-left text-slate-600 dark:text-slate-400 hover:text-red-500 transition-colors">
                  Emergency
                </button>
              </nav>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">Essentials</h4>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400 font-medium">
                <li>Anmeldung</li>
                <li>Health Insurance</li>
                <li>Banking & Tax</li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">Support</h4>
              <div className="flex flex-col gap-3">
                {onDownloadGuides && (
                  <button
                    onClick={onDownloadGuides}
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors bg-white dark:bg-slate-900/50"
                  >
                    PDF Guides
                  </button>
                )}
                <a
                  href={LINKS.buyMeACoffee}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-indigo-600 text-white px-4 py-2.5 text-xs font-bold uppercase tracking-wide hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/20"
                >
                  Support Project
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-white/5 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="text-xs text-slate-500 dark:text-slate-500 font-medium">
            © 2026 StartGermany. Unofficial orientation guide.
          </p>
          <div className="flex items-center gap-6 text-xs font-bold text-slate-500 dark:text-slate-500">
            <button onClick={() => window.location.href = '/impressum'} className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Impressum
            </button>
            <button onClick={() => window.location.href = '/datenschutz'} className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Datenschutz
            </button>
            <button onClick={() => window.location.href = '/privacy-policy'} className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

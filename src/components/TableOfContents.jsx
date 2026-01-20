import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const TableOfContents = ({ sections = [], activeSectionId, onSelect }) => {
  const [isOpen, setIsOpen] = useState(() => {
    if (typeof window === "undefined") return true;
    return window.innerWidth >= 1024;
  });

  if (sections.length === 0) return null;

  const scrollToSection = (sectionId) => {
    if (typeof window === "undefined") return;
    const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const element = document.getElementById(sectionId);
    if (!element) return;
    element.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
    setIsOpen(false);
    onSelect?.(sectionId);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 sm:px-5 py-3 sm:py-4 flex items-center justify-between text-left transition-colors hover:bg-slate-50"
      >
        <div className="flex items-center gap-2">
          <div className="text-[11px] uppercase font-semibold text-slate-500 tracking-[0.25em]">
            In this guide
          </div>
        </div>
        <ChevronDown
          size={18}
          className={`text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-4 sm:px-5 py-3 sm:py-4 space-y-1.5 max-h-96 overflow-y-auto">
          {sections.map((section, i) => (
            <button
              key={i}
              onClick={() => scrollToSection(section.id)}
              className={`block w-full rounded-xl px-2 py-2 text-left text-[13px] font-medium transition-colors ${
                activeSectionId === section.id
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
              aria-current={activeSectionId === section.id ? "page" : undefined}
            >
              {section.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

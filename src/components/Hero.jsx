import { Search, Grid, List, Info } from "lucide-react";
import { META, LINKS } from '../constants/config';
import { CategoryFilter } from './CategoryFilter';

export const Hero = ({ view, setView, searchTerm, setSearchTerm, selectedStage, setSelectedStage }) => {
  if (view === "library") {
    return (
      <div className="relative pt-12 pb-10 px-6 text-center overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Resource Library
          </h2>
          <p className="text-lg text-slate-600 mb-8 font-medium">
            Curated tools, apps, and links for surviving and thriving in Germany.
          </p>

          <div className="max-w-lg mx-auto mb-8 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex items-center bg-white rounded-2xl shadow-xl">
              <Search className="ml-4 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search: 'apps', 'banking', 'health'..."
                className="w-full py-4 px-4 rounded-2xl focus:outline-none text-slate-700 font-medium placeholder:text-slate-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-center gap-2">
            <button
              onClick={() => setView("posts")}
              className="px-5 py-2.5 rounded-full text-sm font-bold transition-all bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            >
              <div className="flex items-center gap-2">
                <Grid size={16} />
                Back to Guides
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(15,23,42,0.7), rgba(15,23,42,0.8)), url('https://images.unsplash.com/photo-1524634126442-357e0eac6b14?w=1600&auto=format&fit=crop')`,
            backgroundPosition: "center",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center items-start">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight tracking-tight">
              Your honest guide to starting life in Germany
            </h1>

            <p className="text-lg sm:text-xl text-slate-100 font-medium leading-relaxed max-w-xl">
              Real talk for international students and scholars. No fluff, no jargon. Everything you need from arrival to first paycheck.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => setView("posts")}
                className="px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
              >
                Explore Guides →
              </button>
              <button
                onClick={() => setView("library")}
                className="px-8 py-4 rounded-full bg-white/20 hover:bg-white/30 text-white font-bold text-lg border border-white/40 transition-all backdrop-blur"
              >
                Browse Resources
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="text-white/60 text-xs font-semibold uppercase tracking-wide">Scroll</div>
        </div>
      </section>

      {/* Search & Filter (visible when viewing posts) */}
      {view === "posts" && (
        <div className="relative -mt-16 sm:-mt-20 z-30 px-6 pb-12">
          <div className="max-w-3xl mx-auto">
            <div className="max-w-lg mx-auto mb-6 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative flex items-center bg-white rounded-2xl shadow-xl">
                <Search className="ml-4 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="Search: 'Anmeldung', 'Banking', 'Housing'..."
                  className="w-full py-4 px-4 rounded-2xl focus:outline-none text-slate-700 font-medium placeholder:text-slate-400"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <CategoryFilter selectedStage={selectedStage} setSelectedStage={setSelectedStage} />

            <div className="bg-white/90 border border-slate-200/60 rounded-2xl p-4 text-left shadow-sm backdrop-blur-sm">
              <div className="flex items-start space-x-3">
                <div className="mt-0.5 text-slate-600 flex-shrink-0">
                  <Info size={18} />
                </div>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  {META.disclaimer}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

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
      <section className="relative min-h-[550px] sm:min-h-[650px] md:min-h-[800px] overflow-hidden">
        {/* Background image - full opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=2000&auto=format&fit=crop&q=90')`,
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />

        {/* Elegant dark overlay with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/40 to-slate-900/20" />
        
        {/* Refined accent gradients */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-center py-16 sm:py-24 md:py-32">
          <div className="max-w-3xl space-y-8 sm:space-y-10">
            <div className="space-y-4 sm:space-y-6">
              {/* Modern badge */}
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/15 border border-white/25 backdrop-blur-md w-fit hover:bg-white/20 transition-all duration-300 shadow-lg shadow-black/20">
                <span className="flex relative h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400"></span>
                </span>
                <p className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">Welcome to Germany</p>
              </div>
              
              {/* Main heading */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight drop-shadow-2xl">
                Your honest guide to starting life in Germany
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-white/95 font-medium leading-relaxed max-w-3xl drop-shadow-lg">
              Real talk for international students and scholars. No fluff, no jargon. Everything you need from arrival to first paycheck.
            </p>

            {/* Modern CTA buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-6">
              <button
                onClick={() => setView("posts")}
                className="group relative px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-white text-slate-900 font-black text-base sm:text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-110 active:scale-100 flex items-center justify-center gap-2 whitespace-nowrap overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-white to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity"></span>
                <span className="relative flex items-center gap-2">
                  Explore Guides
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </button>
              
              <button
                onClick={() => setView("library")}
                className="px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-white/20 hover:bg-white/30 text-white font-bold text-base sm:text-lg border-2 border-white/60 hover:border-white transition-all duration-300 backdrop-blur-md shadow-lg hover:shadow-xl flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Browse Resources
              </button>
            </div>
          </div>
        </div>

        {/* Modern scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-3">
          <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Scroll to explore</p>
          <div className="relative">
            <div className="w-1.5 h-8 border border-white/40 rounded-full flex items-start justify-center p-2">
              <div className="w-0.5 h-1.5 bg-white/60 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter (visible when viewing posts) */}
      {view === "posts" && (
        <div className="relative -mt-12 sm:-mt-16 z-30 px-4 sm:px-6 pb-12 sm:pb-16">
          <div className="max-w-3xl mx-auto space-y-5 sm:space-y-6">
            {/* Search */}
            <div className="max-w-md mx-auto relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
              <div className="relative flex items-center bg-white rounded-2xl shadow-2xl overflow-hidden">
                <Search className="ml-4 text-indigo-400" size={20} />
                <input
                  type="text"
                  placeholder="Search guides..."
                  className="w-full py-3 sm:py-4 px-4 rounded-2xl focus:outline-none text-slate-700 font-medium placeholder:text-slate-400 bg-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Category Filter */}
            <CategoryFilter selectedStage={selectedStage} setSelectedStage={setSelectedStage} />

            {/* Disclaimer */}
            <div className="bg-gradient-to-r from-indigo-50/80 to-blue-50/80 border border-indigo-100/60 rounded-2xl sm:rounded-3xl p-4 sm:p-5 text-left shadow-sm backdrop-blur-sm">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="mt-0.5 text-indigo-600 flex-shrink-0">
                  <Info size={20} />
                </div>
                <p className="text-sm text-slate-700 font-medium leading-relaxed">
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

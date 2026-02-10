import React from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const Hero = ({ searchTerm, setSearchTerm, selectedStage, setSelectedStage, postsSectionRef }) => {
  const { t } = useTranslation();

  const stages = [
    { id: 'First Week', label: 'First Week', color: 'bg-rose-500' },
    { id: 'Settling In', label: 'Settling In', color: 'bg-indigo-500' },
    { id: 'Long Term', label: 'Long Term', color: 'bg-emerald-500' },
  ];

  const scrollToPosts = () => {
    if (postsSectionRef.current) {
      postsSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden pt-24 pb-8 lg:pt-32 lg:pb-12">
      {/* Animated Gradient Background ("Aurora") */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-400/30 dark:bg-indigo-600/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-rose-400/30 dark:bg-rose-600/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse-slow delay-1000" />
        <div className="absolute top-[20%] right-[20%] w-[300px] h-[300px] bg-cyan-400/20 dark:bg-cyan-600/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse-slow delay-2000" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md text-slate-600 dark:text-slate-300 text-[11px] font-bold uppercase tracking-widest mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Germany, Decoded
          </span>

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-slate-900 dark:text-white mb-8 leading-[0.9]">
            Your first 100 days <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-rose-500 dark:from-indigo-400 dark:to-rose-400">made simple.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed font-medium">
            No-nonsense guides for expats. We've done the paperwork, translation,
            and research so you don't have to.
          </p>
        </motion.div>

        {/* Modern Search Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-xl relative group z-20"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500 group-hover:duration-200" />
          <div className="relative flex items-center bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-2">
            <Search className="ml-4 text-slate-400" size={22} />
            <input
              type="text"
              placeholder={t('searchPlaceholder')}
              className="w-full py-3 px-4 bg-transparent text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none font-medium text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="mr-2 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 transition-colors"
              >
                ✕
              </button>
            )}
          </div>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <button
            onClick={() => setSelectedStage(null)}
            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all border ${selectedStage === null
              ? 'bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900 dark:border-white shadow-lg'
              : 'bg-white/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-slate-300 backdrop-blur-sm'
              }`}
          >
            All Guides
          </button>
          {stages.map((stage) => (
            <button
              key={stage.id}
              onClick={() => setSelectedStage(stage.id === selectedStage ? null : stage.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all border flex items-center gap-2 ${selectedStage === stage.id
                ? 'bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900 dark:border-white shadow-lg'
                : 'bg-white/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-slate-300 backdrop-blur-sm'
                }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${stage.color}`} />
              {stage.label}
            </button>
          ))}
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          onClick={scrollToPosts}
          className="absolute bottom-4 text-slate-400 dark:text-slate-600 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
        >
          <ChevronDown size={28} className="animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
};

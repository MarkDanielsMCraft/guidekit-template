import { POSTS } from '../data/posts';

export const CategoryFilter = ({ selectedStage, setSelectedStage }) => {
  const stages = ['All', ...new Set(POSTS.map(p => p.stage))];

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
      {stages.map(stage => (
        <button
          key={stage}
          onClick={() => setSelectedStage(stage === 'All' ? null : stage)}
          className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap ${
            (stage === 'All' && !selectedStage) || (stage === selectedStage)
              ? "bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105"
              : "bg-white text-slate-700 border border-slate-200 hover:border-indigo-200 hover:bg-indigo-50/50 hover:text-indigo-700"
          }`}
        >
          {stage}
        </button>
      ))}
    </div>
  );
};

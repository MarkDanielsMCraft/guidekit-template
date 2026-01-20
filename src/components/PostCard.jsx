import { ChevronRight, Clock, Tag } from "lucide-react";

export const PostCard = ({ post, index, onOpen, progressPercent }) => (
  <button
    onClick={() => onOpen(post.slug)}
    style={{ animationDelay: `${index * 100}ms` }}
    className="fade-in-up group relative bg-white hover:bg-slate-50/80 p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-100 hover:border-indigo-100 shadow-md hover:shadow-2xl transition-all duration-500 text-left flex flex-col h-full overflow-hidden transform hover:-translate-y-2"
  >
    {/* Background accent */}
    <div
      className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${post.color} opacity-[0.06] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:opacity-[0.12] transition-opacity duration-500`}
    />

    {/* Background image with overlay */}
    {post.backgroundImage && (
      <div
        className="absolute inset-0 bg-cover bg-center rounded-3xl opacity-10 group-hover:opacity-15 transition-opacity duration-500"
        style={{ backgroundImage: `url('${post.backgroundImage}')` }}
      />
    )}

    {/* Header with icon and progress */}
    <div className="flex justify-between items-start mb-4 relative z-20">
      <div
        className={`relative p-3 sm:p-4 rounded-2xl bg-gradient-to-br ${post.color} text-white shadow-lg ${post.shadow} group-hover:scale-110 transition-transform duration-500`}
      >
        {post.icon}
      </div>

      <div className="flex items-center gap-2 flex-wrap justify-end max-w-[120px]">
        <span className="text-[11px] font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 px-2.5 py-1 rounded-full whitespace-nowrap shadow-sm">
          {progressPercent}% done
        </span>
      </div>
    </div>

    {/* Stage badge */}
    <div className="mb-4 relative z-20">
      <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-full inline-block uppercase tracking-wider">
        {post.stage}
      </span>
    </div>

    {/* Main content */}
    <div className="relative z-20 flex-1 space-y-3 sm:space-y-4">
      <div className="flex items-center gap-2">
        <Clock size={14} className="text-slate-400 flex-shrink-0" />
        <span className="text-xs font-semibold text-slate-500">{post.readTime}</span>
      </div>
      
      <div>
        <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-2 group-hover:text-indigo-600 leading-snug transition-colors line-clamp-3">
          {post.title}
        </h3>
        <p className="text-sm text-slate-600 font-medium leading-relaxed line-clamp-2">
          {post.summary}
        </p>
      </div>

      {/* Tags preview */}
      {post.tags && post.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-2">
          {post.tags.slice(0, 2).map((tag, i) => (
            <span key={i} className="text-[9px] font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded-full flex items-center gap-1 uppercase tracking-wide">
              <Tag size={8} className="opacity-60" />
              {tag}
            </span>
          ))}
          {post.tags.length > 2 && (
            <span className="text-[9px] font-bold text-slate-400 px-2 py-1">
              +{post.tags.length - 2}
            </span>
          )}
        </div>
      )}
    </div>

    {/* Progress bar + CTA */}
    <div className="mt-4 sm:mt-5 pt-4 sm:pt-5 border-t border-slate-100 group-hover:border-indigo-100 transition-colors">
      <div className="flex items-center justify-between gap-2">
        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
          <div className={`h-full bg-gradient-to-r ${post.color} transition-all duration-500`} style={{ width: `${progressPercent}%` }} />
        </div>
        <div className="bg-slate-50 group-hover:bg-indigo-50 text-slate-400 group-hover:text-indigo-600 p-1.5 rounded-lg transition-all">
          <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  </button>
);

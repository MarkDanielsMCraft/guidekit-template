import { ChevronRight, Clock, Tag } from "lucide-react";

export const PostCard = ({ post, index, onOpen, progressPercent }) => (
  <button
    onClick={() => onOpen(post.slug)}
    style={{ animationDelay: `${index * 100}ms` }}
    className="fade-in-up group relative w-full overflow-hidden rounded-3xl border border-slate-200/60 bg-white/70 backdrop-blur-xl text-left shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
  >
    {/* Ambient gradient */}
    <div
      className={`absolute inset-0 bg-gradient-to-br ${post.color} opacity-[0.08] group-hover:opacity-[0.14] transition-opacity duration-500`}
    />

    {/* Background image subtle overlay */}
    {post.backgroundImage && (
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15 group-hover:opacity-20 transition-opacity duration-500"
        style={{ backgroundImage: `url('${post.backgroundImage}')` }}
      />
    )}

    {/* Glass veil for readability */}
    <div className="absolute inset-0 bg-white/85 group-hover:bg-white/80 transition-colors duration-500" />

    <div className="relative z-10 p-6 sm:p-8 lg:p-10 flex flex-col gap-6 sm:gap-8">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div className="flex items-start gap-5">
          <div
            className={`relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${post.color} text-white shadow-2xl ${post.shadow} group-hover:shadow-[0_25px_45px_-20px_rgba(79,70,229,0.55)] group-hover:scale-110 transition-transform duration-500`}
          >
            {post.icon}
          </div>
          <div className="space-y-4 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-900 bg-white/70 border border-white/60 px-3 py-1.5 rounded-full shadow-sm backdrop-blur">
                {post.stage}
              </span>
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wide bg-white/50 border border-white/70 px-3 py-1.5 rounded-full backdrop-blur">
                <Clock size={14} className="text-indigo-500" />
                {post.readTime}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 leading-tight tracking-tight group-hover:text-indigo-700 transition-colors">
              {post.title}
            </h3>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium max-w-3xl">
              {post.summary}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end gap-3">
          <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50/90 border border-emerald-100 px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap">
            {progressPercent}% completed
          </span>
        </div>
      </div>

      {post.tags && post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-2">
          {post.tags.slice(0, 4).map((tag, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-500 bg-white/70 border border-white/60 px-3 py-1.5 rounded-full backdrop-blur"
            >
              <Tag size={10} className="text-indigo-400" />
              {tag}
            </span>
          ))}
          {post.tags.length > 4 && (
            <span className="text-[11px] font-semibold text-slate-400 px-2 py-1">
              +{post.tags.length - 4}
            </span>
          )}
        </div>
      )}

      <div className="pt-4 border-t border-white/60 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="h-2 w-full sm:w-48 bg-white/70 rounded-full overflow-hidden shadow-inner">
            <div
              className={`h-full bg-gradient-to-r ${post.color} transition-all duration-500`}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 whitespace-nowrap">
            Progress tracker
          </span>
        </div>

        <div className="flex items-center gap-3 text-indigo-600 font-semibold text-sm">
          <span>Open full guide</span>
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-600 group-hover:bg-indigo-500/20 transition-colors">
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  </button>
);

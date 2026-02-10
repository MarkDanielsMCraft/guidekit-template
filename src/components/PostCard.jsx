import React from "react";
import { ChevronRight, Clock, Tag, CheckCircle2 } from "lucide-react";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SmartImage } from "./SmartImage";
import { SpotlightCard } from "./SpotlightCard";
import { STAGE_STYLES } from "../constants/ui";
import { motion } from 'framer-motion';

export const PostCard = ({ post, progressPercent, index = 0 }) => {
  const { t } = useTranslation();
  const cardImage = post.cardImage || post.backgroundImage;
  const stageStyle = STAGE_STYLES[post.stage] || STAGE_STYLES.DEFAULT;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="h-full"
    >
      <Link to={`/guide/${post.slug}`} className="block h-full group">
        <SpotlightCard className="h-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border-white/40 dark:border-white/10 hover:border-primary-500/30 dark:hover:border-primary-400/30 transition-colors shadow-sm hover:shadow-xl hover:shadow-primary-500/5">
          <div className="flex flex-col h-full z-10 w-full">
            <div className="relative h-56 w-full overflow-hidden">
              <SmartImage
                src={cardImage}
                alt={`${post.title} guide cover`}
                fallbackIcon={post.icon}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                width={900}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80" />

              <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                <span className={`inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/20 backdrop-blur-md px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-sm`}>
                  {post.stage}
                </span>
                {progressPercent === 100 && (
                  <div className="bg-emerald-500 text-white p-1.5 rounded-full shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 size={16} strokeWidth={3} />
                  </div>
                )}
              </div>

              <div className="absolute bottom-4 left-6 right-6">
                <h3 className="font-display text-2xl font-bold leading-tight text-white drop-shadow-md mb-1 group-hover:text-primary-200 transition-colors">
                  {post.title}
                </h3>
              </div>
            </div>

            <div className="relative flex flex-col gap-4 p-6 flex-1 bg-transparent">
              <p className="text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-2">
                {post.summary}
              </p>

              <div className="flex flex-wrap gap-2">
                {post.tags && post.tags.slice(0, 3).map((tag, i) => (
                  <span key={i} className="inline-flex items-center gap-1 rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-5 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <Clock size={14} />
                    {post.readTime} {t('minRead')}
                  </span>
                </div>

                <span className="flex items-center gap-1 text-sm font-bold text-primary-600 dark:text-primary-400 group-hover:gap-2 transition-all">
                  Read Guide <ChevronRight size={16} strokeWidth={3} />
                </span>
              </div>

              {progressPercent > 0 && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-100 dark:bg-slate-800">
                  <div
                    className="h-full bg-primary-500 transition-all duration-1000 ease-out"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              )}
            </div>
          </div>
        </SpotlightCard>
      </Link>
    </motion.div>
  );
};

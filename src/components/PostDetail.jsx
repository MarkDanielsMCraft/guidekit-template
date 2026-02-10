import React, { useMemo, useState, useEffect, useRef } from "react";
import {
  ArrowLeft,
  ExternalLink,
  AlertTriangle,
  CheckCircle,
  FileText,
  Youtube,
  Download,
  PlayCircle,
  RotateCcw,
  Share2,
  Menu
} from "lucide-react";
import { Header } from './Header';
import { SourcePill } from './SourcePill';
import { TableOfContents } from './TableOfContents';
import { PostNavigation } from './PostNavigation';
import { renderRichText } from '../utils/textRenderer';
import { safeOpen } from '../utils/security';
import { POSTS } from "../data/posts";
import { STAGE_STYLES } from "../constants/ui";
import { SmartImage } from "./SmartImage";
import { ScrollProgress } from "./ScrollProgress";
import { motion, useScroll, useTransform } from "framer-motion";

const stripText = (value) =>
  String(value || "")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const RelatedThumbnail = ({ post }) => (
  <div className="h-16 w-16 rounded-lg bg-slate-100 overflow-hidden shrink-0 border border-slate-200">
    <SmartImage
      src={post.backgroundImage}
      alt={`${post.title} thumbnail`}
      fallbackIcon={post.icon}
      width={160}
      className="h-full w-full"
    />
  </div>
);

export const PostDetail = ({
  post,
  onBack,
  progress,
  onToggle,
  onReset,
  emergencyMode,
  setEmergencyMode,
  onNavigateHome,
  onOpenPost,
}) => {
  const [copied, setCopied] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState(null);
  const [pageSearch, setPageSearch] = useState("");
  const stageStyle = STAGE_STYLES[post.stage] || STAGE_STYLES.DEFAULT;
  const { scrollY } = useScroll();
  const yRange = useTransform(scrollY, [0, 500], [0, 250]);
  const opacityRange = useTransform(scrollY, [0, 400], [1, 0]);

  const sections = useMemo(() => {
    const result = [];
    const slugify = (text) =>
      String(text)
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

    let current = null;
    (post.content || []).forEach((block, index) => {
      if (block.type === "h2") {
        if (current) result.push(current);
        current = {
          id: `section-${index}-${slugify(block.text)}`,
          title: block.text,
          intro: null,
          blocks: [],
        };
        return;
      }

      if (!current) {
        current = {
          id: "section-overview",
          title: "Overview",
          intro: null,
          blocks: [],
        };
      }

      if (block.type === "p" && !current.intro) {
        current.intro = block.text;
        return;
      }

      current.blocks.push(block);
    });

    if (current) result.push(current);

    return result.map((section) => {
      if (section.intro || section.blocks.length === 0) return section;
      const firstParagraphIndex = section.blocks.findIndex((b) => b.type === "p");
      if (firstParagraphIndex === -1) return section;
      const [introBlock] = section.blocks.splice(firstParagraphIndex, 1);
      return { ...section, intro: introBlock.text };
    });
  }, [post.content]);

  const relatedPosts = useMemo(() => {
    const sameStage = POSTS.filter((p) => p.slug !== post.slug && p.stage === post.stage);
    const filler = POSTS.filter((p) => p.slug !== post.slug && p.stage !== post.stage);
    return [...sameStage, ...filler].slice(0, 3);
  }, [post]);

  useEffect(() => {
    if (!sections.length || typeof window === "undefined") return undefined;

    const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          const targetId = visible[0].target.getAttribute("data-section-id");
          if (targetId) setActiveSectionId(targetId);
        }
      },
      {
        rootMargin: "-20% 0px -50% 0px",
        threshold: reducedMotion ? 0.1 : [0.1, 0.25, 0.5],
      }
    );

    const sectionElements = document.querySelectorAll("[data-section-id]");
    sectionElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (sectionId) => {
    if (typeof window === "undefined") return;
    const element = document.getElementById(sectionId);
    if (!element) return;
    const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    // Offset for sticky header + spacing
    const y = element.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: y, behavior: reducedMotion ? "auto" : "smooth" });
  };

  const handlePageSearch = () => {
    const query = pageSearch.trim().toLowerCase();
    if (!query) return;
    const match = sections.find((section) => {
      const text = [
        section.title,
        section.intro,
        ...(section.blocks || []).flatMap((block) => {
          if (block.type === "p") return [block.text];
          if (block.type === "ul") return block.items || [];
          return [];
        }),
      ]
        .map(stripText)
        .join(" ")
        .toLowerCase();
      return text.includes(query);
    });
    if (match) scrollToSection(match.id);
  };

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      if (navigator.share) {
        await navigator.share({ title: post.title, text: post.summary, url });
        return;
      }
      await navigator.clipboard?.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950" id={`post-${post.slug}`}>
      <ScrollProgress />
      <Header
        emergencyMode={emergencyMode}
        setEmergencyMode={setEmergencyMode}
        onNavigateHome={onNavigateHome}
        showBack
        onBack={onBack}
        sections={sections}
        activeSectionId={activeSectionId}
        onSelectSection={scrollToSection}
        showSearch
        searchValue={pageSearch}
        onSearchChange={setPageSearch}
        onSearchSubmit={handlePageSearch}
      />

      {/* Parallax Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] overflow-hidden -mt-[73px]">
        <motion.div
          style={{ y: yRange, opacity: opacityRange }}
          className="absolute inset-0 w-full h-full"
        >
          <SmartImage
            src={post.backgroundImage}
            alt={`${post.title} header`}
            fallbackIcon={post.icon}
            width={2000}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-50 dark:to-slate-950" />
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center z-10 p-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl text-center space-y-6 pt-20"
          >
            <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg`}>
                {post.stage}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
                {post.readTime} min read
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white leading-tight drop-shadow-2xl">
              {post.title}
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
              {post.subtitle || post.summary}
            </p>
          </motion.div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 -mt-32 relative z-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_minmax(0,1fr)] gap-8 xl:gap-12 items-start">

          {/* Sticky Sidebar (Desktop) */}
          <aside className="hidden lg:block sticky top-24 space-y-8">
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/20 dark:border-white/5 rounded-2xl p-6 shadow-xl shadow-slate-900/5">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-6">On this page</h3>
              <nav className="space-y-1">
                {sections.map(section => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 border-l-2 ${activeSectionId === section.id
                        ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 border-primary-500 pl-3'
                        : 'text-slate-600 dark:text-slate-400 border-transparent hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200'
                      }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>

            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/20 dark:border-white/5 rounded-2xl p-6 shadow-xl shadow-slate-900/5">
              <div className="flex items-center gap-2 mb-4 text-emerald-600 dark:text-emerald-400">
                <CheckCircle size={20} />
                <h3 className="text-xs font-bold uppercase tracking-widest">Progress</h3>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mb-2">
                <div
                  className="bg-emerald-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${Object.keys(progress).filter(k => k.startsWith(post.slug)).length / post.steps.length * 100}%` }}
                />
              </div>
              <p className="text-xs text-slate-500 font-medium">
                {Math.round(Object.keys(progress).filter(k => k.startsWith(post.slug)).length / post.steps.length * 100)}% completed
              </p>
            </div>

            <div className="space-y-2">
              <button
                onClick={handleShare}
                className="w-full flex items-center justify-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition shadow-sm"
              >
                <Share2 size={16} />
                {copied ? "Link Copied!" : "Share Guide"}
              </button>
              <button
                onClick={onReset}
                className="w-full flex items-center justify-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition shadow-sm"
              >
                <RotateCcw size={16} />
                Reset Progress
              </button>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="space-y-8 min-w-0">
            {post.vibeCheck && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-900/5 rounded-3xl p-6 sm:p-8"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
                    <AlertTriangle size={16} />
                  </span>
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg">Vibe Check</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed font-medium">{post.vibeCheck}</p>
              </motion.div>
            )}

            {/* Dynamic Sections */}
            {sections.map((section, idx) => (
              <section
                key={section.id}
                id={section.id}
                data-section-id={section.id}
                className="group scroll-mt-28"
              >
                <div className="mb-6">
                  <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-bold opacity-50 group-hover:opacity-100 transition-opacity">
                      {idx + 1}
                    </span>
                    {section.title}
                  </h2>
                  {section.intro && (
                    <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed border-l-4 border-indigo-500/20 pl-4 py-1">
                      {renderRichText(section.intro, `intro-${section.id}`)}
                    </div>
                  )}
                </div>

                <div className="space-y-6">
                  {section.blocks.map((block, i) => (
                    <div key={i} className="text-slate-700 dark:text-slate-300 text-[17px] leading-7">
                      {block.type === 'p' && renderRichText(block.text, `p-${i}`)}
                      {block.type === 'ul' && (
                        <ul className="space-y-3 my-4">
                          {block.items.map((item, j) => (
                            <li key={j} className="flex items-start gap-3">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                              <span>{renderRichText(item, `li-${i}-${j}`)}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            ))}

            {/* Checklist */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-xl shadow-slate-900/5 p-6 sm:p-8 space-y-8">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-6">
                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-2">Key Steps Checklist</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Follow these steps in order to complete this milestone.</p>
              </div>

              <div className="space-y-4">
                {post.steps.map((step, idx) => {
                  const key = `${post.slug}-${idx}`;
                  const isDone = Boolean(progress[key]);
                  return (
                    <div
                      key={key}
                      className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${isDone ? 'bg-emerald-50/50 dark:bg-emerald-900/10 border-emerald-200 dark:border-emerald-800/30' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700'}`}
                    >
                      <div className="p-5 flex gap-4">
                        <button
                          onClick={() => onToggle(post.slug, idx)}
                          className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${isDone ? 'bg-emerald-500 border-emerald-500 text-white scale-110' : 'border-slate-300 text-transparent hover:border-indigo-500'}`}
                        >
                          <CheckCircle size={16} strokeWidth={3} />
                        </button>
                        <div className="flex-1 space-y-2">
                          <div className="flex justify-between items-start">
                            <h4 className={`text-lg font-bold transition-all ${isDone ? 'text-emerald-900 dark:text-emerald-400 line-through decoration-emerald-500/50' : 'text-slate-900 dark:text-white'}`}>
                              {step.title}
                            </h4>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Step {idx + 1}</span>
                          </div>
                          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{step.text}</p>

                          {!isDone && (
                            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wide mt-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                              Action Required
                            </div>
                          )}
                        </div>
                      </div>
                      {isDone && <div className="absolute inset-0 bg-emerald-500/5 pointer-events-none" />}
                    </div>
                  );
                })}
              </div>
            </div>

            <PostNavigation currentPost={post} onOpenPost={onOpenPost} />
          </div>
        </div>
      </main>
    </div>
  );
};


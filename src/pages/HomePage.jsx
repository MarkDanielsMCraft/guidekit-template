import React, { useState, useMemo, useRef } from 'react';
import { PageTransition } from '../components/PageTransition';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { PostGrid } from '../components/PostGrid';
import { Footer } from '../components/Footer';
import { ORDERED_POSTS } from '../data/posts';
import { META } from '../constants/config';
import { pct } from '../utils/helpers';
import { downloadAllGuidesPdf } from '../utils/pdfExporter';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export const HomePage = ({ progress, emergencyMode, setEmergencyMode }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedStage, setSelectedStage] = useState(null);
    const postsSectionRef = useRef(null);
    const navigate = useNavigate();

    const handleDownloadGuides = () => {
        downloadAllGuidesPdf(ORDERED_POSTS);
    };

    const filteredPosts = useMemo(() => {
        let posts = ORDERED_POSTS;

        if (selectedStage) {
            posts = posts.filter((p) => p.stage === selectedStage);
        }

        const q = searchTerm.trim().toLowerCase();
        if (!q) return posts;

        return posts.filter((p) => {
            const inTitle = (p.title || "").toLowerCase().includes(q);
            const inSubtitle = (p.subtitle || "").toLowerCase().includes(q);
            const inSummary = (p.summary || "").toLowerCase().includes(q);
            const inVibeCheck = (p.vibeCheck || "").toLowerCase().includes(q);
            const inGoldenRule = (p.goldenRule || "").toLowerCase().includes(q);
            const inSteps = (p.steps || []).some(
                (s) =>
                    (s.title || "").toLowerCase().includes(q) ||
                    (s.text || "").toLowerCase().includes(q)
            );
            const inContent = (p.content || []).some((block) => {
                if (block?.type === "ul") {
                    return (block.items || []).some((item) => (item || "").toLowerCase().includes(q));
                }
                return (block?.text || "").toLowerCase().includes(q);
            });
            const inReadMore = (p.readMore || []).some((item) => (item.title || "").toLowerCase().includes(q));
            const inTags = (p.tags || []).some((t) => String(t).toLowerCase().includes(q));

            return (
                inTitle || inSubtitle || inSummary || inVibeCheck ||
                inGoldenRule || inSteps || inContent || inReadMore || inTags
            );
        });
    }, [searchTerm, selectedStage]);

    const postProgress = (post) => {
        const total = post.steps.length;
        const done = post.steps.reduce(
            (acc, _, i) => acc + (progress[`${post.slug}-${i}`] ? 1 : 0),
            0
        );
        return pct(done, total);
    };

    return (
        <PageTransition>
            <Helmet>
                <title>StartGermany - Your Guide to Life in Germany</title>
                <meta name="description" content="Realistic, no-nonsense guides for your first 100 days in Germany." />
                <meta property="og:title" content="StartGermany - Your Guide to Life in Germany" />
                <meta property="og:description" content="Realistic, no-nonsense guides for your first 100 days in Germany." />
                <meta property="og:image" content="/og-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>

            {/* Background Texture */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary-500 opacity-20 blur-[100px]" />
                <div className="absolute right-0 bottom-0 -z-10 h-[310px] w-[310px] rounded-full bg-purple-500 opacity-20 blur-[100px]" />
            </div>

            <div className="relative z-10">
                <Header
                    emergencyMode={emergencyMode}
                    setEmergencyMode={setEmergencyMode}
                    onNavigateHome={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        setSearchTerm("");
                        setSelectedStage(null);
                    }}
                />
                <Hero
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    selectedStage={selectedStage}
                    setSelectedStage={setSelectedStage}
                    postsSectionRef={postsSectionRef}
                />

                <main ref={postsSectionRef} className="max-w-6xl mx-auto px-6 py-4 pb-12">
                    <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-slate-900 dark:text-white">Guides that keep you moving</h2>
                            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Hand verified walkthroughs for every milestone in your first year.</p>
                        </div>
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                            <span className="h-2 w-2 rounded-full bg-primary-500 animate-pulse" />
                            {filteredPosts.length} guides available
                        </span>
                    </div>

                    <PostGrid
                        posts={filteredPosts}
                        searchTerm={searchTerm}
                        getProgress={postProgress}
                    />
                </main>

                <Footer
                    variant="default"
                    onShowLibrary={() => navigate('/library')}
                    onOpenEmergency={() => setEmergencyMode(true)}
                    onDownloadGuides={handleDownloadGuides}
                />
            </div>
        </PageTransition>
    );
};

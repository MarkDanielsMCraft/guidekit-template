import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Users, Target, Heart, Shield } from 'lucide-react';

export const AboutPage = ({ emergencyMode, setEmergencyMode }) => {
    const navigate = useNavigate();

    return (
        <PageTransition>
            <Helmet>
                <title>About - GuideKit</title>
                <meta name="description" content="About the GuideKit template and how to customize it." />
            </Helmet>

            <Header
                emergencyMode={emergencyMode}
                setEmergencyMode={setEmergencyMode}
                onNavigateHome={() => navigate('/')}
                showBack={true}
                onBack={() => navigate('/')}
                backLabel="Back to guides"
            />

            <main className="max-w-4xl mx-auto px-6 py-12 pb-24">
                <div className="glass-panel rounded-2xl p-8 md:p-12 shadow-2xl">
                    <h1 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-8">About GuideKit</h1>

                    <div className="prose prose-slate dark:prose-invert max-w-none">
                        <section className="mb-12">
                            <h2 className="text-2xl font-semibold mb-4">Purpose</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                                GuideKit is a premium, content-first template for publishing step-by-step guides, checklists, and curated resources.
                                Replace every placeholder with your verified content before going live.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-semibold mb-6">What You Get</h2>
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                                    <Target className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-3" />
                                    <h3 className="text-lg font-semibold mb-2">Structured Guides</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        A content schema built for sections, steps, and progress tracking.
                                    </p>
                                </div>

                                <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                                    <Users className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-3" />
                                    <h3 className="text-lg font-semibold mb-2">Audience-Ready UX</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        Search, filters, and polished layouts tuned for real readers.
                                    </p>
                                </div>

                                <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                                    <Heart className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-3" />
                                    <h3 className="text-lg font-semibold mb-2">Resource Library</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        A curated library layout for trusted links and tools.
                                    </p>
                                </div>

                                <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                                    <Shield className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-3" />
                                    <h3 className="text-lg font-semibold mb-2">Production Ready</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        SEO tags, legal pages, and polished transitions included.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Customize Next</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                Replace guide content in <strong>src/data/posts</strong> and resources in <strong>src/data/resources.js</strong>.
                                Update branding, legal copy, and metadata before publishing.
                            </p>
                        </section>

                        <section className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                            <p className="text-sm text-blue-900 dark:text-blue-200">
                                <strong>Important:</strong> This template ships with placeholders only. Verify all data and legal text
                                with your own sources and advisors.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer
                onShowPosts={() => navigate('/')}
                onShowLibrary={() => navigate('/library')}
                onOpenEmergency={() => setEmergencyMode(true)}
            />
        </PageTransition>
    );
};

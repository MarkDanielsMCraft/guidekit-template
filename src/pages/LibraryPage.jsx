import React, { useState } from 'react';
import { PageTransition } from '../components/PageTransition';
import { Header } from '../components/Header';
import { Library } from '../components/Library';
import { Footer } from '../components/Footer';
import { RESOURCES } from '../data/resources';
import { Search, Grid } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { downloadAllGuidesPdf } from '../utils/pdfExporter';
import { ORDERED_POSTS } from '../data/posts';

export const LibraryPage = ({ emergencyMode, setEmergencyMode }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleDownloadGuides = () => {
        downloadAllGuidesPdf(ORDERED_POSTS);
    };

    return (
        <PageTransition>
            <Header
                emergencyMode={emergencyMode}
                setEmergencyMode={setEmergencyMode}
                onNavigateHome={() => navigate('/')}
                showBack={true}
                onBack={() => navigate('/')}
                backLabel="Back to guides"
            />

            {/* Library Hero Section */}
            <div className="relative pt-12 pb-10 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-[40px] md:text-[44px] font-display font-semibold text-slate-900 dark:text-white mb-4 tracking-tight">
                        Resource Library
                    </h2>
                    <p className="text-[18px] text-slate-600 dark:text-slate-400 mb-8 font-medium">
                        Curated tools, apps, and links for your first year in Germany.
                    </p>

                    <div className="max-w-lg mx-auto mb-8">
                        <div className="relative flex items-center rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm">
                            <Search className="ml-4 text-slate-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search: apps, banking, health"
                                className="w-full py-4 px-4 rounded-2xl focus:outline-none text-slate-700 dark:text-slate-200 font-medium placeholder:text-slate-400 bg-transparent"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex justify-center gap-2">
                        <button
                            onClick={() => navigate('/')}
                            className="px-5 py-2.5 rounded-full text-sm font-semibold transition-colors bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
                        >
                            <div className="flex items-center gap-2">
                                <Grid size={16} />
                                Back to Guides
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <main className="max-w-6xl mx-auto px-6 py-8 pb-12">
                <Library
                    resources={RESOURCES}
                    searchTerm={searchTerm}
                    onBack={() => navigate('/')}
                />
            </main>

            <Footer
                onShowPosts={() => navigate('/')}
                onShowLibrary={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                onOpenEmergency={() => setEmergencyMode(true)}
                onDownloadGuides={handleDownloadGuides}
            />
        </PageTransition>
    );
};

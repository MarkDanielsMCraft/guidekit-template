import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const PrivacyPolicyPage = ({ emergencyMode, setEmergencyMode }) => {
    const navigate = useNavigate();

    return (
        <PageTransition>
            <Helmet>
                <title>Privacy Policy - GuideKit</title>
                <meta name="description" content="Privacy policy template for GuideKit." />
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
                    <h1 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-8">Privacy Policy</h1>

                    <div className="prose prose-slate dark:prose-invert max-w-none">
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">
                            <strong>Last Updated:</strong> February 15, 2026
                        </p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                This page is a placeholder privacy policy. Replace it with the policy required for your jurisdiction,
                                services, analytics, and advertising tools.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">What to Cover</h2>
                            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4">
                                <li>Analytics providers and tracking technologies</li>
                                <li>Cookies and consent requirements</li>
                                <li>Data retention and user rights</li>
                                <li>Contact details for privacy requests</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Customization Notes</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                If you enable ads, email collection, or user accounts, you must document them here and in your cookie banner.
                            </p>
                        </section>

                        <section className="mb-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                            <p className="text-sm text-blue-900 dark:text-blue-200">
                                <strong>Note:</strong> This template does not replace legal advice. Consult a qualified professional before publishing.
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

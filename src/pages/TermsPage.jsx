import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const TermsPage = ({ emergencyMode, setEmergencyMode }) => {
    const navigate = useNavigate();

    return (
        <PageTransition>
            <Helmet>
                <title>Terms & Conditions - GuideKit</title>
                <meta name="description" content="Terms and conditions template for GuideKit." />
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
                    <h1 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-8">Terms & Conditions</h1>

                    <div className="prose prose-slate dark:prose-invert max-none">
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">
                            <strong>Last Updated:</strong> February 15, 2026
                        </p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Template Notice</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                These terms are placeholders. Replace them with terms appropriate for your product, audience, and jurisdiction.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Suggested Sections</h2>
                            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4">
                                <li>Acceptable use and prohibited behavior</li>
                                <li>Intellectual property ownership</li>
                                <li>Disclaimer of warranties and limitation of liability</li>
                                <li>Third-party links and services</li>
                                <li>Governing law and dispute resolution</li>
                            </ul>
                        </section>

                        <section className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                            <p className="text-sm text-blue-900 dark:text-blue-200">
                                <strong>Note:</strong> Consult legal counsel before publishing your terms.
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

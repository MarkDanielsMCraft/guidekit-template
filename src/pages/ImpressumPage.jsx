import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const ImpressumPage = ({ emergencyMode, setEmergencyMode }) => {
    const navigate = useNavigate();

    return (
        <PageTransition>
            <Helmet>
                <title>Impressum - GuideKit</title>
                <meta name="description" content="Legal notice template for GuideKit." />
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
                <h1 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-8">Impressum</h1>

                <div className="prose prose-slate dark:prose-invert max-w-none">
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Legal Notice</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            Replace this section with your legal notice, company name, and contact details required in your jurisdiction.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            Provide the official email address and mailing address for user inquiries.
                        </p>
                    </section>

                    <section className="mb-8 p-6 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
                        <p className="text-sm text-amber-900 dark:text-amber-200">
                            <strong>Important:</strong> Legal requirements vary by country. Consult counsel before publishing.
                        </p>
                    </section>
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

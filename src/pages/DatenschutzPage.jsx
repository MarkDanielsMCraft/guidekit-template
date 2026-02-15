import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const DatenschutzPage = ({ emergencyMode, setEmergencyMode }) => {
    const navigate = useNavigate();

    return (
        <PageTransition>
            <Helmet>
                <title>Datenschutz - GuideKit</title>
                <meta name="description" content="German privacy policy placeholder for GuideKit." />
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
                <h1 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-8">Datenschutzerklärung</h1>

                <div className="prose prose-slate dark:prose-invert max-w-none">
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Template Hinweis</h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                            Diese Seite ist ein Platzhalter. Ersetze sie durch deine eigene DSGVO-konforme Datenschutzerklaerung.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Was du ergaenzen solltest</h2>
                        <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400">
                            <li>Verantwortliche Stelle und Kontakt</li>
                            <li>Tracking-Tools und Einwilligung</li>
                            <li>Speicherdauer und Rechte der Nutzer</li>
                            <li>Auftragsverarbeiter und Drittanbieter</li>
                        </ul>
                    </section>

                    <section className="mb-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                        <p className="text-sm text-blue-900 dark:text-blue-200">
                            <strong>Hinweis:</strong> Bitte konsultiere eine Rechtsberatung, bevor du diese Seite veroeffentlichst.
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

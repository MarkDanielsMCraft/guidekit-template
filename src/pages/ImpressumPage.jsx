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
                <title>Impressum - StartGermany</title>
                <meta name="description" content="Legal notice and contact information for StartGermany" />
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
                        <h2 className="text-2xl font-semibold mb-4">Information pursuant to § 5 TMG</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            <strong>StartGermany</strong><br />
                            An unofficial, community-driven orientation guide<br />
                            For international students and trainees in Germany
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            This is an educational resource project.<br />
                            For official immigration and visa matters, please contact:<br />
                            <a href="https://www.make-it-in-germany.com" className="text-primary-600 dark:text-primary-400 hover:underline">
                                Make it in Germany (Official Portal)
                            </a>
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
                        <h3 className="text-xl font-semibold mb-2">Liability for content</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                            The contents of our pages have been created with the utmost care. However, we cannot guarantee the
                            contents' accuracy, completeness, or topicality. According to statutory provisions, we are furthermore
                            responsible for our own content on these web pages. In this matter, please note that we are not obliged
                            to monitor the transmitted or saved information of third parties, or investigate circumstances pointing
                            to illegal activity.
                        </p>

                        <h3 className="text-xl font-semibold mb-2">Liability for links</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                            Our offer contains links to external third-party websites. We have no influence on the contents of those
                            websites, therefore we cannot guarantee for those contents. Providers or administrators of linked websites
                            are always responsible for their own contents.
                        </p>

                        <h3 className="text-xl font-semibold mb-2">Copyright</h3>
                        <p className="text-slate-600 dark:text-slate-400">
                            The content and works published on this website are governed by the copyright laws of Germany. Any
                            duplication, processing, distribution, or any form of commercialization beyond the scope of copyright
                            law shall require the prior written consent of the author or creator.
                        </p>
                    </section>

                    <section className="mb-8 p-6 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
                        <p className="text-sm text-amber-900 dark:text-amber-200">
                            <strong>Important Notice:</strong> This website provides general orientation information and does not
                            constitute legal advice. For official information regarding visas, residence permits, and legal matters,
                            please consult official government sources or qualified legal professionals.
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

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
                <title>About Us - StartGermany</title>
                <meta name="description" content="Learn about StartGermany - your trusted guide for navigating life in Germany as an international student or expat" />
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
                <h1 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-8">About StartGermany</h1>

                <div className="prose prose-slate dark:prose-invert max-w-none">
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                            StartGermany exists to make your transition to life in Germany as smooth and stress-free as possible.
                            We provide realistic, no-nonsense guidance for international students, healthcare professionals, and
                            expats navigating the complexities of German bureaucracy, culture, and daily life.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-6">What We Offer</h2>
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                                <Target className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-3" />
                                <h3 className="text-lg font-semibold mb-2">Practical Guides</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    18+ comprehensive, step-by-step guides covering everything from Anmeldung to health insurance,
                                    housing, banking, and cultural integration.
                                </p>
                            </div>

                            <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                                <Users className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-3" />
                                <h3 className="text-lg font-semibold mb-2">Real Experience</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    Our content is created by internationals who have lived through the same challenges you're facing.
                                    We share what actually works, not just theory.
                                </p>
                            </div>

                            <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                                <Heart className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-3" />
                                <h3 className="text-lg font-semibold mb-2">Always Free</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    All our guides are completely free to access. We believe essential information for settling
                                    in a new country should be accessible to everyone.
                                </p>
                            </div>

                            <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                                <Shield className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-3" />
                                <h3 className="text-lg font-semibold mb-2">Regularly Updated</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    German regulations change frequently. We verify and update our content regularly to ensure
                                    you have the most current information.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">Who We Serve</h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                            StartGermany is designed for:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4 space-y-2">
                            <li><strong>International Students</strong> - Starting your studies at a German university</li>
                            <li><strong>Healthcare Professionals</strong> - Nurses and doctors pursuing Ausbildung or Approbation</li>
                            <li><strong>Expats & Professionals</strong> - Moving to Germany for work opportunities</li>
                            <li><strong>EU/EEA Citizens</strong> - Relocating within Europe</li>
                            <li><strong>Anyone</strong> - Navigating German bureaucracy and culture for the first time</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                            We believe in:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4 space-y-2">
                            <li><strong>Honesty</strong> - We tell you the reality, including the frustrating parts</li>
                            <li><strong>Practicality</strong> - Every guide includes actionable steps you can follow immediately</li>
                            <li><strong>Clarity</strong> - We break down complex bureaucratic processes into simple language</li>
                            <li><strong>Empathy</strong> - We remember what it's like to be overwhelmed and confused</li>
                            <li><strong>Accuracy</strong> - All information is verified and regularly updated</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">Why Trust Us?</h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                            Our team consists of internationals who have successfully navigated the German system ourselves.
                            We've experienced the same challenges, made the same mistakes, and learned the hard-won lessons
                            that we now share with you.
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                            Every guide is:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4 space-y-2">
                            <li>Based on real, firsthand experience</li>
                            <li>Verified with current regulations and requirements</li>
                            <li>Updated regularly (last verification: February 2026)</li>
                            <li>Reviewed for accuracy and completeness</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Accessibility</h3>
                                <p className="text-slate-600 dark:text-slate-400">
                                    Essential information should be free and accessible to everyone, regardless of background or budget.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Transparency</h3>
                                <p className="text-slate-600 dark:text-slate-400">
                                    We're upfront about what we know, what we don't know, and when you should consult official sources.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Community</h3>
                                <p className="text-slate-600 dark:text-slate-400">
                                    We're building a supportive community of internationals helping each other succeed in Germany.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                            Have questions, suggestions, or feedback? We'd love to hear from you. Visit our{' '}
                            <a href="/impressum" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                                Impressum
                            </a>
                            {' '}page for contact information.
                        </p>
                    </section>

                    <section className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                        <p className="text-sm text-blue-900 dark:text-blue-200">
                            <strong>Important Disclaimer:</strong> StartGermany is an educational resource created by and for
                            internationals. While we strive for accuracy, we are not legal advisors, immigration consultants,
                            or government representatives. Always verify critical information with official German authorities
                            and consult qualified professionals for legal or medical advice.
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

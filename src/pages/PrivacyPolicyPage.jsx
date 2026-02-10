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
                <title>Privacy Policy - StartGermany</title>
                <meta name="description" content="Privacy policy for StartGermany - How we collect, use, and protect your data" />
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
                            <strong>Last Updated:</strong> February 10, 2026
                        </p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                Welcome to StartGermany ("we," "our," or "us"). We are committed to protecting your privacy and ensuring
                                you have a positive experience on our website. This Privacy Policy explains how we collect, use, disclose,
                                and safeguard your information when you visit our website.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>

                            <h3 className="text-xl font-semibold mb-2">Automatically Collected Information</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                When you visit our website, we automatically collect certain information about your device, including:
                            </p>
                            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4">
                                <li>Browser type and version</li>
                                <li>Operating system</li>
                                <li>IP address</li>
                                <li>Pages visited and time spent on pages</li>
                                <li>Referring website addresses</li>
                                <li>Device information</li>
                            </ul>

                            <h3 className="text-xl font-semibold mb-2">Cookies and Tracking Technologies</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                We use cookies and similar tracking technologies to track activity on our website and store certain information.
                                Cookies are files with a small amount of data that are sent to your browser from a website and stored on your device.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                We use the information we collect in the following ways:
                            </p>
                            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4">
                                <li>To provide, operate, and maintain our website</li>
                                <li>To improve, personalize, and expand our website</li>
                                <li>To understand and analyze how you use our website</li>
                                <li>To develop new products, services, features, and functionality</li>
                                <li>To communicate with you for customer service and support</li>
                                <li>To send you updates and marketing communications (with your consent)</li>
                                <li>To find and prevent fraud</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Google AdSense</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to serve ads
                                based on your prior visits to our website or other websites. Google's use of advertising cookies enables
                                it and its partners to serve ads based on your visit to our site and/or other sites on the Internet.
                            </p>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                You may opt out of personalized advertising by visiting{' '}
                                <a
                                    href="https://www.google.com/settings/ads"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary-600 dark:text-primary-400 hover:underline"
                                >
                                    Google Ads Settings
                                </a>
                                {' '}or by visiting{' '}
                                <a
                                    href="http://www.aboutads.info/choices/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary-600 dark:text-primary-400 hover:underline"
                                >
                                    www.aboutads.info
                                </a>.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Your Data Protection Rights (GDPR)</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                If you are a resident of the European Economic Area (EEA), you have certain data protection rights:
                            </p>
                            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4">
                                <li><strong>Right to Access</strong> - You have the right to request copies of your personal data</li>
                                <li><strong>Right to Rectification</strong> - You have the right to request correction of inaccurate data</li>
                                <li><strong>Right to Erasure</strong> - You have the right to request deletion of your personal data</li>
                                <li><strong>Right to Restrict Processing</strong> - You have the right to request restriction of processing</li>
                                <li><strong>Right to Object</strong> - You have the right to object to our processing of your data</li>
                                <li><strong>Right to Data Portability</strong> - You have the right to request transfer of your data</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                We use administrative, technical, and physical security measures to protect your personal information.
                                While we have taken reasonable steps to secure the personal information you provide to us, please be aware
                                that despite our efforts, no security measures are perfect or impenetrable.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Third-Party Websites</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                Our website may contain links to third-party websites. We are not responsible for the privacy practices
                                or content of these third-party sites. We encourage you to read the privacy policies of any third-party
                                sites you visit.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                Our website is not intended for children under 16 years of age. We do not knowingly collect personal
                                information from children under 16. If you are a parent or guardian and believe your child has provided
                                us with personal information, please contact us.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                                Privacy Policy on this page and updating the "Last Updated" date.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                If you have any questions about this Privacy Policy, please refer to our{' '}
                                <a href="/impressum" className="text-primary-600 dark:text-primary-400 hover:underline">
                                    Impressum
                                </a>
                                {' '}page for contact information.
                            </p>
                        </section>

                        <section className="mb-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                            <p className="text-sm text-blue-900 dark:text-blue-200">
                                <strong>Note:</strong> This is an educational resource website. For official legal advice regarding
                                privacy and data protection, please consult a qualified legal professional.
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

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
                <title>Terms & Conditions - StartGermany</title>
                <meta name="description" content="Terms and conditions for using StartGermany - your guide to life in Germany" />
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
                            <strong>Last Updated:</strong> February 10, 2026
                        </p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                By accessing and using StartGermany ("the Website"), you accept and agree to be bound by these Terms and
                                Conditions. If you do not agree to these terms, please do not use this Website.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">2. Use of Website</h2>

                            <h3 className="text-xl font-semibold mb-2">2.1 Permitted Use</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                You may use this Website for personal, non-commercial purposes to access information and guides about
                                living in Germany. You may:
                            </p>
                            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4">
                                <li>Read and reference our guides</li>
                                <li>Share links to our content on social media</li>
                                <li>Print content for personal use</li>
                                <li>Use our information to help with your relocation to Germany</li>
                            </ul>

                            <h3 className="text-xl font-semibold mb-2">2.2 Prohibited Use</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                You may NOT:
                            </p>
                            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4">
                                <li>Copy, reproduce, or republish our content without permission</li>
                                <li>Use our content for commercial purposes</li>
                                <li>Modify or create derivative works from our content</li>
                                <li>Remove copyright or attribution notices</li>
                                <li>Use automated systems (bots, scrapers) to access the Website</li>
                                <li>Attempt to interfere with the Website's functionality</li>
                                <li>Engage in any unlawful activity</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                All content on this Website, including text, graphics, logos, images, and software, is the property of
                                StartGermany or its content suppliers and is protected by international copyright laws.
                            </p>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                Images used on this Website are sourced from Unsplash and are used under their license terms.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">4. Disclaimer of Warranties</h2>

                            <div className="p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800 mb-4">
                                <p className="text-sm text-yellow-900 dark:text-yellow-200">
                                    <strong>IMPORTANT:</strong> This Website is provided "as is" without any warranties, express or implied.
                                </p>
                            </div>

                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                We make no warranties or representations about:
                            </p>
                            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4">
                                <li>The accuracy, completeness, or timeliness of information</li>
                                <li>The suitability of information for your specific situation</li>
                                <li>The availability or reliability of the Website</li>
                                <li>The results you may obtain from using our information</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">5. Educational Purpose Only</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                StartGermany is an <strong>educational resource</strong> created by internationals for internationals.
                                Our content is based on personal experience and research, but:
                            </p>
                            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4">
                                <li>We are NOT legal advisors, immigration consultants, or government representatives</li>
                                <li>We do NOT provide legal, medical, or professional advice</li>
                                <li>Our information should NOT replace official guidance from German authorities</li>
                                <li>German regulations change frequently - always verify with official sources</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                To the maximum extent permitted by law, StartGermany and its creators shall NOT be liable for any:
                            </p>
                            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4">
                                <li>Direct, indirect, incidental, or consequential damages</li>
                                <li>Loss of profits, data, or opportunities</li>
                                <li>Damages resulting from use or inability to use the Website</li>
                                <li>Damages resulting from reliance on information provided</li>
                                <li>Damages from errors, omissions, or inaccuracies in content</li>
                            </ul>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                You use this Website and its information at your own risk.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">7. Third-Party Links</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                Our Website may contain links to third-party websites. We do not control these websites and are not
                                responsible for their content, privacy policies, or practices. Accessing third-party links is at your own risk.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">8. Advertising</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                This Website uses Google AdSense to display advertisements. By using this Website, you acknowledge that:
                            </p>
                            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4">
                                <li>Third-party vendors may use cookies to serve ads based on your browsing history</li>
                                <li>You can opt out of personalized advertising (see our Privacy Policy)</li>
                                <li>We do not control the content of third-party advertisements</li>
                                <li>Clicking on ads is at your own discretion and risk</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">9. User Conduct</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                You agree to use this Website in a lawful and respectful manner. You will NOT:
                            </p>
                            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4">
                                <li>Violate any applicable laws or regulations</li>
                                <li>Infringe on intellectual property rights</li>
                                <li>Transmit harmful code (viruses, malware, etc.)</li>
                                <li>Attempt to gain unauthorized access to our systems</li>
                                <li>Harass, abuse, or harm others</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately
                                upon posting to the Website. Your continued use of the Website after changes constitutes acceptance of the
                                modified terms.
                            </p>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                We recommend reviewing these terms periodically.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">11. Termination</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                We reserve the right to terminate or suspend access to our Website immediately, without prior notice,
                                for any reason, including violation of these Terms and Conditions.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">12. Governing Law</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                These Terms and Conditions are governed by and construed in accordance with the laws of Germany.
                                Any disputes shall be subject to the exclusive jurisdiction of the German courts.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">13. Severability</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited
                                or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">14. Contact Information</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                If you have questions about these Terms and Conditions, please refer to our{' '}
                                <a href="/impressum" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                                    Impressum
                                </a>
                                {' '}page for contact information.
                            </p>
                        </section>

                        <section className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                            <p className="text-sm text-blue-900 dark:text-blue-200">
                                <strong>Summary:</strong> By using StartGermany, you agree to use our educational content responsibly,
                                verify information with official sources, and understand that we provide guidance based on experience,
                                not professional legal or medical advice. We strive for accuracy but cannot guarantee outcomes.
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

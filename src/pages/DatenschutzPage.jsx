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
                <title>Datenschutz - StartGermany</title>
                <meta name="description" content="Privacy policy for StartGermany" />
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
                        <h2 className="text-2xl font-semibold mb-4">1. Data Protection at a Glance</h2>
                        <h3 className="text-xl font-semibold mb-2">General Information</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                            The following information provides a simple overview of what happens to your personal data when you
                            visit this website. Personal data is any data that can be used to identify you personally.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">2. Data Collection on This Website</h2>
                        <h3 className="text-xl font-semibold mb-2">Who is responsible for data collection?</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                            Data processing on this website is carried out by the website operator. You can find their contact
                            details in the Impressum section of this website.
                        </p>

                        <h3 className="text-xl font-semibold mb-2">How do we collect your data?</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                            Your data is collected when you provide it to us. This could be data you enter in a contact form,
                            for example. Other data is collected automatically by our IT systems when you visit the website.
                            This is mainly technical data (e.g., internet browser, operating system, or time of page access).
                        </p>

                        <h3 className="text-xl font-semibold mb-2">What do we use your data for?</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                            Some data is collected to ensure error-free provision of the website. Other data may be used to
                            analyze your user behavior.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">3. General Information and Mandatory Information</h2>
                        <h3 className="text-xl font-semibold mb-2">Data Protection</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                            The operators of this website take the protection of your personal data very seriously. We treat
                            your personal data confidentially and in accordance with statutory data protection regulations and
                            this privacy policy.
                        </p>

                        <h3 className="text-xl font-semibold mb-2">SSL/TLS Encryption</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                            For security reasons and to protect the transmission of confidential content, this site uses
                            SSL/TLS encryption. You can recognize an encrypted connection by the "https://" in the address
                            bar of your browser.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">4. Data Collection on This Website</h2>
                        <h3 className="text-xl font-semibold mb-2">Cookies</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                            Our website uses cookies. Cookies are small text files that are stored on your device and saved
                            by your browser. Some cookies are essential for the website to function, while others help us
                            improve the user experience.
                        </p>

                        <h3 className="text-xl font-semibold mb-2">Server Log Files</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                            The website provider automatically collects and stores information in server log files, which
                            your browser automatically transmits to us. These include:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4">
                            <li>Browser type and version</li>
                            <li>Operating system used</li>
                            <li>Referrer URL</li>
                            <li>Hostname of the accessing computer</li>
                            <li>Time of the server request</li>
                            <li>IP address</li>
                        </ul>
                        <p className="text-slate-600 dark:text-slate-400">
                            This data is not merged with other data sources. Data processing is based on Art. 6(1)(f) GDPR,
                            which permits data processing for the fulfillment of a contract or pre-contractual measures.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                            You have the following rights regarding your personal data:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400">
                            <li>Right to information about your stored data</li>
                            <li>Right to correction of incorrect data</li>
                            <li>Right to deletion of your data</li>
                            <li>Right to restriction of data processing</li>
                            <li>Right to data portability</li>
                            <li>Right to object to data processing</li>
                        </ul>
                    </section>

                    <section className="mb-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                        <p className="text-sm text-blue-900 dark:text-blue-200">
                            <strong>Note:</strong> This privacy policy is provided in good faith for educational purposes.
                            For a legally binding privacy policy, please consult a qualified legal professional specializing
                            in German data protection law (GDPR/DSGVO).
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

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CookieConsent = () => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setShowBanner(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setShowBanner(false);
    };

    return (
        <AnimatePresence>
            {showBanner && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
                >
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl p-6 md:p-8">
                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                                        🍪 We use cookies
                                    </h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                        We use cookies to improve your experience, analyze site traffic, and serve personalized ads.
                                        By clicking "Accept", you consent to our use of cookies. Read our{' '}
                                        <a
                                            href="/privacy-policy"
                                            className="text-primary-600 dark:text-primary-400 hover:underline font-semibold"
                                        >
                                            Privacy Policy
                                        </a>
                                        {' '}and{' '}
                                        <a
                                            href="/datenschutz"
                                            className="text-primary-600 dark:text-primary-400 hover:underline font-semibold"
                                        >
                                            Datenschutz
                                        </a>
                                        {' '}for more information.
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={acceptCookies}
                                        className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-primary-500/20"
                                    >
                                        Accept
                                    </button>
                                    <button
                                        onClick={acceptCookies}
                                        className="p-3 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
                                        aria-label="Close"
                                    >
                                        <X size={20} className="text-slate-500" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

import { useEffect } from 'react';

export const AdSense = ({
    adSlot = 'XXXXXXXX',
    adFormat = 'auto',
    fullWidthResponsive = true,
    adStyle = {},
    className = ''
}) => {
    useEffect(() => {
        try {
            // Push ad to AdSense queue
            if (window.adsbygoogle && process.env.NODE_ENV === 'production') {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            }
        } catch (error) {
            console.error('AdSense error:', error);
        }
    }, []);

    // Only render ads in production
    if (process.env.NODE_ENV !== 'production') {
        return (
            <div className={`bg-slate-100 dark:bg-slate-800 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg p-8 text-center ${className}`}>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    📢 AdSense Ad Placeholder (Production Only)
                </p>
            </div>
        );
    }

    return (
        <div className={className}>
            <ins
                className="adsbygoogle"
                style={{ display: 'block', ...adStyle }}
                data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                data-ad-slot={adSlot}
                data-ad-format={adFormat}
                data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
            />
        </div>
    );
};

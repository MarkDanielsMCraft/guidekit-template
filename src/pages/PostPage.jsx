import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { useParams, useNavigate } from 'react-router-dom';
import { PostDetail } from '../components/PostDetail';
import { Footer } from '../components/Footer';
import { POSTS, ORDERED_POSTS } from '../data/posts';
import { downloadAllGuidesPdf } from '../utils/pdfExporter';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export const PostPage = ({ progress, onToggle, onReset, emergencyMode, setEmergencyMode }) => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const post = POSTS.find(p => p.slug === slug);

    const handleDownloadGuides = () => {
        downloadAllGuidesPdf(ORDERED_POSTS);
    };

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Guide not found</h2>
                    <button
                        onClick={() => navigate('/')}
                        className="text-indigo-600 font-medium hover:underline"
                    >
                        Return home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <PageTransition>
            <Helmet>
                <title>{post.title} | StartGermany</title>
                <meta name="description" content={post.summary} />

                {/* Open Graph */}
                <meta property="og:title" content={`${post.title} | StartGermany`} />
                <meta property="og:description" content={post.summary} />
                <meta property="og:image" content={post.cardImage || post.backgroundImage} />
                <meta property="og:type" content="article" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${post.title} | StartGermany`} />
                <meta name="twitter:description" content={post.summary} />
                <meta name="twitter:image" content={post.cardImage || post.backgroundImage} />
            </Helmet>
            <PostDetail
                post={post}
                onBack={() => navigate('/')}
                progress={progress}
                onToggle={onToggle}
                onReset={() => onReset(post.slug)}
                emergencyMode={emergencyMode}
                setEmergencyMode={setEmergencyMode}
                onNavigateHome={() => navigate('/')}
                onOpenPost={(newSlug) => navigate(`/guide/${newSlug}`)}
            />
            <Footer
                variant="detail"
                onBackToGuideList={() => navigate('/')}
                onShowPosts={() => navigate('/')}
                onShowLibrary={() => navigate('/library')}
                onOpenEmergency={() => setEmergencyMode(true)}
                onDownloadGuides={handleDownloadGuides}
            />
        </PageTransition>
    );
};

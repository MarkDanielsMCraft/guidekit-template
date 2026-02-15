import templateGuide from './template-guide.jsx';

export const POSTS = [templateGuide];

export const POST_ORDER = POSTS.map(post => post.slug);

export const sortPosts = (posts) => {
    return [...posts].sort((a, b) => {
        return POST_ORDER.indexOf(a.slug) - POST_ORDER.indexOf(b.slug);
    });
};

export const ORDERED_POSTS = sortPosts(POSTS);

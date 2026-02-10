import curiousAboutGermany from './curious-about-germany.jsx';
import freeLearningResources from './free-learning-resources-non-nursing.jsx';
import first72Hours from './first-72-hours.jsx';
import moneyPaperwork from './money-paperwork.jsx';
import housingNeighbors from './housing-neighbors.jsx';
import wgRoommateCulture from './wg-roommate-culture.jsx';
import accommodation from './accommodation-nursing-ausbildung.jsx';
import nursingLanguage from './nursing-language-resources.jsx';
import rightsWorkCulture from './rights-work-culture.jsx';
import mentalHealth from './mental-health-community.jsx';
import foodEating from './food-eating-cheap.jsx';
import shoppingEssentials from './shopping-essentials.jsx';
import germanLanguage from './german-language-ausbildung.jsx';
import germanCulture from './german-culture-social.jsx';
import healthDoctors from './health-doctors-pharmacies.jsx';
import sideIncome from './side-income-minijob.jsx';
import legalDefense from './legal-defense-insurance.jsx';
import emergencySituations from './emergency-situations.jsx';

export const POSTS = [
    curiousAboutGermany,
    first72Hours,
    moneyPaperwork,
    housingNeighbors,
    wgRoommateCulture,
    shoppingEssentials,
    foodEating,
    healthDoctors,
    emergencySituations,
    germanLanguage,
    freeLearningResources,
    nursingLanguage,
    accommodation,
    rightsWorkCulture,
    legalDefense,
    germanCulture,
    mentalHealth,
    sideIncome,
];

// Order from original file (1-18)
// 1. curious-about-germany
// 2. first-72-hours
// 3. money-paperwork
// 4. housing-neighbors
// 5. wg-roommate-culture
// 6. shopping-essentials
// 7. food-eating-cheap
// 8. health-doctors-pharmacies
// 9. emergency-situations
// 10. german-language-ausbildung
// 11. free-learning-resources-non-nursing
// 12. nursing-language-resources
// 13. accommodation-nursing-ausbildung
// 14. rights-work-culture
// 15. legal-defense-insurance
// 16. german-culture-social
// 17. mental-health-community
// 18. side-income-minijob

export const POST_ORDER = POSTS.map(post => post.slug);

export const sortPosts = (posts) => {
    return [...posts].sort((a, b) => {
        return POST_ORDER.indexOf(a.slug) - POST_ORDER.indexOf(b.slug);
    });
};

export const ORDERED_POSTS = sortPosts(POSTS);

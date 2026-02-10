import { AlertCircle } from "lucide-react";
import img15 from '../../lady-justice-677945.jpg';

export default {
    slug: "legal-defense-insurance",
    title: "The Yellow Letter & Insurance",
    subtitle: "Rundfunkbeitrag, liability insurance, and official mail",
    stage: "Legal Defense",
    readTime: 6,
    icon: <AlertCircle size={24} />,
    color: "from-red-500 to-amber-600",
    shadow: "shadow-amber-500/20",
    accent: "text-red-600",
    backgroundImage: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&q=80&w=2000",
    verified: "2026-02-10",
    summary: "Don't ignore the yellow letter. Handle broadcast fees and get liability insurance before you need it.",
    vibeCheck: "German mail is serious. Open everything, respond on time, and protect yourself with basic insurance.",
    content: [
        { type: "h2", text: "1) The yellow letter (Rundfunkbeitrag)" },
        { type: "p", text: "Every household owes the public broadcast fee (~18€ per month). You'll get a yellow letter within weeks of moving in. One fee per flat—split with roommates." },
        {
            type: "ul", items: [
                "**Action:** Register at the link in the letter or online within 4 weeks.",
                "**Payment rhythm:** Collected **quarterly** (~€55 every 3 months), not monthly. Keep €55 buffered so the direct debit doesn't bounce.",
                "**If you live in a WG:** Only one person pays; share the Beitragsnummer and split the cost.",
                "**Consequences:** Late fees and collection notices if you ignore it."
            ]
        },
        { type: "h2", text: "2) Liability insurance (Haftpflicht)" },
        { type: "p", text: "Covers damage you accidentally cause to others (e.g., water leak, broken laptop). Costs ~3–6€/month. Many landlords expect it." },
        {
            type: "ul", items: [
                "**Coverage:** Personal liability, often keys (lost keys can cost hundreds), some include rental damage.",
                "**Where to buy:** Check24 comparison or providers like Getsafe, Feather, or your bank.",
                "**Proof:** Keep the policy PDF handy for landlords."
            ]
        },
        { type: "h2", text: "3) Open your mail weekly" },
        { type: "p", text: "Official letters rarely come by email. Open paper mail promptly. For anything unclear, take a photo and ask a German colleague or the Bürgeramt hotline." },

        { type: "h2", text: "4. The 'Subscription Trap' (Abo-Falle)" },
        {
            type: "p",
            text: "German contracts (Gym, Internet, Phone) are sticky. If you sign up for 12 months, you usually cannot quit early, even if you move. **Crucial:** Contracts often renew automatically for another year if you don't cancel 1 month before they end. If you stop paying, providers send the case to debt collectors (Inkasso) and it hurts your Schufa. Avoid impulse sign-ups and 'buy now, pay later' or loans unless you can repay comfortably. **Rule:** Set a cancellation reminder on your phone the day you sign any contract."
        },
        {
            type: "p",
            text: "**Kündigungsfrist (notice period):** Electricity (Strom), internet (DSL/Kabel), and student deals often have 12- or 24-month minimum terms. The end date matters less than the cancellation deadline. Cancel in writing (email/portal) at least 1 month before the term ends or it auto-renews—often for another full year."
        }
    ],
    goldenRule: "Open every letter, register the broadcast fee, and keep liability insurance active.",
    steps: [
        { title: "Register Rundfunkbeitrag", text: "Follow the letter link; one per household." },
        { title: "Buy liability insurance", text: "Pick a plan (€3–6/mo) covering keys + rental damage." },
        { title: "Store proofs", text: "Save Beitragsnummer + policy PDF in cloud + phone." },
    ],
    readMore: [
        { title: "Official Rundfunkbeitrag", url: "https://www.rundfunkbeitrag.de/welcome/index_ger.html", source: "official" },
        { title: "Haftpflicht basics (DE)", url: "https://www.verbraucherzentrale.de/wissen/versicherungen/privathaftpflichtversicherung", source: "official" },
    ],
    downloads: [{ title: "Rundfunkbeitrag checklist", url: null }],
    videos: [],
    tags: ["legal", "rundfunkbeitrag", "insurance", "liability"],
};

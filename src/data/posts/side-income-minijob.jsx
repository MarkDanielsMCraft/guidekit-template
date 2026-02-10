import { Briefcase } from "lucide-react";
import img3 from '../../frankfurt-5377161.jpg';

export default {
    slug: "side-income-minijob",
    title: "Side Income: Working Legally While Training",
    subtitle: "Minijob rules, taxes, and how much you can earn",
    stage: "Financial Defense",
    readTime: 10,
    icon: <Briefcase size={24} />,
    color: "from-green-500 to-emerald-600",
    shadow: "shadow-green-500/20",
    accent: "text-green-600",
    backgroundImage: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=2000",
    verified: "2026-02-10",
    summary: "How to work a second part-time job legally without breaking your training contract or visa rules.",
    vibeCheck: "You can earn extra money. But there are legal limits. Here's the rulebook so you don't get fined.",
    content: [
        {
            type: "p",
            text: "Many trainees want additional income. Germany allows this—BUT there are strict rules. Break them and you risk visa issues, employer disputes, or fines. Learn the system first."
        },
        { type: "h2", text: "1. The Legal Framework" },
        {
            type: "p",
            text: "**Your training contract (Ausbildungsvertrag) is your primary job.** Additional work must not interfere with it. Your trainer can restrict side jobs if they conflict."
        },
        {
            type: "p",
            text: "**Visa rule:** Your residence permit ties you to your primary training. Working on the side is allowed, but the Ausbildung must remain your focus. If you switch focus, you violate visa terms. **Rest rule:** German law requires **11 hours** rest between shifts. Count training + side job together—don't schedule back-to-back shifts that break this. If your boss pressures you, point them to the rest rule and the expectations in the Work stage (Rights & Hierarchy)."
        },
        { type: "h2", text: "2. Minijob (€603/Month Rule)" },
        {
            type: "p",
            text: "**Best option:** A **Minijob** (marginal employment). As of January 2026, you can earn up to **€603/month** (linked to the €13.90 minimum wage) without major tax implications."
        },
        {
            type: "ul",
            items: [
                "**How it works:** Employer registers you with social insurance as a **geringfügig Beschäftigter** (marginally employed person).",
                "**Taxes:** Employer pays a flat 2% social insurance contribution. You owe no income tax on this amount.",
                "**What counts as work:** Serving in a café, tutoring, freelance work, delivery driving.",
                "**Important:** Only 1 Minijob permitted. You can't stack multiple €603 jobs.",
                "**Contract:** Get a written contract with hours, pay rate, and start date."
            ]
        },
        { type: "h2", text: "3. Part-Time Job (Over €603)" },
        {
            type: "p",
            text: "If you earn more than €603/month, you enter regular employment. This is fine, but:"
        },
        {
            type: "ul",
            items: [
                "**Taxes apply:** Income tax, health insurance contribution, unemployment insurance.",
                "**Hours matter:** Don't exceed your training hours too much. If your training is full-time (37.5 hrs/week), working 20+ extra hours weekly might violate your contract.",
                "**Employer approval:** Get written permission from your trainer before taking a second job.",
                "**Example:** Train 37.5 hrs/week, work 8-10 hrs/week at a café = acceptable. Train 37.5 hrs/week, work 25 hrs/week = likely a violation."
            ]
        },
        { type: "h2", text: "4. Tax Filing (Steuererklärung)" },
        {
            type: "p",
            text: "Even if you have a Minijob, filing taxes is smart. You often get money back."
        },
        {
            type: "ul",
            items: [
                "**Why file:** Your Ausbildung income has taxes withheld. If your side income is low, overall tax is less than withheld. You get a refund.",
                "**How to file:** Use **ELSTER** (free official online platform) or hire a **Steuerberater** (tax consultant, ~€50-100).",
                "**Deadline:** June 2nd of the following year (soft deadline; hard deadline is later with penalty).",
                "**Documents needed:** Employment contracts, payslips from both jobs, proof of payments."
            ]
        },
        { type: "h2", text: "5. Get Money Back: The Tax Return" },
        {
            type: "p",
            text: "Training costs are often deductible (**Werbungskosten**): textbooks, scrubs, work shoes, laptop for school, and travel to class. Even on a low trainee salary, filing can return €200-500 per year. Keep receipts and file via ELSTER or a tax app."
        },
        { type: "h2", text: "6. What Counts as 'Work'" },
        {
            type: "ul",
            items: [
                "**Allowed:** Serving in restaurants, tutoring, delivery driving (Deliveroo, Wolt), freelance writing, babysitting, tutoring.",
                "**Careful:** Your contract might forbid work in competing fields. If you train at Hospital A, working at Hospital B might be forbidden.",
                "**Not allowed:** Working for cash under the table (Schwarzarbeit). It's illegal, uninsured, and puts you at risk.",
                "**Self-employment:** Freelance work requires registration (Gewerbeanmeldung). Cost: ~€25. You'll owe self-employment taxes but have freedom."
            ]
        },
        { type: "h2", text: "6. Earnings Reality Check" },
        {
            type: "p",
            text: "**Minijob €603/month:** Realistic for restaurant/café work. That's about €13-14/hour typical at the 2026 minimum wage."
        },
        {
            type: "p",
            text: "**Part-time €1000/month:** Requires ~10-12 hrs/week at €15+/hour (tutoring pays better than food service)."
        },
        {
            type: "p",
            text: "**Net income after taxes:** If earning €1000/month gross, expect ~€750-800 net after all deductions."
        }
    ],
    goldenRule: "Keep side work under €603/month (Minijob) unless you have trainer approval. Never work for cash under the table.",
    steps: [
        {
            title: "Check Your Contract",
            text: "Read your Ausbildungsvertrag.",
            action: "Look for side work restrictions.",
            readMore: [{ title: "Faire Integration (Rights)", url: "https://www.faire-integration.de/", source: "ngo" }],
        },
        {
            title: "Find a Minijob",
            text: "Job sites: Indeed.de, Monster.de",
            action: "Search 'Minijob' in your city.",
            readMore: [{ title: "Indeed.de", url: "https://www.indeed.de", source: "tool" }],
        },
        {
            title: "Register Properly",
            text: "Ensure employer registers you officially.",
            action: "Ask HR for confirmation.",
            readMore: [{ title: "Minijob Zentrale (Official Info)", url: "https://www.minijobzentrale.de/", source: "official" }],
        },
    ],
    readMore: [
        { title: "ELSTER - Tax Filing", url: "https://www.elsteronline.de/", source: "official" },
        { title: "Minijob Rules 2026", url: "https://www.minijobzentrale.de/DE/01_fachliche_Infos/09_aktuelles/Minijob_ab_2024.html", source: "official" },
    ],
    downloads: [],
    videos: [{ title: "Minijob in Germany Explained", url: "https://youtu.be/example123" }],
    tags: ["work", "minijob", "income", "taxes", "legal"],
};

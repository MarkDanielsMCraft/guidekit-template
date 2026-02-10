import { Briefcase } from "lucide-react";
import img17 from '../../alliance-5201816.jpg';

export default {
    slug: "rights-work-culture",
    title: "Rights & Hierarchy: Know Your Ground",
    subtitle: "Contracts, your legal rights, and when to speak up",
    stage: "Work",
    readTime: 12,
    icon: <Briefcase size={24} />,
    color: "from-purple-500 to-violet-600",
    shadow: "shadow-purple-500/20",
    accent: "text-purple-600",
    backgroundImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=2000",
    verified: "2026-02-10",
    summary:
        "You're a trainee, not a servant. Learn what's legal, what's exploitation, and who to call when something's wrong.",
    vibeCheck:
        "German workplaces have clear rules. You have rights. You should know them.",
    content: [
        { type: "h2", text: "1. Workplace Hierarchy" },
        {
            type: "p",
            text: "German workplaces have clear structures. You have a direct supervisor (Vorgesetzter) and a chain of command. Always be respectful, use formal 'Sie' when appropriate, and follow proper channels. Don't skip your manager to complain to the top unless it's genuinely urgent. *(This applies across all fields—hospitals, tech companies, offices, apprenticeships.)*"
        },
        { type: "h2", text: "2. Contract Check" },
        {
            type: "p",
            text: "You're an employee, not just a trainee. Your contract matters. If you don't understand something or feel it's unfair, get advice. Use [Faire Integration](https://www.faire-integration.de/)—they offer free counseling for refugees and migrants about worker rights. They can review your contract and tell you if it's legal."
        },
        { type: "h2", text: "3. Your Legal Rights" },
        {
            type: "p",
            text: "You're in Germany as a 'trainee' (**Auszubildender**) or employee. This comes with legal protections. You should never be unsupervised when learning. **Probezeit (Probation):** During the first 3-6 months, either side can end the contract with 2 weeks' notice, no reason needed. Be reliable during this time. After probation, it's much harder to fire you."
        },
        {
            type: "ul",
            items: [
                "**Working Hours:** Maximum 10 hours/day (usually 8), plus mandatory breaks.",
                "**Sick Leave:** Tell your employer BEFORE your shift. Ask when you need a doctor's note (Attest).",
                "**Vacation:** Legally guaranteed. Usually 20-30 days/year."
            ]
        },
        {
            type: "p",
            text: "Probation is real: repeated lateness, skipping shifts, or ignoring supervisor instructions can end your contract fast. Show up early, communicate delays immediately, and document when you inform supervisors."
        },
        {
            type: "p",
            text: "Pay floor in care is higher than general minimum wage: as of Jan 2026, nursing assistants earn at least **€16.10/hour** (Pflegemindestlohn), rising to €16.52 in July 2026."
        },
        { type: "h2", text: "6. Cultural Trap: Silence vs. Respect" },
        {
            type: "p",
            text: "In many African cultures, listening quietly to a boss is respect. **In Germany, silence can hurt you.** If you don't ask, supervisors assume you understood 100%. If you then make a mistake, they'll blame you. Fix: ask questions. Say 'Habe ich das richtig verstanden?' (Did I get that right?). It shows motivation, not disrespect."
        },
        { type: "h2", text: "4. Hygiene Rules (Health & Food jobs)" },
        {
            type: "ul",
            items: [
                "**Hands:** Disinfect before and after every patient/food contact. Gloves do not replace hand hygiene.",
                "**Hair & nails:** Hair tied back; no long or acrylic nails in care/food settings; no rings or bracelets on shift.",
                "**Uniform:** Clean uniform each shift if possible; follow color-coded zones (OP, ICU) strictly.",
                "**Infections:** Report symptoms early; coming sick to a ward or kitchen can get you sent home."
            ]
        },
        { type: "h2", text: "5. Uniform & Hygiene Code" },
        {
            type: "ul",
            items: [
                "**Shoes:** Hospitals often supply tunics/pants but not shoes. Buy washable, non-slip clogs or Birkenstock-style work shoes (~€50-80). Cheap sneakers = back pain in 2 weeks.",
                "**Below the elbow:** No watches, bracelets, rings, gel/acrylic nails, or nail polish. Remove all before Day 1 to avoid being sent home.",
                "**Spare set:** Keep a backup pair of work shoes and socks in your locker for spills.",
                "**Budget now:** Plan this cost before arrival to avoid scrambling on your first shift."
            ]
        },
        { type: "h2", text: "7. Long-Term Mindset: Germany Rewards Patience" },
        {
            type: "p",
            text: "Progress here is steady, not explosive. Showing up on time, asking questions, and improving each month matters more than flashy speed. Promotions, better shifts, and trust come from consistency over 6–18 months. Play the long game."
        }
    ],
    goldenRule:
        "If you feel unsafe or exploited, contact 'Faire Integration' or 'Dr. Azubi' immediately.",
    steps: [
        {
            title: "Know Your Hierarchy",
            text: "Who's who in your workplace.",
            action: "Ask on day one.",
            readMore: [
                {
                    title: "German Workplace Culture Guide",
                    url: "https://www.make-it-in-germany.com/en/looking-for-work/law-regulation/", source: "official",
                },
            ],
        },
        {
            title: "Get Advice",
            text: "Ask questions about your rights safely.",
            action: "Use Dr. Azubi forum.",
            readMore: [
                { title: "Dr. Azubi (Help)", url: "https://jugend.dgb.de/ausbildung/beratung/dr-azubi", source: "ngo" },
            ],
        },
        {
            title: "Get Legal Advice",
            text: "Have an expert review your contract.",
            action: "Contact Faire Integration (free).",
            readMore: [
                { title: "Faire Integration", url: "https://www.faire-integration.de/", source: "ngo" },
            ],
        },
    ],
    readMore: [],
    downloads: [],
    videos: [],
    tags: ["rights", "work", "hierarchy", "contracts"],
};

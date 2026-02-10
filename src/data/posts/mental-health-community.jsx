import { Heart } from "lucide-react";
import img8 from '../../alliance-5201816.jpg';

export default {
    slug: "mental-health-community",
    title: "Mental Health & Building Your Life",
    subtitle: "The emotional side nobody talks about",
    stage: "Health",
    readTime: 9,
    icon: <Heart size={24} />,
    color: "from-cyan-500 to-teal-500",
    shadow: "shadow-cyan-500/20",
    backgroundImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=2000",
    accent: "text-cyan-600",
    verified: "2026-02-10",
    summary:
        "Homesickness is real. Loneliness is real. But so are the communities and support systems around you.",
    vibeCheck:
        "It's normal to feel overwhelmed. You're not weak — you're adapting to a new world.",
    content: [
        { type: "h2", text: "1. Fighting Isolation: Visit Friends" },
        {
            type: "p",
            text: "Loneliness is the biggest challenge. Do not just go to work and sleep. **Visit your friends.** If you know other scholars in different cities, visit them! Use the [Deutschlandticket](https://www.bahn.de/angebot/regio/deutschland-ticket) to travel for free on regional trains on weekends. Plan trips. Seeing a familiar face can recharge your battery."
        },
        { type: "h2", text: "2. Finding Friends: The 'Verein'" },
        {
            type: "p",
            text: "Germans make friends in 'Vereinen' (Clubs). Sports, choir, chess, hiking. Joining a Verein costs very little (5-10€/month) and instantly connects you with locals. Use the DOSB finder linked below."
        },
        { type: "h2", text: "3. Free Counseling: It is Okay to Ask for Help" },
        {
            type: "p",
            text: "In many cultures, asking for mental health support is seen as a weakness. **In Germany, it is seen as strength.** It means you are taking responsibility for your health. Please know this: Seeing a counselor does **not** affect your visa status. It does **not** go on your employment record. It is strictly confidential."
        },
        {
            type: "p",
            text: "[Ipso Care](https://ipso-care.com/) (The Best Option): This organization specializes in helping people who have moved cultures. They offer **free**, video-based counseling in many languages (Arabic, Farsi, Ukrainian, Russian, French, English, etc.). You speak to counselors who understand your cultural background. You can book an appointment anonymously on their website. I have linked it below."
        },
        {
            type: "p",
            text: "[TelefonSeelsorge](https://www.telefonseelsorge.de/) (Crisis Line): If you are in a crisis at 3:00 AM and have nobody to talk to, you can call **0800 111 0 111** or **0800 111 0 222**. It is free, available 24/7, and completely anonymous. They also offer chat support online if you prefer typing."
        },
        { type: "h2", text: "4. Dealing with Discrimination" },
        {
            type: "p",
            text: "Racism exists here. You may experience 'The German Stare' (people staring at you on trains). It is usually curiosity/rudeness, not aggression, but it is exhausting. **Know your rights:** If you face discrimination at work, you are protected by law. Contact the 'Antidiskriminierungsstelle' (Anti-Discrimination Agency). Find safe spaces in community groups like **ISD Bund** (Initiative of Black People in Germany)."
        },
        { type: "h2", text: "5. Faith Communities as Support" },
        {
            type: "p",
            text: "Church or mosque is often a social lifeline. Look for **International Churches** or **Freikirchen** (Pentecostal/Evangelical) if you want lively services in English. For mosques, many are Turkish/Arab-run—ask if sermons are in English or Arabic before you go so you don't feel lost."
        },
        { type: "h2", text: "6. Time Pressure & Calendar Fatigue" },
        {
            type: "p",
            text: "German life runs on schedules. Constant deadlines and punctuality can feel like you're always 'almost late'. Use a calendar app with alerts, batch errands, and plan buffer time. Feeling stressed by the clock is normal at first—it eases as routines settle."
        },
        { type: "h2", text: "7. The Lonely Success Phase" },
        {
            type: "p",
            text: "Months 3–9 can feel empty: you're following rules, earning, and surviving, but joy is missing. This is common. Add one weekly social ritual (club, faith group, coffee with a friend) and one future goal to work toward. The phase passes when you build routine + community."
        }
    ],
    goldenRule: "Do not isolate yourself. Speak early if you feel unwell.",
    steps: [
        {
            title: "Free Counseling",
            text: "Talk to a professional.",
            action: "Book a video session with Ipso Care.",
            readMore: [{ title: "Ipso Care (Native Language)", url: "https://ipso-care.com/", source: "ngo" }],
        },
        {
            title: "Join Club",
            text: "Sports/Hobbies.",
            action: "Find Verein.",
            readMore: [{ title: "DOSB Finder", url: "https://sportabzeichen-digital.de/sportabzeichentreffs", source: "tool" }],
        },
        {
            title: "Ask the Community",
            text: "Get answers from other newcomers.",
            action: "Join Together in Germany.",
            readMore: [{ title: "Together in Germany", url: "https://together-in-germany.org/", source: "ngo" }],
        },
    ],
    readMore: [
        { title: "TelefonSeelsorge (Crisis)", url: "https://www.telefonseelsorge.de/", source: "official" },
        { title: "Eventbrite Events", url: "https://www.eventbrite.de", source: "tool" },
        { title: "Meetup", url: "https://handbookgermany.de/en", source: "tool" },
    ],
    downloads: [],
    videos: [],
    tags: ["health", "social", "friends", "counseling"],
};

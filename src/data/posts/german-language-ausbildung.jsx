import { BookOpen } from "lucide-react";
import img1 from '../../german-6030980.jpg';

export default {
    slug: "german-language-ausbildung",
    title: "German Language: B2 & Workplace Communication",
    subtitle: "From B2 to professional fluency in your field",
    stage: "Career",
    readTime: 9,
    icon: <BookOpen size={24} />,
    color: "from-indigo-500 to-blue-600",
    shadow: "shadow-indigo-500/20",
    accent: "text-indigo-600",
    backgroundImage: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=2000",
    verified: "2026-02-10",
    summary: "You have B2 German. Master workplace communication, field-specific phrases, and communication styles Germans expect.",
    vibeCheck: "B2 means you can survive. Your Ausbildung demands precision and workplace confidence. Here's how.",
    content: [
        {
            type: "p",
            text: "Most international students enter vocational training with B2 German (upper intermediate). This is survival-level language. But your Ausbildung exposes gaps: technical jargon, rapid instructions, informal office communication. **Good news:** Your colleagues will be patient. Germans expect non-native speakers to ask questions."
        },
        { type: "h2", text: "1. Understand German Communication Style" },
        {
            type: "p",
            text: "**Direct feedback:** Your boss will say 'Das ist falsch' (That's wrong) or 'Das funktioniert nicht' (That doesn't work). This is NOT disrespect—it's efficiency. Germans separate criticism from personal judgment. Don't take it personally."
        },
        {
            type: "p",
            text: "**Formal language matters:** Use 'Sie' (formal you) with everyone initially. Only use 'Du' (informal) if they invite you to. Written communication (emails) is formal: start with 'Sehr geehrter...' (Dear...)."
        },
        { type: "h2", text: "2. Essential Workplace Phrases" },
        {
            type: "ul",
            items: [
                "**Asking for help:** 'Können Sie mir helfen?' (Can you help me?) or 'Ich verstehe nicht. Können Sie das erklären?' (I don't understand. Can you explain?)",
                "**Confirmation:** 'Habe ich das richtig verstanden?' (Did I understand correctly?)",
                "**Clarification:** 'Was bedeutet...?' (What does...mean?)",
                "**Apology:** 'Es tut mir leid, ich bin neu.' (I'm sorry, I'm new.)",
                "**Status update:** 'Ich bin fast fertig.' (I'm almost done.)"
            ]
        },
        { type: "h2", text: "3. Field-Specific Communication" },
        {
            type: "p",
            text: "Create a glossary of 50 essential terms your field uses. Not grammar—pure vocabulary. Memorize phrases, not rules."
        },
        {
            type: "ul",
            items: [
                "**Use Anki flashcards:** Add 10 terms daily. Review daily for 5 minutes.",
                "**Practice pronunciation:** Record yourself saying medical terms. Listen to PflegeTube on YouTube for real scenarios.",
                "**Ask your trainer:** Most will give you a glossary or textbook with terminology."
            ]
        },
        { type: "h2", text: "4. Free Learning Resources" },
        {
            type: "p",
            text: "[DW Learn German](https://learngerman.dw.com/en/overview): Free courses from Deutsche Welle (Germany's international broadcaster). Videos with B1/B2 level content."
        },
        {
            type: "p",
            text: "[Easy German (YouTube)](https://www.youtube.com/@EasyGerman): Authentic interviews with real Germans. Start with B1/B2 videos. Subtitles in German + English."
        },
        {
            type: "p",
            text: "[Slow German (Podcast)](https://slowgerman.com): 5-minute podcasts read slowly. Topics from culture to current events. Perfect for listening practice."
        }
        ,
        { type: "h2", text: "5. Why Germans Sound Different From Your Teacher" },
        {
            type: "p",
            text: "Real-life German = accents + speed. Bavarian, Saxon, and Swabian dialects drop endings and swallow consonants; Ruhrpott speaks fast; Berliners are direct. If you only learned textbook Hochdeutsch, it's normal to miss words. Ask 'Können Sie das bitte langsamer sagen?' and listen for context words, not every syllable."
        }
    ],
    goldenRule: "Ask questions at work instead of guessing. Germans respect curiosity. Master 50 field-specific terms first—grammar second.",
    steps: [
        {
            title: "Gather Field Vocabulary",
            text: "Create a list of 50 essential terms.",
            action: "Ask trainer for glossary or use Anki.",
            readMore: [{ title: "Anki - Flashcard App", url: "https://apps.ankiweb.net/", source: "tool" }],
        },
        {
            title: "Study Workplace Phrases",
            text: "Memorize 10 essential phrases.",
            action: "Write them down daily.",
            readMore: [{ title: "DW Learn German", url: "https://learngerman.dw.com/en/overview", source: "learning" }],
        },
        {
            title: "Watch Real German",
            text: "Build listening comprehension.",
            action: "Watch 1 Easy German video weekly.",
            readMore: [{ title: "Easy German (YouTube)", url: "https://www.youtube.com/@EasyGerman", source: "video" }],
        },
    ],
    readMore: [
        { title: "Slow German Podcast", url: "https://slowgerman.com", source: "learning" },
        { title: "Dict.cc Dictionary", url: "https://www.dict.cc", source: "tool" },
    ],
    downloads: [],
    videos: [],
    tags: ["language", "german", "b2", "work", "communication"],
};

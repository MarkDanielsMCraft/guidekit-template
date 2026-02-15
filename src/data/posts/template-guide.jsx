import { BookOpen } from "lucide-react";

export default {
    slug: "template-guide",
    title: "Template Guide Title",
    subtitle: "Short, clear subtitle for this guide",
    stage: "Plan",
    readTime: 5,
    icon: <BookOpen size={24} />,
    color: "from-indigo-600 to-rose-500",
    shadow: "shadow-indigo-500/20",
    accent: "text-indigo-600",
    verified: "2026-02-15",
    backgroundImage: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&q=80&w=2000",
    summary: "Replace this summary with the one-sentence value of your guide.",
    vibeCheck: "Give readers a quick context check before they dive in.",
    content: [
        { type: "p", text: "This is placeholder content. Replace each block with your real guidance." },
        { type: "h2", text: "1) Your first key section" },
        { type: "p", text: "Explain the step clearly. Add any important constraints or tips." },
        {
            type: "ul",
            items: [
                "**Checklist item:** short, direct instruction.",
                "**Checklist item:** add supporting detail or example.",
                "**Checklist item:** mention required documents, tools, or links."
            ]
        },
        { type: "h2", text: "2) Another essential section" },
        { type: "p", text: "Use practical language and add actionable details." }
    ],
    goldenRule: "Summarize the single most important takeaway here.",
    steps: [
        { title: "Add your first step", text: "Use the checklist to track progress." },
        { title: "Add your second step", text: "Keep each step short and specific." },
        { title: "Add your third step", text: "Make it easy to say done." }
    ],
    readMore: [
        { title: "Official source (example)", url: "https://example.com", source: "official" }
    ],
    tags: ["template", "starter"],
};

import { AlertCircle } from "lucide-react";
import img14 from '../../ambulance-970037.jpg';

export default {
    slug: "emergency-situations",
    title: "Emergency Situations: Beyond 112",
    subtitle: "What to do after accidents, theft, lost documents, and urgent problems",
    stage: "Emergencies",
    readTime: 10,
    icon: <AlertCircle size={24} />,
    color: "from-red-600 to-orange-600",
    shadow: "shadow-red-500/20",
    accent: "text-red-600",
    backgroundImage: "https://images.unsplash.com/photo-1599700403969-f77b37bfc283?auto=format&fit=crop&q=80&w=2000",
    verified: "2026-02-10",
    summary: "Medical emergencies use 112. But what about car accidents, theft, or lost passport? Here's the actual protocol.",
    vibeCheck: "Emergencies happen. Knowing the exact steps removes panic. Here's your checklist.",
    content: [
        {
            type: "p",
            text: "You know to call 112 for medical emergencies. But what about a car accident? Stolen phone? Lost passport? Germany has a system for everything. Here's what you actually do."
        },
        { type: "h2", text: "1. Medical Emergency (112)" },
        {
            type: "p",
            text: "**When to call:** Chest pain, difficulty breathing, unconsciousness, severe bleeding, suspected broken bone, suspected poisoning."
        },
        {
            type: "ul",
            items: [
                "**Number:** 112 (ambulance, fire, rescue)",
                "**What to say:** Your location, nature of emergency, number of people affected. Don't hang up. Stay on the line.",
                "**Response:** Ambulance arrives within 10-20 minutes in cities. Paramedics are excellent.",
                "**Cost:** Covered by your health insurance."
            ]
        },
        { type: "h2", text: "2. Car Accident" },
        {
            type: "p",
            text: "**Step 1:** Check for injuries. Call 112 if anyone is hurt."
        },
        {
            type: "p",
            text: "**Step 2:** Turn on hazard lights. Place warning triangles 50m behind your car (required by law)."
        },
        {
            type: "p",
            text: "**Step 3:** Exchange details with other driver(s):"
        },
        {
            type: "ul",
            items: [
                "Full name, phone, address",
                "Insurance company & policy number",
                "License plate, car make/model",
                "Driver's license number",
                "Photos: Damage, accident scene, road conditions"
            ]
        },
        {
            type: "p",
            text: "**Step 4:** If no injuries AND both cars drivable, you can settle it yourselves or call police (non-emergency line **110**) to file a report."
        },
        {
            type: "p",
            text: "**Step 5:** Report to your insurance company ASAP (within 24-48 hours)."
        },
        { type: "h2", text: "3. Theft (Bike, Phone, Wallet, Passport)" },
        {
            type: "p",
            text: "**Immediately:** File a police report (**Anzeige**) at your local police station or online."
        },
        {
            type: "ul",
            items: [
                "**What to bring:** ID, description of the item, where/when it was stolen.",
                "**Filing:** Takes 15-30 minutes. You get a case number (**Aktenzeichen**).",
                "**For insurance:** Keep the police report. Insurance claims require it.",
                "**Phone theft:** Call your provider immediately to block the SIM. Report to police.",
                "**Bike:** Germany has registry for bikes. File report, file insurance claim if applicable."
            ]
        },
        { type: "h2", text: "4. Lost or Stolen Passport" },
        {
            type: "p",
            text: "**Action: Report to your embassy/consulate IMMEDIATELY.** Don't delay."
        },
        {
            type: "ul",
            items: [
                "**Why:** Someone can forge documents using your passport.",
                "**Find your embassy:** Google '[Your country] Embassy Berlin' (or your city).",
                "**What they provide:** Emergency travel document (valid for one trip home) or new passport (takes 1-2 weeks).",
                "**Cost:** €50-100+ depending on country.",
                "**Also file:** Police report in Germany (case number needed for some countries)."
            ]
        },
        { type: "h2", text: "5. Lost Residence Permit (Aufenthaltstitel)" },
        {
            type: "ul",
            items: [
                "**File police report** the same day and keep the incident number (Aktenzeichen).",
                "**Email your local Ausländerbehörde** with: passport copy, scan/photo of the lost permit (if available), police report number, and your address. Ask for a replacement appointment (Ersatzkarte/Neuerteilung).",
                "**Carry passport + police report** as interim proof if asked for ID until the new card arrives."
            ]
        },
        { type: "h2", text: "6. Lost Bank Card" },
        {
            type: "p",
            text: "**Call immediately:** **116 116** (German bank card blocking hotline). Available 24/7, free."
        },
        {
            type: "ul",
            items: [
                "**What happens:** Card is blocked within minutes. New card arrives in 1 week.",
                "**For Revolut/online banks:** Use their app to freeze card immediately.",
                "**Fraud:** Contact your bank if unauthorized charges appear. German law protects you."
            ]
        },
        { type: "h2", text: "7. Workplace Injury (Occupational Accident)" },
        {
            type: "p",
            text: "**At work:** Inform your supervisor IMMEDIATELY, even if it seems minor."
        },
        {
            type: "ul",
            items: [
                "**Why:** All workplace injuries are reportable to workers' compensation (Berufsgenossenschaft).",
                "**Process:** Your employer files a report. You receive a case number.",
                "**Medical:** Get treated at your doctor or hospital. Costs covered by workers' comp.",
                "**Sick leave:** If you can't work, you're compensated (70% of salary typically).",
                "**Long-term:** If injury causes permanent damage, you may receive additional compensation."
            ]
        },
        { type: "h2", text: "8. Police Non-Emergency (110)" },
        {
            type: "p",
            text: "**Use 110 for:** Theft reports, harassment, property damage (not life-threatening)."
        },
        {
            type: "ul",
            items: [
                "**Response time:** 30 minutes to several hours depending on severity.",
                "**Filing report:** Free, required for insurance claims.",
                "**Language:** English speakers available in most stations, but bring a translation app."
            ]
        }
    ],
    goldenRule: "112 = life emergency. 110 = police non-emergency. 116 117 = urgent doctor. Keep these numbers saved.",
    steps: [
        {
            title: "Save Emergency Numbers",
            text: "112 (ambulance), 110 (police), 116 117 (urgent doctor), 116 116 (lost card)",
            action: "Save in phone contacts now.",
        },
        {
            title: "Know Your Embassy",
            text: "Find your country's embassy in Berlin.",
            action: "Save their address and phone.",
            readMore: [{ title: "German Foreign Office (Embassy List)", url: "https://www.auswaertiges-amt.de/en", source: "official" }],
        },
        {
            title: "Get Police Station Address",
            text: "Find your local **Polizeipräsidium**.",
            action: "Save location in phone.",
            readMore: [{ title: "Police Station Finder", url: "https://www.polizei.de/", source: "official" }],
        },
    ],
    readMore: [
        { title: "Emergency Numbers Germany", url: "https://www.make-it-in-germany.com/en/health-care/dealing-emergencies/", source: "official" },
        { title: "German Police (Official)", url: "https://www.polizei.de/", source: "official" },
    ],
    downloads: [{ title: "Emergency Numbers Cheatsheet", url: null }],
    videos: [{ title: "What to Do in an Accident (German)", url: "https://youtu.be/example123" }],
    tags: ["emergency", "accident", "police", "theft", "safety"],
};

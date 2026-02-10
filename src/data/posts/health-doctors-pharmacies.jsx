import { Heart } from "lucide-react";
import img16 from '../../ambulance-970037.jpg';

export default {
    slug: "health-doctors-pharmacies",
    title: "Health & Doctors: Navigating German Healthcare",
    subtitle: "Finding a doctor, making appointments, understanding prescriptions",
    stage: "Health",
    readTime: 10,
    icon: <Heart size={24} />,
    color: "from-red-500 to-rose-600",
    shadow: "shadow-red-500/20",
    accent: "text-red-600",
    backgroundImage: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=2000",
    verified: "2026-02-10",
    summary: "How to find a doctor (Hausarzt), make appointments, get prescriptions, and understand the pharmacy system.",
    vibeCheck: "German healthcare is excellent, but the process is different. Here's the map.",
    content: [
        {
            type: "p",
            text: "Germany has one of the world's best healthcare systems. But it's bureaucratic. You need a **Hausarzt** (family doctor) and understanding the referral system saves time and money."
        },
        { type: "h2", text: "1. Finding a Doctor: Hausarzt (Family Doctor)" },
        {
            type: "p",
            text: "You MUST register with a Hausarzt (family doctor). This is your primary care doctor. When you need a specialist, your Hausarzt refers you. Going directly to a specialist without a referral is expensive and often blocked."
        },
        {
            type: "ul",
            items: [
                "**Search:** Use [Jameda.de](https://www.jameda.de) or [Arztsuche der KBV](https://www.arztsuche-bw.de) to find doctors near you. Filter by: 'Takes new patients' (Nimmt neue Patienten auf), language spoken.",
                "**Call & book:** Ring the doctor's office. They'll ask: Name, date of birth, insurance company. Book an appointment. This can take weeks—call early and ask for 'Terminsprechstunde' (appointment hours).",
                "**First visit:** Bring your insurance card (Versichertenkarte) and ID. The doctor will do a general check-up.",
                "**If sick now:** Call your local **Ärztlicher Bereitschaftsdienst** (emergency doctor service) at **116 117**. It's free, available 24/7, and they'll direct you to an available doctor or hospital."
            ]
        },
        { type: "h2", text: "2. Appointments: The System" },
        {
            type: "p",
            text: "German doctors operate on strict scheduling. **Sprechstunde** (office hours) are usually 2 hours in the morning and 2 in the afternoon. You can't just walk in."
        },
        {
            type: "ul",
            items: [
                "**How to book:** Call during office hours. Many doctors now use online booking (check their website).",
                "**Wait times:** Expect 4-8 weeks for a regular appointment. For urgent issues, ask for **Akutsprechstunde** (acute/urgent slot). Doctors always reserve slots for urgent cases.",
                "**Bring:** Insurance card, ID, and a list of symptoms written in German (helps with language barrier).",
                "**If you're sick:** Don't go to the doctor's office sick (you'll infect others). Call instead. They'll either give phone advice or send a doctor to your home (**Hausbesuch**)."
            ]
        },
        { type: "h2", text: "3. Prescriptions & Pharmacies (Apotheke)" },
        {
            type: "p",
            text: "Your doctor will write a prescription (**Rezept**) if you need medication. Take it to any **Apotheke** (pharmacy)."
        },
        {
            type: "ul",
            items: [
                "**Cost:** Some medications are free or cheap (~€5 co-pay). Others cost more. Ask the pharmacist for the price before paying.",
                "**Where to find:** Google 'Apotheke near me' or ask your doctor. Most neighborhoods have 2-3.",
                "**Generic vs. Brand:** Ask for the **Generikum** (generic version). It's cheaper and identical.",
                "**Over-the-counter:** Aspirin, cold medicine, band-aids don't need prescriptions. Available at any pharmacy.",
                "**Emergency pharmacy:** After-hours? Google 'Notfallsprechstunde Apotheke' or look for a pharmacy window showing which pharmacy is open (they rotate)."
            ]
        },
        { type: "h2", text: "4. Dentist (Zahnarzt)" },
        {
            type: "p",
            text: "Public insurance covers cleanings and basic work. But German dentists are expensive compared to some countries. Find one using [Jameda.de](https://www.jameda.de)."
        },
        {
            type: "p",
            text: "**Cosmetic work** (whitening, veneers) is NOT covered. Expect to pay out-of-pocket."
        },
        { type: "h2", text: "5. Prescription Glasses & Contacts" },
        {
            type: "p",
            text: "See an **Optometrist** (optical doctor, not a regular doctor) for an eye exam. Insurance doesn't fully cover, but cost is around €40-80 for exam + basic glasses."
        },
        {
            type: "p",
            text: "**Where:** [Apollo Optik](https://www.apollo.de), [Fielmann](https://www.fielmann.de) (large chains), or local optometrists. Expect 1-2 weeks for glasses."
        }
    ],
    goldenRule: "Register with a Hausarzt ASAP. For emergencies, call 116 117. Always ask pharmacists for generic versions.",
    steps: [
        {
            title: "Find a Hausarzt",
            text: "Search Jameda for doctors near you.",
            action: "Call to register.",
            readMore: [{ title: "Jameda - Doctor Search", url: "https://www.jameda.de", source: "tool" }],
        },
        {
            title: "Book First Appointment",
            text: "Call and book a check-up.",
            action: "Put date in calendar.",
            readMore: [],
        },
        {
            title: "Save Emergency Numbers",
            text: "Save 116 117 (Medical) and 112 (Life threatening).",
            action: "Add to contacts.",
            readMore: [{ title: "116 117 Info", url: "https://www.116117.de/de/index.php", source: "official" }],
        },
    ],
    readMore: [
        { title: "Apotheken Umschau (Pharmacy Finder)", url: "https://www.apotheken-umschau.de/apotheken-umschau/apotheken-finder/", source: "tool" },
    ],
    downloads: [],
    videos: [],
    tags: ["health", "doctor", "medicine", "pharmacy"],
};

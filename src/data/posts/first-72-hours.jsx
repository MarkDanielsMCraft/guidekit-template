import { Wifi } from "lucide-react";
import arrivalImg from '../../assets/images/arrival.png';

export default {
    slug: "first-72-hours",
    title: "First 72 Hours",
    subtitle: "Airport to apartment: what actually matters",
    stage: "Survival",
    readTime: 12,
    icon: <Wifi size={24} />,
    color: "from-blue-600 to-indigo-600",
    shadow: "shadow-blue-500/20",
    accent: "text-blue-600",
    verified: "2026-02-10",
    backgroundImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2000",
    summary: "Your first 72 hours stripped to essentials: internet, transport, and the apps you actually need.",
    vibeCheck: "You just landed. You are tired, your luggage is heavy, and you don't have internet. Take a deep breath. We'll sort this out.",
    content: [
        {
            type: "p",
            text: "You just landed in Germany — excited but exhausted. One warning: airports are designed to make you spend money fast. Let’s avoid the expensive traps and focus only on what you truly need in the first 72 hours."
        },

        { type: "h2", text: "1. The Internet Problem" },

        {
            type: "p",
            text: "In the arrivals area, you will see shops selling SIM cards. **Avoid them.** They usually sell tourist SIM deals that are overpriced (for example: 50€ for 10GB, sometimes even more). You do not need that. Use the free airport Wi-Fi first to download the essential apps listed below."
        },

        {
            type: "p",
            text: "A very good local option for students, trainees, refugees, and newcomers is **Aldi Talk**. It is a prepaid SIM service from the Aldi supermarket chain. It is cheap (starter pack around 10€), has no long contract, and is easy to find because Aldi supermarkets exist in almost every German city."
        },

        {
            type: "ul",
            items: [
                "**Where to buy:** Any **Aldi Süd** or **Aldi Nord** supermarket. In many big cities, there is an Aldi close to main train stations. Sometimes there is also one near airports (but not always inside the airport).",
                "**How to register (mandatory in Germany):** You must verify your identity before your SIM works. This is required by law. You can register using the [Aldi Talk app](https://www.alditalk.de/alditalk-app) or in your [browser e.g., Chrome](https://service.alditalk.de/simcard/register) and complete a **Video Ident** call. You need good lighting, a clear camera view, and stable internet. If Video Ident does not work, you can use **PostIdent** at a **Deutsche Post** office (it takes longer, but it works reliably).",
                "**Troubleshooting:** If the video call fails (often due to weak connection), do PostIdent at any Deutsche Post office. Sometimes there is a small fee depending on the procedure.",
                "**Cost:** The starter set is about **10€** and usually includes the SIM plus around **10€ credit**. Monthly plans start around 8.99€. As of **January 2026**, there is also an **unlimited plan around 9.99€** (check the current Aldi Talk options in the app/website before choosing)."
            ]
        },

        { type: "h2", text: "2. Essential Apps: Maps, Translator & Transport" },

        {
            type: "p",
            text: "Before you leave the airport Wi-Fi, download these apps. They will save you time, prevent confusion, and help you move around safely."
        },

        {
            type: "ul",
            items: [
                "(Google Maps)[https://maps.google.de]: Works very well in Germany. It shows public transport routes, walking routes, and often the correct platforms. If you are new, it can feel confusing at first. Simple method: type your destination address, tap “Directions,” and follow the steps exactly.",
                "(DeepL)[https://www.deepl.com/en/translator]: This is not the same as Google Translate. DeepL is very strong for German and often sounds more natural. You can translate text and use the camera for signs or menus. The free version is useful, and some features can work offline after setup.",
                "(DB Navigator (Deutsche Bahn))[https://www.bahn.de]: This is the official German railway app. It shows trains, buses, trams, and metro options. It shows the platform (Gleis), departure times, and delays. You can also buy tickets in the app. Many local city transport systems are included, so you can use it for buses and metros too. If DB Navigator feels complicated, you can still use Google Maps for directions and use DB Navigator mainly for tickets and train details.",
                "(Integreat App)[https://integreat-app.de/en/]:A newcomer app for many German cities. It gives city-specific information (registration, housing, healthcare, rules). Download it, select your city, and use it as your local guide.",
                "(Buy the Deutschlandticket)[https://www.bahn.de/angebot/regio/deutschland-ticket?cid=03_GSE_G21917_0725_RE_SALE_ZENTR_D-Ticket-Always-On&gad_source=1&gad_campaignid=22815299961&gbraid=0AAAAADrstizQJWcN7yBzkPRVtP5pKNyIv&gclid=Cj0KCQiAp-zLBhDkARIsABcYc6sob6BAxcyiaPjU6nVqdQRUYkjrBLcXwrzE-1hH2HFEdbohL1pB_IMaAj52EALw_wcB]: A nationwide transport ticket costing **€63 per month** (2026 price). It allows unlimited travel on **local and regional** trains and public transport across Germany (but not high-speed ICE/IC trains). You can buy it in DB Navigator or at stations or from the [DB website]. It is valid from the 1st of each month. If you arrive mid-month, consider buying it for the next full month. Note: It is a monthly subscription, so remember to cancel earlier if you no longer need it.",
                "**Student/Trainee discount (very important):** Before paying the full **€63**, ask your university, school, Ausbildung provider, or employer about a discounted ticket (often called an **Ermäßigtes Deutschlandticket**). In many places (examples include Bavaria and NRW), trainees/students may pay around **€29 per month**. That can save you over **€400 per year**."
            ]

        },
        { type: "h2", text: "3. Getting From Airport to City: Transport vs Taxi" },

        {
            type: "p",
            text: "This is where many newcomers unintentionally waste their first 50€–80€ in Germany without realizing it. A taxi from a major airport (Düsseldorf, Berlin, Munich, Frankfurt) to the city center usually costs between 50€ and 80€, depending on distance, traffic, and time of day. In contrast, a public transport journey using trains typically costs around 6€–12€ for the same route. In Germany, trains are generally safe, clean, reliable, and used by everyone, including wealthy locals and professionals. For this reason, you should avoid taking a taxi unless there are extraordinary circumstances such as emergencies, serious health issues, or situations where public transport is genuinely unavailable."
        },
        {
            type: "p",
            text: "**Here's exactly what to do:** Use the DB Navigator app (you just downloaded it). Type your airport name, or simply select 'current position', and then enter your destination address. The app will calculate and show you the cheapest and fastest route available, which is usually a regional train (S-Bahn) followed by a metro (U-Bahn) or a bus. If it seems confusing at first, switch to [Google Maps](https://maps.google.de) and perform the same search there, as many newcomers find it easier to understand in the beginning."
        },

        { type: "h2", text: "3.5 Transport Etiquette (Avoid Fines)" },

        {
            type: "ul",
            items: [
                "**Escalators:** Stand on the right, walk on the left. Blocking the left side often leads to people shouting or expressing frustration, especially during busy hours.",
                "**Trains/Trams:** Let people exit first. Do not rush in. Always validate paper tickets where required, because failure to do so can result in fines during ticket inspections.",
                "**Bike lanes:** NEVER walk or stand in red/asphalt bike lanes. Cyclists have right of way and will ring bells or yell if the lane is blocked."
            ]
        },

        { type: "h2", text: "4. Your First Weekend (The Sunday Rule)" },

        {
            type: "p",
            text: "If you arrive on a Saturday evening or a Sunday, you must know this: **Germany closes on Sundays.** Supermarkets, pharmacies, and clothing stores are closed because Sunday is officially the 'Ruhetag' (rest day). If you do not buy food on Saturday, you may find yourself without access to groceries until Monday."
        },
        {
            type: "p",
            text: "**The Loophole:** Supermarkets inside big train stations (Hauptbahnhof) and airports are allowed to stay open on Sundays. If you land on Sunday, buy bread, water, juice, and other basics *at the airport supermarket* (usually Rewe or Edeka) before you leave the terminal."
        },

        { type: "h2", text: "5. Local Basics: Water, Pfand, Mailbox" },

        {
            type: "ul",
            items: [
                "**Tap water is safe:** Germany's tap water is drinkable everywhere unless marked otherwise. You can safely refill bottles and save money instead of buying bottled water.",
                "**Pfand (bottle deposit):** Many plastic and glass bottles have a €0.25 deposit. Return them to the machine in supermarkets (Pfandautomat) and get your deposit back at checkout.",
                "**Name on mailbox:** Add your exact name to the letter box (briefkasten) immediately. Without it, your official mail (Anmeldung, bank, residence card) is often returned to the sender."
            ]
        },

        { type: "h2", text: "6. Wohnungsgeberbestätigung" },

        {
            type: "p",
            text: "**The Timeline:** Within 2 weeks of moving into your permanent address, you must register. If you do not do this, you are technically in violation of German law and may face fines."
        },
        {
            type: "p",
            text: "When you arrive at your housing, ask your landlord or host for the **Wohnungsgeberbestätigung** (Landlord Confirmation). This is a single sheet of paper confirming that you moved in. You **cannot** register your address at the city office without this document, and your rental contract alone is *not* sufficient. If you do not receive one, print this [PDF Template](https://formular-service.augsburg.de/intelliform/forms/stadt_augsburg/extern/330/extern/330/meldewesen/wohnungsgeberbestaetigung/download;jsessionid=uZF3OT69kpWC24HWyAC_aL-HL-MeLo73RHTISBvd.IF0) and ask the landlord or host to sign it."
        },

        { type: "h2", text: "7. Documents to keep on you" },

        {
            type: "p",
            text: "For the first days in Germany, you should carry your passport and a copy of your entry visa or residence permit. Non EU scholars are sometimes asked for proof at hotels, banks, and during train travel. Keep a clear photo set on your phone and one printed copy in your bag, but handle all original documents with extreme care to avoid loss."
        },
        {
            type: "ul",
            items: [
                "**Carry daily:** Passport (not always due to risks of losing it), Residence Permit (it can be from your home country), Student ID.",
                "**Keep safe:** Original admission letter or employment contract, identity documents, and your university or hospital contact details. Scan everything and save it in secure cloud storage.",
                "**Proof of funds:** If a bank or landlord asks, show your latest bank statement, scholarship letter, or work/training contract.",
                "**Liability insurance:** Sometimes landlords ask for proof of liability insurance (Haftpflichtversicherung). It protects you if you accidentally cause damage to someone else or their property and usually costs around 3–5€ per month. It is not mandatory, but if required, you can apply via platforms like [Get Safe](https://www.hellogetsafe.com/en-de)."
            ]
        },

        { type: "h2", text: "8. Cash and cards in your first week" },

        {
            type: "p",
            text: "Germany still uses cash more than many other countries. In January 2026, many bakeries and small shops accept cards, but not all of them do. For this reason, it is wise to keep at least 20–50€ in cash during your first week."
        },
        {
            type: "p",
            text: "If you do not yet have a German bank account, you can use an international debit card to withdraw cash from ATMs. Avoid airport currency exchange counters, as their exchange rates are usually very poor."
        },

        { type: "h2", text: "9. What to do on day two" },

        {
            type: "p",
            text: "Once you have internet access and transport sorted, you should focus on the next steps that make daily life easier. Book your Anmeldung appointment, check your university or workplace onboarding emails, and locate the nearest supermarket and pharmacy, as these three actions reduce stress very quickly."
        },
        {
            type: "ul",
            items: [
                "**Book the Anmeldung:** Appointment slots often appear early in the morning. Check the city website daily. Some cities do not require appointments, and landlords can provide guidance.",
                "**Know the offices:** Bürgeramt = City Hall for address registration (Anmeldung). Ausländerbehörde = Foreigners Office for residence permits. These are different offices, with separate appointments, and the Ausländerbehörde is usually slower.",
                "**Confirm onboarding time:** Email your department or training office and confirm your first day and required documents.",
                "**Stock basics:** Water, bread, simple meals, and any daily medication."
            ]
        },

        { type: "h2", text: "10. Quick reality check for non EU scholars" },

        {
            type: "p",
            text: "As of January 2026, non EU scholars must respect the visa purpose and registration rules. If you entered Germany for study or training, you must stick to that purpose unless you have officially received permission from the relevant immigration office (Ausländerbehörde). Working outside the visa purpose can result in fines, legal consequences, or deportation."
        },

    ],
    goldenRule: "Handle SIM, transport, and Anmeldung appointments first—these unlock everything else in your first week.",
    steps: [
        {
            title: "Get a German SIM",
            text: "Buy and activate a prepaid SIM (e.g., Aldi Talk) and finish VideoIdent/PostIdent.",
            action: "Complete SIM activation within 24 hours of arrival.",
            readMore: [
                { title: "Aldi Talk App", url: "https://www.alditalk.de/alditalk-app", source: "official" },
            ],
        },
        {
            title: "Sort Transport",
            text: "Download DB Navigator and decide whether to start a Deutschlandticket on the 1st of next month.",
            action: "Buy a single ticket now; set reminder to start the €63 Deutschlandticket on the 1st.",
            readMore: [
                { title: "Deutschlandticket info", url: "https://www.bahn.de/angebot/regio/deutschland-ticket", source: "official" },
            ],
        },
        {
            title: "Book Anmeldung",
            text: "Check your city Bürgeramt portal daily for an Anmeldung slot; many release early mornings.",
            action: "Book the earliest available appointment and screenshot the confirmation.",
            readMore: [],
        },
    ],
    readMore: [
        { title: "Make it in Germany – First Steps", url: "https://www.make-it-in-germany.com/en/visa-residence/first-steps", source: "official" },
    ],
    downloads: [],
    videos: [],
    tags: ["arrival", "sim", "internet", "transport", "anmeldung", "deutschlandticket", "first-days"],

};

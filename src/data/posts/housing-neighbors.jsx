import { Home as HomeIcon } from "lucide-react";
import housingImg from '../../assets/images/housing.png';
import { LINKS } from '../../constants/config';

export default {
    slug: "housing-neighbors",
    title: "Housing & Finding a Flat",
    subtitle: "Finding a place to live and not spending all your money on IKEA",
    stage: "Housing",
    readTime: 12,
    icon: <HomeIcon size={24} />,
    color: "from-orange-500 to-amber-600",
    shadow: "shadow-orange-500/20",
    accent: "text-orange-600",
    backgroundImage: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=2000",
    verified: "2026-02-10",
    summary: "Platform reviews (WG Gesucht), free furniture hacks (Kleinanzeigen), and the house rules that matter.",
    vibeCheck: "Flats are tight and expensive. But furnishing them cheap? That's doable. Here's how.",
    content: [
        {
            type: "p",
            text: "Finding housing in Germany is highly competitive, especially in university cities and larger urban areas. You need to act quickly, respond professionally, and understand where to look. [WG-Gesucht.de](https://www.wg-gesucht.de/) is THE main platform for shared flats (WGs) and student housing. 'WG' stands for **Wohngemeinschaft**, which means a shared living community. This is how most young people in Germany live, usually with three to four people sharing one apartment, where everyone has their own private bedroom but shares common spaces like the kitchen and bathroom."
        },
        {
            type: "p",
            text: "**Why WGs?** WGs are usually much cheaper than renting a full apartment alone, and they are often faster to move into because rooms become available more frequently. Many landlords also prefer WGs because the financial risk is spread across several tenants. However, it is important to understand that a WG is **not** a hotel. Living in a WG means shared responsibility, including cleaning schedules, respecting quiet hours, coordinating bathroom and kitchen use, and being considerate of other people’s routines and working hours."
        },
        {
            type: "p",
            text: "**How to write a good message:** Landlords and WG members often receive 50 or more messages for a single listing. To stand out, your message should be polite, clear, and professional. Always include your name, what you do (student, trainee, employee), your planned move-in date, and confirmation that you have stable income or financial support. Ask politely if you can view the apartment. Avoid long personal stories unless requested. Keeping the message short, structured, and respectful significantly increases your chances of getting a reply. Always first carefully read the listing details and follow any specific instructions provided by the landlord or WG members."
        },
        { type: "h2", text: "1.5 The Reality of Foreign Names" },
        {
            type: "p",
            text: "The housing market in Germany is extremely competitive, and unfortunately, discrimination does exist. Applicants with non-German names sometimes receive fewer responses. **Strategy:** Write your messages in German (use DeepL for translation), include a friendly but professional profile photo, and clearly mention your scholarship, job, or training status in the *first sentence* to demonstrate financial stability and seriousness."
        },
        {
            type: "p",
            text: "**Red flags—NEVER do this:** Never send money to foreign bank accounts before seeing the apartment in person. Never pay a so-called 'holding deposit' without a signed contract. Never accept 'video viewings only' without a real visit. If an offer feels too cheap, too fast, or too easy, it is almost certainly a scam."
        },
        {
            type: "p",
            text: "**For solo apartments:** Use [ImmobilienScout24.de](https://www.immobilienscout24.de/) for the largest number of listings (often more expensive), or [Kleinanzeigen](https://www.kleinanzeigen.de/) for cheaper options, which can be legitimate but sometimes require extra caution."
        },
        { type: "h2", text: "2. Furnishing for Free or Very Cheap: Kleinanzeigen" },
        {
            type: "p",
            text: "This surprises many newcomers: most apartments in Germany are rented **completely empty**. This often means no furniture, no kitchen, no curtains, and sometimes not even light fixtures. Many newcomers panic and assume they must spend thousands of euros at IKEA. This is not necessary."
        },
        {
            type: "p",
            text: "**The Secret:** Use [Kleinanzeigen.de](https://www.kleinanzeigen.de/), which is Germany’s version of Craigslist. Search specifically for the category **'Zu verschenken'**, which means 'to give away for free'. Germans frequently give away perfectly usable furniture when moving. You can often find sofas, beds, tables, shelves, dishes, and kitchen items at no cost, as long as you can pick them up yourself."
        },
        {
            type: "p",
            text: "**How it works:** Create a free account on Kleinanzeigen. Search within the furniture category and filter by 'Zu verschenken'. When messaging, clearly state that you can pick up the item **this week**, as Germans value quick and reliable communication. Many people will agree simply because they want the item gone. **Note:** There are also streets or neighborhoods where people leave furniture and other items along streets for free pickup."
        },
        {
            type: "p",
            text: "**Reality check:** You may still need to spend around 200–500€ on important items like a good bed or mattress, because your health matters. However, for most other items, used or free furniture is more than sufficient. When buying, search for 'Gebraucht' (used) first. Germans tend to take very good care of their belongings, so used furniture is often in excellent condition."
        },
        { type: "h2", text: "3. The Deposit (Kaution): Your Safety Net" },
        {
            type: "p",
            text: "In Germany, landlords usually require a security deposit (**Kaution**) of two to three months’ rent. This is completely normal and legal. **Important:** This deposit remains your money. The landlord is legally required to place it in a separate, interest-bearing account and not mix it with personal funds. Always request and keep a written receipt."
        },
        {
            type: "p",
            text: "**What 'warm rent' means:** Rent in Germany is divided into 'cold rent' (just the apartment) and 'warm rent' (apartment plus utilities such as heating, electricity, water, and garbage depending on your landlord). Deposits are calculated based on warm rent, meaning utility costs are included in the deposit amount."
        },
        {
            type: "p",
            text: "**When you move out:** You are entitled to get your deposit back, minus deductions for actual damages beyond normal wear and tear. The landlord must return it within one month after you move out. If this does not happen, or if unfair deductions are made, you can legally challenge it. Taking photos at move-in and keeping receipts protects you."
        },
        { type: "h2", text: "3.5 Electricity & Internet Setup (Don't Overpay)" },
        {
            type: "p",
            text: "If you do not actively choose an electricity provider, you are automatically placed into **Grundversorgung**, which is the default supply and usually the most expensive option. You should choose an electricity contract yourself, often with a 12-month duration, and set a monthly prepayment (**Abschlag**) to avoid large surprise bills later. Electricity bills are often settled quarterly, so budget accordingly. Internet contracts are separate (DSL or cable). Always register the contract in your name and set a reminder to cancel at least one month before the end to avoid automatic renewal. Always ask your landlord first if all this is included in your rent."
        },
        { type: "h2", text: "4. House Rules: Quiet Hours & Trash Separation" },
        {
            type: "p",
            text: "Germany enforces strict rules around noise. **Ruhezeit** (quiet hours) are legally recognized in most residential buildings and must be respected."
        },
        {
            type: "ul",
            items: [
                "**Weekdays:** From 22:00 (10 PM) to 06:00 (6 AM), loud music, drilling, vacuuming, or parties are not allowed.",
                "**Sundays & holidays:** Quiet is required all day. This is both a legal and cultural rule, and Germans take it very seriously.",
                "**Violation:** If neighbors complain, landlords may issue fines or even terminate your contract. Repeated violations can result in eviction."
            ]
        },
        {
            type: "p",
            text: "**Trash separation is not optional.** Recycling is taken very seriously in Germany, and buildings provide multiple color-coded bins. Always check the labels on the bins in your building, as rules can vary slightly by municipality."
        },
        {
            type: "ul",
            items: [
                "**Blue:** Paper and cardboard",
                "**Yellow/Orange:** Packaging (plastics, aluminum, metal cans)",
                "**Brown/Green:** Organic waste (food scraps, garden waste)",
                "**Black/Grey:** Residual waste (everything else)",
                "**Clear glass/Colored glass:** Separate glass collection (not always available)"
            ]
        },
        {
            type: "p",
            text: "**Why does this matter?** Incorrect trash separation can lead to fines from building management. Additionally, neighbors notice these things closely. If you are unsure where an item belongs, use [Mülltrennung Wirkt](https://www.muelltrennung-wirkt.de/) for guidance."
        }
    ],
    goldenRule: "Use 'Zu verschenken' on Kleinanzeigen to save thousands of Euros on furniture.",
    steps: [
        {
            title: "Find Housing",
            text: "Create a profile on WG Gesucht.",
            action: "Start searching.",
            readMore: [{ title: "WG Gesucht", url: "https://www.wg-gesucht.de/", source: "tool" }],
        },
        {
            title: "Furnish for Free",
            text: "Don't buy new. Use the 'Zu verschenken' category. Or check the streets.",
            action: "Download Kleinanzeigen.",
            readMore: [
                { title: "Kleinanzeigen App", url: "https://www.kleinanzeigen.de/", source: "tool" }],
        },
        {
            title: "Check Trash Rules",
            text: "Look at the bins in your backyard.",
            action: "Print the sorting guide.",
            readMore: [{ title: "Mülltrennung Guide (Official)", url: LINKS.trashGuide, source: "official" }],
        },
    ],
    readMore: [{ title: "Rundfunkbeitrag (TV Tax)", url: "https://www.rundfunkbeitrag.de/formulare", source: "official" }],
    videos: [{ title: "How to register for Rundfunkbeitrag", url: "https://youtu.be/fjv1I2TWXQM?si=sNtuR3ojhAso2TRw" }],
    tags: ["housing", "rundfunkbeitrag", "rules", "furniture"],
};

import { Landmark } from "lucide-react";
import bureaucracyImg from '../../assets/images/bureaucracy.png';

export default {
    slug: "money-paperwork",
    title: "Paperwork & Banks",
    subtitle: "Legal identity, IBAN, insurance, and fees",
    stage: "Bureaucracy",
    readTime: 15,
    icon: <Landmark size={24} />,
    color: "from-emerald-500 to-teal-600",
    shadow: "shadow-emerald-500/20",
    accent: "text-emerald-600",
    backgroundImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2000",
    verified: "2026-02-10",
    summary: "Banks, registration, taxes, insurance—we break down the catch-22s and show you the smart shortcuts.",
    vibeCheck: "Yes, it feels impossible. You need a bank for rent, but they want an address. We're gonna untangle this.",
    content: [
        {
            type: "p",
            text: "Germany functions through paperwork, official letters, and clearly structured administrative systems, which can feel overwhelming, slow, or even frightening when you first arrive. However, the system itself is not chaotic or disorganized. Once you understand how the different parts connect to each other, the process becomes predictable and manageable. To function normally in Germany, you need three main things: (1) a registered address (**Anmeldung**), (2) a German bank account with an IBAN, and (3) a Tax ID. The main difficulty for newcomers is that these three requirements often depend on one another, which creates what feels like a never-ending bureaucratic loop at the beginning."
        },

        { type: "h2", text: "1. Banking: Which Bank Should You Choose?" },

        {
            type: "p",
            text: "A German IBAN is required for two very important reasons. First, your employer needs it to pay your salary. Second, your landlord usually requires it so you can pay rent by bank transfer. Unfortunately, opening a bank account as a newcomer is not always easy, because many banks expect documents that you may not yet have, such as your Anmeldung. This is one of the most common problems people face in their first weeks in Germany."
        },

        {
            type: "ul",
            items: [
                "[Sparkasse](https://www.sparkasse.de/) / [Volksbank](https://www.volksbank.de/) (Traditional Banks): These are among the most trusted and stable banks in Germany and have physical branches in almost every neighborhood. Many people feel safer using them because they can speak to staff in person. However, these banks often charge monthly account fees, especially for customers over 25 years old, although this varies by branch. They also usually require proof of registration (**Anmeldung**) before opening an account, which creates a classic chicken-and-egg situation for newcomers.",
                "[Commerzbank](https://www.commerzbank.de/) / [Deutsche Bank](https://www.deutsche-bank.de/): These are large, well-known banks with solid reputations. The challenge for newcomers is that they sometimes check your **SCHUFA** credit score. If you are new to Germany, you normally have no credit history at all, which can lead to rejection even if you have money.",
                "[N26](https://n26.com/) (Online Bank): This bank allows you to open an account online, provides a German IBAN, and usually has no monthly fees. It works well for many people, but identity verification sometimes fails with non-EU passports, which can be frustrating.",
                "[C24](https://c24.de/) (Online Bank): Similar to N26, with a modern app and competitive features. It generally supports international documents better, but some newcomers still report verification issues.",
                "[Revolut](https://www.revolut.com/) (Online Bank): Similar to N26 and C24, but in practice often more reliable for international documents. After verification, you receive a valid German IBAN. The app is available in multiple languages, including English, and **no Anmeldung is required**, which makes it especially useful during your first weeks in Germany."
            ]
        },
        {
            type: "p",
            text: "**My honest recommendation:** Open [Revolut](https://revolut.com/referral/?referral-code=markdaniels_m!JAN1-26-AR-H1&geo-redirect) first. Enter your German phone number, download the app, log in, and carefully enter your personal details, including the address where you are currently living. Complete the video verification using your passport. Once verified, your account becomes fully usable and you receive your German IBAN. You can then give this IBAN to your employer and landlord (only when required—never share your bank details unnecessarily). After you complete your Anmeldung, you may optionally open a Sparkasse or Volksbank account if you want a physical bank branch as a backup, but for most newcomers, Revolut alone is fully sufficient."
        },
        {
            type: "p",
            text: "You can open a free Revolut account using this link: [Open Revolut Account](https://revolut.com/referral/?referral-code=markdaniels_m!JAN1-26-AR-H1&geo-redirect)."
        },

        {
            type: "h2",
            text: "1.1 Digital Access & TAN Codes (Do NOT bin the letter)"
        },

        {
            type: "p",
            text: "German banks usually combine traditional paper mail with modern app-based security. After opening an account, you typically receive a physical letter by post containing a QR code or activation code (often called an 'Aktivierungscode'), along with instructions to install a TAN app that generates one-time passwords for secure transactions. This letter is extremely important. **Do not throw it away thinking it is advertising or junk mail.** You must scan this QR code to activate online transfers. If you lose or discard it, you may be locked out of online banking for several days while waiting for a replacement letter. This is commonly done by banks like Sparkasse, Volksbank, Commerzbank, and Deutsche Bank."
        },


        { type: "h2", text: "1.5 The Visa Timer (Ausländerbehörde)" },

        {
            type: "p",
            text: "Entry visas are usually valid for three to one year. Before this period ends, you must convert your visa into a residence permit (**Aufenthaltstitel**). Because waiting times can be very long, it is strongly recommended to apply early and book your Ausländerbehörde appointment immediately after arriving in Germany."
        },

        {
            type: "p",
            text: "**Don't panic:** If your appointment date is after your visa expires, you are still legally allowed to stay **as long as you applied before the expiry date, usually 4 to 6 weeks earlier**. In this case, you will receive a **Fiktionsbescheinigung**, which temporarily extends your legal stay until your official appointment. Always keep this document safe, as it proves that your stay is legal."
        },

        {
            type: "p",
            text: "**Shortcut:** Bürgeramt = City Hall for address registration (Anmeldung). Ausländerbehörde = Foreigners Office for residence permits. These are different offices with different booking systems, and the Ausländerbehörde usually works much more slowly."
        },

        { type: "h2", text: "2. Social Security Number (Sozialversicherungsnummer)" },

        {
            type: "p",
            text: "After your employer registers you with public health insurance, you will receive a **Sozialversicherungsnummer** by mail. This number is completely separate from your Tax ID and is used for employment records and pension contributions. Keep it together with your payslips, as you will need it throughout your working life in Germany."
        },

        { type: "h2", text: "3. Health Insurance (Krankenkasse): It's Mandatory" },

        {
            type: "p",
            text: "**Important:** Health insurance is not optional in Germany. It is a legal requirement for everyone. As an employee or trainee, you are automatically enrolled in the public health insurance system (GKV)."
        },

        {
            type: "p",
            text: "**How much does it cost?** As of 2026, the total contribution is approximately 17.3% of your gross salary. Your employer pays half of this amount, which means around 8.65% is deducted from your salary. For example, if you earn €1,200 per month as a trainee, about €103 will be deducted for health insurance."
        },

        {
            type: "p",
            text: "**Which company should you choose?** Major public providers include [AOK](https://www.aok.de/), [Techniker Krankenkasse](https://www.tk.de/), and [DAK](https://www.dak.de/). By law, all public insurers provide the same basic coverage. The differences are mainly in customer service, language support, and small extra benefits. **TK is often recommended for English speakers** because of its international support."
        },

        {
            type: "p",
            text: "**What's actually covered?** Public health insurance covers doctor visits, hospital stays, prescription medications, emergency treatment, mental health therapy, preventive check-ups, and basic dental care, always check with your provider for specific details. You can choose to call or send them an e-mail. Germany’s healthcare system is consistently ranked among the best in the world."
        },

        { type: "h2", text: "4. The Tax ID (Steuer-ID)" },

        {
            type: "p",
            text: "You do not need to apply separately for a Tax ID. It is automatically sent to you by mail approximately two to three weeks after your Anmeldung. You must give this number to your employer as soon as you receive it. If you do not, your employer may place you in **Tax Class 6**, which results in very high tax deductions."
        },

        { type: "h2", text: "5. The Schufa Score (Credit Rating)" },

        {
            type: "p",
            text: "When you arrive in Germany, you start with no Schufa score at all. This can make renting an apartment or signing contracts more difficult. Schufa tracks whether you pay bills such as rent, phone contracts, and utilities on time. Paying bills on time builds trust, while missed payments damage your record."
        },

        { type: "h2", text: "6. The 'Black Tax' (Remittances)" },

        {
            type: "p",
            text: "Sending money home is generous and understandable, but it can quickly damage your financial stability in Germany. Always make sure your own rent, insurance, transport, and food costs are covered first. If you must send money, compare transfer services carefully and avoid borrowing money in Germany to fund remittances."
        },

        { type: "h2", text: "7. The Church Tax (Kirchensteuer)" },

        {
            type: "p",
            text: "When you register your address, you are asked to state your religion. If you declare Roman Catholic or Evangelical (Protestant), the government will automatically deduct a church tax of about 8–9% of your income tax from your salary. If you do not want this deduction, you must leave the field blank or officially leave the church (Kirchenaustritt), which costs around €30."
        }
    ],
    goldenRule: "Open a Revolut account first so you have an IBAN. Then hunt for the Anmeldung appointment.",
    steps: [
        {
            title: "Open Bank Account",
            text: "Use Revolut for an instant German IBAN without paperwork stress.",
            action: "Download app and verify identity.",
        },
        {
            title: "Health Insurance",
            text: "Choose a public insurer (AOK, TK, Barmer).",
            action: "Register online or visit a local branch."
        }
    ]
};

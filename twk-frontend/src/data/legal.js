// LEGAL PAGES : text given by the client. numbers (1, 2, 3 ...) are added automatically by the page , so they can never go wrong.
// body = list of blocks : a text = paragraph , an array = bullet list

export const legalDate = "18 November 2026"; // effective date shown on top of every policy , change it when the text changes

export const legalPages = {
  "privacy-policy": {
    title: "Privacy Policy",
    summary: "We collect the information described below to run our services, verify payments and answer your questions. We do not sell personal information, and you may ask to access, correct or delete it.",
    sections: [
      { title: "Introduction", body: [
        "Trade With King, operated by Kabir Maan (“we”, “our”, or “us”), respects your privacy and is committed to protecting your personal information.",
        "This Privacy Policy explains how we collect, use, store, and process information when you visit our website, register for our services, or communicate with us.",
      ] },
      { title: "Information We Collect", body: [
        "We may collect the following information:",
        ["Name, email address, and phone number.", "Registration and enquiry details.", "Payment confirmation and transaction reference details.", "Communication records and customer support enquiries.", "Technical information such as IP address, browser type, and website usage information."],
        "We do not intentionally collect payment passwords, banking PINs, or OTPs.",
      ] },
      { title: "How We Use Your Information", body: [
        "Your information may be used to:",
        ["Process registrations and verify payments.", "Provide access to purchased programs and services.", "Respond to enquiries and support requests.", "Send important service-related announcements.", "Improve our website and services.", "Maintain transaction records and comply with applicable laws."],
        "Marketing communications will be subject to applicable consent requirements.",
      ] },
      { title: "Payment Information", body: [
        "Payments may be accepted through manual payment methods, including bank transfers and UPI, where available.",
        "We may request transaction references or payment confirmation to verify purchases. We do not request your banking passwords, PINs, or OTPs.",
      ] },
      { title: "Sharing of Information", body: [
        "We do not sell personal information.",
        "Information may be shared with service providers, communication platforms, technical providers, professional advisers, or government authorities where necessary for legitimate business purposes or legal compliance.",
      ] },
      { title: "Data Storage and Security", body: [
        "We take reasonable measures to protect personal information against unauthorised access, disclosure, alteration, or misuse.",
        "Information will be retained only for as long as necessary for business operations, legal obligations, and dispute resolution.",
      ] },
      { title: "Third-Party Platforms", body: [
        "Our services may use platforms such as Discord, Telegram, WhatsApp, and other external services.",
        "Their privacy practices are governed by their own policies. We are not responsible for independent data practices of these platforms.",
      ] },
      { title: "International Users", body: [
        "Our website and services may be accessed by customers in different countries. Personal information may be processed or stored in locations where our service providers operate, subject to applicable data protection laws.",
      ] },
      { title: "Your Privacy Rights", body: [
        "Subject to applicable laws, you may request access to, correction of, or deletion of your personal information, or withdraw consent where applicable.",
        "Requests may be sent to twking.info@gmail.com.",
      ] },
      { title: "Cookies", body: [
        "Our website may use cookies or similar technologies for functionality, analytics, and performance. Where legally required, appropriate consent will be obtained.",
      ] },
      { title: "Policy Updates", body: [
        "We reserve the right to update this Privacy Policy. Any changes will be published on this page with a revised effective date.",
      ] },
    ],
  },

  "terms-and-conditions": {
    title: "Terms & Conditions",
    summary: "These terms apply when you use our website or buy a service from Trade With King. Our content is educational, trading involves risk, no profits are guaranteed, and purchases are generally final and non-refundable.",
    sections: [
      { title: "Acceptance of Terms", body: [
        "By accessing our website or purchasing any service from Trade With King, you acknowledge that you have read and agreed to these Terms & Conditions.",
      ] },
      { title: "About Trade With King", body: [
        "Trade With King is an individual-operated trading education brand founded by Kabir Maan in 2022.",
        "Our services may include:",
        ["Trading education and courses.", "Personalised educational mentorship.", "Live educational market sessions.", "Online trading communities.", "Market insights and trading signals, where legally permitted."],
      ] },
      { title: "Educational Disclaimer", body: [
        "All educational content is provided for informational and educational purposes.",
        "Trading involves financial risk. Nothing on this website should automatically be interpreted as personalised financial advice or a guarantee of any investment outcome.",
        "Where services constitute regulated investment advisory or research activities, they will only be provided in compliance with applicable registration, licensing, and regulatory requirements.",
      ] },
      { title: "Trading Risk Disclosure", body: [
        "Financial markets involve uncertainty and the possibility of financial loss.",
        "Trade With King does not guarantee profits, successful trades, consistent returns, or the recovery of trading losses.",
        "Past performance does not guarantee future results. Users are responsible for their own financial decisions.",
      ] },
      { title: "Signals and Market Insights", body: [
        "Any market insights or trading signals offered through our services are subject to applicable financial regulations.",
        "Where registration or authorisation is required, such services will only be offered in accordance with the relevant legal requirements.",
        "Users should not treat market information as a guarantee of future performance.",
      ] },
      { title: "Payments", body: [
        "Payments may be accepted through manually provided payment methods, including bank transfer or UPI.",
        "A purchase will be considered confirmed only after payment verification.",
        "Customers should retain their transaction reference and payment confirmation for future correspondence.",
      ] },
      { title: "Refund and Cancellation Policy", body: [
        "All purchases are generally considered final and non-refundable, subject to applicable consumer protection laws and statutory rights.",
        "Please refer to our separate Refund Policy for further details.",
      ] },
      { title: "User Responsibilities", body: [
        "Users agree to:",
        ["Provide accurate registration information.", "Use our services lawfully.", "Maintain the confidentiality of their account access.", "Avoid sharing purchased educational materials without permission.", "Respect other members of our online communities.", "Avoid fraudulent, abusive, or misleading conduct."],
      ] },
      { title: "Intellectual Property", body: [
        "All original content, logos, branding, graphics, educational materials, and website content belong to Trade With King or their respective rights holders.",
        "Unauthorised copying, redistribution, resale, or commercial exploitation is prohibited.",
      ] },
      { title: "Third-Party Services", body: [
        "Our services may involve third-party platforms, including Discord, Telegram, WhatsApp, and payment providers.",
        "Their services are governed by their respective terms and policies.",
      ] },
      { title: "Suspension of Access", body: [
        "We may restrict or suspend access to our services in cases of fraud, misuse, unauthorised distribution of materials, or serious violations of these Terms, subject to applicable law.",
      ] },
      { title: "Limitation of Liability", body: [
        "To the extent permitted by law, Trade With King shall not be liable for losses resulting from independent trading decisions, market fluctuations, or reliance on general educational information.",
        "Nothing in these Terms excludes liability that cannot legally be excluded or limits statutory consumer rights.",
      ] },
      { title: "International Customers", body: [
        "Customers accessing our services from outside India are responsible for ensuring that their use of the services is lawful in their jurisdiction.",
        "Trade With King reserves the right to restrict services in jurisdictions where providing them would violate applicable laws or regulatory requirements.",
      ] },
      { title: "Governing Law", body: [
        "These Terms shall be governed by the laws of India, subject to applicable consumer protection laws and the jurisdiction of competent courts.",
      ] },
      { title: "Changes to Terms", body: [
        "We may revise these Terms when necessary. Updated versions will be published on our website.",
      ] },
    ],
  },

  "refund-policy": {
    title: "Refund Policy",
    summary: "All sales are final. Verified duplicate or incorrect payments are reviewed in line with applicable legal requirements.",
    sections: [
      { title: "All Sales Are Final", body: [
        "All purchases made through Trade With King are considered final.",
        "We do not offer voluntary refunds, cancellations, exchanges, or payment reversals once a purchase has been successfully completed and confirmed.",
      ] },
      { title: "Digital Products and Services", body: [
        "This policy applies to purchases including:",
        ["Trading courses and educational materials.", "Mentorship programs.", "Live educational sessions.", "Paid community memberships.", "Premium market insights and signals, where legally permitted."],
        "Customers are encouraged to review the service description and applicable conditions carefully before making a payment.",
      ] },
      { title: "Payment Confirmation", body: [
        "Payments may be made through manually provided payment methods, including bank transfers and UPI.",
        "Customers are responsible for providing accurate payment details and retaining transaction confirmations.",
        "Access to purchased services will be provided after successful payment verification.",
      ] },
      { title: "Duplicate or Incorrect Payments", body: [
        "Verified duplicate payments or incorrect payment deductions will be reviewed and addressed in accordance with applicable legal requirements.",
      ] },
    ],
    note: "We reserve the right to update this policy when necessary, subject to applicable laws.",
  },

  // risk disclosure = the risk disclaimer that used to be at the bottom of every page (same text , split in sections)
  "risk-disclosure": {
    title: "Risk Disclosure",
    summary: "Trading involves risk and losses are possible. Our content is educational and no profits or specific results are guaranteed.",
    sections: [
      { title: "Trading Involves Risk", body: [
        "Trading is a skill built through education, patience and sound risk management. Financial markets carry risk and losses are possible.",
      ] },
      { title: "Educational Purpose", body: [
        "Signals and educational content are shared for informational and educational purposes only.",
      ] },
      { title: "No Guarantee of Results", body: [
        "No profits or specific results are guaranteed.",
      ] },
      { title: "Your Responsibility", body: [
        "Every trader is responsible for their own decisions and risk management.",
      ] },
    ],
  },
};

// footer links to the 4 pages
export const legalLinks = [
  { name: "Privacy Policy", to: "/privacy-policy" },
  { name: "Terms & Conditions", to: "/terms-and-conditions" },
  { name: "Refund Policy", to: "/refund-policy" },
  { name: "Risk Disclosure", to: "/risk-disclosure" },
];

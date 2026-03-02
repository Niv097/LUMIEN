"use client";

import { motion } from "framer-motion";

const sections = [
    {
        title: "1. Information We Collect",
        content: [
            "We collect information you provide directly to us, including name, email address, phone number, and payment information when you use our services.",
            "We automatically collect certain information about your device and how you interact with our platform, including IP address, browser type, and usage patterns."
        ]
    },
    {
        title: "2. How We Use Your Information",
        content: [
            "To provide, maintain, and improve our services",
            "To process transactions and send related information",
            "To send technical notices, updates, and security alerts",
            "To respond to your comments and questions",
            "To comply with legal obligations and protect our rights"
        ]
    },
    {
        title: "3. Information Sharing",
        content: [
            "We do not sell your personal information to third parties.",
            "We may share your information with service providers who perform services on our behalf, subject to confidentiality agreements.",
            "We may disclose information if required by law or to protect our rights and safety."
        ]
    },
    {
        title: "4. Data Security",
        content: [
            "We implement industry-standard security measures to protect your information.",
            "All data is encrypted in transit and at rest using AES-256 encryption.",
            "We conduct regular security audits and penetration testing.",
            "However, no method of transmission over the Internet is 100% secure."
        ]
    },
    {
        title: "5. Your Rights",
        content: [
            "You have the right to access, update, or delete your personal information.",
            "You can opt-out of marketing communications at any time.",
            "You have the right to data portability and to lodge a complaint with a supervisory authority.",
            "For EU residents, you have additional rights under GDPR."
        ]
    },
    {
        title: "6. Cookies and Tracking",
        content: [
            "We use cookies and similar tracking technologies to collect and track information.",
            "You can instruct your browser to refuse all cookies or indicate when a cookie is being sent.",
            "Essential cookies are necessary for the platform to function properly."
        ]
    },
    {
        title: "7. Data Retention",
        content: [
            "We retain your information for as long as necessary to provide our services.",
            "We will delete or anonymize your information upon request, subject to legal obligations.",
            "Transaction records are retained for 7 years for compliance purposes."
        ]
    },
    {
        title: "8. International Data Transfers",
        content: [
            "Your information may be transferred to and processed in countries other than your own.",
            "We ensure appropriate safeguards are in place for international transfers.",
            "We comply with applicable data protection frameworks."
        ]
    },
    {
        title: "9. Children's Privacy",
        content: [
            "Our services are not directed to individuals under 18.",
            "We do not knowingly collect personal information from children.",
            "If we become aware of such collection, we will delete the information promptly."
        ]
    },
    {
        title: "10. Changes to This Policy",
        content: [
            "We may update this Privacy Policy from time to time.",
            "We will notify you of any material changes by posting the new policy on this page.",
            "Your continued use of our services constitutes acceptance of the updated policy."
        ]
    }
];

export default function PrivacyPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-black to-surface">
                <div className="container px-4 md:px-6 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Last updated: February 11, 2026
                        </p>
                        <p className="text-lg text-muted-foreground mt-4">
                            At Fiducia Tech, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="max-w-4xl mx-auto space-y-12">
                        {sections.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                                <div className="space-y-3">
                                    {section.content.map((paragraph, pIndex) => (
                                        <p key={pIndex} className="text-muted-foreground leading-relaxed">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </motion.div>
                        ))}

                        {/* Contact Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-surface border border-white/10 rounded-lg p-8 mt-12"
                        >
                            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                            <p className="text-muted-foreground mb-4">
                                If you have any questions about this Privacy Policy or our data practices, please contact us:
                            </p>
                            <div className="space-y-2 text-muted-foreground">
                                <p>Email: <a href="mailto:privacy@fiduciatech.com" className="text-primary hover:underline">privacy@fiduciatech.com</a></p>
                                <p>Address: Fiducia Tech, Inc., 123 Financial District, San Francisco, CA 94111</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}

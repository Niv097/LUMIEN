"use client";

import { motion } from "framer-motion";

const sections = [
    {
        title: "1. Acceptance of Terms",
        content: [
            "By accessing and using Fiducia Tech's services, you accept and agree to be bound by these Terms of Service.",
            "If you do not agree to these terms, you may not access or use our services.",
            "We reserve the right to modify these terms at any time, and your continued use constitutes acceptance of any changes."
        ]
    },
    {
        title: "2. Description of Service",
        content: [
            "Fiducia Tech provides financial infrastructure APIs and services for businesses.",
            "Our platform enables payment processing, banking-as-a-service, and embedded finance solutions.",
            "We reserve the right to modify, suspend, or discontinue any aspect of our services at any time."
        ]
    },
    {
        title: "3. User Accounts",
        content: [
            "You must create an account to use our services.",
            "You are responsible for maintaining the confidentiality of your account credentials.",
            "You agree to provide accurate, current, and complete information during registration.",
            "You are responsible for all activities that occur under your account."
        ]
    },
    {
        title: "4. Acceptable Use",
        content: [
            "You agree not to use our services for any unlawful purpose or in violation of these terms.",
            "You may not attempt to gain unauthorized access to our systems or networks.",
            "You may not interfere with or disrupt the integrity or performance of our services.",
            "You may not use our services to transmit malicious code or engage in fraudulent activities."
        ]
    },
    {
        title: "5. Payment and Fees",
        content: [
            "Fees for our services are described in your service agreement.",
            "All fees are non-refundable unless otherwise stated.",
            "We reserve the right to change our fees with 30 days' notice.",
            "You are responsible for all taxes associated with your use of our services."
        ]
    },
    {
        title: "6. Intellectual Property",
        content: [
            "All content, features, and functionality of our services are owned by Fiducia Tech.",
            "You may not copy, modify, distribute, or create derivative works without our permission.",
            "You retain ownership of any data you submit to our platform.",
            "You grant us a license to use your data to provide and improve our services."
        ]
    },
    {
        title: "7. Confidentiality",
        content: [
            "You may have access to confidential information about our services and technology.",
            "You agree to keep all confidential information strictly confidential.",
            "This obligation survives termination of your use of our services."
        ]
    },
    {
        title: "8. Limitation of Liability",
        content: [
            "Our services are provided 'as is' without warranties of any kind.",
            "We are not liable for any indirect, incidental, or consequential damages.",
            "Our total liability shall not exceed the fees paid by you in the 12 months preceding the claim.",
            "Some jurisdictions do not allow limitation of liability, so these limitations may not apply to you."
        ]
    },
    {
        title: "9. Indemnification",
        content: [
            "You agree to indemnify and hold harmless Fiducia Tech from any claims arising from your use of our services.",
            "This includes claims related to your violation of these terms or infringement of third-party rights.",
            "We reserve the right to assume exclusive defense of any matter subject to indemnification."
        ]
    },
    {
        title: "10. Termination",
        content: [
            "We may terminate or suspend your access to our services at any time for any reason.",
            "You may terminate your account at any time by contacting us.",
            "Upon termination, your right to use our services will immediately cease.",
            "Provisions that by their nature should survive termination will survive."
        ]
    },
    {
        title: "11. Governing Law",
        content: [
            "These terms are governed by the laws of the State of California, USA.",
            "Any disputes will be resolved in the courts of San Francisco County, California.",
            "You waive any objection to venue or jurisdiction in these courts."
        ]
    },
    {
        title: "12. Dispute Resolution",
        content: [
            "Any disputes arising from these terms will be resolved through binding arbitration.",
            "Arbitration will be conducted by the American Arbitration Association.",
            "You waive your right to participate in class action lawsuits.",
            "This arbitration agreement survives termination of these terms."
        ]
    }
];

export default function TermsPage() {
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
                            Terms of Service
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Last updated: February 11, 2026
                        </p>
                        <p className="text-lg text-muted-foreground mt-4">
                            Please read these terms carefully before using Fiducia Tech's services.
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
                            <h2 className="text-2xl font-bold text-white mb-4">Questions?</h2>
                            <p className="text-muted-foreground mb-4">
                                If you have any questions about these Terms of Service, please contact us:
                            </p>
                            <div className="space-y-2 text-muted-foreground">
                                <p>Email: <a href="mailto:legal@fiduciatech.com" className="text-primary hover:underline">legal@fiduciatech.com</a></p>
                                <p>Address: Fiducia Tech, Inc., 123 Financial District, San Francisco, CA 94111</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}

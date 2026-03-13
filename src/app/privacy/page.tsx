"use client";

import { motion } from "framer-motion";
import { contact, legalContent, privacyContent } from "@/content/site-content";

const sections = privacyContent.sections;

export default function PrivacyPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-4 md:pt-32 pb-12 md:pb-20 overflow-hidden bg-gradient-to-b from-black to-surface min-h-screen flex flex-col justify-center">
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
                            {legalContent.privacyIntro}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-12 md:py-20 min-h-screen flex flex-col justify-center">
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
                                <p>Email: <a href={`mailto:${contact.email}`} className="text-primary hover:underline">{contact.email}</a></p>
                                <p>Address: {legalContent.addressLine}</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}

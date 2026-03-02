"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Banknote, Globe, Lock, ShieldCheck, Wallet } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useModal } from "@/lib/modal-context";

export default function PlatformPage() {
    const { openConnectModal } = useModal();
    return (
        <div className="min-h-screen">
            {/* Header */}
            <Section className="pt-32 pb-16 bg-gradient-to-b from-black to-background">
                <div className="container px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        className="text-5xl md:text-6xl font-bold text-white mb-6"
                    >
                        Unified Financial Infrastructure
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-xl text-muted-foreground max-w-3xl mx-auto"
                    >
                        A cohesive set of modular building blocks for creating modern financial products.
                        Mix and match to build exactly what you need.
                    </motion.p>
                </div>
            </Section>

            {/* Core Modules Grid */}
            <Section className="py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Global Payments",
                            desc: "Accept payments in 135+ currencies. Smart routing and retry logic built-in.",
                            icon: <Globe className="h-6 w-6 text-primary" />
                        },
                        {
                            title: "Digital Wallets",
                            desc: "Create custodial wallets for your users to store, send, and receive funds.",
                            icon: <Wallet className="h-6 w-6 text-primary" />
                        },
                        {
                            title: "Card Issuing",
                            desc: "Issue physical and virtual cards with custom controls and real-time authorization.",
                            icon: <Banknote className="h-6 w-6 text-primary" />
                        },
                        {
                            title: "Compliance Radar",
                            desc: "Automated KYC/AML checks and transaction monitoring powered by AI.",
                            icon: <ShieldCheck className="h-6 w-6 text-primary" />
                        },
                        {
                            title: "Data Vault",
                            desc: "PCI-compliant tokenization and secure storage for sensitive financial data.",
                            icon: <Lock className="h-6 w-6 text-primary" />
                        },
                        {
                            title: "Instant Payouts",
                            desc: "Send funds to bank accounts and debit cards instantly, 24/7/365.",
                            icon: <BadgeCheck className="h-6 w-6 text-primary" />
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 15,
                                delay: i * 0.1
                            }}
                        >
                            <Card className="h-full border-white/5 bg-white/5 hover:bg-white/10 hover:border-primary/20 transition-all group">
                                <CardHeader>
                                    <div className="p-3 bg-black rounded-lg w-fit mb-4 border border-white/10 group-hover:border-primary/30 transition-colors">
                                        {item.icon}
                                    </div>
                                    <CardTitle className="text-xl text-white">{item.title}</CardTitle>
                                    <CardDescription className="text-base mt-2">{item.desc}</CardDescription>
                                </CardHeader>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Technical Deep Dive */}
            <Section className="bg-white/5 border-y border-white/5 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">Engineered for Reliability</h2>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">99.999% Historical Uptime</h3>
                                <p className="text-muted-foreground">
                                    Our distributed architecture ensures your financial services are always on, even during peak traffic.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Micro-per-second latency</h3>
                                <p className="text-muted-foreground">
                                    Optimized for speed. Every transaction is processed in milliseconds, ensuring real-time experiences.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Bank-Grade Security</h3>
                                <p className="text-muted-foreground">
                                    SOC 2 Type II certified. End-to-end encryption. You build the product, we handle the security.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[400px] w-full rounded-xl overflow-hidden border border-white/10 bg-black/50 frame-hover-effect">
                        {/* Abstract architecture viz placeholder */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50" />
                        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-1 p-4 opacity-30">
                            {Array.from({ length: 36 }).map((_, i) => (
                                <div key={i} className="bg-white/5 rounded-sm" />
                            ))}
                        </div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                            <div className="text-6xl font-bold text-white/10">API</div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="text-center py-24">
                <h2 className="text-3xl font-bold text-white mb-8">Start building with the Platform</h2>
                <Button
                    size="lg"
                    className="bg-white text-black hover:bg-gray-200"
                    onClick={openConnectModal}
                >
                    Let's Connect
                </Button>
            </Section>
        </div>
    );
}

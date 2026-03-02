"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, ShoppingBag, Users } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SolutionsPage() {
    return (
        <div className="min-h-screen">
            <Section className="pt-32 pb-20 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6"
                >
                    Solutions for every scale
                </motion.h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Whether you are a startup or a Fortune 500, Fiducia scales with you.
                </p>
            </Section>

            {/* Alternating Sections */}
            <div className="space-y-0">
                {[
                    {
                        id: "marketplaces",
                        title: "For Marketplaces",
                        desc: "Split payments, onboard sellers, and manage complex payouts automatically. The complete financial backend for two-sided markets.",
                        icon: <ShoppingBag className="w-12 h-12 text-primary mb-6" />,
                        color: "from-blue-500/10"
                    },
                    {
                        id: "startups",
                        title: "For Fintech Startups",
                        desc: "Launch your MVP in weeks, not years. Use our banking-as-a-service to issue cards and accounts without the regulatory headache.",
                        icon: <Users className="w-12 h-12 text-accent mb-6" />,
                        color: "from-teal-500/10"
                    },
                    {
                        id: "saas",
                        title: "For SaaS Platforms",
                        desc: "Monetize your innovative software with embedded payments. Add a new revenue stream by becoming a financial partner to your users.",
                        icon: <Building2 className="w-12 h-12 text-purple-500 mb-6" />,
                        color: "from-purple-500/10"
                    }
                ].map((sol, i) => (
                    <Section
                        id={sol.id}
                        key={i}
                        className={`py-24 border-t border-white/5 bg-gradient-to-b ${sol.color} to-transparent`}
                    >
                        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                            <motion.div
                                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                className={i % 2 === 1 ? "lg:col-start-2" : ""}
                            >
                                {sol.icon}
                                <h2 className="text-4xl font-bold text-white mb-6">{sol.title}</h2>
                                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                    {sol.desc}
                                </p>
                                <div className="flex gap-4">
                                    <Button variant="outline" className="border-white/20 text-white">Learn More</Button>
                                    <Button variant="ghost" className="text-primary hover:text-primary-hover pl-0 hover:bg-transparent">
                                        View Case Studies <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                                className={i % 2 === 1 ? "lg:col-start-1" : ""}
                            >
                                <div className="aspect-video rounded-xl bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    {/* Placeholder visual */}
                                    <div className="absolute inset-0 flex items-center justify-center text-white/5 font-bold text-8xl select-none">
                                        SOL {i + 1}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </Section>
                ))}
            </div>
        </div>
    );
}

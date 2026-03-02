"use client";

import { motion } from "framer-motion";
import { ArrowRight, Book, Box, Code2, Terminal, Cpu, Github } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DevelopersPage() {
    return (
        <div className="min-h-screen">
            <Section className="pt-32 pb-16 bg-gradient-to-br from-black to-slate-900 border-b border-white/5">
                <div className="container px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-2 mb-6"
                    >
                        <div className="bg-primary/20 p-2 rounded-lg"><Terminal className="text-primary w-6 h-6" /></div>
                        <span className="text-primary font-mono text-sm tracking-tighter">developers.fiducia.tech</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        Build the future of <br /> finance.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground max-w-2xl"
                    >
                        Powerful primitives for financial applications. Start integration in minutes with our robust SDKs and clear documentation.
                    </motion.p>

                    <div className="flex gap-4 mt-8">
                        <Button className="bg-white text-black hover:bg-white/80"><Book className="mr-2 w-4 h-4" /> Read the Docs</Button>
                        <Button variant="outline" className="border-white/10 text-white"><Github className="mr-2 w-4 h-4" /> GitHub</Button>
                    </div>
                </div>
            </Section>

            <Section className="py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="hover:border-primary/50 transition-colors">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Box className="text-primary" /> API Reference</CardTitle>
                            <CardDescription>Comprehensive details on every endpoint, parameter, and error code.</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="hover:border-primary/50 transition-colors">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Cpu className="text-primary" /> SDKs & Libraries</CardTitle>
                            <CardDescription>Official client libraries for Node.js, Python, Java, Go, and Ruby.</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="hover:border-primary/50 transition-colors">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Code2 className="text-primary" /> Sample Apps</CardTitle>
                            <CardDescription>Clone and deploy example projects to get started instantly.</CardDescription>
                        </CardHeader>
                    </Card>
                </div>

                <div className="mt-20">
                    <h2 className="text-2xl font-bold text-white mb-8">Popular Guides</h2>
                    <div className="space-y-4">
                        {["Accepting your first payment", "Issuing virtual cards via API", "Handling webhooks securely", "Optimizing transaction latency"].map((guide, i) => (
                            <div key={i} className="flex justify-between items-center p-4 border border-white/5 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer group">
                                <span className="text-white group-hover:text-primary transition-colors">{guide}</span>
                                <ArrowRight className="text-white/20 group-hover:text-primary transition-colors" />
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
}

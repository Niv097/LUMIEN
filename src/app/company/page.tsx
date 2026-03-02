"use client";

import { motion } from "framer-motion";
import { Flag, Globe2, Heart, Lightbulb } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CompanyPage() {
    return (
        <div className="min-h-screen">
            <Section className="pt-32 pb-20 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-8"
                >
                    We build the rails <br /> for modern finance.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                >
                    Fiducia Tech was founded on the belief that financial infrastructure should be as accessible as the internet itself.
                    We represent trust, reliability, and innovation.
                </motion.p>
            </Section>

            <Section className="py-20 bg-white/5 border-y border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            To empower every developer to build world-class financial products without the complexity of legacy banking systems.
                        </p>
                        <p className="text-lg text-muted-foreground">
                            We are removing the barriers to entry in fintech, enabling a new wave of innovation in payments, lending, and banking.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="aspect-square bg-white/5 rounded-2xl flex flex-col items-center justify-center p-6 text-center border border-white/10">
                            <Globe2 className="w-10 h-10 text-primary mb-4" />
                            <span className="text-2xl font-bold text-white">12+</span>
                            <span className="text-sm text-muted-foreground">Global Offices</span>
                        </div>
                        <div className="aspect-square bg-white/5 rounded-2xl flex flex-col items-center justify-center p-6 text-center border border-white/10">
                            <UsersIcon className="w-10 h-10 text-accent mb-4" />
                            <span className="text-2xl font-bold text-white">450+</span>
                            <span className="text-sm text-muted-foreground">Employees</span>
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="py-24">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: <Heart className="w-6 h-6 text-red-500" />, title: "Trust First", desc: "We handle money. Trust is our currency. We never compromise on security or reliability." },
                        { icon: <Lightbulb className="w-6 h-6 text-yellow-500" />, title: "Innovate Boldly", desc: "We challenge the status quo of banking. We build what others say is impossible." },
                        { icon: <Flag className="w-6 h-6 text-blue-500" />, title: "Owner's Mindset", desc: "We act like owners. We take responsibility for our code, our products, and our customers." }
                    ].map((val, i) => (
                        <div key={i} className="p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="bg-white/10 w-fit p-3 rounded-lg mb-6">{val.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-4">{val.title}</h3>
                            <p className="text-muted-foreground">{val.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section className="text-center py-24 border-t border-white/5">
                <h2 className="text-4xl font-bold text-white mb-8">Join our team</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    We are hiring engineers, designers, and product managers in New York, London, and Remote.
                </p>
                <Button size="lg" className="bg-primary text-black hover:bg-primary/90">View Open Roles</Button>
            </Section>
        </div>
    );
}

function UsersIcon({ className }: { className?: string }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}

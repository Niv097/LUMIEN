"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { useModal } from "@/lib/modal-context";

export default function PricingPage() {
    const { openConnectModal } = useModal();
    return (
        <div className="min-h-screen">
            <Section className="pt-32 pb-20 text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Simple, transparent pricing</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Pay only for what you use. No setup fees, no hidden costs.
                </p>
            </Section>

            <Section className="pb-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Starter */}
                    <Card className="border-white/10 bg-white/5">
                        <CardHeader>
                            <CardTitle className="text-2xl text-white">Starter</CardTitle>
                            <CardDescription>For startups validating their product.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-bold text-white mb-6">0% <span className="text-lg font-normal text-muted-foreground">/ txn</span></div>
                            <p className="text-sm text-muted-foreground mb-6">Pays 35¢ per transaction</p>
                            <ul className="space-y-3">
                                {["Access to standard payments", "5 Team members", "Standard Support", "Hosted Checkout"].map((feature) => (
                                    <li key={feature} className="flex items-center text-sm text-white">
                                        <Check className="w-4 h-4 text-primary mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full bg-white text-black hover:bg-gray-200">Start Free</Button>
                        </CardFooter>
                    </Card>

                    {/* Growth */}
                    <Card className="border-primary/50 bg-primary/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-primary text-black text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
                        <CardHeader>
                            <CardTitle className="text-2xl text-white">Growth</CardTitle>
                            <CardDescription>For scaling businesses.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-bold text-white mb-6">0.5% <span className="text-lg font-normal text-muted-foreground">/ txn</span></div>
                            <p className="text-sm text-muted-foreground mb-6">Pays 25¢ per transaction</p>
                            <ul className="space-y-3">
                                {["Everything in Starter", "25 Team members", "Priority Support", "Custom Branding", "Fraud protection"].map((feature) => (
                                    <li key={feature} className="flex items-center text-sm text-white">
                                        <Check className="w-4 h-4 text-primary mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full bg-primary text-black hover:bg-primary/90">Get Started</Button>
                        </CardFooter>
                    </Card>

                    {/* Enterprise */}
                    <Card className="border-white/10 bg-white/5">
                        <CardHeader>
                            <CardTitle className="text-2xl text-white">Enterprise</CardTitle>
                            <CardDescription>For high-volume platforms.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-bold text-white mb-6">Custom</div>
                            <p className="text-sm text-muted-foreground mb-6">Volume discounts available</p>
                            <ul className="space-y-3">
                                {["Unlimited Team members", "Dedicated Account Manager", "99.999% SLA", "Custom Contracts", "On-premise deployment"].map((feature) => (
                                    <li key={feature} className="flex items-center text-sm text-white">
                                        <Check className="w-4 h-4 text-primary mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button
                                variant="outline"
                                className="w-full text-white border-white/20"
                                onClick={openConnectModal}
                            >
                                Let's Connect
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </Section>
        </div>
    );
}

"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const features = [
    {
        image: "/images/01.jpeg",
        title: "Payments Engine",
        href: "/solutions#marketplaces",
        description: "Accept payments globally with our unified API. Support for cards, wallets, and bank transfers.",
    },
    {
        image: "/images/02.jpeg",
        title: "Secure Banking",
        href: "/solutions#startups",
        description: "Create accounts, issue cards, and manage ledgers with banking-as-a-service infrastructure.",
    },
    {
        image: "/images/03.jpeg",
        title: "Developer First",
        href: "/solutions#saas",
        description: "Built for developers, by developers. Robust SDKs, detailed documentation, and 24/7 support.",
    },
];

export function FeatureCards() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, {
        margin: "-100px 0px -100px 0px", // Trigger when element is near center of viewport
        amount: 0.3 // Trigger when 30% of element is visible
    });

    const [activeCards, setActiveCards] = useState<number[]>([]);

    useEffect(() => {
        if (isInView) {
            // Sequence: Open cards one by one and keep them open
            const timeouts: NodeJS.Timeout[] = [];

            features.forEach((_, index) => {
                const timeout = setTimeout(() => {
                    setActiveCards(prev => [...prev, index]);
                }, index * 400 + 200); // Faster sequence: 200ms initial, +400ms per card
                timeouts.push(timeout);
            });

            return () => {
                timeouts.forEach(clearTimeout);
            };
        } else {
            // Reset when out of view - close all
            setActiveCards([]);
        }
    }, [isInView]);

    return (
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={cn(
                        "number-card group cursor-pointer transition-all duration-500",
                        activeCards.includes(i) ? "active" : ""
                    )}
                    onMouseEnter={() => {
                        // Optional: Allow manual override or interfering with sequence
                        if (!activeCards.includes(i)) setActiveCards(prev => [...prev, i]);
                    }}
                >
                    <Link href={feature.href} className="block w-full h-full relative z-30">
                        <div className="face face1">
                            <div className="content text-center">
                                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                        <div className="face face2">
                            <div
                                className="w-full h-full bg-cover bg-center transition-all duration-500"
                                style={{ backgroundImage: `url(${feature.image})` }}
                            />
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>
    );
}

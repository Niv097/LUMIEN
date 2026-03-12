"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { featureCardsContent } from "@/content/site-content";

const features = featureCardsContent.features;

export function FeatureCards() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, {
        margin: "-100px 0px -100px 0px",
        amount: 0.3
    });

    const [activeCards, setActiveCards] = useState<number[]>([]);

    useEffect(() => {
        if (isInView) {
            const timeouts: NodeJS.Timeout[] = [];
            features.forEach((_, index) => {
                const timeout = setTimeout(() => {
                    setActiveCards(prev => [...prev, index]);
                }, index * 400 + 200);
                timeouts.push(timeout);
            });
            return () => timeouts.forEach(clearTimeout);
        } else {
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
                        "number-card group cursor-pointer",
                        activeCards.includes(i) ? "active" : ""
                    )}
                >
                    <Link href={feature.href} className="block w-full h-full relative z-30">
                        <div className="face face1">
                            <div className="content text-center">
                                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                                <div className="mt-4 flex items-center justify-center gap-2 text-primary text-sm font-medium">
                                    <span>Explore</span>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="face face2">
                            <div
                                className="w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${feature.image})` }}
                            />
                            <h2>{i + 1}</h2>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>
    );
}

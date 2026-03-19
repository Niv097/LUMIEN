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
        margin: "-50px 0px -50px 0px",
        amount: 0.2
    });

    const [activeCards, setActiveCards] = useState<number[]>([]);

    useEffect(() => {
        if (isInView) {
            const timeouts: NodeJS.Timeout[] = [];
            features.forEach((_, index) => {
                const timeout = setTimeout(() => {
                    setActiveCards(prev => [...prev, index]);
                }, index * 150 + 50);
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
                    transition={{ delay: i * 0.08, duration: 0.35 }}
                    className={cn(
                        "number-card group",
                        activeCards.includes(i) ? "active" : ""
                    )}
                >
                    {/* Face 2: background image + number */}
                    <div className="face face2">
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${feature.image})` }}
                        />
                        <h2>{i + 1}</h2>
                    </div>

                    {/* Face 1: View button at top, then title + description */}
                    <div className="face face1">
                        {/* View button pinned to top of card */}
                        <Link
                            href={feature.href}
                            className="absolute top-5 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold hover:bg-primary hover:text-black transition-all duration-200 whitespace-nowrap z-30"
                        >
                            <span>View</span>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                        <div className="content text-center w-full mt-10">
                            <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed text-sm line-clamp-4">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface AnimatedLogoProps {
    className?: string;
    size?: "sm" | "md" | "lg";
    src?: string;
    alt?: string;
}

const sizeMap = {
    sm: { px: 32, h: "h-8" },
    md: { px: 56, h: "h-14" },
    lg: { px: 160, h: "h-40" },
};

export function AnimatedLogo({
    className = "",
    size = "md",
    src = "/logo.png",
    alt = "LUMIEN"
}: AnimatedLogoProps) {
    const { px, h } = sizeMap[size];

    return (
        <div
            className={`relative flex items-center justify-center flex-shrink-0 ${h} ${className}`}
            style={{ width: px, minWidth: px }}
        >
            {/* Subtle ambient glow behind logo */}
            <motion.div
                className="absolute inset-0 rounded-full pointer-events-none"
                animate={{ opacity: [0.15, 0.35, 0.55, 0.35, 0.15] }}
                transition={{
                    duration: 5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    times: [0, 0.3, 0.6, 0.8, 1],
                }}
                style={{
                    background:
                        "radial-gradient(circle, rgba(0,229,255,0.25) 0%, transparent 70%)",
                }}
            />

            {/* Logo image with animated brightness glow */}
            <motion.div
                className="relative z-10 w-full h-full flex items-center justify-center"
                animate={{
                    filter: [
                        "brightness(1)   drop-shadow(0 2px  4px rgba(0,229,255,0.10))",
                        "brightness(1.05) drop-shadow(0 2px  6px rgba(0,229,255,0.20))",
                        "brightness(1.1)  drop-shadow(0 2px  8px rgba(0,229,255,0.30))",
                        "brightness(1.2)  drop-shadow(0 4px 12px rgba(0,229,255,0.40))",
                        "brightness(1)   drop-shadow(0 2px  4px rgba(0,229,255,0.10))",
                    ],
                }}
                transition={{
                    duration: 5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    times: [0, 0.3, 0.6, 0.8, 1],
                }}
            >
                <Image
                    src={src}
                    alt={alt}
                    width={px}
                    height={px}
                    className="object-contain w-full h-full"
                    priority
                />
            </motion.div>
        </div>
    );
}

"use client";

import { useEffect, useRef } from "react";

export function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let particles: Particle[] = [];
        let animationFrameId: number;
        let width = window.innerWidth;
        let height = window.innerHeight;

        // Interaction state
        let mouseX = 0;
        let mouseY = 0;
        let isMoving = false;
        let scrollSpeed = 0;
        let lastScrollY = window.scrollY;

        // Configure high-DPI displays
        const dpr = window.devicePixelRatio || 1;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            initParticles();
        };

        class Particle {
            x!: number;
            y!: number;
            z!: number;
            px!: number;
            py!: number;
            size!: number;
            color!: string;
            speed!: number;
            opacity!: number;

            constructor() {
                this.reset();
            }

            reset() {
                // Center-focused origin for "Antigravity" effect
                this.x = (Math.random() - 0.5) * width;
                this.y = (Math.random() - 0.5) * height;
                this.z = width; // Start deep
                this.px = this.x;
                this.py = this.y;
                this.size = Math.random() * 0.8 + 0.2;
                this.opacity = 0;

                const colors = ["#ffffff", "#f0fdfa", "#ccfbf1"];
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.speed = Math.random() * 0.01 + 0.005; // Depth speed
            }

            update() {
                this.px = this.x;
                this.py = this.y;

                // Slowest possible movement as requested
                const velocity = (0.5 + Math.abs(scrollSpeed) * 0.02) * (1 + (width - this.z) / width * 2);
                this.z -= velocity;

                if (this.z < 1) {
                    this.reset();
                }

                const scale = width / this.z;
                const currentX = (this.x * scale) + width / 2;
                const currentY = (this.y * scale) + height / 2;

                // Exclusion Zone
                const isDesktop = width > 1024;
                const centerX = isDesktop ? width * 0.75 : width * 0.5;
                const centerY = height * 0.5;
                const exclusionRadius = isDesktop ? 250 : 150;
                const distToHero = Math.sqrt(Math.pow(currentX - centerX, 2) + Math.pow(currentY - centerY, 2));

                if (distToHero < exclusionRadius) {
                    this.opacity = Math.max(0, this.opacity - 0.1);
                } else {
                    this.opacity = Math.min(0.8, this.opacity + 0.05);
                }

                this.drawX = currentX;
                this.drawY = currentY;

                const pScale = width / (this.z + velocity);
                this.pDrawX = (this.x * pScale) + width / 2;
                this.pDrawY = (this.y * pScale) + height / 2;
            }

            draw() {
                if (!ctx || this.opacity <= 0) return;

                ctx.beginPath();
                // Minimal weight
                const weight = this.size * (1 + (width - this.z) / width * 1);
                ctx.lineWidth = weight;
                ctx.lineCap = "round";
                ctx.strokeStyle = this.color;
                ctx.globalAlpha = this.opacity * 0.7; // Brighter

                ctx.moveTo(this.pDrawX, this.pDrawY);
                ctx.lineTo(this.drawX, this.drawY);
                ctx.stroke();
                ctx.globalAlpha = 1;
            }

            drawX = 0; drawY = 0; pDrawX = 0; pDrawY = 0;
        }

        const initParticles = () => {
            particles = [];
            // Detect mobile and reduce particle count significantly for performance
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            const isLowEnd = navigator.hardwareConcurrency ? navigator.hardwareConcurrency < 4 : false;

            let particleCount = 200; // Desktop default
            if (isMobile) {
                particleCount = 50; // Reduce by 75% on mobile
            }
            if (isLowEnd) {
                particleCount = 30; // Further reduce on low-end devices
            }

            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            // More frequent clearing for cleaner look
            ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
            ctx.fillRect(0, 0, width, height);

            scrollSpeed *= 0.94;

            particles.forEach(p => {
                p.update();
                p.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        // Event Listeners
        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            isMoving = true;
            clearTimeout(moveTimeout);
            moveTimeout = setTimeout(() => isMoving = false, 1000);
        };

        const handleTouchMove = (e: TouchEvent) => {
            mouseX = e.touches[0].clientX;
            mouseY = e.touches[0].clientY;
            isMoving = true;
            clearTimeout(moveTimeout);
            moveTimeout = setTimeout(() => isMoving = false, 1000);
        };

        const handleScroll = () => {
            const currentY = window.scrollY;
            const delta = currentY - lastScrollY;
            scrollSpeed = delta;
            lastScrollY = currentY;
        };

        let moveTimeout: NodeJS.Timeout;

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        window.addEventListener("touchmove", handleTouchMove, { passive: true });
        window.addEventListener("scroll", handleScroll, { passive: true });

        resize();
        animate();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("scroll", handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[-1] pointer-events-none mix-blend-screen opacity-60"
        />
    );
}

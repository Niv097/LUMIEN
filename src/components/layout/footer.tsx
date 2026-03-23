"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useModal } from "@/lib/modal-context";
import { AnimatedLogo } from "@/components/ui/animated-logo";
import { footerContent } from "@/content/site-content";

export function Footer() {
    const { openConnectModal } = useModal();
    return (
        <footer className="bg-black/40 border-t border-white/10 py-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
                    <div className="col-span-2 lg:col-span-2">
                        <div className="mb-2">
                            <Link href="/" className="inline-block">
                                <AnimatedLogo size="lg" className="opacity-90 hover:opacity-100 transition-opacity" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-3 text-sm">Platform</h4>
                        <ul className="space-y-2">
                            <li><Link href="/platform" className="text-muted-foreground hover:text-primary transition-colors text-sm">Overview</Link></li>
                            <li><Link href="/platform#features" className="text-muted-foreground hover:text-primary transition-colors text-sm">Key Features</Link></li>
                            <li><Link href="/platform#security" className="text-muted-foreground hover:text-primary transition-colors text-sm">Security</Link></li>
                            <li><Link href="/platform#api" className="text-muted-foreground hover:text-primary transition-colors text-sm">API Reference</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-3 text-sm">Company</h4>
                        <ul className="space-y-2">
                            <li><Link href="/company" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</Link></li>
                            <li><Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors text-sm">Careers</Link></li>
                            <li><Link href="/company#blog" className="text-muted-foreground hover:text-primary transition-colors text-sm">Blog</Link></li>
                            <li><button onClick={openConnectModal} className="text-muted-foreground hover:text-primary transition-colors text-sm whitespace-nowrap text-left">{footerContent.companyCtaLabel}</button></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-3 text-sm">Legal</h4>
                        <ul className="space-y-2">
                            <li><Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms of Service</Link></li>
                            <li><Link href="/security" className="text-muted-foreground hover:text-primary transition-colors text-sm">Security Status</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Storytelling Line */}
                <div className="mb-6 pb-6 border-b border-white/5">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center justify-between"
                    >
                        <div className="flex-1">
                            <h3 className="text-xl md:text-3xl font-bold tracking-tight">
                                <span className="text-white">Innovate</span>
                                <span className="text-primary">.</span>
                                <span className="text-white">Automate</span>
                                <span className="text-primary">.</span>
                                <span className="text-white">Elevate</span>
                                <span className="text-primary">.</span>
                            </h3>
                        </div>
                        <div className="hidden md:block">
                            <div className="h-px w-32 bg-gradient-to-r from-primary/50 to-transparent" />
                        </div>
                    </motion.div>
                </div>

                <div className="pt-2 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-2">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Lumien India. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        {/* Social Icons Placeholder */}
                    </div>
                </div>
            </div>
        </footer>
    );
}

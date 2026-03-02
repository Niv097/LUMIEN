"use client";

import Link from "next/link";
import { useModal } from "@/lib/modal-context";
import { AnimatedLogo } from "@/components/ui/animated-logo";

export function Footer() {
    const { openConnectModal } = useModal();
    return (
        <footer className="bg-black/40 border-t border-white/10 py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
                    <div className="col-span-2 lg:col-span-2">
                        <div className="mb-4 mt-0">
                            <Link href="/" className="inline-block">
                                <AnimatedLogo size="lg" className="opacity-90 hover:opacity-100 transition-opacity" />
                            </Link>
                        </div>
                        <p className="text-muted-foreground max-w-sm mb-6 mt-4 hidden md:block">
                            Empowering the next generation of fintech applications with enterprise-grade infrastructure, security, and scalability.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Platform</h4>
                        <ul className="space-y-3">
                            <li><Link href="/platform" className="text-muted-foreground hover:text-primary transition-colors text-sm">Overview</Link></li>
                            <li><Link href="/platform#features" className="text-muted-foreground hover:text-primary transition-colors text-sm">Key Features</Link></li>
                            <li><Link href="/platform#security" className="text-muted-foreground hover:text-primary transition-colors text-sm">Security</Link></li>
                            <li><Link href="/platform#api" className="text-muted-foreground hover:text-primary transition-colors text-sm">API Reference</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Company</h4>
                        <ul className="space-y-3">
                            <li><Link href="/company" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</Link></li>
                            <li><Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors text-sm">Careers</Link></li>
                            <li><Link href="/company#blog" className="text-muted-foreground hover:text-primary transition-colors text-sm">Blog</Link></li>
                            <li><button onClick={openConnectModal} className="text-muted-foreground hover:text-primary transition-colors text-sm">Let's Connect</button></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Legal</h4>
                        <ul className="space-y-3">
                            <li><Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms of Service</Link></li>
                            <li><Link href="/security" className="text-muted-foreground hover:text-primary transition-colors text-sm">Security Status</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Lumien. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        {/* Social Icons Placeholder */}
                    </div>
                </div>
            </div>
        </footer>
    );
}

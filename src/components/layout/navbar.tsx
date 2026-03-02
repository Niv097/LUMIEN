"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, ChevronDown, Building2, Briefcase, BookOpen, Mail, Layers, Code, Shield, FileText, Rocket, Store, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedLogo } from "@/components/ui/animated-logo";
import { cn } from "@/lib/utils";
import { useModal } from "@/lib/modal-context";

type MenuItem = {
    name: string;
    href: string;
    icon: any;
    description: string;
    isModal?: boolean;
};

const dropdownMenus: Record<string, { items: MenuItem[] }> = {
    Company: {
        items: [
            { name: "About Us", href: "/company", icon: Building2, description: "Learn about our mission" },
            { name: "Careers", href: "/careers", icon: Briefcase, description: "Join our team" },
            { name: "Blog", href: "/company#blog", icon: BookOpen, description: "Latest insights" },
            { name: "Contact", href: "#contact", icon: Mail, description: "Get in touch", isModal: true },
        ]
    },
    Solutions: {
        items: [
            { name: "For Marketplaces", href: "/solutions#marketplaces", icon: Store, description: "Multi-vendor platforms" },
            { name: "For Startups", href: "/solutions#startups", icon: Rocket, description: "Scale your business" },
            { name: "For SaaS", href: "/solutions#saas", icon: Zap, description: "Embedded payments" },
        ]
    },
    Platform: {
        items: [
            { name: "Overview", href: "/platform", icon: Layers, description: "Platform capabilities" },
            { name: "API Reference", href: "/platform#api", icon: Code, description: "Developer docs" },
            { name: "Security", href: "/security", icon: Shield, description: "Trust & compliance" },
            { name: "Documentation", href: "/developers", icon: FileText, description: "Get started" },
        ]
    }
};

const simpleLinks = [
    { name: "Developers", href: "/developers" },
    { name: "Pricing", href: "/pricing" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
    const pathname = usePathname();
    const { openConnectModal } = useModal();

    // Handle initial mount
    useEffect(() => {
        setMounted(true);
    }, []);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
        setActiveDropdown(null);
        setMobileExpandedSection(null);
    }, [pathname]);

    const handleLinkClick = (item: MenuItem) => {
        if (item.isModal) {
            openConnectModal();
        }
    };

    const toggleMobileSection = (section: string) => {
        setMobileExpandedSection(mobileExpandedSection === section ? null : section);
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled || isOpen
                    ? "bg-black/80 backdrop-blur-md border-white/10"
                    : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-24">
                    {/* Logo */}
                    <Link href="/" className="flex items-center z-50 flex-shrink-0 overflow-visible">
                        <AnimatedLogo size="md" />
                    </Link>

                    {/* Desktop Nav — only shown at lg (1024px+) */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {/* Dropdown Menus */}
                        {Object.entries(dropdownMenus).map(([key, menu]) => (
                            <div
                                key={key}
                                className="relative group"
                                onMouseEnter={() => setActiveDropdown(key)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button
                                    className={cn(
                                        "flex items-center text-base font-medium transition-colors hover:text-primary nav-boxed-effect px-4 py-2",
                                        activeDropdown === key ? "text-primary" : "text-muted-foreground"
                                    )}
                                >
                                    <span className="relative flex items-center gap-1">
                                        {key}
                                        <ChevronDown className={cn("absolute -right-5 w-4 h-4 transition-all opacity-0 group-hover:opacity-100", activeDropdown === key && "rotate-180 opacity-100")} />
                                    </span>
                                </button>

                                {/* Dropdown Panel - Appears Below */}
                                <AnimatePresence>
                                    {activeDropdown === key && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.15 }}
                                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-black/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.5)] overflow-hidden"
                                        >
                                            <div className="p-2">
                                                {menu.items.map((item, index) => (
                                                    ('isModal' in item && item.isModal) ? (
                                                        <button
                                                            key={index}
                                                            onClick={() => handleLinkClick(item)}
                                                            className="w-full flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group/item"
                                                        >
                                                            <item.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                                            <div className="text-left">
                                                                <div className="text-white font-medium group-hover/item:text-primary transition-colors">
                                                                    {item.name}
                                                                </div>
                                                                <div className="text-xs text-muted-foreground mt-0.5">
                                                                    {item.description}
                                                                </div>
                                                            </div>
                                                        </button>
                                                    ) : (
                                                        <Link
                                                            key={index}
                                                            href={item.href}
                                                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group/item"
                                                        >
                                                            <item.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                                            <div>
                                                                <div className="text-white font-medium group-hover/item:text-primary transition-colors">
                                                                    {item.name}
                                                                </div>
                                                                <div className="text-xs text-muted-foreground mt-0.5">
                                                                    {item.description}
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    )
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}

                        {/* Simple Links */}
                        {simpleLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-base font-medium transition-colors hover:text-primary nav-boxed-effect px-4 py-2",
                                    mounted && pathname === link.href
                                        ? "text-primary"
                                        : "text-muted-foreground"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        {/* CTA — desktop only */}
                        <Button
                            className="hidden lg:inline-flex bg-primary hover:bg-primary/90 text-black font-bold h-11 px-6 text-base shadow-[0_0_20px_rgba(0,229,255,0.3)]"
                        >
                            Get Started
                        </Button>

                        {/* Hamburger — shown on mobile & tablet (below lg) */}
                        <button
                            className="lg:hidden z-50 text-white p-1"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.1 }}
                        className="absolute top-24 left-0 right-0 bg-black/95 border-b border-white/10 backdrop-blur-xl lg:hidden max-h-[calc(100vh-6rem)] overflow-y-auto"
                    >
                        <div className="flex flex-col p-6 gap-2">
                            {/* Mobile Accordion Sections */}
                            {Object.entries(dropdownMenus).map(([key, menu], sectionIndex) => (
                                <motion.div
                                    key={key}
                                    initial={{ opacity: 1, x: 0 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0 }}
                                    className="border border-white/10 rounded-lg overflow-hidden"
                                >
                                    {/* Section Header */}
                                    <button
                                        onClick={() => toggleMobileSection(key)}
                                        className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 transition-colors"
                                    >
                                        <span className="text-white font-semibold text-lg">{key}</span>
                                        <ChevronDown
                                            className={cn(
                                                "w-5 h-5 text-primary transition-transform",
                                                mobileExpandedSection === key && "rotate-180"
                                            )}
                                        />
                                    </button>

                                    {/* Expandable Content */}
                                    <AnimatePresence>
                                        {mobileExpandedSection === key && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.1 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="p-2 space-y-1 bg-black/30">
                                                    {menu.items.map((item, itemIndex) => (
                                                        ('isModal' in item && item.isModal) ? (
                                                            <button
                                                                key={itemIndex}
                                                                onClick={() => {
                                                                    handleLinkClick(item);
                                                                    setIsOpen(false);
                                                                }}
                                                                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors text-left"
                                                            >
                                                                <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                                                                <span className="text-white font-medium">{item.name}</span>
                                                            </button>
                                                        ) : (
                                                            <Link
                                                                key={itemIndex}
                                                                href={item.href}
                                                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                                                            >
                                                                <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                                                                <span className="text-white font-medium">{item.name}</span>
                                                            </Link>
                                                        )
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}

                            {/* Mobile Simple Links */}
                            {simpleLinks.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 1, x: 0 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0 }}
                                >
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "flex items-center justify-between text-lg font-medium p-4 rounded-lg hover:bg-white/5 transition-colors border border-white/10",
                                            mounted && pathname === link.href ? "text-primary bg-primary/5 border-primary/20" : "text-white"
                                        )}
                                    >
                                        <span>{link.name}</span>
                                        <ChevronRight size={20} className="text-muted-foreground" />
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 1, y: 0 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0 }}
                                className="mt-4"
                            >
                                <Button className="w-full h-12 text-lg bg-primary text-black font-bold">
                                    Get Started
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header >
    );
}

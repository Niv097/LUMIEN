"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2 } from "lucide-react";
import { Button } from "./button";
import { useModal } from "@/lib/modal-context";

export function ConnectModal() {
    const { isConnectModalOpen, closeConnectModal } = useModal();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset and close after delay
        setTimeout(() => {
            setIsSubmitted(false);
            closeConnectModal();
        }, 3000);
    };

    return (
        <AnimatePresence>
            {isConnectModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-y-auto">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeConnectModal}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-lg bg-black/90 border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/5">
                            <h2 className="text-2xl font-bold text-white tracking-tight">Let's Connect</h2>
                            <button
                                onClick={closeConnectModal}
                                className="p-2 rounded-full hover:bg-white/10 text-muted-foreground hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-white/70 ml-1">Full Name</label>
                                        <input
                                            required
                                            type="text"
                                            id="name"
                                            placeholder="Jane Doe"
                                            className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-white/20"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-white/70 ml-1">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            id="email"
                                            placeholder="jane@company.com"
                                            className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-white/20"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium text-white/70 ml-1">How can we help?</label>
                                        <textarea
                                            required
                                            id="message"
                                            rows={4}
                                            placeholder="Tell us about your project..."
                                            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-white/20 resize-none"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full h-14 text-lg font-bold bg-primary text-black hover:bg-primary/90 shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all group"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center gap-2">
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                    className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
                                                />
                                                Sending...
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-2">
                                                Send Message
                                                <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                            </span>
                                        )}
                                    </Button>
                                </form>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center py-12 text-center"
                                >
                                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 border border-primary/20">
                                        <CheckCircle2 size={40} className="text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
                                    <p className="text-muted-foreground">
                                        Thanks for reaching out. Our team will get back <br /> to you shortly.
                                    </p>
                                </motion.div>
                            )}
                        </div>

                        {/* Footer decoration */}
                        <div className="h-1.5 w-full bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

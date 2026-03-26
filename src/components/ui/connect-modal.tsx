"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2 } from "lucide-react";
import { Button } from "./button";
import { SelfDrawingLoader } from "./self-drawing-loader";
import { useModal } from "@/lib/modal-context";
import { connectModalContent } from "@/content/site-content";

export function ConnectModal() {
    const { isConnectModalOpen, closeConnectModal } = useModal();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [fullName, setFullName] = useState("");
    const [nameError, setNameError] = useState(false);
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [mobileNumber, setMobileNumber] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch("/api/send-mail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: fullName,
                    email,
                    phone: mobileNumber,
                    message,
                    formType: "consultation",
                }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.message || "Failed to send");
        } catch (err) {
            console.error("Contact form error:", err);
        } finally {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
                setFullName("");
                setEmail("");
                setMobileNumber("");
                setMessage("");
                setNameError(false);
                setEmailError(false);
                closeConnectModal();
            }, 1500);
        }
    };

    return (
        <AnimatePresence>
            {isConnectModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center md:p-6 overscroll-none">
                    {/* Backdrop — captures all touch events so background can't scroll on mobile */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={closeConnectModal}
                        style={{ touchAction: "none" }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content — slides up on mobile, scales in on desktop */}
                    <motion.div
                        initial={{ opacity: 0, y: "100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "100%" }}
                        transition={{ type: "spring", damping: 28, stiffness: 280 }}
                        className="relative w-full md:max-w-lg bg-black/95 md:bg-black/90
                            border-t md:border border-white/10
                            rounded-t-2xl md:rounded-2xl
                            shadow-2xl z-10
                            flex flex-col
                            max-h-[90dvh] md:max-h-[90vh] overflow-hidden"
                    >
                        {/* Mobile drag handle */}
                        <div className="md:hidden flex justify-center pt-3 pb-1">
                            <div className="w-10 h-1 rounded-full bg-white/20" />
                        </div>

                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/5">
                            <h2 className="text-2xl font-bold text-white tracking-tight">{connectModalContent.title}</h2>
                            <button
                                onClick={closeConnectModal}
                                className="p-2 rounded-full hover:bg-white/10 text-muted-foreground hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-5 md:p-8 overflow-y-auto flex-1">
                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-1">
                                        <label htmlFor="name" className="text-sm font-medium text-white/70 ml-1">Full Name</label>
                                        <input
                                            required
                                            type="text"
                                            id="name"
                                            placeholder="Jane Doe"
                                            value={fullName}
                                            onKeyDown={(e) => {
                                                if (/[0-9]/.test(e.key)) {
                                                    e.preventDefault();
                                                    setNameError(true);
                                                    setTimeout(() => setNameError(false), 2000);
                                                }
                                            }}
                                            onChange={(e) => {
                                                // Allow only letters, spaces, hyphens, apostrophes
                                                const filtered = e.target.value.replace(/[^a-zA-Z\s\-']/g, "");
                                                setFullName(filtered);
                                            }}
                                            className={`w-full h-12 bg-white/5 border rounded-xl px-4 text-white focus:outline-none focus:ring-2 transition-all placeholder:text-white/20 ${
                                                nameError
                                                    ? "border-red-500/60 focus:ring-red-500/30"
                                                    : "border-white/10 focus:ring-primary/50"
                                            }`}
                                        />
                                        {nameError && (
                                            <p className="text-xs text-red-400/80 ml-1 mt-0.5">Numbers are not allowed in the name</p>
                                        )}
                                    </div>

                                    <div className="space-y-1">
                                        <label htmlFor="email" className="text-sm font-medium text-white/70 ml-1">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            id="email"
                                            placeholder="jane@company.com"
                                            value={email}
                                            onChange={(e) => {
                                                // Strip characters that cannot appear in a valid email
                                                const filtered = e.target.value.replace(/[^a-zA-Z0-9._%+\-@]/g, "");
                                                const hasInvalid = e.target.value !== filtered;
                                                if (hasInvalid) {
                                                    setEmailError(true);
                                                    setTimeout(() => setEmailError(false), 2000);
                                                }
                                                setEmail(filtered);
                                            }}
                                            className={`w-full h-12 bg-white/5 border rounded-xl px-4 text-white focus:outline-none focus:ring-2 transition-all placeholder:text-white/20 ${
                                                emailError
                                                    ? "border-red-500/60 focus:ring-red-500/30"
                                                    : "border-white/10 focus:ring-primary/50"
                                            }`}
                                        />
                                        {emailError && (
                                            <p className="text-xs text-red-400/80 ml-1 mt-0.5">Only valid email characters are allowed</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="mobile" className="text-sm font-medium text-white/70 ml-1">Mobile Number</label>
                                        <input
                                            required
                                            type="tel"
                                            id="mobile"
                                            placeholder="Enter your mobile number"
                                            inputMode="numeric"
                                            maxLength={10}
                                            pattern="[0-9]{10}"
                                            value={mobileNumber}
                                            onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, "").slice(0, 10))}
                                            className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-white/20"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium text-white/70 ml-1">How can we help?</label>
                                        <textarea
                                            required
                                            id="message"
                                            rows={4}
                                            placeholder={connectModalContent.messagePlaceholder}
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-white/20 resize-none"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full h-14 text-lg font-bold bg-primary text-black hover:bg-primary/90 shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all group"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center gap-3">
                                                <SelfDrawingLoader size={24} strokeWidth={1.5} />
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

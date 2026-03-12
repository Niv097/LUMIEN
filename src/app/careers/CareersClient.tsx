"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, CheckCircle2, Briefcase, Users, TrendingUp, Heart } from "lucide-react";
import { TextReveal } from "@/components/ui/text-reveal";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Briefcase,
    Users,
    TrendingUp,
    Heart,
};

interface CareersData {
    heading?: string;
    subheading?: string;
    benefits?: {
        title: string;
        description: string;
        icon: string;
    }[];
    jobOpenings?: {
        title: string;
        department: string;
        location: string;
        type: string;
        description: string;
    }[];
}

export default function CareersClient({ data }: { data: CareersData | null }) {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        position: "",
        coverLetter: "",
        resume: null as File | null
    });
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const content = {
        heading: data?.heading || "Join Our Team",
        subheading: data?.subheading || "Help us build the future of banking technology.",
        benefits: data?.benefits || [
            { title: "Competitive Compensation", description: "Industry-leading salary and equity packages", icon: "Briefcase" },
            { title: "World-Class Team", description: "Work with talented engineers from top tech companies", icon: "Users" },
            { title: "Growth Opportunities", description: "Continuous learning and career development", icon: "TrendingUp" },
            { title: "Work-Life Balance", description: "Flexible hours, remote work, and unlimited PTO", icon: "Heart" },
        ],
        jobOpenings: data?.jobOpenings || [
            { title: "Senior Software Engineer", department: "Engineering", location: "Mumbai / Remote", type: "Full-time", description: "Build core banking systems and APIs." },
            { title: "Product Manager", department: "Product", location: "Mumbai", type: "Full-time", description: "Lead product strategy for banking solutions." },
            { title: "DevOps Engineer", department: "Infrastructure", location: "Remote", type: "Full-time", description: "Manage cloud infrastructure and CI/CD pipelines." },
        ],
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate submission
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="min-h-screen">
            <section className="pt-32 pb-20">
                <div className="container px-4">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            <TextReveal>{content.heading}</TextReveal>
                        </h1>
                        <motion.p variants={itemVariants} className="text-xl text-muted-foreground mb-12">
                            {content.subheading}
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-gradient-to-b from-white/5 to-transparent border-y border-white/5">
                <div className="container px-4">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">
                        <TextReveal>Why Join Us</TextReveal>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {content.benefits.map((benefit, i) => {
                            const Icon = iconMap[benefit.icon] || Briefcase;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 border border-white/10 rounded-xl bg-white/5"
                                >
                                    <Icon className="w-10 h-10 text-primary mb-4" />
                                    <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Job Openings */}
            <section className="py-20">
                <div className="container px-4">
                    <h2 className="text-3xl font-bold text-white mb-8">Open Positions</h2>
                    <div className="space-y-4">
                        {content.jobOpenings.map((job, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative p-6 border border-white/10 rounded-xl bg-white/5 hover:border-primary/30 transition-all duration-300 group overflow-hidden cursor-pointer"
                            >
                                {/* Left-to-right hover effect background */}
                                <span className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />
                                
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300">{job.title}</h3>
                                        <p className="text-muted-foreground text-sm group-hover:text-white/70 transition-colors duration-300">{job.department} • {job.location} • {job.type}</p>
                                        <p className="text-muted-foreground mt-2 group-hover:text-white/80 transition-colors duration-300">{job.description}</p>
                                    </div>
                                    <Button variant="outline" className="border-white/20 text-white whitespace-nowrap hover:border-primary hover:bg-primary/10 transition-all duration-300">
                                        <span className="flex items-center">Apply Now <ArrowRight className="ml-2 w-4 h-4" /></span>
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section className="py-20 bg-gradient-to-b from-white/5 to-transparent border-t border-white/5">
                <div className="container px-4 max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold text-white text-center mb-8">Apply Now</h2>
                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-12"
                        >
                            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">Application Submitted!</h3>
                            <p className="text-muted-foreground">We'll get back to you within 5 business days.</p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-white mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full h-12 bg-white/5 border border-white/10 rounded-lg px-4 text-white focus:outline-none focus:border-primary"
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-white mb-2">Email</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full h-12 bg-white/5 border border-white/10 rounded-lg px-4 text-white focus:outline-none focus:border-primary"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-white mb-2">Position</label>
                                <select
                                    required
                                    className="w-full h-12 bg-white/5 border border-white/10 rounded-lg px-4 text-white focus:outline-none focus:border-primary"
                                    value={formData.position}
                                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                                >
                                    <option value="">Select a position</option>
                                    {content.jobOpenings.map((job, i) => (
                                        <option key={i} value={job.title}>{job.title}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-white mb-2">Cover Letter</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-primary resize-none"
                                    value={formData.coverLetter}
                                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                                    placeholder="Tell us why you're interested in this role..."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-white mb-2">Resume</label>
                                <div className="border border-white/10 border-dashed rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                                    <p className="text-muted-foreground text-sm">Drop your resume here or click to upload</p>
                                </div>
                            </div>
                            <Button type="submit" size="lg" disabled={isSubmitting} variant="outline" className="w-full border-white/20 text-white hover:border-primary hover:bg-primary/10 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300">
                                <span className={`flex items-center justify-center gap-2 transition-opacity ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                                    Submit Application
                                </span>
                                {isSubmitting && (
                                    <span className="absolute inset-0 flex items-center justify-center">
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        <span className="ml-2 text-white font-medium">Submitting...</span>
                                    </span>
                                )}
                            </Button>
                        </form>
                    )}
                </div>
            </section>
        </div>
    );
}

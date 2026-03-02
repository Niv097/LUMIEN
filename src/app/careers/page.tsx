"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, CheckCircle2, Briefcase, Users, TrendingUp, Heart } from "lucide-react";

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

const jobOpenings = [
    {
        title: "Senior Backend Engineer",
        department: "Engineering",
        location: "Remote / San Francisco",
        type: "Full-time",
        description: "Build scalable financial infrastructure APIs and microservices.",
        closingDate: "2026-12-31" // Future date: remains active
    },
    {
        title: "Frontend Engineer",
        department: "Engineering",
        location: "Remote / New York",
        type: "Full-time",
        description: "Create beautiful, performant user interfaces for our platform.",
        closingDate: "2026-12-31" // Future date: remains active
    },
    {
        title: "Product Designer",
        department: "Design",
        location: "Remote / London",
        type: "Full-time",
        description: "Design intuitive experiences for complex financial products.",
        closingDate: "2026-01-15" // Past date: will automatically hide!
    },
    {
        title: "DevOps Engineer",
        department: "Infrastructure",
        location: "Remote",
        type: "Full-time",
        description: "Ensure reliability and scalability of our global infrastructure.",
        closingDate: "2026-12-31"
    },
    {
        title: "Engineering Intern",
        department: "Engineering",
        location: "Remote / Hybrid",
        type: "Internship",
        description: "Learn and contribute to real-world fintech infrastructure.",
        closingDate: "2026-06-01"
    }
];

const benefits = [
    {
        icon: Briefcase,
        title: "Competitive Compensation",
        description: "Industry-leading salary and equity packages"
    },
    {
        icon: Users,
        title: "World-Class Team",
        description: "Work with talented engineers from top tech companies"
    },
    {
        icon: TrendingUp,
        title: "Growth Opportunities",
        description: "Continuous learning and career development"
    },
    {
        icon: Heart,
        title: "Work-Life Balance",
        description: "Flexible hours, remote work, and unlimited PTO"
    }
];

export default function CareersPage() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        position: "",
        coverLetter: "",
        resume: null as File | null
    });
    const [submitted, setSubmitted] = useState(false);

    // Automatically filter out jobs whose closing date has passed
    const activeJobs = jobOpenings.filter(job => {
        if (!job.closingDate) return true;
        return new Date(job.closingDate).getTime() > new Date().getTime();
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement actual form submission
        console.log("Form submitted:", formData);
        setSubmitted(true);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData({ ...formData, resume: e.target.files[0] });
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-black to-surface">
                <div className="container px-4 md:px-6 mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Build the Future of <span className="text-primary">Finance</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Join our mission to empower the next generation of fintech applications with enterprise-grade infrastructure.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20 bg-surface/50">
                <div className="container px-4 md:px-6 mx-auto">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-white mb-6">
                            Our Journey
                        </motion.h2>
                        <motion.div variants={itemVariants} className="space-y-4 text-muted-foreground">
                            <p>
                                Fiducia Tech was founded in 2020 with a simple yet ambitious vision: to democratize access to enterprise-grade financial infrastructure. We saw a world where innovative startups struggled with the complexity of building secure, compliant payment systems from scratch.
                            </p>
                            <p>
                                Today, we power over 200+ companies across 50 countries, processing billions in transactions annually. Our platform has evolved from a simple payment API to a comprehensive financial infrastructure suite, enabling everything from banking-as-a-service to embedded finance solutions.
                            </p>
                            <p>
                                But we're just getting started. As we continue to grow, we're looking for exceptional individuals who share our passion for building robust, scalable systems that empower businesses worldwide.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Why Fiducia Tech?</h2>
                        <p className="text-xl text-muted-foreground">
                            More than just a job—it's a career-defining opportunity
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-surface/50 border border-white/10 rounded-lg p-6 hover:border-primary/30 transition-colors"
                            >
                                <benefit.icon className="w-12 h-12 text-primary mb-4" />
                                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                                <p className="text-muted-foreground">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Openings Section */}
            <section className="py-20 bg-surface/50">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Open Positions</h2>
                        <p className="text-xl text-muted-foreground">
                            {activeJobs.length} opportunities to make an impact
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-4">
                        {activeJobs.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-surface border border-white/10 rounded-lg p-6 hover:border-primary/30 transition-all hover:shadow-[0_0_20px_rgba(0,229,255,0.1)]"
                            >
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-semibold text-white mb-2">{job.title}</h3>
                                        <p className="text-muted-foreground mb-3">{job.description}</p>
                                        <div className="flex flex-wrap gap-3 text-sm">
                                            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
                                                {job.department}
                                            </span>
                                            <span className="px-3 py-1 bg-white/5 text-muted-foreground rounded-full border border-white/10">
                                                {job.location}
                                            </span>
                                            <span className="px-3 py-1 bg-white/5 text-muted-foreground rounded-full border border-white/10">
                                                {job.type}
                                            </span>
                                        </div>
                                    </div>
                                    <Button
                                        className="bg-primary hover:bg-primary/90 text-black font-semibold"
                                        onClick={() => {
                                            setFormData({ ...formData, position: job.title });
                                            document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
                                        }}
                                    >
                                        Apply Now
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form Section */}
            <section id="application-form" className="py-20">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="max-w-2xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-white mb-4">Apply Now</h2>
                            <p className="text-xl text-muted-foreground">
                                Take the first step towards joining our team
                            </p>
                        </div>

                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-surface border border-primary/30 rounded-lg p-12 text-center"
                            >
                                <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-white mb-2">Application Submitted!</h3>
                                <p className="text-muted-foreground">
                                    Thank you for your interest. We'll review your application and get back to you soon.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="bg-surface border border-white/10 rounded-lg p-8 space-y-6">
                                <div>
                                    <label className="block text-white font-medium mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white focus:border-primary focus:outline-none"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label className="block text-white font-medium mb-2">Email *</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white focus:border-primary focus:outline-none"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-white font-medium mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white focus:border-primary focus:outline-none"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>

                                <div>
                                    <label className="block text-white font-medium mb-2">Position *</label>
                                    <select
                                        required
                                        value={formData.position}
                                        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white focus:border-primary focus:outline-none"
                                    >
                                        <option value="">Select a position</option>
                                        {activeJobs.map((job, index) => (
                                            <option key={index} value={job.title}>
                                                {job.title}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-white font-medium mb-2">Cover Letter *</label>
                                    <textarea
                                        required
                                        value={formData.coverLetter}
                                        onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                                        rows={6}
                                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white focus:border-primary focus:outline-none resize-none"
                                        placeholder="Tell us why you'd be a great fit for this role..."
                                    />
                                </div>

                                <div>
                                    <label className="block text-white font-medium mb-2">Resume/CV (PDF) *</label>
                                    <div className="relative">
                                        <input
                                            type="file"
                                            accept=".pdf"
                                            required
                                            onChange={handleFileChange}
                                            className="hidden"
                                            id="resume-upload"
                                        />
                                        <label
                                            htmlFor="resume-upload"
                                            className="flex items-center justify-center w-full px-4 py-8 bg-black/50 border-2 border-dashed border-white/20 rounded-lg cursor-pointer hover:border-primary/50 transition-colors"
                                        >
                                            <div className="text-center">
                                                <Upload className="w-8 h-8 text-primary mx-auto mb-2" />
                                                <p className="text-white font-medium">
                                                    {formData.resume ? formData.resume.name : "Click to upload PDF"}
                                                </p>
                                                <p className="text-sm text-muted-foreground mt-1">Maximum file size: 5MB</p>
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary/90 text-black font-bold h-12 text-lg"
                                >
                                    Submit Application
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

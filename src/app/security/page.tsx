"use client";

import { motion } from "framer-motion";
import { Shield, Lock, CheckCircle2, AlertTriangle, Activity } from "lucide-react";

const certifications = [
    {
        icon: Shield,
        title: "SOC 2 Type II",
        description: "Certified for security, availability, and confidentiality",
        status: "Certified"
    },
    {
        icon: Lock,
        title: "PCI DSS Level 1",
        description: "Highest level of payment card security compliance",
        status: "Certified"
    },
    {
        icon: CheckCircle2,
        title: "ISO 27001",
        description: "International standard for information security management",
        status: "Certified"
    },
    {
        icon: Shield,
        title: "GDPR Compliant",
        description: "Full compliance with EU data protection regulations",
        status: "Compliant"
    }
];

const securityMeasures = [
    {
        title: "Encryption",
        items: [
            "AES-256 encryption for data at rest",
            "TLS 1.3 for data in transit",
            "End-to-end encryption for sensitive data",
            "Hardware security modules (HSM) for key management"
        ]
    },
    {
        title: "Access Control",
        items: [
            "Multi-factor authentication (MFA) required",
            "Role-based access control (RBAC)",
            "Regular access reviews and audits",
            "Principle of least privilege enforcement"
        ]
    },
    {
        title: "Monitoring & Response",
        items: [
            "24/7 security operations center (SOC)",
            "Real-time threat detection and alerting",
            "Automated incident response procedures",
            "Regular penetration testing and vulnerability assessments"
        ]
    },
    {
        title: "Infrastructure",
        items: [
            "Multi-region redundancy and failover",
            "DDoS protection and mitigation",
            "Regular security patches and updates",
            "Isolated network segments and firewalls"
        ]
    }
];

const systemStatus = [
    { service: "API Gateway", status: "operational", uptime: "99.99%" },
    { service: "Payment Processing", status: "operational", uptime: "99.98%" },
    { service: "Authentication Service", status: "operational", uptime: "100%" },
    { service: "Database Cluster", status: "operational", uptime: "99.99%" },
    { service: "Webhook Delivery", status: "operational", uptime: "99.97%" }
];

export default function SecurityPage() {
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
                        <Shield className="w-20 h-20 text-primary mx-auto mb-6" />
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Security & Compliance
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Enterprise-grade security and compliance standards to protect your data and ensure trust.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* System Status Section */}
            <section className="py-20">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <Activity className="w-8 h-8 text-primary" />
                            <h2 className="text-3xl font-bold text-white">System Status</h2>
                        </div>

                        <div className="bg-surface border border-white/10 rounded-lg overflow-hidden">
                            <div className="bg-green-500/10 border-b border-green-500/20 px-6 py-4">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                    <span className="text-green-500 font-semibold">All Systems Operational</span>
                                </div>
                            </div>

                            <div className="divide-y divide-white/10">
                                {systemStatus.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="px-6 py-4 flex items-center justify-between"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                            <span className="text-white font-medium">{item.service}</span>
                                        </div>
                                        <div className="flex items-center gap-6">
                                            <span className="text-sm text-muted-foreground">Uptime: {item.uptime}</span>
                                            <span className="text-sm text-green-500 capitalize">{item.status}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
            <section className="py-20 bg-surface/50">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Certifications & Compliance</h2>
                        <p className="text-xl text-muted-foreground">
                            We maintain the highest industry standards
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-surface border border-white/10 rounded-lg p-6 text-center hover:border-primary/30 transition-colors"
                            >
                                <cert.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
                                <p className="text-sm text-muted-foreground mb-3">{cert.description}</p>
                                <span className="inline-block px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-xs font-medium border border-green-500/20">
                                    {cert.status}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security Measures Section */}
            <section className="py-20">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Security Measures</h2>
                        <p className="text-xl text-muted-foreground">
                            Multi-layered security architecture
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {securityMeasures.map((measure, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-surface border border-white/10 rounded-lg p-6"
                            >
                                <h3 className="text-2xl font-semibold text-white mb-4">{measure.title}</h3>
                                <ul className="space-y-3">
                                    {measure.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                            <span className="text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Incident Response Section */}
            <section className="py-20 bg-surface/50">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <AlertTriangle className="w-8 h-8 text-primary" />
                            <h2 className="text-3xl font-bold text-white">Incident Response</h2>
                        </div>

                        <div className="bg-surface border border-white/10 rounded-lg p-8 space-y-6">
                            <p className="text-muted-foreground">
                                We maintain a comprehensive incident response plan to quickly identify, contain, and resolve security incidents.
                            </p>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-white font-semibold mb-2">Detection & Analysis</h4>
                                    <p className="text-muted-foreground text-sm">
                                        Automated monitoring systems detect anomalies and potential security incidents in real-time.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-white font-semibold mb-2">Containment & Eradication</h4>
                                    <p className="text-muted-foreground text-sm">
                                        Immediate isolation of affected systems and removal of threats to prevent further damage.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-white font-semibold mb-2">Recovery & Communication</h4>
                                    <p className="text-muted-foreground text-sm">
                                        Restoration of services and transparent communication with affected customers.
                                    </p>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-white/10">
                                <p className="text-sm text-muted-foreground">
                                    To report a security vulnerability, please email:{" "}
                                    <a href="mailto:security@fiduciatech.com" className="text-primary hover:underline">
                                        security@fiduciatech.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

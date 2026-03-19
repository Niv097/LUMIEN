"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Store, Rocket, Zap, FileText, CreditCard } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/ui/text-reveal";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Store,
  Rocket,
  Zap,
  FileText,
  CreditCard,
};

interface SolutionsData {
  heading?: string;
  subheading?: string;
  solutions?: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export default function SolutionsClient({ data }: { data: SolutionsData | null }) {
  const content = {
    heading: data?.heading || "Solutions",
    subheading: data?.subheading || "Comprehensive banking technology solutions for modern financial institutions.",
    solutions: data?.solutions || [
      { title: "Core Banking System", description: "Modern CBS for CASA, deposits & loans with real-time ledger & MIS.", icon: "Store", slug: "core-banking" },
      { title: "Regulatory & Compliance", description: "RBI reporting automation, AML/KYC workflows, and audit-ready controls.", icon: "Rocket", slug: "compliance" },
      { title: "Digital Banking", description: "Omnichannel mobile, internet, and corporate banking with UPI & IMPS.", icon: "Zap", slug: "digital-banking" },
      { title: "Document Management System", description: "Encrypted document vault with role-based access, automated workflows, and compliance archiving.", icon: "FileText", slug: "dms" },
      { title: "Loan Management System", description: "End-to-end loan lifecycle management from origination to repayment with automated credit appraisal.", icon: "CreditCard", slug: "lms" },
    ] as { title: string; description: string; icon: string; slug: string }[],
  };

  const colorConfig = [
    { colorClass: "text-primary", glowClass: "bg-primary", gradientClass: "from-primary/20" },
    { colorClass: "text-accent", glowClass: "bg-accent", gradientClass: "from-accent/20" },
    { colorClass: "text-purple-500", glowClass: "bg-purple-500", gradientClass: "from-purple-500/20" },
    { colorClass: "text-blue-400", glowClass: "bg-blue-400", gradientClass: "from-blue-400/20" },
    { colorClass: "text-amber-400", glowClass: "bg-amber-400", gradientClass: "from-amber-400/20" },
  ];

  const solutionImages = [
    "/images/CORE.jpg",
    "/images/Regulatory.jpg",
    "/images/DIgital.jpg",
    "/images/DMS.jpg",
    "/images/LMS.jpg",
  ];

  return (
    <div className="min-h-screen">
      <Section className="pt-4 md:pt-32 pb-12 md:pb-20 text-center flex flex-col justify-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          <TextReveal>{content.heading}</TextReveal>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {content.subheading}
        </p>
      </Section>

      <div className="space-y-0">
        {content.solutions.map((sol, i) => {
          const Icon = iconMap[sol.icon] || Store;
          const { colorClass, glowClass } = colorConfig[i % colorConfig.length];
          const slug = (sol as { title: string; description: string; icon: string; slug?: string }).slug ?? sol.title.toLowerCase().replace(/\s+/g, "-");

          return (
            <Section
              key={i}
              className="py-12 md:py-24 border-t border-white/5 relative overflow-hidden flex flex-col justify-center"
            >
              {/* Glowing orb effect */}
              <div className={`absolute ${i % 2 === 0 ? '-right-40' : '-left-40'} top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[120px] opacity-40 ${glowClass}`} />

              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className={`order-2 lg:order-none ${i % 2 === 1 ? "lg:col-start-2" : ""}`}
                >
                  <Icon className={`w-12 h-12 ${colorClass} mb-6`} />
                  <h2 className="text-4xl font-bold text-white mb-6">{sol.title}</h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {sol.description}
                  </p>
                  <div className="flex gap-4">
                    <Button variant="outline" className="border-white/20 text-white hover:border-primary hover:bg-primary/10 transition-all duration-300">
                      Learn More
                    </Button>
                    <Link href={`/case-study/${slug}`}>
                      <Button variant="ghost" className="text-primary hover:text-white hover:bg-transparent pl-0">
                        View Case Studies <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                  className={`order-1 lg:order-none ${i % 2 === 1 ? "lg:col-start-1" : ""}`}
                >
                  <div className="aspect-video rounded-xl border border-white/10 relative overflow-hidden group shadow-2xl">
                    <Image
                      src={solutionImages[i]}
                      alt={sol.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* subtle dark overlay on hover lifted */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                  </div>
                </motion.div>
              </div>
            </Section>
          );
        })}
      </div>
    </div>
  );
}

"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle, AlertCircle, Lightbulb, TrendingUp, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { useModal } from "@/lib/modal-context";
import type { CaseStudy } from "@/content/site-content";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

interface CaseStudyPageProps {
  data: CaseStudy;
}

export function CaseStudyPage({ data }: CaseStudyPageProps) {
  const { openConnectModal } = useModal();

  return (
    <div className="flex flex-col min-h-screen">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className={`relative pt-8 pb-20 md:pb-32 overflow-hidden bg-gradient-to-b ${data.gradient}`}>
        {/* subtle grid overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Solutions
            </Link>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
                Case Study
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6"
            >
              {data.title}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
            >
              {data.tagline}
            </motion.p>
          </motion.div>
        </div>

        {/* bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </section>

      {/* ── PROBLEM STATEMENT ────────────────────────────────── */}
      <Section className="border-t border-white/5 bg-black">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-red-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Problem Statement</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {data.problem}
            </p>
          </motion.div>

          {/* ── SOLUTION PROVIDED ── */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Solution Provided</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {data.solution}
            </p>
          </motion.div>
        </motion.div>
      </Section>

      {/* ── KEY FEATURES ─────────────────────────────────────── */}
      <Section className="border-t border-white/5 bg-black/50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-12">
            <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm font-medium text-accent mb-4">
              Key Features
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              What's included
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.features.map((feature, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex items-start gap-3 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-white/[0.07] transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-white/90 text-sm leading-relaxed">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* ── RESULTS / IMPACT ─────────────────────────────────── */}
      <Section className="border-t border-white/5 bg-black">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className={`w-6 h-6 ${data.accentColor}`} />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Results &amp; Impact</h2>
            </div>
            <p className="text-muted-foreground text-lg">Measurable outcomes delivered after implementation.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {data.results.map((result, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="relative p-6 rounded-2xl bg-white/5 border border-white/10 text-center overflow-hidden group hover:border-primary/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className={`text-3xl md:text-4xl font-bold ${data.accentColor} mb-2 relative z-10`}>
                  {result.metric}
                </div>
                <div className="text-sm text-muted-foreground relative z-10 leading-snug">
                  {result.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <Section className="border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-black to-black opacity-70" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to transform your bank?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Talk to our team about implementing {data.title} for your institution.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={openConnectModal}
              className="h-14 px-8 text-base font-bold bg-primary text-black hover:bg-primary/90 shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all"
            >
              Apply Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Link href="/solutions">
              <Button
                variant="outline"
                className="h-14 px-8 text-base border-white/20 text-white hover:border-primary hover:bg-primary/10 transition-all"
              >
                View All Solutions
              </Button>
            </Link>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}

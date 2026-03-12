"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { ParticleBackground } from "@/components/ui/particle-background";
import { SequentialTypewriter } from "@/components/ui/typewriter-text";
import { useModal } from "@/lib/modal-context";
import { FeatureCards } from "@/components/home/feature-cards";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as any
    },
  },
};

interface HomeData {
  heroBadge?: string;
  heroHeadline?: string[];
  heroParagraph?: string;
  heroButtonText?: string;
  stats?: { value: string; label: string }[];
  aboutHeading?: string;
  aboutParagraph?: string;
  featureCards?: { title: string; description: string; image: any; href: string }[];
  ctaHeading?: string;
  ctaParagraph?: string;
  ctaButtonText?: string;
  solutionsBadge?: string;
  solutionsHeading?: string;
  solutionsHeadingBreak?: string;
  solutionsParagraph?: string;
  trustHeading?: string;
  trustTags?: string[];
}

export default function HomeClient({ data }: { data: HomeData | null }) {
  const { openConnectModal } = useModal();

  // Fallback to default content if CMS data is not available
  const content = {
    heroBadge: data?.heroBadge || "Lumien Innovative Ventures Pvt. Ltd.",
    heroHeadline: data?.heroHeadline || ["India's", "Compliance-Driven", "Banking Technology Partner"],
    heroParagraph: data?.heroParagraph || "Lumien delivers end-to-end banking software solutions built specifically for Indian banks. Secure, scalable, and aligned with RBI, NPCI, and SEBI guidelines.",
    heroButtonText: data?.heroButtonText || "Schedule a Consultation",
    stats: data?.stats || [
      { value: "Compliance", label: "Embedded by design" },
      { value: "Secure", label: "Audit-grade controls" },
      { value: "Scalable", label: "Cloud & on-prem" },
    ],
    aboutHeading: data?.aboutHeading || "About Lumien",
    aboutParagraph: data?.aboutParagraph || "We build banking technology for Public Sector Banks, Private Sector Banks, Cooperative Banks, Regional Rural Banks, and Small Finance Banks.",
    solutionsBadge: data?.solutionsBadge || "Banking Software Solutions",
    solutionsHeading: data?.solutionsHeading || "End-to-end modules,",
    solutionsHeadingBreak: data?.solutionsHeadingBreak || "API-ready infrastructure",
    solutionsParagraph: data?.solutionsParagraph || "Core banking, compliance, digital channels, and analytics—built for Indian regulatory requirements.",
    trustHeading: data?.trustHeading || "Trusted by leading banks",
    trustTags: data?.trustTags || ["Public Sector Banks", "Private Banks", "Cooperative Banks", "RRBs"],
    ctaHeading: data?.ctaHeading || "Ready to modernize your bank?",
    ctaParagraph: data?.ctaParagraph || "Join leading Indian banks using Lumien's compliance-first technology stack.",
    ctaButtonText: data?.ctaButtonText || "Schedule a Consultation",
  };

  const heroHeadlineSegments = content.heroHeadline.map((text, i) => ({
    text,
    br: i < content.heroHeadline.length - 1,
    className: i === 2 ? "text-primary" : i === 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50" : undefined
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <ParticleBackground />
      {/* Hero Section */}
      <section className="relative pt-10 pb-24 md:pb-40 overflow-hidden bg-transparent min-h-[800px] flex items-center">
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="w-full md:w-1/2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-6 gpu-accelerated"
            >
              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-base md:text-sm font-medium text-primary mb-4">
                  <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                  {content.heroBadge}
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15]">
                  <SequentialTypewriter
                    speed={120}
                    delay={400}
                    segments={heroHeadlineSegments as any}
                  />
                </h1>
              </motion.div>

              <motion.div variants={itemVariants}>
                <p className="text-lg md:text-xl text-muted-foreground max-w-[600px] leading-relaxed">
                  {content.heroParagraph}
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base h-12 px-8 border-white/20 text-white hover:text-black hover:border-primary transition-all duration-300 relative overflow-hidden group"
                  onClick={openConnectModal}
                >
                  <span className="relative z-10">{content.heroButtonText}</span>
                  <span className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />
                </Button>
              </motion.div>

              <motion.div variants={itemVariants} className="mt-8 pt-8 border-t border-white/10 hidden md:flex gap-8">
                {content.stats.map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-2xl md:text-3xl font-bold text-white">{stat.value}</span>
                    <span className="text-xs md:text-sm text-muted-foreground">{stat.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:flex items-center justify-start -ml-20 overflow-hidden pointer-events-none"
        >
          <div
            className="relative w-full aspect-square max-w-[700px] flex items-center justify-center opacity-40 md:opacity-100"
            style={{
              maskImage: 'radial-gradient(circle at center, black 35%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black 35%, transparent 80%)'
            }}
          >
            <img
              src="/images/photo.png"
              alt="Platform Interface"
              className="w-full h-full object-cover mix-blend-screen scale-[1.2]"
            />
          </div>
          <div className="absolute inset-0 bg-primary/5 rounded-full blur-[120px] scale-50 opacity-30 pointer-events-none" />
        </motion.div>
      </section>

      {/* Platform Overview */}
      <Section className="border-t border-white/5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {content.aboutHeading}
          </h2>
          <p className="text-xl md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {content.aboutParagraph}
          </p>
        </motion.div>

        <div className="p-4">
          <FeatureCards />
        </div>
      </Section>

      {/* Code / Developer Section */}
      <Section className="border-t border-white/5 relative bg-black">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm font-medium text-accent mb-6">
              <Code2 className="mr-2 h-4 w-4" />
              {content.solutionsBadge}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {content.solutionsHeading} <br /> {content.solutionsHeadingBreak}
            </h2>
            <p className="text-xl md:text-lg text-muted-foreground mb-8 text-pretty">
              {content.solutionsParagraph}
            </p>
            <Link href="/platform">
              <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 backdrop-blur-sm">
                Explore APIs <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl opacity-30" />
            <div className="relative bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/20" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20" />
                </div>
                <div className="text-xs text-muted-foreground font-mono opacity-70">payment-intent.ts</div>
              </div>
              <div className="p-6 overflow-x-auto bg-black">
                <pre className="font-mono text-sm leading-relaxed">
                  <span className="text-[#C792EA]">const</span> <span className="text-[#82AAFF]">txn</span> <span className="text-[#89DDFF]">=</span> <span className="text-[#C792EA]">await</span> <span className="text-[#FFCB6B]">lumien</span>.<span className="text-[#82AAFF]">transactions</span>.<span className="text-[#FFCB6B]">create</span>({"{"}
                  {'\n'}  <span className="text-[#F07178]">amount</span>: <span className="text-[#F78C6C]">5000</span>,
                  {'\n'}  <span className="text-[#F07178]">currency</span>: <span className="text-[#C3E88D]">'usd'</span>,
                  {'\n'}  <span className="text-[#F07178]">customer</span>: <span className="text-[#C3E88D]">'cus_123456789'</span>,
                  {'\n'}  <span className="text-[#F07178]">payment_method</span>: <span className="text-[#C3E88D]">'pm_card_visa'</span>,
                  {'\n'}  <span className="text-[#F07178]">confirm</span>: <span className="text-[#F78C6C]">true</span>
                  {'\n'}{"}"});
                  {'\n'}
                  {'\n'}<span className="text-[#546E7A] italic">// Handle successful payment</span>
                  {'\n'}<span className="text-[#89DDFF]">if</span> (txn.status === <span className="text-[#C3E88D]">'succeeded'</span>) {"{"}
                  {'\n'}  <span className="text-[#82AAFF]">console</span>.<span className="text-[#FFCB6B]">log</span>(<span className="text-[#C3E88D]">'Transaction verified!'</span>);
                  {'\n'}{"}"}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Trust Section */}
      <Section className="py-24 border-t border-white/5 bg-black">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-muted-foreground mb-12 uppercase tracking-widest">
            {content.trustHeading}
          </p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {content.trustTags.map((tag) => (
              <h3 key={tag} className="text-2xl font-bold text-white hover:text-primary transition-colors cursor-default">{tag}</h3>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-primary/5 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-black to-black opacity-70" />

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              {content.ctaHeading}
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              {content.ctaParagraph}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-8 text-lg border-white/20 text-white hover:text-black hover:border-primary transition-all duration-300 relative overflow-hidden group"
                onClick={openConnectModal}
              >
                <span className="relative z-10">{content.ctaButtonText}</span>
                <span className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}

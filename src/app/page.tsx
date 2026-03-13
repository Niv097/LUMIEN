"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Code2, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { ParticleBackground } from "@/components/ui/particle-background";
import { SequentialTypewriter } from "@/components/ui/typewriter-text";
import { useModal } from "@/lib/modal-context";
import { homeContent } from "@/content/site-content";
import { FeatureCards } from "@/components/home/feature-cards";
import { UnderlineButton } from "@/components/ui/underline-button";

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

export default function Home() {
  const { openConnectModal } = useModal();

  return (
    <div className="flex flex-col min-h-screen">
      <ParticleBackground />
      {/* Hero Section */}
      <section className="relative pt-4 md:pt-16 pb-8 md:pb-40 overflow-hidden bg-transparent flex items-start md:items-center">
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="w-full md:w-1/2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-8 md:gap-6 gpu-accelerated"
            >
              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-base md:text-sm font-medium text-primary">
                  <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                  {homeContent.heroBadge}
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                  <SequentialTypewriter
                    speed={120}
                    delay={400}
                    segments={homeContent.heroHeadlineSegments.map((s) => ({
                      text: s.text,
                      className: (s as any).className ?? undefined,
                      br: Boolean((s as any).br),
                    }))}
                  />
                </h1>
              </motion.div>

              <motion.div variants={itemVariants}>
                <p className="text-lg md:text-xl text-muted-foreground max-w-[600px] leading-relaxed whitespace-pre-line">
                  {homeContent.heroParagraphLines.join("\n")}
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="mt-8 md:mt-4">
                <UnderlineButton onClick={openConnectModal}>
                  {homeContent.heroSecondaryCta}
                </UnderlineButton>
              </motion.div>

              <motion.div variants={itemVariants} className="mt-8 pt-8 border-t border-white/10 hidden md:flex gap-8">
                {homeContent.heroStats.map((stat, i) => (
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
          {/* Circular Spotlight Effect Wrapper */}
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

          {/* Subtle surrounding glow to match screenshot ambience */}
          <div className="absolute inset-0 bg-primary/5 rounded-full blur-[120px] scale-50 opacity-30 pointer-events-none" />
        </motion.div>
      </section >

      {/* Platform Overview */}
      <Section className="border-t border-white/5 flex flex-col justify-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {homeContent.solutionsBadge}
          </h2>
          <p className="text-xl md:text-lg text-muted-foreground max-w-2xl mx-auto whitespace-pre-line">
            {homeContent.solutionsParagraphLines.join("\n")}
          </p>
        </motion.div>

        <div className="p-4">
          <FeatureCards />
        </div>
      </Section >

      {/* Code / Developer Section */}
      <Section className="border-t border-white/5 relative bg-black flex flex-col justify-center">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm font-medium text-accent mb-6">
              <Code2 className="mr-2 h-4 w-4" />
              Banking Integration
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Compliance-ready APIs,<br />built for Indian banking.
            </h2>
            <p className="text-xl md:text-lg text-muted-foreground mb-8 text-pretty">
              Our API reference and integration guides help banks connect core systems, 
              compliance workflows, and digital channels with regulatory confidence.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "RBI-compliant API specifications",
                "UPI, IMPS, RTGS/NEFT integration helpers",
                "AML & KYC workflow templates",
                "Audit-grade logging & access controls"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-white/80">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Button variant="outline" size="lg" className="border-white/20 text-white hover:border-primary hover:bg-primary/10 transition-all duration-300">
              View API Documentation
            </Button>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
            <div className="relative rounded-xl border border-white/10 bg-black overflow-hidden shadow-2xl frame-hover-effect">
              <div className="flex items-center px-4 py-3 border-b border-white/10 bg-white/5 justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="text-xs text-muted-foreground font-mono opacity-70">payment-intent.ts</div>
              </div>
              <div className="p-6 overflow-x-auto bg-black">
                <pre className="font-mono text-sm leading-relaxed">
                  <span className="text-[#C792EA]">const</span> <span className="text-[#82AAFF]">{homeContent.codeSample.varName}</span> <span className="text-[#89DDFF]">=</span> <span className="text-[#C792EA]">await</span> <span className="text-[#FFCB6B]">{homeContent.codeSample.clientName}</span>.<span className="text-[#82AAFF]">{homeContent.codeSample.callNamespace}</span>.<span className="text-[#FFCB6B]">verify</span>({"{"}
                  {'\n'}  <span className="text-[#F07178]">account</span>: <span className="text-[#C3E88D]">'ACC123456'</span>,
                  {'\n'}  <span className="text-[#F07178]">ifsc</span>: <span className="text-[#C3E88D]">'HDFC0000123'</span>,
                  {'\n'}  <span className="text-[#F07178]">amount</span>: <span className="text-[#F78C6C]">50000</span>,
                  {'\n'}  <span className="text-[#F07178]">validateCompliance</span>: <span className="text-[#F78C6C]">true</span>
                  {'\n'}{"}"});
                  {'\n'}
                  {'\n'}<span className="text-[#546E7A] italic">// Transaction validated successfully</span>
                  {'\n'}<span className="text-[#89DDFF]">if</span> ({homeContent.codeSample.varName}.status === <span className="text-[#C3E88D]">'verified'</span>) {"{"}
                  {'\n'}  <span className="text-[#82AAFF]">console</span>.<span className="text-[#FFCB6B]">log</span>(<span className="text-[#C3E88D]">'{homeContent.codeSample.successLog}'</span>);
                  {'\n'}{"}"}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </Section >

      {/* Trust Section */}
      < Section className="py-24 border-t border-white/5 bg-black flex flex-col justify-center" >
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-muted-foreground mb-12 uppercase tracking-widest">
            Trusted by Indian banks & financial institutions
          </p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <h3 className="text-2xl font-bold text-white hover:text-primary transition-colors cursor-default">Public Sector Banks</h3>
            <h3 className="text-2xl font-bold text-white hover:text-primary transition-colors cursor-default">Private Banks</h3>
            <h3 className="text-2xl font-bold text-white hover:text-primary transition-colors cursor-default">Cooperative Banks</h3>
            <h3 className="text-2xl font-bold text-white hover:text-primary transition-colors cursor-default">Regional Rural Banks</h3>
            <h3 className="text-2xl font-bold text-white hover:text-primary transition-colors cursor-default">Small Finance Banks</h3>
          </div>
        </div>
      </Section >

      {/* CTA Section */}
      < Section className="relative overflow-hidden py-32 flex flex-col justify-center" >
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
              {homeContent.ctaHeadingLine1}
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto whitespace-pre-line">
              {homeContent.ctaParagraphLines.join("\n")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <UnderlineButton onClick={openConnectModal}>
                {homeContent.ctaSecondary}
              </UnderlineButton>
            </div>
          </motion.div>
        </div>
      </Section >
    </div >
  );
}

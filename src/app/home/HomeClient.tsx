"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { ParticleBackground } from "@/components/ui/particle-background";
import { SequentialTypewriter } from "@/components/ui/typewriter-text";
import { useModal } from "@/lib/modal-context";
import { FeatureCards } from "@/components/home/feature-cards";

export type HeroSegment = {
  text: string;
  className?: string | null;
  br?: boolean | null;
};

export type HomeContent = {
  heroBadgeText?: string | null;
  heroSegments?: HeroSegment[] | null;
  heroParagraph?: string | null;
  platformTitle?: string | null;
  platformParagraph?: string | null;
};

type ResolvedHomeContent = {
  heroBadgeText: string;
  heroSegments: HeroSegment[];
  heroParagraph: string;
  platformTitle: string;
  platformParagraph: string;
};

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
      ease: [0.16, 1, 0.3, 1] as any,
    },
  },
};

const fallbackContent: ResolvedHomeContent = {
  heroBadgeText: "New Platform Release v2.4",
  heroSegments: [
    { text: "Financial", br: true },
    {
      text: "Infrastructure",
      className: "text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50",
      br: true,
    },
    { text: "Reimagined.", className: "text-primary" },
  ],
  heroParagraph:
    "Build scalable financial products with our unified API.\nBanking, payments, and compliance infrastructure for the modern enterprise.",
  platformTitle: "The Complete Financial Stack",
  platformParagraph:
    "Everything you need to build, launch, and scale financial products.\nOne platform, endless possibilities.",
};

export default function HomeClient({ content }: { content: HomeContent | null }) {
  const { openConnectModal } = useModal();

  const merged: ResolvedHomeContent = {
    heroBadgeText: content?.heroBadgeText ?? fallbackContent.heroBadgeText,
    heroSegments: content?.heroSegments ?? fallbackContent.heroSegments,
    heroParagraph: content?.heroParagraph ?? fallbackContent.heroParagraph,
    platformTitle: content?.platformTitle ?? fallbackContent.platformTitle,
    platformParagraph: content?.platformParagraph ?? fallbackContent.platformParagraph,
  };

  return (
    <div className="flex flex-col min-h-screen">
      <ParticleBackground />
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pb-40 overflow-hidden bg-transparent min-h-[800px] flex items-center">
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
                  {merged.heroBadgeText}
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                  <SequentialTypewriter
                    speed={120}
                    delay={400}
                    segments={merged.heroSegments.map((s) => ({
                      text: s.text,
                      className: s.className ?? undefined,
                      br: Boolean(s.br),
                    }))}
                  />
                </h1>
              </motion.div>

              <motion.div variants={itemVariants}>
                <p className="text-lg md:text-xl text-muted-foreground max-w-[600px] leading-relaxed whitespace-pre-line">
                  {merged.heroParagraph}
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button
                  size="lg"
                  className="text-lg md:text-base font-semibold bg-primary text-black hover:bg-primary/90 h-14 md:h-12 px-8"
                >
                  Start Building
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base h-12 px-8 border-white/20 hover:bg-white/5 text-white"
                  onClick={openConnectModal}
                >
                  Let's Connect
                </Button>
              </motion.div>

              <motion.div variants={itemVariants} className="mt-8 pt-8 border-t border-white/10 hidden md:flex gap-8">
                <div className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-bold text-white">99.99%</span>
                  <span className="text-xs md:text-sm text-muted-foreground">Uptime SLA</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-bold text-white">$50B+</span>
                  <span className="text-xs md:text-sm text-muted-foreground">Processed</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-bold text-white">200+</span>
                  <span className="text-xs md:text-sm text-muted-foreground">Countries</span>
                </div>
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
              maskImage: "radial-gradient(circle at center, black 35%, transparent 80%)",
              WebkitMaskImage: "radial-gradient(circle at center, black 35%, transparent 80%)",
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{merged.platformTitle}</h2>
          <p className="text-xl md:text-lg text-muted-foreground max-w-2xl mx-auto whitespace-pre-line">
            {merged.platformParagraph}
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
              Developer Experience
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Integrate in minutes, <br /> not months.
            </h2>
            <p className="text-xl md:text-lg text-muted-foreground mb-8 text-pretty">
              Our intuitive API reference and client libraries make integration seamless.
              Focus on building your product, not wrestling with infrastructure.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Type-safe SDKs for Node, Python, and Go",
                "Real-time webhooks and event streaming",
                "Sandbox environment for testing",
                "Comprehensive API documentation",
              ].map((item, i) => (
                <li key={i} className="flex items-center text-white/80">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Button variant="outline" size="lg" className="border-white/20 hover:bg-white/10 text-white h-12 px-6">
              Read Documentation
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
                  <span className="text-[#C792EA]">const</span> <span className="text-[#82AAFF]">payment</span> <span className="text-[#89DDFF]">=</span> <span className="text-[#C792EA]">await</span> <span className="text-[#FFCB6B]">fiducia</span>.<span className="text-[#82AAFF]">payments</span>.<span className="text-[#FFCB6B]">create</span>({"{"}
                  {"\n"}  <span className="text-[#F07178]">amount</span>: <span className="text-[#F78C6C]">5000</span>,
                  {"\n"}  <span className="text-[#F07178]">currency</span>: <span className="text-[#C3E88D]">'usd'</span>,
                  {"\n"}  <span className="text-[#F07178]">customer</span>: <span className="text-[#C3E88D]">'cus_123456789'</span>,
                  {"\n"}  <span className="text-[#F07178]">payment_method</span>: <span className="text-[#C3E88D]">'pm_card_visa'</span>,
                  {"\n"}  <span className="text-[#F07178]">confirm</span>: <span className="text-[#F78C6C]">true</span>
                  {"\n"}{"}"});
                  {"\n"}
                  {"\n"}<span className="text-[#546E7A] italic">// Handle successful payment</span>
                  {"\n"}<span className="text-[#89DDFF]">if</span> (payment.status === <span className="text-[#C3E88D]">'succeeded'</span>) {"{"}
                  {"\n"}  <span className="text-[#82AAFF]">console</span>.<span className="text-[#FFCB6B]">log</span>(<span className="text-[#C3E88D]">'Payment verified!'</span>);
                  {"\n"}{"}"}
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
            Trusted by innovative companies worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <h3 className="text-2xl font-bold text-white hover:text-primary transition-colors cursor-default">ACME Corp</h3>
            <h3 className="text-2xl font-bold text-white hover:text-primary transition-colors cursor-default">GlobalBank</h3>
            <h3 className="text-2xl font-bold text-white hover:text-primary transition-colors cursor-default">FinStart</h3>
            <h3 className="text-2xl font-bold text-white hover:text-primary transition-colors cursor-default">SecurePay</h3>
            <h3 className="text-2xl font-bold text-white hover:text-primary transition-colors cursor-default">TechFund</h3>
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
              Ready to transform <br /> your infrastructure?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join thousands of developers building the future of finance with Fiducia Tech.
              Get started with $500 in free credits.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button
                size="lg"
                className="h-14 px-8 text-lg font-bold bg-primary text-black hover:bg-primary/90 shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:shadow-[0_0_50px_rgba(0,229,255,0.6)] transition-shadow"
              >
                Get API Keys
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-8 text-lg border-white/10 text-white hover:bg-white/5 backdrop-blur-sm"
                onClick={openConnectModal}
              >
                Let's Connect
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Banknote, Globe, Lock, ShieldCheck, Wallet } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useModal } from "@/lib/modal-context";
import { TextReveal } from "@/components/ui/text-reveal";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BadgeCheck,
  Banknote,
  Globe,
  Lock,
  ShieldCheck,
  Wallet,
};

interface PlatformData {
  heading?: string;
  subheading?: string;
  modules?: {
    title: string;
    description: string;
    icon: string;
  }[];
  reliabilityFeatures?: {
    title: string;
    description: string;
  }[];
  ctaHeading?: string;
  ctaButtonText?: string;
}

export default function PlatformClient({ data }: { data: PlatformData | null }) {
  const { openConnectModal } = useModal();

  const content = {
    heading: data?.heading || "Platform",
    subheading: data?.subheading || "A unified infrastructure for modern banking operations.",
    modules: data?.modules || [
      { title: "Core Banking", description: "Ledger, accounts & transactions", icon: "Banknote" },
      { title: "Compliance", description: "Regulatory reporting & monitoring", icon: "ShieldCheck" },
      { title: "Digital Channels", description: "APIs for mobile & internet banking", icon: "Globe" },
      { title: "Security", description: "Encryption, access control & audit", icon: "Lock" },
      { title: "Integrations", description: "Connect with external systems", icon: "BadgeCheck" },
      { title: "Analytics", description: "Real-time insights & reporting", icon: "Wallet" },
    ],
    reliabilityFeatures: data?.reliabilityFeatures || [
      { title: "99.99% Uptime", description: "Built for high availability with redundant infrastructure." },
      { title: "Bank-Grade Security", description: "SOC 2 Type II certified with end-to-end encryption." },
      { title: "RBI Compliant", description: "Meets all regulatory requirements for Indian banks." },
    ],
    ctaHeading: data?.ctaHeading || "Ready to get started?",
    ctaButtonText: data?.ctaButtonText || "Contact Sales",
  };

  return (
    <div className="min-h-screen">
      <Section className="pt-32 pb-16 bg-gradient-to-b from-black to-background">
        <Section className="pt-32 pb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <TextReveal>{content.heading}</TextReveal>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {content.subheading}
          </p>
        </Section>
      </Section>

      <Section className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.modules.map((item, i) => {
            const Icon = iconMap[item.icon] || BadgeCheck;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: i * 0.1
                }}
              >
                <Card className="h-full border-white/5 bg-white/5 hover:bg-white/10 hover:border-primary/20 transition-all group">
                  <CardHeader>
                    <div className="p-3 bg-black rounded-lg w-fit mb-4 border border-white/10 group-hover:border-primary/30 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-white">{item.title}</CardTitle>
                    <CardDescription className="text-base mt-2">{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Section>

      <Section className="bg-white/5 border-y border-white/5 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Engineered for Reliability</h2>
            <div className="space-y-8">
              {content.reliabilityFeatures.map((feature, i) => (
                <div key={i}>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[400px] w-full rounded-xl overflow-hidden border border-white/10 bg-black/50 frame-hover-effect">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50" />
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-1 p-4 opacity-30">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="bg-white/5 rounded-sm" />
              ))}
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-6xl font-bold text-white/10">API</div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="text-center py-24">
        <h2 className="text-3xl font-bold text-white mb-8">{content.ctaHeading}</h2>
        <Button
          size="lg"
          className="bg-white text-black hover:bg-gray-200"
          onClick={openConnectModal}
        >
          {content.ctaButtonText}
        </Button>
      </Section>
    </div>
  );
}

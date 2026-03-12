"use client";

import { motion } from "framer-motion";
import { ArrowRight, Book, Box, Code2, Terminal, Cpu, Github } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/ui/text-reveal";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Terminal,
  Code2,
  Box,
  Cpu,
};

interface DevelopersData {
  domainLabel?: string;
  headingLine1?: string;
  headingLine2?: string;
  intro?: string;
  cards?: {
    title: string;
    description: string;
    icon: string;
  }[];
  guides?: string[];
}

export default function DevelopersClient({ data }: { data: DevelopersData | null }) {
  const content = {
    domainLabel: data?.domainLabel || "developers.lumien.in",
    headingLine1: data?.headingLine1 || "Build with Lumien",
    headingLine2: data?.headingLine2 || "Developer Platform",
    intro: data?.intro || "APIs, SDKs, and documentation for integrating Lumien's banking infrastructure into your applications.",
    cards: data?.cards || [
      { title: "API Reference", description: "Complete API documentation and endpoints", icon: "Terminal" },
      { title: "SDKs", description: "Client libraries for popular languages", icon: "Code2" },
      { title: "Integration Guides", description: "Step-by-step integration tutorials", icon: "Box" },
      { title: "Sandbox", description: "Test environment for development", icon: "Cpu" },
    ],
    guides: data?.guides || [
      "Getting Started with Lumien API",
      "Authentication & Security",
      "Webhooks & Events",
      "Error Handling",
    ],
  };

  return (
    <div className="min-h-screen">
      <Section className="pt-32 pb-16 bg-gradient-to-br from-black to-slate-900 border-b border-white/5">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="bg-primary/20 p-2 rounded-lg"><Terminal className="text-primary w-6 h-6" /></div>
            <span className="text-primary font-mono text-sm tracking-tighter">{content.domainLabel}</span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <TextReveal>{content.headingLine1}</TextReveal>
            <br />
            <TextReveal delay={0.3}>{content.headingLine2}</TextReveal>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl"
          >
            {content.intro}
          </motion.p>

          <div className="flex gap-4 mt-8">
            <Button className="bg-white text-black hover:bg-white/80"><Book className="mr-2 w-4 h-4" /> Read the Docs</Button>
            <Button variant="outline" className="border-white/10 text-white"><Github className="mr-2 w-4 h-4" /> GitHub</Button>
          </div>
        </div>
      </Section>

      <Section className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.cards.map((card, i) => {
            const Icon = iconMap[card.icon] || Terminal;
            return (
              <Card key={i} className="hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Icon className="text-primary" /> {card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-bold text-white mb-8">Popular Guides</h2>
          <div className="space-y-4">
            {content.guides.map((guide, i) => (
              <div key={i} className="flex justify-between items-center p-4 border border-white/5 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer group">
                <span className="text-white group-hover:text-primary transition-colors">{guide}</span>
                <ArrowRight className="text-white/20 group-hover:text-primary transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

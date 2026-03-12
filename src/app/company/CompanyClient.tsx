"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Flag, Globe2, Heart, Lightbulb } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/ui/text-reveal";
import Image from "next/image";

interface CompanyData {
  heading?: string;
  headingLine1?: string;
  headingLine2?: string;
  intro?: string;
  missionHeading?: string;
  missionText?: string;
  stats?: { value: string; label: string }[];
  valuesHeading?: string;
  values?: { title: string; description: string }[];
  joinTeamHeading?: string;
  joinTeamText?: string;
}

export default function CompanyClient({ data }: { data: CompanyData | null }) {
  const router = useRouter();

  const content = {
    headingLine1: data?.headingLine1 || "About",
    headingLine2: data?.headingLine2 || "Lumien",
    intro: data?.intro || "We're building the future of banking technology for India.",
    missionHeading: data?.missionHeading || "Our Mission",
    missionText: data?.missionText || "To empower Indian banks with modern, compliant, and scalable technology solutions.",
    stats: data?.stats || [
      { value: "50+", label: "Bank Partners" },
      { value: "₹10B+", label: "Transactions Processed" },
      { value: "99.99%", label: "Uptime" },
      { value: "24/7", label: "Support" },
    ],
    valuesHeading: data?.valuesHeading || "Our Values",
    values: data?.values || [
      { title: "Integrity", description: "We maintain the highest ethical standards in all our dealings." },
      { title: "Innovation", description: "We constantly push boundaries to deliver cutting-edge solutions." },
      { title: "Customer First", description: "Our customers' success is our primary measure of achievement." },
      { title: "Inclusivity", description: "We build technology that serves all segments of society." },
    ],
    joinTeamHeading: data?.joinTeamHeading || "Join Our Team",
    joinTeamText: data?.joinTeamText || "We're always looking for talented individuals who are passionate about transforming banking technology.",
  };

  const valueIcons = [Heart, Lightbulb, Flag, Globe2];

  return (
    <div className="min-h-screen">
      <Section className="pt-32 pb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
          <TextReveal>{content.headingLine1}</TextReveal>
          <br />
          <TextReveal delay={0.3}>{content.headingLine2}</TextReveal>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          {content.intro}
        </motion.p>
      </Section>

      <Section className="py-24 bg-gradient-to-b from-white/5 to-transparent border-y border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Globe2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{content.missionHeading}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              <TextReveal>Building the future of</TextReveal>
              <br />
              <span className="text-primary">
                <TextReveal delay={0.2}>Indian banking</TextReveal>
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {content.missionText}
            </p>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Lumien Team"
              fill
              className="object-contain p-12"
            />
          </div>
        </div>
      </Section>

      <Section className="py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {content.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-24 bg-gradient-to-b from-white/5 to-transparent border-y border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">{content.valuesHeading}</h2>
          <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.values.map((value, i) => {
            const Icon = valueIcons[i] || Heart;
            return (
              <div key={i} className="p-6 border border-white/10 rounded-xl bg-white/5 hover:border-primary/30 hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                <Icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">{value.title}</h3>
                <p className="text-muted-foreground group-hover:text-white/80 transition-colors duration-300">{value.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section className="py-24 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">{content.joinTeamHeading}</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {content.joinTeamText}
        </p>
        <Button
          variant="outline"
          size="lg"
          className="border-white/20 text-white hover:border-primary hover:bg-primary/10 transition-all duration-300"
          onClick={() => router.push('/careers')}
        >
          View Open Positions
        </Button>
      </Section>
    </div>
  );
}

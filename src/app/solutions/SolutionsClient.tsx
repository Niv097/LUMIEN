"use client";

import { motion } from "framer-motion";
import { ArrowRight, Store, Rocket, Zap } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/ui/text-reveal";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Store,
  Rocket,
  Zap,
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
      { title: "Core Banking", description: "Modern CBS for CASA, deposits & loans", icon: "Store" },
      { title: "Regulatory & Compliance", description: "RBI reporting, AML/KYC & controls", icon: "Rocket" },
      { title: "Digital Banking", description: "Mobile/Internet banking, UPI & IMPS", icon: "Zap" },
    ],
  };

  const colors = ["from-primary/20", "from-accent/20", "from-purple-500/20"];

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
          const colorClass = i === 0 ? "text-primary" : i === 1 ? "text-accent" : "text-purple-500";
          
          return (
            <Section
              key={i}
              className="py-12 md:py-24 border-t border-white/5 relative overflow-hidden flex flex-col justify-center"
            >
              {/* Glowing orb effect */}
              <div className={`absolute ${i % 2 === 0 ? '-right-40' : '-left-40'} top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[120px] opacity-40 ${i === 0 ? 'bg-primary' : i === 1 ? 'bg-accent' : 'bg-purple-500'}`} />
              
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className={i % 2 === 1 ? "lg:col-start-2" : ""}
                >
                  <Icon className={`w-12 h-12 ${colorClass} mb-6`} />
                  <h2 className="text-4xl font-bold text-white mb-6">{sol.title}</h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {sol.description}
                  </p>
                  <div className="flex gap-4">
                    <Button variant="outline" className="border-white/20 text-white hover:border-primary hover:bg-primary/10 transition-all duration-300">Learn More</Button>
                    <Button variant="ghost" className="text-primary hover:text-white hover:bg-transparent pl-0">
                      View Case Studies <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                  className={i % 2 === 1 ? "lg:col-start-1" : ""}
                >
                  <div className="aspect-video rounded-xl bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center text-white/5 font-bold text-8xl select-none">
                      SOL {i + 1}
                    </div>
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

import type { Metadata } from "next";
import { SegmentPage } from "@/components/solutions/SegmentPage";
import type { SegmentPageData } from "@/components/solutions/SegmentPage";

export const metadata: Metadata = {
  title: "Banking Solutions for Startups | LUMIEN",
  description: "Launch, scale, and innovate faster with flexible financial infrastructure built for startups.",
};

const data: SegmentPageData = {
  title: "Banking Solutions for Startups",
  subtitle: "Launch, scale, and innovate faster with flexible financial infrastructure",
  gradient: "from-emerald-500/20 via-black to-black",
  accentColor: "text-emerald-400",
  challenges: [
    "Limited financial infrastructure to support rapid growth",
    "Scaling payment systems as user volume spikes",
    "Managing compliance requirements at an early stage",
  ],
  solutions: [
    "Easy onboarding APIs that get you live in days, not months",
    "Scalable payment processing that grows with your user base",
    "Built-in compliance tools to handle AML, KYC, and regulatory reporting automatically",
  ],
  features: [
    "Fast integration with developer-first SDKs",
    "Developer-friendly APIs with sandbox & live environments",
    "Real-time analytics and transaction monitoring dashboard",
    "Secure, encrypted transactions with end-to-end audit trail",
  ],
  impact: [
    "Faster go-to-market with pre-built financial rails",
    "Reduced operational overhead through automation",
    "Scalable architecture that supports 10x growth without re-platforming",
  ],
};

export default function StartupsPage() {
  return <SegmentPage data={data} />;
}

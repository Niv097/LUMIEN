import type { Metadata } from "next";
import { SegmentPage } from "@/components/solutions/SegmentPage";
import type { SegmentPageData } from "@/components/solutions/SegmentPage";

export const metadata: Metadata = {
  title: "Embedded Banking for SaaS Platforms | LUMIEN",
  description: "Seamlessly integrate financial services into your SaaS product with Lumien's embedded banking APIs.",
};

const data: SegmentPageData = {
  title: "Embedded Banking for SaaS Platforms",
  subtitle: "Seamlessly integrate financial services into your SaaS product",
  gradient: "from-violet-500/20 via-black to-black",
  accentColor: "text-violet-400",
  challenges: [
    "Integrating payment workflows natively into existing platform UX",
    "Managing subscriptions, billing cycles, and revenue reconciliation",
    "Ensuring end-to-end transaction security and fraud prevention",
  ],
  solutions: [
    "Embedded payment systems that feel native to your product experience",
    "Subscription management with automated billing, proration, and dunning",
    "Secure API integrations with token-based authentication and role-based access",
  ],
  features: [
    "Recurring billing with flexible cycle configuration",
    "Payment gateway integration across multiple providers",
    "User-level financial tracking and spend analytics",
    "Secure authentication with MFA and audit-grade logging",
  ],
  impact: [
    "Increased revenue streams from embedded financial services",
    "Better user experience with seamless in-product payments",
    "Seamless financial operations with automated reconciliation and reporting",
  ],
};

export default function SaaSPage() {
  return <SegmentPage data={data} />;
}

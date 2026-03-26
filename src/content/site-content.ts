export type JobOpening = {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  closingDate?: string;
};

import {
  BadgeCheck,
  Banknote,
  BookOpen,
  Box,
  Briefcase,
  Building2,
  CheckCircle2,
  Code,
  Code2,
  Cpu,
  Globe,
  Heart,
  Layers,
  Lightbulb,
  Lock,
  Mail,
  Rocket,
  Shield,
  ShieldCheck,
  Store,
  Terminal,
  TrendingUp,
  Users,
  Wallet,
  Zap,
} from "lucide-react";

export type BlogPost = {
  title: string;
  date: string;
  href: string;
  excerpt: string;
};

export type SystemStatusItem = {
  service: string;
  status: "operational" | "degraded" | "outage";
  uptime: string;
};

export const contact = {
  email: "hello@lumien-india.com",
} as const;

export const navbarContent = {
  dropdownMenus: {
    Company: {
      items: [
        { name: "About Us", href: "/company", icon: Building2, description: "Who we are & what we do" },
        { name: "Careers", href: "/careers", icon: Briefcase, description: "Join our team" },
        { name: "Blog", href: "/company#blog", icon: BookOpen, description: "Latest insights" },
        { name: "Contact", href: "#contact", icon: Mail, description: "Get in touch", isModal: true },
      ],
    },
    Solutions: {
      items: [
        { name: "Core Banking System", href: "/solutions#marketplaces", icon: Store, description: "CBS for CASA, deposits & loans" },
        { name: "Regulatory & Compliance", href: "/solutions#startups", icon: Rocket, description: "RBI reporting, AML/KYC & controls" },
        { name: "Digital Banking", href: "/solutions#saas", icon: Zap, description: "Mobile/Internet banking, UPI & IMPS" },
      ],
    },
    Platform: {
      items: [
        { name: "Overview", href: "/platform", icon: Layers, description: "Platform capabilities" },
        { name: "API Reference", href: "/platform#api", icon: Code, description: "Integration docs" },
        { name: "Security", href: "/security", icon: Shield, description: "Trust & compliance" },
        { name: "Documentation", href: "/developers", icon: BookOpen, description: "Get started" },
      ],
    },
  },
  simpleLinks: [{ name: "Developers", href: "/developers" }],
  ctaLabel: "Request a Demo",
} as const;

export const footerContent = {
  tagline: "Compliance-driven banking technology for Indian banks, built with secure, scalable, and audit-ready systems.",
  companyCtaLabel: "Schedule a Consultation",
} as const;

export const connectModalContent = {
  title: "Schedule a Consultation",
  messagePlaceholder: "Tell us about your bank, scope, and compliance needs...",
} as const;

export const featureCardsContent = {
  features: [
    {
      image: "/images/01.jpeg",
      title: "Core Banking System",
      href: "/case-study/core-banking",
      description: "A scalable and secure CBS for CASA, deposits, loans, and real-time ledger & MIS.",
    },
    {
      image: "/images/02.jpeg",
      title: "Regulatory & Compliance",
      href: "/case-study/compliance",
      description: "RBI reporting automation, CRR/SLR monitoring, AML & KYC workflows, and audit-ready controls.",
    },
    {
      image: "/images/03.jpeg",
      title: "Digital Banking",
      href: "/case-study/digital-banking",
      description: "Omnichannel mobile, internet, and corporate banking with API banking plus UPI & IMPS integration.",
    },
    {
      image: "/images/04.jpeg",
      title: "Document Management System",
      href: "/case-study/dms",
      description: "Securely store, manage, and retrieve financial documents with advanced encryption and access control. Streamline document workflows, ensure compliance, and reduce manual paperwork for banking operations.",
    },
    {
      image: "/images/05.jpeg",
      title: "Loan Management System",
      href: "/case-study/lms",
      description: "Efficiently manage the entire loan lifecycle from application to approval and repayment. Automate workflows, track customer data, and improve decision-making with a smart loan processing system.",
    },
  ],
} as const;

export type CaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  gradient: string;
  accentColor: string;
  problem: string;
  solution: string;
  features: string[];
  results: { metric: string; label: string }[];
};

export const caseStudiesContent: Record<string, CaseStudy> = {
  "core-banking": {
    slug: "core-banking",
    title: "Core Banking System",
    tagline: "Modernizing legacy banking infrastructure for real-time operations",
    gradient: "from-cyan-500/20 via-black to-black",
    accentColor: "text-cyan-400",
    problem:
      "The bank was operating on outdated legacy systems causing slow transaction processing, limited scalability, and frequent downtime during peak hours. Branch operations were siloed with no real-time visibility into account balances or ledger positions, leading to reconciliation delays and customer dissatisfaction.",
    solution:
      "Lumien implemented a modern Core Banking System (CBS) with real-time processing, centralized data management, and high scalability. The system enabled seamless handling of CASA accounts, deposits, and loans across all branches. A unified customer master ensured data consistency, and the high-availability architecture eliminated single points of failure.",
    features: [
      "Real-time transaction processing across all channels",
      "Centralized customer database with unified KYC",
      "High availability architecture with automatic failover",
      "Scalable infrastructure supporting 10x peak load",
      "Integrated MIS & regulatory reporting engine",
      "Multi-branch & multi-currency operations",
    ],
    results: [
      { metric: "60%", label: "Faster transaction processing" },
      { metric: "40%", label: "Reduction in system downtime" },
      { metric: "99.99%", label: "System availability achieved" },
      { metric: "3x", label: "Branch throughput improvement" },
    ],
  },
  compliance: {
    slug: "compliance",
    title: "Regulatory & Compliance",
    tagline: "Ensuring full regulatory compliance with automated reporting",
    gradient: "from-teal-500/20 via-black to-black",
    accentColor: "text-teal-400",
    problem:
      "The bank struggled with manual compliance processes, delayed RBI reporting, and high risk of AML/KYC violations. Compliance officers spent over 60% of their time on manual data collection and report preparation, leaving little bandwidth for actual risk analysis. Audit readiness was poor and findings frequently resulted in regulatory notices.",
    solution:
      "Lumien developed an automated compliance system with real-time monitoring, AML/KYC validation, and instant report generation aligned with RBI regulations. The platform consolidates data from all banking modules, applies configurable rule engines for suspicious transaction detection, and generates submission-ready reports for RBI, FIU-IND, and internal audit committees.",
    features: [
      "Automated RBI regulatory report generation (BSR, DBIE, FMR)",
      "AML/KYC real-time verification & screening",
      "Configurable rule engine for suspicious activity detection",
      "CRR/SLR monitoring with automated alerts",
      "Risk assessment engine with dynamic scoring",
      "Audit trail & evidence management system",
    ],
    results: [
      { metric: "70%", label: "Reduction in manual compliance work" },
      { metric: "100%", label: "Regulatory reporting accuracy" },
      { metric: "2 days", label: "Audit readiness turnaround" },
      { metric: "0", label: "Regulatory notices post-implementation" },
    ],
  },
  "digital-banking": {
    slug: "digital-banking",
    title: "Digital Banking",
    tagline: "Delivering seamless and secure digital banking experiences",
    gradient: "from-purple-500/20 via-black to-black",
    accentColor: "text-purple-400",
    problem:
      "Customers faced slow mobile banking services, limited digital features, and poor transaction reliability leading to high drop-off rates. The bank's legacy internet banking portal had a 40% abandonment rate on payments and couldn't support UPI transactions. Customer complaints related to digital channels had increased 3x year-on-year.",
    solution:
      "Lumien built a modern digital banking platform with mobile-first design, UPI/IMPS integration, and secure multi-factor authentication systems. The platform supports real-time transaction tracking, instant fund transfers, and a self-service portal for account management. API-first architecture enabled rapid integration with third-party fintech services.",
    features: [
      "Mobile & internet banking platform (iOS, Android, Web)",
      "UPI & IMPS integration aligned with NPCI standards",
      "Secure MFA login with biometric authentication",
      "Real-time transaction tracking & instant notifications",
      "Corporate banking portal with maker-checker workflows",
      "API banking layer for fintech partner integrations",
    ],
    results: [
      { metric: "3x", label: "Increase in digital transactions" },
      { metric: "50%", label: "Faster payment processing" },
      { metric: "35%", label: "Increase in digital active users" },
      { metric: "90%", label: "Reduction in digital complaints" },
    ],
  },
  dms: {
    slug: "dms",
    title: "Document Management System",
    tagline: "Securely digitize, manage, and retrieve banking documents with full compliance traceability",
    gradient: "from-blue-500/20 via-black to-black",
    accentColor: "text-blue-400",
    problem:
      "The bank was managing thousands of loan documents, KYC records, and regulatory filings in physical form, creating significant storage costs, retrieval delays, and compliance gaps. Document loss during branch transfers and inability to produce original records during audits were recurring issues leading to regulatory scrutiny.",
    solution:
      "Lumien deployed a Document Management System with AES-256 encrypted storage, role-based access control, and automated document lifecycle management. Integration with the CBS ensures that every account and loan transaction automatically triggers the appropriate document capture workflow, eliminating manual handoffs and ensuring nothing falls through the cracks.",
    features: [
      "Encrypted document vault with AES-256 at rest",
      "Role-based access control with full audit trail",
      "Automated document workflow & approval routing",
      "OCR-powered document indexing & intelligent search",
      "Version control with tamper-evident storage",
      "Regulatory retention policies with automated archiving",
    ],
    results: [
      { metric: "80%", label: "Reduction in document retrieval time" },
      { metric: "100%", label: "Audit document availability" },
      { metric: "65%", label: "Storage cost reduction" },
      { metric: "Zero", label: "Document loss incidents post-go-live" },
    ],
  },
  lms: {
    slug: "lms",
    title: "Loan Management System",
    tagline: "Efficiently manage the full loan lifecycle from origination to closure",
    gradient: "from-amber-500/20 via-black to-black",
    accentColor: "text-amber-400",
    problem:
      "The bank's loan origination process was entirely manual, taking 7–14 days from application to disbursement. Credit appraisal relied on spreadsheets with no automated bureau pulls or income validation, resulting in high NPA rates and inconsistent underwriting decisions. Post-disbursement monitoring was absent, leading to missed early warning signals.",
    solution:
      "Lumien implemented an end-to-end Loan Management System covering origination, credit appraisal, sanctioning, disbursement, and collections. Automated credit bureau integration, rule-based eligibility checks, and digital document collection compressed the turnaround to under 48 hours. Real-time NPA monitoring and early warning indicators significantly improved portfolio quality.",
    features: [
      "Digital loan origination with e-KYC & video verification",
      "Automated credit bureau integration (CIBIL, Experian, CRIF)",
      "Rule-based eligibility engine with configurable credit policies",
      "Maker-checker sanction workflow with digital approvals",
      "Real-time repayment tracking & automated EMI processing",
      "NPA monitoring with early warning signal dashboard",
    ],
    results: [
      { metric: "75%", label: "Reduction in loan processing time" },
      { metric: "48 hrs", label: "Average disbursement turnaround" },
      { metric: "30%", label: "Improvement in NPA detection" },
      { metric: "4x", label: "Loan volume handled without added staff" },
    ],
  },
};


export const layoutContent = {
  metadata: {
    title: "LUMIEN",
    description: "India’s compliance-driven banking technology partner.",
  },
} as const;

export const homeContent = {
  heroBadge: "Lumien Innovative Ventures Pvt. Ltd.",
  heroHeadlineSegments: [
    { text: "India’s", br: true },
    { text: "Compliance-Driven", className: "text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50", br: true },
    { text: "Banking Technology Partner", className: "text-primary" },
  ],
  heroParagraphLines: [
    "Lumien delivers end-to-end banking software solutions built specifically for Indian banks.",
    "Secure, scalable, and aligned with RBI, NPCI, and SEBI guidelines.",
  ],
  heroPrimaryCta: "Request a Demo",
  heroSecondaryCta: "Schedule a Consultation",
  heroStats: [
    { value: "Compliance", label: "Embedded by design" },
    { value: "Secure", label: "Audit-grade controls" },
    { value: "Scalable", label: "Cloud & on-prem" },
  ],
  aboutHeading: "About Lumien",
  aboutParagraphLines: [
    "We build banking technology for Public Sector Banks, Private Sector Banks, Cooperative Banks,",
    "Regional Rural Banks, and Small Finance Banks.",
  ],
  solutionsBadge: "Banking Software Solutions",
  solutionsHeading: "End-to-end modules, ",
  solutionsHeadingBreak: "built for Indian banking.",
  solutionsParagraphLines: [
    "From Core Banking to Regulatory Compliance, Digital Channels to Risk Management,",
    "we power banks with technology that performs under scrutiny.",
  ],
  solutionsBullets: [
    "Core Banking System (CBS): CASA, Deposits, Loans & Advances",
    "Regulatory & Compliance: RBI reporting, CRR/SLR, AML & KYC workflows",
    "Digital Banking: Mobile/Internet/Corporate banking, API banking, UPI & IMPS",
    "Risk & Fraud: transaction monitoring, real-time alerts & escalations",
  ],
  solutionsCta: "Contact Our Banking Experts",
  trustHeading: "Built for Indian banks and regulatory expectations",
  trustTags: [
    "Public Sector Banks",
    "Private Sector Banks",
    "Cooperative Banks",
    "Regional Rural Banks",
    "Small Finance Banks",
  ],
  ctaHeadingLine1: "Partner With Lumien",
  ctaHeadingLine2: "and stay audit-ready.",
  ctaParagraphLines: [
    "Modernize legacy systems, strengthen compliance controls, and build next-generation",
    "digital banking platforms with a compliance-first approach.",
  ],
  ctaPrimary: "Request a Demo",
  ctaSecondary: "Schedule a Consultation",
  codeSample: {
    clientName: "lumien",
    callNamespace: "transactions",
    varName: "txn",
    successLog: "Transaction verified!",
  },
} as const;

export const solutionsPageContent = {
  heading: "Banking Software Solutions",
  subheading: "End-to-end modules built for Indian banks, aligned with RBI, NPCI, and SEBI guidelines.",
  sections: [
    {
      id: "marketplaces",
      title: "Core Banking System (CBS)",
      desc: "A scalable and secure Core Banking platform for CASA, deposits, loans & advances, real-time ledger & MIS, and high availability.",
      color: "from-blue-500/10",
      icon: Store,
    },
    {
      id: "startups",
      title: "Regulatory & Compliance Management",
      desc: "RBI reporting automation, CRR/SLR monitoring, AML & KYC workflows, suspicious transaction reporting, internal audit & risk controls.",
      color: "from-teal-500/10",
      icon: Users,
    },
    {
      id: "saas",
      title: "Digital Banking Platform",
      desc: "Omnichannel mobile, internet, and corporate banking with API banking, plus UPI & IMPS integration aligned with NPCI standards.",
      color: "from-purple-500/10",
      icon: Building2,
    },
  ],
} as const;

export const platformPageContent = {
  heading: "Compliance-Driven Banking Platform",
  subheadingLines: [
    "A modular suite for Indian banks—core banking, compliance, digital channels, risk,",
    "and integrations—designed to perform under regulatory scrutiny.",
  ],
  modules: [
    { title: "Core Banking", desc: "CBS modules for CASA, deposits, loans & advances with real-time ledger & MIS.", icon: Globe },
    { title: "Digital Channels", desc: "Mobile, internet, and corporate banking experiences with secure access controls.", icon: Wallet },
    { title: "Payments & Integrations", desc: "RTGS/NEFT, UPI/IMPS connectivity plus third‑party fintech and switch integrations.", icon: Banknote },
    { title: "Regulatory & Compliance", desc: "RBI reporting automation, CRR/SLR monitoring, AML/KYC workflows, and audit controls.", icon: ShieldCheck },
    { title: "Data, Analytics & Reporting", desc: "Regulatory reports, BI dashboards, and predictive risk models with strong governance.", icon: Lock },
    { title: "Risk & Fraud", desc: "Credit and operational risk tracking, fraud detection, monitoring, and real-time alerts.", icon: BadgeCheck },
  ],
  reliability: [
    {
      title: "High Availability Architecture",
      desc: "Designed for banking workloads with resilience, fault isolation, and operational continuity.",
    },
    {
      title: "Real-time Processing",
      desc: "Real-time ledger updates, monitoring, and alerts to support supervised banking operations.",
    },
    {
      title: "Security & Governance",
      desc: "Secure coding, encryption, role-based access, audit-grade logging, and DR/BCP support.",
    },
  ],
  bottomCtaHeading: "Partner with Lumien",
  bottomCtaLabel: "Schedule a Consultation",
} as const;

export const developersPageContent = {
  domainLabel: "developers.lumien-india.com",
  headingLine1: "Implement banking systems",
  headingLine2: "with confidence.",
  intro: "Integration guidance and implementation support for core banking, compliance workflows, digital channels, and integrations.",
  cards: [
    { title: "API Reference", description: "Integration details, specifications, and implementation guidelines.", icon: Box },
    { title: "SDKs & Libraries", description: "Reference connectors, integration helpers, and implementation accelerators.", icon: Cpu },
    { title: "Sample Apps", description: "Example flows for onboarding, reporting, monitoring, and operational dashboards.", icon: Code2 },
  ],
  guides: [
    "Automating RBI regulatory reporting",
    "Designing AML & KYC workflows",
    "UPI & IMPS integration considerations",
    "Audit-grade logging & access controls",
  ],
} as const;

export const companyPageContent = {
  headingLine1: "We build compliant technology",
  headingLine2: "for Indian banking.",
  introLines: [
    "LumienInnovative Ventures Pvt.Ltd. delivers end-to-end banking software solutions built specifically for Indian banks.",
    "We combine deep regulatory understanding with advanced technology to build secure, scalable systems.",
  ],
  missionParagraph1: "Enable banks to innovate confidently while staying fully compliant.",
  missionParagraph2: "We design systems aligned with guidelines from RBI, NPCI, and SEBI—so banks can modernize without regulatory gaps.",
  stats: [
    { value: "India", label: "Banking focus", icon: Globe },
    { value: "Compliance", label: "Built-in governance", icon: Users },
  ],
  values: [
    { title: "Compliance First", desc: "Regulatory frameworks are integrated at design level—not added later.", icon: Heart },
    { title: "Built for Indian Banking", desc: "We understand RBI circulars, inspection frameworks, and supervisory expectations.", icon: Lightbulb },
    { title: "Secure & Scalable", desc: "Encryption, RBAC, audit-grade logging, and cloud/on‑prem deployment.", icon: Shield },
  ],
  joinTeamText: "We are hiring engineers, designers, and product specialists to build secure, compliant banking systems.",
} as const;

export const legalContent = {
  termsIntro: "Please read these terms carefully before using LumienInnovative Ventures Pvt.Ltd.'s services.",
  privacyIntro: "At LumienInnovative Ventures Pvt.Ltd., we take your privacy seriously. This policy describes how we collect, use, and protect your personal information.",
  addressLine: "LumienInnovative Ventures Pvt.Ltd.",
} as const;

export const termsContent = {
  sections: [
    {
      title: "1. Acceptance of Terms",
      content: [
        "By accessing and using LumienInnovative Ventures Pvt.Ltd.'s services, you accept and agree to be bound by these Terms of Service.",
        "If you do not agree to these terms, you may not access or use our services.",
        "We reserve the right to modify these terms at any time, and your continued use constitutes acceptance of any changes.",
      ],
    },
    {
      title: "2. Description of Service",
      content: [
        "LumienInnovative Ventures Pvt.Ltd. provides banking technology solutions and services for financial institutions.",
        "Our platform supports core banking, regulatory compliance, digital channels, risk management, and integrations.",
        "We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.",
      ],
    },
    {
      title: "3. User Accounts",
      content: [
        "You must create an account to use our services.",
        "You are responsible for maintaining the confidentiality of your account credentials.",
        "You agree to provide accurate, current, and complete information during registration.",
        "You are responsible for all activities that occur under your account.",
      ],
    },
    {
      title: "4. Acceptable Use",
      content: [
        "You agree not to use our services for any unlawful purpose or in violation of these terms.",
        "You may not attempt to gain unauthorized access to our systems or networks.",
        "You may not interfere with or disrupt the integrity or performance of our services.",
        "You may not use our services to transmit malicious code or engage in fraudulent activities.",
      ],
    },
    {
      title: "5. Payment and Fees",
      content: [
        "Fees for our services are described in your service agreement.",
        "All fees are non-refundable unless otherwise stated.",
        "We reserve the right to change our fees with 30 days' notice.",
        "You are responsible for all taxes associated with your use of our services.",
      ],
    },
    {
      title: "6. Intellectual Property",
      content: [
        "All content, features, and functionality of our services are owned by LumienInnovative Ventures Pvt.Ltd.",
        "You may not copy, modify, distribute, or create derivative works without our permission.",
        "You retain ownership of any data you submit to our platform.",
        "You grant us a license to use your data to provide and improve our services.",
      ],
    },
    {
      title: "7. Confidentiality",
      content: [
        "You may have access to confidential information about our services and technology.",
        "You agree to keep all confidential information strictly confidential.",
        "This obligation survives termination of your use of our services.",
      ],
    },
    {
      title: "8. Limitation of Liability",
      content: [
        "Our services are provided 'as is' without warranties of any kind.",
        "We are not liable for any indirect, incidental, or consequential damages.",
        "Our total liability shall not exceed the fees paid by you in the 12 months preceding the claim.",
        "Some jurisdictions do not allow limitation of liability, so these limitations may not apply to you.",
      ],
    },
    {
      title: "9. Indemnification",
      content: [
        "You agree to indemnify and hold harmless LumienInnovative Ventures Pvt.Ltd. from any claims arising from your use of our services.",
        "This includes claims related to your violation of these terms or infringement of third-party rights.",
        "We reserve the right to assume exclusive defense of any matter subject to indemnification.",
      ],
    },
    {
      title: "10. Termination",
      content: [
        "We may terminate or suspend your access to our services at any time for any reason.",
        "You may terminate your account at any time by contacting us.",
        "Upon termination, your right to use our services will immediately cease.",
        "Provisions that by their nature should survive termination will survive.",
      ],
    },
    {
      title: "11. Governing Law",
      content: [
        "These terms are governed by the laws applicable to LumienInnovative Ventures Pvt.Ltd.",
        "Any disputes will be resolved in the courts of competent jurisdiction.",
        "You waive any objection to venue or jurisdiction in these courts.",
      ],
    },
    {
      title: "12. Dispute Resolution",
      content: [
        "Any disputes arising from these terms will be resolved through binding arbitration or applicable dispute resolution mechanisms.",
        "Arbitration will be conducted by an appropriate arbitration forum as applicable.",
        "You waive your right to participate in class action lawsuits, where permitted.",
        "This dispute resolution agreement survives termination of these terms.",
      ],
    },
  ],
} as const;

export const privacyContent = {
  sections: [
    {
      title: "1. Information We Collect",
      content: [
        "We collect information you provide directly to us, including name, email address, phone number, and payment information when you use our services.",
        "We automatically collect certain information about your device and how you interact with our platform, including IP address, browser type, and usage patterns.",
      ],
    },
    {
      title: "2. How We Use Your Information",
      content: [
        "To provide, maintain, and improve our services",
        "To process transactions and send related information",
        "To send technical notices, updates, and security alerts",
        "To respond to your comments and questions",
        "To comply with legal obligations and protect our rights",
      ],
    },
    {
      title: "3. Information Sharing",
      content: [
        "We do not sell your personal information to third parties.",
        "We may share your information with service providers who perform services on our behalf, subject to confidentiality agreements.",
        "We may disclose information if required by law or to protect our rights and safety.",
      ],
    },
    {
      title: "4. Data Security",
      content: [
        "We implement industry-standard security measures to protect your information.",
        "All data is encrypted in transit and at rest using AES-256 encryption.",
        "We conduct regular security audits and penetration testing.",
        "However, no method of transmission over the Internet is 100% secure.",
      ],
    },
    {
      title: "5. Your Rights",
      content: [
        "You have the right to access, update, or delete your personal information.",
        "You can opt-out of marketing communications at any time.",
        "You have the right to data portability and to lodge a complaint with a supervisory authority.",
        "For EU residents, you have additional rights under GDPR.",
      ],
    },
    {
      title: "6. Cookies and Tracking",
      content: [
        "We use cookies and similar tracking technologies to collect and track information.",
        "You can instruct your browser to refuse all cookies or indicate when a cookie is being sent.",
        "Essential cookies are necessary for the platform to function properly.",
      ],
    },
    {
      title: "7. Data Retention",
      content: [
        "We retain your information for as long as necessary to provide our services.",
        "We will delete or anonymize your information upon request, subject to legal obligations.",
        "Transaction records are retained for 7 years for compliance purposes.",
      ],
    },
    {
      title: "8. International Data Transfers",
      content: [
        "Your information may be transferred to and processed in countries other than your own.",
        "We ensure appropriate safeguards are in place for international transfers.",
        "We comply with applicable data protection frameworks.",
      ],
    },
    {
      title: "9. Children's Privacy",
      content: [
        "Our services are not directed to individuals under 18.",
        "We do not knowingly collect personal information from children.",
        "If we become aware of such collection, we will delete the information promptly.",
      ],
    },
    {
      title: "10. Changes to This Policy",
      content: [
        "We may update this Privacy Policy from time to time.",
        "We will notify you of any material changes by posting the new policy on this page.",
        "Your continued use of our services constitutes acceptance of the updated policy.",
      ],
    },
  ],
} as const;

export const careersContent = {
  jobOpenings: [
    {
      title: "Senior Backend Engineer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      description: "Build secure and scalable banking systems, data pipelines, and compliance automation services.",
      closingDate: "2026-12-31",
    },
    {
      title: "Frontend Engineer",
      department: "Engineering",
      location: "Remote / New York",
      type: "Full-time",
      description: "Create beautiful, performant user interfaces for our platform.",
      closingDate: "2026-12-31",
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "Remote / London",
      type: "Full-time",
      description: "Design intuitive experiences for digital banking, operational workflows, and governance dashboards.",
      closingDate: "2026-01-15",
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      description: "Ensure reliability and scalability of our global infrastructure.",
      closingDate: "2026-12-31",
    },
    {
      title: "Engineering Intern",
      department: "Engineering",
      location: "Remote / Hybrid",
      type: "Internship",
      description: "Learn and contribute to real-world banking technology and compliance engineering.",
      closingDate: "2026-06-01",
    },
  ] satisfies JobOpening[],
} as const;

export const securityContent = {
  certifications: [
    {
      title: "SOC 2 Type II",
      description: "Certified for security, availability, and confidentiality",
      status: "Certified",
    },
    {
      title: "PCI DSS Level 1",
      description: "Highest level of payment card security compliance",
      status: "Certified",
    },
    {
      title: "ISO 27001",
      description: "International standard for information security management",
      status: "Certified",
    },
    {
      title: "GDPR Compliant",
      description: "Full compliance with EU data protection regulations",
      status: "Compliant",
    },
  ],
  securityMeasures: [
    {
      title: "Encryption",
      items: [
        "AES-256 encryption for data at rest",
        "TLS 1.3 for data in transit",
        "End-to-end encryption for sensitive data",
        "Hardware security modules (HSM) for key management",
      ],
    },
    {
      title: "Access Control",
      items: [
        "Multi-factor authentication (MFA) required",
        "Role-based access control (RBAC)",
        "Regular access reviews and audits",
        "Principle of least privilege enforcement",
      ],
    },
    {
      title: "Monitoring & Response",
      items: [
        "24/7 security operations center (SOC)",
        "Real-time threat detection and alerting",
        "Automated incident response procedures",
        "Regular penetration testing and vulnerability assessments",
      ],
    },
    {
      title: "Infrastructure",
      items: [
        "Multi-region redundancy and failover",
        "DDoS protection and mitigation",
        "Regular security patches and updates",
        "Isolated network segments and firewalls",
      ],
    },
  ],
  systemStatus: [
    { service: "API Gateway", status: "operational", uptime: "99.99%" },
    { service: "Payment Processing", status: "operational", uptime: "99.98%" },
    { service: "Authentication Service", status: "operational", uptime: "100%" },
    { service: "Database Cluster", status: "operational", uptime: "99.99%" },
    { service: "Webhook Delivery", status: "operational", uptime: "99.97%" },
  ] satisfies SystemStatusItem[],
} as const;

export const blogContent = {
  posts: [
    {
      title: "Compliance-First Architecture for Indian Banking",
      date: "2026-03-01",
      href: "/company#blog",
      excerpt: "How to design systems aligned with RBI expectations—built-in controls, auditability, and governance.",
    },
    {
      title: "Automating RBI Regulatory Reporting",
      date: "2026-02-15",
      href: "/company#blog",
      excerpt: "Reducing manual effort with structured data, validations, and repeatable reporting workflows.",
    },
    {
      title: "UPI & IMPS Integration Considerations",
      date: "2026-01-28",
      href: "/company#blog",
      excerpt: "Practical guidance for NPCI-aligned integrations, monitoring, and operational readiness.",
    },
  ] satisfies BlogPost[],
} as const;

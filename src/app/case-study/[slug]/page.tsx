import { notFound } from "next/navigation";
import { caseStudiesContent } from "@/content/site-content";
import { CaseStudyPage } from "@/components/case-study/CaseStudyPage";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(caseStudiesContent).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = caseStudiesContent[slug];
  if (!data) return { title: "Not Found" };
  return {
    title: `${data.title} — Case Study | LUMIEN`,
    description: data.tagline,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const data = caseStudiesContent[slug];

  if (!data) {
    notFound();
  }

  return <CaseStudyPage data={data} />;
}

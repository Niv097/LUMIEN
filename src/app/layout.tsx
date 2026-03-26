import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { layoutContent } from "@/content/site-content";
import Script from "next/script";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lumien India – Banking Technology Company",
  description:
    "Lumien India provides compliance-driven banking software solutions for Indian banks. Secure, scalable fintech platform aligned with RBI and NPCI.",
  keywords: [
    "Lumien India",
    "Lumien Innovation",
    "Lumien Banking",
    "Lumien India Careers",
    "Banking Technology Company India",
    "Compliance Banking Software",
    "Fintech Platform India"
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  verification: {
    google: "vlRE875ERyfaaKPyq2JMYWhcVAcdwQwMBvQhY_AzcWc",
  },
  openGraph: {
    title: "Lumien India – Banking Technology Company",
    description:
      "Lumien India provides compliance-driven banking software solutions for Indian banks.",
    url: "https://lumien-india.com",
    siteName: "Lumien India",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://lumien-india.com",
  },
};

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MobileReloadRedirect } from "@/components/utils/MobileReloadRedirect";
import { ModalProvider } from "@/lib/modal-context";
import { ConnectModal } from "@/components/ui/connect-modal";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lumien India",
  alternateName: ["Lumien Innovation", "Lumien Banking"],
  url: "https://lumien-india.com",
  logo: "https://lumien-india.com/images/logo.png",
  description:
    "Lumien India provides compliance-driven banking software solutions for Indian banks, aligned with RBI and NPCI regulations.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  sameAs: ["https://lumien-india.com"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.png" sizes="48x48" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <Script
          id="json-ld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${jakarta.variable} font-sans antialiased bg-background text-foreground flex flex-col min-h-screen`}
      >
        <ModalProvider>
          <MobileReloadRedirect />
          <ConnectModal />
          <Navbar />
          <main className="flex-grow pt-24">{children}</main>
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}

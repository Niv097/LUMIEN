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
    icon: "/favicon.png?v=3",
    apple: "/apple-touch-icon.png?v=3",
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
  logo: "https://lumien-india.com/logo.png",
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
        {/* Standard Favicon for all devices (cache-busted with ?v=3) */}
        <link rel="icon" type="image/png" href="/favicon.png?v=3" sizes="any" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon.png?v=3" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon.png?v=3" />
        <link rel="shortcut icon" href="/favicon.png?v=3" />
        {/* iOS / iPadOS specific icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=3" />
        {/* Android Chrome specific config */}
        <link rel="manifest" href="/site.webmanifest?v=3" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Lumien" />
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

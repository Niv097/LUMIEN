import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LUMIEN",
  description: "Enterprise-grade financial infrastructure for the modern web.",
};

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MobileReloadRedirect } from "@/components/utils/MobileReloadRedirect";
import { ModalProvider } from "@/lib/modal-context";
import { ConnectModal } from "@/components/ui/connect-modal";

// ... (imports)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${jakarta.variable} font-sans antialiased bg-background text-foreground flex flex-col min-h-screen`}>
        <ModalProvider>
          <MobileReloadRedirect />
          <ConnectModal />
          <Navbar />
          <main className="flex-grow pt-24">
            {children}
          </main>
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}

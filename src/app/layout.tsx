import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "AliceLabs | Elite Engineering Hub",
  description:
    "AliceLabs provides the deterministic infrastructure for next-gen spatial automation. We deploy high-dimensional logic engines at the edge for critical fleet coordination.",
  keywords: [
    "AliceLabs",
    "Elite Engineering Hub",
    "spatial automation",
    "edge computing",
    "logic engines",
    "fleet coordination",
    "AI agents",
    "Orchestrator v4",
  ],
  authors: [{ name: "AliceLabs Innovation Hub LLC" }],
  openGraph: {
    title: "AliceLabs | Elite Engineering Hub",
    description:
      "Orchestrating Autonomous Logic Chains. Deterministic infrastructure for next-gen spatial automation.",
    url: "https://www.alicelabs.site/",
    siteName: "AliceLabs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AliceLabs | Elite Engineering Hub",
    description:
      "Orchestrating Autonomous Logic Chains. Deterministic infrastructure for next-gen spatial automation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-[#050510] text-white m-0 p-0">
        {children}
        <Toaster />
      </body>
    </html>
  );
}

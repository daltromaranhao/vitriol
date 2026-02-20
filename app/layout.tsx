import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vitriol - Global Brotherhood",
  description: "Connect with verified professionals worldwide. A premium global network for meaningful business relationships.",
  keywords: ["networking", "global", "professional", "brotherhood", "connections"],
};

// Root layout - minimal, just for the redirect page
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

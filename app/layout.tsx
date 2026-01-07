import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jobescape.me"),
  title: {
    default: "Jobescape - Start Earning as an AI-Powered Freelancer",
    template: "%s | Jobescape",
  },
  description:
    "We will teach you how to build AI agents that handle business tasks like writing, content creation, and automation without any experience.",
  keywords: [
    "AI freelancing",
    "AI agents",
    "freelancer",
    "AI automation",
    "online courses",
    "AI business",
    "copywriting",
    "social media manager",
    "facebook ads",
  ],
  authors: [{ name: "Jobescape" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jobescape.me",
    siteName: "Jobescape",
    title: "Jobescape - Start Earning as an AI-Powered Freelancer",
    description:
      "We will teach you how to build AI agents that handle business tasks like writing, content creation, and automation without any experience.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jobescape - Start Earning as an AI-Powered Freelancer",
    description:
      "We will teach you how to build AI agents that handle business tasks like writing, content creation, and automation without any experience.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

import { WebVitals } from "@/shared/ui/web-vitals";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <WebVitals />
        {children}
      </body>
    </html>
  );
}

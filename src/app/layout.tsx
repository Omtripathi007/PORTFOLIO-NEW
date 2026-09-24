import type { Metadata } from "next";
import { Inter, Anton, Syne, Caveat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Om Tripathi — Creative Developer",
  description:
    "Om Tripathi is a creative developer building high-end, motion-heavy digital experiences where design meets code.",
  keywords: [
    "Om Tripathi",
    "Creative Developer",
    "Portfolio",
    "React",
    "Next.js",
    "GSAP",
    "Motion Design",
  ],
  authors: [{ name: "Om Tripathi" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Om Tripathi — Creative Developer",
    description:
      "Creative Developer building digital worlds where design meets code.",
    siteName: "Om Tripathi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Tripathi — Creative Developer",
    description:
      "Creative Developer building digital worlds where design meets code.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${inter.variable} ${anton.variable} ${syne.variable} ${caveat.variable} antialiased bg-[#0a0a0a] text-[#F5F5F5] font-sans overflow-x-hidden`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

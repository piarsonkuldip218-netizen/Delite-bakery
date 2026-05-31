import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import { asset } from "@/lib/path";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://piarsonkuldip218-netizen.github.io/Delite-bakery";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Delite Bakery | Fresh Cakes & Pastries in Margherita, Assam",
    template: "%s | Delite Bakery",
  },
  description:
    "Delite Bakery — freshly baked cakes, custom celebration cakes, pastries and bakes in Margherita, Assam. Rated 4.8 by 83+ happy customers. Call to order today.",
  keywords: [
    "Delite Bakery",
    "bakery Margherita",
    "cake shop Assam",
    "custom cakes Margherita",
    "birthday cakes Ledo",
    "pastries Assam",
    "anniversary cakes",
  ],
  authors: [{ name: "Delite Bakery" }],
  icons: {
    icon: asset("/favicon.svg"),
    apple: asset("/favicon.svg"),
  },
  openGraph: {
    title: "Delite Bakery | Freshly Baked Happiness",
    description:
      "Custom cakes, pastries and bakes made fresh daily in Margherita, Assam. Rated 4.8 stars.",
    type: "website",
    locale: "en_IN",
    siteName: "Delite Bakery",
  },
  twitter: {
    card: "summary_large_image",
    title: "Delite Bakery | Freshly Baked Happiness",
    description:
      "Custom cakes, pastries and bakes made fresh daily in Margherita, Assam.",
  },
};

export const viewport: Viewport = {
  themeColor: "#FDF6EC",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";

import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { company, siteUrl } from "@/lib/company";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "ALPHA TRAINING LLC · Marketing Consulting & Digital Training",
    template: "%s · ALPHA TRAINING LLC",
  },
  description:
    "Online marketing consulting and digital training focused on advertising, funnels, and customer acquisition.",
  applicationName: company.legalName,
  keywords: [
    "marketing consulting",
    "digital training",
    "advertising strategy",
    "marketing funnels",
    "customer acquisition",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: company.legalName,
    title: "ALPHA TRAINING LLC",
    description:
      "Practical marketing consulting and digital training for advertising, funnels, and customer acquisition.",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${newsreader.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

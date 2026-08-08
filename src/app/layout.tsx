import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { defaultKeywords, defaultOgImage, siteConfig } from "@/util/site";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: defaultKeywords,
  authors: [
    {
      name: siteConfig.fullName,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.fullName,
  publisher: siteConfig.fullName,
  applicationName: siteConfig.siteName,
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
  },
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/assets/icons/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [defaultOgImage],
    locale: siteConfig.locale,
    siteName: siteConfig.siteName,
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.twitter,
    creator: siteConfig.twitter,
    title: siteConfig.siteName,
    description: siteConfig.description,
    images: [defaultOgImage.url],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sora.variable}>
      <body>{children}</body>
    </html>
  );
}

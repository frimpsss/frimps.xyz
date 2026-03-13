import type { Metadata } from "next";
import localFont from "next/font/local";
import { defaultKeywords, defaultOgImage, siteConfig } from "@/util/site";
import "./globals.css";

const bagoss = localFont({
  src: [
    {
      path: "../../public/assets/fonts/BagossStandardTRIAL-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/BagossStandardTRIAL-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/BagossStandardTRIAL-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/BagossStandardTRIAL-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/BagossStandardTRIAL-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/BagossStandardTRIAL-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-bagoss",
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
    <html lang="en" className={bagoss.variable}>
      <body>{children}</body>
    </html>
  );
}

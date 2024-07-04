import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "frimps.xyz",
  icons: "./favicon.ico",
  description:
    "Akwasi Ampomah Frimpong, a software developer and student. I do JavaScript, TypeScript for web and mobile development and also learning java",
  keywords: [
    "Akwasi Ampomah Frimpong",
    "software developer",
    "JavaScript",
    "TypeScript",
    "Java",
    "web development",
    "mobile development",
    "Ghana",
    "computer engineer",
    "frimpsssssss",
    "frimpszy",
    "ampomah",
    "frimps",
  ],
  openGraph: {
    type: "website",
    title: "frimps.xyz",
    description:
      "Akwasi Ampomah Frimpong, a software developer and student. I do JavaScript, TypeScript for web and mobile development and also learning Java.",
    url: "https://frimps.xyz",
    images: [
      {
        url: "/images/portfolio-thumbnail.png",
        width: 800,
        height: 600,
        alt: "Akwasi Ampomah Frimpong Portfolio Thumbnail",
      },
    ],
    locale: "en_US",
    siteName: "frimps.xyz",
  },
  twitter: {
    card: "summary_large_image",
    site: "@frimpssssss",
    creator: "@frimpssssss",
    title: "frimps.xyz",
    description:
      "Akwasi Ampomah Frimpong, a software developer and student. I do JavaScript, TypeScript for web and mobile development and also learning Java.",
    images: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Akwasi Ampomah Frimpong, a software developer and student. I do JavaScript, TypeScript for web and mobile development and also learning Java."
        />
        <meta
          name="keywords"
          content="Akwasi Ampomah Frimpong, software developer, JavaScript, TypeScript, Java, web development, mobile development, Ghana, computer engineer, frimpsssssss, frimpszy, ampomah"
        />

        <meta property="og:title" content="frimps.xyz" />
        <meta
          property="og:description"
          content="Akwasi Ampomah Frimpong, a software developer and student. I do JavaScript, TypeScript for web and mobile development and also learning Java."
        />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://frimps.xzy" />
        <meta property="og:country-name" content="Ghana" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@frimpssssss" />
        <meta name="twitter:creator" content="@@frimpssssss" />
        <meta name="twitter:title" content="frimps.xyz" />
        <meta
          name="twitter:description"
          content="Akwasi Ampomah Frimpong, a software developer and student. I do JavaScript, TypeScript for web and mobile development and also learning Java."
        />
        <meta name="twitter:image" content="./favicon.ico" />
      </Head>
      <body>{children}</body>
    </html>
  );
}

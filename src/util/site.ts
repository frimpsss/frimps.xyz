import type { Metadata } from "next";

export const siteConfig = {
  name: "frimps",
  siteName: "frimps.xyz",
  fullName: "Akwasi Ampomah Frimpong",
  jobTitle: "Software Engineer",
  description:
    "Portfolio of Akwasi Ampomah Frimpong, a software engineer in Ghana working across product, systems, fintech, digital lending, OTT, and EV OCPP technology.",
  url: "https://frimps.xyz",
  locale: "en_US",
  twitter: "@akfrimpss",
  ogImage: "/assets/images/frimps.jpg",
  socials: [
    "https://github.com/frimpsss",
    "https://www.linkedin.com/in/akwasi-frimpong/",
    "https://twitter.com/akfrimpss",
  ],
} as const;

export const defaultKeywords = [
  "Akwasi Ampomah Frimpong",
  "frimps",
  "software engineer",
  "software developer",
  "product engineer",
  "systems engineer",
  "portfolio",
  "Ghana",
  "TypeScript",
  "JavaScript",
  "Java",
  "Go",
  "fintech",
  "digital lending",
  "OTT streaming",
  "OCPP",
];

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export const defaultOgImage = {
  url: absoluteUrl(siteConfig.ogImage),
  width: 1200,
  height: 1600,
  alt: `Portrait of ${siteConfig.fullName}`,
};

type PageMetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  category?: string;
};

export function createPageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  type = "website",
  publishedTime,
  category = "technology",
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const mergedKeywords = Array.from(
    new Set([...defaultKeywords, ...keywords])
  );

  return {
    title,
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical: url,
    },
    category,
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.siteName,
      locale: siteConfig.locale,
      type,
      images: [defaultOgImage],
      ...(publishedTime
        ? {
            publishedTime,
            authors: [siteConfig.fullName],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.twitter,
      creator: siteConfig.twitter,
      title,
      description,
      images: [defaultOgImage.url],
    },
  };
}

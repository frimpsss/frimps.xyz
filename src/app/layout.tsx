import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "frimps.xyz",
  icons: "./favicon.ico",
  description:
    " Akwasi Ampomah Frimpong, a software developer and student. I do JavaScript, TypeScript for web and mobile development and also learning java",
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
    "ampomah"
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

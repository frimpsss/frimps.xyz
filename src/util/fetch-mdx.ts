import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

const contentDir = path.join(process.cwd(), "/src/writings");
const blogDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});
const WORDS_PER_MINUTE = 120;

export function parseFrontmatterDate(value: string) {
  const cleaned = value.replace(/(\d+)(st|nd|rd|th)/gi, "$1");
  return new Date(cleaned);
}

function stripFrontmatter(source: string) {
  return source.replace(/^---[\s\S]*?---\s*/, "");
}

function estimateReadTime(source: string) {
  const plainText = stripFrontmatter(source)
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/[#>*_~-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const wordCount = plainText ? plainText.split(" ").length : 0;

  return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
}

export function formatFrontmatterDate(value: string) {
  const parsed = parseFrontmatterDate(value);

  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return blogDateFormatter.format(parsed);
}

export function getFrontmatterDateIso(value: string) {
  const parsed = parseFrontmatterDate(value);

  if (Number.isNaN(parsed.getTime())) {
    return undefined;
  }

  return parsed.toISOString();
}

export function getFrontmatterLabel(value?: string) {
  return value?.trim() || "journal entry";
}

export function formatReadTime(minutes: number) {
  return `${minutes} min read`;
}

export async function getBlogBySlug(slug: string) {
  const fileName = slug + ".mdx";
  const filePath = path.join(contentDir, fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { frontmatter, content } = await compileMDX<{
    title: string;
    date: string;
    subject: string;
    type?: string;
    hidden?: boolean;
  }>({
    source: fileContent,
    options: { parseFrontmatter: true },
  });
  return {
    frontmatter,
    content,
    readTime: estimateReadTime(fileContent),
    slug: path.parse(fileName).name,
  };
}

export async function getBlogs() {
  const files = fs.readdirSync(contentDir);
  const blogs = await Promise.all(
    files.map(async (file) => await getBlogBySlug(path.parse(file)?.name))
  );
  return blogs
    .filter((blog) => !blog.frontmatter.hidden)
    .sort((a, b) => {
    return (
      parseFrontmatterDate(b.frontmatter.date).getTime() -
      parseFrontmatterDate(a.frontmatter.date).getTime()
    );
    });
}

export function getAllBlogSlug() {
  const files = fs.readdirSync(contentDir);
  const slugs = files
    .filter((file) => {
      const filePath = path.join(contentDir, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      return !/^hidden:\s*true$/m.test(fileContent);
    })
    .map((file) => ({ slug: path.parse(file)?.name }));
  return slugs;
}

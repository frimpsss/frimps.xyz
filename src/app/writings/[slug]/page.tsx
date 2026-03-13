import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  formatFrontmatterDate,
  formatReadTime,
  getFrontmatterDateIso,
  getAllBlogSlug,
  getBlogBySlug,
  getFrontmatterLabel,
} from "@/util/fetch-mdx";
import { absoluteUrl, createPageMetadata, siteConfig } from "@/util/site";
import styles from "../../md.module.css";
import AppLayout from "@/components/layouts/layout.main";

export async function generateStaticParams() {
  return getAllBlogSlug();
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blog = await getBlogBySlug(params.slug);

  if (blog.frontmatter.hidden) {
    return {};
  }

  return createPageMetadata({
    title: blog.frontmatter.title,
    description: blog.frontmatter.subject,
    path: `/writings/${blog.slug}`,
    type: "article",
    publishedTime: getFrontmatterDateIso(blog.frontmatter.date),
    keywords: [
      blog.frontmatter.title,
      getFrontmatterLabel(blog.frontmatter.type),
      "engineering notes",
      "blog post",
    ],
    category: getFrontmatterLabel(blog.frontmatter.type),
  });
}

const page = async ({ params }: { params: { slug: string } }) => {
  const blog = await getBlogBySlug(params.slug);

  if (blog.frontmatter.hidden) {
    notFound();
  }

  const publishedTime = getFrontmatterDateIso(blog.frontmatter.date);
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.frontmatter.title,
    description: blog.frontmatter.subject,
    datePublished: publishedTime,
    dateModified: publishedTime,
    author: {
      "@type": "Person",
      name: siteConfig.fullName,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.fullName,
      url: siteConfig.url,
    },
    mainEntityOfPage: absoluteUrl(`/writings/${blog.slug}`),
    image: absoluteUrl(siteConfig.ogImage),
    articleSection: getFrontmatterLabel(blog.frontmatter.type),
    timeRequired: `PT${blog.readTime}M`,
    inLanguage: "en",
    isAccessibleForFree: true,
  };

  return (
    <AppLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <div className="stagger space-y-10">
        <section className="space-y-8">
          <Link
            href="/writings"
            className="inline-link text-[0.8rem] uppercase tracking-[0.2em] text-[var(--muted)]"
          >
            back to notes
          </Link>

          <div className="grid gap-6 border-t border-[color:var(--line)] pt-8 lg:grid-cols-[minmax(0,1fr)_180px] lg:items-start">
            <div className="space-y-5">
              <p className="section-eyebrow">
                {getFrontmatterLabel(blog.frontmatter.type)}
              </p>
              <div className="space-y-4">
                <h1 className="section-title max-w-[16ch]">
                  {blog.frontmatter.title}
                </h1>
                <p className="page-copy max-w-[40rem]">
                  {blog.frontmatter.subject}
                </p>
              </div>
            </div>
            <div className="space-y-1 text-[0.78rem] uppercase tracking-[0.04em] text-[var(--muted)] lg:pt-2 lg:text-right">
              <p>{formatFrontmatterDate(blog.frontmatter.date)}</p>
              <p>{formatReadTime(blog.readTime)}</p>
            </div>
          </div>
        </section>

        <main className={`${styles.markdown} mx-auto w-full max-w-[46rem]`}>
          {blog.content}
        </main>
      </div>
    </AppLayout>
  );
};

export default page;

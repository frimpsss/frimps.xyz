import type { Metadata } from "next";
import AppLayout from "@/components/layouts/layout.main";
import {
  formatFrontmatterDate,
  formatReadTime,
  getBlogs,
  getFrontmatterLabel,
} from "@/util/fetch-mdx";
import { createPageMetadata } from "@/util/site";
import Link from "next/link";

export const metadata: Metadata = createPageMetadata({
  title: "Notes",
  description:
    "Engineering notes, experiments, journal entries, and build write-ups from Akwasi Ampomah Frimpong.",
  path: "/writings",
  keywords: ["engineering notes", "software engineering blog", "experiments"],
});

const page = async () => {
  const blogs = await getBlogs();

  return (
    <AppLayout>
      <div className="space-y-12">
        <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-end">
          <div className="space-y-4">
            <h1 className="section-title max-w-[12ch]">
              notes on engineering, experiments, and whatever sticks.
            </h1>
          </div>
          <p className="page-copy lg:text-right">
            short entries, build notes, and the occasional side thought.
          </p>
        </section>

        <section className="border-t border-[color:var(--line)] pt-8">
          {blogs.length === 0 && (
            <div className="surface p-6 text-center small-copy">
              nothing here yet.
            </div>
          )}

          <div className="space-y-10">
            {blogs.map((blog) => {
              return (
                <Link
                  href={`/writings/${blog.slug}`}
                  key={blog.slug}
                  className="group block"
                >
                  <article className="surface border-b border-[color:var(--line)] pb-8 last:border-b-0 last:pb-0">
                    <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_160px] md:items-start">
                      <div className="space-y-3">
                        <p className="section-eyebrow">
                          {getFrontmatterLabel(blog.frontmatter.type)}
                        </p>
                        <h2 className="text-[1.3rem] leading-tight tracking-[-0.04em]">
                          {blog.frontmatter.title}
                        </h2>
                        <p className="small-copy max-w-[42rem]">
                          {blog.frontmatter.subject}
                        </p>
                      </div>
                      <div className="space-y-1 text-[0.72rem] uppercase tracking-[0.04em] text-[var(--muted)] md:pt-1 md:text-right">
                        <p>{formatFrontmatterDate(blog.frontmatter.date)}</p>
                        <p>{formatReadTime(blog.readTime)}</p>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </AppLayout>
  );
};

export default page;

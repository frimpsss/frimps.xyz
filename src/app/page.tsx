import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import frimps from "../../public/assets/images/frimps.jpg";
import AppLayout from "@/components/layouts/layout.main";
import { featured_works, links } from "@/util/misc";
import { LinkComponent } from "@/components/ui/link";
import FeaturedWorkComponent from "@/components/ui/featured_work";
import { absoluteUrl, createPageMetadata, siteConfig } from "@/util/site";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: siteConfig.name,
    description:
      "Portfolio of Akwasi Ampomah Frimpong, a software engineer in Ghana working across product, systems, fintech, digital lending, OTT, and EV OCPP technology.",
    path: "/",
    keywords: [
      "software engineer Ghana",
      "fintech engineer",
      "OCPP engineer",
      "OTT engineer",
    ],
  }),
  title: {
    absolute: siteConfig.name,
  },
};

export default function Home() {
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}#person`,
        name: siteConfig.fullName,
        url: siteConfig.url,
        jobTitle: siteConfig.jobTitle,
        image: absoluteUrl(siteConfig.ogImage),
        sameAs: [...siteConfig.socials],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}#website`,
        name: siteConfig.siteName,
        url: siteConfig.url,
        description: siteConfig.description,
        author: {
          "@id": `${siteConfig.url}#person`,
        },
      },
    ],
  };

  return (
    <AppLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <div className="stagger space-y-14 md:space-y-20">
        <section className="grid gap-8 md:gap-12 xl:grid-cols-[minmax(0,1.45fr)_320px]">
          <div className="space-y-8">
            <p className="section-eyebrow">software engineer / ghana</p>

            <div className="space-y-6">
              <h1 className="page-title max-w-[11ch] sm:max-w-[12ch]">
                i turn product ideas into clear software people can use.
              </h1>
              <div className="max-w-[42rem] space-y-4 page-copy">
                <p>
                  engineering is the core, but the work often reaches into
                  product thinking, systems, and deciding what should get built.
                </p>
                <p>
                  i like staying close to the whole thing, from direction to
                  implementation to shipping, especially across{" "}
                  <span className="text-[var(--foreground)]">fintech</span>,{" "}
                  <span className="text-[var(--foreground)]">accounting</span>,{" "}
                  <span className="text-[var(--foreground)]">
                    digital lending
                  </span>
                  ,{" "}
                  <span className="text-[var(--foreground)]">
                    OTT and streaming
                  </span>
                  , and{" "}
                  <span className="text-[var(--foreground)]">
                    EV OCPP technology
                  </span>
                  .
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {links.map(({ link, title }) => {
                return (
                  <LinkComponent
                    key={title}
                    link={link}
                    title={title}
                    extraStyles="inline-link py-2 text-[0.82rem] uppercase tracking-[0.18em]"
                  />
                );
              })}
              <LinkComponent
                title="hire me / cv"
                link="https://docs.google.com/document/d/13S3a5qQdgMT4NbVjqcHTxtm2UbIgoUONvvBYwwt1PrU/edit?usp=sharing"
                extraStyles="bg-[color:var(--foreground)] px-4 py-2 text-[0.82rem] uppercase tracking-[0.18em] text-[#f5f5f1] hover:text-[#f5f5f1]"
              />
            </div>

            <div className="grid gap-10 border-t border-[color:var(--line)] pt-8 md:grid-cols-2 md:gap-12">
              <div className="max-w-[28rem] space-y-4">
                <p className="section-eyebrow">currently</p>
                <p className="text-[clamp(1.2rem,2vw,1.45rem)] leading-[1.18] tracking-[-0.05em] text-[var(--foreground)]">
                  at access 89, i work across product, systems, and
                  implementation.
                </p>
              </div>
              <div className="max-w-[28rem] space-y-4">
                <p className="section-eyebrow">next up</p>
                <p className="text-[clamp(1.2rem,2vw,1.45rem)] leading-[1.35] tracking-[-0.05em] text-[var(--muted)]">
                  open to selective freelance and collaborative product work.
                  you can also head to{" "}
                  <Link
                    href="/writings"
                    className="inline-link border-[color:var(--line-strong)] text-[var(--foreground)]"
                  >
                    notes
                  </Link>{" "}
                  for notes and experiments.
                </p>
              </div>
            </div>
          </div>

          <aside className="surface h-fit p-5 md:p-6 xl:mt-8">
            <div className="overflow-hidden">
              <Image
                src={frimps}
                alt="Portrait of frimps"
                sizes="(max-width: 1280px) 100vw, 320px"
                className="aspect-[4/5] w-full object-cover"
                priority
              />
            </div>
            <div className="mt-6 flex items-start justify-between gap-6 border-t border-[color:var(--line)] pt-5">
              <div>
                <p className="section-eyebrow">base</p>
                <p className="mt-2 text-[1.2rem] tracking-[-0.04em]">🇬🇭</p>
              </div>
              <div className="text-right">
                <p className="section-eyebrow">focus</p>
                <p className="mt-2 text-[1.2rem] tracking-[-0.04em]">
                  engineering & product
                </p>
              </div>
            </div>
          </aside>
        </section>

        <section className="space-y-8">
          <div className="grid gap-5 border-t border-[color:var(--line)] pt-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
            <div className="space-y-4">
              <p className="section-eyebrow">selected work</p>
              <h2 className="section-title max-w-[14ch]">
                a few things i helped shape and ship.
              </h2>
            </div>
            <p className="small-copy lg:text-right">
              projects where product thinking, systems, and engineering had to
              come together.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featured_works.map((elem) => {
              return <FeaturedWorkComponent {...elem} key={elem.name} />;
            })}
          </div>
        </section>
      </div>
    </AppLayout>
  );
}

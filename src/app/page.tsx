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
      <div className="space-y-14 md:space-y-20">
        <section className="grid gap-8 md:gap-12 xl:grid-cols-[minmax(0,1.45fr)_320px]">
          <div className="space-y-8">

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
                  implementation to shipping, especially across areas of{" "}
                  <span className="text-[var(--foreground)]">finance</span>,{" "}
                  <span className="text-[var(--foreground)]">business automation</span>,{" "}
                  <span className="text-[var(--foreground)]">
                    logistics
                  </span>
                  ,{" "}
                  <span className="text-[var(--foreground)]">
                   streaming services
                  </span>
                  , and{" "}
                  <span className="text-[var(--foreground)]">
                    EV OCPP technology
                  </span>
                  .
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-1 gap-y-2">
              {links.map(({ link, title, Icon }) => {
                return (
                  <LinkComponent
                    key={title}
                    link={link}
                    title={title}
                    extraStyles="icon-link"
                  >
                    <Icon />
                  </LinkComponent>
                );
              })}
              <LinkComponent
                title="hire me"
                link="https://docs.google.com/document/d/13S3a5qQdgMT4NbVjqcHTxtm2UbIgoUONvvBYwwt1PrU/edit?usp=sharing"
                extraStyles="inline-link ml-3 py-2 text-[0.74rem] uppercase tracking-[0.18em]"
              />
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
                <p className="mt-2 text-[1.05rem] tracking-[-0.03em]">🇬🇭</p>
              </div>
              <div className="text-right">
                <p className="section-eyebrow">focus</p>
                <p className="mt-2 text-[1.05rem] tracking-[-0.03em]">
                  engineering & product
                </p>
              </div>
            </div>
          </aside>
        </section>

        <section className="space-y-8">
          <div className="grid gap-5 border-t border-[color:var(--line)] pt-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
            <div className="space-y-4">
              <h2 className="section-title max-w-[14ch]">
                a few things i helped shape and ship.
              </h2>
            </div>
            {/*<p className="small-copy lg:text-right">
              projects where product thinking, systems, and engineering had to
              come together.
            </p>*/}
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

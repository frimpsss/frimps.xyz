"use client";
import { navlinks } from "@/util/misc";
import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

const AppLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  return (
    <main className="page-shell">
      <div className="site-chrome">
        <header className="page-section border-b border-[color:var(--line)]">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[32rem]">
              {/*<p className="section-eyebrow">frimps / portfolio</p>*/}
              <Link
                href="/"
                className="mt-3 inline-block text-[clamp(2.1rem,5vw,3.2rem)] leading-none tracking-[-0.06em]"
              >
                frimps.
              </Link>
              <p className="page-copy mt-4 max-w-[28rem] text-[0.92rem]">
                building from ghana, mostly where product questions meet
                technical execution.
              </p>
            </div>

            <div className="flex flex-col gap-5 lg:items-end">
              <nav className="flex flex-wrap gap-4 text-[0.72rem] uppercase tracking-[0.18em] sm:gap-5 sm:text-[0.74rem] sm:tracking-[0.22em]">
                {navlinks.map((elem) => {
                  return (
                    <NavLink
                      {...elem}
                      active={elem.link === pathname}
                      key={elem.title}
                    />
                  );
                })}
              </nav>
            </div>
          </div>
        </header>

        <div className="page-section">{children}</div>
      </div>
    </main>
  );
};

function NavLink({
  title,
  link,
  active,
}: {
  title: string;
  link: string;
  active: boolean;
}) {
  return (
    <Link href={link} aria-current={active ? "page" : undefined}>
      <span className="nav-link " data-active={active}>
        {title}
      </span>
    </Link>
  );
}

export default AppLayout;

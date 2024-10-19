"use client";
import { navlinks } from "@/util/misc";
import Link from "next/link";
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";

const AppLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  return (
    <main className="px-4 py-8 lg:max-w-[600px] mx-auto">
      <div className="flex flex-col divide-y-[1px] divide-primary-100 ">
        <a
          href="/"
          className="text-[1.2rem] mb-2 text-primary-900 cursor-pointer"
        >
          frimps
        </a>
        <nav className="flex pt-2 gap-4 text-[1rem] lg:justify-end">
          {navlinks.map((elem) => {
            return <NavLink {...elem} active={elem.link == pathname} key={elem.title} />;
          })}
        </nav>
      </div>

      {children}
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
    <Link href={link}>
      <p className={` hover:text-primary-900 duration-500  cursor-pointer`}>
        /{" "}
        <span className={`${active && "underline text-primary-900"}`}>
          {title}
        </span>
      </p>
    </Link>
  );
}

export default AppLayout;

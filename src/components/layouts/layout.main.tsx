import Link from "next/link";
import React, { ReactNode } from "react";

const AppLayout = ({ children }: { children: ReactNode }) => {
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
          <Link href={"/"}>
            <p className="hover:text-primary-900 duration-500  cursor-pointer ">
              / me
            </p>
          </Link>
          <Link href={"/work"}>
            <p className="hover:text-primary-900 duration-500  cursor-pointer ">
              / work
            </p>
          </Link>
          <Link href={"/writings"}>
            <p className="hover:text-primary-900 duration-500  cursor-pointer ">
              / writings
            </p>
          </Link>
        </nav>
      </div>

      {children}
    </main>
  );
};

export default AppLayout;

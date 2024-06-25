import AppLayout from "@/components/layouts/layout.main";
import { getBlogs } from "@/util/fetch-mdx";
import Link from "next/link";
import React from "react";

const page = async () => {
  const blogs = await getBlogs();
  return (
    <AppLayout>
      <div className="my-6">
        {blogs.length == 0 && (
          <div>
            <p>No posts🙃</p>
          </div>
        )}
        {blogs.map((e, i) => {
          return (
            <Link href={"writings/" + e.slug} key={i}>
              <div className="cursor-pointer hover:scale-[1.02] duration-500">
                <div className="flex justify-between">
                  <p className="font-medium text-primary-950">{e.frontmatter.title}</p>
                  <p className="font-extralight text-[0.8rem] ">
                    {e.frontmatter.date}
                  </p>
                </div>
                <p className="font-normal text-[#888888] text-[0.9rem]">
                  {e.frontmatter.subject}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </AppLayout>
  );
};

export default page;

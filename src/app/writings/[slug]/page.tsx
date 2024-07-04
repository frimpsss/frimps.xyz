import React from "react";
import { getAllBlogSlug, getBlogBySlug } from "@/util/fetch-mdx";
import styles from "../../md.module.css";
import AppLayout from "@/components/layouts/layout.main";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
export async function generateStaticParams() {
  return getAllBlogSlug();
}

const page = async ({ params }: { params: { slug: string } }) => {
  const blog = await getBlogBySlug(params.slug);
  return (
    <AppLayout>
      <div className="">
        <Link href={"/writings"}>
          <div className="flex items-center hover:bg-gray-100 w-fit hover:gap-2 hover:px-1 py-1 cursor-pointer rounded-md my-6 duration-500">
            <ArrowLeftIcon height={18} />
            <p>back</p>
          </div>
        </Link>
        <div className="lg:text-right">
          <h4 className="font-medium text-[1.7rem] text-primary-950">
            {blog.frontmatter.subject}
          </h4>
          <p className="font-extralight text-[0.9rem] text-gray-900">
            {blog.frontmatter.date}
          </p>
        </div>
      </div>
      <main className={`my-5 ${styles.markdown} w-full`}>{blog.content}</main>
    </AppLayout>
  );
};

export default page;

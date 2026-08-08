import type { Metadata } from "next";
import AppLayout from "@/components/layouts/layout.main";
import WorkExperience from "@/components/ui/work_experience_tab";
import { createPageMetadata } from "@/util/site";
import { works } from "@/util/misc";

export const metadata: Metadata = createPageMetadata({
  title: "Doings",
  description:
    "Current role, earlier teams, and selected work across product systems, fintech, OTT, lending, and EV charging software.",
  path: "/work",
  keywords: ["work experience", "career timeline", "engineering work"],
});

const page = () => {
  return (
    <AppLayout>
      <div className="space-y-12">
        <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-end">
          <div className="space-y-4">
            <h1 className="section-title max-w-[12ch]">
              what i am doing now and what i have done so far.
            </h1>
          </div>
          {/*<p className="page-copy lg:text-right sm:hidden lg:block">
            current role, earlier teams, and a few of the products and systems
            i have worked on.
          </p>*/}
        </section>

        <section className="space-y-4 ">
          {works.map((work) => {
            return <WorkExperience {...work} key={work.company} />;
          })}
        </section>
      </div>
    </AppLayout>
  );
};

export default page;

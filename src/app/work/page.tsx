import AppLayout from "@/components/layouts/layout.main";
import WorkExperience from "@/components/ui/work_experience_tab";
import { works } from "@/util/misc";
import React from "react";

const page = () => {
  return (
    <AppLayout>
      <div className="pt-6 flex flex-col gap-3">
        {works.map((e) => {
          return <WorkExperience {...e} key={e.company} />;
        })}
      </div>
    </AppLayout>
  );
};

export default page;

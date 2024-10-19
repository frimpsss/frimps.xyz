import React from "react";
import { LinkComponent } from "./link";
interface props {
  title: string;
  link: string;
  company: string;
  dates: string;
}
const WorkExperience = ({ title, link, company, dates }: props) => {
  return (
    <div className="cursor-pointer  hover:translate-x-1 duration-500">
      <LinkComponent title={company} link={link} extraStyles="text-[1.1rem]" />
      <div className="flex items-center justify-between text-[0.95rem] gap-4">
        <p className="font-normal text-left">{title}</p>
        <p className="font-light text-gray-900 text-right ">{dates}</p>
      </div>
    </div>
  );
};

export default WorkExperience;

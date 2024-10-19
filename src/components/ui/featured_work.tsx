import React, { ReactNode } from "react";
import { LinkComponent } from "./link";

export interface props {
  name: string;
  link: string;
  description: ReactNode;
}
const FeaturedWorkComponent = ({ description, link, name }: props) => {
  return (
    <div className="cursor-pointer hover:pl-1 duration-300">
      <LinkComponent title={name} link={link} extraStyles="text-[1.05rem] font-[400]" />
      {description}
    </div>
  );
};

export default FeaturedWorkComponent;

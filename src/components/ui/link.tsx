import React from "react";
interface props {
  title: string;
  link: string;
  extraStyles?: string;
}
export const LinkComponent = ({ title, link, extraStyles = "" }: props) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-primary-900 ${extraStyles} hover:underline duration-300`}
    >
      {title}
    </a>
  );
};

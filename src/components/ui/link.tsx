import { ReactNode } from "react";

interface props {
  title: string;
  link: string;
  extraStyles?: string;
  children?: ReactNode;
}
export const LinkComponent = ({
  title,
  link,
  extraStyles = "",
  children,
}: props) => {
  const isExternal = link.startsWith("http");

  return (
    <a
      href={link}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={children ? title : undefined}
      className={`transition-colors duration-200  ${extraStyles}`.trim()}
    >
      {children ?? title}
    </a>
  );
};

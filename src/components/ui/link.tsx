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
      className={`transition-colors duration-200  ${extraStyles}`.trim()}
    >
      {title}
    </a>
  );
};

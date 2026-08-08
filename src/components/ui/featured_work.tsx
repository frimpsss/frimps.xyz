import { ReactNode } from "react";
import { LinkComponent } from "./link";

export interface props {
  name: string;
  link?: string;
  description: ReactNode;
}
const FeaturedWorkComponent = ({ description, link, name }: props) => {
  return (
    <article className="surface h-full">
      {link ? (
        <LinkComponent
          title={name}
          link={link}
          extraStyles="inline-link text-[1.35rem] leading-tight tracking-[-0.04em] border-transparent"
        />
      ) : (
        <h3 className="text-[1.35rem] leading-tight tracking-[-0.04em]">
          {name}
        </h3>
      )}
      <div className="mt-6 small-copy [&_a]:inline [&_a]:text-[var(--foreground)] [&_a]:underline [&_a]:decoration-[color:var(--line-strong)] [&_a]:decoration-[1px] [&_a]:underline-offset-[0.14em] [&_a]:transition-colors [&_a]:duration-200 [&_a:hover]:text-[var(--accent)] [&_a:hover]:decoration-[color:var(--accent)] [&_p]:!m-0 [&_p]:!text-[0.9rem] [&_p]:!leading-[1.7] [&_p]:!text-[var(--muted)]">
        {description}
      </div>
    </article>
  );
};

export default FeaturedWorkComponent;

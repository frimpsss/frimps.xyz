import { LinkComponent } from "./link";
interface props {
  title: string;
  link?: string;
  company: string;
  location: string;
  dates: string;
  summary: string;
}
const WorkExperience = ({
  title,
  link,
  company,
  location,
  dates,
  summary,
}: props) => {
  const [startDate, endDate] = dates.split(" - ");

  return (
    <article className="surface py-5 md:py-6">
      <div className="grid gap-5 md:grid-cols-[180px_minmax(0,1fr)] md:items-start">
        <div className="text-[0.7rem] uppercase tracking-[0.04em] text-[var(--muted)]">
          <p>{startDate}</p>
          <p>{endDate ?? ""}</p>
        </div>
        <div className="space-y-3">
          {link ? (
            <LinkComponent
              title={company}
              link={link}
              extraStyles="inline-link text-[1.25rem] leading-tight tracking-[-0.04em] border-transparent"
            />
          ) : (
            <h2 className="text-[1.25rem] leading-tight tracking-[-0.04em]">
              {company}
            </h2>
          )}
          <p className="small-copy text-[0.92rem] text-[var(--foreground)]">
            {title}
          </p>
          <p className="small-copy">{location}</p>
          <p className="small-copy max-w-[42rem]">{summary}</p>
        </div>
      </div>
    </article>
  );
};

export default WorkExperience;

import { props as IFeaturedWork } from "@/components/ui/featured_work";
import { LinkComponent } from "@/components/ui/link";
export const links = [
  {
    title: "github",
    link: "https://github.com/frimpsss",
  },
  {
    title: "linkedin",
    link: "https://www.linkedin.com/in/akwasi-ampomah-frimpong-760bb0206/",
  },
  {
    title: "X (twitter)",
    link: "https://twitter.com/frimpssssss",
  },
];

export const featured_works: IFeaturedWork[] = [
  {
    name: "Dimba",
    link: "https://www.dimba.app/",
    description: (
      <p className="font-light text-[0.89rem]">
        An event discovery and ticketing application.
        <br />
        <LinkComponent link="https://www.discover.dimba.app/" title="WEB" />
      </p>
    ),
  },
  {
    name: "AquaTrack",
    link: "https://water-web-green.vercel.app/",
    description: (
      <p className="font-light text-[0.89rem]">
        A{" "}
        <LinkComponent
          title={"web"}
          link={"https://github.com/frimpsss/water-web"}
        />{" "}
        and{" "}
        <LinkComponent
          title={"mobile"}
          link={"https://github.com/frimpsss/water-mobile"}
        />{" "}
        application to interface a smart water metering infrustructure.
        <br />
        <LinkComponent
          link="https://github.com/frimpsss/capstone-api"
          title="API"
        />
      </p>
    ),
  },
  {
    name: "Flow your mind",
    link: "https://flow-your-mind.vercel.app/",
    description: (
      <p className="font-light text-[0.89rem]">
        Send and receive anonymous messages.
        <br />
        <LinkComponent
          link="https://github.com/frimpsss/flow-your-mind-api"
          title="API"
        />
        {"  ,  "}
        <LinkComponent
          link="https://github.com/frimpsss/flow-your-mind-web"
          title="UI"
        />
      </p>
    ),
  },
];

export const navlinks = [
  {
    title: "me",
    link: "/",
  },
  {
    title: "work",
    link: "/work",
  },
  {
    title: "writings",
    link: "/writings",
  },
];

export const works = [
  {
    title: "Software Engineer (NSS)",
    link: "https://www.access89.com/",
    company: "Access 89",
    dates: "September 2024 - present",
  },
  {
    title: "Software Engineer",
    link: "https://dimba.app",
    company: "DIMBA",
    dates: "June 2023 - present",
  },
  {
    title: "Backend Developer",
    link: "https://zomujo.com/",
    company: "Zomujo LLC",
    dates: "June 2023 - September-2023",
  },

  {
    title: "Software Developer",
    link: "https://www.polymorphlabs.io/",
    company: "Polymorph Labs",
    dates: "October 2023 - December 2023",
  },
  {
    title: "Frontend Developer",
    link: "https://www.myumbbank.com/",
    company: "UMB Bank",
    dates: "September 2022 - December 2022",
  },
];

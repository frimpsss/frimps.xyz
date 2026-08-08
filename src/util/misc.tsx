import { props as IFeaturedWork } from "@/components/ui/featured_work";
import { LinkComponent } from "@/components/ui/link";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  XIcon,
} from "@/components/ui/icons";

export const links = [
  {
    title: "github",
    link: "https://github.com/frimpsss",
    Icon: GithubIcon,
  },
  {
    title: "linkedin",
    link: "https://www.linkedin.com/in/akwasi-frimpong/",
    Icon: LinkedinIcon,
  },
  {
    title: "x.com",
    link: "https://twitter.com/akfrimpss",
    Icon: XIcon,
  },
  {
    title: "mail",
    link: "mailto:hey@frimps.xyz",
    Icon: MailIcon,
  },
];

export const featured_works: IFeaturedWork[] = [
  {
    name: "GZY",
    link: "https://github.com/frimpsss/gzy",
    description: (
      <p>
        GZY is a tiny cli tool written with Go to manage multiple github account
        on one device
        <br />
        <LinkComponent link="https://github.com/frimpsss/gzy" title="cli" />
      </p>
    ),
  },
  // {
  //   name: "Yen Kor",
  //   link: "#",
  //   description: (
  //     <p>
  //       Yen Kor (meaning: Lets Go) is a ride pooling app for finding, joining,
  //       and managing shared rides without the usual back and forth.
  //       <br />
  //       work in progress.
  //     </p>
  //   ),
  // },
  // {
  //   name: "Dimba",
  //   link: "https://www.dimba.app/",
  //   description: (
  //     <p className="font-light text-[0.89rem]">
  //       An event discovery and ticketing application.
  //       <br />
  //       <LinkComponent link="https://www.discover.dimba.app/" title="WEB" />
  //     </p>
  //   ),
  // },
  {
    name: "AquaTrack",
    link: "https://water-web-green.vercel.app/",
    description: (
      <p>
        A smart water metering product built across{" "}
        <LinkComponent
          title="web"
          link="https://github.com/frimpsss/water-web"
        />{" "}
        and{" "}
        <LinkComponent
          title="mobile"
          link="https://github.com/frimpsss/water-mobile"
        />{" "}
        and a shared backend.
        <br />
        <LinkComponent
          link="https://github.com/frimpsss/capstone-api"
          title="api"
        />
      </p>
    ),
  },
  {
    name: "Flow your mind",
    link: "https://flow-your-mind.vercel.app/",
    description: (
      <p>
        An anonymous messaging app for sending and receiving honest fully
        encrypted messages.
        <br />
        <LinkComponent
          link="https://github.com/frimpsss/flow-your-mind-api"
          title="api"
        />
        {"  ,  "}
        <LinkComponent
          link="https://github.com/frimpsss/flow-your-mind-web"
          title="ui"
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
    title: "doings",
    link: "/work",
  },
  {
    title: "notes",
    link: "/writings",
  },
];

export const works = [
  {
    title: "Software Engineer",
    link: "https://www.access89.com/",
    company: "Access 89 Limited",
    location: "Accra, Ghana",
    dates: "September 2024 - Present",
    summary:
      "Designing and building an ERP platform across accounting, finance, operations, reporting, and loan workflows, leading Foundry Business on web and mobile, and working on OCPP-related EV charging flows alongside APIs, integrations, Azure deployments, CI/CD, performance, and reliability.",
  },
  {
    title: "Software Engineer",
    link: "https://www.wi-flix.com",
    company: "Wi-flix BV",
    location: "Remote",
    dates: "July 2025 - Present",
    summary:
      "Leading frontend work on an OTT platform across web, TV, and mobile, shaping the frontend architecture, reusable UI system, playback and discovery flows, and performance work across different devices, CDNs, and network conditions.",
  },
  {
    title: "Junior Software Developer (Intern)",
    link: "https://www.polymorphlabs.io/",
    company: "Polymorph Labs Ghana Limited",
    location: "Accra, Ghana",
    dates: "October 2023 - December 2023",
    summary:
      "Worked in a small team to build a grade dispute web application for a university, using React, TypeScript, Tailwind CSS, and Apollo GraphQL, while also handling daily end-to-end testing with QA and clients.",
  },
  {
    title: "Junior Software Engineer (Intern)",
    link: "https://www.myumbbank.com/",
    company: "Universal Merchant Bank",
    location: "Accra, Ghana",
    dates: "October 2022 - December 2022",
    summary:
      "Worked with the team on internal risk assessment software and product-facing frontend builds, including Speedpay and TargetSave, with a focus on React, Tailwind CSS, and practical interface work for financial products.",
  },
];

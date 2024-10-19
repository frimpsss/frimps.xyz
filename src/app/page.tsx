"use client";
import Image from "next/image";
import frimps from "../../public/assets/images/frimps.jpg";
import AppLayout from "@/components/layouts/layout.main";
import { featured_works, links } from "@/util/misc";
import { LinkComponent } from "@/components/ui/link";
import React from "react";
import FeaturedWorkComponent from "@/components/ui/featured_work";
export default function Home() {
  return (
    <AppLayout>
      <div className="my-6 flex flex-col lg:flex-row lg:gap-10 lg:my-8  relative">
        <Image
          src={frimps}
          alt={"frimps"}
          className="w-[130px] lg:w-[150px] aspect-auto cursor-pointer  "
        />
        <div className="mt-4 font-light flex flex-col gap-2 text-[0.89rem]  lg:text-[1rem]">
          <p className="">
            hi, i'm an engineer, <br /> currently based in Ghana 🇬🇭.{" "}
          </p>
          <p className="">
            i'm mostly interested in anything typescript (web & mobile), and
            also java.
          </p>
          <p className="">
            i also like space explorations, computers, maybe current affairs and
            cool stuff.
          </p>
          <div>
            {links.map(({ link, title }, inx) => {
              return (
                <React.Fragment key={inx}>
                  <LinkComponent link={link} title={title} />
                  {inx != links.length - 1 && " / "}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <LinkComponent
          title={"Hire me (cv)"}
          link={
            "https://docs.google.com/document/d/13S3a5qQdgMT4NbVjqcHTxtm2UbIgoUONvvBYwwt1PrU/edit?usp=sharing"
          }
          extraStyles="text-primary-900 absolute right-0 lg:bottom-0 font-light underline"
        />
      </div>

      <div>
        <h4 className=" text-[1.2rem]  text-primary-900 cursor-pointer border-b-primary-100 border-b-[1px] pb-2">
          featured projects
        </h4>
        <div className="lg:mt-2  flex flex-col lg:gap-4 gap-2">
          {featured_works.map((elem) => {
            return <FeaturedWorkComponent {...elem} key={elem.name} />;
          })}
        </div>
      </div>
    </AppLayout>
  );
}

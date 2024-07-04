import Link from "next/link";
import Image from "next/image";
import frimps from "../assets/images/frimps.jpg";
import AppLayout from "@/components/layouts/layout.main";
export default function Home() {
  return (
    <AppLayout>
      <div className="my-6 flex flex-col lg:flex-row lg:gap-10 lg:my-8">
        <Image
          src={frimps}
          alt={"frimps"}
          className="w-[130px] lg:w-[150px] aspect-auto cursor-pointer"
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
          <p>
            <a
              href="https://github.com/frimpsss"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-900"
            >
              github
            </a>{" "}
            /{" "}
            <a
              href="https://twitter.com/frimpssssss"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-900"
            >
              X (twitter)
            </a>{" "}
            /{" "}
            <a
              href="https://www.linkedin.com/in/akwasi-ampomah-frimpong-760bb0206/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-900"
            >
              linkedin
            </a>
          </p>
        </div>
      </div>

      <div>
        <h4 className=" text-[1.2rem] mb-2 text-primary-900 cursor-pointer border-b-primary-100 border-b-[1px] pb-2">
          featured work
        </h4>
        <ul className="lg:list-disc lg:mt-4 mt:2 flex flex-col lg:gap-4 gap-2">
          <li>
            <div className="hover:border-l-4 border-l-primary-950 hover:pl-2 duration-300 ">
              <a
                target="__blank"
                href="https://www.dimba.app/"
                className="text-primary-950 text-[1.1rem]"
              >
                Dimba.com
              </a>
              <p className="font-light text-[0.89rem]">
                An event discovery and ticketing application.
              </p>
            </div>
          </li>
          <li>
            <div className="hover:border-l-4 border-l-primary-950 hover:pl-2 duration-300 ">
              <a
                target="__blank"
                href="https://flow-your-mind.vercel.app/"
                className="text-primary-950 text-[1.1rem]"
              >
                Flow your mind
              </a>
              <p className="font-light text-[0.89rem]">
                Send and recieve anounymous messages.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </AppLayout>
  );
}

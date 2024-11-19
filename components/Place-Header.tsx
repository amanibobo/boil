import Image from "next/image";
import { Button } from "./ui/button";
import { socialMediaLinks } from "@/utils/constants";
import Link from "next/link";
const githubLink = socialMediaLinks[1];

const PlaceHeader = () => {
  return (
    <div className="relative h-full w-full dark:bg-[#121212] bg-[#FAFAFA] flex min-h-screen flex-col pt-14 md:pt-12">
      <div className=" h-full w-full dark:bg-[#121212] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <main className="flex-1 px-4 sm:px-6 lg:px-[125px]">
          <section className="w-full py-12 md:py-24 lg:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-5">
                  <h1 className="text-5xl font-semibold tracking-tighter sm:text-4xl md:text-6xl lg:text-7xl">
                    A bolier 🍲 plate for
                    <br />
                    all of my AI focused apps.
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    This text is also just random and placeholder so analytics
                    for a sustainable, high-performance future.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Button className="h-10 gap-2 rounded-3xl bg-black text-white hover:bg-black">
                    Sign Up
                  </Button>

                  <Link
                    href={githubLink.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="rounded-3xl h-10" variant="outline">
                      GitHub
                      <githubLink.icon className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        <div className="flex justify-center px-4 sm:px-6 lg:px-[125px] pb-12">
          <Image
            src="/place-more.png"
            alt="Place Demo"
            width={1080}
            height={1080}
            quality={100}
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default PlaceHeader;

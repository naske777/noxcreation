"use client";
import Image from "next/image";
import Link from "next/link";

const FeaturedPostss = () => {
  return (
    <section>
      <h2 className="text-3xl md:text-[30px] font-semibold leading-tight mb-8 mt-5">
        Post destacados
      </h2>
      <div className="flex flex-wrap item-center">
        <div className="flex-1 md:pe-5">
        <Link   href={"/blog/detail"}>
        <Image
            className="w-full object-cover"
            src="/blog/FeaturedPosts/uxReview.jpg"
            width={592}
            height={228}
            alt="uxReview"
            layout="responsive"
          />
          </Link>
          <p className="text-[#526D64] mt-7 text-sm font-semibold">
            Olivia Rhye • 20 Jan 2022
          </p>
          <div className="flex justify-between item-center">
            <h3 className="text-2xl mt-2 font-semibold">
              UX review presentations
            </h3>
            <Image
              src="/blog/FeaturedPosts/arrowUpRight.svg"
              width={24}
              height={24}
              alt="arrowUpRight"
            />
          </div>

          <p className="text-[#7B7B7B] mt-5 mb-7">
            How do you create compelling presentations that wow your colleagues
            and impress your managers?
          </p>

          <span className="me-3 text-sm py-1 px-3 rounded-2xl text-[#0AC05E] bg-[#0AC05E1A]">
            Design
          </span>
          <span className="me-3 text-sm py-1 px-3 rounded-2xl text-[#0AC05E] bg-[#0AC05E1A]">
            Research
          </span>
          <span className="text-sm py-1 px-3 rounded-2xl text-[#0AC05E] bg-[#0AC05E1A]">
            Presentation
          </span>
        </div>

        <div className="flex-1 md:ps-5 mt-7 md:mt-0">
          <div className="felx felx-col">
            <Link href={"/blog/detail"} className="md:flex pb-4">
              
              <Image
                className="object-cover"
                src="/blog/FeaturedPosts/migrating.jpg"
                width={320}
                height={200}
                alt="migrating"
                layout="responsive"
              />
              <div className="ms-4">
                <p className="text-[#526D64] mt-7 text-sm font-semibold">
                  Phoenix Baker • 19 Jan 2022
                </p>
                <h3 className="text-2xl mt-2 font-semibold">
                  Migrating to Linear 101
                </h3>

                <p className="text-[#7B7B7B] mt-5 mb-7">
                  Linear helps streamline software projects, sprints, tasks, and
                  bug tracking. Here’s how to get...
                </p>

                <span className="me-3 text-sm py-1 px-3 rounded-2xl text-[#0AC05E] bg-[#0AC05E1A]">
                  Design
                </span>
                <span className="me-3 text-sm py-1 px-3 rounded-2xl text-[#0AC05E] bg-[#0AC05E1A]">
                  Research
                </span>
              </div>
            </Link>

            <Link href={"/blog/detail"} className="block md:flex pt-4">
              <Image
                className="w-full object-cover"
                src="/blog/FeaturedPosts/building.jpg"
                width={320}
                height={200}
                alt="building"
                layout="responsive"
              />
              <div className="ms-4">
                {" "}
                <p className="text-[#526D64] mt-7 text-sm font-semibold">
                  Lana Steiner • 18 Jan 2022
                </p>
                <h3 className="text-2xl mt-2 font-semibold">
                  Building your API Stack
                </h3>
                <p className="text-[#7B7B7B] mt-5 mb-7">
                  The rise of RESTful APIs has been met by a rise in tools for
                  creating, testing, and manag...
                </p>
                <span className="me-3 text-sm py-1 px-3 rounded-2xl text-[#0AC05E] bg-[#0AC05E1A]">
                  Design
                </span>
                <span className="me-3 text-sm py-1 px-3 rounded-2xl text-[#0AC05E] bg-[#0AC05E1A]">
                  Research
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPostss;

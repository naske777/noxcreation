import Image from "next/image";

const loremText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
 dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
 consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`;

export default function Detail() {
  return (
    <main className="mx-5 md:mx-[100px] mb-10">
      <div className="flex-1 md:pe-5">
        <Image
          className="w-full object-cover"
          src="/blog/FeaturedPosts/uxReview.jpg"
          width={592}
          height={228}
          alt="uxReview"
          layout="responsive"
        />
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
          {loremText}
          <br /> <br />
          {loremText}
          <br /> <br />
          {loremText}
          <br /> <br />
          {loremText}
          <br /> <br />
          {loremText}
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
    </main>
  );
}

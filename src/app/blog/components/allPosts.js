"use client";
import Image from "next/image";
import Link from "next/link";

const postsData = [
  {
    title: "Bill Walsh leadership lessons",
    date: "Alec Whitten • 17 Jan 2022",
    imageSrc: "/blog/allPost/Images.jpg",
    alt: "Bill",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    tags: ["Leadership", "Management"],
  },
  {
    title: "Bill Walsh leadership lessons",
    date: "Alec Whitten • 17 Jan 2022",
    imageSrc: "/blog/allPost/Images-1.jpg",
    alt: "Bill1",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    tags: ["Leadership", "Management"],
  },
  {
    title: "Bill Walsh leadership lessons",
    date: "Alec Whitten • 17 Jan 2022",
    imageSrc: "/blog/allPost/Images-2.jpg",
    alt: "Bill2",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    tags: ["Leadership", "Management"],
  },
  {
    title: "Bill Walsh leadership lessons",
    date: "Alec Whitten • 17 Jan 2022",
    imageSrc: "/blog/allPost/Images-3.jpg",
    alt: "Bill3",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    tags: ["Leadership", "Management"],
  },
  {
    title: "Bill Walsh leadership lessons",
    date: "Alec Whitten • 17 Jan 2022",
    imageSrc: "/blog/allPost/Images-4.jpg",
    alt: "Bill4",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    tags: ["Leadership", "Management"],
  },
  {
    title: "Bill Walsh leadership lessons",
    date: "Alec Whitten • 17 Jan 2022",
    imageSrc: "/blog/allPost/Images-5.jpg",
    alt: "Bill5",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    tags: ["Leadership", "Management"],
  },
];

const Post = ({ title, date, imageSrc, alt, description, tags }) => (
  <Link  className="flex-1 " href={"/blog/detail"}>
      <Image
        className="min-w-[350px] max-w-[400px] object-cover"
        src={imageSrc}
        width={592}
        height={228}
        alt={alt}
        layout="responsive"
      />
      <p className="text-[#526D64] mt-7 text-sm font-semibold">{date}</p>
      <div className="flex justify-between item-center">
        <h3 className="text-2xl mt-2 font-semibold">{title}</h3>
        <Image
          src="/blog/FeaturedPosts/arrowUpRight.svg"
          width={24}
          height={24}
          alt="arrowUpRight"
        />
      </div>
      <p className="text-[#7B7B7B] mt-5 mb-7">{description}</p>
      <div>
        {tags.map((tag) => (
          <span
            key={tag}
            className="me-3 text-sm py-1 px-3 rounded-2xl text-[#0AC05E] bg-[#0AC05E1A]"
          >
            {tag}
          </span>
        ))}
      </div>
  </Link>
);

const AllPost = () => {
  return (
    <section className="mb-10">
      <h2 className="text-3xl md:text-[30px] font-semibold leading-tight mb-8 mt-5">
        Todos los post
      </h2>
      <div className="flex justify-center flex-wrap item-center gap-14">
        {postsData.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </div>
    </section>
  );
};

export default AllPost;

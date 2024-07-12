import Image from "next/image";
import Link from "next/link";
import { navigationLinks } from "../data"; // Assuming data.js is in the same directory

const Footer = () => {
  return (
    <footer className="bg-[#FAFAFA] xl:h-[184px] px-4 xl:px-[100px] mt-10 md:mt-0">
      <nav className="pt-14">
        <ul className="flex flex-wrap justify-center md:justify-start gap-6 items-center">
          <li className="md:me-4">
            <Link href="/">
              <Image
                src="/logo.svg"
                width={87}
                height={40.26}
                alt="Logo"
              ></Image>
            </Link>
          </li>
          <div className="ms-auto flex flex-wrap justify-center md:justify-start gap-6 items-center">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-600 text-sm leading-5"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </div>
        </ul>
      </nav>

      <div className="flex gap-4 md:gap-0 p-4 items-center md:items-end flex-col md:flex-row md:justify-between mt-10">
        <p className="text-center md:text-start text-sm md:text-md">
          © 2024 Nox Creations. All rights reserved
        </p>
        <ul className="flex gap-6 items-center">
          <li>
            <Link href="#" className="">
              <Image
                src={"/footer/instagram.svg"}
                height={24}
                width={24}
                alt="instagram"
              />
            </Link>
          </li>
          <li>
            <Link href="#" className="">
              <Image src={"/footer/web.svg"} height={24} width={24} alt="web" />
            </Link>
          </li>
          <li>
            <Link href="#" className="">
              <Image src={"/footer/x.svg"} height={24} width={24} alt="x" />
            </Link>
          </li>
          <li>
            <Link href="#" className="">
              <Image
                src={"/footer/youtube.svg"}
                height={24}
                width={24}
                alt="youtube"
              />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

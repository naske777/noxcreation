"use client";
import Image from "next/image";
import Link from "next/link";
import SidebarMenu from "./sidebarMenu";
import { useState } from "react";
import { navigationLinks , navegationLinks2 ,knowMore } from "../data";


const NavLink = ({ href, label, extraClasses = "" }) => (
  <li>
    <Link behavior={"smooth"}
      href={href}
      className={`text-sm font-semibold leading-5 ${extraClasses}`}
    >
      {label}
    </Link>
  </li>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="bg-[linear-gradient(180deg,_rgba(240,250,244,1)_0%,_rgba(243,251,246,0.8)_50%,_transparent)] h-[118px] px-5 md:px-[112px] py-[24px]">
        <ul className="flex items-center">
          <li className="me-4">
            <Link href="/">
              <Image src="/logo.svg" width={87} height={40.26} alt="Logo" />
            </Link>
          </li>
          <div className="hidden xl:flex w-full gap-6">
            {navigationLinks.map((link, index) => (
              <NavLink
                key={index}
                href={link.href}
                label={link.label}
                extraClasses={link.extraClasses}
              />
            ))}

            <div className="flex ms-auto gap-6">
              {navegationLinks2.map((link, index) => (
                <NavLink
                  key={index}
                  href={link.href}
                  label={link.label}
                  extraClasses={link.extraClasses}
                />
              ))}
            </div>
          </div>
          <div className="xl:hidden ms-auto">
            <button onClick={() => setIsOpen(!isOpen)}>
              <Image src="/hamburger.svg" width={24} height={24} alt="Menu" />
            </button>
          </div>
        </ul>
        <SidebarMenu isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)}>
          <ul className="flex flex-col gap-4">
            {navigationLinks.map((link, index) => (
              <NavLink
                key={index}
                href={link.href}
                label={link.label}
                extraClasses={link.extraClasses}
              />
            ))}
            <NavLink key={6} href={knowMore.href} label={knowMore.label} />
          </ul>
        </SidebarMenu>
      </nav>
    </header>
  );
};

export default Header;

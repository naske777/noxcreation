// sidebarMenu.js
/** @jsxImportSource react */ // Ensure JSX support
"use client";

import Image from "next/image";

const SidebarMenu = ({ children, isOpen, onToggle }) => {
  return (
    <>
      <div
        className={` flex flex-col fixed top-0 right-0 h-full bg-white shadow-lg max-w-[400px] min-w-[350px] z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center item-center justify-between font-bold p-5 bg-slate-100">
        <h1 className="text-xl">Menú</h1>
        <button onClick={onToggle} className="">
          <Image src={"close.svg"} width={20} height={20} alt="close" />
        </button>
        </div>
        <div className="p-8">{children}</div>
      </div>
    </>
  );
};

export default SidebarMenu;

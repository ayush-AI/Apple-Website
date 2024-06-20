/* eslint-disable tailwindcss/enforces-shorthand */
/* eslint-disable tailwindcss/classnames-order */
import { navLists } from "@/constants";
import { appleImg, bagImg, searchImg } from "@/utils";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <header className="flex w-full items-center justify-between py-5 sm:px-10 px-5">
      <nav className="flex w-full screen-max-width">
        <Image src={appleImg} alt="Apple logo" width={14} height={18} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
              key={nav}
            >
              {nav}
            </div>
          ))}
        </div>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <Image src={searchImg} alt="Apple logo" width={18} height={18} />
          <Image src={bagImg} alt="Apple logo" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

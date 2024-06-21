import { navLists } from "@/constants";
import { appleImg, bagImg, searchImg } from "@/utils";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <header className="flex w-full items-center justify-between p-5 sm:px-10">
      <nav className="screen-max-width flex w-full">
        <Image src={appleImg} alt="Apple logo" width={14} height={18} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              className="cursor-pointer px-5 text-sm text-gray transition-all hover:text-white"
              key={nav}
            >
              {nav}
            </div>
          ))}
        </div>
        <div className="flex items-baseline gap-7 max-sm:flex-1 max-sm:justify-end">
          <Image src={searchImg} alt="Apple logo" width={18} height={18} />
          <Image src={bagImg} alt="Apple logo" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

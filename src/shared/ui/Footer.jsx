import React from "react";

import WordOfTheDay from "./WordOfTheDay";

function Footer() {
  return (
    <footer
      className=" w-full px-4 py-6
        flex flex-col items-center gap-15 mt-8
        md:flex-row md:items-center md:justify-between
        md:absolute md:bottom-6"
    >
      <div className=" order-1 md:order-2  flex justify-center md:justify-end">
        <WordOfTheDay />
      </div>

      <div className="order-2 md:order-1 mb-5 md:mt-16  md:text-left text-[1.1rem] sm:text-sm md:text-2xl lg:text-2xl text-[#1a1a1a] opacity-95 ">
        <p>&copy; 2025. Designed and built by Mohamad Abi Hachem</p>
      </div>
    </footer>
  );
}

export default Footer;

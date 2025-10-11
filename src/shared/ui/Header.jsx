import React from "react";

function Header() {
  return (
    <header className="mt-12 md:-mt-40">
      <div className="flex items-start">
        <div className="text-center flex flex-col md:gap-12 gap-10">
          <h1 className="text-7xl sm:text-6xl md:text-[7rem] font-bold text-[#1a1a1a] tracking-[-0.2px]">
            Lingua<span className="text-[#f36b0b]">Speak</span>
          </h1>

          <h2 className=" text-2xl sm:text-2xl md:text-[2rem] text-[#252323]">
            LinguaSpeak: Bridging Voices, Connecting
            <span className="text-[#f36b0b]"> Worlds.</span>
          </h2>
        </div>
      </div>
    </header>
  );
}

export default Header;

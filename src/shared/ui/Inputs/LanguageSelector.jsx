import React from "react";
import { IconLanguage } from "@tabler/icons-react";

function LanguageSelector({
  selectedLanguage,
  setSelectedLanguage,
  languages,
}) {
  return (
    <span
      className="cursor-pointer rounded-full space-x-1 pl-2
+   bg-[#000000] flex items-center flex-row p-1 text-sm sm:text-base"
    >
      <div className="flex items-center gap-3 md:py-[0.4rem] md:px-[0.8rem]">
        <IconLanguage size={20} />

        <label htmlFor="language-select" className="sr-only">
          Select language
        </label>
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          className="bg-[#000] flex flex-row rounded-full md:py-1 md:px-2 py-0 px-0  text-white outline-none cursor-pointer text-xl sm:text-base md:text-3xl"
        >
          {languages.map(({ code, name }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
      </div>
    </span>
  );
}

export default LanguageSelector;

import { IconCopy, IconVolume } from "@tabler/icons-react";
import React, { useState } from "react";

import TextArea from "./Inputs/TextArea";
import LanguageSelector from "./Inputs/LanguageSelector";

function TargetPanel({
  targetText,
  selectedLanguage,
  setSelectedLanguage,
  handleAudioPlayback,
  isLoadingTranslate,
}) {
  const [copied, setCopied] = useState(false);

  const languageMap = {
    ar: "Arabic",
    en: "English",
    fr: "French",
    es: "Spanish",
    de: "German",
  };

  const languages = Object.entries(languageMap).map(([code, name]) => ({
    code,
    name,
  }));

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(targetText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative p-6 sm:p-8 md:p-12 z-10 flex flex-col border rounded-lg shadow-lg  w-full max-w-[40rem] bg-[#1A1A1A] border-neutral-700 shadow-gray-900/20 mx-auto">
      <TextArea
        id="target-language"
        value={targetText}
        readOnly
        placeholder="Target Language"
        isLoadingTranslate={isLoadingTranslate}
      />
      <div className="flex justify-between w-full">
        <span className="cursor-pointer flex items-center gap-5">
          <LanguageSelector
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
            languages={languages}
          />
          <IconVolume
            className="w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11"
            onClick={() => handleAudioPlayback(targetText, selectedLanguage)}
          />
          <div className="flex  items-center  cursor-pointer ">
            <IconCopy
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11"
              onClick={handleCopyToClipboard}
            />
            {copied && (
              <span className="text-md sm:text-xl md:text-2xl px-2 text-green-500">
                Copied!
              </span>
            )}
          </div>
        </span>
      </div>
    </div>
  );
}

export default TargetPanel;

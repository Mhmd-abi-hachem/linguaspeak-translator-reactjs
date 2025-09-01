import React from "react";
import { IconVolume } from "@tabler/icons-react";

import TextArea from "./Inputs/TextArea";
import VoiceRecognition from "./VoiceRecognition";

function SourcePanel({ sourceText, setSourceText, handleAudioPlayback }) {
  return (
    <div
      className="relative p-6 sm:p-8 md:p-12 z-10 flex flex-col border rounded-lg shadow-lg 
 w-full max-w-[40rem] bg-[#1A1A1A] border-neutral-700 shadow-gray-900/20 mx-auto"
    >
      <TextArea
        id="source-language"
        placeholder="Enter your text here..."
        onChange={(e) => setSourceText(e.target.value)}
        value={sourceText}
      />

      <div className="flex flex-row justify-between w-full items-center mt-4 mr-8">
        <div className="cursor-pointer flex space-x-2 flex-row gap-5">
          <VoiceRecognition setSourceText={setSourceText} />
          <IconVolume
            className="w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11"
            onClick={() => handleAudioPlayback(sourceText)}
          />
        </div>

        <div className="text-2xl">{sourceText?.length || 0} / 2000</div>
      </div>
    </div>
  );
}

export default SourcePanel;

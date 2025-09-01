import React from "react";
import { IconVolume } from "@tabler/icons-react";

import Spinner from "./Spinner";

function WordOfTheDayContent({ word, isLoadingWord, error }) {
  function handleAudioPlayback(text, lang = "en-US") {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    window.speechSynthesis.speak(utterance);
  }

  if (error) {
    return (
      <p className="text-3xl text-center text-red-500">
        Sorry, we couldn't fetch the word of the day. Please try again.
      </p>
    );
  }

  if (isLoadingWord) return <Spinner />;

  return (
    <div className="flex flex-col justify-center gap-10">
      <div className="flex flex-col gap-7 md:gap-10 justify-center items-center text-center">
        <h2 className="text-3xl sm:text-3xl md:text-5xl font-semibold text-[#1a1a1a] opacity-90 text-center">
          Word of the day:
        </h2>
        <div className="flex gap-3 md:gap-6 justify-center items-center">
          <h3 className="text-3xl sm:text-4xl md:text-5xl bg-[#f87315] font-bold rounded-full text-white px-4 sm:px-8 py-2 sm:py-[0.8rem]">
            {word.word}
          </h3>
          <IconVolume
            className="text-[#888] cursor-pointer w-8 h-8 sm:w-6 sm:h-6 md:w-12 md:h-12"
            onClick={() => {
              handleAudioPlayback(word.word);
            }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-10 md:gap-8 mt-4">
        <div className=" flex flex-col gap-4 ">
          <span className="text-[#f87315] font-semibold text-2xl md:text-3xl">
            Meaning:
          </span>
          <ul className="list-disc text-[#1a1a1a]">
            <li>
              <p className="text-2xl md:text-3xl  leading-[1.8]">
                {word.meaning}
              </p>
            </li>
          </ul>
        </div>

        <div className=" flex flex-col gap-10 md:gap-8">
          <div className=" flex flex-col gap-4 ">
            <span className="text-[#f87315] font-semibold text-2xl md:text-3xl">
              Example:
            </span>
            <ul className="list-disc text-[#1a1a1a]">
              <li>
                <p className="text-2xl md:text-3xl  leading-[1.8]">
                  {word.example}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WordOfTheDayContent;

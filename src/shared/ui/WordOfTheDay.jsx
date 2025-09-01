import React, { useState } from "react";

import WordOfTheDayContent from "./WordOfTheDayContent";
import Modal from "./Modal";
import { useWordOfTheDay } from "../hooks/useWordOfTheDay";

function WordOfTheDay() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { word, isLoadingWord, error } = useWordOfTheDay();

  function handleToggleModal() {
    setIsModalOpen((isOpen) => !isOpen);
  }

  return (
    <div className="flex flex-col gap-4 mt-0 items-center text-center  ">
      <h3 className="text-[#1a1a1a] font-semibold text-2xl sm:text-2xl md:text-3xl">
        Word Of The Day 💡
      </h3>
      <button
        className="  py-1.5 px-3 md:p-[10px] md:px-[20px] text-2xl  border-none rounded-[5rem] bg-[#f36b0b] text-white md:text-[1.6rem] font-bold cursor-pointer hover:-translate-y-2 hover:bg-[#ff6600] shadow-[0_4px_6px_rgba(0,0,0,0.1)] z-[1000] transition-all duration-300"
        onClick={handleToggleModal}
      >
        Click to reveal
      </button>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <WordOfTheDayContent
            word={word}
            isLoading={isLoadingWord}
            error={error}
          />
        </Modal>
      )}
    </div>
  );
}

export default WordOfTheDay;

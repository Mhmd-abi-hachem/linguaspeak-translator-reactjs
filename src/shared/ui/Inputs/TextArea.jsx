import React from "react";
import SpinnerMini from "../SpinnerMini";

function TextArea({
  id,
  onChange,
  placeholder,
  value,
  isLoadingTranslate,
  readOnly,
}) {
  const isReadOnly = readOnly || isLoadingTranslate;

  return (
    <div className="relative">
      <textarea
        rows={4}
        id={id}
        className="placeholder-neutral-400 py-2.5 px-4 text-[2.6rem] sm:text-5xl border-none focus:outline-none block w-full border-transparent rounded-lg sm:leading-16 dark:border-transparent text-neutral-300 resize-none"
        placeholder={isLoadingTranslate ? "" : placeholder}
        onChange={!isReadOnly ? onChange : undefined}
        value={isLoadingTranslate ? "" : value}
        readOnly={isReadOnly}
      />
      {isLoadingTranslate && (
        <div className="absolute inset-0 flex items-center justify-start">
          <SpinnerMini />
        </div>
      )}
    </div>
  );
}

export default TextArea;

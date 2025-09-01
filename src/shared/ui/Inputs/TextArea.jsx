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
        rows={5}
        id={id}
        className="placeholder-neutral-400 py-2.5 px-4 text-3xl sm:text-2xl md:text-5xl border-none focus:outline-none block w-full border-transparent rounded-lg  dark:border-transparent dark:text-neutral-400 resize-none"
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

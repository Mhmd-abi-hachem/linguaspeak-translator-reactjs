import React, { useState } from "react";

import { useTranslate } from "./shared/hooks/useTranslate";
import Header from "./shared/ui/Header";
import SourcePanel from "./shared/ui/SourcePanel";
import TargetPanel from "./shared/ui/TargetPanel";
import DotBackground from "./shared/ui/DotBackground";
import Footer from "./shared/ui/Footer";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("ar");
  const [sourceText, setSourceText] = useState("");

  const { targetText, error, isLoadingTranslate } = useTranslate(
    sourceText,
    selectedLanguage
  );

  function handleAudioPlayback(text, lang = "en-US") {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    window.speechSynthesis.speak(utterance);
  }

  return (
    <main className="overflow-hidden max-w-[130rem] min-h-screen md:h-screen h-auto mx-auto">
      <DotBackground>
        {/* section only header */}
        <Header />

        {/* translation Panels */}
        <div className="grid gap-10 md:gap-12 md:grid-cols-2 grid-cols-1 mt-10 md:mt-20">
          {!error ? (
            <>
              <SourcePanel
                sourceText={sourceText}
                setSourceText={setSourceText}
                handleAudioPlayback={handleAudioPlayback}
              />

              <TargetPanel
                targetText={targetText}
                selectedLanguage={selectedLanguage}
                setSelectedLanguage={setSelectedLanguage}
                handleAudioPlayback={handleAudioPlayback}
                isLoadingTranslate={isLoadingTranslate}
              />
            </>
          ) : (
            <div className="col-span-2 text-3xl text-center text-red-500 p-4 flex items-center justify-center">
              An error occurred during translation. Please try reloading the
              page.
            </div>
          )}
        </div>

        {/* section only footer */}
        <Footer />
      </DotBackground>
    </main>
  );
}

export default App;

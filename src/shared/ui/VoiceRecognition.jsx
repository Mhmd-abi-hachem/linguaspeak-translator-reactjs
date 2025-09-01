import React, { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { IconMicrophone, IconPlayerStop } from "@tabler/icons-react";

function VoiceRecognition({ setSourceText }) {
  const { transcript, listening } = useSpeechRecognition();

  useEffect(
    function () {
      setSourceText(transcript);
    },
    [transcript, setSourceText]
  );

  function handleVoiceRecording() {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening();
    }
  }

  return (
    <div onClick={handleVoiceRecording}>
      {listening ? (
        <IconPlayerStop
          className="w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11"
          color="red"
        />
      ) : (
        <IconMicrophone className="w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11" />
      )}
    </div>
  );
}

export default VoiceRecognition;

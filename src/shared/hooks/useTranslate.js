import React, { useEffect, useState } from "react";

export function useTranslate(sourceText, selectedLanguage) {
  const [targetText, setTargetText] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isCurrentRequest = true;
    if (!sourceText || sourceText.trim() === "") {
      setTargetText("");
      setIsLoading(false);

      return;
    }
    const handleTranslate = async (sourceText, selectedLanguage) => {
      setIsLoading(true);

      try {
        setError(null);

        const response = await fetch(
          "https://deep-translate1.p.rapidapi.com/language/translate/v2",
          {
            method: "POST",
            headers: {
              "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
              "x-rapidapi-host": "deep-translate1.p.rapidapi.com",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              q: sourceText,
              source: "auto",
              target: selectedLanguage,
            }),
          }
        );

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message);
        }

        const {
          data: {
            translations: { translatedText },
          },
        } = await response.json();

        if (isCurrentRequest) {
          setTargetText(translatedText);
        }
      } catch (err) {
        if (isCurrentRequest) {
          setError(err.message);
          setTargetText("");
        }
      } finally {
        if (isCurrentRequest) {
          setIsLoading(false);
        }
      }
    };

    const timeoutId = setTimeout(() => {
      handleTranslate(sourceText, selectedLanguage);
    }, 300);

    return () => {
      isCurrentRequest = false;
      clearTimeout(timeoutId);
    };
  }, [sourceText, selectedLanguage]);

  return { targetText, error, isLoadingTranslate: isLoading };
}

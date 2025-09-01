import React, { useEffect, useState } from "react";

export function useWordOfTheDay() {
  const [word, setWord] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchWord() {
      try {
        setError(null);
        const response = await fetch(
          "https://word-of-the-day11.p.rapidapi.com/",
          {
            method: "GET",
            headers: {
              "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
              "x-rapidapi-host": "word-of-the-day11.p.rapidapi.com",
            },
          }
        );
        if (!response.ok) {
          const error = await response.text();
          throw new Error(error.message);
        }
        const wordOfTheDay = await response.json();
        const { word, meaning, example } = wordOfTheDay;
        setWord({ word, meaning, example });
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchWord();
  }, []);
  return { word, isLoadingWord: isLoading, error };
}

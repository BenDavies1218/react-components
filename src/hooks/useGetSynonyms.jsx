import { useState } from "react";
import fetchWords from "../functions/fetchWords";

export const useGetSynonyms = (currentWord) => {
  const [synonyms, setSynonyms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getSynonyms = async (word) => {
    setIsLoading(true);
    await fetchWords(word, setSynonyms, currentWord);
    setIsLoading(false);
  };

  return { isLoading, getSynonyms, synonyms };
};

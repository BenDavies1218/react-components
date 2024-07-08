import { useState } from "react";
import { useGetSynonyms } from "../hooks/useGetSynonyms";

export default function Challenge1() {
  const [currentWord, setCurrentWord] = useState("");
  const { isLoading, synonyms, getSynonyms } = useGetSynonyms(currentWord);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    getSynonyms(currentWord);
  };

  const handleClickOnWord = (newWord) => {
    setCurrentWord(newWord);
    getSynonyms(newWord);
  };

  return (
    <>
      <h1>Synonym Search</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="searchInput">Search for Synonyms: </label>
        <input
          type="text"
          id="searchInput"
          placeholder="Search"
          value={currentWord}
          onChange={(e) => setCurrentWord(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {synonyms.map((word, index) => (
            <li
              key={index}
              onClick={() => handleClickOnWord(word.word)}
              style={{ cursor: "pointer" }}
            >
              {word.word}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

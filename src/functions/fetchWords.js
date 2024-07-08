const BASE_URL = `https://api.datamuse.com/words?rel_syn=`;

const fetchWords = async (newWord, setSynonyms, currentWord) => {
  try {
    const wordToFetch = newWord || currentWord;
    const response = await fetch(`${BASE_URL}${wordToFetch}`);
    const data = await response.json();
    setSynonyms(data);
  } catch (error) {
    console.log(error);
  }
};

export default fetchWords;

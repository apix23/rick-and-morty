import { useEffect, useState } from "react";
import { fetchCharData } from "../services/fetchCharData";
import { mapperChar } from "../utils/mapperChar";
import { Char } from "../types/Characters";
export const useChars = () => {
  const [chars, setChars] = useState<Char[]>([]);
  const [userSearch, setuserSearch] = useState("");
  useEffect(() => {
    fetchCharData("https://rickandmortyapi.com/api/character").then(
      ({ results: characters }) => {
        setChars(mapperChar(characters));
      }
    );
  }, []);

  useEffect(() => {
    console.log("chars", chars);
  }, [chars]);

  const searchChar = (search: string) => {
    setuserSearch(search);
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchCharData(
        `https://rickandmortyapi.com/api/character/?name=${userSearch}`
      ).then(({ results: characters }) => {
        setChars(mapperChar(characters));
      });
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [userSearch]);

  return { chars, searchChar, userSearch };
};

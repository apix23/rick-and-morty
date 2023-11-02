import { useEffect, useState } from "react";
import { fetchCharData } from "../services/fetchCharData";

export type Char = {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  origin: string;
};

type fetchCharType = Omit<Char, "origin"> & { origin: { name: string } };

export const useChars = () => {
  const [chars, setChars] = useState([]);
  useEffect(() => {
    fetchCharData("https://rickandmortyapi.com/api/character").then(
      (character) => {
        const characters = character.results.map(
          (char: fetchCharType): Char => ({
            id: char.id,
            name: char.name,
            status: char.status,
            species: char.species,
            image: char.image,
            origin: char.origin.name,
          })
        );
        setChars(characters);
      }
    );
  }, []);
  return { chars };
};

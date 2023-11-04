import { Char, fetchCharType } from "../types/Characters";

export const mapperChar = (characters: fetchCharType[]): Char[] =>
  characters.map((character: fetchCharType) => {
    return {
      id: character.id,
      name: character.name,
      status: character.status,
      species: character.species,
      image: character.image,
      origin: character.origin.name,
    };
  });

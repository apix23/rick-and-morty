import "./Characters.css";
import { CharacterCard } from "../card/CharacterCard";
import { Char, useChars } from "../../hooks/useChars";

export const Characters = () => {
  const { chars } = useChars();

  return (
    <main className="layout__cardsContainer">
      {chars.map((character: Char) => (
        <CharacterCard
          key={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          origin={character.origin}
          image={character.image}
        />
      ))}
    </main>
  );
};

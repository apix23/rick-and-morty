import { createContext, useContext } from "react";
import { Char } from "../types/Characters";

type CharactersContext = {
  chars: Char[];
  searchChar: (userSearch: string) => void;
  userSearch: string;
};

export const charsContext = createContext<CharactersContext | null>(null);

export const useCharsContext = () => {
  const context = useContext(charsContext);
  if (!context) {
    throw new Error("useCharsContext must be used within a CharsProvider");
  }
  return context;
};

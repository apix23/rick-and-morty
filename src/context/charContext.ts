import { createContext } from "react";
import { Char } from "../types/Characters";

type CharactersContext = {
  chars: Char[];
  searchChar: (userSearch: string) => void;
  userSearch: string;
};

export const charsContext = createContext<CharactersContext>({
  chars: [],
  searchChar: () => {},
  userSearch: "",
});

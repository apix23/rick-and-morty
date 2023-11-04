import { useChars } from "../hooks/useChars";
import { charsContext } from "./charContext";

type Props = {
  children: React.ReactNode;
};

export const CharactersProvider = ({ children }: Props) => {
  const { chars, searchChar, userSearch } = useChars();
  return (
    <charsContext.Provider value={{ chars, searchChar, userSearch }}>
      {children}
    </charsContext.Provider>
  );
};

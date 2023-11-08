import "./SearchChar.css";
import { useCharsContext } from "../../context/charContext";

export const SearchChar = () => {
  const { userSearch, searchChar } = useCharsContext();
  return (
    <form className="search">
      <input
        type="text"
        value={userSearch}
        onChange={(e) => searchChar(e.target.value)}
        placeholder="Search for character name"
        className="search__input"
      />
      <button disabled className="search__button">
        <span className="material-symbols-outlined">search</span>
      </button>
    </form>
  );
};

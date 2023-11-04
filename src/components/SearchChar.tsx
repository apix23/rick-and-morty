import "./SearchChar.css";

export const SearchChar = () => {
  return (
    <form className="search">
      <input
        type="text"
        placeholder="Search for character name"
        className="search__input"
      />
      <button className="search__button">
        <span className="material-symbols-outlined">search</span>
      </button>
    </form>
  );
};

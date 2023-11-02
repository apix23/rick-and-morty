import "./App.css";
import { CharacterCard } from "./components/CharacterCard";
import { Header } from "./components/Header";
import { Char, useChars } from "./hooks/useChars";

function App() {
  const { chars } = useChars();
  return (
    <div className="layout">
      <Header />
      <article className="layout__title">
        <h1>lista de personajes</h1>
        <hr />
      </article>
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
    </div>
  );
}

export default App;

import "./App.css";
import { Characters } from "./components/characters/Characters";
import { Header } from "./components/header/Header";
import { SearchChar } from "./components/searchInput/SearchChar";
import { Title } from "./components/title/Title";

function App() {
  return (
    <div className="layout">
      <Header />
      <SearchChar />
      <Title />
      <Characters />
    </div>
  );
}

export default App;

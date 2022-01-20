import "./App.css";
import "./css/media_queries.css";
import { Header } from "./components/Header";
import Main from "./components/Main";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

function App() {
  const [pokeSName, setPokeSName] = useState("");

  const handleSearch = (pokeSearchName) => {
    setPokeSName(pokeSearchName);
  };

  return (
    <>
      <Header />
      <SearchBar handleSearch={handleSearch} />
      <Main pokeSName={pokeSName} setPokeSName={setPokeSName} />
    </>
  );
}

export default App;

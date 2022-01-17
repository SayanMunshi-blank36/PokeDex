import "./App.css";
import "./css/media_queries.css";
import { Header } from "./components/Header";
import Main from "./components/Main";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <Main />
    </>
  );
}

export default App;

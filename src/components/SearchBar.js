import React, { useState } from "react";
import "../css/searchbar.css";
import "../css/media_queries.css";

const SearchBar = ({ handleSearch }) => {
  const [pokeSearchName, setPokeSearchName] = useState("");

  return (
    <div className="container">
      <input
        placeholder="Search by Name or Id of Pokemon"
        type="text"
        value={pokeSearchName}
        onChange={(e) => setPokeSearchName(e.target.value)}
        className="search_bar name_search_box"
      />
      {/* <input
        placeholder="Search by Id no."
        type="text"
        className="search_bar id_search_box"
      /> */}
      <button
        onClick={() => {
          handleSearch(pokeSearchName);
          setPokeSearchName("");
        }}
        className="search_btn"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;

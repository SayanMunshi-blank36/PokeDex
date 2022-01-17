import React from "react";
import "../css/searchbar.css";
import "../css/media_queries.css";

const SearchBar = () => {
  return (
    <div className="container">
      <input
        placeholder="Search by Name of Pokemon"
        type="text"
        className="search_bar name_search_box"
      />
      <input
        placeholder="Search by Id no."
        type="text"
        className="search_bar id_search_box"
      />
      <button className="search_btn">Search</button>
    </div>
  );
};

export default SearchBar;
